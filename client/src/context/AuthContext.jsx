import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const value = {
    session,
    user,
    loading,
    signInWithGithub: async () => {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
      })
      if (error) console.error("Error signing in with Github:", error);
    },

    signInWithEmail: async (email, password) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) console.error("Sign in error:", error);
      return { error, data };
    },
    signUpWithEmail: async (email, password) => {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) console.error("Sign up error:", error);
      else console.log("Sign up success:", data);
      return { error, data };
    },
    signOut: async () => {
      const { error } = await supabase.auth.signOut();
      if (error) console.error("Error signing out:", error);
    }
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
