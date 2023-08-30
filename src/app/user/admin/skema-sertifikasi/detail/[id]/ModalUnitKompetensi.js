import {
  addUnitKompetensi,
  editUnitKompetensi,
} from "@/app/services/unitkompetensi";
import { CloseOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Formik } from "formik";
import * as React from "react";
import { useDispatch } from "react-redux";

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
export default function ModalUnitKompetensi(props) {
  //   console.log(props.dtUnitKompetensi, "dt");
  let dispatch = useDispatch();

  let initialState = {
    kode_unit: props.modalUnit === "edit" ? props.kode_unit : "",
    judul_unit: props.modalUnit === "edit" ? props.judul_unit : "",
  };
  // const [stateField, setStateField] = React.useState(initialState);

  function handleProsesSubmit(value) {
    let input = {
      id_skema: props.dtskema.id,
      kode_unit: value.kode_unit,
      judul_unit: value.judul_unit,
    };
    console.log(input, props.idUnit, "masuk handle submit");
    if (props.modalUnit === "add") {
      dispatch(addUnitKompetensi(input));
    } else {
      dispatch(editUnitKompetensi(input, props.idUnit));
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
                props.setModalUnit("");
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
            {props.modalUnit === "add"
              ? "Form Tambah Unit Kompetensi"
              : "Form Ubah Unit Kompetensi"}
          </Typography>
          <Formik
            initialValues={initialState}
            enableReinitialize={props.modalUnit === "add" ? false : true}
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
                      <label style={{ paddingTop: "20px" }}>Kode Unit </label>
                    </div>
                    <div className="col-9 mb-3">
                      <TextField
                        id="outlined-basic"
                        //   label="Outlined"
                        placeholder="kode unit"
                        variant="outlined"
                        sx={{ width: "100%" }}
                        name="kode_unit"
                        value={values.kode_unit}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-3">
                      <label style={{ paddingTop: "20px" }}>Judul Unit </label>
                    </div>
                    <div className="col-9">
                      <TextField
                        id="outlined-basic"
                        placeholder="judul unit"
                        //   label="Outlined"
                        variant="outlined"
                        sx={{ width: "100%" }}
                        name="judul_unit"
                        value={values.judul_unit}
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
