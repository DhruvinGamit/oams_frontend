// import React, { useState } from 'react';
// import './AddServices.css';


// const AddServices = () => {
//   const [serviceData, setServiceData] = useState({
//     userId: "65846a9c87b5a8348462baf5", 
//     title: '',
//     description: '',
//     charges: 0,
//     duration: 0,
//     availability: false,
//   });

//   const { title, description, charges, duration, availability } = serviceData;

//   const onChange = (e) => {
//     setServiceData({ ...serviceData, [e.target.name]: e.target.value });
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

//       console.log("response from addService----------------------")
//       console.log(response)

//       if (response.ok) {
//         console.log('Service added successfully');
//         setServiceData({
//           userId: '',
//           title: '',
//           description: '',
//           charges: 0,
//           duration: 0,
//           availability: false,
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
//         <label>
//           Availability:
//           <input
//             type="checkbox"
//             name="availability"
//             checked={availability}
//             onChange={() =>
//               setServiceData({ ...serviceData, availability: !availability })
//             }
//           />
//         </label>
//         <button type="submit">Add Service</button>
//       </form>
//     </div>
//   );
// };

// export default AddServices;
import React, { useState } from 'react';
import './AddServices.css';

const AddServices = () => {
  const [serviceData, setServiceData] = useState({
    userId: "65846a9c87b5a8348462baf5",
    title: '',
    description: '',
    charges: 0,
    duration: 0,
    image: '', 
  });

  const { title, description, charges, duration, image } = serviceData;

  const onChange = (e) => {
    setServiceData({ ...serviceData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(" serviceData from addService------------")
      console.log(serviceData)
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
          userId: "65846a9c87b5a8348462baf5",
          title: '',
          description: '',
          charges: 0,
          duration: 0,
          image: '',
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
        <button type="submit">Add Service</button>
      </form>
    </div>
  );
};

export default AddServices;
