"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import "./../globals.css";
import styleDashboard from "./component/dashboardContainer/styleDashboard.module.css";
import HeaderDashboard from "./component/header";
import Sidebar from "./component/sidebar";
import Login from "../login/page";
// import jsHttpCookie from "cookie";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
// DashboardLayout.getInitialProps = ({ req }) => {
//   console.log("initialProp");
//   const initProps = {
//     token: null,
//   };

//   if (req && req.headers) {
//     const cookies = req.headers.cookie;
//     console.log(cookies, "cookies");

//     if (typeof cookies === "string") {
//       const cookiesJSON = jsHttpCookie.parse(cookies);

//       initProps.token = cookiesJSON.token;
//     }
//   }
// };

export default function DashboardLayout({ children }) {
  console.log("masuk layour dashboard");
  let router = useRouter();
  let token;
  let user;
  let sessionToken = null;
  let sessionUser = null;
  const [users, setUser] = useState();
  const [tokens, setToken] = useState();
  try {
    sessionToken = sessionStorage.getItem("token");
    sessionUser = JSON.parse(sessionStorage.getItem("user"));
    token = localStorage.getItem("token");
    user = JSON.parse(localStorage.getItem("user")); //untuk ubah dari string ke obj
    console.log(localStorage.getItem("token"), typeof user, "tokendd");
  } catch (err) {
    console.log("gak dapet token");
  }

  // console.log(sessionToken, sessionUser?.role, "user");
  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("user")));
    setToken(sessionStorage.getItem("token"));
  }, []);

  return (
    <Fragment>
      {(tokens && users.role === "asesi") ||
      (tokens && users.role === "admin") ? (
        // <PDFViewer>
        <div className={inter.className}>
          <div className={`${styleDashboard.boxContainer}`}>
            <Sidebar />
            <div className={`${styleDashboard.boxContent}`}>
              <HeaderDashboard />
              <div className={`${styleDashboard.content}`}>{children}</div>
            </div>
          </div>
        </div>
      ) : (
        // {/* </PDFViewer> */}
        // router.push("/login")
        <Login />
      )}
    </Fragment>
  );
}
