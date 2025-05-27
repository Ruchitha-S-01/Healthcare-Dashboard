import React from "react";
import avatar from "../assets/user-avatar.png";
import { FiChevronLeft, FiChevronRight, FiPlus } from "react-icons/fi";
import "../styles/RightPanel.css";

export default function RightPanel() {
  return (
    <aside className="right-panel">
      {/* header controls */}
      <div className="panel-header">
        <div className="avatar-wrapper">
          <img src={avatar} alt="user" />
        </div>
        <button className="add-btn">
          <FiPlus />
        </button>
      </div>

      {/* calendar */}
      <div className="calendar">
        <div className="calendar-top">
          <span className="month">October 2021</span>
          <div className="arrows">
            <FiChevronLeft />
            <FiChevronRight />
          </div>
        </div>

        <table className="calendar-table">
          <thead>
            <tr>
              {[
                "Mon",
                "Tues",
                "Wed",
                "Thurs",
                "Fri",
                "Sat",
                "Sun",
              ].map((d) => (
                <th key={d}>{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* first row */}
            <tr>
              <td className="date-cell">25</td>
              <td className="date-cell active">26</td>
              <td className="date-cell">27</td>
              <td className="date-cell">28</td>
              <td className="date-cell">29</td>
              <td className="date-cell">30</td>
              <td className="date-cell disabled">31</td>
            </tr>
            {/* second row: time slots */}
            <tr>
              <td className="time-slot">10:00</td>
              <td className="time-slot">08:00</td>
              <td className="time-slot">12:00</td>
              <td className="time-slot">10:00</td>
              <td className="time-slot">—</td>
              <td className="time-slot selected">12:00</td>
              <td className="time-slot">09:00</td>
            </tr>
            {/* third row */}
            <tr>
              <td className="time-slot">11:00</td>
              <td className="time-slot selected">09:00</td>
              <td className="time-slot">—</td>
              <td className="time-slot selected gray">11:00</td>
              <td className="time-slot">14:00</td>
              <td className="time-slot">14:00</td>
              <td className="time-slot">10:00</td>
            </tr>
            {/* fourth row */}
            <tr>
              <td className="time-slot">12:00</td>
              <td className="time-slot">10:00</td>
              <td className="time-slot selected gray">13:00</td>
              <td className="time-slot">—</td>
              <td className="time-slot selected gray">16:00</td>
              <td className="time-slot selected gray">15:00</td>
              <td className="time-slot">11:00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* appointment cards */}
<div className="appointment-row">
  <div className="appointment-card dentist">
    <div className="card-header">
      <span className="title">Dentist</span>
      <span className="icon">🦷</span>
    </div>
    <div className="time">09:00–11:00</div>
    <div className="doctor">Dr. Cameron Williamson</div>
  </div>

  <div className="appointment-card physio">
    <div className="card-header">
      <span className="title">Physiotherapy Appointment</span>
      <span className="icon">💪</span>
    </div>
    <div className="time">11:00–12:00</div>
    <div className="doctor">Dr. Kevin Djones</div>
  </div>
</div>


      {/* upcoming schedule */}
      <div className="upcoming">
  <h3 className="upcoming-heading">The Upcoming Schedule</h3>

  <div className="day-section">
    <div className="day-label">On Thursday</div>
    <div className="card-row">
      <div className="upcoming-card">
        <div className="title">
          Health checkup complete <span className="icon">🧪</span>
        </div>
        <div className="time">11:00 AM</div>
      </div>

      <div className="upcoming-card">
        <div className="title">
          Ophthalmologist <span className="icon">👁️</span>
        </div>
        <div className="time">14:00 PM</div>
      </div>
    </div>
  </div>

  <div className="day-section">
    <div className="day-label">On Saturday</div>
    <div className="card-row">
      <div className="upcoming-card">
        <div className="title">
          Cardiologist <span className="icon">❤️</span>
        </div>
        <div className="time">12:00 AM</div>
      </div>

      <div className="upcoming-card">
        <div className="title">
          Neurologist <span className="icon">🧑‍⚕️</span>
        </div>
        <div className="time">16:00 PM</div>
      </div>
    </div>
  </div>
</div>



    </aside>
  );
}
