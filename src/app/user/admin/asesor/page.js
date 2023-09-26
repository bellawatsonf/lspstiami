"use client";

import * as React from "react";

import {
  deleteAsesor,
  fetchAsesorById,
  fetchAsesorServices,
} from "@/app/services/asesor";
import { fetchSkema } from "@/app/services/skema";
import { makeStyles } from "@material-ui/core/styles";
import { RemoveCircleOutline } from "@mui/icons-material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { Button, Pagination } from "@mui/material";
import { CompactTable } from "@table-library/react-table-library/compact";
import {
  DEFAULT_OPTIONS,
  getTheme,
} from "@table-library/react-table-library/material-ui";
import { useTheme } from "@table-library/react-table-library/theme";
import { useDispatch, useSelector } from "react-redux";
import ModalAdmin from "./modalAsesor";
import { usePagination } from "@table-library/react-table-library/pagination";

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

export default function Admin() {
  //   const data = { nodes: [] };
  const classes = useStyles();

  let dataAsesor = useSelector((state) => state.asesor.asesor);
  const materialTheme = getTheme(DEFAULT_OPTIONS);
  const theme = useTheme(materialTheme);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [statusForm, setStatusForm] = React.useState("");
  let [id, setId] = React.useState(0);
  let initialState = {
    page: 1,
    size: 10,
    // nodes: [],
  };

  const [stateField, setStateField] = React.useState(initialState);
  React.useEffect(() => {
    dispatch(
      fetchAsesorServices({ page: stateField.page, size: stateField.size })
    );
  }, []);

  const pagination = usePagination(dataAsesor, {
    state: {
      page: stateField.page,
      size: stateField.size,
    },
    onChange: onPaginationChange,
  });

  function onPaginationChange(action, state) {
    console.log(action, state, "paginationstate");
    dispatch(
      fetchAsesorServices({ page: stateField.page, size: stateField.size })
    );
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
    { label: "Nama Asesor", renderCell: (item) => item.nama },
    {
      label: "No Reg / No MET",
      renderCell: (item) => item.no_reg,
    },
    {
      label: "Email Asesor",
      renderCell: (item) => item.email,
    },
    {
      label: "Password",
      renderCell: (item) => item.password,
    },
    {
      label: "Bidang Skema",
      renderCell: (item) => {
        return item.Skema.nama_skema;
        // bcrypt.hash(item.password, 10, function (error, response) {
        //   return response;
        // });
      },
    },

    {
      label: "",
      renderCell: (item) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span>
            <DriveFileRenameOutlineIcon
              sx={{ color: "black", cursor: "pointer" }}
              onClick={() => {
                handleOpen();
                setStatusForm("edit");
                setId(item.id);
                dispatch(fetchAsesorById(item.id));
                dispatch(fetchSkema());
              }}
            />
            <RemoveCircleOutline
              sx={{ color: "red", marginLeft: "10px", cursor: "pointer" }}
              onClick={() => {
                dispatch(deleteAsesor(item.id));
              }}
            />
          </span>
        </div>
      ),
    },
  ];

  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="success"
          sx={{ textTransform: "none" }}
          onClick={() => {
            handleOpen();
            setStatusForm("add");
            dispatch(fetchSkema());
          }}
        >
          Tambah
        </Button>
      </div>
      <CompactTable
        columns={COLUMNS}
        data={{ nodes: dataAsesor?.dataAsesor }}
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
          count={dataAsesor?.totalPage}
          page={stateField.page}
          // color="primary"
          onChange={handleChange}
          className={classes.paginationStyle}
        />
      </div>
      <ModalAdmin
        open={open}
        handleClose={handleClose}
        setOpen={setOpen}
        statusForm={statusForm}
        setStatusForm={setStatusForm}
        id={id}
      />
    </React.Fragment>
  );
}
