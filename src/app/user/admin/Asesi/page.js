"use client";

import LoadingComponent from "@/app/(public)/component/loading";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsesiSkemaServices } from "../../../services/asesiskema";
import ApprovedPayment from "./approvedpayment";
import PendingPayment from "./pendingpayment";
import { usePagination } from "@table-library/react-table-library/pagination";
import RejectedPayment from "./rejectedpayment";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  console.log(children, "children");
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// export async function getServerSideProps(context) {
//   console.log(context.req, "contextreq");
//   return { props: { a: "a" } };
// }

export default function Asesi() {
  const [value, setValue] = React.useState(0);
  const dataAsesiSkema = useSelector((state) => state.asesiskema.asesiskema);
  // const [dataAsesi, setDataAsesi] = React.useState([]);
  // console.log(dataAsesiSkema, "dataasesipage");
  const dispatch = useDispatch();
  let loading = useSelector((state) => state.skema.loading);
  const handleChange = (event, newValue) => {
    console.log(newValue, "newvalue");
    setValue(newValue);
  };
  let initialState = {
    page: 1,
    size: 10,
    statusCek: "belum-dicek",
    // nodes: [],
  };

  const [stateField, setStateField] = React.useState(initialState);

  console.log(stateField.page, "paging");
  React.useEffect(() => {
    if (value === 0) {
      dispatch(
        fetchAsesiSkemaServices({
          page: stateField.page,
          size: stateField.size,
          statusCek: stateField.statusCek,
        })
      );
    } else if (value === 1) {
      dispatch(
        fetchAsesiSkemaServices({
          page: stateField.page,
          size: stateField.size,
          statusCek: "revisi",
        })
      );
    } else {
      dispatch(
        fetchAsesiSkemaServices({
          page: stateField.page,
          size: stateField.size,
          statusCek: "terima",
        })
      );
    }
  }, [value]);

  // const fetchData = () => {
  //   axios({
  //     url :"/api/asesi",
  //     method: "get",
  //   })
  //     .then((data) => {
  //       if (data.data.data.length !== 0) {
  //         console.log(data.data.data, "dataasesi");
  //         setDataAsesi(data.data.data);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err, "errorr");
  //     });
  // };

  // React.useEffect(() => {
  //   fetchData();
  // }, []);
  console.log(loading, "loading");
  if (loading) {
    return <LoadingComponent />;
  }
  console.log(dataAsesiSkema, "deteasesi");
  return (
    <React.Fragment>
      {dataAsesiSkema ? (
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Pending" {...a11yProps(0)} />
              <Tab label="Revisi" {...a11yProps(1)} />
              <Tab label="Approved" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <div hidden={value !== 0}>
            <PendingPayment
              dataAsesiSkema={dataAsesiSkema.dataAsesiSkema}
              stateField={stateField}
              setStateField={setStateField}
              totalPage={dataAsesiSkema.totalPage}
              // handleChangePage={handleChangePage}
            />
          </div>
          <div hidden={value !== 1}>
            <RejectedPayment
              dataAsesiSkema={dataAsesiSkema.dataAsesiSkema}
              stateField={stateField}
              setStateField={setStateField}
              totalPage={dataAsesiSkema.totalPage}
            />
          </div>
          <div hidden={value !== 2}>
            <ApprovedPayment
              dataAsesiSkema={dataAsesiSkema.dataAsesiSkema}
              stateField={stateField}
              setStateField={setStateField}
              totalPage={dataAsesiSkema.totalPage}
            />
          </div>
        </Box>
      ) : (
        <p style={{ textAlign: "center" }}>data belum tersedia</p>
      )}
    </React.Fragment>
  );
}

// export default function Asesi() {
//   return <p>aseso</p>;
// }
