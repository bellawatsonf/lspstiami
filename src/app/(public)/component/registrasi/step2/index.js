import { useEffect, useState } from "react";
import styles from "./step1.module.css";
import {
  Button,
  TextField,
  Typography,
  MenuItem,
  FormControl,
  Select,
  Input,
} from "@mui/material";
import { Formik } from "formik";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import LoadingComponent from "@/app/(public)/component/loading";
import { useSelector } from "react-redux";

export default function Step2(props) {
  // let router = useRouter();
  // let params = useParams();
  // let id = params.id;
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  // const initialState = {
  //   nama_instansi: "",
  //   jabatan: "",
  //   alamat_kantor: "",
  //   tlp_kantor: "",
  //   kodepos_kantor: "",
  //   fax: "",
  //   email_kantor: "",
  // };
  // const [stateField, setStateField] = useState(initialState);
  // useEffect((prevState) => {
  //   if (Object.keys(props.dataAsesi).length !== 0) {
  //     setStateField(() => {
  //       return {
  //         ...prevState,
  //         nama_instansi: props.dataAsesi.nama_instansi,
  //         jabatan: props.dataAsesi.jabatan,
  //         alamat_kantor: props.dataAsesi.alamat_kantor,
  //         tlp_kantor: props.dataAsesi.tlp_kantor,
  //         kodepos_kantor: props.dataAsesi.kodepos_kantor,
  //         fax: props.dataAsesi.fax,
  //         email_kantor: props.dataAsesi.email_kantor,
  //       };
  //     });
  //   }
  // }, []);
  // function handleSubmitForm(value) {
  //   console.log(value.tgl_lahir, "value");
  //   let input = {
  //     nama_instansi: value.nama_instansi,
  //     jabatan: value.jabatan,
  //     alamat_kantor: value.alamat_kantor,
  //     tlp_kantor: value.tlp_kantor,
  //     kodepos_kantor: value.kodepos_kantor,
  //     fax: value.fax,
  //     email_kantor: value.email_kantor,
  //   };
  //   console.log(input, "inputan");
  //   axios({
  //     method: "PUT",
  //     url: `/api/edit-asesi/${id}`,
  //     data: input,
  //   })
  //     .then((data) => {
  //       console.log(data, "berhasil");
  //       router.push("/user/profiluser");
  //     })
  //     .catch((e) => {
  //       console.log(e, "errorini");
  //     });
  // }
  // if (loading) {
  //   return <LoadingComponent />;
  // }
  let datapekerjaan = [
    {
      id: 5,
      nama: "Pegawai Negeri Sipil/PNS",
    },

    {
      id: 1,
      nama: "Belum/Tidak Bekerja",
    },
    {
      id: 3,
      nama: "Pelajar/Mahasiswa",
    },
    {
      id: 4,
      nama: "Pensiunan",
    },
    {
      id: 15,
      nama: "Karyawan Swasta",
    },
    {
      id: 88,
      nama: "Wiraswasta",
    },
    {
      id: 89,
      nama: "Lainnya",
    },
  ];
  return (
    // <Formik
    //   initialValues={stateField}
    //   enableReinitialize={true}
    //   onSubmit={(values) => {
    //     handleSubmitForm(values);
    //   }}
    // >
    //   {({
    //     values,
    //     errors,
    //     touched,
    //     props.handleChange,
    //     props.handleBlur,
    //     handleSubmit,
    //     isSubmitting,
    //     /* and other goodies */
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
              Nama Institusi / Perusahaan
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
          <Input
            fullWidth
            // label="fullWidth"
            placeholder="Masukkan Nama Instansi"
            id="fullWidth"
            name="nama_instansi"
            value={props.values.nama_instansi}
            onBlur={props.handleBlur}
            onChange={props.handleChange}
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
            Jabatan
          </Typography>
         
          <TextField
            fullWidth
            placeholder="Masukkan Jabatan Anda"
            id="fullWidth"
            name="jabatan"
            value={props.values.jabatan}
            onBlur={props.handleBlur}
            onChange={props.handleChange}
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
            Jabatan
          </Typography>
          <FormControl fullWidth variant="standard">
            {/* <InputLabel id="demo-simple-select-label">
                  Pilih Kota Anda
                </InputLabel> */}
            <Select
              // labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={props.jabatan}
              // label="Age"
              // placeholder="kualifikasi pendidikan"
              onChange={(e) => {
                props.setJabatan(e.target.value);
                // props.handleChangeKota(e);
              }}
              // disabled={props.selectedProv !== null ? false : true}
            >
              {datapekerjaan.map((el) => (
                <MenuItem value={el.nama} key={el.id}>
                  {el.nama}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
            Alamat Kantor
          </Typography>
          {/* <input
            type="email"
            name="email"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.email}
          />
          {errors.email && touched.email && errors.email} */}
          <Input
            fullWidth
            // label="fullWidth"
            placeholder="Masukkan Alamat Kantor Anda"
            id="fullWidth"
            name="alamat_kantor"
            value={props.values.alamat_kantor}
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
            Kode Pos Kantor
          </Typography>
          {/* <input
            type="email"
            name="email"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.email}
          />
          {errors.email && touched.email && errors.email} */}
          <Input
            fullWidth
            // label="fullWidth"
            placeholder="Masukkan Kode Pos Kantor Anda"
            id="fullWidth"
            name="kodepos_kantor"
            value={props.values.kodepos_kantor}
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
            No.Telp Kantor
          </Typography>
          {/* <input
            type="email"
            name="email"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.email}
          />
          {errors.email && touched.email && errors.email} */}
          <Input
            fullWidth
            // label="fullWidth"
            placeholder="Masukkan Nomo Telp Kantor Anda"
            id="fullWidth"
            name="tlp_kantor"
            value={props.values.tlp_kantor}
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
            Fax Kantor
          </Typography>
          {/* <input
            type="email"
            name="email"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.email}
          />
          {errors.email && touched.email && errors.email} */}
          <Input
            fullWidth
            // label="fullWidth"
            placeholder="Masukkan Fax Kantor Anda"
            id="fullWidth"
            name="fax"
            value={props.values.fax}
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
            Email Kantor
          </Typography>
          {/* <input
            type="email"
            name="email"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.email}
          />
          {errors.email && touched.email && errors.email} */}
          <Input
            fullWidth
            // label="fullWidth"
            placeholder="Masukkan Email Kantor Anda"
            id="fullWidth"
            name="email_kantor"
            value={props.values.email_kantor}
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
