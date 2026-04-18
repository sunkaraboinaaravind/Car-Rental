import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CarCard from '../components/CarCard';

const Home = () => {
  const [cars, setCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/cars')
      .then(res => {
        setCars(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Featured <span className="gradient-text">Fleet</span></h2>
        
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem' }}>Loading our premium fleet...</div>
        ) : (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {cars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
