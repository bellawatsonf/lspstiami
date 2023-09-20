"use client";

import { Box, Typography, Button } from "@mui/material";
import { Modal, Backdrop, Fade } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";

import { useParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import ModalRekomendasiAsesi from "../../components/modal";
import {
  // fetchAsesiSkemaById,
  fetchAsesiSkemaByIdDetail,
} from "@/app/services/asesiskema";
import { Loading } from "@/app/services/skema";
import LoadingComponent from "@/app/(public)/component/loading";
import ModalAlasanPenolakan from "../../components/modal-alasanpenolakan";

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

export default function DetailAsesi_Pendaftaran() {
  const asesiSkemaById = useSelector(
    (state) => state.asesiskema.AsesiSkemaById
  );
  // console.log(asesiSkemaById, "asesiSkemaById");
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  console.log(id, "id");
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [image, setImage] = useState("false");
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const [openModalPenolakan, setOpenModalPenolakan] = useState(false);
  // const handleOpenModalPenolakan = () => setOpenModalPenolakan(true);
  // const handleCloseModalPenolakan = () => setOpenModalPenolakan(false);
  let loading = useSelector((state) => state.skema.loading);

  const handleImage = (value) => {
    console.log(value);
    setImage(`${value}`);
    setOpen(true);
    console.log(image);
  };

  useEffect(() => {
    dispatch(fetchAsesiSkemaByIdDetail(id));
  }, []);

  // function handleCheckBuktiBayar(status) {
  //   let input = { status_pembayaran: status };
  //   dispatch(Loading(true));
  //   axios({
  //     method: "PATCH",
  //     url: `/api/edit-status-pembayaran/${asesiSkemaById?.asesi?.id}`,
  //     data: input,
  //   })
  //     .then((data) => {
  //       console.log(data);
  //       handleOpenModal();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .finally((_) => dispatch(Loading(false)));
  // }

  function handleUpdateStatusCek(param) {
    let input = { status_cek: param };
    // dispatch(Loading(true));
    if (param === "terima") {
      handleOpenModal();
      axios({
        method: "PATCH",
        url: `/api/update-status-cek/${id}`,
        data: input,
      })
        .then((data) => {
          console.log(data);
          // handleOpenModal();
        })
        .catch((err) => {
          console.log(err);
        });
      // .finally((_) => dispatch(Loading(false)));
    } else if (param === "revisi") {
      // alert("tampili modal input revisi6+");
      setOpenModalPenolakan(true);
    }
  }

  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <Fragment>
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
                {asesiSkemaById?.asesi?.nama_lengkap ?? <p>-</p>}
              </Typography>
            </div>
            <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>
                Jenis Skema Sertifikasi
              </Typography>
              <Typography sx={{ color: "black" }}>
                {asesiSkemaById?.skema?.nama_skema ?? <p>-</p>}
              </Typography>
            </div>
            <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>Email</Typography>
              <Typography sx={{ color: "black" }}>
                {asesiSkemaById?.asesi?.email ?? <p>-</p>}
              </Typography>
            </div>
            <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>Nomor Telepon</Typography>
              <Typography sx={{ color: "black" }}>
                {asesiSkemaById?.asesi?.phone_number ?? <p>-</p>}
              </Typography>
            </div>
            {/* <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>Birth</Typography>
              <Typography sx={{ color: "black" }}>
                {asesiSkemaById?.asesi?.tgl_lahir ?? <p>-</p>}
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
                {asesiSkemaById?.asesi?.nama_instansi ?? <p>-</p>}
              </Typography>
            </div>
            <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>Email</Typography>
              <Typography sx={{ color: "black" }}>
                {asesiSkemaById?.asesi?.email_kantor ?? <p>-</p>}
              </Typography>
            </div>
            <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>Alamat </Typography>
              <Typography sx={{ color: "black" }}>
                {asesiSkemaById?.asesi?.alamat_kantor ?? <p>-</p>}
              </Typography>
            </div>
            <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>Nomor Telepon</Typography>
              <Typography sx={{ color: "black" }}>
                {asesiSkemaById?.asesi?.tlp_kantor ?? <p>-</p>}
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
              <a
                href={asesiSkemaById?.asesi?.ijazah}
                target="_blank"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Typography sx={{ color: "#acacac" }}>Ijazah</Typography>
              </a>

              {/* <Typography
                sx={{ color: "black" }}
                onClick={(e) => handleImage(asesiSkemaById?.asesi?.ijazah)}
              >
                {asesiSkemaById?.asesi?.ijazah}
              </Typography> */}
              {/* <img
                src={asesiSkemaById?.asesi?.ijazah}
                alt={asesiSkemaById?.asesi?.ijazah}
                onClick={(e) => handleImage(asesiSkemaById?.asesi?.ijazah)}
                className="img"
                style={{ width: "100px", cursor: "pointer" }}
              /> */}
              <embed
                src={asesiSkemaById?.asesi?.ijazah}
                style={{ width: "100px", height: "100px" }}
              ></embed>
            </div>
            <div className="col-6 mb-3">
              <a
                href={asesiSkemaById?.asesi?.transkrip}
                target="_blank"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Typography sx={{ color: "#acacac" }}>Transkrip</Typography>
              </a>
              {/* <Typography
                sx={{ color: "black" }}
                onClick={(e) => handleImage(asesiSkemaById?.asesi?.transkrip)}
              >
                {asesiSkemaById?.asesi?.transkrip}
              </Typography> */}
              {/* <img
                src={asesiSkemaById?.asesi?.transkrip}
                alt={asesiSkemaById?.asesi?.transkrip}
                onClick={(e) => handleImage(asesiSkemaById?.asesi?.transkrip)}
                className="img"
                style={{ width: "100px", cursor: "pointer" }}
              /> */}

              <embed
                src={asesiSkemaById?.asesi?.transkrip}
                style={{ width: "100px", height: "100px" }}
              ></embed>
            </div>
            <div className="col-6 mb-3">
              <a
                href={asesiSkemaById?.asesi?.img_ktp}
                target="_blank"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Typography sx={{ color: "#acacac" }}>KTP</Typography>
              </a>
              {/* <Typography
                sx={{ color: "black" }}
                onClick={(e) => handleImage(asesiSkemaById?.asesi?.img_ktp)}
              >
                {asesiSkemaById?.asesi?.img_ktp}
              </Typography> */}
              {/* <img
                src={asesiSkemaById?.asesi?.img_ktp}
                alt={asesiSkemaById?.asesi?.img_ktp}
                onClick={(e) => handleImage(asesiSkemaById?.asesi?.img_ktp)}
                className="img"
                style={{ width: "100px", cursor: "pointer" }}
              /> */}
              <embed
                src={asesiSkemaById?.asesi?.img_ktp}
                style={{ width: "100px", height: "100px" }}
              ></embed>
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
                src={asesiSkemaById?.asesi?.pas_foto}
                alt={asesiSkemaById?.asesi?.pas_foto}
                onClick={(e) => handleImage(asesiSkemaById?.asesi?.pas_foto)}
                className="img"
                style={{ width: "100px", cursor: "pointer" }}
              />
            </div>
            <div className="col-6 mb-3">
              <a
                href={asesiSkemaById?.asesi?.sertifikat_pelatihan_pendukung}
                target="_blank"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Typography sx={{ color: "#acacac" }}>
                  Sertifikat Pendukung
                </Typography>
              </a>
              {/* <Typography
                sx={{ color: "black" }}
                onClick={(e) =>
                  handleImage(asesiSkemaById?.asesi?.sertifikat_pelatihan_pendukung)
                }
              >
                {asesiSkemaById?.asesi?.sertifikat_pelatihan_pendukung}
              </Typography> */}
              {/* <img
                src={asesiSkemaById?.asesi?.sertifikat_pelatihan_pendukung}
                alt={asesiSkemaById?.asesi?.sertifikat_pelatihan_pendukung}
                onClick={(e) =>
                  handleImage(
                    asesiSkemaById?.asesi?.sertifikat_pelatihan_pendukung
                  )
                }
                className="img"
                style={{ width: "100px", cursor: "pointer" }}
              /> */}
              <embed
                src={asesiSkemaById?.asesi?.sertifikat_pelatihan_pendukung}
                style={{ width: "100px", height: "100px" }}
              ></embed>
            </div>
            <div className="col-6 mb-3">
              <a
                href={asesiSkemaById?.asesi?.surat_pernyataan}
                target="_blank"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Typography sx={{ color: "#acacac" }}>
                  Surat Pernyataan
                </Typography>
              </a>

              {/* <Typography
                sx={{ color: "black" }}
                onClick={(e) =>
                  handleImage(asesiSkemaById?.asesi?.sertifikat_pelatihan_pendukung)
                }
              >
                {asesiSkemaById?.asesi?.sertifikat_pelatihan_pendukung}
              </Typography> */}
              {/* <img
                src={asesiSkemaById?.asesi?.surat_pernyataan}
                alt={asesiSkemaById?.asesi?.surat_pernyataan}
                onClick={(e) =>
                  handleImage(asesiSkemaById?.asesi?.surat_pernyataan)
                }
                className="img"
                style={{ width: "100px", cursor: "pointer" }}
              /> */}
              <embed
                src={asesiSkemaById?.asesi?.surat_pernyataan}
                style={{ width: "100px", height: "100px" }}
              ></embed>
            </div>
            {asesiSkemaById?.jenis_paket === "pengayaan-ujikom" ? (
              <div className="col-6 mb-3">
                <Typography sx={{ color: "#acacac" }}>Bukti Bayar</Typography>
                <div className="d-flex" style={{ width: "100%" }}>
                  {/* <img
                  src={asesiSkemaById?.asesi?.bukti_bayar}
                  alt={asesiSkemaById?.asesi?.bukti_bayar}
                  onClick={(e) =>
                    handleImage(asesiSkemaById?.asesi?.bukti_bayar)
                  }
                  className="img"
                  style={{ width: "100px", cursor: "pointer" }}
                /> */}
                  <img
                    src={asesiSkemaById?.asesi?.bukti_bayar}
                    alt={asesiSkemaById?.asesi?.bukti_bayar}
                    onClick={(e) =>
                      handleImage(asesiSkemaById?.asesi?.bukti_bayar)
                    }
                    className="img"
                    style={{ width: "100px", cursor: "pointer" }}
                  />

                  {/* <div
                    className="d-flex "
                    style={{
                      width: "50%",
                      justifyContent: "flex-end",
                      height: "100%",
                      bottom: "0px",
                      position: "relative",
                      // top: "30px",
                    }}
                  >
                    {asesiSkemaById?.status_cek === "terima" ? null : (
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
                          // handleCheckBuktiBayar("paid");
                          handleUpdateStatusCek("terima");
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
                          // handleCheckBuktiBayar("unpaid");
                          handleUpdateStatusCek("revisi");
                        }}
                      >
                        Tolak
                      </Button>
                    </div>
                  )}
                  </div> */}
                </div>
                <Typography
                  sx={{
                    color: "black",
                    paddingTop: "7px",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  nama pemilik rekening:{" "}
                  {asesiSkemaById?.asesi?.nama_pemilik_rekening}
                </Typography>
              </div>
            ) : null}

            <div className="col-6 mb-3">
              <Typography sx={{ color: "#acacac" }}>
                Tanda Tangan Asesi
              </Typography>
              <div className="d-flex" style={{ width: "100%" }}>
                {/* <img
                  src={asesiSkemaById?.asesi?.bukti_bayar}
                  alt={asesiSkemaById?.asesi?.bukti_bayar}
                  onClick={(e) =>
                    handleImage(asesiSkemaById?.asesi?.bukti_bayar)
                  }
                  className="img"
                  style={{ width: "100px", cursor: "pointer" }}
                /> */}
                <img
                  // src={asesiSkemaById?.asesi?.ttd_asesi}.
                  src={`/api/download-asesi/${
                    asesiSkemaById?.asesi?.ttd_asesi?.split("/")[4]
                  }`}
                  alt={asesiSkemaById?.asesi?.ttd_asesi}
                  onClick={(e) => handleImage(asesiSkemaById?.asesi?.ttd_asesi)}
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
                    // top: "30px",
                  }}
                >
                  {asesiSkemaById?.status_cek === "terima" ? null : (
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
                          // handleCheckBuktiBayar("paid");
                          handleUpdateStatusCek("terima");
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
                          // handleCheckBuktiBayar("unpaid");
                          handleUpdateStatusCek("revisi");
                        }}
                      >
                        Tolak
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style}> */}
        <img
          src={image}
          style={{
            width: "65%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* </Box> */}
      </Modal>
      <ModalRekomendasiAsesi
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        nama_asesi={asesiSkemaById?.asesi?.nama_lengkap}
        id_asesi={asesiSkemaById.asesi?.id}
        setOpenModal={setOpenModal}
      />
      <ModalAlasanPenolakan
        openModalPenolakan={openModalPenolakan}
        setOpenModalPenolakan={setOpenModalPenolakan}
        id_asesi={asesiSkemaById.asesi?.id}
        idAsesiSkema={id}
      />
    </Fragment>
  );
}
