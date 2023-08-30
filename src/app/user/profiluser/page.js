"use client";

import LoadingComponent from "@/app/(public)/component/loading";
import { fetchAsesiById } from "@/app/services/asesi";
import { fetchAsesiSkemaByUser } from "@/app/services/asesiskema";
import { Typography, Box, Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DownloadPdf from "../component/donwloadPdf";
import { fetchApl01ByUser } from "@/app/services/apl01";
import { Fragment } from "react";

export default function ProfileUser() {
  let router = useRouter();
  let [user, setUser] = useState("");
  let dataUser = useSelector((state) => state.asesi.AsesiById);
  let asesiskemabyuser = useSelector(
    (state) => state.asesiskema.asesiSkemaByUser
  );
  const dispatch = useDispatch();
  const id = JSON.parse(sessionStorage.getItem("user"));
  let loading = useSelector((state) => state.skema.loading);
  let [selectedSkema, setSkema] = useState("");
  let aplbyuser = useSelector((state) => state.apl01.apl01ByUser);
  console.log(dataUser, "datauserrr");
  useEffect(() => {
    dispatch(fetchAsesiById(id.id));
    dispatch(fetchApl01ByUser(id.id));
  }, []);

  useEffect(() => {
    // try {
    //   let value = JSON.parse(localStorage.getItem("user")); //untuk ubah dari string ke obj
    //   let valueuser = JSON.parse(sessionStorage.getItem("user")); //untuk ubah dari string ke obj
    //   console.log(value, "value");
    //   setUser(value);
    // if (value) {
    //   getSelectedSkema(value.id);
    // }
    getSelectedSkema(dataUser.id);

    // } catch (error) {
    //   console.log(error);
    // }
  }, []);

  function getSelectedSkema(idUser) {
    console.log("masuk getselected");
    axios({
      method: "GET",
      url: `/api/asesi-skema/${id.id}`,
    })
      .then((data) => {
        console.log(data.data.data.skema.nama_skema, "selectedskema");
        setSkema(data.data.data.skema.nama_skema);
      })
      .catch((err) => console.log(err));
  }
  function DetailEdit(id) {
    router.push(`detail-user-edit/${id}`);
  }

  // useEffect(() => {
  //   let valueuser = JSON.parse(sessionStorage.getItem("user"));
  //   dispatch(fetchAsesiSkemaByUser(valueuser.id));
  // }, []);

  console.log(aplbyuser, "apl01byuser");

  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <Fragment>
      {/* {asesiskemabyuser.length > 0 ? (
        <> */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {/* <Button
          variant="outlined"
          // disabled={asesiskemabyuser.map((el) => {
          //   el.status_cek === "sudah-dicek" ? false : true;
          // })}

          sx={{ fontWeight: 700, textTransform: "none", marginRight: "10px" }}
          onClick={() => DetailEdit(id.id)}
        >
          Download PDF
        </Button> */}
        {aplbyuser !== null ? <DownloadPdf data={aplbyuser} /> : null}

        <Button
          variant="outlined"
          // disabled={asesiskemabyuser.map((el) => {
          //   el.status_cek === "sudah-dicek" ? false : true;
          // })}
          sx={{
            fontWeight: 700,
            textTransform: "none",
            background: "#1976D2",
            color: "white",
          }}
          onClick={() => DetailEdit(id.id)}
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
            <div className="col-9 mt-3">
              : {dataUser.nama_lengkap ? dataUser.nama_lengkap : "-"}
            </div>
            <div className="col-3 mt-3">Tempat / tgl. Lahir</div>
            <div className="col-9 mt-3">
              :{" "}
              {dataUser.tempat_lahir && dataUser.tgl_lahir
                ? dataUser.tempat_lahir +
                  " / " +
                  dataUser.tgl_lahir
                    .toString()
                    .replace(/T.*/, "")
                    .split("-")
                    .reverse()
                    .join("-")
                : "-"}
            </div>
            <div className="col-3 mt-3">Jenis Kelamin</div>
            <div className="col-9 mt-3">
              : {dataUser.jenis_kelamin ? dataUser.jenis_kelamin : "-"}
            </div>
            <div className="col-3 mt-3">Kebangsaan</div>
            <div className="col-9 mt-3">
              : {dataUser.kebangsaan ? dataUser.kebangsaan : "-"}
            </div>
            <div className="col-3 mt-3">Alamat Rumah</div>
            <div className="col-9 mt-3">
              : {dataUser.alamat_rumah ? dataUser.alamat_rumah : "-"}
            </div>
            <div className="col-3 mt-3">Kode Pos</div>
            <div className="col-9 mt-3">
              : {dataUser.kodepos ? dataUser.kodepos : "-"}
            </div>
            <div className="col-3 mt-3">No.Telepon / Email</div>
            <div className="col-9 mt-3">
              <div className="row">
                <div className="col-2 mt-3">: Rumah</div>
                <div className="col-4 mt-3">
                  : {dataUser.tlp ? dataUser.tlp : "-"}
                </div>
                {/* <div className="col-2 mt-3">Kantor</div>
                <div className="col-4 mt-3">: {dataUser.tlp_kantor}</div> */}
                <div className="col-2 mt-3">HP</div>
                <div className="col-4 mt-3">
                  : {dataUser.phone_number ? dataUser.phone_number : "-"}
                </div>
                <div className="col-2 mt-3">Email</div>
                <div className="col-4 mt-3">
                  : {dataUser.email ? dataUser.email : "-"}
                </div>
              </div>
            </div>
            <div className="col-3 mt-3">Pendidikan Terakhir</div>
            <div className="col-9 mt-3">
              :{" "}
              {dataUser.kualifikasi_pendidikan
                ? dataUser.kualifikasi_pendidikan
                : "-"}
            </div>
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
            <div className="col-3 mt-3">Nama Lembaga / Perusahaan</div>
            <div className="col-9 mt-3">
              : {dataUser.nama_instansi ? dataUser.nama_instansi : "-"}
            </div>
            <div className="col-3 mt-3">Jabatan</div>
            <div className="col-9 mt-3">
              : {dataUser.jabatan ? dataUser.jabatan : "-"}
            </div>
            <div className="col-3 mt-3">Alamat</div>
            <div className="col-9 mt-3">
              : {dataUser.alamat_kantor ? dataUser.alamat_kantor : "-"}
            </div>
            <div className="col-3 mt-3">Kode Pos</div>
            <div className="col-9 mt-3">
              : {dataUser.kodepos_kantor ? dataUser.kodepos_kantor : "-"}
            </div>
            <div className="col-3 mt-3">No.Telepon / Fax / Email</div>

            <div className="col-9 mt-3">
              <div className="row">
                <div className="col-2 mt-3">: Telp</div>
                <div className="col-4 mt-3">
                  : {dataUser.tlp_kantor ? dataUser.tlp_kantor : "-"}
                </div>
                <div className="col-2 mt-3">Email</div>
                <div className="col-4 mt-3">
                  : {dataUser.email_kantor ? dataUser.email_kantor : "-"}
                </div>
                <div className="col-2 mt-3">: Fax</div>
                <div className="col-4 mt-3">
                  :{dataUser.fax ? dataUser.fax : "-"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>

      <Typography sx={{ fontWeight: 600, marginTop: "60px" }}>
        Bagian 2 : Data Sertifikasi
      </Typography>

      <Box sx={{ marginTop: "30px", paddingLeft: "25px" }}>
        <div className="row">
          <div className="col-3 mt-2">Jenis Skema Sertifikasi</div>
          <div className="col-9 mt-2">
            :{" "}
            {selectedSkema === "" ? (
              <Link style={{ textDecoration: "none" }} href="/list-skema">
                Pilih Skema
              </Link>
            ) : (
              selectedSkema
            )}
          </div>
          <div className="col-3 mt-3">Tujuan Asesmen yang Diambil</div>
          <div className="col-9 mt-3">
            : {dataUser.tujuan_asesmen ? dataUser.tujuan_asesmen : "-"}
          </div>
        </div>
      </Box>
      {/* </>
      ) : (
        <LoadingComponent />
      )} */}
    </Fragment>
  );
}
