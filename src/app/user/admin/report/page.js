"use client";

import * as React from "react";

import { Button, Pagination } from "@mui/material";
import { CompactTable } from "@table-library/react-table-library/compact";
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";
import {
  DEFAULT_OPTIONS,
  getTheme,
} from "@table-library/react-table-library/material-ui";
import { useTheme } from "@table-library/react-table-library/theme";
import { useDispatch, useSelector } from "react-redux";
// import ModalAdmin from "./modalAsesor";
import { fetchApl01, fetchApl01WithoutPage } from "@/app/services/apl01";
import { useRouter } from "next/navigation";
import { read, utils, writeFile } from "xlsx";
import { makeStyles } from "@material-ui/core";
import { usePagination } from "@table-library/react-table-library/pagination";
import LoadingComponent from "@/app/(public)/component/loading";
import { Fragment } from "react";
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
  let dataapl01 = useSelector((state) => state.apl01.apl01);
  let dataapl01withoutpage = useSelector(
    (state) => state.apl01.apl01withoutpage
  );
  let loading = useSelector((state) => state.skema.loading);
  console.log(dataapl01, "dataapl0");
  const materialTheme = getTheme(DEFAULT_OPTIONS);
  const theme = useTheme(materialTheme);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // const [statusForm, setStatusForm] = React.useState("");
  // let [id, setId] = React.useState(0);
  let initialState = {
    page: 1,
    size: 10,
    // nodes: [],
  };
  console.log(dataapl01, "datasesiskema");
  const [stateField, setStateField] = React.useState(initialState);
  React.useEffect(() => {
    dispatch(fetchApl01({ page: stateField.page, size: stateField.size }));
    dispatch(fetchApl01WithoutPage());
  }, []);

  const pagination = usePagination(dataapl01, {
    state: {
      page: stateField.page,
      size: stateField.size,
    },
    onChange: onPaginationChange,
  });
  console.log(dataapl01withoutpage, "wh");
  const handleExport = () => {
    let dataapl01excel = [];
    // dispatch(fetchApl01({ size: 100000000000000000000000, page: 1 }));

    for (let i = 0; i < dataapl01withoutpage.length; i++) {
      let no = 1;
      dataapl01excel.push({
        No: no++,
        "Nama Asesi": dataapl01withoutpage[i].asesi_skema.asesi.nama_lengkap,
        NIK: dataapl01withoutpage[i].asesi_skema.asesi.nik,
        "Tempat Lahir": dataapl01withoutpage[i].asesi_skema.asesi.tempat_lahir,
        "Tanggal Lahir": dataapl01withoutpage[i].asesi_skema.asesi.tgl_lahir,
        "Jenis Kelamin":
          dataapl01withoutpage[i].asesi_skema.asesi.jenis_kelamin,
        "Tempat Tinggal":
          dataapl01withoutpage[i].asesi_skema.asesi.alamat_rumah,
        Pekerjaan: dataapl01withoutpage[i].asesi_skema.asesi.jabatan,
        Pendidikan:
          dataapl01withoutpage[i].asesi_skema.asesi.kualifikasi_pendidikan,
        "Kode Kota": dataapl01withoutpage[i].asesi_skema.asesi.kota,
        "Kode Provinsi": dataapl01withoutpage[i].asesi_skema.asesi.provinsi,
        "Nama Skema Sertifikasi":
          dataapl01withoutpage[i].asesi_skema.skema.nama_skema,
        "Bukti Pembayaran":
          dataapl01withoutpage[i].asesi_skema.asesi.bukti_bayar,
        // "Kode Jadwal": dataapl01withoutpage?
        // "Tanggal Uji": dataapl01withoutpage
        // "Nomor Registrasi Asesi": dataapl01withoutpage
        // "Kode Sumber Anggaran": dataapl01withoutpage
        // "Kode Kemetrian": dataapl01withoutpage
        // "K/BK"
      });
    }

    const headings = [
      [
        "No",
        "Nama Asesi",
        "NIK",
        "Tempat Lahir",
        "Tanggal Lahir",
        "Jenis Kelamin",
        "Tempat Tinggal",
        "Pekerjaan",
        "Pendidikan",
        "Kode Kota",
        "Kode Provinsi",
        "Nama Skema Sertifikasi",
        "Bukti Pembayaran",
        "Kode Jadwal",
        "Tanggal Uji",
        "Nomor Registrasi Asesi",
        "Kode Sumber Anggaran",
        "Kode Kementrian",
        "K/BK",
      ],
    ];
    const wb = utils.book_new();
    const ws = utils.json_to_sheet([]);
    utils.sheet_add_aoa(ws, headings);
    utils.sheet_add_json(ws, dataapl01excel, {
      origin: "A2",
      skipHeader: true,
    });
    utils.book_append_sheet(wb, ws, "Report");
    writeFile(wb, "APL01.xlsx");
  };

  function onPaginationChange(action, state) {
    console.log(action, state, "paginationstate");
    dispatch(fetchApl01({ page: stateField.page, size: stateField.size }));
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
  // const COLUMNS = [
  //   {
  //     label: "Nama Asesi",
  //     renderCell: (item) => item.asesi_skema.asesi.nama_lengkap,
  //   },
  //   {
  //     label: "Jenis Skema",
  //     renderCell: (item) => item.asesi_skema.skema.nama_skema,
  //   },
  //   {
  //     label: "Status Rekomendasi",
  //     renderCell: (item) => {
  //       if (item.rekomendasi_sebagai_asesi) {
  //         return "Rekomendasi";
  //       }
  //     },
  //   },

  //   {
  //     label: "",
  //     renderCell: (item) => (
  //       <div style={{ display: "flex", justifyContent: "flex-start" }}>
  //         {/* <span>
  //           <DriveFileRenameOutlineIcon
  //             sx={{ color: "black", cursor: "pointer" }}
  //             onClick={() => {
  //               handleOpen();
  //               setStatusForm("edit");
  //               setId(item.id);
  //               dispatch(fetchAsesorById(item.id));
  //               dispatch(fetchSkema());
  //             }}
  //           />
  //           <RemoveCircleOutline
  //             sx={{ color: "red", marginLeft: "10px", cursor: "pointer" }}
  //             onClick={() => {
  //               dispatch(deleteAsesor(item.id));
  //             }}
  //           />
  //         </span> */}
  //         <Button
  //           variant="contained"
  //           color="success"
  //           sx={{ textTransform: "none" }}
  //           onClick={() => {
  //             router.push(`/user/admin/report/detail/${item.id}`);
  //           }}
  //         >
  //           Detail
  //         </Button>
  //       </div>
  //     ),
  //   },
  // ];
  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <React.Fragment>
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <Button
          variant="contained"
          color="success"
          sx={{ textTransform: "none" }}
          onClick={() => {
            handleExport();
          }}
        >
          Unduh Data Apl01
        </Button>
      </div>
      {/* {dataapl01 ? (
        <React.Fragment>
          <CompactTable
            columns={COLUMNS}
            data={{ nodes: dataapl01.dataapl01 }}
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
              count={dataapl01.totalPage}
              page={stateField.page}
              // color="primary"
              onChange={handleChange}
              className={classes.paginationStyle}
            />
          </div>
        </React.Fragment>
      ) : null} */}
      <Table data={{ nodes: dataapl01.dataapl01 }} theme={theme}>
        {(tableList) => (
          <Fragment>
            <Header>
              <HeaderRow>
                <HeaderCell>Nama Asesi</HeaderCell>
                <HeaderCell>Jenis Skema Sertifikasi</HeaderCell>
                <HeaderCell>Status Rekomendasi</HeaderCell>

                <HeaderCell></HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList?.map(
                (item, i) => (
                  <Fragment>
                    <Row key={i}>
                      <Cell>{item.asesi_skema.asesi.nama_lengkap}</Cell>
                      <Cell>{item.asesi_skema.skema.nama_skema}</Cell>

                      <Cell>
                        {item.rekomendasi_sebagai_asesi ? "Rekomendasi" : null}
                      </Cell>
                      <Cell>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                          }}
                        >
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
                              router.push(
                                `/user/admin/report/detail/${item.id}`
                              );
                            }}
                          >
                            Detail
                          </Button>
                        </div>
                      </Cell>
                    </Row>
                  </Fragment>
                  // item.asesi.status_pembayaran === "pending" ? (
                )
                // ) : null
              )}
            </Body>
          </Fragment>
        )}
      </Table>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "35px",
        }}
      >
        <Pagination
          count={dataapl01.totalPage}
          page={stateField.page}
          // color="primary"
          onChange={handleChange}
          className={classes.paginationStyle}
        />
      </div>
    </React.Fragment>
  );
}
