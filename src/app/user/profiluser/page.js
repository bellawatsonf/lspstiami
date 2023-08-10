"use client";

import { Typography, Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfileUser() {
  let router = useRouter();
  let [user, setUser] = useState("");
  useEffect(() => {
    try {
      let value = JSON.parse(localStorage.getItem("user")); //untuk ubah dari string ke obj
      console.log(value, "value");
      setUser(value);
    } catch (error) {
      console.log(error);
    }
  }, []);
  function DetailEdit(id) {
    router.push(`detail-user-edit/${id}`);
  }
  console.log(user);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          sx={{ fontWeight: 700, textTransform: "none" }}
          onClick={() => DetailEdit(user.id)}
        >
          Ubah
        </Button>
      </div>
      <Typography sx={{ fontWeight: 600 }}>
        Bagian 1 : Rincian Data Pemohon Sertifikasi
      </Typography>
      <Box sx={{ marginTop: "30px" }}>
        <div className="d-flex" style={{ width: "100%" }}>
          <Typography sx={{ fontWeight: 600 }}>a.</Typography>
          <Typography sx={{ fontWeight: 600, paddingLeft: "10px" }}>
            {" "}
            Data Pribadi
          </Typography>
        </div>
        <div style={{ marginLeft: "25px" }}>
          <div className="row">
            <div className="col-3 mt-3">Nama Lengkap</div>
            <div className="col-9 mt-3">: Bella Fitsolyna</div>
            <div className="col-3 mt-3">Tempat / tgl. Lahir</div>
            <div className="col-9 mt-3">: Bella Fitsolyna</div>
            <div className="col-3 mt-3">Jenis Kelamin</div>
            <div className="col-9 mt-3">: Bella Fitsolyna</div>
            <div className="col-3 mt-3">Kebangsaan</div>
            <div className="col-9 mt-3">: Bella Fitsolyna</div>
            <div className="col-3 mt-3">Alamat Rumah</div>
            <div className="col-9 mt-3">: Bella Fitsolyna</div>
            <div className="col-3 mt-3">Kode Pos</div>
            <div className="col-9 mt-3">: Bella Fitsolyna</div>
            <div className="col-3 mt-3">No.Telepon / Email</div>
            <div className="col-9 mt-3">
              <div className="row">
                <div className="col-2 mt-3">: Rumah</div>
                <div className="col-4 mt-3">: 021948939</div>
                <div className="col-2 mt-3">Kantor</div>
                <div className="col-4 mt-3">: 535363636</div>
                <div className="col-2 mt-3">: HP</div>
                <div className="col-4 mt-3">: 082111969187</div>
                <div className="col-2 mt-3">Email</div>
                <div className="col-4 mt-3">: bella@gmail.com</div>
              </div>
            </div>
            <div className="col-3 mt-3">Pendidikan Terakhir</div>
            <div className="col-9 mt-3">: S-1</div>
          </div>
        </div>
      </Box>

      <Box sx={{ marginTop: "60px" }}>
        <div className="d-flex" style={{ width: "100%" }}>
          <Typography sx={{ fontWeight: 600 }}>b.</Typography>
          <Typography sx={{ fontWeight: 600, paddingLeft: "10px" }}>
            {" "}
            Data Pekerjaan Sekarang
          </Typography>
        </div>
        <div style={{ marginLeft: "25px" }}>
          <div className="row">
            <div className="col-3 mt-3">Nama Lengkap</div>
            <div className="col-9 mt-3">: Bella Fitsolyna</div>
            <div className="col-3 mt-3">Tempat / tgl. Lahir</div>
            <div className="col-9 mt-3">: Bella Fitsolyna</div>
            <div className="col-3 mt-3">Jenis Kelamin</div>
            <div className="col-9 mt-3">: Bella Fitsolyna</div>
            <div className="col-3 mt-3">Kebangsaan</div>
            <div className="col-9 mt-3">: Bella Fitsolyna</div>
            <div className="col-3 mt-3">Alamat Rumah</div>
            <div className="col-9 mt-3">: Bella Fitsolyna</div>
            <div className="col-3 mt-3">Kode Pos</div>
            <div className="col-9 mt-3">: Bella Fitsolyna</div>
            <div className="col-3 mt-3">No.Telepon / Email</div>
            <div className="col-9 mt-3">
              <div className="row">
                <div className="col-2 mt-3">: Rumah</div>
                <div className="col-4 mt-3">: 021948939</div>
                <div className="col-2 mt-3">Kantor</div>
                <div className="col-4 mt-3">: 535363636</div>
                <div className="col-2 mt-3">: HP</div>
                <div className="col-4 mt-3">: 082111969187</div>
                <div className="col-2 mt-3">Email</div>
                <div className="col-4 mt-3">: bella@gmail.com</div>
              </div>
            </div>
            <div className="col-3 mt-3">Pendidikan Terakhir</div>
            <div className="col-9 mt-3">: S-1</div>
          </div>
        </div>
      </Box>

      <Typography sx={{ fontWeight: 600, marginTop: "60px" }}>
        Bagian 2 : Data Sertifikasi
      </Typography>

      <Box sx={{ marginTop: "30px", paddingLeft: "25px" }}>
        <div className="row">
          <div className="col-3 mt-2">Jenis Skema Sertifikasi</div>
          <div className="col-9 mt-2">: Bella Fitsolyna</div>
          <div className="col-3 mt-3">Tujuan Asesmen yang Diambil</div>
          <div className="col-9 mt-3">: Bella Fitsolyna</div>
        </div>
      </Box>
    </>
  );
}
