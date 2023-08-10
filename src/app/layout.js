"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./store";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  console.log("masuk layout");
  let hasAccess = true;
  const [tampil, setTampil] = useState(false);

  // useEffect(() => {
  //   try {
  //     const user = JSON.parse(localStorage.getItem("user"));

  //     const rules = {
  //       "/admin/asesi": ["asesi"],
  //     };

  //     const pathname = window.location.pathname.toLowerCase();

  //     const accepted = rules[pathname];
  //     if (accepted) {
  //       console.log("permission has rule", accepted.indexOf(user.role));
  //       if (accepted.indexOf(user.role) == -1) {
  //         hasAccess = false;
  //         window.location = "/login";
  //       }
  //     } else {
  //       if (pathname === "/login") {
  //         if (user) {
  //           hasAccess = false;
  //           window.location = "/admin/Asesi";
  //         }
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error, "error");
  //   }

  //   if (hasAccess != false) {
  //     hasAccess = true;
  //   }
  //   setTampil(hasAccess);
  // }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <GoogleOAuthProvider
            clientId="8183620420-97vo1t4g23unvaa2qd97249j98agerul.apps.googleusercontent.com"
            style={{ width: "100%" }}
          >
            {/* <div style={{ visibility: hasAccess ? "visible" : "hidden" }}> */}
            {children}

            {/* </div> */}
          </GoogleOAuthProvider>
        </Provider>
      </body>
    </html>
  );
}
