import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ModalTtdAdmin from "./modalTtdAdmin";
import axios from "axios";
import { useParams } from "next/navigation";
import { CloseOutlined } from "@mui/icons-material";
import Swal from "sweetalert2";

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

export default function ModalRekomendasiAsesi(props) {
  console.log(props.openModal, "modal");
  const [openModalTtd, setOpenModalTtd] = React.useState(false);
  const handleOpenModalTtd = () => setOpenModalTtd(true);
  const handleCloseModalTtd = () => setOpenModalTtd(false);
  let params = useParams();
  let id_asesikema = params.id;

  function prosesRekomendasiAsesi(value) {
    let idAdmin = JSON.parse(sessionStorage.getItem("user"));
    let input = {
      rekomendasi_sebagai_asesi: value,
      id_asesi_skema: id_asesikema,
      id_admin: idAdmin.id,
      status_ujikom: "aktif",
      id_asesi: props.id_asesi,
    };
    // props.handleCloseModal();
    // handleOpenModalTtd();
    axios({
      method: "POST",
      url: "/api/add-apl01",
      data: input,
    })
      .then((data) => {
        // Swal.fire({
        //   position: "top-end",
        //   icon: "success",
        //   title: "berhasil memperbaharui data",
        //   showConfirmButton: false,
        //   timer: 1500,
        // });
        console.log(data, "ini datanya");
        props.handleCloseModal();
        handleOpenModalTtd();
      })
      .catch((err) => {
        console.log(err, "errors");
      });
  }
  return (
    <>
      <Modal
        open={props.openModal}
        // onClose={props.handleCloseModal}
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
                props.setOpenModal(false);
                // props.setStatusForm("");
              }}
            />
          </div>
          <Typography id="modal-modal-title" sx={{ fontSize: "17px" }}>
            Apakah Anda yakin akan merekomendasikan <b>{props.nama_asesi}</b>{" "}
            Sebagai Asesi ?
          </Typography>
          <div className="d-flex justify-content-center mt-5">
            <Button
              variant="contained"
              color="success"
              sx={{
                marginRight: "10px",
                fontSize: "14px",
                textTransform: "none",
              }}
              onClick={() => {
                prosesRekomendasiAsesi(true);
              }}
            >
              Ya
            </Button>
            <Button
              variant="contained"
              sx={{
                marginRight: "10px",
                fontSize: "14px",
                textTransform: "none",
                background: "	#A9A9A9",
              }}
              onClick={() => {
                prosesRekomendasiAsesi(false);
              }}
            >
              Tidak
            </Button>
          </div>
        </Box>
      </Modal>
      <ModalTtdAdmin
        openModalTtd={openModalTtd}
        handleCloseModalTtd={handleCloseModalTtd}
        idAsesi={props.id_asesi}
      />
    </>
  );
}
