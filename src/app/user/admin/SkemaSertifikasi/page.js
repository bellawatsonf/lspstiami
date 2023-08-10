"use client";

import React, { useEffect, useState } from "react";
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
const key = "Composed Table";

export default function SkemaSertifikasi() {
  const [dataSkema, setData] = useState({ nodes: [] });
  let data = [
    {
      nama_skema:
        "Teknisi Perpajakan PPh Badan Sektor Usaha Jasa dan Perdagangan",
      no_skema: "SKM 01/2018",
    },
    {
      nama_skema:
        "Teknisi Perpajakan PPh Badan Sektor Usaha Jasa dan Perdagangan",
      no_skema: "SKM 01/2018",
    },
    {
      nama_skema:
        "Teknisi Perpajakan PPh Badan Sektor Usaha Jasa dan Perdagangan",
      no_skema: "SKM 01/2018",
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
    <>
      <div className={`${styleSkema.buttonadd}`}>
        <Button variant="contained" color="success">
          Tambah
        </Button>
      </div>
      <Table data={dataSkema} theme={theme}>
        {(tableList) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell>Nomor Skema Sertifikasi</HeaderCell>
                <HeaderCell>Judul Skema Sertifikasi</HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map((item, i) => (
                <Row key={i}>
                  <Cell>{item.no_skema}</Cell>
                  <Cell>{item.nama_skema}</Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    </>
  );
}
