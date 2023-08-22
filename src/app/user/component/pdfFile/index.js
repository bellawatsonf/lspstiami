import { Page, Text, Image, Document, Stylesheet } from "@react-pdf/renderer";
import style from "./pdf.module.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchApl01ById } from "@/app/services/apl01";
import { useParams } from "next/navigation";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import store from "@/app/store";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#a3bdd7",
    color: theme.palette.common.black,
    fontWeight: 700,
    border: "1px solid black",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: "1px solid black",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    // border: 0,
    border: "1px solid black",
  },
}));

export default function PdfFile() {
  let apl01byid = useSelector((state) => state.apl01.apl01ById);
  let dispatch = useDispatch();
  let params = useParams();
  let id = params.id;
  console.log(apl01byid, "dataapl01");
  useEffect(() => {
    dispatch(fetchApl01ById(id));
  }, []);

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
  ];
  return (
    // <Provider store={store}>
    <Document>
      <Page size="A4">
        <Box sx={{ marginBottom: "30px" }}>
          <Typography
            sx={{ fontSize: "20px", fontWeight: 700, paddingBottom: "20px" }}
          >
            FR-APL-01. FORMULIR PERMOHONAN SERTIFIKASI KOMPETENSI
          </Typography>
          <Typography
            sx={{ fontSize: "17px", fontWeight: 700, paddingBottom: "20px" }}
          >
            Bagian 1 : Rincian Data Permohonan Sertifikasi
          </Typography>
          <Typography sx={{ paddingBottom: "20px" }}>
            Pada bagian ini, cantumkan data pribadi, data pendidikan formal
            serta data pekerjaan anda pada saat ini.
          </Typography>
          <div style={{ display: "flex" }}>
            <Typography sx={{ fontWeight: 700 }}>a.</Typography>
            <div style={{ paddingLeft: "10px" }}>
              <Typography sx={{ fontWeight: 700, paddingBottom: "10px" }}>
                Data Pribadi{" "}
              </Typography>
              <div className="row">
                <div className="mb-3 col-2">Nama Lengkap</div>
                <div className="mb-3 col-10">
                  : {apl01byid?.asesi_skema?.asesi?.nama_lengkap}
                </div>
                <div className="mb-3 col-2">Tempat / tgl. lahir</div>
                <div className="mb-3 col-10">
                  :{" "}
                  {apl01byid?.asesi_skema?.asesi?.tempat_lahir +
                    " / " +
                    apl01byid?.asesi_skema?.asesi?.tgl_lahir
                      .toString()
                      .replace(/T.*/, "")
                      .split("-")
                      .reverse()
                      .join("-")}
                </div>
                <div className="mb-3 col-2">Jenis Kelamin</div>
                <div className="mb-3 col-10">
                  : {apl01byid?.asesi_skema?.asesi?.jenis_kelamin}
                </div>
                <div className="mb-3 col-2">Kebangsaan</div>
                <div className="mb-3 col-10">
                  : {apl01byid?.asesi_skema?.asesi?.kebangsaan}
                </div>
                <div className="mb-3 col-2">Alamat Rumah</div>
                <div className="mb-3 col-10">
                  : {apl01byid?.asesi_skema?.asesi?.alamat}
                </div>
                {/* <div className="mb-3 col-4"></div> */}

                <div className="col-2">
                  <Typography> </Typography>
                </div>
                <div className=" col-10">
                  <div className="row">
                    <div className="mb-3 col-2">
                      <Typography>: Kode Pos </Typography>
                    </div>
                    <div className="mb-3 col-4">
                      <Typography>
                        : {apl01byid?.asesi_skema?.asesi?.kodepos}
                      </Typography>
                    </div>
                  </div>
                </div>

                <div className=" col-2">No. Telepon/Email</div>
                <div className="col-10">
                  <div className="row">
                    <div className="mb-3 col-2">
                      <Typography>: Rumah </Typography>
                    </div>
                    <div className="mb-3 col-4">
                      <Typography>
                        : {apl01byid?.asesi_skema?.asesi?.tlp}
                      </Typography>
                    </div>
                    <div className="mb-3 col-2">
                      <Typography>Kantor </Typography>
                    </div>
                    <div className="mb-3 col-4">
                      <Typography sx={{ paddingLeft: "5px" }}>
                        : {apl01byid?.asesi_skema?.asesi?.tlp_kantor}
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="mb-3 col-2"></div>
                <div className="mb-3 col-10">
                  <div className="row">
                    <div className=" col-2">
                      <Typography>: HP </Typography>
                    </div>
                    <div className=" col-4">
                      <Typography>
                        : {apl01byid?.asesi_skema?.asesi?.phone_number}
                      </Typography>
                    </div>
                    <div className=" col-2">
                      <Typography>Email </Typography>
                    </div>
                    <div className=" col-4">
                      <Typography sx={{ paddingLeft: "5px" }}>
                        : {apl01byid?.asesi_skema?.asesi?.email}
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="col-2">Pendidikan Terakhir</div>
                <div className="col-10">
                  : {apl01byid?.asesi_skema?.asesi?.kualifikasi_pendidikan}
                </div>
              </div>
            </div>
          </div>
        </Box>
        <Box sx={{ marginBottom: "30px" }}>
          <div style={{ display: "flex" }}>
            <Typography sx={{ fontWeight: 700 }}>b.</Typography>
            <div style={{ paddingLeft: "10px" }}>
              <Typography sx={{ fontWeight: 700, paddingBottom: "10px" }}>
                Data Pekerjaan Sekarang{" "}
              </Typography>
              <div className="row">
                <div className="mb-3 col-2">Nama Perusahaan / Lembaga</div>
                <div className="mb-3 col-10">
                  : {apl01byid?.asesi_skema?.asesi?.nama_instansi}
                </div>
                <div className="mb-3 col-2">Jabatan</div>
                <div className="mb-3 col-10">
                  : {apl01byid?.asesi_skema?.asesi?.jabatan}
                </div>

                <div className="mb-3 col-2">Alamat</div>
                <div className="mb-3 col-10">
                  : {apl01byid?.asesi_skema?.asesi?.alamat_kantor}
                </div>
                {/* <div className="mb-3 col-4"></div> */}

                <div className="mb-3 col-2">
                  <Typography> </Typography>
                </div>
                <div className="col-10">
                  <div className="row">
                    <div className="mb-3 col-2">
                      <Typography>: Kode Pos </Typography>
                    </div>
                    <div className="mb-3 col-4">
                      <Typography>
                        : {apl01byid?.asesi_skema?.asesi?.kodepos_kantor}
                      </Typography>
                    </div>
                  </div>
                </div>

                <div className="mb-3 col-2">No. Telepon/Fax/Email</div>
                <div className="mb-3 col-10">
                  <div className="row">
                    <div className="col-2">
                      <Typography>: Telp</Typography>
                    </div>
                    <div className="col-4">
                      <Typography>
                        : {apl01byid?.asesi_skema?.asesi?.tlp_kantor}
                      </Typography>
                    </div>
                    <div className="col-2">
                      <Typography>Fax </Typography>
                    </div>
                    <div className="col-4">
                      <Typography sx={{ paddingLeft: "5px" }}>
                        : {apl01byid?.asesi_skema?.asesi?.fax}
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="col-2"></div>
                <div className="col-10">
                  <div className="row">
                    <div className="col-2">
                      <Typography>: Email</Typography>
                    </div>
                    <div className="col-4">
                      <Typography>
                        : {apl01byid?.asesi_skema?.asesi?.email_kantor}
                      </Typography>
                    </div>
                    {/* <div className="mb-3 col-2">
                      <Typography>Email </Typography>
                    </div>
                    <div className="mb-3 col-4">
                      <Typography sx={{ paddingLeft: "5px" }}>
                        : {apl01byid?.asesi_skema?.asesi?.email}
                      </Typography>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
        <Box sx={{ marginBottom: "30px" }}>
          <Typography
            sx={{ fontSize: "17px", fontWeight: 700, paddingBottom: "20px" }}
          >
            Bagian 2 : Data Sertifikasi
          </Typography>
          <Typography sx={{ paddingBottom: "20px" }}>
            Tuliskan Judul dan Nomor Skema Sertifikasi, Tujuan Asesmen serta
            Daftar Unit Kompetensi sesuai kemasan pada skema sertifikasi yang
            anda ajukan untuk mendapatkan pengakuan sesuai dengan latar belakang
            pendidikan, pelatihan serta pengalaman kerja yang anda miliki.
          </Typography>
          <Typography sx={{ fontSize: "17px", fontWeight: 700 }}>
            Daftar Unit Kompetensi :
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Kode Unit</StyledTableCell>
                  <StyledTableCell>Judul Unit</StyledTableCell>
                  <StyledTableCell>
                    Jenis Standar (Standar Khusus/Standar Internasional/SKKNI)
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {apl01byid?.asesi_skema?.skema?.unitkompetensi.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.kode_unit}
                    </StyledTableCell>
                    <StyledTableCell>{row.judul_unit}</StyledTableCell>
                    <StyledTableCell>SKKNI</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box sx={{ marginBottom: "30px" }}>
          <Typography
            sx={{ fontSize: "17px", fontWeight: 700, paddingBottom: "20px" }}
          >
            Bagian 3 : Bukti Kelengkapan Pemohon
          </Typography>

          <Typography sx={{ fontSize: "17px", fontWeight: 700 }}>
            Daftar Unit Kompetensi :
          </Typography>
          <div
            style={{
              display: "flex",
              paddingBottom: "20px",
              paddingTop: "20px",
            }}
          >
            <Typography sx={{ fontWeight: 700 }}>a.</Typography>
            <div style={{ paddingLeft: "10px" }}>
              <Typography sx={{ fontWeight: 700, paddingBottom: "10px" }}>
                Bukti kelengkapan persyaratan dasar pemohon :
              </Typography>
            </div>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell rowSpan={2}>No.</StyledTableCell>
                  <StyledTableCell rowSpan={2}>
                    Bukti Persyaratan
                  </StyledTableCell>
                  <StyledTableCell colSpan={4} align="center">
                    Ada
                  </StyledTableCell>

                  <StyledTableCell rowSpan={2}>Tidak Ada</StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell colSpan={2}>memenuhi syarat</StyledTableCell>
                  <StyledTableCell colSpan={2}>
                    tidak memenuhi syarat
                  </StyledTableCell>
                  {/* <StyledTableCell>Ada</StyledTableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {apl01byid?.asesi_skema?.skema?.unitkompetensi.map((row, i) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {(i += 1)}
                    </StyledTableCell>
                    <StyledTableCell>{row.judul_unit}</StyledTableCell>
                    <StyledTableCell colSpan={2}>
                      {row.judul_unit}
                    </StyledTableCell>
                    <StyledTableCell colSpan={2}>
                      {row.judul_unit}
                    </StyledTableCell>
                    <StyledTableCell>SKKNI</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Page>
    </Document>
    // </Provider>
  );
}
