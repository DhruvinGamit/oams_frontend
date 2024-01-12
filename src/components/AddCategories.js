// AddCategories.js
import React, { useState } from 'react';

const AddCategories = () => {
  const [categoryData, setCategoryData] = useState({
    title: '',
    image: '', 
  });

  const handleInputChange = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/categories/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoryData),
      });

      if (response.ok) {
        console.log('Category added successfully');
      } else {
        console.error('Failed to add category:', response.statusText);
      }
    } catch (error) {
      console.error('Failed to add category:', error);
    }
  };

  return (
    <div>
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category Title"
          name="title"
          value={categoryData.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="image"
          value={categoryData.image}
          onChange={handleInputChange}
        />
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default AddCategories;
