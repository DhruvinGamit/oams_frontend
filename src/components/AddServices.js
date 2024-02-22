// import React, { useState, useEffect } from 'react';
// import '../styles/AddServices.css';

// const AddServices = () => {
//   const [serviceData, setServiceData] = useState({
//     userId: "65846a9c87b5a8348462baf5",
//     title: '',
//     description: '',
//     charges: null,
//     duration: null,
//     image: '',
//     address: {
//       street: '',
//       city: '',
//       state: '',
//       country: '',
//       zip: '',
//     },
//     categoryId: '', 
//   });

//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/home/categories');
//         if (response.ok) {
//           const data = await response.json();
//           setCategories(data.Categories);
//         } else {
//           console.error('Failed to fetch services:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Failed to fetch services:', error);
//       }
//     };

//     fetchServices();
//   }, []);

//   const { title, description, charges, duration, image, address, categoryId } = serviceData;

//   const onChange = (e) => {
//     if (e.target.name.startsWith('address.')) {
//       const updatedAddress = { ...address, [e.target.name.split('.')[1]]: e.target.value };
//       setServiceData({ ...serviceData, address: updatedAddress });
//     } else {
//       setServiceData({ ...serviceData, [e.target.name]: e.target.value });
//     }
//   };

//   const onCategoryChange = (e) => {
//     setServiceData({ ...serviceData, categoryId: e.target.value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:8080/api/users/addServices', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(serviceData),
//       });

//       if (response.ok) {
//         console.log('Service added successfully');
//         setServiceData({
//           userId: window.localStorage.getItem("UserId"),
//           title: '',
//           description: '',
//           charges: 0,
//           duration: 0,
//           image: '',
//           address: {
//             street: '',
//             city: '',
//             state: '',
//             country: '',
//             zip: '',
//           },
//           categoryId: '',
//         });
//       } else {
//         console.error('Failed to add service:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Failed to add service:', error);
//     }
//   };

//   return (
//     <div className="add-services-container">
//       <h2>Add Services</h2>
//       <form onSubmit={onSubmit} className="add-services-form">
//         <input
//           type="text"
//           placeholder="Title"
//           name="title"
//           value={title}
//           onChange={onChange}
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           name="description"
//           value={description}
//           onChange={onChange}
//         />
//         <input
//           type="number"
//           placeholder="Charges"
//           name="charges"
//           value={charges}
//           onChange={onChange}
//         />
//         <input
//           type="number"
//           placeholder="Duration"
//           name="duration"
//           value={duration}
//           onChange={onChange}
//         />
//         <input
//           type="text"
//           placeholder="Image URL"
//           name="image"
//           value={image}
//           onChange={onChange}
//         />
//         <select
//           name="categoryId"
//           value={categoryId}
//           onChange={onCategoryChange}
//         >
//           <option value="" disabled>Select Category</option>
//           {categories.map(category => (
//             <option key={category._id} value={category._id}>{category.title}</option>
//           ))}
//         </select>
//         <input
//           type="text"
//           placeholder="Street"
//           name="address.street"
//           value={address.street}
//           onChange={onChange}
//         />
//         <input
//           type="text"
//           placeholder="City"
//           name="address.city"
//           value={address.city}
//           onChange={onChange}
//         />
//         <input
//           type="text"
//           placeholder="State"
//           name="address.state"
//           value={address.state}
//           onChange={onChange}
//         />
//         <input
//           type="text"
//           placeholder="Country"
//           name="address.country"
//           value={address.country}
//           onChange={onChange}
//         />
//         <input
//           type="text"
//           placeholder="ZIP Code"
//           name="address.zip"
//           value={address.zip}
//           onChange={onChange}
//         />
//         <button type="submit">Add Service</button>
//       </form>
//     </div>
//   );
// };

// export default AddServices;

import React, { useState, useEffect } from 'react';
import '../styles/AddServices.css';

const AddServices = () => {
  const [serviceData, setServiceData] = useState({
    userId: window.localStorage.getItem("UserId"),
    title: '',
    description: '',
    charges: 0,
    duration: 0,
    image: '',
    address: {
      street: '',
      city: '',
      state: '',
      country: '',
      zip: '',
    },
    categoryId: '',
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/home/categories');
        if (response.ok) {
          const data = await response.json();
          setCategories(data.categories);
        } else {
          console.error('Failed to fetch services:', response.statusText);
        }
      } catch (error) {
        console.error('Failed to fetch services:', error);
      }
    };

    fetchServices();
  }, []);

  const { title, description, charges, duration, image, address, categoryId } = serviceData;

  const onChange = (e) => {
    if (e.target.name.startsWith('address.')) {
      const updatedAddress = { ...address, [e.target.name.split('.')[1]]: e.target.value };
      setServiceData({ ...serviceData, address: updatedAddress });
    } else {
      setServiceData({ ...serviceData, [e.target.name]: e.target.value });
    }
  };

  const onCategoryChange = (e) => {
    setServiceData({ ...serviceData, categoryId: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/users/addServices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(serviceData),
      });

      if (response.ok) {
        console.log('Service added successfully');
        setServiceData({
          userId: window.localStorage.getItem("UserId"),
          title: '',
          description: '',
          charges: 0,
          duration: 0,
          image: '',
          address: {
            street: '',
            city: '',
            state: '',
            country: '',
            zip: '',
          },
          categoryId: '',
        });
      } else {
        console.error('Failed to add service:', response.statusText);
      }
    } catch (error) {
      console.error('Failed to add service:', error);
    }
  };

  return (
    <div className="add-services-container">
      <h2>Add Services</h2>
      <form onSubmit={onSubmit} className="add-services-form">
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={description}
          onChange={onChange}
        />
        <input
          type="number"
          placeholder="Charges"
          name="charges"
          value={charges}
          onChange={onChange}
        />
        <input
          type="number"
          placeholder="Duration"
          name="duration"
          value={duration}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="image"
          value={image}
          onChange={onChange}
        />
        <select
          name="categoryId"
          value={categoryId}
          onChange={onCategoryChange}
        >
          <option value="" disabled>Select Category</option>
          {categories && categories.map(category => (
            <option key={category._id} value={category._id}>{category.title}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Street"
          name="address.street"
          value={address.street}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="City"
          name="address.city"
          value={address.city}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="State"
          name="address.state"
          value={address.state}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Country"
          name="address.country"
          value={address.country}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="ZIP Code"
          name="address.zip"
          value={address.zip}
          onChange={onChange}
        />
        <button type="submit">Add Service</button>
      </form>
    </div>
  );
};

export default AddServices;
