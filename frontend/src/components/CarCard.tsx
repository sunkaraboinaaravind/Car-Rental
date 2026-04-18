import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Gauge, MapPin, User as UserIcon } from 'lucide-react';
import BookingModal from './BookingModal';
import { useNavigate } from 'react-router-dom';

interface CarProps {
  car: {
    id: number;
    brand: String;
    model: String;
    pricePerDay: number;
    imageUrl: string;
    description: string;
    location?: string;
  };
}

const CarCard: React.FC<CarProps> = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  const handleBookClick = () => {
    if (!user) {
      navigate('/login');
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <motion.div 
        whileHover={{ y: -10 }}
        className="glass card"
        style={{ overflow: 'hidden', cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
          <img 
            src={car.imageUrl} 
            alt={`${car.brand} ${car.model}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ 
            position: 'absolute', 
            top: '1rem', 
            right: '1rem', 
            background: 'rgba(16, 185, 129, 0.9)', 
            padding: '0.25rem 0.75rem', 
            borderRadius: '2rem',
            fontSize: '0.8rem',
            fontWeight: 600
          }}>
            Available
          </div>
        </div>
        <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{car.brand}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{car.model}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1.2rem' }}>₹{car.pricePerDay.toLocaleString('en-IN')}</span>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>per day</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontSize: '0.8rem', marginBottom: '1rem' }}>
            <MapPin size={14} /> {car.location || 'Hyderabad, India'}
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem', flexGrow: 1 }}>
            {car.description}
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Calendar size={14} /> 2024
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Gauge size={14} /> Auto
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <UserIcon size={14} /> 5 Seats
            </div>
          </div>
          
          <button className="btn-primary" style={{ width: '100%' }} onClick={handleBookClick}>Book Now</button>
        </div>
      </motion.div>

      <BookingModal 
        car={car}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => {
          setIsModalOpen(false);
          navigate('/bookings');
        }}
      />
    </>
  );
};

export default CarCard;
