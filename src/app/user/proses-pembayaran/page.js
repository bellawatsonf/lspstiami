"use client";

import { Alert, Box, Button, Typography } from "@mui/material";
import ModalPembayaran from "./modal_pembayaran";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { fetchAsesiById } from "@/app/services/asesi";

export default function ProsesPembayaran() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [skema, setSkema] = useState("");
  const [user, setUser] = React.useState();
  useEffect(() => {
    try {
      // let token = sessionStorage.getItem("token");
      let value = JSON.parse(sessionStorage.getItem("user")); //untuk ubah dari string ke obj
      console.log(value, "value");
      setUser(value);
      dispatch(fetchAsesiById(value.id));

      // settoken(token);
    } catch (error) {
      console.log(error);
    }
  }, []);

  function getSelectedSkema(idUser) {
    console.log("masuk getselected");
    axios({
      method: "GET",
      url: `/api/asesi-skema/${user?.id}`,
    })
      .then((data) => {
        console.log(data.data.data.skema.nama_skema, "selectedskema");
        setSkema(data.data.data.skema.nama_skema);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getSelectedSkema();
  }, [user]);
  return (
    <>
      <ModalPembayaran open={open} setOpen={setOpen} />
      <Alert severity="warning">
        <Typography
          sx={{
            color: "#663C00",

            fontFamily: "Roboto",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "20.02px" /* 143% */,
            letterSpacing: "0.15px",
            color: "#663C00",
          }}
        >
          Kami menghimbau agar peserta asesi tidak melakukan pembayaran dengan
          nominal yang berbeda dengan yang tertera pada tagihan Anda dan jangan
          melakukan pembayaran diluar nomor rekening pembayaran yang tertera
          pada sistem kami.
        </Typography>
      </Alert>
      <Box sx={{ marginTop: "40px" }}>
        <Typography
          sx={{
            color: " #1976D2",
            fontFamily: "Roboto",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "30px",
          }}
        >
          Pembayaran
        </Typography>
        <hr />
        <Typography
          sx={{
            color: " #1976D2",
            fontFamily: "Roboto",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "30px",
          }}
        >
          Skema : {skema}
        </Typography>
        <div>
          <img
            style={{ display: "block", margin: "auto" }}
            src="/Mobile_payments_rafiki_1.svg"
          />
          <Typography
            sx={{
              color: " #333333",
              fontFamily: "Roboto",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "30px",
              textAlign: "center",
            }}
          >
            Silahkan lakukan pembayaran dengan jumlah transfer sebesar
          </Typography>
          <Typography
            sx={{
              color: " #1976D2",
              fontFamily: "Roboto",
              fontSize: "28px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "30px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            Rp. 600.000,-
          </Typography>
          <Typography
            sx={{
              color: "#333333",
              fontFamily: "Roboto",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "30px",
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            ke rekening
          </Typography>

          <img
            style={{ display: "block", margin: "auto" }}
            src="/1200px_BNI_logo_1.svg"
          />
          <Typography
            sx={{
              color: " #1976D2",
              fontFamily: "Roboto",
              fontSize: "28px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "30px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            12345678
          </Typography>
          <Typography
            sx={{
              color: "#333333",
              fontFamily: "Roboto",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "30px",
              textAlign: "center",
            }}
          >
            a.n STIAMI
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{ marginTop: "40px", textTransform: "none" }}
              onClick={() => setOpen(true)}
            >
              Kirim Bukti Pembayaran
            </Button>
          </div>
        </div>
      </Box>
    </>
  );
}
