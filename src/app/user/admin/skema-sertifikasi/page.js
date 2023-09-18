"use client";

import React, { Fragment, useEffect, useState } from "react";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import {
  Table,
  Header,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell,
  useCustom,
} from "@table-library/react-table-library/table";

// import Dashboard from "../../component/dashboardContainer";
import { Button, Pagination } from "@mui/material";
import styleSkema from "./skema.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSkema,
  fetchSkema,
  fetchSkemaById,
  fetchSkemaPage,
} from "@/app/services/skema";
import ModalForm from "./modalForm";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useRouter } from "next/navigation";
import LoadingComponent from "@/app/(public)/component/loading";
import { usePagination } from "@table-library/react-table-library/pagination";
import { makeStyles } from "@material-ui/core/styles";

// const key = "Composed Table";

const useStyles = makeStyles({
  paginationStyle: {
    "& .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected ": {
      background: "rgb(45, 195, 208) !important",
      color: "white",
    },
  },
});
export default function SkemaSertifikasi() {
  const theme = useTheme(getTheme());
  const classes = useStyles();

  // const theme = useTheme({
  //   Table: `width:100%;`,
  //   HeaderRow: `
  //       .th {
  //         background:#47494a;
  //         color:white;
  //         text-align:center
  //       }
  //     `,
  //   Row: `
  //       & .td {
  //         border-bottom: 1px solid #a0a8ae;

  //       }
  //     `,
  //   BaseCell: `
  //   border-right: 1px solid #a0a8ae;
  //   border-left: 1px solid #a0a8ae;

  //         width:100%;
  //         white-space:unset;

  //     `,
  // });
  // const [dataSkema, setData] = useState({ nodes: [] });
  const dispatch = useDispatch();
  let dataSkema = useSelector((state) => state.skema.skemapage);
  let dtById = useSelector((state) => state.skema.skemaById);
  let router = useRouter();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [statusModal, setStatusModal] = React.useState("");
  const [id, setId] = React.useState("");
  let initialState = {
    no_skema: "",
    nama_skema: "",
    page: 1,
    size: 10,
  };
  const [stateField, setStateField] = React.useState(initialState);
  const loading = useSelector((state) => state.skema.loading);

  useEffect(() => {
    dispatch(fetchSkemaPage({ page: stateField.page, size: stateField.size }));
  }, []);

  const pagination = usePagination(dataSkema, {
    state: {
      page: stateField.page,
      size: stateField.size,
    },
    onChange: onPaginationChange,
  });

  function onPaginationChange(action, state) {
    console.log(action, state, "paginationstate");
    dispatch(fetchSkemaPage({ page: stateField.page, size: stateField.size }));
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
  if (loading) {
    return <LoadingComponent />;
  }

  console.log(dataSkema.dataSkema, "dtskemapge");
  return (
    <Fragment>
      <ModalForm
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        setOpen={setOpen}
        setStatusModal={setStatusModal}
        statusModal={statusModal}
        id={id}
        stateField={stateField}
      />
      <div className={`${styleSkema.buttonadd}`}>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            setOpen(true);
            setStatusModal("add");
            console.log(statusModal, "dataskema");
          }}
        >
          Tambah
        </Button>
      </div>
      <Table data={{ nodes: dataSkema?.dataSkema }} theme={theme}>
        {(tableList) => (
          <Fragment>
            <Header>
              <HeaderRow>
                <HeaderCell>Nomor Skema Sertifikasi</HeaderCell>
                <HeaderCell>Judul Skema Sertifikasi</HeaderCell>
                <HeaderCell style={{ textAlign: "center" }}>
                  Kuota Tersedia
                </HeaderCell>
                <HeaderCell></HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map((item, i) => (
                <Row key={i}>
                  <Cell>NO SKEMA BELUM ADA</Cell>
                  <Cell>
                    <div
                      className="text-wrap"
                      style={{ width: "100%", whiteSpace: "unset" }}
                    >
                      {item.nama_skema}
                    </div>
                  </Cell>
                  <Cell style={{ textAlign: "center" }}>
                    {item.kuota} kuota
                  </Cell>
                  <Cell>
                    <div
                      className="d-flex"
                      style={{ justifyContent: "flex-start" }}
                    >
                      <span>
                        <ModeEditIcon
                          sx={{
                            color: "#139eaa",
                            marginRight: "10px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setOpen(true);
                            setStatusModal("edit");
                            setId(item.id);
                            console.log(id, "id");
                            dispatch(fetchSkemaById(item.id));
                          }}
                        />
                        <RemoveCircleOutlineIcon
                          sx={{ cursor: "pointer" }}
                          onClick={() => dispatch(deleteSkema(item.id))}
                        />
                        <Button
                          variant="contained"
                          sx={{
                            marginLeft: "15px",
                            fontSize: "13px",
                            textTransform: "none",
                            background: "#040924",
                          }}
                          onClick={() => {
                            router.push(`skema-sertifikasi/detail/${item.id}`);
                          }}
                        >
                          Detail
                        </Button>
                      </span>
                    </div>
                  </Cell>
                </Row>
              ))}
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
          count={dataSkema?.totalPage}
          page={stateField.page}
          // color="primary"
          onChange={handleChange}
          className={classes.paginationStyle}
        />
      </div>
    </Fragment>
  );
}
