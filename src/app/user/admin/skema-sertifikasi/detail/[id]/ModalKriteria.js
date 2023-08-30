import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Formik } from "formik";
import { TextField, TextareaAutosize } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addSkema, editSkema, fetchSkemaById } from "@/app/services/skema";
import {
  addUnitKompetensi,
  editUnitKompetensi,
} from "@/app/services/unitkompetensi";
import {
  addKriteriaKerja,
  editKriteriaKerja,
} from "@/app/services/kriteriakerja";

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
  width: "40%",
  paddingBottom: "20px",
};
export default function ModalKriteriaUnjukKerja(props) {
  console.log(props.idKriteria, "dt");
  let dispatch = useDispatch();

  let initialState = {
    elemen: props.modalKriteria === "edit" ? props.elemen : "",
    kriteriakerja:
      props.modalKriteria === "edit" ? props.kriteriakerja.join("\n") : "",
  };
  const [stateField, setStateField] = React.useState(initialState);

  function handleProsesSubmit(value) {
    console.log(value.kriteriakerja, "valuekerja");
    let arr = [];

    let input = {
      id_unit_kompetensi: props.idUnit,
      elemen: value.elemen,
      kriteriakerja: value.kriteriakerja.replace(/\r\n/g, "\n").split("\n"),
    };
    console.log(
      input.kriteriakerja,
      props.dtskema.id,
      "masuk handle submitkrtieria"
    );
    if (props.modalKriteria === "add") {
      dispatch(addKriteriaKerja(input, props.dtskema.id));
    } else {
      dispatch(editKriteriaKerja(input, props.dtskema.id, props.idKriteria));
    }
  }
  return (
    <div>
      {/* <Button onClick={props.handleOpen}>Open modal</Button> */}
      <Modal
        open={props.openKriteria}
        onClose={props.handleCloseKriteria}
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
                props.setOpenKriteria(false);
                props.setModalKriteria("");
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
            {props.modalKriteria === "add"
              ? "Form Tambah Kriteria Unjuk Kerja"
              : "Form Ubah Kriteria Unjuk Kerja"}
          </Typography>
          <Formik
            initialValues={initialState}
            enableReinitialize={props.modalKrtieria === "add" ? false : true}
            onSubmit={(values, { setSubmitting }) => {
              handleProsesSubmit(values);
              props.setOpenKriteria(false);
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
                      <label style={{ paddingTop: "20px" }}>Elemen </label>
                    </div>
                    <div className="col-9 mb-3">
                      <TextField
                        id="outlined-basic"
                        //   label="Outlined"
                        placeholder="elemen"
                        variant="outlined"
                        sx={{ width: "100%" }}
                        name="elemen"
                        value={values.elemen}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-3">
                      <label style={{ paddingTop: "20px" }}>
                        Kriteria Unjuk Kerja{" "}
                      </label>
                    </div>
                    <div className="col-9">
                      <TextareaAutosize
                        id="textarea"
                        // placeholder="kriteria unjuk kerja"
                        //   label="Outlined"
                        variant="outlined"
                        style={{
                          width: "100%",
                          height: "200px",
                          borderColor: "#c4c4c4",
                          borderRadius: "5px",
                          padding: "5px",
                        }}
                        name="kriteriakerja"
                        value={values.kriteriakerja}
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
