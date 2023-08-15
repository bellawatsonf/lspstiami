"use client";

import { Box, Typography, Button } from "@mui/material";
import { Modal, Backdrop, Fade } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import ModalRekomendasiAsesi from "../../components/modal";
import { fetchAsesiSkemaById } from "@/app/services/asesiskema";
import { Loading } from "@/app/services/skema";
import LoadingComponent from "@/app/(public)/component/loading";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundcolor: "red",
    },
  },
  img: {
    outline: "none",
  },
}));

export default function DetailAsesi_Pendaftaran() {
  const asesiSkemaById = useSelector(
    (state) => state.asesiskema.AsesiSkemaById
  );
  // console.log(asesiSkemaById, "asesiSkemaById");
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("false");
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  let loading = useSelector((state) => state.skema.loading);

  const handleClose = () => {
    setOpen(false);
  };

  const handleImage = (value) => {
    console.log(value);
    setImage(`http://localhost:3001/${value}`);
    setOpen(true);
    console.log(image);
  };

  useEffect(() => {
    dispatch(fetchAsesiSkemaById(id));
  }, []);

  function handleCheckBuktiBayar(status) {
    let input = { status_pembayaran: status };
    dispatch(Loading(true));
    axios({
      method: "PATCH",
      url: `http://localhost:3001/edit-status-pembayaran/${asesiSkemaById?.asesi?.id}`,
      data: input,
    })
      .then((data) => {
        console.log(data);
        handleOpenModal();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((_) => dispatch(Loading(false)));
  }

  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "30px",
          textAlign: "center",
          paddingBottom: "30px",
        }}
      >
        Informasi Asesi
      </Typography>
      <Box
        sx={{
          width: "100%",
          borderRadius: "5px",
          border: "1px solid #d3d3d3",
          padding: "10px",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>Profil Asesi</Typography>
        <div style={{ marginTop: "20px" }}>
          <div className="row">
            <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>Name</Typography>
              <Typography sx={{ color: "black" }}>
                {asesiSkemaById?.asesi?.nama_lengkap ?? <>-</>}
              </Typography>
            </div>
            <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>
                Jenis Skema Sertifikasi
              </Typography>
              <Typography sx={{ color: "black" }}>
                {asesiSkemaById?.skema?.nama_skema ?? <>-</>}
              </Typography>
            </div>
            <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>Email</Typography>
              <Typography sx={{ color: "black" }}>
                {asesiSkemaById?.asesi?.email ?? <>-</>}
              </Typography>
            </div>
            <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>Nomor Telepon</Typography>
              <Typography sx={{ color: "black" }}>
                {asesiSkemaById?.asesi?.phone_number ?? <>-</>}
              </Typography>
            </div>
            {/* <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>Birth</Typography>
              <Typography sx={{ color: "black" }}>
                {asesiSkemaById?.asesi?.tgl_lahir ?? <>-</>}
              </Typography>
            </div> */}
          </div>
        </div>
      </Box>
      <Box
        sx={{
          width: "100%",
          borderRadius: "5px",
          border: "1px solid #d3d3d3",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>Informasi Institusi</Typography>
        <div style={{ marginTop: "20px" }}>
          <div className="row">
            <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>Nama Instansi</Typography>
              <Typography sx={{ color: "black" }}>
                {asesiSkemaById?.asesi?.nama_instansi ?? <>-</>}
              </Typography>
            </div>
            <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>Email</Typography>
              <Typography sx={{ color: "black" }}>
                {asesiSkemaById?.asesi?.email_kantor ?? <>-</>}
              </Typography>
            </div>
            <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>Alamat </Typography>
              <Typography sx={{ color: "black" }}>
                {asesiSkemaById?.asesi?.alamat_kantor ?? <>-</>}
              </Typography>
            </div>
            <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>Nomor Telepon</Typography>
              <Typography sx={{ color: "black" }}>
                {asesiSkemaById?.asesi?.tlp_kantor ?? <>-</>}
              </Typography>
            </div>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          width: "100%",
          borderRadius: "5px",
          border: "1px solid #d3d3d3",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>Data Pendukung</Typography>
        <div style={{ marginTop: "20px" }}>
          <div className="row">
            <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>Ijazah</Typography>
              {/* <Typography
                sx={{ color: "black" }}
                onClick={(e) => handleImage(asesiSkemaById?.asesi?.ijazah)}
              >
                {asesiSkemaById?.asesi?.ijazah}
              </Typography> */}
              <img
                src={"http://localhost:3001/" + asesiSkemaById?.asesi?.ijazah}
                alt={asesiSkemaById?.asesi?.ijazah}
                onClick={(e) => handleImage(asesiSkemaById?.asesi?.ijazah)}
                className="img"
                style={{ width: "100px", cursor: "pointer" }}
              />
            </div>
            <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>Transkrip</Typography>
              {/* <Typography
                sx={{ color: "black" }}
                onClick={(e) => handleImage(asesiSkemaById?.asesi?.transkrip)}
              >
                {asesiSkemaById?.asesi?.transkrip}
              </Typography> */}
              <img
                src={
                  "http://localhost:3001/" + asesiSkemaById?.asesi?.transkrip
                }
                alt={asesiSkemaById?.asesi?.transkrip}
                onClick={(e) => handleImage(asesiSkemaById?.asesi?.transkrip)}
                className="img"
                style={{ width: "100px", cursor: "pointer" }}
              />
            </div>
            <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>KTP</Typography>
              {/* <Typography
                sx={{ color: "black" }}
                onClick={(e) => handleImage(asesiSkemaById?.asesi?.img_ktp)}
              >
                {asesiSkemaById?.asesi?.img_ktp}
              </Typography> */}
              <img
                src={"http://localhost:3001/" + asesiSkemaById?.asesi?.img_ktp}
                alt={asesiSkemaById?.asesi?.img_ktp}
                onClick={(e) => handleImage(asesiSkemaById?.asesi?.img_ktp)}
                className="img"
                style={{ width: "100px", cursor: "pointer" }}
              />
            </div>
            <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>Pas Foto</Typography>
              {/* <Typography
                sx={{ color: "black" }}
                onClick={(e) => handleImage(asesiSkemaById?.asesi?.pas_foto)}
              >
                {asesiSkemaById?.asesi?.pas_foto}
              </Typography> */}
              <img
                src={"http://localhost:3001/" + asesiSkemaById?.asesi?.pas_foto}
                alt={asesiSkemaById?.asesi?.pas_foto}
                onClick={(e) => handleImage(asesiSkemaById?.asesi?.pas_foto)}
                className="img"
                style={{ width: "100px", cursor: "pointer" }}
              />
            </div>
            <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>
                Sertifikat Pendukung
              </Typography>
              {/* <Typography
                sx={{ color: "black" }}
                onClick={(e) =>
                  handleImage(asesiSkemaById?.asesi?.sertifikat_pelatihan_pendukung)
                }
              >
                {asesiSkemaById?.asesi?.sertifikat_pelatihan_pendukung}
              </Typography> */}
              <img
                src={
                  "http://localhost:3001/" +
                  asesiSkemaById?.asesi?.sertifikat_pelatihan_pendukung
                }
                alt={asesiSkemaById?.asesi?.sertifikat_pelatihan_pendukung}
                onClick={(e) =>
                  handleImage(
                    asesiSkemaById?.asesi?.sertifikat_pelatihan_pendukung
                  )
                }
                className="img"
                style={{ width: "100px", cursor: "pointer" }}
              />
            </div>
            <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>
                Surat Pernyataan
              </Typography>
              {/* <Typography
                sx={{ color: "black" }}
                onClick={(e) =>
                  handleImage(asesiSkemaById?.asesi?.sertifikat_pelatihan_pendukung)
                }
              >
                {asesiSkemaById?.asesi?.sertifikat_pelatihan_pendukung}
              </Typography> */}
              <img
                src={
                  "http://localhost:3001/" +
                  asesiSkemaById?.asesi?.surat_pernyataan
                }
                alt={asesiSkemaById?.asesi?.surat_pernyataan}
                onClick={(e) =>
                  handleImage(asesiSkemaById?.asesi?.surat_pernyataan)
                }
                className="img"
                style={{ width: "100px", cursor: "pointer" }}
              />
            </div>
            <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>Bukti Bayar</Typography>
              <div className="d-flex" style={{ width: "100%" }}>
                {/* <Typography
                  sx={{ color: "black" }}
                  onClick={(e) => handleImage(asesiSkemaById?.asesi?.bukti_bayar)}
                >
                  {asesiSkemaById?.asesi?.bukti_bayar}
                </Typography> */}
                <img
                  src={
                    "http://localhost:3001/" +
                    asesiSkemaById?.asesi?.bukti_bayar
                  }
                  alt={asesiSkemaById?.asesi?.bukti_bayar}
                  onClick={(e) =>
                    handleImage(asesiSkemaById?.asesi?.bukti_bayar)
                  }
                  className="img"
                  style={{ width: "100px", cursor: "pointer" }}
                />
                <div
                  className="d-flex "
                  style={{
                    width: "50%",
                    justifyContent: "flex-end",
                    height: "100%",
                    bottom: "0px",
                    position: "relative",
                    top: "30px",
                  }}
                >
                  <div style={{ marginTop: "20px" }}>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{
                        marginRight: "10px",
                        fontSize: "14px",
                        textTransform: "none",
                      }}
                      onClick={() => {
                        handleCheckBuktiBayar("paid");
                      }}
                    >
                      Terima
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        marginRight: "10px",
                        fontSize: "14px",
                        textTransform: "none",
                      }}
                      onClick={() => {
                        handleCheckBuktiBayar("unpaid");
                      }}
                    >
                      Tolak
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <ModalRekomendasiAsesi
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        nama_asesi={asesiSkemaById?.asesi?.nama_lengkap}
      />
    </>
  );
}
