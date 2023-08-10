import { useRef } from "react";
import styles from "./step4.module.css";
import { Box, TextField, Typography, Button } from "@mui/material";
var React = require("react");
var SignaturePad = require("react-signature-pad");

export default function Step4() {
  let sigPad = useRef({});
  console.log(sigPad, "signaturepad");
  let data = "";
  function clear() {
    sigPad.current.clear();
  }

  function save() {
    data = sigPad.current.toDataURL();
    console.log(data, "simpan");
  }

  function show() {
    data = sigPad.current.frpmDataURL(data);
  }
  return (
    <>
      <Typography
        sx={{
          fontSize: "15px",
          fontWeight: 500,
          paddingBottom: "5px",
          paddingTop: "15px",
        }}
      >
        Silahkan Tanda Tangan di bawah ini :
      </Typography>
      <Box
        sx={{
          border: "1px solid black",
          width: "100%",
          height: "100%",
          borderRadius: "20px",
        }}
      >
        <SignaturePad ref={sigPad} />
      </Box>
      <Button variant="contained" color="success" onClick={() => clear()}>
        Hapus
      </Button>

      <Button variant="contained" color="success" onClick={() => save()}>
        Simpan
      </Button>

      <Button variant="contained" color="success" onClick={() => show()}>
        Tampil
      </Button>
    </>
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
