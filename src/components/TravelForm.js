import React, { useState } from 'react';

//Functional Component Declaration
//It takes a prop named onAddTrip. This prop is a function that will be called when the form is submitted to add a new trip.   
function TravelForm({ onAddTrip }) {
    //State
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');

  //Form Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both destination and dates are provided
    if (destination.trim() === '' || dates.trim() === '') {
        //shows an alert message and returns, preventing the addition of an incomplete trip
      alert('Please enter destination and dates.');
      return;
    }

    //If both fields are filled, a new trip object (newTrip) is created with trimmed destination and dates.
    const newTrip = {
      destination: destination.trim(),
      dates: dates.trim(),
    };

    onAddTrip(newTrip);

    // Clear form fields
    setDestination('');
    setDates('');
  };

  return (
    <form onSubmit={handleSubmit} className="travel-form">
      <label>
        Destination:
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </label>
      <label>
        Dates:
        <input type="date" value={dates} onChange={(e) => setDates(e.target.value)} />
      </label>
      <button type="submit">Add Trip</button>
    </form>
  );
}

export default TravelForm;
