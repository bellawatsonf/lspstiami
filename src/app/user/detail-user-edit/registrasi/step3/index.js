import styles from "./step3.module.css";
import { TextField, Typography } from "@mui/material";

export default function Step3() {
  return (
    <div style={{ marginTop: "30px" }}>
      <div className="row">
        <div className="col-12">
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 500,
              paddingBottom: "5px",
              paddingTop: "15px",
            }}
          >
            Transkrip
          </Typography>

          <input
            type="file"
            name="transkrip"
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values.ijazah}
          />
          {/* {errors.ijazah && touched.ijazah && errors.ijazah} */}
          {/* <TextField fullWidth label="fullWidth" id="fullWidth" /> */}
        </div>
        <div className="col-12">
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 500,
              paddingBottom: "5px",
              paddingTop: "15px",
            }}
          >
            Ijazah
          </Typography>

          <input
            type="file"
            name="ijazah"
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values.ijazah}
          />
          {/* {errors.ijazah && touched.ijazah && errors.ijazah} */}
          {/* <TextField fullWidth label="fullWidth" id="fullWidth" /> */}
        </div>
        <div className="col-12">
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 500,
              paddingBottom: "5px",
              paddingTop: "15px",
            }}
          >
            KTP
          </Typography>

          <input
            type="file"
            name="img_ktp"
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values.img_ktp}
          />
          {/* {errors.email && touched.email && errors.email} */}
        </div>
        <div className="col-12">
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 500,
              paddingBottom: "5px",
              paddingTop: "15px",
            }}
          >
            Pas Foto
          </Typography>

          <input
            type="file"
            name="pas_foto"
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values.pas_foto}
          />
          {/* {errors.pas_foto && touched.pas_foto && errors.pas_foto} */}
          {/* <TextField fullWidth label="fullWidth" id="fullWidth" /> */}
        </div>

        <div className="col-12">
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 500,
              paddingBottom: "5px",
              paddingTop: "15px",
            }}
          >
            Surat Pernyataan Tidak Merekam
          </Typography>

          <input
            type="file"
            name="surat_pernyataan"
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values.surat_pernyataan}
          />
          {/* {errors.surat_pernyataan &&
            touched.surat_pernyataan &&
            errors.surat_pernyataan} */}
          {/* <TextField fullWidth label="fullWidth" id="fullWidth" /> */}
        </div>
        <div className="col-12">
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 500,
              paddingBottom: "5px",
              paddingTop: "15px",
            }}
          >
            Bukti Bayar
          </Typography>

          <input
            type="file"
            name="bukti_bayar"
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values.surat_pernyataan}
          />
          {/* {errors.surat_pernyataan &&
            touched.surat_pernyataan &&
            errors.surat_pernyataan} */}
          {/* <TextField fullWidth label="fullWidth" id="fullWidth" /> */}
        </div>
      </div>
    </div>
  );
}
