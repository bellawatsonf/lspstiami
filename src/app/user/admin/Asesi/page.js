"use client";

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PendingPayment from "./pendingpayment";
import ApprovedPayment from "./approvedpayment";
import RejectedPayment from "./rejectedpayment";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsesiSkemaServices } from "../../../services/asesiskema";
import LoadingComponent from "@/app/(public)/component/loading";

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
    setValue(newValue);
  };

  React.useEffect(() => {
    dispatch(fetchAsesiSkemaServices());
  }, []);
  // const fetchData = () => {
  //   axios({
  //     url: "http://localhost:3001/asesi",
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
    <>
      {dataAsesiSkema.length > 0 ? (
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Pending" {...a11yProps(0)} />
              <Tab label="Approved" {...a11yProps(1)} />
              <Tab label="Rejected" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <div hidden={value !== 0}>
            <PendingPayment dataAsesiSkema={dataAsesiSkema} />
          </div>
          <div hidden={value !== 1}>
            <ApprovedPayment dataAsesiSkema={dataAsesiSkema} />
          </div>
          <div hidden={value !== 2}>
            <RejectedPayment />
          </div>
        </Box>
      ) : (
        <p style={{ textAlign: "center" }}>data belum tersedia</p>
      )}
    </>
  );
}

// export default function Asesi() {
//   return <p>aseso</p>;
// }
