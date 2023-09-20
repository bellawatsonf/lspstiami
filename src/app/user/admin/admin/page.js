"use client";

import * as React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import {
  DEFAULT_OPTIONS,
  getTheme,
} from "@table-library/react-table-library/material-ui";
import { useDispatch, useSelector } from "react-redux";
import { deleteAdmin, fetchAdmin, fetchAdminById } from "@/app/services/admin";
import { RemoveCircleOutline } from "@mui/icons-material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { Button, Pagination } from "@mui/material";
import ModalAdmin from "./modalAdmin";
import { usePagination } from "@table-library/react-table-library/pagination";
import { makeStyles } from "@material-ui/core/styles";
const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotallySecretKey");
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

  let dataAdmin = useSelector((state) => state.admin.admin);
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
    dispatch(fetchAdmin({ page: stateField.page, size: stateField.size }));
  }, []);

  const pagination = usePagination(dataAdmin, {
    state: {
      page: stateField.page,
      size: stateField.size,
    },
    onChange: onPaginationChange,
  });

  function onPaginationChange(action, state) {
    console.log(action, state, "paginationstate");
    dispatch(fetchAdmin({ page: stateField.page, size: stateField.size }));
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
    { label: "Nama Admin", renderCell: (item) => item.nama },
    {
      label: "Email Admin",
      renderCell: (item) => item.email,
    },
    {
      label: "Password Admin",
      renderCell: (item) => {
        // const decryptedString = cryptr.decrypt(item.password);
        item.password;
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
                dispatch(fetchAdminById(item.id));
              }}
            />
            <RemoveCircleOutline
              sx={{ color: "red", marginLeft: "10px", cursor: "pointer" }}
              onClick={() => {
                dispatch(deleteAdmin(item.id));
              }}
            />
          </span>
        </div>
      ),
    },
  ];

  console.log(dataAdmin, "dataadmin");
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
          }}
        >
          Tambah
        </Button>
      </div>
      <CompactTable
        columns={COLUMNS}
        data={{ nodes: dataAdmin?.dataAdmin }}
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
          count={dataAdmin.totalPage}
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
