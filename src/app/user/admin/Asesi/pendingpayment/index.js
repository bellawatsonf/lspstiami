"use client";

import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "@/app/(public)/component/loading";
import { RemoveCircle, RemoveCircleOutline } from "@mui/icons-material";
import {
  deleteAsesiSkema,
  fetchAsesiSkemaServices,
} from "@/app/services/asesiskema";
import { Button, Pagination, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { usePagination } from "@table-library/react-table-library/pagination";

const key = "Composed Table";
const useStyles = makeStyles({
  paginationStyle: {
    "& .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected ": {
      background: "rgb(45, 195, 208) !important",
      color: "white",
    },
  },
});

export default function PendingPayment(props) {
  console.log(props.dataAsesiSkema, "propslo");
  const classes = useStyles();
  let loading = useSelector((state) => state.skema.loading);

  // const [dataSkema, setSkema] = useState({ nodes: [] });
  const router = useRouter();
  const theme = useTheme(getTheme());
  let dispatch = useDispatch();

  const pagination = usePagination(props.dataAsesiSkema, {
    state: {
      page: props.stateField.page,
      size: props.stateField.size,
    },
    onChange: onPaginationChange,
  });
  function onPaginationChange(action, state) {
    console.log(action, state, "paginationstate");
    dispatch(
      fetchAsesiSkemaServices({
        page: props.stateField.page,
        size: props.stateField.size,
      })
    );
  }
  const handleChange = (event, value) => {
    console.log(value, "value");
    props.setStateField((prevState) => {
      return {
        ...prevState,
        page: value,
      };
    });
  };
  // useEffect(() => {
  //   if (props.dataAsesiSkema.length > 0) {
  //     setSkema({ nodes: props.dataAsesiSkema });
  //   }
  // });
  // console.log(dataSkema, "dtskema");
  // let data = [
  //   {
  //     nama_asesi: "budianto",
  //     ktp: "ktp.jpg",
  //     ijazah: "ijazah.jpg",
  //     pasfoto: "pasfoto.jpg",
  //     buktibayar: "buktibayar.jpg",
  //     status_pembayaran: "pending",
  //   },
  //   {
  //     nama_asesi: "budianto",
  //     ktp: "ktp.jpg",
  //     ijazah: "ijazah.jpg",
  //     pasfoto: "pasfoto.jpg",
  //     buktibayar: "buktibayar.jpg",
  //     status_pembayaran: "pending",
  //   },
  //   {
  //     nama_asesi: "budianto",
  //     ktp: "ktp.jpg",
  //     ijazah: "ijazah.jpg",
  //     pasfoto: "pasfoto.jpg",
  //     buktibayar: "buktibayar.jpg",
  //     status_pembayaran: "pending",
  //   },
  //   {
  //     nama_asesi: "budianto",
  //     ktp: "ktp.jpg",
  //     ijazah: "ijazah.jpg",
  //     pasfoto: "pasfoto.jpg",
  //     buktibayar: "buktibayar.jpg",
  //     status_pembayaran: "pending",
  //   },
  //   {
  //     nama_asesi: "budianto",
  //     ktp: "ktp.jpg",
  //     ijazah: "ijazah.jpg",
  //     pasfoto: "pasfoto.jpg",
  //     buktibayar: "buktibayar.jpg",
  //     status_pembayaran: "pending",
  //   },
  //   {
  //     nama_asesi: "budianto",
  //     ktp: "ktp.jpg",
  //     ijazah: "ijazah.jpg",
  //     pasfoto: "pasfoto.jpg",
  //     buktibayar: "buktibayar.jpg",
  //     status_pembayaran: "pending",
  //   },
  //   {
  //     nama_asesi: "budianto",
  //     ktp: "ktp.jpg",
  //     ijazah: "ijazah.jpg",
  //     pasfoto: "pasfoto.jpg",
  //     buktibayar: "buktibayar.jpg",
  //     status_pembayaran: "pending",
  //   },
  //   {
  //     nama_asesi: "budianto",
  //     ktp: "ktp.jpg",
  //     ijazah: "ijazah.jpg",
  //     pasfoto: "pasfoto.jpg",
  //     buktibayar: "buktibayar.jpg",
  //     status_pembayaran: "pending",
  //   },
  //   {
  //     nama_asesi: "budianto",
  //     ktp: "ktp.jpg",
  //     ijazah: "ijazah.jpg",
  //     pasfoto: "pasfoto.jpg",
  //     buktibayar: "buktibayar.jpg",
  //     status_pembayaran: "pending",
  //   },
  // ];

  if (loading) {
    return <LoadingComponent />;
  }

  console.log(props.stateField.page, "page");

  return (
    <>
      <Table data={{ nodes: props.dataAsesiSkema }} theme={theme}>
        {(tableList) => (
          <Fragment>
            <Header>
              <HeaderRow>
                <HeaderCell>Nama Asesi</HeaderCell>
                <HeaderCell>Jenis Skema Sertifikasi</HeaderCell>
                <HeaderCell>KTP</HeaderCell>
                <HeaderCell>Ijazah</HeaderCell>
                <HeaderCell>Pas Foto</HeaderCell>
                <HeaderCell>Bukti Bayar</HeaderCell>
                <HeaderCell>Jenis Paket</HeaderCell>
                <HeaderCell>Status Pengecekan</HeaderCell>
                <HeaderCell></HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList?.map(
                (item, i) => (
                  <Fragment>
                    {item.jenis_paket === "pengayaan-ujikom" ? (
                      <Row key={i}>
                        <Cell>{item.asesi.nama_lengkap}</Cell>
                        <Cell>{item.skema.nama_skema}</Cell>
                        <Cell>{item.asesi.img_ktp}</Cell>
                        <Cell>{item.asesi.ijazah}</Cell>
                        <Cell>{item.asesi.pas_foto}</Cell>
                        <Cell>{item.asesi.bukti_bayar}</Cell>
                        <Cell>{item.jenis_paket}</Cell>
                        <Cell>
                          <Typography
                            sx={{
                              color:
                                item.status_cek === "belum-dicek"
                                  ? "grey"
                                  : item.status_cek === "revisi"
                                  ? "red"
                                  : "blue",
                            }}
                          >
                            {item.status_cek === "belum-dicek"
                              ? "false"
                              : item.status_cek}
                          </Typography>
                        </Cell>
                        <Cell>
                          <div className="d-flex">
                            <Button
                              variant="contained"
                              onClick={(e) => {
                                router.push(
                                  `/user/admin/Asesi/detail/${item.id}`
                                );
                              }}
                            >
                              Detail
                            </Button>
                            <RemoveCircleOutline
                              sx={{
                                marginTop: "8px",
                                marginLeft: "10px",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                console.log("delete");
                                dispatch(deleteAsesiSkema(item.id));
                              }}
                            />
                          </div>
                        </Cell>
                      </Row>
                    ) : null}
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
          count={props.totalPage}
          page={props.stateField.page}
          // color="primary"
          onChange={handleChange}
          className={classes.paginationStyle}
        />
      </div>
    </>
  );
}
