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

export default function SertifikasiPage() {
  let dispatch = useDispatch();
  const skema = useSelector((state) => state.skema.skema);
  console.log(skema, "dataskema");
  let [user, setUser] = React.useState("");

  React.useEffect(() => {
    dispatch(fetchSkema());
    try {
      let value = JSON.parse(localStorage.getItem("user")); //untuk ubah dari string ke obj
      console.log(value, "value");
      setUser(value);
    } catch (error) {
      console.log(error);
    }
  }, []);

  function daftarSkema(idSkema) {
    let input = {
      id_skema: idSkema,
      id_asesi: user.id,
    };
    axios({
      method: "POST",
      url: "http://localhost:3001/add-asesi-skema",
      data: input,
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(input);
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
  return (
    <>
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
                  {el.unitkompetensi.map((unit) => (
                    <li>{unit.judul_unit}</li>
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
                    onClick={() => daftarSkema(el.id)}
                  >
                    Daftar Skema
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
    </>
  );
}
