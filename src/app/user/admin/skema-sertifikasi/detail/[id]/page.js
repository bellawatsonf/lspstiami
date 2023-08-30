"use client";
import * as React from "react";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsesiById } from "@/app/services/asesi";
import { useParams } from "next/navigation";
import { fetchSkemaById } from "@/app/services/skema";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ModalUnitKompetensi from "./ModalUnitKompetensi";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { DeleteForeverOutlined } from "@mui/icons-material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { deleteUnitKompetensi } from "@/app/services/unitkompetensi";
import ModalKriteriaUnjukKerja from "./ModalKriteria";
import { deleteKriteriaKerja } from "@/app/services/kriteriakerja";
import LoadingComponent from "@/app/(public)/component/loading";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function detailSkema() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  //   const [open, setOpen] = React.useState("false");
  const [open, setOpen] = React.useState(false);
  const [openKriteria, setOpenKriteria] = React.useState(false);
  const [modalUnit, setModalUnit] = React.useState("");
  const [modalKriteria, setModalKriteria] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenKriteria = () => setOpenKriteria(true);
  const handleCloseKriteria = () => setOpenKriteria(false);
  const skemabyid = useSelector((state) => state.skema.skemaById);
  console.log(skemabyid, "skemabyid");
  const dispatch = useDispatch();
  let params = useParams();
  let id = params.id;
  let [idUnit, setIdUnit] = React.useState(0);
  let [kode_unit, setKodeUnit] = React.useState("");
  let [judul_unit, setJudulUnit] = React.useState("");

  let [idKriteria, setIdKriteria] = React.useState(0);
  let [elemen, setElemen] = React.useState("");
  let [kriteriakerja, setKriteriaKerja] = React.useState("");
  let loading = useSelector((state) => state.skema.loading);

  React.useEffect(() => {
    dispatch(fetchSkemaById(id));
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <React.Fragment>
      <ModalUnitKompetensi
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        handleOpen={handleOpen}
        dtskema={skemabyid}
        modalUnit={modalUnit}
        setModalUnit={setModalUnit}
        idUnit={idUnit}
        kode_unit={kode_unit}
        judul_unit={judul_unit}
      />
      <ModalKriteriaUnjukKerja
        openKriteria={openKriteria}
        setOpenKriteria={setOpenKriteria}
        handleCloseKriteria={handleCloseKriteria}
        handleOpenKriteria={handleOpenKriteria}
        dtskema={skemabyid}
        modalKriteria={modalKriteria}
        setModalKriteria={setModalKriteria}
        idKriteria={idKriteria}
        elemen={elemen}
        kriteriakerja={kriteriakerja}
        idUnit={idUnit}
      />
      <div className="d-flex mb-4">
        <div style={{ marginRight: "10px" }}>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#8f8a8a",
              fontWeight: 600,
            }}
          >
            No. Skema :
          </Typography>
        </div>
        <Typography
          sx={{ fontSize: "20px", color: "#8f8a8a", fontWeight: 600 }}
        >
          {skemabyid.no_skema}
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
            Nama Skema :
          </Typography>
        </div>
        <Typography
          sx={{
            fontSize: "20px",
            color: "#8f8a8a",
            fontWeight: 600,
          }}
        >
          {skemabyid.nama_skema}
        </Typography>
      </div>

      <div className="d-flex mb-4">
        <div style={{ marginRight: "10px", display: "flex" }}>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#8f8a8a",
              fontWeight: 600,
            }}
            onClick={() => {
              setOpen(true);
            }}
          >
            Unit Kompetensi :
          </Typography>
          <AddCircleOutlineIcon
            sx={{ color: "#64648f", margin: "5px", cursor: "pointer" }}
            onClick={() => {
              setOpen(true);
              setModalUnit("add");
            }}
          />
        </div>
      </div>
      <div>
        {skemabyid?.unitkompetensi?.map((el, i) => (
          <Accordion
            key={el.id}
            expanded={expanded === `panel${el.id}`}
            onChange={handleChange(`panel${el.id}`)}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>{el.judul_unit}</Typography>
            </AccordionSummary>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                padding: "0px 10px 10px 30px",
              }}
            >
              <BorderColorIcon
                sx={{
                  fontSize: "17px",
                  marginRight: "5px",
                  cursor: "pointer",
                  color: "#64648f",
                }}
                onClick={() => {
                  setOpen(true);
                  setModalUnit("edit");
                  setIdUnit(el.id);
                  setKodeUnit(el.kode_unit);
                  setJudulUnit(el.judul_unit);
                }}
              />
              <RemoveCircleIcon
                sx={{
                  fontSize: "17px",
                  marginRight: "5px",
                  cursor: "pointer",
                  color: "#64648f",
                }}
                onClick={() => {
                  //   setOpen(true);
                  dispatch(deleteUnitKompetensi(el.id, skemabyid.id));
                }}
              />
            </div>
            <AccordionDetails>
              <div className="d-flex">
                <Typography sx={{ fontWeight: 600 }}>Elemen : </Typography>
                <AddCircleOutlineIcon
                  sx={{
                    color: "#2626c5",
                    marginLeft: "5px",
                    // fontSize: "17px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setOpenKriteria(true);
                    setModalKriteria("add");
                    setIdUnit(el.id);
                  }}
                />
              </div>

              <ol>
                {el?.kriteria_unitkerja?.map((unitkerja) => (
                  <li>
                    <div className="d-flex">
                      {unitkerja.elemen}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          padding: "0px 10px 10px 10px",
                        }}
                      >
                        <BorderColorIcon
                          sx={{
                            fontSize: "17px",
                            marginRight: "5px",
                            cursor: "pointer",
                            color: "#2626c5",
                          }}
                          onClick={() => {
                            setOpenKriteria(true);
                            setModalKriteria("edit");
                            setIdKriteria(unitkerja.id);
                            setElemen(unitkerja.elemen);
                            setIdUnit(el.id);
                            setKriteriaKerja(unitkerja.kriteriakerja);
                          }}
                        />
                        <RemoveCircleIcon
                          sx={{
                            fontSize: "17px",
                            marginRight: "5px",
                            cursor: "pointer",
                            color: "#2626c5",
                          }}
                          onClick={() => {
                            //   setOpen(true);
                            dispatch(
                              deleteKriteriaKerja(unitkerja.id, skemabyid.id)
                            );
                          }}
                        />
                      </div>
                    </div>

                    <ul>
                      {" "}
                      <li>
                        {" "}
                        <Typography sx={{ fontWeight: 500 }}>
                          Kriteria Unjuk Kerja :{" "}
                        </Typography>
                      </li>
                      <ul>
                        {unitkerja.kriteriakerja.map((dt) => (
                          <React.Fragment>
                            <li>{dt}</li>
                          </React.Fragment>
                        ))}
                      </ul>
                    </ul>
                  </li>
                ))}
              </ol>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </React.Fragment>
  );
}
