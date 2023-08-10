"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = [
  "Data Pemohon Sertifikasi",
  "Data Pekerjaan",
  "Kelengkapan Berkas",
  "Tanda Tangan",
];

import styles from "./registrasi.module.css";
import Step1 from "../(public)/component/registrasi/step1.js/index.js";
import Step2 from "../(public)/component/registrasi/step2";
import { Formik } from "formik";
import Step3 from "../(public)/component/registrasi/step3";
import Step4 from "../(public)/component/registrasi/step4";
export default function Regitrasi() {
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
  return (
    <div className={`${styles.boxRegister}`}>
      <Box className={`${styles.boxRegisStepper}`}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            // if (isStepOptional(index)) {
            //   labelProps.optional = (
            //     <Typography variant="caption">Optional</Typography>
            //   );
            // }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography
              sx={{
                color: "#212529",
                fontSize: "30px",
                fontWeight: 700,
                textAlign: "center",
                padding: "60px 30px",
              }}
            >
              Formulir APL 01
            </Typography>

            <Typography
              sx={{
                mb: 1,
                fontWeight: 600,
                color: "rgb(4, 9, 36)",
                fontSize: "18px",
              }}
            >
              Step {activeStep + 1}
            </Typography>
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  {/* <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  /> */}
                  {activeStep === 0 ? (
                    <>
                      <Step1 />
                    </>
                  ) : activeStep === 1 ? (
                    <Step2 />
                  ) : activeStep === 2 ? (
                    <Step2 />
                  ) : (
                    <Step4 />
                  )}
                  {errors.password && touched.password && errors.password}
                  {/* {activeStep === 2 ? (
                    <button type="submit" disabled={isSubmitting}>
                      Submit
                    </button>
                  ) : null} */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      pt: 2,
                      paddingLeft: "10px",
                      paddingRight: "15px",
                      mt: 4,
                    }}
                  >
                    <Button
                      // color="inherit"
                      // disabled={activeStep === 0}
                      // variant="outlined"

                      onClick={handleBack}
                      // sx={{ mr: 1 }}
                      sx={{
                        border: "1px solid #2DC3D0",
                        display: activeStep === 0 ? "none" : "block",
                        color: "#2DC3D0",
                      }}
                    >
                      Previous
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />
                    {/* {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )} */}

                    <Button
                      variant="contained"
                      color="success"
                      onClick={handleNext}
                      sx={{
                        background: "#2DC3D0",
                        // display: activeStep !== 2 ? "block" : "none",
                      }}
                    >
                      {activeStep === steps.length - 1 ? "Submit" : "Next"}
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
