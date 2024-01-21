import LoadingComponent from "@/app/(public)/component/loading";
import { Box, Button, Typography } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
export default function Step3(props) {
  const router = useRouter();
  let params = useParams();
  let id = params.id;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  let initialState = {
    transkrip: "",
    ijazah: "",
    pas_foto: "",
    ktp: "",
    surat_pernyataan: "",
    bukti_bayar: "",
    sertifikat_pelatihan_pendukung: "",
  };
  const [stateField, setStateField] = useState(initialState);
  const [prevPas, setPrevPas] = useState("");
  const [previjazah, setPrevIjazah] = useState("");
  const [prevPernyataan, setPrevPernyataan] = useState("");
  const [prevSertifikat, setPrevSertifikat] = useState("");
  const [prevTranskrip, setPrevTranskrip] = useState("");
  const [prevBukti, setPrevBukti] = useState("");
  const [prevKtp, setPrevKtp] = useState("");
  // function handleChangeImg(e) {
  //   setStateField((prevState) => {
  //     console.log(e.target.files[0], "cvent");
  //     return {
  //       ...prevState,
  //       transkrip: e.target.files[0],
  //       ijazah: e.target.files[0],
  //       ktp: e.target.files[0],
  //     };
  //   });
  // }

  // function handleSubmitForm() {
  //   let formData = new FormData();
  //   formData.append("transkrip", stateField.transkrip);
  //   formData.append("ijazah", stateField.ijazah);
  //   formData.append("img_ktp", stateField.ktp);
  //   formData.append("pas_foto", stateField.pas_foto);
  //   formData.append("surat_pernyataan", stateField.surat_pernyataan);
  //   formData.append("bukti_bayar", stateField.bukti_bayar);
  //   formData.append(
  //     "sertifikat_pelatihan_pendukung",
  //     stateField.sertifikat_pelatihan_pendukung
  //   );

  //   axios({
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //     url: `/api/edit-asesi/${id}`,
  //     data: formData,
  //   })
  //     .then((data) => {
  //       console.log(data, "berhasil");
  //       router.push("/user/profiluser");
  //     })
  //     .catch((err) => {
  //       console.log(err, "errorini");
  //     });
  //   // console.log(stateField.transkrip);
  //   //   // console.log(value, "vlue");
  //   //   // console.log(value.tgl_lahir, "value");
  //   //   let input = {
  //   //     transkrip: stateField.transkrip,
  //   //     // ijazah: value.ijazah,
  //   //     // pas_foto: value.pas_foto,
  //   //     // ktp: value.ktp,
  //   //     // surat_pernyataan: value.surat_pernyataan,
  //   //     // bukti_bayar: value.bukti_bayar,
  //   //   };
  //   //   console.log(input, "inputan");
  //   //   axios({
  //   //     method: "PUT",
  //   //     headers: {
  //   //       "Content-Type": "multipart/form-data",
  //   //     },
  //   //     url: `/api/edit-asesi/${id}`,
  //   //     data: input,
  //   //   })
  //   //     .then((data) => {
  //   //       console.log(data, "berhasil");
  //   //       router.push("/user/profiluser");
  //   //     })
  //   //     .catch((e) => {
  //   //       console.log(e, "errorini");
  //   //     });
  // }
  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <Fragment>
      {/* // <Formik
    //   enableReinitialize={true}
    //   initialValues={stateField}
    //   onSubmit={() => {
    //     handleSubmitForm();
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
    //   }) => ( */}
      {/* <form onSubmit={handleSubmitForm} enctype="multipart/form-data"> */}
      <div style={{ marginTop: "30px" }}>
        <div className="row">
          <div className="col-12">
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                paddingBottom: "5px",
                paddingTop: "15px",
              }}
            >
              Transkrip
            </Typography>
            <Button
              variant="contained"
              component="label"
              sx={{
                borderRadius: "4px",
                background: "#1976D2",
                textTransform: "capitalize",
                width: "136px",
              }}
            >
              upload <FileDownloadOutlinedIcon sx={{ marginLeft: "7px" }} />
              <input
                type="file"
                hidden
                accept="application/pdf"
                name="transkrip"
                onChange={(e) => {
                  props.setTranskrip(e.target.files[0]);
                  if (e.target.files[0]) {
                    const reader = new FileReader();

                    reader.onload = () => {
                      setPrevTranskrip(reader.result);
                    };

                    reader.readAsDataURL(e.target.files[0]);
                  }

                  // handleChangeImg(e);
                  // props.setStateField((prevState) => {
                  //   console.log(e.target.files[0], "cvent");
                  //   return {
                  //     ...prevState,
                  //     transkrip: e.target.files[0],
                  //     // ijazah: e.target.files[0],
                  //     // ktp: e.target.files[0],
                  //   };
                  // });
                }}
                // onBlur={handleBlur}
                // value={values.transkrip}
              />
            </Button>

            {/* {errors.ijazah && touched.ijazah && errors.ijazah} */}
            {/* <TextField fullWidth label="fullWidth" id="fullWidth" /> */}
            <Box
              sx={{
                width: "40px",
                marginTop: "48px",
                marginBottom: "30px",
                display: prevTranskrip !== "" ? "block" : "none",
              }}
            >
              <embed src={prevTranskrip} width="133px" />
            </Box>
          </div>
          <div className="col-12">
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                paddingBottom: "5px",
                paddingTop: "15px",
              }}
            >
              Ijazah
            </Typography>
            <Button
              variant="contained"
              component="label"
              sx={{
                borderRadius: "4px",
                background: "#1976D2",
                textTransform: "capitalize",
                width: "136px",
              }}
            >
              upload <FileDownloadOutlinedIcon sx={{ marginLeft: "7px" }} />
              <input
                type="file"
                accept="application/pdf"
                hidden
                name="ijazah"
                onChange={(e) => {
                  // handleChangeImg(e);
                  props.setIjazah(e.target.files[0]);
                  if (e.target.files[0]) {
                    const reader = new FileReader();

                    reader.onload = () => {
                      setPrevIjazah(reader.result);
                    };

                    reader.readAsDataURL(e.target.files[0]);
                  }

                  // props.setStateField((prevState) => {
                  //   console.log(e.target.files[0], "cvent");
                  //   return {
                  //     ...prevState,
                  //     ijazah: e.target.files[0],
                  //   };
                  // });
                }}
              />
            </Button>

            <Box
              sx={{
                width: "40px",
                marginTop: "48px",
                marginBottom: "30px",
                display: previjazah !== "" ? "block" : "none",
              }}
            >
              <embed src={previjazah} width="133px" />
            </Box>
          </div>
          <div className="col-12">
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                paddingBottom: "5px",
                paddingTop: "15px",
              }}
            >
              KTP
            </Typography>
            <Button
              variant="contained"
              component="label"
              sx={{
                borderRadius: "4px",
                background: "#1976D2",
                textTransform: "capitalize",
                width: "136px",
              }}
            >
              upload <FileDownloadOutlinedIcon sx={{ marginLeft: "7px" }} />
              <input
                type="file"
                accept="application/pdf"
                hidden
                name="img_ktp"
                onChange={(e) => {
                  props.setKtp(e.target.files[0]);
                  if (e.target.files[0]) {
                    const reader = new FileReader();

                    reader.onload = () => {
                      setPrevKtp(reader.result);
                    };

                    reader.readAsDataURL(e.target.files[0]);
                  }

                  // handleChangeImg(e);
                  // props.setStateField((prevState) => {
                  //   console.log(e.target.files[0], "cvent");
                  //   return {
                  //     ...prevState,
                  //     // transkrip: e.target.files[0],
                  //     // ijazah: e.target.files[0],
                  //     ktp: e.target.files[0],
                  //   };
                  // });
                }}
              />
            </Button>

            <Box
              sx={{
                width: "40px",
                marginTop: "48px",
                marginBottom: "30px",
                display: prevKtp !== "" ? "block" : "none",
              }}
            >
              <embed src={stateField.img_ktp} width="133px" />
            </Box>
          </div>
          <div className="col-12">
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                paddingBottom: "5px",
                paddingTop: "15px",
              }}
            >
              Pas Foto Background merah
            </Typography>
            <Button
              variant="contained"
              component="label"
              sx={{
                borderRadius: "4px",
                background: "#1976D2",
                textTransform: "capitalize",
                width: "136px",
              }}
            >
              upload <FileDownloadOutlinedIcon sx={{ marginLeft: "7px" }} />
              <input
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                name="pas_foto"
                hidden
                onChange={(e) => {
                  console.log(e.target.files[0], "trgt");
                  props.setPasfoto(e.target.files[0]);
                  if (e.target.files[0]) {
                    const reader = new FileReader();

                    reader.onload = () => {
                      setPrevPas(reader.result);
                    };

                    reader.readAsDataURL(e.target.files[0]);
                  }

                  // handleChangeImg(e);
                  // props.setStateField((prevState) => {
                  //   console.log(e.target.files[0], "cvent");
                  //   return {
                  //     ...prevState,
                  //     // transkrip: e.target.files[0],
                  //     // ijazah: e.target.files[0],
                  //     pas_foto: e.target.files[0],
                  //   };
                  // });
                }}
              />
            </Button>
            <Box
              sx={{
                width: "40px",
                marginTop: "48px",
                marginBottom: "30px",
                display: prevPas !== "" ? "block" : "none",
              }}
            >
              <img src={prevPas} style={{ width: "133px" }} />
            </Box>
          </div>

          <div className="col-12">
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                paddingBottom: "5px",
                paddingTop: "15px",
              }}
            >
              Surat Pernyataan Tidak Merekam Bermaterai
            </Typography>
            <Button
              variant="contained"
              component="label"
              sx={{
                borderRadius: "4px",
                background: "#1976D2",
                textTransform: "capitalize",
                width: "136px",
              }}
            >
              upload <FileDownloadOutlinedIcon sx={{ marginLeft: "7px" }} />
              <input
                type="file"
                accept="application/pdf"
                hidden
                name="surat_pernyataan"
                onChange={(e) => {
                  props.setSuratPernyataan(e.target.files[0]);
                  if (e.target.files[0]) {
                    const reader = new FileReader();

                    reader.onload = () => {
                      setPrevPernyataan(reader.result);
                    };

                    reader.readAsDataURL(e.target.files[0]);
                  }

                  // handleChangeImg(e);
                  // props.setStateField((prevState) => {
                  //   console.log(e.target.files[0], "cvent");
                  //   return {
                  //     ...prevState,
                  //     // transkrip: e.target.files[0],
                  //     // ijazah: e.target.files[0],
                  //     surat_pernyataan: e.target.files[0],
                  //   };
                  // });
                }}
              />
            </Button>

            <Box
              sx={{
                width: "40px",
                marginTop: "48px",
                marginBottom: "30px",
                display: prevPernyataan !== "" ? "block" : "none",
              }}
            >
              <img src={prevPernyataan} style={{ width: "133px" }} />
            </Box>
          </div>
          <div className="col-12">
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                paddingBottom: "5px",
                paddingTop: "15px",
              }}
            >
              Sertifikat Pelatihan Pendukung
            </Typography>
            <Button
              variant="contained"
              component="label"
              sx={{
                borderRadius: "4px",
                background: "#1976D2",
                textTransform: "capitalize",
                width: "136px",
              }}
            >
              upload <FileDownloadOutlinedIcon sx={{ marginLeft: "7px" }} />
              <input
                type="file"
                accept="application/pdf"
                name="sertifikat_pelatihan_pendukung"
                hidden
                onChange={(e) => {
                  props.setPendukung(e.target.files[0]);
                  if (e.target.files[0]) {
                    const reader = new FileReader();

                    reader.onload = () => {
                      setPrevSertifikat(reader.result);
                    };

                    reader.readAsDataURL(e.target.files[0]);
                  }

                  // handleChangeImg(e);
                  // props.setStateField((prevState) => {
                  //   console.log(e.target.files[0], "cvent");
                  //   return {
                  //     ...prevState,
                  //     // transkrip: e.target.files[0],
                  //     // ijazah: e.target.files[0],
                  //     sertifikat_pelatihan_pendukung: e.target.files[0],
                  //   };
                  // });
                }}
              />
            </Button>

            <Box
              sx={{
                width: "40px",
                marginTop: "48px",
                marginBottom: "30px",
                display: prevSertifikat !== "" ? "block" : "none",
              }}
            >
              <embed src={prevSertifikat} width="133px" />
            </Box>
          </div>
          {/* <div className="col-12">
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                paddingBottom: "5px",
                paddingTop: "15px",
              }}
            >
              Bukti Bayar
            </Typography>

            <input
              type="file"
              name="bukti_bayar"
              onChange={(e) => {
                // handleChangeImg(e);
                props.setStateField((prevState) => {
                  console.log(e.target.files[0], "cvent");
                  return {
                    ...prevState,
                    // transkrip: e.target.files[0],
                    // ijazah: e.target.files[0],
                    bukti_bayar: e.target.files[0],
                  };
                });
              }}
            />
          </div> */}
        </div>
      </div>
      {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={{ textTransform: "none", marginTop: "20px" }}
          type="submit"
          onClick={() => {
            handleSubmitForm();
          }}
        >
          Simpan
        </Button>
      </div> */}
      {/* </form> */}
      {/* //   )}
    // </Formik> */}
    </Fragment>
  );
}
