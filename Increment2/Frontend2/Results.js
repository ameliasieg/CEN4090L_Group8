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
          <p>Price: {business.price}</p>
          <p>Address: {business.address}</p>
          <p>Phone: {business.phone}</p>
          <p>Website: <a href={business.url} target="_blank" rel="noopener noreferrer">Click To Munch</a></p>
        </li>
      ))}
    </ul>
  );
}

export default Results;
