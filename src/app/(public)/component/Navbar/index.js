"use client";

import style from "./navbar.module.css";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import LoadingComponent from "../loading";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  let user = JSON.parse(sessionStorage.getItem("user"));
  let token = sessionStorage.getItem("token");
  let [loading, setLoading] = useState(false);
  // let loading = useSelector((state)=>state.skema.loading)
  console.log(user, "userdrnavbar");
  console.log(loading, "loadingdrnavbar");

  useEffect(() => {
    console.log(user, "druseeffect");
    if (loading) {
      setTimeout(() => setLoading(false), 1000);
    }
  }, [user]);
  function handleLogout(e) {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("handleLogout");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
      // router.push("/login");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(true);
    }
  }
  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <div className="navigation">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-5 col-md-6">
            <Link href="/">
              <img className={`${style.logo}`} src="/logoolsp.png" />
            </Link>
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
                {user && token ? (
                  <Link
                    className={style["nav-item"]}
                    style={{ color: "blue", fontWeight: 700 }}
                    // onClick={(e) => handleLogout(e)}
                    href={
                      user.role === "asesi"
                        ? "/user/dashboard"
                        : "/user/admin/Asesi"
                    }
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link className={style["nav-item"]} href="/login">
                    Masuk
                  </Link>
                )}
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
