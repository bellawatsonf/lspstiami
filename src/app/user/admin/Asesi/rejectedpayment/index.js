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

const key = "Composed Table";

export default function RejectedPayment() {
  const [dataSkema, setData] = useState({ nodes: [] });
  let data = [
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "rejected",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "rejected",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "rejected",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "rejected",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "rejected",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "rejected",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "rejected",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "rejected",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "rejected",
    },
  ];
  useEffect(() => {
    setData(() => {
      return {
        nodes: data,
      };
    });
  }, []);
  const theme = useTheme(getTheme());
  console.log(dataSkema, "dataskema");
  return (
    <Table data={dataSkema} theme={theme}>
      {(tableList) => (
        <Fragment>
          <Header>
            <HeaderRow>
              <HeaderCell>Nama Asesi</HeaderCell>
              <HeaderCell>KTP</HeaderCell>
              <HeaderCell>Ijazah</HeaderCell>
              <HeaderCell>Pas Foto</HeaderCell>
              <HeaderCell>Bukti Bayar</HeaderCell>
              <HeaderCell>Status Pembayaran</HeaderCell>
            </HeaderRow>
          </Header>

          <Body>
            {tableList.map((item, i) => (
              <Row key={i}>
                <Cell>{item.nama_asesi}</Cell>
                <Cell>{item.ktp}</Cell>
                <Cell>{item.ijazah}</Cell>
                <Cell>{item.pasfoto}</Cell>
                <Cell>{item.buktibayar}</Cell>
                <Cell>{item.status_pembayaran}</Cell>
              </Row>
            ))}
          </Body>
        </Fragment>
      )}
    </Table>
  );
}
