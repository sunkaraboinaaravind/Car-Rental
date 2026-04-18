import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Gauge, ShieldCheck } from 'lucide-react';

interface CarProps {
  car: {
    id: number;
    brand: String;
    model: String;
    pricePerDay: number;
    imageUrl: string;
    description: string;
  };
}

const CarCard: React.FC<CarProps> = ({ car }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="glass card"
      style={{ overflow: 'hidden', cursor: 'pointer' }}
    >
      <div style={{ height: '200px', overflow: 'hidden' }}>
        <img 
          src={car.imageUrl} 
          alt={`${car.brand} ${car.model}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{car.brand} {car.model}</h3>
          <span style={{ color: 'var(--accent)', fontWeight: 600 }}>${car.pricePerDay}/day</span>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', height: '3rem', overflow: 'hidden' }}>
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
            <ShieldCheck size={14} /> Insured
          </div>
        </div>
        
        <button className="btn-primary" style={{ width: '100%' }}>Book Now</button>
      </div>
    </motion.div>
  );
};

export default CarCard;
