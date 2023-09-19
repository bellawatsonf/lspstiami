"use client";

import * as React from "react";

import { Button, Pagination, Typography } from "@mui/material";
import { CompactTable } from "@table-library/react-table-library/compact";
import {
  DEFAULT_OPTIONS,
  getTheme,
} from "@table-library/react-table-library/material-ui";
import { useTheme } from "@table-library/react-table-library/theme";
import { useDispatch, useSelector } from "react-redux";
// import ModalAdmin from "./modalAsesor";
import { fetchApl01 } from "@/app/services/apl01";
import { useRouter } from "next/navigation";
import ModalJadwal from "./modalJadwal";
import axios from "axios";
import { useState } from "react";
import { RemoveCircleOutline } from "@mui/icons-material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import {
  deleteJadwal,
  fetchJadwal,
  fetchJadwalById,
} from "@/app/services/jadwal";
import LoadingComponent from "@/app/(public)/component/loading";
import { Loading } from "@/app/services/skema";
import { usePagination } from "@table-library/react-table-library/pagination";

import { makeStyles } from "@material-ui/core/styles";

// var bcrypt = require("bcryptjs");
// const key = "Base";

const useStyles = makeStyles({
  paginationStyle: {
    "& .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected ": {
      background: "rgb(45, 195, 208)",
      color: "white",
    },
  },
});

export default function Report() {
  //   const data = { nodes: [] };
  const classes = useStyles();
  let router = useRouter();
  let datajadwal = useSelector((state) => state.jadwal.jadwal);
  let loading = useSelector((state) => state.skema.loading);
  const materialTheme = getTheme(DEFAULT_OPTIONS);
  const theme = useTheme(materialTheme);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [statusForm, setStatusForm] = React.useState("");
  let dtById = useSelector((state) => state.jadwal.jadwalById);

  console.log(datajadwal, "dtjdwl");
  let [id, setId] = React.useState(0);

  let initialState = {
    page: 1,
    size: 10,
    // nodes: [],
  };

  const [stateField, setStateField] = React.useState(initialState);
  React.useEffect(() => {
    // dispatch(fetchApl01());
    dispatch(fetchJadwal({ page: stateField.page, size: stateField.size }));

    // getJadwal();
  }, []);

  const pagination = usePagination(datajadwal, {
    state: {
      page: stateField.page,
      size: stateField.size,
    },
    onChange: onPaginationChange,
  });

  function onPaginationChange(action, state) {
    console.log(action, state, "paginationstate");
    dispatch(fetchJadwal({ page: stateField.page, size: stateField.size }));
  }
  const handleChange = (event, value) => {
    console.log(value, "value");
    setStateField((prevState) => {
      return {
        ...prevState,
        page: value,
      };
    });
  };

  const COLUMNS = [
    {
      label: "Judul Jadwal",
      renderCell: (item) => item.nama_jadwal,
    },
    {
      label: "Tanggal",
      renderCell: (item) => new Date(item.tgl).toLocaleDateString("en-GB"),
    },
    {
      label: "TUK",
      renderCell: (item) => item.tuk,
    },

    {
      label: "",
      renderCell: (item) => (
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              border: "1px solid #296db0",
              color: "#296db0",
              cursor: "pointer",
              marginRight: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              router.push(`/user/admin/jadwal/detail/${item.id}`);
            }}
          >
            Tentukan Asesi
          </Button>
          {item.tipe === "ujikom" ? (
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                border: "1px solid #296db0",
                color: "white",
                cursor: "pointer",
                marginRight: "10px",
                background: "#296db0",
                cursor: "pointer",
              }}
              onClick={() => {
                router.push(`/user/admin/jadwal/pilih-asesor/${item.id}`);
              }}
            >
              Tentukan Asesor
            </Button>
          ) : null}
          <span>
            <DriveFileRenameOutlineIcon
              sx={{ color: "black", cursor: "pointer", marginTop: "10px" }}
              onClick={() => {
                handleOpen();
                setStatusForm("edit");
                setId(item.id);
                dispatch(fetchJadwalById(item.id));
                // dispatch(fetchJadwal());
              }}
            />
            <RemoveCircleOutline
              sx={{
                color: "red",
                marginLeft: "10px",
                cursor: "pointer",

                marginTop: "10px",
              }}
              onClick={() => {
                dispatch(deleteJadwal(item.id));
                dispatch(Loading(true));
              }}
            />
          </span>
          {/* <Button
            variant="contained"
            color="success"
            sx={{ textTransform: "none" }}
            onClick={() => {
              router.push(`/user/admin/report/detail/${item.id}`);
            }}
          >
            Detail
          </Button> */}
        </div>
      ),
    },
  ];

  if (loading) {
    return <LoadingComponent />;
  }

  console.log(datajadwal, "dtjdwal");
  return (
    <React.Fragment>
      <ModalJadwal
        open={open}
        handleClose={handleClose}
        setOpen={setOpen}
        statusForm={statusForm}
        setStatusForm={setStatusForm}
        id={id}
        stateField={stateField}
      />

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="success"
          sx={{ textTransform: "none" }}
          onClick={() => {
            handleOpen();
            setStatusForm("add");
          }}
        >
          Tambah
        </Button>
      </div>
      {datajadwal?.listData?.length > 0 ? (
        <React.Fragment>
          <CompactTable
            columns={COLUMNS}
            data={{ nodes: datajadwal.listData }}
            theme={theme}
          />

          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "35px",
            }}
          >
            <Pagination
              count={datajadwal.totalPages}
              page={stateField.page}
              // color="primary"
              onChange={handleChange}
              className={classes.paginationStyle}
            />
          </div>
        </React.Fragment>
      ) : (
        <Typography sx={{ textAlign: "center" }}>
          Data Belum Tersedia
        </Typography>
      )}
    </React.Fragment>
  );
}
