import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/home/categories');
        if (response.ok) {
          const data = await response.json();
          setCategories(data.Categories);
        } else {
          console.error('Failed to fetch services:', response.statusText);
        }
      } catch (error) {
        console.error('Failed to fetch services:', error);
      }
    };

    fetchServices();
  }, []);

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
      <h2 className="services-title">Categories</h2>
      <br/>
      <br/>
      <div className="categories-container">
         <h2 className="categories-title"></h2>
         <br/>
        <div className="category-grid">
        {categories.map((category) => (
          <Link to={`/category/${category._id}`} className="view-button2">
          <div key={category._id} className="service-item" style={{ backgroundImage : `url(${category.image})`, color : 'black' , width: '227px', height: '80px', backgroundRepeat : 'no-repeat' , }}>
            <h4 className="category-title">{category.title}</h4>
          </div>
          </Link>
        ))}
      </div>
      </div>
      <br/><br/>
      <h2 className="services-title">Services</h2>
      <br/> <br/>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service._id} className="service-item" style={{backgroundColor : '#3B3C36' , color : 'white'}}>
            <img
              src={service.image}
              alt="Service"
              className="service-image"
              style={{ width: '200px', height: '150px', objectFit: 'cover' }}
            />
            <br></br>
            <h4 className="service-title">{service.title}</h4>
            <br></br>
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
