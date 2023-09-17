import LoadingComponent from "@/app/(public)/component/loading";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import axios from "axios";
import { Formik } from "formik";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Step1(props) {
  let datapendidikan = [
    {
      id: "1",
      tingkat: "SD",
    },
    {
      id: "2",
      tingkat: "SMP",
    },
    {
      id: "3",
      tingkat: "SMP/Sederajat",
    },
    {
      id: "4",
      tingkat: "D1",
    },
    {
      id: "5",
      tingkat: "D2",
    },
    {
      id: "6",
      tingkat: "D3",
    },
    {
      id: "7",
      tingkat: "D4",
    },
    {
      id: "8",
      tingkat: "S1",
    },
    {
      id: "9",
      tingkat: "S2",
    },
    {
      id: "10",
      tingkat: "S3",
    },
  ];
  const router = useRouter();
  console.log(
    new Date(props.dataAsesi.tgl_lahir).toLocaleDateString("en-US"),
    "prop"
  );
  let params = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  console.log(loading, "loadingstep1");
  let id = params.id;
  const initialState = {
    nama_lengkap: "",
    tempat_lahir: "",
    tgl_lahir: "",
    // jenis_kelamin: "",
    kebangsaan: "",
    alamat_rumah: "",
    phone_number: "",
    telp: "",
    email: "",
    kode_pos: "",
    // kualifikasi_pendidikan: "",
    nik: "",
  };
  const [stateField, setStateField] = useState(initialState);
  const [dtprovinsi, setProvinsi] = useState([]);
  const [selectedProv, setSelected] = useState("");
  const [dtKota, setKota] = useState([]);
  const [selectedKota, setSelectedKota] = useState("");
  const [jenis_kelamin, setJenisKelamin] = useState("");
  const [selectedDate, setDate] = useState(null);
  const [kualifikasi_pendidikan, setPendidikan] = useState(null);

  console.log(dtprovinsi, "hhh");
  //   useEffect(()=>{
  // setTimeout(() => {

  // }, 1000);
  //   },[])

  function getProvinsi() {
    axios({
      url: `https://alamat.thecloudalert.com/api/provinsi/get/`,
      method: "get",
    })
      .then((data) => {
        console.log(data.data.result, "dataprovinsi");
        if (data.data.result.length > 0) {
          setProvinsi(data.data.result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getProvinsi();
  }, []);

  function getKota() {
    axios({
      url: `https://alamat.thecloudalert.com/api/kabkota/get/?d_provinsi_id=${selectedProv}`,
      method: "get",
    })
      .then((data) => {
        console.log(data.data.result.length > 0, "datakota");
        if (data.data.result.length > 0) {
          setKota(data.data.result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (selectedProv !== "") {
      getKota();
    }
  }, [selectedProv]);

  const handleChangeProvinsi = (event) => {
    console.log(event.target.value, "value");
    setSelected(event.target.value);
    if (event.target.value === "") {
      setSelectedKota("");
    }
  };
  const handleChangeKota = (event) => {
    setSelectedKota(event.target.value);
  };
  useEffect(() => {
    if (Object.keys(props.dataAsesi).length !== 0) {
      setStateField((prevState) => {
        return {
          ...prevState,
          nik: props.dataAsesi.nik,
          nama_lengkap: props.dataAsesi.nama_lengkap,
          tempat_lahir: props.dataAsesi.tempat_lahir,
          tgl_lahir: props.dataAsesi.tgl_lahir,
          // jenis_kelamin: props.dataAsesi.tgl_lahir,
          kebangsaan: props.dataAsesi.kebangsaan,
          alamat_rumah: props.dataAsesi.alamat_rumah,
          phone_number: props.dataAsesi.phone_number,
          telp: props.dataAsesi.telp,
          email: props.dataAsesi.email,
          kode_pos: props.dataAsesi.kodepos,
          // kualifikasi_pendidikan: props.dataAsesi.kualifikasi_pendidikan,
        };
      });
      setJenisKelamin(props.dataAsesi.jenis_kelamin);
      setPendidikan(props.dataAsesi.kualifikasi_pendidikan);
      setSelectedKota(props.dataAsesi.kota);
      setSelected(props.dataAsesi.provinsi);
      setDate(new Date(props.dataAsesi.tgl_lahir));
    }
    // getProvinsi();
  }, []);

  console.log(selectedProv, "provinsi");

  function handleSubmitForm(value) {
    console.log(value.tgl_lahir, "value");
    let input = {
      nik: value.nik,
      nama_lengkap: value.nama_lengkap,
      tempat_lahir: value.tempat_lahir,
      tgl_lahir: new Date(selectedDate).toISOString().split("T")[0],
      jenis_kelamin: jenis_kelamin,
      kebangsaan: value.kebangsaan,
      alamat_rumah: value.alamat_rumah,
      phone_number: value.phone_number,
      telp: value.telp,
      email: value.email,
      kodepos: value.kode_pos,
      kualifikasi_pendidikan: kualifikasi_pendidikan,
      provinsi: selectedProv,
      kota: selectedKota,
    };
    console.log(input, "inputan");
    axios({
      method: "PUT",
      url: `/api/edit-asesi/${id}`,
      data: input,
    })
      .then((data) => {
        console.log(data, "berhasil");
        router.push("/user/profiluser");
      })
      .catch((e) => {
        console.log(e, "errorini");
      });
  }

  if (loading) {
    return <LoadingComponent />;
  }

  console.log(selectedProv, "selected");
  console.log(selectedKota, "selectedKota");
  console.log(dtKota, "kota");
  console.log(selectedDate, "date");
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
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email} */}
                <TextField
                  fullWidth
                  // label="fullWidth"
                  placeholder="Masukkan NIK Anda"
                  id="fullWidth"
                  name="nik"
                  value={values.nik}
                  onBlur={handleBlur}
                  onChange={handleChange}
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
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email} */}
                <TextField
                  fullWidth
                  // label="fullWidth"
                  placeholder="Masukkan Nama Lengkap Anda"
                  id="fullWidth"
                  name="nama_lengkap"
                  value={values.nama_lengkap}
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
                  // label="fullWidth"
                  placeholder="Masukkan Tempat Lahir Anda"
                  id="fullWidth"
                  name="tempat_lahir"
                  value={values.tempat_lahir}
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
                  Tanggal Lahir
                </Typography>

                {/* <input
                  type="date"
                  name="tgl_lahir"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tgl_lahir}
                  style={{ width: "100%", height: "56px", borderRadius: "3px" }}
                /> */}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    // value={values.tgl_lahir}
                    // onChange={(newValue) => {
                    //   setStateField((prevState) => {
                    //     return {
                    //       ...prevState,
                    //       tgl_lahir: newValue,
                    //     };
                    //   });
                    // }}
                    format="dd/MM/yyyy"
                    renderInput={(params) => <TextField {...params} />}
                    value={selectedDate}
                    onChange={(newValue) => {
                      let dt = new Date(newValue).toISOString();
                      console.log(dt, "datanya");
                      setDate(newValue);
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
                    value={jenis_kelamin}
                    onChange={(e) => setJenisKelamin(e.target.value)}
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
                  value={values.jenis_kelamin}
                  onBlur={handleBlur}
                  onChange={handleChange}
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
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email} */}
                <TextField
                  fullWidth
                  // label="fullWidth"
                  placeholder="Masukkan Kewarganegaraan Anda"
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
                  Provinsi
                </Typography>
                <FormControl fullWidth>
                  <Select
                    // labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedProv}
                    // label="Age"
                    onChange={(e) => handleChangeProvinsi(e)}
                  >
                    <MenuItem value="">
                      <em>Pilih Provinsi Anda</em>
                    </MenuItem>
                    {dtprovinsi?.map((el) => (
                      <MenuItem value={el.id} key={el.id}>
                        {el.text}
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
                    value={selectedKota}
                    // label="Age"
                    onChange={(e) => handleChangeKota(e)}
                    disabled={selectedProv !== "" ? false : true}
                  >
                    {dtKota.map((el) => (
                      <MenuItem value={el.id} key={el.id}>
                        {el.text}
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
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email} */}
                <TextField
                  fullWidth
                  // label="fullWidth"
                  placeholder="Masukkan Alamat Anda"
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
                  // label="fullWidth"
                  placeholder="Masukkan Kode Pos Anda"
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
                  // label="fullWidth"
                  placeholder="Masukkan Nomor Handphone Anda"
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
                  // label="fullWidth"
                  placeholder="Masukkan No.Telp Anda"
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
                  // label="fullWidth"
                  placeholder="Masukkan Email Anda"
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
              {/* <div className="col-6">
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

                <TextField
                  fullWidth
                  placeholder="Masukkan Pendidikan Terakhir Anda"
                  id="fullWidth"
                  name="kualifikasi_pendidikan"
                  value={values.kualifikasi_pendidikan}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
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
                  Kualifikasi Pendidikan
                </Typography>
                <FormControl fullWidth>
                  {/* <InputLabel id="demo-simple-select-label">
                  Pilih Kota Anda
                </InputLabel> */}
                  <Select
                    // labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={kualifikasi_pendidikan}
                    // label="Age"
                    // placeholder="kualifikasi pendidikan"
                    onChange={(e) => {
                      setPendidikan(e.target.value);
                      // props.handleChangeKota(e);
                    }}
                    // disabled={props.selectedProv !== null ? false : true}
                  >
                    {datapendidikan.map((el) => (
                      <MenuItem value={el.tingkat} key={el.id}>
                        {el.tingkat}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              sx={{ textTransform: "none", marginTop: "20px" }}
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
