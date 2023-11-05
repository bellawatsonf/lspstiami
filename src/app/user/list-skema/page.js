"use client";

import LoadingComponent from "@/app/(public)/component/loading";
import { fetchSkema } from "@/app/services/skema";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Button } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import * as React from "react";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import ModalPilihPaketSkema from "./modalpilihpaketskema";

import {
  fetchAsesiSkemaByUser,
  fetchAsesiSkemaServices,
} from "@/app/services/asesiskema";

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

export default function ListSkema() {
  const [expanded, setExpanded] = React.useState("panel1");
  const [sort, setSort] = React.useState("asc");
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();
  const [userdata, setUser] = React.useState();
  const skema = useSelector((state) => state.skema.skema);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [paramsuser, setParams] = useState();
  let [tokenuser, settoken] = React.useState("");
  let dispatch = useDispatch();
  const [reloadAsesiSkema, setReload] = useState(false);
  const dataasesiskema = useSelector(
    (state) => state.asesiskema.asesiSkemaByUser
  );

  const [asesiskema, setAsesiSkema] = useState({});
  // const user = JSON.parse(sessionStorage.getItem("user"));
  React.useEffect(() => {
    dispatch(fetchSkema());
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    try {
      let token = sessionStorage.getItem("token");
      let value = JSON.parse(sessionStorage.getItem("user"));
      setUser(value);
      settoken(token);
    } catch (err) {
      console.log(err);
    }
  }, []);

  React.useEffect(() => {
    dispatch(fetchAsesiSkemaByUser(userdata?.id));
  }, [userdata, loading]);

  console.log(loading, dataasesiskema, "asesiskemadd");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  function daftarSkema(param) {
    console.log(param, "masuk daftar skema");

    // let input = {
    //   id_skema: param.id,
    //   id_asesi: user.id,
    // };
    if (userdata?.role === "asesi" && tokenuser) {
      console.log("masuk if");
      setOpen(true);
      setParams(param);
    } else {
      console.log("masuk else");
      router.push("/login");
    }
    // console.log(input, "input");
  }

  const cekSkemaAsesi = () => {};
  return (
    <Fragment>
      <ModalPilihPaketSkema
        open={open}
        handleClose={handleClose}
        // handleOpen={handleOpen}
        setOpen={setOpen}
        params={paramsuser}
        datauser={userdata}
        reloadAsesiSkema={reloadAsesiSkema}
        setReload={setReload}
        setLoading={setLoading}
        setAsesiSkema={setAsesiSkema}
        loading={loading}
      />
      <div style={{ width: "100%", marginBottom: "30px" }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "15px", md: "20px" },
            textAlign: "center",
            paddingBottom: "10px",
          }}
        >
          Silahkan Pilih Skema Anda
        </Typography>

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
      <div>
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
              <Typography sx={{ fontSize: { xs: "12px", md: "15px" } }}>
                {el.nama_skema}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {el.unitkompetensi.map((unit, i) => (
                  <li key={i} className={`${styles.listskema}`}>
                    {unit.judul_unit}
                  </li>
                ))}
              </ul>
              <div className="d-flex" style={{ width: "100%" }}>
                <div
                  className="d-flex"
                  style={{ justifyContent: "flex-start", width: "50%" }}
                >
                  <Button
                    variant="outlined"
                    //   color="success"
                    sx={{
                      background: "rgb(45, 195, 208)",
                      padding: "5px 10px 5px 10px",
                      color: "white",
                      border: "1px solid rgb(45, 195, 208)",
                      fontWeight: 600,
                      textTransform: "none",
                      fontSize: { xs: "12px", md: "15px" },
                    }}
                    onClick={() => daftarSkema(el)}
                  >
                    kuota tersedia : {el?.kuota}
                  </Button>
                </div>
                <div
                  className="d-flex"
                  style={{ justifyContent: "flex-end", width: "50%" }}
                >
                  <Button
                    variant="outlined"
                    disabled={
                      Number(el?.kuota) <= 0 ||
                      Object.keys(asesiskema).length !== 0 ||
                      dataasesiskema !== null
                        ? true
                        : false
                    }
                    //   color="success"
                    sx={{
                      // background: "rgb(45, 195, 208)",
                      fontSize: { xs: "12px", md: "15px" },
                      padding: "5px 10px 5px 10px",
                      color: "rgb(45, 195, 208)",
                      border: "1px solid rgb(45, 195, 208)",
                      fontWeight: 600,
                      textTransform: "none",
                    }}
                    onClick={() => daftarSkema(el)}
                  >
                    Pilih Skema
                  </Button>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Fragment>
  );
}
