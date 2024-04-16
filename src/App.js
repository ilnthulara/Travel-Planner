import React, { useState } from 'react';
import TravelForm from './components/TravelForm';
import TripList from './components/TripList';
import './App.css';

function App() {
  const [trips, setTrips] = useState([]);

  const addTrip = (newTrip) => {
    setTrips([...trips, newTrip]);
  };

  return (
    <div className="app">
      <h1>Travel Planner</h1>
      <TravelForm onAddTrip={addTrip} />
      <TripList trips={trips} />
    </div>
  );
}

export default App;
