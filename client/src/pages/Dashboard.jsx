
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Notes from '../components/Notes';
import { FiSearch, FiBook, FiLayout, FiZap, FiMenu, FiUser, FiLogOut, FiShield, FiClock } from 'react-icons/fi';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import { supabase } from '../lib/supabaseClient';

const Dashboard = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTab, setCurrentTab] = useState(location.state?.tab || 'dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(user?.user_metadata?.avatar_url || null);

  useEffect(() => {
    if (user?.user_metadata?.avatar_url) {
      setAvatarUrl(user.user_metadata.avatar_url);
    }
  }, [user]);

  const uploadAvatar = async (event) => {
    try {
      setUploading(true);
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}-${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      // Upload image to 'avatars' bucket
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      // Update user metadata
      const { error: updateError } = await supabase.auth.updateUser({
        data: { avatar_url: publicUrl }
      });

      if (updateError) {
        throw updateError;
      }

      setAvatarUrl(publicUrl);
      alert('Profile picture updated!');
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  const removeAvatar = async () => {
    try {
      setUploading(true);
      
      const { error } = await supabase.auth.updateUser({
        data: { avatar_url: null }
      });

      if (error) throw error;

      setAvatarUrl(null);
      alert('Profile picture removed.');
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    if (location.state?.tab) {
      setCurrentTab(location.state.tab); // eslint-disable-line react-hooks/set-state-in-effect
    } else if (location.pathname === '/dashboard' && !location.state?.tab) {
      // Intentionally do nothing here to allow internal state to persist
      // unless we specifically want to reset on navigation
    }
  }, [location.state, location.pathname]);



  return (
    <div className="min-h-screen bg-ossium-darker text-ossium-text flex">
      <Sidebar
        activeTab={currentTab}
        onTabChange={setCurrentTab}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="flex-1 w-full min-w-0 md:ml-64 ml-0 p-4 md:p-8 transition-all duration-300">
        {/* Search & Header */}
        <div className="sticky top-0 z-30 bg-ossium-darker/80 backdrop-blur-md pb-6 pt-2">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  className="md:hidden text-white p-2 -ml-2 hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsSidebarOpen(true)}
                >
                  <FiMenu size={24} />
                </button>
                <h1 className="text-2xl font-bold capitalize text-white">{currentTab === 'dashboard' ? 'My Profile' : currentTab}</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto mt-4">

          {/* User Profile / Dashboard Home */}
          {currentTab === 'dashboard' && (
            <div className="flex flex-col items-center justify-center py-10">
              {user ? (
                <div className="w-full max-w-4xl space-y-12">
                  {/* Classic Profile Header */}
                  <div className="flex flex-col md:flex-row items-center gap-8 pb-12 border-b border-white/5">
                    <div className="relative group/avatar">
                      <div className="w-32 h-32 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-4xl font-light text-white overflow-hidden shadow-2xl relative">
                        {uploading ? (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-10">
                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          </div>
                        ) : null}
                        
                        {avatarUrl ? (
                          <img 
                            src={avatarUrl} 
                            alt="Profile" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/avatar:scale-110" 
                          />
                        ) : (
                          <FiUser size={48} className="text-white/20" />
                        )}

                        <label 
                          htmlFor="avatar-upload" 
                          className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity cursor-pointer text-[10px] font-bold uppercase tracking-widest text-white gap-2"
                        >
                          <FiUser size={20} />
                          Change
                        </label>
                      </div>
                      <input
                        type="file"
                        id="avatar-upload"
                        accept="image/*"
                        onChange={uploadAvatar}
                        disabled={uploading}
                        className="hidden"
                      />
                    </div>
                    <div className="text-center md:text-left space-y-2">
                      <p className="text-white/40 font-mono text-xs tracking-widest">{user.email}</p>
                      {avatarUrl && (
                        <button 
                          onClick={removeAvatar}
                          className="text-[10px] uppercase tracking-[0.2em] text-red-400/50 hover:text-red-400 transition-colors font-bold"
                        >
                          Remove Photo
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Clean Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Last Active Session</p>
                      <div className="flex items-baseline gap-3">
                        <span className="text-2xl font-bold text-white">{new Date(user.last_sign_in_at).toLocaleDateString()}</span>
                        <span className="text-sm font-mono text-white/40">{new Date(user.last_sign_in_at).toLocaleTimeString()}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Unique Identifier</p>
                      <p className="font-mono text-xs text-white/60 bg-white/5 px-4 py-2 rounded-lg border border-white/5 break-all">
                        {user.id}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center bg-[#121212] border border-white/5 rounded-xl p-8">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-ossium-muted">
                    <FiUser size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">Login to Dashboard</h2>
                  <p className="text-ossium-muted max-w-md mb-8">
                    Access your profile, manage your settings, and view your personal snippets.
                  </p>
                  <Link
                    to="/login"
                    className="px-8 py-3 bg-ossium-accent text-ossium-darker font-bold rounded-lg hover:bg-ossium-accent-hover transition-all"
                  >
                    Log In to Continue
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Notes Section */}
          {currentTab === 'notes' && (
            user ? (
              <Notes />
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-ossium-muted">
                  <FiBook size={32} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Login to access Notes</h2>
                <p className="text-ossium-muted max-w-md mb-8">
                  Create, save, and manage your personal coding notes and cheat sheets securely in the cloud.
                </p>
                <Link
                  to="/login"
                  className="px-8 py-3 bg-ossium-accent text-ossium-darker font-bold rounded-lg hover:bg-ossium-accent-hover transition-all"
                >
                  Log In to Continue
                </Link>
              </div>
            )
          )}

          {/* Work in progress placeholder for other tabs */}
          {currentTab !== 'dashboard' && currentTab !== 'notes' && (
            <div className="flex flex-col items-center justify-center py-20 text-ossium-muted">
              <h3 className="text-xl font-bold text-white mb-2">Work in Progress</h3>
              <p>The {currentTab} section is currently under development.</p>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default Dashboard;
