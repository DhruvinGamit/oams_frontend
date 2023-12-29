import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
  const [service, setService] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/home/services/${id}`);
        if (response.ok) {
          const data = await response.json();
          setService(data.service);
        } else {
          console.error('Failed to fetch service details:', response.statusText);
        }
      } catch (error) {
        console.error('Failed to fetch service details:', error);
      }
    };

    fetchServiceDetails();
  }, [id]);

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div className="service-details-container">
      <h2>{service.title}</h2>
      <img
        src={service.image}
        alt={service.title}
        className="service-details-image"
      />
      <p>Description: {service.description}</p>
      <p>Charges: {service.charges}</p>
      <p>Duration: {service.duration}</p>
      {service.address && (
        <div className="address-details">
          <h3>Address</h3>
          <p>Street: {service.address.street}</p>
          <p>City: {service.address.city}</p>
          <p>State: {service.address.state}</p>
          <p>Country: {service.address.country}</p>
          <p>ZIP Code: {service.address.zip}</p>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
