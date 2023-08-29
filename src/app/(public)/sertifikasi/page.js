"use client";

import stylesTentang from "../tentang/tentang.module.css";
import styles from "./sertifikasi.module.css";
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
import dataSkema from "./data";
import Navbar from "../component/Navbar";
import Footer from "../component/footer";
import LoadingComponent from "../component/loading";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import ModalDaftarSkema from "./modal-daftarskema";
import { useState } from "react";

export default function SertifikasiPage() {
  let router = useRouter();
  let dispatch = useDispatch();
  const skema = useSelector((state) => state.skema.skema);
  console.log(skema, "dataskema");
  let [user, setUser] = React.useState("");
  let [tokenuser, settoken] = React.useState("");
  // let dataUser = JSON.parse(sessionStorage.getItem("user"));
  // let token = sessionStorage.getItem("token");
  // console.log(dataUser, token, "usertoken");
  const [loading, setLoading] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [paramsuser, setParams] = useState();

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  React.useEffect(() => {
    dispatch(fetchSkema());
    try {
      let token = sessionStorage.getItem("token");
      let value = JSON.parse(sessionStorage.getItem("user")); //untuk ubah dari string ke obj
      console.log(value, "value");
      setUser(value);
      settoken(token);
    } catch (error) {
      console.log(error);
    }
  }, []);

  function daftarSkema(param) {
    console.log(param, "masuk daftar skema");

    let input = {
      id_skema: param.id,
      id_asesi: user.id,
    };
    if (user?.role === "asesi" && tokenuser) {
      console.log("masuk if");
      setOpen(true);
      setParams(param);
      // Swal.fire({
      //   // text: "Anda akan mendaftar skema",
      //   // title: param.nama_skema,
      //   html:
      //     "Anda akan mendaftar skema" + "</br>" + `<b>${param.nama_skema}</b>`,
      //   // icon: "warning",
      //   showCancelButton: true,
      //   confirmButtonColor: "#3085d6",
      //   cancelButtonColor: "#d33",
      //   confirmButtonText: "Yes, delete it!",
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     Swal.fire("Deleted!", "Your file has been deleted.", "success");
      //   }
      // });
      // axios({
      //   method: "POST",
      //   url :"/api/add-asesi-skema",
      //   data: input,
      // })
      //   .then((data) => {
      //     console.log(data);
      //     router.push("/user/profiluser");
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    } else {
      console.log("masuk else");
      router.push("/login");
    }
    // console.log(input, "input");
  }
  console.log(skema, "skema");
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  console.log(dataSkema, "dtskema");
  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <>
      <ModalDaftarSkema
        open={open}
        handleClose={handleClose}
        // handleOpen={handleOpen}
        setOpen={setOpen}
        params={paramsuser}
        datauser={user}
      />
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
                    fontSize: "64px",
                    color: "#040924",
                    fontWeight: 600,
                    paddingBottom: "15px",
                  }}
                >
                  Skema Sertifikasi
                </Typography>

                <Typography
                  sx={{
                    color: "#6f7375",
                    fontSize: "20px",
                    paddingBottom: "60px",
                  }}
                >
                  {" "}
                  Daftar Skema Sertifikasi
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
              fontSize: { xs: "40px", xl: "64px" },
              color: "#040924",
              fontWeight: 600,
              paddingBottom: "15px",
            }}
          >
            Skema Sertifikasi
          </Typography>

          <Typography
            sx={{
              color: "#6f7375",
              fontSize: "20px",
              paddingBottom: "60px",
            }}
          >
            {" "}
            Daftar Skema Sertifikasi
          </Typography>
          {skema.map((el) => (
            <Accordion
              key={el.id}
              expanded={expanded === `panel${el.id}`}
              onChange={handleChange(`panel${el.id}`)}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>{el.nama_skema}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  {el.unitkompetensi.map((unit, i) => (
                    <li key={i}>{unit.judul_unit}</li>
                  ))}
                </ul>
                <div className={`${styles.boxButton}`}>
                  <Button
                    variant="outlined"
                    //   color="success"
                    sx={{
                      // background: "rgb(45, 195, 208)",
                      padding: "10px 20px 10px 20px",
                      color: "rgb(45, 195, 208)",
                      border: "1px solid rgb(45, 195, 208)",
                      fontWeight: 600,
                      textTransform: "none",
                    }}
                    // onClick={() => daftarSkema(el)}
                  >
                    kuota tersedia : {el.kuota}
                  </Button>
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
          {/* <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Public Relation Coordinator</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Public Relation Coordinator</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
