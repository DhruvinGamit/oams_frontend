import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/home/services');
        if (response.ok) {
          const data = await response.json();
          setServices(data.services);
        } else {
          console.error('Failed to fetch services:', response.statusText);
        }
      } catch (error) {
        console.error('Failed to fetch services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="services-container">
      <h2 className="services-title">Welcome to the Home Page</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service._id} className="service-item">
            <img
              src={service.image}
              alt="Service"
              className="service-image"
              style={{ width: '200px', height: '150px', objectFit: 'cover' }}
            />
            <h4 className="service-title">{service.title}</h4>
            <p className="service-description">Description: {service.description}</p>
            <p className="service-charges">Charges: {service.charges}</p>
            <p className="service-duration">Duration: {service.duration}</p>
            
            <Link to={`/services/${service._id}`} className="view-button">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
