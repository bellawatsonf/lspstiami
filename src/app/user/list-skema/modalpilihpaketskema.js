"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CloseOutlined } from "@mui/icons-material";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import axios from "axios";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ModalUpload from "./modalupload";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkema } from "@/app/services/skema";
import { fetchAsesiById } from "@/app/services/asesi";
import LoadingComponent from "@/app/(public)/component/loading";
import { useEffect } from "react";
import { fetchAsesiSkemaByUser } from "@/app/services/asesiskema";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
export default function ModalPilihPaketSkema(props) {
  console.log(props.params, "paramsss");
  let dispatch = useDispatch();

  let router = useRouter();
  const [expanded, setExpanded] = React.useState("panel1");
  const [openUpload, setOpenUpload] = React.useState(false);
  const handleOpenUpload = () => setOpenUpload(true);
  const handleCloseUpload = () => setOpenUpload(false);
  const asesiskema = useSelector((state) => state.asesiskema.asesiSkemaByUser);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // useEffect(() => {
  //   dispatch(fetchAsesiSkemaByUser(props.datauser.id));
  // }, [props.loading]);
  function submitAsesiSkema(value) {
    console.log(value, "paramss");
    let input = {
      id_skema: props.params.id,
      id_asesi: props.datauser.id,
      jenis_paket: value,
      status_cek: "belum-dicek",
    };
    console.log(input, "addskema");
    if (value === "pengayaan-ujikom") {
      axios({
        method: "POST",
        url: "/api/add-asesi-skema",
        data: input,
      })
        .then((data) => {
          console.log(data);
          setOpenUpload(true);
          props.setOpen(false);
          dispatch(fetchSkema());
          dispatch(fetchAsesiSkemaByUser(props.datauser.id));
          // props.setReload(true);
          // props.setLoading(false);
          // props.setAsesiSkema(asesiskema);
          // Swal.fire({
          //   position: "center",
          //   icon: "success",
          //   title: "Berhasil mendaftar Skema",
          //   showConfirmButton: false,
          //   timer: 1500,
          // }).then((result) => {
          //   if (value === "ujikom") {
          //     router.push("/form-apl01");
          //   } else {
          //     alert("pengayaan+ujikom");
          //   }
          // });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios({
        method: "POST",
        url: "/api/add-asesi-skema",
        data: input,
      })
        .then((data) => {
          console.log(data);
          props.setOpen(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Berhasil mendaftar Skema",
            showConfirmButton: false,
            timer: 1500,
          }).then((result) => {
            router.push("/form-apl01");
            props.setLoading(false);
            // dispatch(fetchAsesiSkemaByUser(props.datauser.id));
            // props.setReload(true);
            // props.setAsesiSkema(asesiskema);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  console.log(props);

  return (
    <Fragment>
      <ModalUpload
        openUpload={openUpload}
        handleOpenUpload={handleOpenUpload}
        handleCloseUpload={handleCloseUpload}
        setOpenUpload={setOpenUpload}
      />
      <Modal
        open={props.open}
        //   onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "400px", md: "500px" },
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              cursor: "pointer",
              color: "red",
            }}
          >
            <CloseOutlined
              onClick={() => {
                props.setOpen(false);
              }}
            />
          </div>
          <img
            src="/Filing_system_pana1.svg"
            style={{ display: "block", margin: "auto" }}
          />
          <Typography id="modal-modal-title" sx={{ textAlign: "center" }}>
            Anda akan mendaftar skema
          </Typography>
          <Typography
            id="modal-modal-description"
            //   sx={{ mt: 2 }}
            sx={{
              textAlign: "center",
              fontWeight: 600,
              marginTop: "10px",
              color: "#1976D2",
              fontSize: "18px",
            }}
          >
            {props?.params?.nama_skema}
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "5px",
            }}
          >
            Jenis Paket
          </Typography>
          {/* <div
          className="d-flex"
          style={{ justifyContent: "center", margin: "20px" }}
        >
          <Button
            variant="contained"
            color="success"
            sx={{
              marginRight: "10px",
              textTransform: "none",
              width: "100px",
              color: "white",
              background: " #1976d2",
            }}
            onClick={() => submitAsesiSkema("pengayaan-ujikom")}
          >
            {`Pengayaan 
           +
           Ujikom`}
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{
              marginLeft: "10px",
              textTransform: "none",
              color: "white",
              background: " #1976d2",
            }}
            onClick={() => submitAsesiSkema("ujikom")}
          >
            Ujikom
          </Button>
        </div> */}
          <div style={{ marginTop: "15px" }}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                  Pengayaan + Ujikom
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ol>
                  <li>Mendapatkan Modul Pelatihan</li>
                  <li>Mendapatkan Pembekalan Uji Kompetensi</li>
                  <li>
                    Mendapatkan Sertifikat Pelatihan Kompetensi (dapat di
                    cantumkan pada SKPI)
                  </li>
                  <li>
                    Mendapatkan Sertifikat Kompetensi BNSP (bila kompeten)
                  </li>
                </ol>
                <div className="d-flex" style={{ justifyContent: "flex-end" }}>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{
                      marginRight: "10px",
                      textTransform: "none",
                      // width: "100px",
                      color: "white",
                      fontSize: "13px",
                      marginTop: "10px",
                      background: " #1976d2",
                    }}
                    onClick={() => submitAsesiSkema("pengayaan-ujikom")}
                  >
                    Pilih
                  </Button>
                </div>
              </AccordionDetails>
            </Accordion>
            {/* <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                  Ujikom
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ol>
                  <li>
                    Mendapatkan Sertifikat Kompetensi BNSP (bila kompeten)
                  </li>
                </ol>
                <div className="d-flex" style={{ justifyContent: "flex-end" }}>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{
                      marginRight: "10px",
                      textTransform: "none",
                      // width: "100px",
                      marginTop: "10px",

                      color: "white",
                      fontSize: "13px",
                      background: " #1976d2",
                    }}
                    onClick={() => submitAsesiSkema("ujikom")}
                  >
                    Pilih
                  </Button>
                </div>
              </AccordionDetails>
            </Accordion> */}
          </div>
        </Box>
      </Modal>
    </Fragment>
  );
}
