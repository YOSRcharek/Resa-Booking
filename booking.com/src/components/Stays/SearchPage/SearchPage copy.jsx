
   // src/App.js
   import React, { useEffect, useState } from 'react';
   import axios from 'axios';
export const SearchPage2 = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:3000/properties')
        .then(response => {
          setProperties(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the properties!', error);
        });
    }, []);
  
    return (
      <div className="App">
        <h1>Properties</h1>
        <ul>
          {properties.map(property => (
            <li key={property._id}>
              <h2>{property.name}</h2>
              <p>Location: {property.type}</p>
              <p>Price: ${property.place}</p>
              <p>Rating: {property.description}</p>
              {/* Add more property fields as needed */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  