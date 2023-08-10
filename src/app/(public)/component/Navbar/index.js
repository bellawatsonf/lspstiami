"use client";

import style from "./navbar.module.css";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  console.log(open, "open");
  return (
    <div className="navigation">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-5 col-md-6">
            <img className={`${style.logo}`} src="/logoolsp.png" />
          </div>
          <div className={`${style.forDesktop} col col-md-6`}>
            <ul className={`${style.menuList}`}>
              <li className={style["nav-item"]}>
                {" "}
                <Link className={style["nav-item"]} href="/">
                  Home
                </Link>
              </li>
              <li className={style["nav-item"]}>
                {" "}
                <Link className={style["nav-item"]} href="/sertifikasi">
                  Sertifikasi
                </Link>
              </li>
              <li className={style["nav-item"]}>
                <Link className={style["nav-item"]} href="/asesor">
                  Asesor
                </Link>
              </li>
              <li className={style["nav-item"]}>
                <Link className={style["nav-item"]} href="/tuk">
                  TUK
                </Link>
              </li>
              <li className={style["nav-item"]}>
                <Link className={style["nav-item"]} href="/tentang">
                  Tentang
                </Link>
              </li>
              <li className={style["nav-item"]}>
                <Link className={style["nav-item"]} href="/login">
                  Masuk
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${style.forMobile} col`}>
            <div className={`${style.boxBurger}`}>
              <img
                onClick={() => setOpen(true)}
                className={`${style.imgBurger}`}
                src="/burgerbar.png"
              />
            </div>
          </div>
        </div>
      </div>
      {open ? (
        <div className={`${style.forMobile} ${style.slidemenu}`}>
          <div className={`${style.closeicon}`}>
            <CloseIcon
              onClick={() => setOpen(false)}
              sx={{ fontSize: "30px", fontWeight: "bold" }}
            />
          </div>
          <ul className={`${style.menuList}`}>
            <li className={style["nav-item"]}>
              {" "}
              <Link
                onClick={() => setOpen(false)}
                className={style["nav-item"]}
                href="/"
              >
                Home
              </Link>
            </li>
            <li className={style["nav-item"]}>
              {" "}
              <Link
                onClick={() => setOpen(false)}
                className={style["nav-item"]}
                href="/sertifikasi"
              >
                Sertifikasi
              </Link>
            </li>
            <li className={style["nav-item"]}>
              <Link
                onClick={() => setOpen(false)}
                className={style["nav-item"]}
                href="/asesor"
              >
                Asesor
              </Link>
            </li>
            <li className={style["nav-item"]}>
              <Link
                onClick={() => setOpen(false)}
                className={style["nav-item"]}
                href="/tuk"
              >
                TUK
              </Link>
            </li>
            <li className={style["nav-item"]}>
              <Link
                onClick={() => setOpen(false)}
                className={style["nav-item"]}
                href="/tentang"
              >
                Tentang
              </Link>
            </li>
            <li className={style["nav-item"]}>
              <Link
                onClick={() => setOpen(false)}
                className={style["nav-item"]}
                href="/login"
              >
                Masuk
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
