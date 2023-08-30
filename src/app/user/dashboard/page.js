"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LoadingComponent from "@/app/(public)/component/loading";
import { useRouter } from "next/navigation";
import ModalDaftarSkema from "@/app/(public)/sertifikasi/modal-daftarskema";
import axios from "axios";
import { Fragment } from "react";

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
  const [expanded, setExpanded] = React.useState("panel1");
  const [sort, setSort] = React.useState("asc");
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();
  const [userdata, setUser] = React.useState();
  const [info, setInfo] = React.useState([]);
  // const user = JSON.parse(sessionStorage.getItem("user"));
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    let value = JSON.parse(sessionStorage.getItem("user"));
    setUser(value);
    getInfoByUser(value.id);
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
  if (loading) {
    return <LoadingComponent />;
  }
  console.log(info, "infoo");
  return (
    <Fragment>
      {info.length === 0 ? (
        <div style={{ width: "100%", marginBottom: "30px" }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "20px",
              textAlign: "center",
              paddingBottom: "10px",
            }}
          >
            Selamat Datang {userdata?.nama},
          </Typography>
          <div className="d-flex" style={{ justifyContent: "center" }}>
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
                <Typography sx={{ fontSize: "15px" }}>
                  {el.deskripsi_info.split("dengan")[0]}
                </Typography>
                <Typography sx={{ marginTop: "5px", fontSize: "15px" }}>
                  {el.deskripsi_info.split("dengan")[1]}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      )}
    </Fragment>
  );
}
