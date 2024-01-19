// RequestedServices.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/RequestedServices.css";

const RequestedServices = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = window.localStorage.getItem("UserId");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/appointments/user?userId=${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setAppointments(data.appointments);
        } else {
          const errorMessage = await response.text();
          setError(`Failed to fetch appointments: ${errorMessage}`);
        }
      } catch (error) {
        setError(`Error fetching appointments: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [userId]);

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      console.log("Deleting appointment with ID:", appointmentId);
      const response = await fetch(
        `http://localhost:8080/api/appointments/${appointmentId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setAppointments((prevAppointments) =>
          prevAppointments.filter(
            (appointment) => appointment._id !== appointmentId
          )
        );
      } else {
        const errorMessage = await response.text();
        setError(`Failed to delete appointment: ${errorMessage}`);
      }
    } catch (error) {
      setError(`Error deleting appointment: ${error.message}`);
    }
  };

  return (
    <div className="container">
      <h2>Requested Services</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {error ? (
            <p>{error}</p>
          ) : (
            <>
              {appointments.length === 0 ? (
                <p>No appointment requests found.</p>
              ) : (
                <ul className="ul_appoint">
                  {appointments.map((appointment) => (
                    <li className="li_appoint" key={appointment._id}>
                      <Link to={`/appoint/${appointment._id}`} className="link">
                        Appointment for Service ID: {appointment.serviceId._id}{" "}
                        - Service Name: {appointment.serviceId.title}
                      </Link>

                      <button
                        className="deleteButton"
                        onClick={() => handleDeleteAppointment(appointment._id)}
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default RequestedServices;
