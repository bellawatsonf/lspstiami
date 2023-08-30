import { addAsesor, editAsesor } from "@/app/services/asesor";
import { CloseOutlined } from "@mui/icons-material";
import { FormControl, MenuItem, Select, TextField } from "@mui/material";
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
  width: "40%",
  paddingBottom: "20px",
};
export default function ModalAdmin(props) {
  console.log(props.stateField, "statusmodal");
  let dispatch = useDispatch();
  let dtById = useSelector((state) => state.asesor.asesorById);
  let skema = useSelector((state) => state.skema.skema);
  console.log(dtById, "byid");
  // let initialState = {
  //   nama: props.statusForm === "edit" ? dtById?.nama : "",
  //   email: props.statusForm === "edit" ? dtById?.email : "",
  //   password: props.statusForm === "edit" ? dtById?.password : "",
  //   no_reg: props.statusForm === "edit" ? dtById?.no_reg : "",
  //   // id_skema: props.statusForm === "edit" ? dtById?.id_skema : "",
  // };
  let initialState = {
    nama: "",
    email: "",
    password: "",
    no_reg: "",
    // id_skema: props.statusForm === "edit" ? dtById?.id_skema : "",
  };
  const [stateField, setStateField] = React.useState(initialState);
  const [selectedSkema, setSkema] = React.useState("");
  console.log(dtById?.id_skema, "--", selectedSkema, "selected");

  //   function handleSubmit(value) {
  //     let input = {
  //       nama: value.nama,
  //       email: value.email,
  //       password: value.password,
  //     };
  //   }
  React.useEffect(() => {
    // fetchAsesorById(props.id);
    console.log("useeffect");
    if (dtById !== undefined) {
      setStateField((prevState) => {
        return {
          ...prevState,
          nama: dtById?.nama,
          email: dtById?.email,
          password: dtById?.password,
          no_reg: dtById?.no_reg,
        };
      });
      setSkema(dtById?.id_skema);
    }
  }, [dtById]);
  function handleProsesSubmit(value) {
    let input = {
      nama: value.nama,
      no_reg: value.no_reg,
      email: value.email,
      password: value.password,
      id_skema: selectedSkema,
    };
    console.log(input, "input asesor");
    if (props.statusForm === "add") {
      dispatch(addAsesor(input));
    } else {
      dispatch(editAsesor(input, props.id));
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
              ? "Form Tambah Asesor"
              : "Form Ubah Asesor"}
          </Typography>
          <Formik
            initialValues={stateField}
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
                      <label style={{ paddingTop: "20px" }}>Nama Asesor</label>
                    </div>
                    <div className="col-9 mb-3">
                      <TextField
                        id="outlined-basic"
                        //   label="Outlined"
                        placeholder="nama asesor"
                        variant="outlined"
                        sx={{ width: "100%" }}
                        name="nama"
                        value={values.nama}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-3 mb-3">
                      <label style={{ paddingTop: "20px" }}>
                        No.Reg Asesor{" "}
                      </label>
                    </div>

                    <div className="col-9 mb-3">
                      <TextField
                        id="outlined-basic"
                        placeholder="nomor registrasi asesor"
                        //   label="Outlined"
                        variant="outlined"
                        sx={{ width: "100%" }}
                        name="no_reg"
                        value={values.no_reg}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-3 mb-3">
                      <label style={{ paddingTop: "20px" }}>
                        Email Asesor{" "}
                      </label>
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
                    <div className="col-3 mb-3">
                      <label style={{ paddingTop: "20px" }}>Password </label>
                    </div>
                    <div className="col-9 mb-3">
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
                    <div className="col-3 mb-3">
                      <label style={{ paddingTop: "20px" }}>Bidang Skema</label>
                    </div>
                    <div className="col-9 mb-3">
                      {/* <TextField
                        id="outlined-basic"
                        placeholder="password"
                        //   label="Outlined"
                        variant="outlined"
                        sx={{ width: "100%" }}
                        name="password"
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      /> */}
                      <FormControl fullWidth>
                        {/* <InputLabel id="demo-simple-select-label">
                          Age
                        </InputLabel> */}
                        <Select
                          // labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // name="selectedSkema"
                          value={selectedSkema}
                          // label="Age"
                          onChange={(e) => setSkema(e.target.value)}
                        >
                          {skema.map((el) => (
                            <MenuItem key={el.id} value={el.id}>
                              {el.nama_skema}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
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
