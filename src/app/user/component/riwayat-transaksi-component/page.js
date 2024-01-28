"use client";
import { Alert, AlertTitle, Box, Button, Typography } from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import HistoryIcon from "@mui/icons-material/History";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function RiwayatTransaksiSertifikasi() {
  const [user, setUser] = useState();
  const router = useRouter();
  const [skema, setSkema] = useState("");

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("user")));
  }, []);

  function getSelectedSkema() {
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
      <Typography
        sx={{
          fontSize: { xs: "13px", md: "30px" },

          paddingBottom: "10px",
          color: "#333",
          fontFamily: " Roboto",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "30px",
        }}
      >
        Hallo, {user?.nama}
      </Typography>
      <div style={{ marginTop: "48px" }}>
        <Alert severity="info">
          <AlertTitle
            style={{
              color: "#014361",
              fontFamily: "Roboto",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "24px" /* 150% */,
              letterSpacing: " 0.15px",
            }}
          >
            Menunggu Pembayaran
          </AlertTitle>
          Saat ini Anda memiliki tagihan aktif.
          <a
            href="/user/proses-pembayaran"
            style={{ textDecoration: "none", color: "#1976D2" }}
          >
            <strong>
              {" "}
              Silahkan lakukan pembayaran sesuai dengan skema pilihan Anda
              disini
            </strong>
          </a>
        </Alert>
      </div>
      <Typography
        sx={{
          fontSize: "24px",
          marginTop: "40px",

          color: "#1976D2",
          fontFamily: " Roboto",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "30px",
        }}
      >
        Skema Sertifikasi Anda
      </Typography>
      <hr style={{ background: "#C6C6C6", height: "2px" }} />
      {/* <div
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <div
          style={{
            paddingTop: "7px",
            color: "#1976D2",
            fontWeight: 500,
            fontFamily: " Roboto",
            fontSize: "16px",
          }}
        >
          <HistoryIcon sx={{ marginRight: "2px" }} /> Riwayat Transaksi
        </div>
        <Button
          variant="outlined"
          sx={{
            marginLeft: "60px",
            fontWeight: 500,
            paddingLeft: "20px",
            paddingRight: "20px",
            fontFamily: " Roboto",
            textTransform: "none",
            fontSize: "16px",
          }}
        >
          Lihat Skema Lainnya
        </Button>
      </div> */}

      <div className="row">
        <div className="col-6">
          <Box
            sx={{
              borderRadius: " var(--borderRadius, 4px)",
              background: "#FFF",
              boxShadow: "0px 3px 3px 0px rgba(0, 0, 0, 0.15)",
              display: "flex",
              width: "100%",
              height: "auto",
              padding: "20px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "32px",
              flexShrink: 0,
            }}
          >
            <Typography
              sx={{
                color: "#1976D2",
                fontFamily: "Roboto",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "30px",
              }}
            >
              {skema}
            </Typography>
            <Button
              variant="contained"
              sx={{
                display: "flex",
                minWidth: "173px",
                height: "30px",
                padding: "16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "20px",
                background: "#FDEDED",
                color: "#663C00",
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "20.02px" /* 166.833% */,
                letterSpacing: "0.15px",
                textTransform: "none",
                marginTop: "32px",
              }}
            >
              Menunggu Pembayaran
            </Button>
            <div
              style={{ display: "flex", marginTop: "10px", marginLeft: "16px" }}
            >
              <InfoOutlinedIcon
                sx={{ color: "#663C00", marginRight: "10px" }}
              />
              <Typography
                sx={{
                  color: "#333",
                  fontFamily: "Roboto",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "12px",
                  marginTop: "7px",
                }}
              >
                23 Januari 2024
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <Button
                variant="contained"
                sx={{ textTransform: "none" }}
                onClick={() => router.push("/user/proses-pembayaran")}
              >
                Bayar Disini
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}
