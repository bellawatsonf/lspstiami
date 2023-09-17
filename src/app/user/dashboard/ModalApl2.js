import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CloseOutlined, Diversity1Rounded } from "@mui/icons-material";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
const key = "Compact Table";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  // height: "100%",
  p: 4,
  height: "80%",
  overflow: "scroll",
};

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function ModalApl02(props) {
  console.log(props.dataApl01, "apl01modal");
  const theme = useTheme(getTheme());
  const [statuschecked, setchecked] = React.useState(false);
  const [checkAll, setCheckAll] = useState(false);
  console.log(statuschecked, "chekall");

  function handleSubmit() {
    console.log("masuk");
    let input = {
      id_apl01: props.dataApl01.id,
      id_jadwal_asesiskema_asesor: props.idJadwal_AsesiSkema_Asesor,
    };
    console.log(input);
    axios({
      method: "POST",
      url: `/api/add-apl02`,
      data: input,
    })
      .then(() => {
        props.setOpen(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Pengisian APL02 berhasil",

          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleCheck(e) {
    console.log(e.target.checked, "ass");
    if (e.target.checked === true) {
      setCheckAll(true);
      handleCheckAll(true);
    } else {
      setCheckAll(false);
      handleCheckAll(false);
    }
  }

  function handleCheckAll(param) {
    setchecked(param);
  }

  const COLUMNS = [
    {
      label: "Unit Kompetensi",
      renderCell: (item) => (
        <>
          <div
            className="text-wrap"
            style={{ whiteSpace: "unset", height: "100%" }}
          >
            {item.judul_unit}
            <ul>
              {item.kriteria_unitkerja.map((kriteria) => (
                <li>{kriteria.elemen}</li>
              ))}
            </ul>
          </div>
        </>
      ),
    },

    {
      label: "",
      renderCell: (item) => (
        <div
          className="text-wrap"
          style={{ whiteSpace: "unset", height: "100%" }}
        >
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={statuschecked === true ? true : false}
                  onChange={() => handleCheckAll()}
                  // defaultChecked={statuschecked === true ? true : false}
                />
              }
              // label={kriteria.elemen}
            />
          </FormGroup>
        </div>
      ),
    },

    // {
    //   label: "BK",
    //   renderCell: (item) => (
    //     <div
    //       className="text-wrap"
    //       style={{ whiteSpace: "unset", height: "100%" }}
    //     >
    //       <FormGroup>
    //         <FormControlLabel
    //           control={<Checkbox />}
    //           // label={kriteria.elemen}
    //         />
    //       </FormGroup>
    //     </div>
    //   ),
    // },
  ];
  return (
    <>
      {Object.keys(props.dataApl01).length > 0 ? (
        <div>
          <Modal
            open={props.open}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {/* <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  cursor: "pointer",
                  color: "red",
                }}
              >
                <CloseOutlined
                  onClick={() => {
                    props.setOpen(false);
                  }}
                />
              </div>
              
              {props.dataApl01?.asesi_skema?.skema?.unitkompetensi.map((el) => (
                <div style={{ display: "flex" }}>
                  <div>
                    <Typography>{el.judul_unit}</Typography>
                    <Typography>elemen</Typography>
                    <div style={{ marginLeft: "20px" }}>
                      {el.kriteria_unitkerja.map((h) => (
                        <div>{h.elemen}</div>
                      ))}
                    </div>
                  </div>
                  <div>K</div>
                  <div>BK</div>
                </div>
              ))}
             */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  cursor: "pointer",
                  color: "red",
                }}
              >
                <CloseOutlined
                  onClick={() => {
                    props.setOpen(false);
                  }}
                />
              </div>
              <Typography
                sx={{
                  fontWeight: 700,
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  fontSize: "15px",
                  color: "#211cae",
                }}
              >
                Catatan: Silahkan ceklis semua kompetensi
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Pilih Semua"
                  onChange={(e) => {
                    // setCheckAll(e.target.checked);
                    handleCheck(e);
                  }}
                />
              </FormGroup>
              <CompactTable
                columns={COLUMNS}
                data={{
                  nodes: props.dataApl01.asesi_skema.skema.unitkompetensi,
                }}
                theme={theme}
              />
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="contained" onClick={() => handleSubmit()}>
                  Submit
                </Button>
              </div>
            </Box>
          </Modal>
        </div>
      ) : null}
    </>
  );
}
