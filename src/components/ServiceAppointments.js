

// ServiceAppointments.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ServiceAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const userId = window.localStorage.getItem("UserId");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/appointments/ServiceAppointments?userId=${userId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem(
                "LoginToken"
              )}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setAppointments(data.appointments);
        } else {
          console.error(
            "Failed to fetch appointments:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  const handleAcceptReject = async (appointmentId, status) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/appointments/${appointmentId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("LoginToken")}`,
          },
          body: JSON.stringify({ status }),
        }
      );

      if (response.ok) {
        console.log(`Appointment ${status} successfully`);
        // Add logic to notify the server about the status change
        notifyServer(appointmentId, status);
      } else {
        console.error(`Failed to ${status} appointment:`, response.statusText);
      }
    } catch (error) {
      console.error(`Error ${status} appointment:`, error);
    }
  };

  const notifyServer = async (appointmentId, status) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/appointments/notify`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("LoginToken")}`,
          },
          body: JSON.stringify({ appointmentId, status }),
        }
      );

      if (response.ok) {
        console.log(`Server notified about the status change.`);
      } else {
        console.error(
          "Failed to notify the server about the status change:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error notifying the server:", error);
    }
  };
  

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
                Appointment for Service ID: {appointment.serviceId} - Status:{" "}
                {appointment.status}
              </Link>
              {appointment.status === "pending" && (
                <div>
                  <button
                    onClick={() => handleAcceptReject(appointment._id, "accepted")}
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleAcceptReject(appointment._id, "rejected")}
                  >
                    Reject
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceAppointments;
