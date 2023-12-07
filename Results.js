import React, { useState } from 'react';

function Results({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!data.length) {
    return <p>No results found.</p>;
  }

  const business = data[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div>
      <div>
        <h3>{business.name}</h3>
        <p>Rating: {business.rating}</p>
        <p>Price: {business.price}</p>
        <p>Address: {business.address}</p>
        <p>Phone: {business.phone}</p>
        <p>Website: <a href={business.url} target="_blank" rel="noopener noreferrer">Munch Time</a></p>
      </div>
     
    </div>
  );
}

export default Results;
