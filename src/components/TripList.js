import React from "react";

//Functional Component Declaration
//It takes a prop named trips. The trips prop is an array of planned trips that will be displayed by this component.
function TripList({ trips }) {
  return (
    <div className="trip-list">
      <h2>Planned Trips</h2>
      {/* If trips.length is 0, it renders a p element saying "No trips planned yet." If there are trips, it renders a 
      ul containing a list of trips. */}
      {trips.length === 0 ? (
        <p>No trips planned yet.</p>
      ) : (
        <ul>
          {trips.map((trip, index) => (
            <li key={index}>
              <strong>{trip.destination}</strong> - {trip.dates}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TripList;
