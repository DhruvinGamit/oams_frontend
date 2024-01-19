// ServiceAppointments.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServiceAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        // Fetch appointments for the service owner
        const response = await fetch('http://localhost:8080/api/appointments/service', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem('LoginToken')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setAppointments(data.appointments);
        } else {
          console.error('Failed to fetch appointments:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Service Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointment requests found for your services.</p>
      ) : (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment._id}>
              <Link to={`/appoint/${appointment._id}`}>
                Appointment for Service ID: {appointment.serviceId} - Status: {appointment.status}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceAppointments;
