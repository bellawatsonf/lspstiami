"use client";

import stylesTentang from "../tentang/tentang.module.css";
import styles from "./tuk.module.css";
import { Typography, Button } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkema } from "@/app/services/skema";
import axios from "axios";
import Navbar from "../component/Navbar";
import Footer from "../component/footer";
import LoadingComponent from "../component/loading";

export default function TUkPage() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <>
      <Navbar />
      <div className={`${stylesTentang.bannertentang}`}>
        <div className={`${styles.boxImg}`}>
          <img
            // className={`${stylesTentang.imgbannertentang}`}
            src="/aset3.png"
          />
        </div>
        {/* <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img
                className={`${stylesTentang.imgbannertentang}`}
                src="https://www.crayon.co/hs-fs/hubfs/new-bg.png?width=2566&height=781&name=new-bg.png"
              />
            </div>
            <div className="col-lg-6">
              <div>
                <Typography
                  sx={{
                    fontSize: "40px",
                    color: "#040924",
                    fontWeight: 600,
                    paddingBottom: "15px",
                  }}
                >
                  Tempat Uji Kompetensi
                </Typography>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="container">
        <div className={`${styles.boxDataSkema}`}>
          <Typography
            sx={{
              fontSize: "40px",
              color: "#040924",
              fontWeight: 600,
              paddingBottom: "15px",
            }}
          >
            Tempat Uji Kompetensi
          </Typography>
          <div style={{ paddingTop: "10px", paddingBottom: "20px" }}>
            <Typography sx={{ fontWeight: "bold" }}>
              1. TUK Sewaktu Kampus Cakung
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.6715327006!2d106.936142!3d-6.175198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b8066b7bf1b%3A0xeb8a93d7d9edac91!2sGedung%20Vokasi%20Institut%20STIAMI!5e0!3m2!1sen!2sid!4v1691577352516!5m2!1sen!2sid"
              // width="600"
              // height="450"
              className={`${styles.maps}`}
              // style={{ border: 0, width: "100%" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <Typography>
              Jl. Tipar Cakung No.18A, RT.3/RW.7, Cakung Barat, Kec. Cakung,
              Jakarta Timur.
            </Typography>
          </div>
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            <Typography sx={{ fontWeight: "bold" }}>
              2. TUK Sewaktu Gedung B'Dev Center
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0537721731516!2d106.98819387567599!3d-6.256646993731855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698dbd3c4199b9%3A0xc49770749e850a75!2sBusiness%20Development%20Center%20(B&#39;Dev%20Center)!5e0!3m2!1sen!2sid!4v1691577502220!5m2!1sen!2sid"
              // width="600"
              // height="450"
              // style={{ border: 0, width: "100%" }}
              className={`${styles.maps}`}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <Typography>
              Jl. Raya Pekayon No. 8-11, RT.002/RW.020, Pekayon Jaya, Kec.
              Bekasi Sel., Kota Bekasi, Jawa Barat 17148{" "}
            </Typography>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
