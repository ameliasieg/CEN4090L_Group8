import React from 'react';

function Results({ data }) {
  if (!data.length) {
    return <p>No results found.</p>;
  }

  return (
    <ul>
      {data.map((business, index) => (
        <li key={index}>
          <h3>{business.name}</h3>
          <p>Rating: {business.rating}</p>
          <p>Address: {business.address}</p>
          <p>Phone: {business.phone}</p>
        </li>
      ))}
    </ul>
  );
}

export default Results;
