"use client";

import LoadingComponent from "@/app/(public)/component/loading";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useRouter } from "next/navigation";
import * as React from "react";
import { Fragment } from "react";
import style from "./style.module.css";
import { Button } from "@mui/material";
import ModalApl02 from "./ModalApl2";
import { useDispatch, useSelector } from "react-redux";
import { fetchApl01ByUser } from "@/app/services/apl01";
import { useState } from "react";
import { useEffect } from "react";
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

export default function DashboardUser() {
  let dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState("panel1");
  // const [sort, setSort] = React.useState("asc");
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();
  const [userdata, setUser] = React.useState();
  const [info, setInfo] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let dataApl01 = useSelector((state) => state.apl01.apl01ByUser);
  const [idJadwal_AsesiSkema_Asesor, setIdJadwal] = useState();

  // const user = JSON.parse(sessionStorage.getItem("user"));
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    let value = JSON.parse(sessionStorage.getItem("user"));
    setUser(value);
    getInfoByUser(value.id);
    dispatch(fetchApl01ByUser(value.id));
    getIdJadwal(value.id);
  }, []);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  function getInfoByUser(id) {
    console.log("getinfobyuser");
    axios({
      method: "GET",
      url: `/api/info/${id}`,
    })
      .then((data) => {
        console.log(data.data.data, "dataa");
        setInfo(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getIdJadwal(idUser) {
    axios({
      url: `/api/getIdJadwal/${idUser}`,
      method: "GET",
    })
      .then((data) => {
        console.log(data.data.jadwal, "idJadwal");
        data.data.jadwal.map((el) => {
          console.log(el.id);
          setIdJadwal(el.id);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (loading) {
    return <LoadingComponent />;
  }
  console.log(info, "infoo");
  return (
    <Fragment>
      <ModalApl02
        open={open}
        setOpen={setOpen}
        dataApl01={dataApl01}
        idJadwal_AsesiSkema_Asesor={idJadwal_AsesiSkema_Asesor}
      />
      {info.length === 0 ? (
        <div style={{ width: "100%", marginBottom: "30px" }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "13px", md: "20px" },
              textAlign: "center",
              paddingBottom: "10px",
            }}
          >
            Selamat Datang {userdata?.nama},
          </Typography>
          <div className={`${style.forDesktop}${style.forMobile}`}>
            <div className={`${style.boxGreetingDashboard}`}>
              <Typography
                sx={{
                  fontSize: { xs: "10px", md: "15px" },
                  textAlign: "center",
                }}
              >
                Anda belum melakukan pendaftaran,
              </Typography>
              <Typography
                sx={{
                  color: "blue",
                  cursor: "pointer",
                  fontSize: { xs: "10px", md: "15px" },
                  textAlign: "center",
                }}
                onClick={() => {
                  router.push("/user/list-skema");
                }}
              >
                {" "}
                silahkan klik untuk melakukan pendaftaran{" "}
              </Typography>
            </div>
          </div>

          <div className={`${style.forMobile} ${style.forDesktop}`}>
            <Typography sx={{ fontSize: "15px", textAlign: "center" }}>
              Anda belum melakukan pendaftaran,
            </Typography>
            <Typography
              sx={{
                color: "blue",
                cursor: "pointer",
                fontSize: "15px",
                textAlign: "center",
              }}
              onClick={() => {
                router.push("/user/list-skema");
              }}
            >
              {" "}
              silahkan klik untuk melakukan pendaftaran{" "}
            </Typography>
          </div>
          {/* <div
          className="d-flex"
          style={{
            // background: "red",
            width: "100%",
            justifyContent: "flex-start",
            marginBottom: "30px",
          }}
        >
          <Button
            variant="outlined"
            style={{
              textTransform: "none",
              fontWeight: 600,
              color: "white",
              background: "#1976d2",
            }}
            onClick={() => {
              router.push("/sertifikasi");
            }}
          >
            Sertifikasi
          </Button>
        </div> */}
          {/* <div
          className="d-flex"
          style={{
            width: "100%",
            // background: "red",
            justifyContent: "flex-end",
            marginBottom: "30px",
          }}
        >
          <Button
            variant="outlined"
            style={{ textTransform: "none", fontWeight: 600 }}
          >
            Urutkan{" "}
            {sort === "asc" ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowUpIcon />
            )}
          </Button>
        </div> */}
        </div>
      ) : (
        <div>
          <Typography
            sx={{ fontSize: "15px", fontWeight: "bold", marginBottom: "10px" }}
          >
            Info Status
          </Typography>

          {info?.map((el, i) => (
            <Accordion
              key={i}
              expanded={expanded === `panel${i}`}
              onChange={handleChange(`panel${i}`)}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography sx={{ fontSize: "15px" }}>
                  {el.info_status}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* {el.deskripsi_info !== null ? ( */}
                <Typography sx={{ fontSize: "15px" }}>
                  {el.deskripsi_info}
                </Typography>

                {el.info_status === "Info Penjadwalan pengayaan" ? (
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                      variant="contained"
                      sx={{ textTransform: "none" }}
                      onClick={() => setOpen(true)}
                    >
                      Formulir Apl-02
                    </Button>
                  </div>
                ) : null}
                {/* // ) : ( //{" "}
                <Fragment>
                  //{" "}
                  <Typography sx={{ fontSize: "15px" }}>
                    // {el.deskripsi_info.split("dengan")[0]}
                    //{" "}
                  </Typography>
                  //{" "}
                  <Typography sx={{ marginTop: "5px", fontSize: "15px" }}>
                    // {el.deskripsi_info.split("dengan")[1]}
                    //{" "}
                  </Typography>
                  //{" "}
                </Fragment>
                // )} */}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      )}
    </Fragment>
  );
}
