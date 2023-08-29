"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Step1 from "../registrasi/step1";
import Step2 from "../registrasi/step2";
import Step3 from "../registrasi/step3";
import Step4 from "../registrasi/step4";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsesiById } from "@/app/services/asesi";
import Step5 from "../registrasi/step5";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

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

export default function DetailEdit() {
  let dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const userById = useSelector((state) => state.asesi.AsesiById);
  const user = JSON.parse(sessionStorage.getItem("user"));
  // console.log(id);

  console.log(userById, "hhuserbyid");
  React.useEffect(() => {
    dispatch(fetchAsesiById(user.id));
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  let objectlength = Object.keys(userById);
  console.log(objectlength, "hhobjk");
  return (
    <>
      {objectlength.length !== 0 ? (
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Data Pribadi" {...a11yProps(0)} />
              <Tab label="Data Pekerjaan" {...a11yProps(1)} />
              {/* <Tab label="Data Sertifikasi" {...a11yProps(2)} /> */}
              <Tab label="Kelengkapan Berkas" {...a11yProps(2)} />
              <Tab label="Tanda Tangan Asesi" {...a11yProps(3)} />
              {/* <Tab label="Sertifikasi" {...a11yProps(4)} /> */}
            </Tabs>
          </Box>
          <div hidden={value !== 0}>
            <Step1 dataAsesi={userById} />
          </div>
          <div hidden={value !== 1}>
            <Step2 dataAsesi={userById} />
          </div>
          {/* <div hidden={value !== 2}>Item Three</div> */}
          <div hidden={value !== 2}>
            <Step3 dataAsesi={userById} />
          </div>
          <div hidden={value !== 3}>
            <Step4 dataAsesi={userById} />
          </div>
          {/* <div hidden={value !== 4}>
            <Step5 dataAsesi={userById} />
          </div> */}
        </Box>
      ) : null}
    </>
  );
}
