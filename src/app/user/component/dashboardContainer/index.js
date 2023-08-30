"use client";

import { Fragment } from "react";
import HeaderDashboard from "../header";
import Sidebar from "../sidebar";
import styleDashboard from "./styleDashboard.module.css";

export default function Dashboard() {
  return (
    <Fragment>
      <div className={`${styleDashboard.boxContent}`}>
        <Sidebar />
        <HeaderDashboard />
      </div>
    </Fragment>
  );
}
