"use client";

import { MenuItem, MenuList } from "@mui/material";
import sidebarStyle from "./sidebarstyle.module.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Sidebar() {
  // let [user, setUser] = useState("");
  // useEffect(() => {
  //   try {
  //     let value = JSON.parse(localStorage.getItem("user")); //untuk ubah dari string ke obj
  //     console.log(value, "value");
  //     setUser(value);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);
  // console.log(user.role, user === "", "role");
  // let user = null;
  // useEffect(() => {
  let user = JSON.parse(sessionStorage.getItem("user"));
  // }, []);
  console.log(user, "disidebar");
  return (
    <>
      {user !== null ? (
        <div className={`${sidebarStyle.boxMenu}`}>
          <div className="aa" style={{ height: "100vh" }}>
            <div className={`${sidebarStyle.boxlogo}`}>
              <img className={`${sidebarStyle.imglogo}`} src="/logoolsp.png" />
            </div>
            <div className={`${sidebarStyle.boxListMenu}`}>
              {user.role === "admin" ? (
                <MenuList sx={{ fontSize: "20px", letterSpacing: "3px" }}>
                  <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon
                        sx={{ marginRight: "5px", marginTop: "3px" }}
                      />
                      <Link
                        className={`${sidebarStyle.boxlist}`}
                        href="/user/admin/Asesi"
                      >
                        Asesi
                      </Link>
                    </MenuItem>
                  </div>
                  <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon sx={{ marginRight: "5px" }} />
                      <Link
                        className={`${sidebarStyle.boxlist}`}
                        href="/user/admin/skema-sertifikasi"
                      >
                        Skema Sertifikasi
                      </Link>
                    </MenuItem>
                  </div>
                  <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon sx={{ marginRight: "5px" }} />
                      <Link
                        href="/user/admin/unit-kompetensi"
                        className={`${sidebarStyle.boxlist}`}
                      >
                        Unit Kompetensi
                      </Link>
                    </MenuItem>
                  </div>
                  <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon sx={{ marginRight: "5px" }} />
                      <Link href="" className={`${sidebarStyle.boxlist}`}>
                        Kriteria Unjuk Kerja
                      </Link>
                    </MenuItem>
                  </div>
                </MenuList>
              ) : (
                <MenuList sx={{ fontSize: "20px", letterSpacing: "3px" }}>
                  <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon sx={{ marginRight: "5px" }} />
                      <Link
                        className={`${sidebarStyle.boxlist}`}
                        href="/user/dashboard"
                      >
                        Dashboard
                      </Link>
                    </MenuItem>
                  </div>
                  <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon sx={{ marginRight: "5px" }} />
                      <Link
                        className={`${sidebarStyle.boxlist}`}
                        href="/user/profiluser"
                      >
                        Riwayat Pribadi
                      </Link>
                    </MenuItem>
                  </div>
                  <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon sx={{ marginRight: "5px" }} />
                      <Link href="" className={`${sidebarStyle.boxlist}`}>
                        Nilai
                      </Link>
                    </MenuItem>
                  </div>
                </MenuList>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
