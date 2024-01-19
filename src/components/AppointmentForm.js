// // AppointmentForm.js
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

// const AppointmentForm = () => {
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const { id } = useParams();

//   const handleAppointmentSubmit = () => {
//     // Handle appointment submission logic here
//     console.log('Appointment submitted:', { date, time, serviceId: id });
//     // You can redirect or perform other actions after submission
//   };

//   return (
//     <div>
//       <h2>Book Appointment</h2>
//       <form onSubmit={handleAppointmentSubmit}>
//         <label htmlFor="date">Date:</label>
//         <input
//           type="date"
//           id="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           required
//         />
//         <br />
//         <label htmlFor="time">Time:</label>
//         <input
//           type="time"
//           id="time"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//           required
//         />
//         <br />
//         <button type="submit">Submit Appointment</button>
//       </form>
//     </div>
//   );
// };

// export default AppointmentForm;
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AppointmentForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();

    const selectedDateTime = new Date(`${date}T${time}`);
    const currentDateTime = new Date();

    if (selectedDateTime <= currentDateTime) {
      alert('Please select a future date and time for the appointment.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: window.localStorage.getItem("UserId"),
          serviceId: id,
          date: selectedDateTime.toISOString(),
          time: time,
        }),
      });

      console.log(window.localStorage.getItem("UserId"));

      if (response.ok) {
        console.log('Appointment submitted successfully!');
        // You can redirect or perform other actions after submission
        navigate('/home'); // Redirect to the home page after submission
      } else {
        console.error('Failed to submit appointment:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting appointment:', error);
    }
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <form onSubmit={handleAppointmentSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <br />
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
