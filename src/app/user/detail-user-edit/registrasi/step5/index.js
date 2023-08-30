import { useRef, useState } from "react";
import styles from "./step4.module.css";
import { Box, TextField, Typography, Button } from "@mui/material";
var React = require("react");
// var SignaturePad = require("react-signature-pad");
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import SignatureCanvas from "react-signature-canvas";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Formik } from "formik";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import LoadingComponent from "@/app/(public)/component/loading";
import { useSelector } from "react-redux";
import { Fragment } from "react";

export default function Step5(props) {
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const initialState = {
    id_skema: "",
    id_asesi: "",
  };
  const [stateField, setStateField] = useState(initialState);
  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <Fragment>
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
            <div style={{ marginTop: "20px", height: "100%" }}>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 500,
                  paddingBottom: "10px",
                  paddingTop: "15px",
                }}
              >
                Silahkan Klik Untuk Memilih{" "}
                <Link href="/sertifikasi">Sertifikasi</Link>
              </Typography>
            </div>
          </form>
        )}
      </Formik>
    </Fragment>
  );
}
