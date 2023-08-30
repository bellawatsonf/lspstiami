import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Formik } from "formik";
import { TextField } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  width: "30%",
  paddingBottom: "20px",
};
export default function ModalForm(props) {
  console.log(props.statusModal, "statusmodal");
  // let initialState = {
  //   no_skema: "",
  //   nama_skema: "",
  // };
  // const [stateField, setStateField] = React.useState("");
  // function handleSubmit(value) {
  //   let input = {
  //     no_skema: value.no_skema,
  //     nama_skema: value.nama_skema,
  //   };
  // }
  return (
    <div>
      {/* <Button onClick={props.handleOpen}>Open modal</Button> */}
      <Modal
        open={props.open}
        onClose={props.andleClose}
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
                props.setOpen(false);
                props.setStatusModal("");
              }}
            />
          </div>
          <Typography
            sx={{
              paddingBottom: "35px",
              paddingTop: "20px",
              textAlign: "center",
              fontWEight: 600,
              fontSize: "25px",
            }}
          >
            {props.statusModal === "add"
              ? "Form Tambah Skema"
              : "Form Ubah Skema"}
          </Typography>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
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
              <React.Fragment>
                <div className="row">
                  <div className="col-3 mb-3">
                    <label style={{ paddingTop: "20px" }}>No. Skema </label>
                  </div>
                  <div className="col-9 mb-3">
                    <TextField
                      id="outlined-basic"
                      //   label="Outlined"
                      placeholder="nomor skema"
                      variant="outlined"
                      sx={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-3">
                    <label style={{ paddingTop: "20px" }}>Nama Skema </label>
                  </div>
                  <div className="col-9">
                    <TextField
                      id="outlined-basic"
                      placeholder="nama skema"
                      //   label="Outlined"
                      variant="outlined"
                      sx={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="d-flex" style={{ justifyContent: "flex-end" }}>
                  <Button
                    variant="contained"
                    sx={{
                      marginTop: "20px",
                      textTransform: "none",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      borderRadius: "40px",
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </React.Fragment>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
