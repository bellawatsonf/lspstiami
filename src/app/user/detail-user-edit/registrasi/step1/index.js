import { Formik } from "formik";
import styles from "./step1.module.css";
import { TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateField } from "@mui/x-date-pickers/DateField";
import axios from "axios";
import { useParams } from "next/navigation";

export default function Step1(props) {
  console.log(props.dataAsesi, "prop");
  let params = useParams();
  let id = params.id;
  const initialState = {
    nama_lengkap: "",
    tempat_lahir: "",
    tgl_lahir: "",
    jenis_kelamin: "",
    kebangsaan: "",
    alamat_rumah: "",
    phone_number: "",
    telp: "",
    email: "",
    kode_pos: "",
    kualifikasi_pendidikan: "",
  };
  const [stateField, setStateField] = useState(initialState);
  console.log(Object.keys(props.dataAsesi).length !== 0, "hhh");
  useState(() => {
    if (Object.keys(props.dataAsesi).length !== 0) {
      setStateField((prevState) => {
        return {
          ...prevState,
          nama_lengkap: props.dataAsesi.nama_lengkap,
          tempat_lahir: props.dataAsesi.tempat_lahir,
          tgl_lahir: props.dataAsesi.tgl_lahir,
          jenis_kelamin: props.dataAsesi.tgl_lahir,
          kebangsaan: props.dataAsesi.kebangsaan,
          alamat_rumah: props.dataAsesi.alamat_rumah,
          phone_number: props.dataAsesi.phone_number,
          telp: props.dataAsesi.telp,
          email: props.dataAsesi.email,
          kode_pos: props.dataAsesi.kode_pos,
          kualifikasi_pendidikan: props.dataAsesi.kualifikasi_pendidikan,
        };
      });
    }
  }, []);
  function handleSubmitForm(value) {
    console.log(value.tgl_lahir, "value");
    let input = {
      nama_lengkap: value.nama_lengkap,
      tempat_lahir: value.tempat_lahir,
      tgl_lahir: value.tgl_lahir,
      jenis_kelamin: value.jenis_kelamin,
      kebangsaan: value.kebangsaan,
      alamat_rumah: value.alamat_rumah,
      phone_number: value.phone_number,
      telp: value.telp,
      email: value.email,
      kode_pos: value.kode_pos,
      kualifikasi_pendidikan: value.kualifikasi_pendidikan,
    };
    console.log(input, "inputan");
    axios({
      method: "PUT",
      url: `http://localhost:3001/edit-asesi/${id}`,
      data: input,
    })
      .then((data) => {
        console.log(data, "berhasil");
      })
      .catch((e) => {
        console.log(e, "errorini");
      });
  }
  return (
    <Formik
      enableReinitialize={true}
      initialValues={stateField}
      onSubmit={(values) => {
        handleSubmitForm(values);
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
      }) => (
        <form onSubmit={handleSubmit}>
          <div style={{ marginTop: "30px" }}>
            <div className="row">
              <div className="col-12">
                <label>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: 500,
                      paddingBottom: "10px",
                      paddingTop: "15px",
                    }}
                  >
                    Nama Lengkap
                  </Typography>
                </label>
                {/* <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email} */}
                <TextField
                  fullWidth
                  label="fullWidth"
                  id="fullWidth"
                  name="nama_lengkap"
                  value={values.nama_lengkap}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              {/* <div className="col-12">
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 500,
                  paddingBottom: "10px",
                  paddingTop: "15px",
                }}
              >
                No. KTP/NIK/Paspor
              </Typography>

              <TextField fullWidth label="fullWidth" id="fullWidth" />
            </div> */}
              <div className="col-12">
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 500,
                    paddingBottom: "10px",
                    paddingTop: "15px",
                  }}
                >
                  Tempat Lahir
                </Typography>
                {/* <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email} */}
                <TextField
                  fullWidth
                  label="fullWidth"
                  id="fullWidth"
                  name="tempat_lahir"
                  value={values.tempat_lahir}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 500,
                    paddingBottom: "10px",
                    paddingTop: "15px",
                  }}
                >
                  Tanggal Lahir
                </Typography>
                {/* <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email} */}
                {/* <TextField
                fullWidth
                label="fullWidth"
                id="fullWidth"
                name="tgl_lahir"
                value={values.tgl_lahir}
                onBlur={handleBlur}
                onChange={handleChange}
              /> */}
                {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DemoContainer components={["DateField"]}>
                    <DateField
                      label="Tanggal Lahir"
                      // id="fullWidth"
                      name="tgl_lahir"
                      value={values.tgl_lahir}
                      // onBlur={handleBlur}
                      // onChange={handleChange}
                    />
                  </DemoContainer>
                </LocalizationProvider> */}
                <input
                  type="date"
                  name="tgl_lahir"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tgl_lahir}
                />
              </div>
              <div className="col-12">
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 500,
                    paddingBottom: "10px",
                    paddingTop: "15px",
                  }}
                >
                  Jenis Kelamin
                </Typography>
                {/* <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email} */}
                <TextField
                  fullWidth
                  label="fullWidth"
                  id="fullWidth"
                  name="jenis_kelamin"
                  value={values.jenis_kelamin}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 500,
                    paddingBottom: "10px",
                    paddingTop: "15px",
                  }}
                >
                  Kebangsaan
                </Typography>
                {/* <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email} */}
                <TextField
                  fullWidth
                  label="fullWidth"
                  id="fullWidth"
                  name="kebangsaan"
                  value={values.kebangsaan}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 500,
                    paddingBottom: "10px",
                    paddingTop: "15px",
                  }}
                >
                  Alamat
                </Typography>
                {/* <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email} */}
                <TextField
                  fullWidth
                  label="fullWidth"
                  id="fullWidth"
                  name="alamat_rumah"
                  value={values.alamat_rumah}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 500,
                    paddingBottom: "10px",
                    paddingTop: "15px",
                  }}
                >
                  Kode Pos
                </Typography>
                {/* <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email} */}
                <TextField
                  fullWidth
                  label="fullWidth"
                  id="fullWidth"
                  name="kode_pos"
                  value={values.kode_pos}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 500,
                    paddingBottom: "10px",
                    paddingTop: "15px",
                  }}
                >
                  No.Hp
                </Typography>
                {/* <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email} */}
                <TextField
                  fullWidth
                  label="fullWidth"
                  id="fullWidth"
                  name="phone_number"
                  value={values.phone_number}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 500,
                    paddingBottom: "10px",
                    paddingTop: "15px",
                  }}
                >
                  No.Telp
                </Typography>
                {/* <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email} */}
                <TextField
                  fullWidth
                  label="fullWidth"
                  id="fullWidth"
                  name="telp"
                  value={values.telp}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 500,
                    paddingBottom: "10px",
                    paddingTop: "15px",
                  }}
                >
                  Email
                </Typography>
                {/* <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email} */}
                <TextField
                  fullWidth
                  label="fullWidth"
                  id="fullWidth"
                  name="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              {/* <div className="col-6">
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 500,
                  paddingBottom: "10px",
                  paddingTop: "15px",
                }}
              >
                Password
              </Typography>
              
              <TextField fullWidth label="fullWidth" id="fullWidth" />
            </div> */}
              <div className="col-6">
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 500,
                    paddingBottom: "10px",
                    paddingTop: "15px",
                  }}
                >
                  Klasifikasi Pendidikan
                </Typography>
                {/* <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email} */}
                <TextField
                  fullWidth
                  label="fullWidth"
                  id="fullWidth"
                  name="kualifikasi_pendidikan"
                  value={values.kualifikasi_pendidikan}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              sx={{ textTransform: "none" }}
              type="submit"
            >
              Simpan
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
}
