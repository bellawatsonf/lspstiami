"use client";

import { Pagination, Typography } from "@mui/material";
import * as React from "react";
import stylesTentang from "../tentang/tentang.module.css";
import styles from "./asesor.module.css";

import { fetchAsesorServices } from "@/app/services/asesor";
import { makeStyles } from "@material-ui/core/styles";
import { CompactTable } from "@table-library/react-table-library/compact";
import {
  DEFAULT_OPTIONS,
  getTheme,
} from "@table-library/react-table-library/material-ui";
import { usePagination } from "@table-library/react-table-library/pagination";
import { useTheme } from "@table-library/react-table-library/theme";
import { useDispatch, useSelector } from "react-redux";
// import dataAsesor from "./data.js";
import Navbar from "../component/Navbar";
import Footer from "../component/footer";
import LoadingComponent from "../component/loading";
import dataAsesor from "./data";
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";

const key = "Sort";
const useStyles = makeStyles({
  paginationStyle: {
    "& .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected ": {
      background: "rgb(45, 195, 208) !important",
      color: "white",
    },
  },
});

export default function AsesorTable() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const classes = useStyles();
  console.log(dataAsesor, "dtasesor");
  // let dataAsesor = [
  //   {
  //     name: "Euis Komalawati",
  //     bidang_skema: "Public Relation Coordinator",
  //     no_reg: "MET.000.001946 2019",
  //   },
  //   {
  //     name: "Euis Komalawati",
  //     bidang_skema: "Public Relation Coordinator",
  //     no_reg: "MET.000.001946 2019",
  //   },
  //   {
  //     name: "Euis Komalawati",
  //     bidang_skema: "Public Relation Coordinator",
  //     no_reg: "MET.000.001946 2019",
  //   },
  //   {
  //     name: "Euis Komalawati",
  //     bidang_skema: "Public Relation Coordinator",
  //     no_reg: "MET.000.001946 2019",
  //   },
  //   {
  //     name: "Euis Komalawati",
  //     bidang_skema: "Public Relation Coordinator",
  //     no_reg: "MET.000.001946 2019",
  //   },
  //   {
  //     name: "Euis Komalawati",
  //     bidang_skema: "Public Relation Coordinator",
  //     no_reg: "MET.000.001946 2019",
  //   },
  //   {
  //     name: "Euis Komalawati",
  //     bidang_skema: "Public Relation Coordinator",
  //     no_reg: "MET.000.001946 2019",
  //   },
  //   {
  //     name: "Euis Komalawati",
  //     bidang_skema: "Public Relation Coordinator",
  //     no_reg: "MET.000.001946 2019",
  //   },
  //   {
  //     name: "Euis Komalawati",
  //     bidang_skema: "Public Relation Coordinator",
  //     no_reg: "MET.000.001946 2019",
  //   },
  //   {
  //     name: "Euis Komalawati",
  //     bidang_skema: "Public Relation Coordinator",
  //     no_reg: "MET.000.001946 2019",
  //   },
  //   {
  //     name: "Euis Komalawati",
  //     bidang_skema: "Public Relation Coordinator",
  //     no_reg: "MET.000.001946 2019",
  //   },
  // ];

  // let [data, setData] = React.useState({ nodes: dataAsesor });
  let data = useSelector((state) => state.asesor.asesor);
  console.log(data.dataAsesor, data.totalPage, "dataasesor");
  let initialState = {
    page: 1,
    size: 10,
    // nodes: [],
  };

  const [stateField, setStateField] = React.useState(initialState);

  let dispatch = useDispatch();
  const materialTheme = getTheme(DEFAULT_OPTIONS);
  // const theme = useTheme(materialTheme);
  const theme = useTheme({
    Table: `width:100%;`,
    HeaderRow: `
        .th {
          background:#47494a;
          color:white;
        }
      `,
    Row: `
        & .td {
          border-bottom: 1px solid #a0a8ae;

        }
      `,
    BaseCell: `
    border-right: 1px solid #a0a8ae;
    border-left: 1px solid #a0a8ae;
       
          width:100%;
          white-space:unset;
       
      `,
  });

  React.useEffect(() => {
    dispatch(
      fetchAsesorServices({ page: stateField.page, size: stateField.size })
    );
  }, []);
  console.log(stateField.page, "phsize");

  const pagination = usePagination(data, {
    state: {
      page: stateField.page,
      size: stateField.size,
    },
    onChange: onPaginationChange,
  });

  function onPaginationChange(action, state) {
    console.log(action, state, "paginationstate");
    dispatch(
      fetchAsesorServices({ page: stateField.page, size: stateField.size })
    );
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
  // const sort = useSort(
  //   data,
  //   {
  //     onChange: onSortChange,
  //   },
  //   {
  //     sortIcon: {
  //       iconDefault: null,
  //       iconUp: <FaChevronUp />,
  //       iconDown: <FaChevronDown />,
  //     },
  //     sortFns: {
  //       name: (array) => array.sort((a, b) => a.name.localeCompare(b.name)),
  //       bidang_skema: (array) =>
  //         array.sort((a, b) => a.bidang_skema.localeCompare(b.bidang_skema)),
  //       no_reg: (array) =>
  //         array.sort((a, b) => a.no_reg.localeCompare(b.no_reg)),
  //     },
  //   }
  // );

  // function onSortChange(action, state) {
  //   console.log(action, state);
  // }

  // const COLUMNS = [
  //   {
  //     label: "Nama Asesor",
  //     renderCell: (item) => item.nama,
  //     sort: { sortKey: "nama" },
  //   },
  //   {
  //     label: "No Reg / No MET",
  //     renderCell: (item) => item.no_reg,
  //     sort: { sortKey: "no_reg" },
  //   },
  //   {
  //     label: "Bidang Skema",
  //     renderCell: (item) => item.Skema.nama_skema,
  //     sort: { sortKey: "bidang_skema" },
  //   },
  // ];

  // console.log(COLUMNS, "colum");
  // if (asesor.nodes.length === 0) {
  //   return <p>ddd</p>;
  // }

  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <React.Fragment>
      {data ? (
        <React.Fragment>
          <Navbar />
          <div className={`${stylesTentang.bannertentang}`}>
            <div className={`${styles.boxImg}`}>
              <img
                // className={`${stylesTentang.imgbannertentang}`}
                src="/aset3.png"
              />
            </div>
          </div>
          <div className={`${styles.boxTable}`}>
            <Typography
              sx={{
                fontSize: "64px",
                color: "#040924",
                fontWeight: 600,
                paddingBottom: "15px",
              }}
            >
              Asesor
            </Typography>

            <Typography
              sx={{
                color: "#6f7375",
                fontSize: "20px",
                paddingBottom: "60px",
              }}
            >
              {" "}
              Data Asesor
            </Typography>
            {/* <CompactTable
              columns={COLUMNS}
              data={{ nodes: data?.dataAsesor }}
              // data={{ nodes: dataAsesor }}
              // sort={sort}
              // pagination={pagination}
              theme={theme}
            /> */}
            <Table data={{ nodes: data?.dataAsesor }} theme={theme}>
              {(tableList) => (
                <>
                  <Header>
                    <HeaderRow>
                      <HeaderCell>Nama Asesor</HeaderCell>
                      <HeaderCell>
                        <div className="text-wrap" style={{ width: "100%" }}>
                          No Reg / No MET
                        </div>
                      </HeaderCell>
                      <HeaderCell>Bidang Skema</HeaderCell>
                    </HeaderRow>
                  </Header>

                  <Body>
                    {tableList.map((item) => (
                      <Row key={item.id} item={item}>
                        <Cell>{item.nama}</Cell>
                        <Cell>
                          <div
                            className="text-wrap"
                            style={{ width: "100%", whiteSpace: "unset" }}
                          >
                            {item.no_reg}
                          </div>
                        </Cell>
                        <Cell>
                          <div className="text-wrap" style={{ width: "100%" }}>
                            {item.Skema.nama_skema}
                          </div>
                        </Cell>
                      </Row>
                    ))}
                  </Body>
                </>
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
                count={data.totalPage}
                page={stateField.page}
                // color="primary"
                onChange={handleChange}
                className={classes.paginationStyle}
              />
            </div>
          </div>
          <Footer />
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}
