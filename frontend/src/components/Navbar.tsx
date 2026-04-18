import React, { useEffect, useState } from 'react';
import { Car, User, LogOut, ClipboardList, UserCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '1rem',
      left: '1rem',
      right: '1rem',
      zIndex: 1000,
      padding: '0.75rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0 auto',
      maxWidth: '1200px'
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.25rem', textDecoration: 'none' }}>
        <Car size={24} color="#6366f1" />
        <span className="gradient-text">EliteDrive</span>
      </Link>
      
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Home</Link>
        
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link to="/bookings" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ClipboardList size={18} /> My Bookings
            </Link>
            <Link to="/profile" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <UserCircle size={18} /> Profile
            </Link>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              paddingLeft: '1.5rem', 
              borderLeft: '1px solid rgba(255,255,255,0.1)' 
            }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text)' }}>{user.fullName?.split(' ')[0]}</span>
              <button 
                onClick={handleLogout}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: '#ef4444', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center', 
                  padding: '0.5rem',
                  borderRadius: '0.5rem',
                  transition: 'background 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'none'}
              >
                <LogOut size={18} />
              </button>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/login" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '0.9rem' }}>Login</Link>
            <Link to="/signup" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', textDecoration: 'none' }}>Sign Up</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
