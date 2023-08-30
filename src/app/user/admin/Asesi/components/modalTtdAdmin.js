import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
var SignaturePad = require("react-signature-pad");
import { useRef } from "react";
import axios from "axios";
import SignatureCanvas from "react-signature-canvas";
import styles from "./sttyle.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalTtdAdmin(props) {
  console.log(props.openModal, "modal");
  let sigPad = useRef({});
  // let data = "";
  function clear() {
    sigPad.current.clear();
  }

  function prosesTtdAdmin() {
    let data = sigPad.current.toDataURL();
    console.log(data, "simpan");
    let value = JSON.parse(localStorage.getItem("user"));
    let idAdmin = value.id;
    console.log(idAdmin);
    let input = {
      ttd_admin: data,
    };
    console.log(input, "input");
    axios({
      method: "PATCH",
      url: `/api/add-ttdadmin/${idAdmin}`,
      data: input,
    })
      .then((data) => {
        console.log(data, "ini datanya");
      })
      .catch((err) => {
        console.log(err, "errors");
      });
  }
  return (
    <React.Fragment>
      <Modal
        open={props.openModalTtd}
        onClose={props.handleCloseModalTtd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            sx={{ fontSize: "15px", marginBottom: "15px", fontWeight: 600 }}
          >
            Silahkan Tanda Tangan Di Bawah Ini, Sebagai Bukti Lampiran APL 01
          </Typography>
          <SignatureCanvas
            penColor="black"
            canvasProps={{
              width: 400,
              height: 200,
              className: styles["sigCanvas"],
            }}
            ref={sigPad}
          />
          <br />

          <Box
            sx={{
              // display: props.imgttd !== "" ? "flex" : "none",
              width: "300px",
              // border: "1px solid black",
              borderRadius: "10px",
              marginBottom: "5px",
            }}
          >
            {/* <HighlightOffIcon
            onClick={() => props.setimg("")}
            sx={{ color: "red", cursor: "pointer" }}
          /> */}
            {/* <img src={props.imgttd} style={{ width: "300px" }} /> */}
          </Box>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              margin: "7px 5px 0px 0px",
              fontSize: "12px",
            }}
            color="success"
            onClick={() => clear()}
          >
            Hapus
          </Button>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              color="success"
              onClick={() => prosesTtdAdmin()}
              sx={{
                marginTop: "10px",
                fontSize: "12px",
                textTransform: "none",
              }}
            >
              Simpan
            </Button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
