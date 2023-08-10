import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
var SignaturePad = require("react-signature-pad");
import { useRef } from "react";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalTtdAdmin(props) {
  console.log(props.openModal, "modal");
  let sigPad = useRef({});
  // let data = "";

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
      url: `http://localhost:3001/add-ttdadmin/${idAdmin}`,
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
    <>
      <Modal
        open={props.openModalTtd}
        onClose={props.handleCloseModalTtd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" sx={{ fontSize: "17px" }}>
            Silahkan Tanda Tangan Di Bawah Ini, Sebagai Bukti Lampiran APL 01
          </Typography>
          <Box
            sx={{
              border: "1px solid black",
              width: "100%",
              height: "100%",
              borderRadius: "20px",
            }}
          >
            <SignaturePad ref={sigPad} />
          </Box>
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
    </>
  );
}
