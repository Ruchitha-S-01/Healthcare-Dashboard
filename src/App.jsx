import React from "react";
import Sidebar from "./components/Sidebar";
import DashboardMain from "./components/DashboardMain";
import RightPanel from "./components/RightPanel";
import "./styles/Global.css";

export default function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <DashboardMain />
      <RightPanel />
    </div>
  );
}