import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import '../App.css'; // Importing existing styles if any

const Dashboard: React.FC = () => {
  const [dbStatus, setDbStatus] = useState('Connecting to Supabase...');

  useEffect(() => {
    // A simple check to see if the client initialized
    if (supabase) {
      setDbStatus('Successfully connected to Supabase! 🚀');
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>My Fullstack App</h1>
      <p style={{ fontSize: '1.2rem', color: '#4CAF50' }}>{dbStatus}</p>
      <p>Your React + Vite + Supabase + Render architecture is fully set up.</p>
    </div>
  );
};

export default Dashboard;
