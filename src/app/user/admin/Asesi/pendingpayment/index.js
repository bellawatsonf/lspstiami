"use client";

import React from "react";
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
import { useSelector } from "react-redux";
import LoadingComponent from "@/app/(public)/component/loading";

const key = "Composed Table";

export default function PendingPayment(props) {
  console.log(props.dataAsesiSkema, "props");
  let loading = useSelector((state) => state.skema.loading);
  const [dataSkema, setSkema] = useState({ nodes: [] });

  // useEffect(() => {
  //   if (props.dataAsesiSkema.length > 0) {
  //     setSkema({ nodes: props.dataAsesiSkema });
  //   }
  // });
  // console.log(dataSkema, "dtskema");
  let data = [
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "pending",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "pending",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "pending",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "pending",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "pending",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "pending",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "pending",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "pending",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "pending",
    },
  ];
  const router = useRouter();

  const theme = useTheme(getTheme());
  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <Table data={{ nodes: props.dataAsesiSkema }} theme={theme}>
      {(tableList) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCell>Nama Asesi</HeaderCell>
              <HeaderCell>Jenis Skema Sertifikasi</HeaderCell>
              <HeaderCell>KTP</HeaderCell>
              <HeaderCell>Ijazah</HeaderCell>
              <HeaderCell>Pas Foto</HeaderCell>
              <HeaderCell>Bukti Bayar</HeaderCell>
              <HeaderCell>Status Pembayaran</HeaderCell>
            </HeaderRow>
          </Header>

          <Body>
            {tableList?.map(
              (item, i) => (
                // item.asesi.status_pembayaran === "pending" ? (
                <Row
                  key={i}
                  onClick={(e) => {
                    router.push(`/user/admin/Asesi/detail/${item.id}`);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <Cell>{item.asesi.nama_lengkap}</Cell>
                  <Cell>{item.skema.nama_skema}</Cell>
                  <Cell>{item.asesi.img_ktp}</Cell>
                  <Cell>{item.asesi.ijazah}</Cell>
                  <Cell>{item.asesi.pas_foto}</Cell>
                  <Cell>{item.asesi.bukti_bayar}</Cell>
                  <Cell>{item.asesi.status_pembayaran}</Cell>
                </Row>
              )
              // ) : null
            )}
          </Body>
        </>
      )}
    </Table>
  );
}
