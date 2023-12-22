
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
      <p>Description: {service.description}</p>
      <p>Charges: {service.charges}</p>
      {/* Add more service details as needed */}
    </div>
  );
};

export default ServiceDetails;
