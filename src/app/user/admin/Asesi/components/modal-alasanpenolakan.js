import { CloseOutlined } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Formik } from "formik";
import { useParams, useRouter } from "next/navigation";
import * as React from "react";
import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 530,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalAlasanPenolakan(props) {
  console.log(props.openModal, "modal");
  const [openModalTtd, setOpenModalTtd] = React.useState(false);
  // const handleOpenModalTtd = () => setOpenModalTtd(true);
  // const handleCloseModalTtd = () => setOpenModalTtd(false);
  let params = useParams();
  // let id_asesikema = params.id;
  let router = useRouter();

  function handleUpdateStatusCek() {
    let input = { status_cek: "revisi" };

    axios({
      method: "PATCH",
      url: `/api/update-status-cek/${props.idAsesiSkema}`,
      data: input,
    })
      .then((data) => {
        console.log(data);
        // props.setOpenModalPenolakan(false);
        router.push("/user/admin/Asesi");
      })
      .catch((err) => {
        console.log(err);
      });
    // .finally((_) => dispatch(Loading(false)));
  }

  function prosesPenolakan(value) {
    console.log(value, "valuuee");
    // let idAdmin = JSON.parse(localStorage.getItem("user"));
    let input = {
      alasan_penolakan: value.alasan_penolakan,
    };
    // props.setOpenModalPenolakan(false);
    // handleOpenModalTtd();
    axios({
      method: "PUT",
      url: `/api/edit-asesi/${props.id_asesi}`,
      data: input,
    })
      .then((data) => {
        props.setOpenModalPenolakan(false);
        Swal.fire({
          title: "Penolakan Berhasil",

          confirmButtonText: "Ok",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            handleUpdateStatusCek();
          }
        });
      })
      .catch((err) => {
        console.log(err, "errors");
      });
  }
  return (
    <React.Fragment>
      <Modal
        open={props.openModalPenolakan}
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
                props.setOpenModalPenolakan(false);
                // props.setStatusForm("");
              }}
            />
          </div>
          <Typography
            id="modal-modal-title"
            sx={{ fontSize: "15px", marginBottom: "15px", fontWeight: 600 }}
          >
            Silahkan masukkan alasan penolakan Anda
          </Typography>
          <Formik
            initialValues={{ alasan_penolakan: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.alasan_penolakan) {
                errors.alasan_penolakan = "Alasan Penolakan Belum Diisi";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              prosesPenolakan(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <label
                  style={{
                    fontSize: "15px",
                    marginBottom: "5px",
                  }}
                >
                  Alasan Penolakan :
                </label>
                <div>
                  <textarea
                    type="alasan_penolakan"
                    name="alasan_penolakan"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.alasan_penolakan}
                    style={{ fontSize: "14px", width: "100%", height: "300px" }}
                  />
                </div>
                <div style={{ fontSize: "11px", color: "red" }}>
                  {errors.alasan_penolakan &&
                    touched.alasan_penolakan &&
                    errors.alasan_penolakan}
                </div>
                <div
                  className="d-flex"
                  style={{ justifyContent: "flex-end", marginTop: "10px" }}
                >
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ fontSize: "15px", textTransform: "none" }}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </Box>
      </Modal>
      {/* <ModalTtdAdmin
        openModalTtd={openModalTtd}
        handleCloseModalTtd={handleCloseModalTtd}
      /> */}
    </React.Fragment>
  );
}
