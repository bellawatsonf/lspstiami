import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Formik } from "formik";
import { TextField } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addSkema, editSkema, fetchSkemaById } from "@/app/services/skema";
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
  console.log(props.stateField, "statusmodal");
  let dispatch = useDispatch();
  let dtById = useSelector((state) => state.skema.skemaById);
  console.log(dtById, "byid");
  let initialState = {
    no_skema: props.statusModal === "edit" ? dtById.no_skema : "",
    nama_skema: props.statusModal === "edit" ? dtById.nama_skema : "",
  };
  const [stateField, setStateField] = React.useState(initialState);

  function handleSubmit(value) {
    let input = {
      no_skema: value.no_skema,
      nama_skema: value.nama_skema,
    };
  }

  function handleProsesSubmit(value) {
    let input = {
      no_skema: value.no_skema,
      nama_skema: value.nama_skema,
    };
    console.log("masuk handle submit");
    if (props.statusModal === "add") {
      dispatch(addSkema(input));
    } else {
      dispatch(editSkema(input, dtById.id));
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
            initialValues={initialState}
            enableReinitialize={props.statusModal === "add" ? false : true}
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
                      <label style={{ paddingTop: "20px" }}>No. Skema </label>
                    </div>
                    <div className="col-9 mb-3">
                      <TextField
                        id="outlined-basic"
                        //   label="Outlined"
                        placeholder="nomor skema"
                        variant="outlined"
                        sx={{ width: "100%" }}
                        name="no_skema"
                        value={values.no_skema}
                        onBlur={handleBlur}
                        onChange={handleChange}
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
                        name="nama_skema"
                        value={values.nama_skema}
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
