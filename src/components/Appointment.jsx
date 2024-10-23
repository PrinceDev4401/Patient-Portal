import React, { useState } from "react";
import "../App.css";

const Appointment = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: "2024-10-15",
      time: "10:00 AM",
      doctor: "Dr. Boadu",
      status: "Confirmed",
    },
    {
      id: 2,
      date: "2024-09-05",
      time: "11:30 AM",
      doctor: "Dr. Prince",
      status: "Completed",
      notes: "Follow-up recommended",
    },
  ]);

  const [newAppointment, setNewAppointment] = useState({
    date: "",
    time: "",
    doctor: "",
  });

  // Handle form submission for new appointment booking
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setAppointments([
      ...appointments,
      { ...newAppointment, id: Date.now(), status: "Pending" },
    ]);
    setNewAppointment({ date: "", time: "", doctor: "" }); // Clear form
  };

  // Handle input change for booking form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="appointment">
      <h2>APPOINTMENT SECTION</h2>

      {/* Upcoming Appointments */}
      <h3>UPCOMING APPOINTMENTS</h3>
      <ul>
        {appointments
          .filter((appt) => appt.status !== "Completed")
          .map((appt) => (
            <li key={appt.id}>
              <strong>Date:</strong> {appt.date} | <strong>Time:</strong>{" "}
              {appt.time} |<strong>Doctor:</strong> {appt.doctor} |{" "}
              <strong>Status:</strong> {appt.status}
            </li>
          ))}
      </ul>

      {/* Booking Form */}
      <h3>Book a New Appointment</h3>
      <form onSubmit={handleBookingSubmit}>
        <div className="input-box2">
          <span className="details2">Date</span>
          <input
            type="date"
            name="date"
            value={newAppointment.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <br />
        <div className="input-box2">
          <span className="details2">Time</span>
          <input
            type="time"
            name="time"
            value={newAppointment.time}
            onChange={handleInputChange}
            required
          />
        </div>
        <br />
        <div className="input-box2">
          <span className="details2">Doctor</span>
          <input
            type="text"
            name="doctor"
            value={newAppointment.doctor}
            onChange={handleInputChange}
            placeholder="Doctor's name"
            required
          />
        </div>
        <br />
        <button className="button" type="submit">
          Book Appointment
        </button>
      </form>

      {/* Appointment History */}
      <h3>APPOINTMENT HISTORY</h3>
      <ul>
        {appointments
          .filter((appt) => appt.status === "Completed")
          .map((appt) => (
            <li key={appt.id}>
              <strong>Date:</strong> {appt.date} | <strong>Time:</strong>{" "}
              {appt.time} |<strong>Doctor:</strong> {appt.doctor} |{" "}
              <strong>Notes:</strong> {appt.notes}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Appointment;
