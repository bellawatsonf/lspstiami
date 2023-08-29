import { Formik } from "formik";
import styles from "./step1.module.css";
import {
  TextField,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useEffect, useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField } from "@mui/x-date-pickers/DateField";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import LoadingComponent from "@/app/(public)/component/loading";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";

export default function Step1(props) {
  console.log(props.stateField, "propsvl");
  // console.log(Object.keys(props?.dataAsesi).length, "propsstep1");
  // const initialState = {
  //   nama_lengkap: "",
  //   tempat_lahir: "",
  //   tgl_lahir: "",
  //   // jenis_kelamin: "",
  //   kebangsaan: "",
  //   alamat_rumah: "",
  //   phone_number: "",
  //   telp: "",
  //   email: "",
  //   kode_pos: "",
  //   kualifikasi_pendidikan: "",
  //   nik: "",
  // };
  // const [stateField, setStateField] = useState(initialState);
  // const [dtprovinsi, setProvinsi] = useState([]);
  // const [selectedProv, setSelected] = useState("");
  // const [dtKota, setKota] = useState([]);
  // const [selectedKota, setSelectedKota] = useState("");
  // const [jenis_kelamin, setJenisKelamin] = useState("");
  // const [selectedDate, setDate] = useState(null);
  // // const [loading, setLoading] = useState(true);
  // let params = useParams();

  // let id = params.id;

  // // useEffect(() => {
  // //   setTimeout(() => {
  // //     setLoading(false);
  // //   }, 1000);
  // // }, []);
  // function getProvinsi() {
  //   axios({
  //     url :"/api/provinsi",
  //     method: "get",
  //   })
  //     .then((data) => {
  //       console.log(data.data.data, "dataprovinsi");
  //       if (data.data.data.length > 0) {
  //         setProvinsi(data.data.data);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  function getKota() {
    axios({
      url: `/api/kota/${props.selectedProv}`,
      method: "get",
    })
      .then((data) => {
        console.log(data.data.data, "dataprovinsi");
        if (data.data.data.length > 0) {
          props.setKota(data.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // const handleChangeProvinsi = (event) => {
  //   console.log(event.target.value, "value");
  //   setSelected(event.target.value);
  //   if (event.target.value === "") {
  //     setSelectedKota("");
  //   }
  // };
  // const handleChangeKota = (event) => {
  //   setSelectedKota(event.target.value);
  // };
  // useState(() => {
  //   if (Object.keys(props?.dataAsesi).length > 0) {
  //     setStateField((prevState) => {
  //       return {
  //         ...prevState,
  //         nik: props?.dataAsesi?.nik,
  //         nama_lengkap: props?.dataAsesi?.nama_lengkap,
  //         tempat_lahir: props?.dataAsesi?.tempat_lahir,
  //         tgl_lahir: props?.dataAsesi?.tgl_lahir,
  //         // jenis_kelamin: props?.dataAsesi?.tgl_lahir,
  //         kebangsaan: props?.dataAsesi?.kebangsaan,
  //         alamat_rumah: props?.dataAsesi?.alamat_rumah,
  //         phone_number: props?.dataAsesi?.phone_number,
  //         telp: props?.dataAsesi?.telp,
  //         email: props?.dataAsesi?.email,
  //         kode_pos: props?.dataAsesi?.kodepos,
  //         kualifikasi_pendidikan: props?.dataAsesi?.kualifikasi_pendidikan,
  //       };
  //     });
  //     setJenisKelamin(props?.dataAsesi?.jenis_kelamin);
  //     setSelectedKota(props?.dataAsesi?.kota);
  //     setSelected(props?.dataAsesi?.provinsi);
  //     setDate(new Date(props?.dataAsesi?.tgl_lahir));
  //   }
  //   getProvinsi();
  // }, []);

  useEffect(() => {
    if (props.selectedProv !== "") {
      getKota();
    }
  }, [props.selectedProv]);
  // if (loading) {
  //   return <LoadingComponent />;
  // }
  // console.log(stateField.nama_lengkap, "nmlngk");
  return (
    // <Formik
    //   enableReinitialize={true}
    //   initialValues={stateField}
    //   onSubmit={(values) => {
    //     handleSubmitForm(values);
    //   }}
    // >
    //   {({
    //     values,
    //     errors,
    //     touched,
    //     handleChange,
    //     handleBlur,
    //     handleSubmit,
    //     isSubmitting,
    //   }) => (
    //     <form onSubmit={handleSubmit}>
    <div style={{ marginTop: "30px" }}>
      <div className="row">
        <div className="col-6">
          <label>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                paddingBottom: "10px",
                paddingTop: "15px",
              }}
            >
              NIK
            </Typography>
          </label>
          {/* <input
          type="email"
          name="email"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.email}
        />
        {errors.email && touched.email && errors.email} */}
          <TextField
            fullWidth
            // label="fullWidth"
            placeholder="Masukkan NIK Anda"
            id="fullWidth"
            name="nik"
            value={props.values.nik}
            onBlur={props.handleBlur}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-6">
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
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.email}
        />
        {errors.email && touched.email && errors.email} */}
          <TextField
            fullWidth
            // label="fullWidth"
            placeholder="Masukkan Nama Lengkap Anda"
            id="fullWidth"
            name="nama_lengkap"
            value={props.values.nama_lengkap}
            onBlur={props.handleBlur}
            onChange={props.handleChange}
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
            Tempat Lahir
          </Typography>
          {/* <input
          type="email"
          name="email"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.email}
        />
        {errors.email && touched.email && errors.email} */}
          <TextField
            fullWidth
            // label="fullWidth"
            placeholder="Masukkan Tempat Lahir Anda"
            id="fullWidth"
            name="tempat_lahir"
            value={props.values.tempat_lahir}
            onBlur={props.handleBlur}
            onChange={props.handleChange}
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
            Tanggal Lahir
          </Typography>

          {/* <input
                type="date"
                name="tgl_lahir"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.tgl_lahir}
                style={{ width: "100%", height: "56px", borderRadius: "3px" }}
              /> */}
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
              format="dd/MM/yyyy"
              renderInput={(params) => <TextField {...params} fullWidth />}
              value={props.selectedDate}
              onChange={(newValue) => {
                let dt = new Date(newValue).toISOString();
                console.log(dt, "datanya");
                props.setDate(newValue);
              }}
            />
          </LocalizationProvider>
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
            Jenis Kelamin
          </Typography>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={props.jenis_kelamin}
              onChange={(e) => props.setJenisKelamin(e.target.value)}
            >
              <MenuItem value="" disabled>
                Pilih
              </MenuItem>
              <MenuItem value="wanita">Wanita</MenuItem>
              <MenuItem value="pria">Pria</MenuItem>
            </Select>
          </FormControl>
          {/* <TextField
                fullWidth
                label="fullWidth"
                id="fullWidth"
                name="jenis_kelamin"
                value={props.values.jenis_kelamin}
                onBlur={props.handleBlur}
                onChange={props.handleChange}
              /> */}
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
            Kebangsaan
          </Typography>
          {/* <input
          type="email"
          name="email"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.email}
        />
        {errors.email && touched.email && errors.email} */}
          <TextField
            fullWidth
            // label="fullWidth"
            placeholder="Masukkan Kewarganegaraan Anda"
            id="fullWidth"
            name="kebangsaan"
            value={props.values.kebangsaan}
            onBlur={props.handleBlur}
            onChange={props.handleChange}
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
            Provinsi
          </Typography>
          <FormControl fullWidth>
            <Select
              // labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={props.selectedProv}
              // label="Age"
              onChange={(e) => props.handleChangeProvinsi(e)}
            >
              <MenuItem value="">
                <em>Pilih Provinsi Anda</em>
              </MenuItem>
              {props.dtprovinsi?.map((el) => (
                <MenuItem value={el.id} key={el.id}>
                  {el.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
            Kota
          </Typography>
          <FormControl fullWidth>
            {/* <InputLabel id="demo-simple-select-label">
                  Pilih Kota Anda
                </InputLabel> */}
            <Select
              // labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={props.selectedKota}
              // label="Age"
              onChange={(e) => props.handleChangeKota(e)}
              disabled={props.selectedProv !== "" ? false : true}
            >
              {props.dtKota.map((el) => (
                <MenuItem value={el.id} key={el.id}>
                  {el.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.email}
        />
        {errors.email && touched.email && errors.email} */}
          <TextField
            fullWidth
            // label="fullWidth"
            placeholder="Masukkan Alamat Anda"
            id="fullWidth"
            name="alamat_rumah"
            value={props.values.alamat_rumah}
            onBlur={props.handleBlur}
            onChange={props.handleChange}
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
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.email}
        />
        {errors.email && touched.email && errors.email} */}
          <TextField
            fullWidth
            // label="fullWidth"
            placeholder="Masukkan Kode Pos Anda"
            id="fullWidth"
            name="kode_pos"
            value={props.values.kode_pos}
            onBlur={props.handleBlur}
            onChange={props.handleChange}
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
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.email}
        />
        {errors.email && touched.email && errors.email} */}
          <TextField
            fullWidth
            // label="fullWidth"
            placeholder="Masukkan Nomor Handphone Anda"
            id="fullWidth"
            name="phone_number"
            value={props.values.phone_number}
            onBlur={props.handleBlur}
            onChange={props.handleChange}
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
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.email}
        />
        {errors.email && touched.email && errors.email} */}
          <TextField
            fullWidth
            // label="fullWidth"
            placeholder="Masukkan No.Telp Anda"
            id="fullWidth"
            name="telp"
            value={props.values.telp}
            onBlur={props.handleBlur}
            onChange={props.handleChange}
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
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.email}
        />
        {errors.email && touched.email && errors.email} */}
          <TextField
            fullWidth
            // label="fullWidth"
            placeholder="Masukkan Email Anda"
            id="fullWidth"
            name="email"
            value={props.values.email}
            onBlur={props.handleBlur}
            onChange={props.handleChange}
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
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.email}
        />
        {errors.email && touched.email && errors.email} */}
          <TextField
            fullWidth
            // label="fullWidth"
            placeholder="Masukkan Pendidikan Terakhir Anda"
            id="fullWidth"
            name="kualifikasi_pendidikan"
            value={props.values.kualifikasi_pendidikan}
            onBlur={props.handleBlur}
            onChange={props.handleChange}
          />
        </div>
      </div>
    </div>

    //     </form>
    //   )}
    // </Formik>
  );
}
