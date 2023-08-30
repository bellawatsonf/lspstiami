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
import { deleteAsesiSkema } from "@/app/services/asesiskema";
import { Button } from "@mui/material";

const key = "Composed Table";

export default function PendingPayment(props) {
  console.log(props.dataAsesiSkema, "props");
  let loading = useSelector((state) => state.skema.loading);
  // const [dataSkema, setSkema] = useState({ nodes: [] });
  const router = useRouter();
  const theme = useTheme(getTheme());
  let dispatch = useDispatch();

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
  if (props.dataAsesiSkema) {
    return (
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
                      <Row key={i} style={{ cursor: "pointer" }}>
                        <Cell>{item.asesi.nama_lengkap}</Cell>
                        <Cell>{item.skema.nama_skema}</Cell>
                        <Cell>{item.asesi.img_ktp}</Cell>
                        <Cell>{item.asesi.ijazah}</Cell>
                        <Cell>{item.asesi.pas_foto}</Cell>
                        <Cell>{item.asesi.bukti_bayar}</Cell>
                        <Cell>{item.jenis_paket}</Cell>
                        <Cell>
                          {item.status_cek === "belum-dicek" ? "false" : "true"}
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
                              sx={{ marginTop: "8px", marginLeft: "10px" }}
                              onClick={() =>
                                dispatch(deleteAsesiSkema(item.id))
                              }
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
    );
  }
}
