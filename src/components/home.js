// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/Home.css';

// const Home = ({  }) => {
//   const [services, setServices] = useState([]);
//   const [categories, setCategories] = useState([]);

//   console.log("home page : " , window.localStorage.getItem("UserId"))

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/home/categories');
//         if (response.ok) {
//           const data = await response.json();
//           setCategories(data.categories);
//         } else {
//           console.error('Failed to fetch categories:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Failed to fetch categories:', error);
//       }
//     };

//     fetchServices();
//   }, []);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/home/services');
//         if (response.ok) {
//           const data = await response.json();
//           setServices(data.services);
//         } else {
//           console.error('Failed to fetch services:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Failed to fetch services:', error);
//       }
//     };

//     fetchServices();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/home/services/${id}`, {
//         method: 'DELETE',
//       });
//       if (response.ok) {
//         setServices(services.filter((service) => service._id !== id));
//       } else {
//         console.error('Failed to delete service:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Failed to delete service:', error);
//     }
//   };

//   return (
//     <div className="services-container">
//       <h2 className="services-title">Categories</h2>
//       <br />
//       <br />
//       <div className="categories-container">
//         <h2 className="categories-title"></h2>
//         <br />
//         <div className="category-grid">
//           {categories && categories.length > 0 ? (
//             categories.map((category) => (
//               <Link key={category._id} to={`/category/${category._id}`} className="view-button2">
//                 <div
//                   key={category._id}
//                   className="service-item"
//                   style={{
//                     backgroundImage: `url(${category.image})`,
//                     color: 'black',
//                     width: '233px',
//                     height: '80px',
//                     backgroundRepeat: 'no-repeat',
//                   }}
//                 >
//                   {/* <h4 className="category-title">{category.title}</h4> */}
//                 </div>
//               </Link>
//             ))
//           ) : (
//             <p>No categories available.</p>
//           )}
//         </div>
//       </div>
//       <br />
//       <br />
//       <h2 className="services-title">Services</h2>
//       <br /> <br />
//       <div className="services-grid">
//         {services && services.length > 0 ? (
//           services.map((service) => (
//             <div key={service._id} className="service-item">
//               <img
//                 src={service.image}
//                 alt="Service"
//                 className="service-image"
//                 style={{ width: '200px', height: '150px', objectFit: 'cover' }}
//               />
//               <br></br>
//               <h4 className="service-title">{service.title}</h4>
//               <br></br>
//               <p className="service-description">
//                 Description: {service.description.length > 110 ? `${service.description.slice(0, 110)}...` : service.description}
//               </p>
//               <p className="service-charges">Charges: {service.charges}</p>
//               <p className="service-duration">Duration: {service.duration}</p>

//               <div className="button-container">
//                 <Link to={`/services/${service._id}`} className="view-button">
//                   View Details
//                 </Link>
//                 {window.localStorage.getItem("UserId") === service.userId && (
//                   <>
//                     <button className="delete-button" onClick={() => handleDelete(service._id)}>Delete</button>
//                     <Link className="update-button" to={`/services/edit/${service._id}`} >
//                       Update
//                     </Link>
//                   </>
//                 )}
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No services available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;

//--------------------------------------------------------------------------------------------------------------------

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = ({}) => {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/home/categories"
        );
        if (response.ok) {
          const data = await response.json();
          setCategories(data.categories);
        } else {
          console.error("Failed to fetch categories:", response.statusText);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/home/services");
        if (response.ok) {
          const data = await response.json();
          setServices(data.services);
        } else {
          console.error("Failed to fetch services:", response.statusText);
        }
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };

    fetchServices();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/home/services/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setServices(services.filter((service) => service._id !== id));
      } else {
        console.error("Failed to delete service:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to delete service:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter services based on search query
  const filteredServices = services.filter(
    (service) =>
      service.address.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.address.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.address.zip.includes(searchQuery) ||
      service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="services-container">
      <h2 className="search-title">Search Services</h2>
      <input
        type="text"
        placeholder="Enter Title, City, ZIP Code or State"
        value={searchQuery}
        onChange={handleSearch}
        style={{ width: "300px" }}
      />

      <br />
      <br />
      <h2 className="categories-title">Categories</h2>
      <br />
      <br />
      <div className="categories-container">
        <div className="category-grid">
          {categories && categories.length > 0 ? (
            categories.map((category) => (
              <Link
                key={category._id}
                to={`/category/${category._id}`}
                className="view-button2"
              >
                <div
                  key={category._id}
                  className="service-item"
                  style={{
                    backgroundImage: `url(${category.image})`,
                    color: "black",
                    width: "233px",
                    height: "80px",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* <h4 className="category-title">{category.title}</h4> */}
                </div>
              </Link>
            ))
          ) : (
            <p>No categories available.</p>
          )}
        </div>
      </div>
      <br />
      <br />
      <h2 className="services-title">Services</h2>
      <div className="services-grid">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div key={service._id} className="service-item">
              <img
                src={service.image}
                alt="Service"
                className="service-image"
                style={{ width: "200px", height: "150px", objectFit: "cover" }}
              />
              <br></br>
              <h4 className="service-title">{service.title}</h4>
              <br></br>
              <p className="service-description">
                Description:{" "}
                {service.description.length > 110
                  ? `${service.description.slice(0, 110)}...`
                  : service.description}
              </p>
              <p className="service-charges">Charges: {service.charges}</p>
              <p className="service-duration">Duration: {service.duration}</p>

              <div className="button-container">
                <Link to={`/services/${service._id}`} className="view-button">
                  View Details
                </Link>
                {window.localStorage.getItem("UserId") === service.userId && (
                  <>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(service._id)}
                    >
                      Delete
                    </button>
                    <Link
                      className="update-button"
                      to={`/services/edit/${service._id}`}
                    >
                      Update
                    </Link>
                  </>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No services match the search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
