"use client";

import { Alert, Box, Button, Typography } from "@mui/material";
import ModalPembayaran from "./modal_pembayaran";
import React, { useState } from "react";

export default function ProsesPembayaran() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          Skema : Penyelia Ekspor
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
            Rp. 250.000,-
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
