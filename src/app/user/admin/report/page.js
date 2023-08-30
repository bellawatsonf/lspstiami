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
// import ModalAdmin from "./modalAsesor";
import { usePagination } from "@table-library/react-table-library/pagination";
import { makeStyles } from "@material-ui/core/styles";
import {
  deleteAsesor,
  fetchAsesorById,
  fetchAsesorServices,
} from "@/app/services/asesor";
import { fetchSkema } from "@/app/services/skema";
import { fetchAsesiSkemaServices } from "@/app/services/asesiskema";
import { fetchApl01 } from "@/app/services/apl01";
import { useRouter } from "next/navigation";

var bcrypt = require("bcryptjs");
const key = "Base";

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
  let dataapl01 = useSelector((state) => state.apl01.apl01);
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
  console.log(dataapl01, "datasesiskema");
  const [stateField, setStateField] = React.useState(initialState);
  React.useEffect(() => {
    dispatch(fetchApl01());
  }, []);

  const pagination = usePagination(dataapl01, {
    state: {
      page: stateField.page,
      size: stateField.size,
    },
    onChange: onPaginationChange,
  });

  function onPaginationChange(action, state) {
    console.log(action, state, "paginationstate");
    dispatch(fetchApl01());
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
      label: "Nama Asesi",
      renderCell: (item) => item.asesi_skema.asesi.nama_lengkap,
    },
    {
      label: "Jenis Skema",
      renderCell: (item) => item.asesi_skema.skema.nama_skema,
    },
    {
      label: "Status Rekomendasi",
      renderCell: (item) => {
        if (item.rekomendasi_sebagai_asesi) {
          return "Rekomendasi";
        }
      },
    },

    {
      label: "",
      renderCell: (item) => (
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          {/* <span>
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
          </span> */}
          <Button
            variant="contained"
            color="success"
            sx={{ textTransform: "none" }}
            onClick={() => {
              router.push(`/user/admin/report/detail/${item.id}`);
            }}
          >
            Detail
          </Button>
        </div>
      ),
    },
  ];

  return (
    <React.Fragment>
      {dataapl01 ? (
        <React.Fragment>
          <CompactTable
            columns={COLUMNS}
            data={{ nodes: dataapl01 }}
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
            {/* <Pagination
          count={dataapl01.totalPage}
          page={stateField.page}
          // color="primary"
          onChange={handleChange}
          className={classes.paginationStyle}
        /> */}
          </div>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}
