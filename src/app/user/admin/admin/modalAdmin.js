import { addAdmin, editAdmin } from "@/app/services/admin";
import { CloseOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Formik } from "formik";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
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
export default function ModalAdmin(props) {
  console.log(props.stateField, "statusmodal");
  let dispatch = useDispatch();
  let dtById = useSelector((state) => state.admin.adminById);
  console.log(dtById, "byid");
  let initialState = {
    nama: props.statusForm === "edit" ? dtById.nama : "",
    email: props.statusForm === "edit" ? dtById.email : "",
    password: props.statusForm === "edit" ? dtById.password : "",
  };
  const [stateField, setStateField] = React.useState(initialState);

  //   function handleSubmit(value) {
  //     let input = {
  //       nama: value.nama,
  //       email: value.email,
  //       password: value.password,
  //     };
  //   }

  function handleProsesSubmit(value) {
    let input = {
      nama: value.nama,
      email: value.email,
      password: value.password,
    };
    console.log("masuk handle submit");
    if (props.statusForm === "add") {
      dispatch(addAdmin(input));
    } else {
      dispatch(editAdmin(input, dtById.id));
    }
  }
  return (
    <div>
      {/* <Button onClick={props.handleOpen}>Open modal</Button> */}
      <Modal
        open={props.open}
        onClose={props.handleClose}
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
                props.setStatusForm("");
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
            {props.statusForm === "add"
              ? "Form Tambah Admin"
              : "Form Ubah Admin"}
          </Typography>
          <Formik
            initialValues={initialState}
            enableReinitialize={props.statusForm === "add" ? false : true}
            onSubmit={(values, { setSubmitting }) => {
              handleProsesSubmit(values);
              props.setOpen(false);
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
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-3 mb-3">
                      <label style={{ paddingTop: "20px" }}>Nama Admin</label>
                    </div>
                    <div className="col-9 mb-3">
                      <TextField
                        id="outlined-basic"
                        //   label="Outlined"
                        placeholder="nama admin"
                        variant="outlined"
                        sx={{ width: "100%" }}
                        name="nama"
                        value={values.nama}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-3 mb-3">
                      <label style={{ paddingTop: "20px" }}>Email Admin </label>
                    </div>
                    <div className="col-9 mb-3">
                      <TextField
                        id="outlined-basic"
                        placeholder="email admin"
                        //   label="Outlined"
                        variant="outlined"
                        sx={{ width: "100%" }}
                        name="email"
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-3">
                      <label style={{ paddingTop: "20px" }}>Password </label>
                    </div>
                    <div className="col-9">
                      <TextField
                        id="outlined-basic"
                        placeholder="password"
                        //   label="Outlined"
                        variant="outlined"
                        sx={{ width: "100%" }}
                        name="password"
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex"
                    style={{ justifyContent: "flex-end" }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        marginTop: "20px",
                        textTransform: "none",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        borderRadius: "40px",
                      }}
                      type="submit"
                      // onClick={() => props.setOpen(false)}
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </React.Fragment>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
