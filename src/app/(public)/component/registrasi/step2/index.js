import styles from "./step1.module.css";
import { TextField, Typography } from "@mui/material";

export default function Step2() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <label>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                paddingBottom: "10px",
                paddingTop: "15px",
              }}
            >
              Nama Institusi / Perusahaan
            </Typography>
          </label>
          {/* <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email} */}
          <TextField fullWidth label="fullWidth" id="fullWidth" />
        </div>
        <div className="col-12">
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 500,
              paddingBottom: "10px",
              paddingTop: "15px",
            }}
          >
            Jabatan
          </Typography>
          {/* <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email} */}
          <TextField fullWidth label="fullWidth" id="fullWidth" />
        </div>
        <div className="col-12">
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 500,
              paddingBottom: "10px",
              paddingTop: "15px",
            }}
          >
            Alamat Kantor
          </Typography>
          {/* <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email} */}
          <TextField fullWidth label="fullWidth" id="fullWidth" />
        </div>
        <div className="col-12">
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 500,
              paddingBottom: "10px",
              paddingTop: "15px",
            }}
          >
            Tanggal Lahir
          </Typography>
          {/* <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email} */}
          <TextField fullWidth label="fullWidth" id="fullWidth" />
        </div>

        <div className="col-6">
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 500,
              paddingBottom: "10px",
              paddingTop: "15px",
            }}
          >
            Kode Pos Kantor
          </Typography>
          {/* <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email} */}
          <TextField fullWidth label="fullWidth" id="fullWidth" />
        </div>

        <div className="col-6">
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 500,
              paddingBottom: "10px",
              paddingTop: "15px",
            }}
          >
            No.Telp Kantor
          </Typography>
          {/* <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email} */}
          <TextField fullWidth label="fullWidth" id="fullWidth" />
        </div>

        <div className="col-6">
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 500,
              paddingBottom: "10px",
              paddingTop: "15px",
            }}
          >
            Fax Kantor
          </Typography>
          {/* <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email} */}
          <TextField fullWidth label="fullWidth" id="fullWidth" />
        </div>
        <div className="col-6">
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 500,
              paddingBottom: "10px",
              paddingTop: "15px",
            }}
          >
            Email Kantor
          </Typography>
          {/* <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email} */}
          <TextField fullWidth label="fullWidth" id="fullWidth" />
        </div>
      </div>
    </div>
  );
}
