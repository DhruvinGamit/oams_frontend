import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import '../styles/Category.css';

const Category = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState({});
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/category/${categoryId}`);
        if (response.ok) {
          const data = await response.json();
          setCategory(data.category);
          setServices(data.services);
        } else {
          console.error('Failed to fetch category:', response.statusText);
        }
      } catch (error) {
        console.error('Failed to fetch category:', error);
      }
    };

    fetchCategory();
  }, [categoryId]);

  return (
    <div className="category-container">
      <h2 className="category-title">{category.title}</h2>
      <div className="category-description">{category.description}</div>
      <br />
      <h2 className="services-title">Services in this Category</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service._id} className="service-item" style={{ backgroundColor: '#3B3C36', color: 'white' }}>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
