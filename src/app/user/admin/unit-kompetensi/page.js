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
import { Button } from "@mui/material";
import styleSkema from "./skema.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkema } from "@/app/services/skema";
import ModalForm from "./modalForm";
const key = "Composed Table";

export default function UnitKompetensi() {
  // const [dataSkema, setData] = useState({ nodes: [] });
  const dispatch = useDispatch();
  let dataSkema = useSelector((state) => state.skema.skema);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // let data = [
  //   {
  //     nama_skema:
  //       "Teknisi Perpajakan PPh Badan Sektor Usaha Jasa dan Perdagangan",
  //     no_skema: "SKM 01/2018",
  //   },
  //   {
  //     nama_skema:
  //       "Teknisi Perpajakan PPh Badan Sektor Usaha Jasa dan Perdagangan",
  //     no_skema: "SKM 01/2018",
  //   },
  //   {
  //     nama_skema:
  //       "Teknisi Perpajakan PPh Badan Sektor Usaha Jasa dan Perdagangan",
  //     no_skema: "SKM 01/2018",
  //   },
  // ];

  useEffect(() => {
    dispatch(fetchSkema());
  }, []);
  const theme = useTheme(getTheme());
  console.log(dataSkema, "dataskema");
  return (
    <Fragment>
      <ModalForm
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        setOpen={setOpen}
      />
      <div className={`${styleSkema.buttonadd}`}>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            setOpen(true);
          }}
        >
          Tambah
        </Button>
      </div>
      <Table data={{ nodes: dataSkema }} theme={theme}>
        {(tableList) => (
          <Fragment>
            <Header>
              <HeaderRow>
                <HeaderCell>Nomor Skema Sertifikasi</HeaderCell>
                <HeaderCell>Judul Skema Sertifikasi</HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map((item, i) => (
                <Row key={i}>
                  <Cell>NO SKEMA BELUM ADA</Cell>
                  <Cell>{item.nama_skema}</Cell>
                </Row>
              ))}
            </Body>
          </Fragment>
        )}
      </Table>
    </Fragment>
  );
}
