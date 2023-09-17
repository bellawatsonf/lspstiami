import { Box, Button, Typography } from "@mui/material";
import styles from "./step4.module.css";
var React = require("react");
// var SignaturePad = require("react-signature-pad");
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import SignatureCanvas from "react-signature-canvas";

export default function Step4(props) {
  // const [loading, setLoading] = useState(true);
  // const router = useRouter();
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);
  // let sigPad = useRef({});
  // console.log(sigPad, "signaturepad");
  let data = "";
  // const [imgttd, setimg] = useState("");
  // let initialState = {
  //   tujuan_asesmen: "sertifikasi",
  //   ttd_asesi: "",
  //   nama_lengkap: props.dataAsesi.nama_lengkap,
  // };
  // let [stateField, setStateField] = useState(initialState);
  // let params = useParams();
  // let id = params.id;
  // React.useEffect(() => {
  //   setStateField((prevState) => {
  //     return {
  //       ...prevState,
  //       tujuan_asesmen:
  //         props.dataAsesi.tujuan_asesmen !== null
  //           ? props.dataAsesi.tujuan_asesmen
  //           : stateField.tujuan_asesmen,
  //       ttd_asesi: props.dataAsesi.ttd_asesi,
  //     };
  //   });
  // }, []);

  const handleChangeRadio = (event) => {
    console.log(event.target.value);
    props.setStateField((prevState) => {
      return {
        ...prevState,
        tujuan_asesmen: event.target.value,
      };
    });
  };

  function clear() {
    props.sigPad.current.clear();
  }

  // function save() {
  //   data = props.sigPad.current.toDataURL();
  //   console.log(data, "simpan");
  // }

  function show() {
    data = props.sigPad.current.toDataURL();
    console.log(data, "img");
    props.setimg(data);
  }

  // function handleSubmitForm(value) {
  //   console.log(value, "value");
  //   let input = {
  //     tujuan_asesmen: stateField.tujuan_asesmen,
  //     ttd_asesi: sigPad.current.toDataURL(),
  //     nama_lengkap: props.dataAsesi.nama_lengkap,
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
  // console.log(stateField.tujuan_asesmen, "img");
  // if (loading) {
  //   return <LoadingComponent />;
  // }
  return (
    <React.Fragment>
      {/* <Formik
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
        }) => (
          <form onSubmit={handleSubmit}> */}
      <div style={{ marginTop: "20px", height: "100%" }}>
        <div className="row">
          <div className="col-6">
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                paddingBottom: "10px",
                paddingTop: "15px",
              }}
            >
              Tujuan Asesmen
            </Typography>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="tujuan_asesmen"
                defaultValue={
                  props.stateField.tujuan_asesmen == null
                    ? "sertifkasi"
                    : props.stateField.tujuan_asesmen
                }
                sx={{ fontSize: "10px" }}
                onChange={(e) => handleChangeRadio(e)}
                onBlur={props.handleBlur}
              >
                <FormControlLabel
                  value="sertifikasi"
                  control={<Radio />}
                  label="Sertifikasi"
                  // labelPlacement="sertifikasi"
                />
                <FormControlLabel
                  value="sertifikasi ulang"
                  control={<Radio />}
                  label="Sertifikasi Ulang"
                  // labelPlacement="sertifikasi ulang"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: 500,
            paddingBottom: "25px",
            paddingTop: "15px",
          }}
        >
          Silahkan Tanda Tangan di bawah ini :
        </Typography>

        <SignatureCanvas
          penColor="black"
          canvasProps={{
            // width: 600,
            height: 200,
            className: styles["sigCanvas"],
          }}
          ref={props.sigPad}
        />
        <br />
        <Box
          sx={{
            display: props.imgttd !== "" ? "flex" : "none",
            width: "300px",
            border: "1px solid black",
            borderRadius: "10px",
            marginBottom: "5px",
          }}
        >
          <HighlightOffIcon
            onClick={() => props.setimg("")}
            sx={{ color: "red", cursor: "pointer" }}
          />
          <img src={props.imgttd} style={{ width: "300px" }} />
        </Box>
        {/* </Box> */}
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            margin: "7px 5px 0px 0px",
            fontSize: "12px",
          }}
          color="success"
          onClick={() => clear()}
        >
          Hapus
        </Button>
        {/* <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  margin: "7px 5px 0px 0px",
                  fontSize: "12px",
                }}
                color="success"
                onClick={() => save()}
              >
                Simpan
              </Button> */}
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            margin: "7px 5px 0px 0px",
            fontSize: "12px",
          }}
          color="success"
          onClick={() => show()}
        >
          Tampil
        </Button>
      </div>

      {/* </form>
        )}
      </Formik> */}
    </React.Fragment>

    // <div className="container">
    //   <div className="row">
    //     <div className="col-12">
    //       <Typography
    //         sx={{
    //           fontSize: "15px",
    //           fontWeight: 500,
    //           paddingBottom: "5px",
    //           paddingTop: "15px",
    //         }}
    //       >
    //         Tanda Tangan
    //       </Typography>

    //     </div>
    //   </div>
    // </div>
  );
}
