"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import * as React from "react";

const steps = [
  "Data Pemohon Sertifikasi",
  "Data Pekerjaan",
  "Kelengkapan Berkas",
  "Tanda Tangan",
];

import axios from "axios";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import LoadingComponent from "../(public)/component/loading";
import Step1 from "../(public)/component/registrasi/step1.js/index.js";
import Step2 from "../(public)/component/registrasi/step2";
import Step3 from "../(public)/component/registrasi/step3";
import Step4 from "../(public)/component/registrasi/step4";
import { fetchAsesiById } from "../services/asesi";
import styles from "./registrasi.module.css";
// import Step1 from "../user/detail-user-edit/registrasi/step1";
// import Step2 from "../user/detail-user-edit/registrasi/step2";
// import Step3 from "../user/detail-user-edit/registrasi/step3";
// import Step4 from "../user/detail-user-edit/registrasi/step4";
export default function Regitrasi() {
  let router = useRouter();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [user, setUser] = React.useState();
  const userById = useSelector((state) => state.asesi.AsesiById);
  console.log(Object.keys(userById).length, "bella userbyidregistrasi");
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
    kualifikasi_pendidikan: "",
    nik: "",
    nama_instansi: "",
    jabatan: "",
    alamat_kantor: "",
    tlp_kantor: "",
    kodepos_kantor: "",
    fax: "",
    email_kantor: "",
    // transkrip: "",
    // ijazah: "",
    // pas_foto: "",
    // ktp: "",
    // surat_pernyataan: "",
    // sertifikat_pelatihan_pendukung: "",
    bukti_bayar: "",
    tujuan_asesmen: "sertifikasi",
    ttd_asesi: "",
  };
  const [stateField, setStateField] = React.useState(initialState);
  const [dtprovinsi, setProvinsi] = React.useState([]);
  const [selectedProv, setSelected] = React.useState();
  const [dtKota, setKota] = React.useState([]);
  const [selectedKota, setSelectedKota] = React.useState("");
  const [jenis_kelamin, setJenisKelamin] = React.useState("");
  const [selectedDate, setDate] = React.useState(null);
  const [transkrip, setTranskrip] = useState();
  const [ijazah, setIjazah] = useState();
  const [pas_foto, setPasfoto] = useState();
  const [ktp, setKtp] = useState();
  const [surat_pernyataan, setSuratPernyataan] = useState();
  const [sertifikat_pelatihan_pendukung, setPendukung] = useState();
  console.log(activeStep, "activestep");
  let sigPad = useRef({});
  console.log(sigPad, "signaturepad");
  let data = "";
  const [imgttd, setimg] = useState("");

  useEffect(() => {
    try {
      // let token = sessionStorage.getItem("token");
      let value = JSON.parse(sessionStorage.getItem("user")); //untuk ubah dari string ke obj
      console.log(value, "value");
      setUser(value);
      dispatch(fetchAsesiById(value.id));

      // settoken(token);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    console.log(userById, "bella");
    if (Object.keys(userById).length > 0) {
      setStateField((prevState) => {
        return {
          ...prevState,
          nik: userById.nik,
          nama_lengkap: userById.nama_lengkap,
          tempat_lahir: userById.tempat_lahir,
          tgl_lahir: userById.tgl_lahir,
          // jenis_kelamin: userById.tgl_lahir,
          kebangsaan: userById.kebangsaan,
          alamat_rumah: userById.alamat_rumah,
          phone_number: userById.phone_number,
          telp: userById.telp,
          email: userById.email,
          kode_pos: userById.kodepos,
          kualifikasi_pendidikan: userById.kualifikasi_pendidikan,
          nama_instansi: userById.nama_instansi,
          jabatan: userById.jabatan,
          alamat_kantor: userById.alamat_kantor,
          tlp_kantor: userById.tlp_kantor,
          kodepos_kantor: userById.kodepos_kantor,
          fax: userById.fax,
          email_kantor: userById.email_kantor,
          tujuan_asesmen:
            userById.tujuan_asesmen !== null
              ? userById.tujuan_asesmen
              : stateField.tujuan_asesmen,
          ttd_asesi: userById.ttd_asesi,
        };
      });
      setJenisKelamin(userById.jenis_kelamin);
      setSelectedKota(userById.kota);
      setSelected(userById.provinsi);
      setDate(new Date(userById.tgl_lahir));
    }
    // getProvinsi();
  }, [userById]);
  function getProvinsi() {
    console.log("masuk getprovinsi");
    axios({
      url: "/api/provinsi",
      method: "get",
    })
      .then((data) => {
        console.log(data.data.data, "dataprovinsi");
        if (data.data.data.length > 0) {
          setProvinsi(data.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // function getKota() {
  //   axios({
  //     url: `/api/kota/${selectedProv}`,
  //     method: "get",
  //   })
  //     .then((data) => {
  //       console.log(data.data.data, "dataprovinsi");
  //       if (data.data.data.length > 0) {
  //         setKota(data.data.data);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  // useEffect(() => {
  //   if (selectedProv !== "") {
  //     getKota();
  //   }
  // }, [selectedProv]);
  // console.log(dtkota, "dtkota");
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
  let dispatch = useDispatch();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
      console.log(newSkipped, "skipped");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };
  function handleSubmitForm(value) {
    console.log(value, "value");
    let formData = new FormData();
    formData.append("transkrip", transkrip);
    formData.append("ijazah", ijazah);
    formData.append("img_ktp", ktp);
    formData.append("pas_foto", pas_foto);
    formData.append("surat_pernyataan", surat_pernyataan);
    // formData.append("bukti_bayar", bukti_bayar);
    formData.append(
      "sertifikat_pelatihan_pendukung",
      sertifikat_pelatihan_pendukung
    );
    formData.append("jabatan", value.jabatan);
    formData.append("alamat_kantor", value.alamat_kantor);
    formData.append("nama_instansi", value.nama_instansi);
    formData.append("tlp_kantor", value.tlp_kantor);
    formData.append("kodepos_kantor", value.kodepos_kantor);
    formData.append("fax", value.fax);
    formData.append("email_kantor", value.email_kantor);
    formData.append("tujuan_asesmen", stateField.tujuan_asesmen);
    formData.append("ttd_asesi", sigPad.current.toDataURL());
    formData.append("nik", value.nik);
    formData.append("nama_lengkap", value.nama_lengkap);
    formData.append("tempat_lahir", value.tempat_lahir);
    formData.append(
      "tgl_lahir",
      new Date(selectedDate).toISOString().split("T")[0]
    );
    formData.append("jenis_kelamin", jenis_kelamin);
    formData.append("kebangsaan", value.kebangsaan);
    formData.append("alamat_rumah", value.alamat_rumah);
    formData.append("phone_number", value.phone_number);
    formData.append("telp", value.telp);
    formData.append("email", value.email);
    formData.append("kodepos", value.kode_pos);
    formData.append("kualifikasi_pendidikan", value.kualifikasi_pendidikan);
    formData.append("provinsi", selectedProv);
    formData.append("kota", selectedKota);

    //inputannya ubah jadi formdata append juga, coba baca2 lg
    // let input = {
    //   jabatan: value.jabatan,
    //   alamat_kantor: value.alamat_kantor,
    //   nama_instansi: value.nama_instansi,
    //   tlp_kantor: value.tlp_kantor,
    //   kodepos_kantor: value.kodepos_kantor,
    //   fax: value.fax,
    //   email_kantor: value.email_kantor,
    //   tujuan_asesmen: stateField.tujuan_asesmen,
    //   ttd_asesi: sigPad.current.toDataURL(),
    //   nik: value.nik,
    //   nama_lengkap: value.nama_lengkap,
    //   tempat_lahir: value.tempat_lahir,
    //   tgl_lahir: new Date(selectedDate).toISOString().split("T")[0],
    //   jenis_kelamin: jenis_kelamin,
    //   kebangsaan: value.kebangsaan,
    //   alamat_rumah: value.alamat_rumah,
    //   phone_number: value.phone_number,
    //   telp: value.telp,
    //   email: value.email,
    //   kodepos: value.kode_pos,
    //   kualifikasi_pendidikan: value.kualifikasi_pendidikan,
    //   provinsi: selectedProv,
    //   kota: selectedKota,
    // };
    // console.log(input, "inputan stepper");
    axios({
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      url: `/api/edit-asesi/${userById.id}`,
      data: formData,
    })
      .then((data) => {
        console.log(data, "berhasil dftr apl1");
        // Swal.fire({
        //   title: "Pengisian Apl 01 Berhasil",
        //   icon: "success",
        //   showCancelButton: false,
        //   confirmButtonColor: "#3085d6",
        //   // cancelButtonColor: '#d33',
        //   confirmButtonText: "Ok",
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     router.push("/user/profiluser");
        //   }
        // });
        Swal.fire({
          position: "center",
          icon: "success",
          showConfirmButton: false,
          confirmButtonColor: "#3085d6",
          title: "Pengisian Apl 01 Berhasil ",
          // confirmButtonText: "Ok!",
          timer: 1500,
        }).then((result) => {
          // if (result.isConfirmed) {
          router.push("/user/profiluser");
          // }
        });
      })
      .catch((e) => {
        console.log(e, "errorini");
      });
  }
  // useEffect(() => {
  //   dispatch(fetchAsesiById(user?.id));
  // }, []);
  return (
    <React.Fragment>
      {Object.keys(userById).length > 0 ? (
        <div className={`${styles.boxRegister}`}>
          <Box className={`${styles.boxRegisStepper}`}>
            <Typography
              sx={{
                color: "#212529",
                fontSize: "30px",
                fontWeight: 700,
                textAlign: "center",
                padding: "10px 10px 40px 10px",
              }}
            >
              Formulir APL 01
            </Typography>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                // if (isStepOptional(index)) {
                //   labelProps.optional = (
                //     <Typography variant="caption">Optional</Typography>
                //   );
                // }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {/* {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : ( */}
            <React.Fragment>
              <Typography
                sx={{
                  mb: 1,
                  fontWeight: 600,
                  color: "rgb(4, 9, 36)",
                  fontSize: "18px",
                  padding: "50px 0px 10px 10px",
                }}
              >
                {activeStep === 0
                  ? "Rincian Data Pemohon Sertifikasi"
                  : activeStep === 1
                  ? "Data Pekerjaan"
                  : activeStep === 2
                  ? "Kelengkapan Berkas"
                  : "Tanda Tangan Asesi"}
              </Typography>
              <Formik
                initialValues={stateField}
                enableReinitialize={true}
                // validate={(values) => {
                //   const errors = {};
                //   if (!values.email) {
                //     errors.email = "Required";
                //   } else if (
                //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                //   ) {
                //     errors.email = "Invalid email address";
                //   }
                //   return errors;
                // }}
                onSubmit={(values, { setSubmitting }) => {
                  handleSubmitForm(values);
                }}
              >
                {(props) => {
                  const {
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  } = props;
                  console.log(props.values, "propssssvalue");
                  return (
                    <form onSubmit={handleSubmit}>
                      {activeStep === 0 ? (
                        <React.Fragment>
                          <Step1
                            dataAsesi={userById}
                            values={values}
                            handleBlur={handleBlur}
                            // handleSubmit={handleSubmit}
                            handleChange={handleChange}
                            dtprovinsi={dtprovinsi}
                            setProvinsi={setProvinsi}
                            selectedProv={selectedProv}
                            setSelected={setSelected}
                            dtKota={dtKota}
                            setKota={setKota}
                            selectedKota={selectedKota}
                            setSelectedKota={setSelectedKota}
                            jenis_kelamin={jenis_kelamin}
                            setJenisKelamin={setJenisKelamin}
                            selectedDate={selectedDate}
                            setDate={setDate}
                            handleChangeKota={handleChangeKota}
                            handleChangeProvinsi={handleChangeProvinsi}
                            stateField={stateField}
                          />
                        </React.Fragment>
                      ) : activeStep === 1 ? (
                        <Step2
                          dataAsesi={userById}
                          values={values}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          stateField={stateField}
                        />
                      ) : activeStep === 2 ? (
                        <Step3
                          dataAsesi={userById}
                          values={values}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          stateField={stateField}
                          setStateField={setStateField}
                          transkrip={transkrip}
                          setTranskrip={setTranskrip}
                          ijazah={ijazah}
                          setIjazah={setIjazah}
                          pas_foto={pas_foto}
                          setPasfoto={setPasfoto}
                          ktp={ktp}
                          setKtp={setKtp}
                          surat_pernyataan={surat_pernyataan}
                          setSuratPernyataan={setSuratPernyataan}
                          sertifikat_pelatihan_pendukung={
                            sertifikat_pelatihan_pendukung
                          }
                          setPendukung={setPendukung}
                        />
                      ) : (
                        <Step4
                          dataAsesi={userById}
                          values={values}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          stateField={stateField}
                          setStateField={setStateField}
                          imgttd={imgttd}
                          setimg={setimg}
                          sigPad={sigPad}
                        />
                      )}

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          pt: 2,
                          paddingLeft: "10px",
                          paddingRight: "15px",
                          mt: 4,
                        }}
                      >
                        <Button
                          onClick={handleBack}
                          // sx={{ mr: 1 }}
                          sx={{
                            border: "1px solid #2DC3D0",
                            display: activeStep === 0 ? "none" : "block",
                            color: "#2DC3D0",
                          }}
                        >
                          Previous
                        </Button>
                        <Box sx={{ flex: "1 1 auto" }} />

                        <Button
                          variant="contained"
                          color="success"
                          onClick={() => {
                            if (activeStep < 4) {
                              handleNext();
                            }
                          }}
                          sx={{
                            background: "#2DC3D0",
                            // display: activeStep !== 2 ? "block" : "none",
                          }}
                          type={activeStep > 3 ? "submit" : "button"}
                        >
                          {activeStep >= 3 ? "Submit" : "Next"}
                        </Button>
                      </Box>
                    </form>
                  );
                }}
              </Formik>
            </React.Fragment>
            {/* // )} */}
          </Box>
        </div>
      ) : (
        <LoadingComponent />
      )}
    </React.Fragment>
  );
}
