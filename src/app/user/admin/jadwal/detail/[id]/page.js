"use client";

import LoadingComponent from "@/app/(public)/component/loading";
import { fetchSkema } from "@/app/services/skema";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { fetchApl01 } from "@/app/services/apl01";
import { Formik } from "formik";
import { fetchJadwalById } from "@/app/services/jadwal";
import { useParams } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";

export default function detailJadwal() {
  let dispatch = useDispatch();
  let param = useParams();
  let loading = useSelector((state) => state.skema.loading);
  let skema = useSelector((state) => state.skema.skema);
  let dataApl01 = useSelector((state) => state.apl01.apl01);
  let jadwalById = useSelector((state) => state.jadwal.jadwalById);
  const [tempSkema, setTempSkema] = useState([]);
  const [tempAsesi, setTempAsesi] = useState([]);
  const [penampungAsesi, setPenampungAsesi] = useState([]);
  const [checked, setChecked] = useState(false);
  let initialState = {
    id_jadwal: "",
    skema: "",
    asesi: "",
  };
  let [stateField, setStateField] = useState(initialState);
  let [asesiJadwal, setAsesiJadwal] = useState([]);
  const dtarr = [];
  console.log(asesiJadwal, "jdwlbyid");

  function cekAsesiJadwal() {
    console.log("masuk cek asesi");

    axios({
      method: "GET",
      url: `/api/getById-jadwalasesiskema/${param.id}`,
    })
      .then((data) => {
        console.log("masuk cek asesi");
        console.log(data.data.data, "dataasesigetjadwal");
        setAsesiJadwal(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    dispatch(fetchSkema());
    dispatch(fetchJadwalById(param.id));
    cekAsesiJadwal();
  }, []);

  useEffect(() => {
    dispatch(fetchApl01());
  }, []);

  console.log(tempSkema, "dataappl");
  console.log(tempAsesi, "dataapplasesi");

  function handleSubmit() {
    console.log(penampungAsesi, "tmpsk");
    let inputarr = [];
    tempSkema.map((sk) => {
      let input = {
        id_skema: "",
        id_asesis: "",
        nama_asesis: "",
        id_jadwal: param.id,
      };
      let arrAsesi = [];
      let arrnamaAsesi = [];
      let idskema = sk;
      let tmp = "";
      for (let i = 0; i < penampungAsesi.length; i++) {
        console.log(penampungAsesi[i], "datasesis");
        // console.log(penampungAsesi[i].asesi, "skss");
        // let arr = [];
        // console.log(arr, i);
        if (penampungAsesi[i].idSkema === sk) {
          // tmp = penampungAsesi[i].asesi;
          arrAsesi.push(penampungAsesi[i].asesi);
          arrnamaAsesi.push(penampungAsesi[i].nama_asesi);
          // arr.push(tmp);
          input.id_asesis = arrAsesi;
          input.nama_asesis = arrnamaAsesi;
        }
      }
      input.id_skema = idskema;
      console.log(input, "sks");
      inputarr.push(input);
      // axios({
      //   method: "post",
      //   url: "/api/add-jadwal-asesiskema",
      //   data: input,
      // })
      //   .then((data) => {
      //     Swal.fire({
      //       position: "center",
      //       icon: "success",
      //       title: "berhasil menambahkan adta",
      //       // showConfirmButton: false,
      //       timer: 1500,
      //     });
      //   })
      //   .catch((err) => console.log(err));
    });
    let datainput = {
      data: inputarr,
    };
    axios({
      method: "post",
      url: `/api/add-jadwal-asesiskema/${param.id}`,
      data: datainput,
    })
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "berhasil menambahkan adta",
          // showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => console.log(err));
  }

  // if (loading) {
  //   return <LoadingComponent />;
  // }
  return (
    <>
      <div className="d-flex mb-4">
        <div style={{ marginRight: "10px" }}>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#8f8a8a",
              fontWeight: 600,
            }}
          >
            Tipe :
          </Typography>
        </div>
        <Typography
          sx={{ fontSize: "20px", color: "#8f8a8a", fontWeight: 600 }}
        >
          {jadwalById.tipe}
        </Typography>
      </div>

      <div className="d-flex mb-4">
        <div style={{ marginRight: "10px" }}>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#8f8a8a",
              fontWeight: 600,
            }}
          >
            Tanggal Pelaksanaan :
          </Typography>
        </div>
        <Typography
          sx={{
            fontSize: "20px",
            color: "#8f8a8a",
            fontWeight: 600,
          }}
        >
          {Object.keys(jadwalById).length !== 0
            ? new Date(jadwalById.tgl).toISOString().split("T")[0]
            : ""}
        </Typography>
      </div>
      <div className="d-flex mb-4">
        <div style={{ marginRight: "10px" }}>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#8f8a8a",
              fontWeight: 600,
            }}
          >
            TUK :
          </Typography>
        </div>
        <Typography
          sx={{
            fontSize: "20px",
            color: "#8f8a8a",
            fontWeight: 600,
          }}
        >
          {jadwalById.tuk}
        </Typography>
      </div>
      <Formik
        initialValues={stateField}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit();
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
            <Typography sx={{ paddingBottom: "10px", fontWeight: 600 }}>
              Pilih Skema
            </Typography>
            {skema.map((el) => (
              <>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={tempSkema}
                        // checked={checked}
                        onChange={(e) => {
                          let dataarr = [...tempSkema];
                          if (e.target.checked) {
                            setTempSkema([...tempSkema, el.id]);
                            console.log(el.id, "tempskema");
                          } else {
                            for (let i = 0; i < tempSkema.length; i++) {
                              if (tempSkema[i] === el.id) {
                                // delete tempSkema[i];
                                // tempSkema.remove(i);
                                dataarr.splice(i, 1);
                                // let datauncheck = tempSkema;

                                // console.log(datauncheck, "tempskemaunchecked");
                                setTempSkema(dataarr);
                              }
                            }
                          }
                        }}
                      />
                    }
                    label={el.nama_skema}
                  />

                  {dataApl01.map((skema) => (
                    <>
                      {tempSkema.map((tem) =>
                        skema.asesi_skema.skema.id === tem &&
                        el.id === skema.asesi_skema.skema.id ? (
                          <div style={{ marginLeft: "20px" }}>
                            <FormGroup>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    value={tempAsesi}
                                    // checked={checked}
                                    onChange={(e) => {
                                      let dataarr = [...tempAsesi];
                                      let tmpasesi = [...penampungAsesi];
                                      if (e.target.checked) {
                                        setTempAsesi([
                                          ...tempAsesi,
                                          skema.asesi_skema.asesi.id,
                                        ]);
                                        setPenampungAsesi([
                                          ...penampungAsesi,
                                          {
                                            idSkema: el.id,
                                            asesi: skema.asesi_skema.asesi.id,
                                            nama_asesi:
                                              skema.asesi_skema.asesi
                                                .nama_lengkap,
                                          },
                                        ]);
                                        console.log(
                                          skema.asesi_skema.asesi.id,
                                          "tempAsesi"
                                        );
                                      } else {
                                        for (
                                          let i = 0;
                                          i < tempAsesi.length;
                                          i++
                                        ) {
                                          if (
                                            tempAsesi[i] ===
                                            skema.asesi_skema.asesi.id
                                          ) {
                                            // delete tempAsesi[i];
                                            // tempAsesi.remove(i);
                                            dataarr.splice(i, 1);
                                            tmpasesi.splice(i, 1);
                                            // let datauncheck = tempAsesi;

                                            // console.log(datauncheck, "tempAsesiunchecked");
                                            setTempAsesi(dataarr);
                                            setPenampungAsesi(tmpasesi);
                                          }
                                        }
                                      }
                                    }}
                                  />
                                }
                                label={skema.asesi_skema.asesi.nama_lengkap}
                              />{" "}
                            </FormGroup>
                          </div>
                        ) : null
                      )}
                    </>
                  ))}
                </FormGroup>

                {/* {tempSkema.length > 0
            ? dataApl01.map((dt) =>
                el.nama_skema === dt.asesi_skema.skema.nama_skema ? (
                  <div style={{ marginLeft: "20px" }}>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            value={dt.asesi_skema.asesi.nama_lengkap}
                            onChange={(e) => {
                              console.log(e.target, "etarget");
                              // setTempSkema(el.nama_skema);
                            }}
                          />
                        }
                        label={dt.asesi_skema.asesi.nama_lengkap}
                      />{" "}
                    </FormGroup>
                  </div>
                ) : null
              )
            : null} */}
                {/* {dataApl01
            .filter((dta) =>
              tempSkema.map((h) => dta.asesi_skema.skema.nama_skema === h)
            )
            .map((dt) => (
              <div style={{ marginLeft: "20px" }}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={dt.asesi_skema.asesi.nama_lengkap}
                        onChange={(e) => {
                          console.log(e.target, "etarget");
                          // setTempSkema(el.nama_skema);
                        }}
                      />
                    }
                    label={dt.asesi_skema.asesi.nama_lengkap}
                  />{" "}
                </FormGroup>
              </div>
            ))} */}
              </>
            ))}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "10px",
              }}
            >
              <Button
                variant="contained"
                sx={{ textTransform: "none" }}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
