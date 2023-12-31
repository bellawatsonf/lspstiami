"use client";

import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Button, MenuItem, MenuList } from "@mui/material";
import Menu from "@mui/material/Menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import sidebarStyle from "./sidebarstyle.module.css";

export default function Sidebar() {
  let router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
    <Fragment>
      {user !== null ? (
        <div className={`${sidebarStyle.boxMenu}`}>
          <div className="aa" style={{ height: "100vh" }}>
            <div className={`${sidebarStyle.boxlogo}`}>
              <img
                className={`${sidebarStyle.imglogo}`}
                style={{ cursor: "pointer" }}
                src="/logoolsp.png"
                onClick={() => router.push("/")}
              />
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
                  {/* <div className={`${sidebarStyle.boxlist}`}>
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
                  </div> */}
                  <div className={`${sidebarStyle.boxlist}`}>
                    <PersonPinIcon sx={{ marginLeft: "15px" }} />
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      style={{
                        textTransform: "none",
                        color: "white",
                        fontSize: "15px",
                        marginLeft: "-5px",
                      }}
                    >
                      User
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={handleClose}>
                        {" "}
                        <Link
                          // className={`${sidebarStyle.boxlist}`}
                          href="/user/admin/admin"
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          Admin
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        {" "}
                        <Link
                          // className={`${sidebarStyle.boxlist}`}
                          href="/user/admin/asesor"
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          Asesor
                        </Link>
                      </MenuItem>
                    </Menu>
                  </div>
                  <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon sx={{ marginRight: "5px" }} />
                      <Link
                        className={`${sidebarStyle.boxlist}`}
                        href="/user/admin/report"
                      >
                        Report
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
                        Status
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
                        Data Asesi
                      </Link>
                    </MenuItem>
                  </div>
                  {/* <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon sx={{ marginRight: "5px" }} />
                      <Link href="" className={`${sidebarStyle.boxlist}`}>
                        Nilai
                      </Link>
                    </MenuItem>
                  </div> */}
                </MenuList>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}
