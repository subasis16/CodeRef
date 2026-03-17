import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../context/useAuth';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const { updatePassword, session } = useAuth();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const [successMessage, setSuccessMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  // If there's no session, we can't reset the password. 
  // Normally Supabase creates a temporary session when you click the email link.
  React.useEffect(() => {
    // We wait a moment for the session to initialize
    const timer = setTimeout(() => {
      if (!session) {
        console.log("No session found for password reset");
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [session]);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      const result = await updatePassword(newPassword);

      if (result.error) {
        setError(result.error.message || 'Failed to update password.');
      } else {
        setSuccessMessage('Password updated successfully! Redirecting to dashboard...');
        setTimeout(() => {
          navigate('/dashboard', { replace: true });
        }, 2000);
      }
    } catch (err) {
      setError('An unexpected error occurred.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-ossium-darker text-white font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 pt-24 pb-24">
        <div className="w-full max-w-md bg-[#121212] border border-white/5 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-black text-white mb-2">
              Set New Password
            </h1>
            <p className="text-ossium-muted">
              Enter your new password below
            </p>
          </div>

          {!session && (
            <div className="mb-4 p-3 bg-white/5 border border-white/10 rounded-lg text-sm text-center text-ossium-muted">
              Waiting for secure session... If this takes too long, your link may have expired.
            </div>
          )}

          <form onSubmit={handleResetPassword} className="space-y-4 mb-6">
            {successMessage && (
              <div className="bg-ossium-accent/10 border border-ossium-accent/50 text-ossium-accent p-3 rounded-lg text-sm text-center">
                {successMessage}
              </div>
            )}
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg text-sm text-center">
                {error}
              </div>
            )}

            <div>
              <input
                type="password"
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-ossium-muted focus:outline-none focus:border-ossium-accent focus:ring-1 focus:ring-ossium-accent transition-all"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-ossium-muted focus:outline-none focus:border-ossium-accent focus:ring-1 focus:ring-ossium-accent transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !session}
              className="w-full bg-ossium-accent text-ossium-darker font-bold py-3 px-4 rounded-xl hover:bg-ossium-accent-hover transition-all duration-300 disabled:opacity-50"
            >
              {loading ? 'Updating...' : 'Update Password'}
            </button>
          </form>

          <div className="text-center">
            <button
              onClick={() => navigate('/login')}
              className="text-sm text-ossium-muted hover:text-white transition-colors"
            >
              ← Back to Login
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResetPassword;
