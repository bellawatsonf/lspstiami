"use client";

import { MenuItem, MenuList } from "@mui/material";
import sidebarStyle from "./sidebarstyle.module.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Sidebar() {
  let [user, setUser] = useState("");
  useEffect(() => {
    try {
      let value = JSON.parse(localStorage.getItem("user")); //untuk ubah dari string ke obj
      console.log(value, "value");
      setUser(value);
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(user.role, user === "", "role");
  return (
    <>
      {user !== "" ? (
        <div className={`${sidebarStyle.boxMenu}`}>
          <div className="aa" style={{ height: "100vh" }}>
            <div className={`${sidebarStyle.boxlogo}`}>
              <img src="https://www.crayon.co/hubfs/Horizontal_4C_WHTWordmark-1.svg" />
            </div>
            <div className={`${sidebarStyle.boxListMenu}`}>
              {user.role !== "asesi" ? (
                <MenuList sx={{ fontSize: "20px", letterSpacing: "3px" }}>
                  <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon sx={{ marginRight: "5px" }} />
                      <Link href="/user/admin/Asesi">Asesi</Link>
                    </MenuItem>
                  </div>
                  <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon sx={{ marginRight: "5px" }} />
                      <Link href="/user/admin/SkemaSertifikasi">
                        Skema Sertifikasi
                      </Link>
                    </MenuItem>
                  </div>
                  <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon sx={{ marginRight: "5px" }} />
                      Unit Kompetensi
                    </MenuItem>
                  </div>
                  <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon sx={{ marginRight: "5px" }} />
                      Asesi
                    </MenuItem>
                  </div>
                </MenuList>
              ) : (
                <MenuList sx={{ fontSize: "20px", letterSpacing: "3px" }}>
                  <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon sx={{ marginRight: "5px" }} />
                      <Link href="/user/dashboard">Dashboard</Link>
                    </MenuItem>
                  </div>
                  <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon sx={{ marginRight: "5px" }} />
                      <Link href="/user/profiluser">Riwayat Pribadi</Link>
                    </MenuItem>
                  </div>
                  <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon sx={{ marginRight: "5px" }} />
                      Nilai
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
