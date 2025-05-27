import React from "react";
import { FiCalendar, FiClock, FiHome, FiMessageCircle, FiBarChart2, FiUser, FiSettings, FiActivity } from "react-icons/fi";
import "../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <span className="accent">Health</span>care.
      </div>

      <nav className="nav">
        <NavItem icon={<FiHome />} label="Dashboard" active />
        <NavItem icon={<FiClock />} label="History" />
        <NavItem icon={<FiCalendar />} label="Calendar" />
        <NavItem icon={<FiActivity />} label="Appointments" />
        <NavItem icon={<FiBarChart2 />} label="Statistics" />
        <div className="section-label">Tools</div>
        <NavItem icon={<FiMessageCircle />} label="Chat" />
        <NavItem icon={<FiUser />} label="Support" />
      </nav>

      <div className="settings">
        <NavItem icon={<FiSettings />} label="Setting" />
      </div>
    </aside>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <div className={`nav-item ${active ? "active" : ""}`}> 
      <div className="nav-icon">{icon}</div>
      <span className="nav-label">{label}</span>
    </div>
  );
}
