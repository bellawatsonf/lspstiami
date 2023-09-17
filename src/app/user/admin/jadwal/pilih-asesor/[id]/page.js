"use client";

import LoadingComponent from "@/app/(public)/component/loading";
import { fetchSkema } from "@/app/services/skema";
import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { fetchApl01, fetchApl01ByAllUser } from "@/app/services/apl01";
import { Formik } from "formik";
import { fetchJadwalById } from "@/app/services/jadwal";
import { useParams } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
import { fetchAsesorServicesWithoutPaging } from "@/app/services/asesor";

export default function detailJadwal() {
  let param = useParams();
  let idJadwal = param.id;
  let [jadwal_asesiskema, setJadwal] = useState();
  let jadwalById = useSelector((state) => state.jadwal.jadwalById);
  let asesor = useSelector((state) => state.asesor.allAsesor);
  let [selectedAsesor, setSelectedAsesor] = useState([]);
  let [value, setValue] = useState("");
  let [idJadwalAsesiSkema, setIdJadwalAsesiSkema] = useState("");
  let dispatch = useDispatch();
  let dataasesor = [];

  useEffect(() => {
    getJadwalAsesiSkema();
    dispatch(fetchJadwalById(idJadwal));
    dispatch(fetchAsesorServicesWithoutPaging());
  }, []);

  console.log(asesor, "gets");
  // useEffect(() => {
  //   if (jadwal_asesiskema) {
  //     jadwal_asesiskema.map((el) => {
  //       el.id_asesis.map((dt) => {
  //         console.log(dt, "dst");
  //         dispatch(fetchApl01ByAllUser(dt));
  //       });
  //     });
  //   }
  // }, [jadwal_asesiskema]);
  // console.log(getarrayAsesi, "getaray");

  function getJadwalAsesiSkema() {
    axios({
      method: "get",
      url: `/api/getById-jadwalasesiskema/${idJadwal}`,
    })
      .then((data) => {
        console.log(data.data, "kek");
        setJadwal(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log(selectedAsesor, "sel");

  function handleSubmitAdd() {
    console.log(dataasesor, "dataasesor");
    let inputarr = [];
    for (let i = 0; i < selectedAsesor?.length; i++) {
      let input = {
        id_asesor: selectedAsesor[i].idAsesor,
        id_jadwal_asesiskema: "",
      };
      jadwal_asesiskema.map((dt) => {
        if (dt.id_skema === selectedAsesor[i].idSkema) {
          input.id_jadwal_asesiskema = dt.id;
        }
      });
      console.log(input, "inputdt");
      inputarr.push(input);
    }
    let datainput = {
      data: inputarr,
    };
    axios({
      method: "POST",
      url: `/api/add-jadwal-asesiskema-asesor/${param.id}`,
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
  // console.log(jadwal_asesiskema, "jadwal_asesi");
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
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmitAdd();
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
            {jadwal_asesiskema?.map((el) => (
              <>
                <div>
                  <Typography>{el?.dataskema?.nama_skema}</Typography>
                  <Typography sx={{ marginLeft: "10px" }}>
                    Data Asesi :
                  </Typography>

                  {el.nama_asesis.map((dt) => (
                    <ul>
                      <li>{dt}</li>
                    </ul>
                  ))}
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                      Pilih Asesor
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      {/* <div className="row"> */}
                      {asesor
                        ?.filter((x) => x.Skema.id === el.id_skema)
                        .map((ele) => (
                          // <div className="col-12">
                          <FormControlLabel
                            value={ele.id}
                            control={<Radio />}
                            label={ele.nama}
                            onChange={(e) => {
                              setValue("");
                              // let dtarr = [...selectedAsesor];
                              // console.log(dtarr, "sel3");
                              setSelectedAsesor([
                                ...selectedAsesor,
                                {
                                  idAsesor: e.target.value,
                                  idSkema: ele.Skema.id,
                                },
                              ]);
                              // setSelectedAsesor((prevState) => {
                              //   return {
                              //     ...selectedAsesor,

                              //     idAsesor: e.target.value,
                              //     idSkema: ele.Skema.id,
                              //   };
                              // });
                              console.log(selectedAsesor, "sel2");
                              setIdJadwalAsesiSkema(el.id);
                            }}
                          />
                          // {/* </div> */}
                        ))}
                      {/* </div> */}
                    </RadioGroup>
                  </FormControl>
                </div>
              </>
            ))}
            <button type="submit">Submit</button>
            {/* <button
              type="button"
              onClick={() => {
                setSelectedAsesor([]);
                console.log(selectedAsesor, "sel4");
                setValue(null);
              }}
            >
              Reset
            </button> */}
          </form>
        )}
      </Formik>
    </>
  );
}
