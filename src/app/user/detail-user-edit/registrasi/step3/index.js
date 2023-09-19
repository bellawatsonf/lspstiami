import LoadingComponent from "@/app/(public)/component/loading";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

export default function Step3(props) {
  const router = useRouter();
  let params = useParams();
  let id = params.id;
  const [loading, setLoading] = useState(true);
  var reader = new FileReader();
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
  const [previewTranskrip, setPreviewTranskrip] = useState("");
  const [previewIjazah, setPreviewIjazah] = useState("");
  const [previewKtp, setPreviewKtp] = useState("");
  const [previewSuratPernyataan, setPreviewSuratPernyataan] = useState("");
  const [previewSertifikatPendukung, setPreviewSertifikatPendukung] =
    useState("");
  function handleChangeImg(e) {
    setStateField((prevState) => {
      console.log(e.target.files[0], "cvent");
      return {
        ...prevState,
        transkrip: e.target.files[0],
        ijazah: e.target.files[0],
        ktp: e.target.files[0],
      };
    });
  }
  console.log(stateField.transkrip, "transkridddp");

  function handleSubmitForm() {
    let formData = new FormData();
    formData.append("transkrip", stateField.transkrip);
    formData.append("ijazah", stateField.ijazah);
    formData.append("img_ktp", stateField.ktp);
    formData.append("pas_foto", stateField.pas_foto);
    formData.append("surat_pernyataan", stateField.surat_pernyataan);
    formData.append("bukti_bayar", stateField.bukti_bayar);
    formData.append("alasan_penolakan", "belum-dicek");
    formData.append(
      "sertifikat_pelatihan_pendukung",
      stateField.sertifikat_pelatihan_pendukung
    );

    axios({
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      url: `/api/edit-asesi/${id}`,
      data: formData,
    })
      .then((data) => {
        console.log(data, "berhasil");
        router.push("/user/profiluser");
      })
      .catch((err) => {
        console.log(err, "errorini");
      });
    // console.log(stateField.transkrip);
    //   // console.log(value, "vlue");
    //   // console.log(value.tgl_lahir, "value");
    //   let input = {
    //     transkrip: stateField.transkrip,
    //     // ijazah: value.ijazah,
    //     // pas_foto: value.pas_foto,
    //     // ktp: value.ktp,
    //     // surat_pernyataan: value.surat_pernyataan,
    //     // bukti_bayar: value.bukti_bayar,
    //   };
    //   console.log(input, "inputan");
    //   axios({
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
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
  }
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
                // paddingBottom: "5px",
                paddingTop: "15px",
              }}
            >
              Transkrip
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: 500,
                paddingBottom: "5px",
                // paddingTop: "5px",
                color: "red",
              }}
            >
              Document harus berformat pdf
            </Typography>

            <input
              type="file"
              name="transkrip"
              accept="application/pdf"
              onChange={(e) => {
                // handleChangeImg(e);
                setPreviewTranskrip(URL.createObjectURL(e.target.files[0]));
                setStateField((prevState) => {
                  console.log(e.target.files[0], "cvent");
                  return {
                    ...prevState,
                    transkrip: e.target.files[0],
                    // ijazah: e.target.files[0],
                    // ktp: e.target.files[0],
                  };
                });
              }}
              // onBlur={handleBlur}
              // value={values.transkrip}
            />
            {/* {errors.ijazah && touched.ijazah && errors.ijazah} */}
            {/* <TextField fullWidth label="fullWidth" id="fullWidth" /> */}
            {/* <img
              style={{ width: "15%" }}
              src={
                stateField.transkrip !== ""
                  ? URL.createObjectURL(stateField.transkrip)
                  : `${props.dataAsesi.transkrip}`
              }
            /> */}

            <embed
              src={
                previewTranskrip === ""
                  ? `${props.dataAsesi.transkrip}`
                  : previewTranskrip
              }
              style={{ width: "200px", height: "200px" }}
            ></embed>
          </div>
          <div className="col-12">
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                // paddingBottom: "5px",
                paddingTop: "15px",
              }}
            >
              Ijazah
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: 500,
                // paddingBottom: "5px",
                // paddingTop: "5px",
                color: "red",
              }}
            >
              Document harus berformat pdf
            </Typography>
            <input
              type="file"
              accept="application/pdf"
              name="ijazah"
              onChange={(e) => {
                // handleChangeImg(e);
                setPreviewIjazah(URL.createObjectURL(e.target.files[0]));
                setStateField((prevState) => {
                  console.log(e.target.files[0], "cvent");
                  return {
                    ...prevState,
                    ijazah: e.target.files[0],
                  };
                });
              }}
            />
            <embed
              src={
                previewIjazah === ""
                  ? `${props.dataAsesi.ijazah}`
                  : previewIjazah
              }
              style={{ width: "200px", height: "200px" }}
            ></embed>
          </div>
          <div className="col-12">
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                // paddingBottom: "5px",
                paddingTop: "15px",
              }}
            >
              KTP
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: 500,
                paddingBottom: "5px",
                // paddingTop: "5px",
                color: "red",
              }}
            >
              Document harus berformat pdf
            </Typography>
            <input
              type="file"
              accept="application/pdf"
              name="img_ktp"
              onChange={(e) => {
                // handleChangeImg(e);
                setPreviewKtp(URL.createObjectURL(e.target.files[0]));
                setStateField((prevState) => {
                  console.log(e.target.files[0], "cvent");
                  return {
                    ...prevState,
                    // transkrip: e.target.files[0],
                    // ijazah: e.target.files[0],
                    ktp: e.target.files[0],
                  };
                });
              }}
            />
            {/* <img
              style={{ width: "15%" }}
              src={
                stateField.ktp !== ""
                  ? URL.createObjectURL(stateField.ktp)
                  : `${props.dataAsesi.img_ktp}`
              }
            /> */}
            <embed
              src={
                previewKtp === "" ? `${props.dataAsesi.img_ktp}` : previewKtp
              }
              style={{ width: "200px", height: "200px" }}
            ></embed>
          </div>
          <div className="col-12">
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                // paddingBottom: "5px",
                paddingTop: "15px",
              }}
            >
              Pas Foto Background Merah
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: 500,
                paddingBottom: "5px",
                // paddingTop: "5px",
                color: "red",
              }}
            >
              Document harus berformat jpg/jpeg/png
            </Typography>
            <input
              type="file"
              name="pas_foto"
              accept="image/png, image/jpg, image/jpeg"
              onChange={(e) => {
                // handleChangeImg(e);
                setStateField((prevState) => {
                  console.log(e.target.files[0], "cvent");
                  return {
                    ...prevState,
                    // transkrip: e.target.files[0],
                    // ijazah: e.target.files[0],
                    pas_foto: e.target.files[0],
                  };
                });
              }}
            />
            <img
              style={{ width: "15%" }}
              src={
                stateField.pas_foto !== ""
                  ? URL.createObjectURL(stateField.pas_foto)
                  : `${props.dataAsesi.pas_foto}`
              }
            />
          </div>

          <div className="col-12">
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                // paddingBottom: "5px",
                paddingTop: "15px",
              }}
            >
              Surat Pernyataan Tidak Merekam Bermaterai
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: 500,
                paddingBottom: "5px",
                // paddingTop: "5px",
                color: "red",
              }}
            >
              Document harus berformat pdf
            </Typography>
            <input
              type="file"
              accept="application/pdf"
              name="surat_pernyataan"
              onChange={(e) => {
                // handleChangeImg(e);
                setPreviewSuratPernyataan(
                  URL.createObjectURL(e.target.files[0])
                );
                setStateField((prevState) => {
                  console.log(e.target.files[0], "cvent");
                  return {
                    ...prevState,
                    // transkrip: e.target.files[0],
                    // ijazah: e.target.files[0],
                    surat_pernyataan: e.target.files[0],
                  };
                });
              }}
            />
            {/* <img
              style={{ width: "15%" }}
              src={
                stateField.surat_pernyataan !== ""
                  ? URL.createObjectURL(stateField.surat_pernyataan)
                  : `${props.dataAsesi.surat_pernyataan}`
              }
            /> */}
            <embed
              src={
                previewSuratPernyataan === ""
                  ? `${props.dataAsesi.surat_pernyataan}`
                  : previewSuratPernyataan
              }
              style={{ width: "200px", height: "200px" }}
            ></embed>
          </div>
          <div className="col-12">
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                // paddingBottom: "5px",
                paddingTop: "15px",
              }}
            >
              Sertifikat Pelatihan Pendukung
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: 500,
                paddingBottom: "5px",
                // paddingTop: "5px",
                color: "red",
              }}
            >
              Document harus berformat pdf
            </Typography>
            <input
              type="file"
              accept="application/pdf"
              name="sertifikat_pelatihan_pendukung"
              onChange={(e) => {
                // handleChangeImg(e);
                setPreviewSertifikatPendukung(
                  URL.createObjectURL(e.target.files[0])
                );
                setStateField((prevState) => {
                  console.log(e.target.files[0], "cvent");
                  return {
                    ...prevState,
                    // transkrip: e.target.files[0],
                    // ijazah: e.target.files[0],
                    sertifikat_pelatihan_pendukung: e.target.files[0],
                  };
                });
              }}
            />
            {/* <img
              style={{ width: "15%" }}
              src={
                stateField.sertifikat_pelatihan_pendukung !== ""
                  ? URL.createObjectURL(
                      stateField.sertifikat_pelatihan_pendukung
                    )
                  : `${props.dataAsesi.sertifikat_pelatihan_pendukung}`
              }
            /> */}
            <embed
              src={
                previewSertifikatPendukung === ""
                  ? `${props.dataAsesi.sertifikat_pelatihan_pendukung}`
                  : previewSertifikatPendukung
              }
              style={{ width: "200px", height: "200px" }}
            ></embed>
          </div>
          <div className="col-12">
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                // paddingBottom: "5px",
                paddingTop: "15px",
              }}
            >
              Bukti Bayar
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: 500,
                paddingBottom: "5px",
                // paddingTop: "5px",
                color: "red",
              }}
            >
              Document harus berformat jpg/jpeg/png
            </Typography>
            <input
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              name="bukti_bayar"
              onChange={(e) => {
                // handleChangeImg(e);
                setStateField((prevState) => {
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
            <img
              style={{ width: "15%" }}
              src={
                stateField.bukti_bayar !== ""
                  ? URL.createObjectURL(stateField.bukti_bayar)
                  : `${props.dataAsesi.bukti_bayar}`
              }
            />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
      </div>
      {/* </form> */}
      {/* //   )}
    // </Formik> */}
    </Fragment>
  );
}
