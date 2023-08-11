import styles from "./footer.module.css";
import { Typography } from "@mui/material";
export default function Footer() {
  return (
    <div className={styles["footer-box"]}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <img className={`${styles.imgFooter}`} src="/logoolsp.png" />
            <div className={`${styles.infoFooter}`}>
              <div className="d-flex mt-3 justify-content-center">
                <a
                  style={{
                    color: "white",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                  href="https://wa.me/6281770828477"
                  target="_blank"
                >
                  <img className={`${styles.imgicon}`} src="/wa.png" />
                </a>
                <a
                  style={{
                    color: "white",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                  target="_blank"
                  href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=lspiismi@gmail.com"
                >
                  <img className={`${styles.imgicon}`} src="/email.png" />
                </a>
                <a
                  style={{
                    color: "white",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                  href="https://www.instagram.com/lsp.stiami/"
                  target="_blank"
                >
                  <img className={`${styles.imgicon}`} src="/ig.png" />
                </a>
              </div>

              <div className="d-flex mt-3 justify-content-center">
                <Typography sx={{ fontSize: "15px", paddingLeft: "5px" }}>
                  Business Development Center (B'Dev Center) - Jl. Ahmad Yani
                  No.4, RT.5RT.004/RW.020, Pekayon Jaya, Kec. Bekasi Sel., Kota
                  Bks, Jawa Barat 17148
                </Typography>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-3">
                {" "}
                <ul>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                </ul>
              </div>
              <div className="col-lg-3">
                {" "}
                <ul>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                </ul>
              </div>
              <div className="col-lg-3">
                {" "}
                <ul>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                </ul>
              </div>
              <div className="col-lg-3">
                {" "}
                <ul>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                  <li>Gathering Intel</li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
        <div
          style={{
            borderTop: "2px solid #2dc3d0",
            fontSize: "14px",
            marginTop: "30px",
            paddingTop: "30px",
            height: "10px",
            color: "white",
          }}
        ></div>
        <Typography
          sx={{ fontSize: "13px", textAlign: { xs: "center", md: "left" } }}
        >
          &copy; 2023 LSP-STIAMI
        </Typography>
      </div>
    </div>
  );
}
