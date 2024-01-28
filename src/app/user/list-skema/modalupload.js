"use client";

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
  height: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  //   paddingBottom: "20px",
  p: 4,
};
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { Input } from "@mui/material";
import { useSelector } from "react-redux";

const ariaLabel = { "aria-label": "description" };

export default function ModalPembayaran(props) {
  const [bukti_bayar, setBuktiBayar] = React.useState();
  let router = useRouter();
  // let initialState = {
  //   nama_pemilik_rekening: "",
  // };

  // const [stateField, setStateField] = useState();
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log(user, "modaluploa");
  const [previewBuktiBayar, setPreview] = React.useState("");

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
          // showConfirmButton: false,
          confirmButtonColor: "#3085d6",
          title: "Upload Bukti Bayar ",
          confirmButtonText: "Tutup",
          // timer: 1500,
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/user/form-apl01");
          }
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
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "400px", md: "550px" },
            height: "auto",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            //   paddingBottom: "20px",
            p: 4,
          }}
        >
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
          <img
            src="/Group1000010538.svg"
            style={{ margin: "auto", display: "block" }}
          />
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#1976D2",
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "40px",
            }}
          >
            Silahkan upload bukti bayar Anda
          </Typography>
          <div>
            <Formik
              initialValues={{ nama_pemilik_rekening: "" }}
              //   validate={(values) => {
              //     const errors = {};
              //     if (!values.nama_pemilik_rekening) {
              //       errors.nama_pemilik_rekening =
              //         "Anda belum mengisi nama pemilik rekening";
              //     }
              //     return errors;
              //   }}
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
                  <div style={{ marginTop: "5px", marginBottom: "24px" }}>
                    <Button
                      variant="contained"
                      component="label"
                      sx={{
                        borderRadius: "4px",
                        background: "#1976D2",
                        textTransform: "capitalize",
                        width: "136px",
                      }}
                    >
                      upload{" "}
                      <FileDownloadOutlinedIcon sx={{ marginLeft: "7px" }} />
                      <input
                        type="file"
                        name="bukti_bayar"
                        style={{ fontSize: "14px" }}
                        onChange={(e) => {
                          console.log(e.target.files[0], "value bukti bayar");
                          setBuktiBayar(e.target.files[0]);
                          if (e.target.files[0]) {
                            const reader = new FileReader();

                            reader.onload = () => {
                              setPreview(reader.result);
                            };

                            reader.readAsDataURL(e.target.files[0]);
                          }
                        }}
                        onBlur={handleBlur}
                        value={values.bukti_bayar}
                        hidden
                      />
                    </Button>
                    <Box
                      component="img"
                      src={previewBuktiBayar}
                      sx={{
                        display: previewBuktiBayar !== "" ? "block" : "none",
                        width: "133px",
                        marginTop: "30px",
                        marginBottom: "30px",
                      }}
                    />
                  </div>
                  <label style={{ fontSize: "14px" }}>
                    Nama dan Nomor Pemilik Rekening
                  </label>
                  {/* <Typography sx={{ fontSize: "10px", color: "red" }}>
                    contoh: Andhika, BNI-123456
                  </Typography> */}
                  <div style={{ marginTop: "5px" }}>
                    {/* <input
                      className={`${styles.textinput}`}
                      type="text"
                      name="nama_pemilik_rekening"
                      style={{
                        width: "100%",
                        fontSize: "14px",
                        padding: "5px 0px 5px 5px",
                        border: "1px solid black",
                      }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    /> */}
                    {/* <div style={{ fontSize: "12px", color: "red" }}>
                      {errors.nama_pemilik_rekening &&
                        touched.nama_pemilik_rekening &&
                        errors.nama_pemilik_rekening}
                    </div> */}

                    <Input
                      placeholder="    contoh: Andhika, BNI-123456"
                      className={`${styles.textinput}`}
                      type="text"
                      name="nama_pemilik_rekening"
                      style={{
                        width: "100%",
                        fontSize: "14px",
                        padding: "0px 0px 5px 5px",
                      }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nama_pemilik_rekening}
                    />
                  </div>
                  <div
                    className="d-flex "
                    style={{ justifyContent: "flex-end" }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        fontSize: "14px",
                        marginTop: "40px",
                        paddingLeft: "40px",
                        paddingRight: "40px",
                        borderRadius: "4px",
                      }}
                    >
                      Kirim
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
