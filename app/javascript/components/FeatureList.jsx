import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentForm from './CommentForm';
import '../stylesheets/styles.css';

const FeatureList = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await axios.get('/api/features');
        if (response.data && response.data.features) {
          setFeatures(response.data.features);
        } else {
          console.error('Error: Datos de características no encontrados en la respuesta.');
        }
      } catch (error) {
        console.error('Error al cargar características:', error);
      }
    };

    fetchFeatures();
  }, []); 

  return (
    <div className="container">
      {<div>
          <h2>Ultimos datos sísmicos registrados</h2>
          <ul>
            {features.map(feature => (
              <li key={feature.id}>
                <h3>{feature.title}</h3>
                <p>Magnitude: {feature.magnitude}</p>
                <p>Place: {feature.place}</p>
                <p>Time: {feature.time}</p>
                <p>Tsunami: {feature.tsunami}</p>
                <p>Mag Type: {feature.mag_type}</p>
                <p>Longitude: {feature.coordinates.longitude}</p>
                <p>Latitude: {feature.coordinates.latitude}</p>
                <CommentForm featureId={feature.id} />
              </li>
            ))}
          </ul>
        </div>
       }
    </div>
    
  );
};

export default FeatureList;
