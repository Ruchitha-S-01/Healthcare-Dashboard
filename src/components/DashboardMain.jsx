import React from "react";
import { FiBell, FiSearch } from "react-icons/fi";
import bodyImg from "../assets/body.png";
import lungsImg from "../assets/lungs.png";
import teethImg from "../assets/teeth.png";
import boneImg from "../assets/bone.png";
import ActivityChart from "./ActivityChart";  
import "../styles/DashboardMain.css";

export default function DashboardMain() {
  return (
    <main className="dashboard-main">
      {/* top‑bar */}
      <div className="top-bar">
        <div className="search-wrapper">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <FiBell className="icon bell-icon" />
      </div>

      <h1 className="heading">Dashboard</h1>

      <div className="content-grid">
        {/* anatomy illustration */}
        <div className="anatomy-card">
          <img src={bodyImg} alt="Human anatomy" className="body-img" />
          <button className="floating-tag heart">❤️ Healthy Heart</button>
          <button className="floating-tag leg">🦵 Healthy Leg</button>
        </div>

        {/* organ status list */}
        <div className="organ-list">
          <OrganCard icon={lungsImg} name="Lungs" progress={70} />
          <OrganCard icon={teethImg} name="Teeth" progress={60} barColor="--green" />
          <OrganCard icon={boneImg} name="Bone" progress={80} barColor="--orange" />
        </div>
      </div>

     {/* activity graph */}
      <div className="activity-card">
        <div className="activity-header">
  <h3>Activity</h3>
  <p className="subtitle">3 appointments on this week</p>
</div>

        <ActivityChart />   {/* ← replaced placeholder with real chart */}
      </div>
    </main>
  );
}

function OrganCard({ icon, name, progress, barColor }) {
  return (
    <div className="organ-card">
      <div className="organ-head">
        <img src={icon} alt={name} className="organ-icon" />
        <span className="organ-name">{name}</span>
      </div>
      <div className="organ-date">Date: 26 Oct 2021</div>
      <div className="progress-bar-wrapper">
        <div
          className="progress-bar"
          style={{ width: `${progress}%`, background: `var(${barColor || "--red"})` }}
        />
      </div>
    </div>
  );
}