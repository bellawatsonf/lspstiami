import LoadingComponent from "@/app/(public)/component/loading";
import { Typography } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

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

            <input
              type="file"
              accept="application/pdf"
              name="transkrip"
              onChange={(e) => {
                props.setTranskrip(e.target.files[0]);
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
            {/* {errors.ijazah && touched.ijazah && errors.ijazah} */}
            {/* <TextField fullWidth label="fullWidth" id="fullWidth" /> */}
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

            <input
              type="file"
              accept="application/pdf"
              name="ijazah"
              onChange={(e) => {
                // handleChangeImg(e);
                props.setIjazah(e.target.files[0]);
                // props.setStateField((prevState) => {
                //   console.log(e.target.files[0], "cvent");
                //   return {
                //     ...prevState,
                //     ijazah: e.target.files[0],
                //   };
                // });
              }}
            />
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

            <input
              type="file"
              accept="application/pdf"
              name="img_ktp"
              onChange={(e) => {
                props.setKtp(e.target.files[0]);

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

            <input
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              name="pas_foto"
              onChange={(e) => {
                props.setPasfoto(e.target.files[0]);

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

            <input
              type="file"
              accept="application/pdf"
              name="surat_pernyataan"
              onChange={(e) => {
                props.setSuratPernyataan(e.target.files[0]);

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

            <input
              type="file"
              accept="application/pdf"
              name="sertifikat_pelatihan_pendukung"
              onChange={(e) => {
                props.setPendukung(e.target.files[0]);

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
