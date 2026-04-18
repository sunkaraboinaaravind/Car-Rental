import React from 'react';
import { Car, Menu, User } from 'lucide-react';

const Navbar = () => {
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.25rem' }}>
        <Car size={24} color="#6366f1" />
        <span className="gradient-text">EliteDrive</span>
      </div>
      
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <a href="/" style={{ color: 'var(--text)', textDecoration: 'none' }}>Home</a>
        <a href="/fleet" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Fleet</a>
        <a href="/bookings" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>My Bookings</a>
        <div style={{ padding: '0.5rem', borderRadius: '50%', background: 'var(--surface)', display: 'flex', cursor: 'pointer' }}>
          <User size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
