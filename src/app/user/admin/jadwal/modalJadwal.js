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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { addJadwal, editJadwal } from "@/app/services/jadwal";
import { Loading } from "@/app/services/skema";
import { useEffect } from "react";
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

const useStyles = makeStyles({
  datestyle: {
    "& .MuiFormControl-root": {
      width: "100%",
    },
  },
});
export default function ModalJadwal(props) {
  const classes = useStyles();
  let dispatch = useDispatch();
  let dtById = useSelector((state) => state.jadwal.jadwalById);
  console.log(new Date(dtById.tgl), "tgl");
  let initialState = {
    tuk: props.statusForm === "edit" ? dtById.tuk : "",
  };
  const [stateField, setStateField] = React.useState(initialState);
  const [tipe, setTipe] = React.useState(
    props.statusForm === "edit" ? dtById.tipe : ""
  );
  console.log(tipe, "tipe");
  const [selectedDate, setDate] = useState(
    props.statusForm === "edit" ? new Date(dtById.tgl) : ""
  );

  //   function handleSubmit(value) {
  //     let input = {
  //       nama: value.nama,
  //       email: value.email,
  //       password: value.password,
  //     };
  //   }

  console.log(dtById, props.id, "jadwalbyid");

  function handleProsesSubmit(value) {
    let input = {
      // tgl: new Date(selectedDate).toISOString().split("T")[0],
      tgl: selectedDate,
      tuk: value.tuk,
      tipe: tipe,
    };
    console.log(input, selectedDate, "input jadwal");
    if (props.statusForm === "add") {
      dispatch(addJadwal(input, props.stateField));
      props.setOpen(false);
      // dispatch(Loading(true));
    } else {
      dispatch(editJadwal(input, props.id));
      props.setOpen(false);
      // dispatch(Loading(true));
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
              ? "Form Tambah Jadwal"
              : "Form Edit Jadwal"}
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
                      <label style={{ paddingTop: "20px" }}>Tipe</label>
                    </div>
                    <div className="col-9 mb-3">
                      <FormControl fullWidth>
                        <InputLabel>Tipe</InputLabel>
                        <Select
                          // labelId="demo-simple-select-label"
                          // id="demo-simple-select"
                          value={tipe}
                          // label="Tipe"
                          onChange={(e) => setTipe(e.target.value)}
                        >
                          <MenuItem value="pengayaan">Pengayaan</MenuItem>
                          <MenuItem value="ujikom">Ujian</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="col-3 mb-3">
                      <label style={{ paddingTop: "20px" }}>
                        Tanggal Pelaksanaan
                      </label>
                    </div>
                    <div className="col-9 mb-3">
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          // value={props.values.tgl_lahir}
                          // onChange={(newValue) => {
                          //   setStateField((prevState) => {
                          //     return {
                          //       ...prevState,
                          //       tgl_lahir: newValue,
                          //     };
                          //   });
                          // }}
                          className={classes.datestyle}
                          sx={{ width: "100%" }}
                          format="YYYY-MM-DD"
                          renderInput={(params) => <TextField {...params} />}
                          value={selectedDate}
                          onChange={(newValue) => {
                            console.log(newValue, "input jadwal newvalue");
                            let dt = newValue.toISOString().split("T")[0];
                            console.log(dt, "input jadwal datanya");
                            setDate(newValue);
                          }}
                        />
                      </LocalizationProvider>
                    </div>
                    <div className="col-3">
                      <label style={{ paddingTop: "20px" }}>TUK </label>
                    </div>
                    <div className="col-9">
                      <TextField
                        id="outlined-basic"
                        placeholder="tuk"
                        //   label="Outlined"
                        variant="outlined"
                        sx={{ width: "100%" }}
                        name="tuk"
                        value={values.tuk}
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
