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
import { useDispatch, useSelector } from "react-redux";
import { deleteSkema, fetchSkema, fetchSkemaById } from "@/app/services/skema";
import ModalForm from "./modalForm";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useRouter } from "next/navigation";
import LoadingComponent from "@/app/(public)/component/loading";
const key = "Composed Table";

export default function SkemaSertifikasi() {
  // const [dataSkema, setData] = useState({ nodes: [] });
  const dispatch = useDispatch();
  let dataSkema = useSelector((state) => state.skema.skema);
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
  };
  const [stateField, setStateField] = React.useState(initialState);
  // const [loading, setLoading] = useState(true);
  const loading = useSelector((state) => state.skema.loading);

  // useEffect(() => {
  //   setTimeout(() => dispatch(loading(false)), 1000);
  // }, []);

  useEffect(() => {
    dispatch(fetchSkema());
  }, []);
  const theme = useTheme(getTheme());
  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <>
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
      <Table data={{ nodes: dataSkema }} theme={theme}>
        {(tableList) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell>Nomor Skema Sertifikasi</HeaderCell>
                <HeaderCell>Judul Skema Sertifikasi</HeaderCell>
                <HeaderCell></HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map((item, i) => (
                <Row
                  key={i}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    router.push(`skema-sertifikasi/detail/${item.id}`);
                  }}
                >
                  <Cell>NO SKEMA BELUM ADA</Cell>
                  <Cell>{item.nama_skema}</Cell>
                  <Cell>
                    <div
                      className="d-flex"
                      style={{ justifyContent: "center" }}
                    >
                      <span>
                        <ModeEditIcon
                          sx={{
                            color: "blue",
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
                      </span>
                    </div>
                  </Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    </>
  );
}
