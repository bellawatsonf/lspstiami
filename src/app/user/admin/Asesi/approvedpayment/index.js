"use client";

import { RemoveCircleOutline } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { getTheme } from "@table-library/react-table-library/baseline";
import {
  Body,
  Cell,
  Header,
  HeaderCell,
  HeaderRow,
  Row,
  Table,
} from "@table-library/react-table-library/table";
import { useTheme } from "@table-library/react-table-library/theme";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

// const key = "Composed Table";

export default function ApprovedPayment(props) {
  console.log(props.dataAsesiSkema, "props");
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
  const router = useRouter();

  const theme = useTheme(getTheme());

  return (
    <Table data={{ nodes: props.dataAsesiSkema ?? [] }} theme={theme}>
      {(tableList) => (
        <Fragment>
          <Header>
            <HeaderRow>
              <HeaderCell>Nama Asesi</HeaderCell>
              <HeaderCell>Jenis Skema Sertifikasi</HeaderCell>
              <HeaderCell>KTP</HeaderCell>
              <HeaderCell>Ijazah</HeaderCell>
              <HeaderCell>Pas Foto</HeaderCell>
              <HeaderCell>Jenis Paket</HeaderCell>
              <HeaderCell>Status Pengecekan</HeaderCell>
              <HeaderCell></HeaderCell>
            </HeaderRow>
          </Header>

          <Body>
            {tableList?.map((item, i) =>
              item.jenis_paket === "ujikom" ? (
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
                          router.push(`/user/admin/Asesi/detail/${item.id}`);
                        }}
                      >
                        Detail
                      </Button>
                      <RemoveCircleOutline
                        sx={{ marginTop: "8px", marginLeft: "10px" }}
                        onClick={() => dispatch(deleteAsesiSkema(item.id))}
                      />
                    </div>
                  </Cell>
                </Row>
              ) : null
            )}
          </Body>
        </Fragment>
      )}
    </Table>
  );
}
