import { useEffect, useState } from "react";
import styles from "./step1.module.css";
import { Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import LoadingComponent from "@/app/(public)/component/loading";
import { useSelector } from "react-redux";

export default function Step2(props) {
  let router = useRouter();
  let params = useParams();
  let id = params.id;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const initialState = {
    nama_instansi: "",
    jabatan: "",
    alamat_kantor: "",
    tlp_kantor: "",
    kodepos_kantor: "",
    fax: "",
    email_kantor: "",
  };
  const [stateField, setStateField] = useState(initialState);
  useEffect((prevState) => {
    if (Object.keys(props.dataAsesi).length !== 0) {
      setStateField(() => {
        return {
          ...prevState,
          nama_instansi: props.dataAsesi.nama_instansi,
          jabatan: props.dataAsesi.jabatan,
          alamat_kantor: props.dataAsesi.alamat_kantor,
          tlp_kantor: props.dataAsesi.tlp_kantor,
          kodepos_kantor: props.dataAsesi.kodepos_kantor,
          fax: props.dataAsesi.fax,
          email_kantor: props.dataAsesi.email_kantor,
        };
      });
    }
  }, []);
  function handleSubmitForm(value) {
    console.log(value.tgl_lahir, "value");
    let input = {
      nama_instansi: value.nama_instansi,
      jabatan: value.jabatan,
      alamat_kantor: value.alamat_kantor,
      tlp_kantor: value.tlp_kantor,
      kodepos_kantor: value.kodepos_kantor,
      fax: value.fax,
      email_kantor: value.email_kantor,
    };
    console.log(input, "inputan");
    axios({
      method: "PUT",
      url: `http://localhost:3001/edit-asesi/${id}`,
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
  return (
    <Formik
      initialValues={stateField}
      enableReinitialize={true}
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
        /* and other goodies */
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
                    Nama Institusi / Perusahaan
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
                  name="nama_instansi"
                  value={values.nama_instansi}
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
                  Jabatan
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
                  name="jabatan"
                  value={values.jabatan}
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
                  Alamat Kantor
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
                  name="alamat_kantor"
                  value={values.alamat_kantor}
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
                  Kode Pos Kantor
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
                  name="kodepos_kantor"
                  value={values.kodepos_kantor}
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
                  No.Telp Kantor
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
                  name="telp_kantor"
                  value={values.telp_kantor}
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
                  Fax Kantor
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
                  name="fax"
                  value={values.fax}
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
                  Email Kantor
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
                  name="email_kantor"
                  value={values.email_kantor}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
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
