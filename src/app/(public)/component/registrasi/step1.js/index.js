import styles from "./step1.module.css";
import { TextField, Typography } from "@mui/material";

export default function Step1() {
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
              Nama Lengkap
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
            No. KTP/NIK/Paspor
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
            Tempat Lahir
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
        <div className="col-12">
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 500,
              paddingBottom: "10px",
              paddingTop: "15px",
            }}
          >
            Jenis Kelamin
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
            Kebangsaan
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
            Alamat
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
            Kode Pos
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
            No.Hp
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
            No.Telp
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
            Email
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
            Password
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
            Klasifikasi Pendidikan
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
