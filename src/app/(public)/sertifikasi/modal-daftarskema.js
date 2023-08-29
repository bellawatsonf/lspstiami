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

export default function ModalDaftarSkema(props) {
  console.log(props.params, "paramsss");
  let router = useRouter();
  function submitAsesiSkema(value) {
    console.log(value, "paramss");
    let input = {
      id_skema: props.params.id,
      id_asesi: props.datauser.id,
      jenis_paket: value,
      status_cek: "belum-dicek",
    };
    console.log(input, "addskema");
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
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log(props);
  return (
    <Modal
      open={props.open}
      //   onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
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
        <Typography id="modal-modal-title" sx={{ textAlign: "center" }}>
          Anda akan mendaftar skema
        </Typography>
        <Typography
          id="modal-modal-description"
          //   sx={{ mt: 2 }}
          sx={{ textAlign: "center", fontWeight: 700, marginTop: "10px" }}
        >
          {props?.params?.nama_skema}
        </Typography>
        <div
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
        </div>
      </Box>
    </Modal>
  );
}
