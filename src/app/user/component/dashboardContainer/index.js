"use client";

import HeaderDashboard from "../header";
import Sidebar from "../sidebar";
import styleDashboard from "./styleDashboard.module.css";

export default function Dashboard() {
  return (
    <>
      <div className={`${styleDashboard.boxContent}`}>
        <Sidebar />
        <HeaderDashboard />
      </div>
    </>
  );
}
