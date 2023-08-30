import { CloseOutlined } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import * as React from "react";
import Swal from "sweetalert2";
import styles from "./styles.module.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 320,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  //   paddingBottom: "20px",
  p: 4,
};

export default function ModalUpload(props) {
  const [bukti_bayar, setBuktiBayar] = React.useState();
  let router = useRouter();
  // let initialState = {
  //   nama_pemilik_rekening: "",
  // };

  // const [stateField, setStateField] = useState();
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log(user, "modaluploa");

  function handleSubmit(values) {
    let formData = new FormData();
    formData.append("nama_pemilik_rekening", values.nama_pemilik_rekening);
    formData.append("bukti_bayar", bukti_bayar);

    axios({
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      url: `/api/edit-asesi/${user.id}`,
      data: formData,
    })
      .then((data) => {
        console.log(data, "berhasil dftr apl1");
        props.setOpenUpload(false);

        Swal.fire({
          position: "center",
          icon: "success",
          showConfirmButton: false,
          confirmButtonColor: "#3085d6",
          title: "Upload Bukti Bayar ",
          // confirmButtonText: "Ok!",
          timer: 1500,
        }).then((result) => {
          // if (result.isConfirmed) {
          router.push("/user/profileuser");
          // }
        });
      })
      .catch((e) => {
        console.log(e, "errorini");
      });
  }
  return (
    <div>
      {/* <Button onClick={props.handleOpen}>Open modal</Button> */}
      <Modal
        open={props.openUpload}
        // onClose={handleClose}
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
                props.setOpenUpload(false);
              }}
            />
          </div>
          <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
            Silahkan upload bukti bayar Anda
          </Typography>
          <div style={{ marginTop: "20px" }}>
            <Formik
              initialValues={{ nama_pemilik_rekening: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.nama_pemilik_rekening) {
                  errors.nama_pemilik_rekening =
                    "Anda belum mengisi nama pemilik rekening";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                handleSubmit(values);
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
                  <label style={{ fontSize: "14px" }}>Bukti Bayar</label>
                  <div style={{ marginTop: "5px", marginBottom: "15px" }}>
                    <input
                      type="file"
                      name="bukti_bayar"
                      style={{ fontSize: "14px" }}
                      onChange={(e) => {
                        console.log(e.target.files[0], "value bukti bayar");
                        setBuktiBayar(e.target.files[0]);
                      }}
                      onBlur={handleBlur}
                      value={values.bukti_bayar}
                    />
                  </div>
                  <label style={{ fontSize: "14px" }}>
                    Nama Pemilik Rekening
                  </label>
                  <div style={{ marginTop: "5px" }}>
                    <input
                      className={`${styles.textinput}`}
                      type="text"
                      name="nama_pemilik_rekening"
                      style={{
                        width: "100%",
                        fontSize: "14px",
                        padding: "5px 0px 5px 0px",
                      }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nama_pemilik_rekening}
                    />
                    <div style={{ fontSize: "12px", color: "red" }}>
                      {errors.nama_pemilik_rekening &&
                        touched.nama_pemilik_rekening &&
                        errors.nama_pemilik_rekening}
                    </div>
                  </div>
                  <div
                    className="d-flex "
                    style={{ justifyContent: "flex-end" }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ fontSize: "10px", marginTop: "20px" }}
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
