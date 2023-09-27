import {
  Page,
  Text,
  Image,
  Document,
  Stylesheet,
  View,
} from "@react-pdf/renderer";
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

  let dataBuktiKelengkapan = [
    {
      bukti_persayaratan:
        apl01byid.asesi_skema.skema.id === 1
          ? `        Mahasiswa S1 Prodi Manajemen Logistik Institut Ilmu Sosial dan
        Manajemen STIAMI yang telah menyelesaikan mata kuliah
        Manajemen Pergudangan, Pengantar Ilmu Logistik and Supply
        Chain, Manajemen Distribusi.`
          : apl01byid.asesi_skema.skema.id === 2
          ? `  Mahasiswa aktif S1 Prodi Manajemen Komunikasi lnstitut STIAMI
        Jakarta yang telah menyelesaikan mata kuliah dan dinyatakan
        lulus pada mata kuliah Pendidikan Adab, Pengantar Manajemen,
        Dasar Dasar Akuntansi, Dasar Dasar Jurnalistik, Komunikasi
        Massa, Kepemimpinan, Fotografi, Manajemen Produksi Siaran
        Televisi, Tehnik Wawancara, Penulisan Berita, Perencanaan
        Media, Post Production & Editing, Etika dan fiilsafat
        KomuniLasi, JurnaTistik Foto, Rules & Ethics, Computer
        Mediated Communication, Print Media Management, Social Media
        Management, Kebijakan Media, Jurnalistik Foto. Kelulusan
        dibuktikan dengan foto kopi transkrip nilai serta kartu
        mahasiswa STIAMI yang masih berlaku.`
          : apl01byid.asesi_skema.skema.id === 3
          ? `Mahasiswa Prodi Administrasi Bisnis Institut Ilmu Sosial dan
        Manajemen STIAMI yang telah menyelesaikan mata kuliah internal
        dan eksternal : Perencanaan dan Pengembangan Bisnis, MSDM,
        Organisasi dan Manajemen Bisnis, Manajemen Operasional.`
          : apl01byid.asesi_skema.skema.id === 4
          ? `   Mahasiswa aktif S1 program studi Manajemen Komunikasi Institut
        Ilmu Sosial dan Manajemen STIAMI yang telah menyelesaikan mata
        kuliah dan dinyatakan lulus pada mata kuliah Pendidikan Adab,
        Pengantar Manajemen, Dasar Dasar Akuntansi, Dasar Dasar
        Jurnalistik, Komunikasi Massa, Kepemimpinan, Fotografi,
        Manajemen Produksi Siaran Televisi, Tehnik Wawancara,
        Penulisan Berita, Perencanaan Media, Post Production &
        Editing, Etika dan fiilsafat KomuniLasi, JurnaTistik Foto,
        Rules & Ethics, Computer Mediated Communication, Print Media
        Management, Social Media Management, Kebijakan Media,
        Jurnalistik Foto.`
          : apl01byid.asesi_skema.skema.id === 5
          ? `  Mahasiswa S1 prodi Ilmu Administrasi Publik Institut Ilmu
        Sosial dan Manajemen STIAMI yang telah menyelesaikan mata
        kuliah Kebijakan Publik, Analisis Kebijakan Publik atau
        Komunikasi dan Advokasi Kebijakan.`
          : apl01byid.asesi_skema.skema.id === 6
          ? ` Mahasiswa S1 Prodi Ilmu Administrasi Publik Institut Ilmu
        Sosial dan Manajemen STIAMI yang telah menyelesaikan mata
        kuliah Pengantar Perpajakan, Kebijakan dan Adm. Pajak
        Penghasilan I, Kebijakan dan Adm. Pajak Penghasilan II, dan
        Praktikum Adm. PPh
      `
          : apl01byid.asesi_skema.skema.id === 7
          ? ` Mahasiswa S1 Prodi Manajemen Logistik Institut Ilmu Sosial dan
        Manajemen STIAMI yang telah menyelesaikan mata kuliah
        Pengantar Ilmu Logistik dan Supply Chain, Manajemen
        Pergudangan, Manajemen Distribusi, Etika Dan Komunikasi
        Bisnis, Manajemen Proyek Supply Chain.`
          : apl01byid.asesi_skema.skema.id === 8
          ? `Mahasiswa S1 Prodi Manajemen Komunikasi Institut Ilmu Sosial
        dan Manajemen STIAMI yang telah menyelesaikan mata kuliah
        Pendidikan Adab, Pengantar Manajemen, Manajemen Komunikasi,
        English for Specific Purpose Communication, Komunikasi Massa,
        Komunikasi Antar Pribadi, Komunikasi Antar Budaya,
        Kepemimpinan, Metode Penelitian Komunikasi, Press Release,
        Retorika & Public Speaking, Manajemen PR, PR Writing, Opini
        Publik, Marketing PR, PR Event, Riset PR & Analisis Media,
        Strategi & Teknik PR, Publisitas, Etika PR, Keprotokolan,
        Cyber PR, Audit Humas, Dasar-dasar PR, Komunikasi Organisasi,
        Pengantar Statistik, Fotografi, Media Manajemen, Metode
        Penelitian Kualitatif, Metode Penelitian Kuantitatif, Internal
        & External Relations`
          : apl01byid.asesi_skema.skema.id === 9
          ? ` Mahasiswa Institut Ilmu Sosial dan Manajemen STIAMI yang telah
        menyelesaikan mata kuliah Public Relation, Service Excellence,
        MSDM Pariwisata, Psikologi Pelayanan Pariwisata, Analisis
        Operasional Hospitaliti; atau;
      `
          : `Mahasiswa Prodi Manajemen Komunikasi Institut Ilmu Sosial dan
        Manajemen STIAMI yang telah menyelesaikan mata kuliah Brand
        Management, MPR Writing, Corporate Relationship Management,
        Integrated Marketing Communication, Negotiation Technique,
        Marcom Program & Event Management, Manajemen Periklanan &
        Branding, Etika PR dan Periklanan, Media Buying, Komunikasi
        Visual dan Copywriting, Digital Marketing, Skill Presentasi.
      `,
      kelengkapan: apl01byid.asesi_skema.asesi.transskrip,
    },
    {
      bukti_persayaratan:
        apl01byid.asesi_skema.skema.id === 1
          ? `Memiliki sertifikat pelatihan berbasis kompetensi pada
          Klaster Pengelolaan Sistem Pergudangan yang dilakukan oleh
          Institut Ilmu Sosial dan Manajemen STIAMI`
          : apl01byid.asesi_skema.skema.id === 2
          ? `  Memiliki sertifikasi pelatihan berbasis kompetensi pada
          jabatan KKNI Level 5 pada bidang kewirausahaan industri yang
          dilakukan oleh Institut Ilmu Sosial dan Manajemen STIAMI`
          : apl01byid.asesi_skema.skema.id === 3
          ? ` Telah mengikuti pelatihan berbasis kompetensi dibidang
          Penyelia ekspor yang dilakukan oleh Institut Ilmu Sosial dan
          Manajemen STIAMI`
          : apl01byid.asesi_skema.skema.id === 4
          ? ` Memiliki sertifikat pelatihan berbasis kompetensi pada
          jabatan Asisten Produser Produksi Program Televisi yang
          dilakukan oleh Institut Ilmu Sosial dan Manajemen STIAMI`
          : apl01byid.asesi_skema.skema.id === 5
          ? `Memiliki Sertifikat Pelatihan berbasis kompetensi pada
          Analis Kebijakan Publik yang dilakukan oleh Institut Ilmu
          Sosial dan Manajemen STIAMI`
          : apl01byid.asesi_skema.skema.id === 6
          ? `Telah mengikuti pelatihan berbasis kompetensi Teknisi
          Perpajakan PPh Badan Sektor Usaha Jasa Dan Perdagangan yang
          dilakukan oleh Institut Ilmu Sosial dan Manajemen STIAMI`
          : apl01byid.asesi_skema.skema.id === 7
          ? ` Memiliki sertifikat pelatihan berbasis kompetensi pada
          Okupasi Manajer Logistik Proyek yang dilakukan oleh Institut
          Ilmu Sosial dan Manajemen STIAMI`
          : apl01byid.asesi_skema.skema.id === 8
          ? `  Memiliki sertifikat pelatihan berbasis kompetensi pada
          Jabatan Public Relations Coordinator yang dilakukan oleh
          Institut Ilmu Sosial dan Manajemen STIAMI`
          : apl01byid.asesi_skema.skema.id === 9
          ? `  Memiliki sertifikasi pelatihan berbasis kompetensi pada
          jabatan Front Office Supervisor yang dilakukan oleh Institut
          Ilmu Sosial dan Manajemen STIAMI`
          : ` Memiliki sertifikat pelatihan berbasis kompetensi pada Media
          Planing Manajer yang dilakukan oleh Institut Ilmu Sosial dan
          Manajemen STIAMI`,
      kelengkapan: apl01byid.asesi_skema.asesi.sertifikat_pelatihan_pendukung,
    },
    {
      bukti_persayaratan: "Copy ijazah terakhir (SLTA/Sederajat)",
      kelengkapan: apl01byid.asesi_skema.asesi.ijazah,
    },
    {
      bukti_persayaratan: "Copy KTP",
      kelengkapan: apl01byid.asesi_skema.asesi.img_ktp,
    },
    {
      bukti_persayaratan:
        "Pas foto 3x4 berlatar belakang warna merah sebanyak 2 lembar",
      kelengkapan: apl01byid.asesi_skema.asesi.pas_foto,
    },
    {
      bukti_persayaratan: "Surat pernyataan tidak merekam(bermaterai)",
      kelengkapan: apl01byid.asesi_skema.asesi.surat_pernyataan,
    },
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
                  <StyledTableCell>No.</StyledTableCell>
                  <StyledTableCell>Kode Unit</StyledTableCell>
                  <StyledTableCell>Judul Unit</StyledTableCell>
                  <StyledTableCell>
                    Jenis Standar (Standar Khusus/Standar Internasional/SKKNI)
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {apl01byid?.asesi_skema?.skema?.unitkompetensi.map((row, i) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {(i += 1)}
                    </StyledTableCell>
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
                  <StyledTableCell rowSpan={2} style={{ textAlign: "center" }}>
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
                {dataBuktiKelengkapan.map((row, i) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {(i += 1)}
                    </StyledTableCell>
                    <StyledTableCell>{row.bukti_persayaratan}</StyledTableCell>
                    <StyledTableCell colSpan={2}>
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          border: "1px solid black",
                        }}
                      >
                        <img
                          style={{
                            width: "15px",
                            display:
                              row.kelengkapan !== null ? "block" : "none",
                          }}
                          src="/check.png"
                        />
                      </div>
                    </StyledTableCell>
                    <StyledTableCell colSpan={2}>
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          border: "1px solid black",
                        }}
                      >
                        <img
                          style={{
                            width: "15px",
                            display:
                              row.kelengkapan === null ? "block" : "none",
                          }}
                          src="/check.png"
                        />
                      </div>
                    </StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box sx={{ marginBottom: "30px" }}>
          <div
            style={{
              display: "flex",
              paddingBottom: "20px",
              // paddingTop: "20px",
            }}
          >
            <Typography sx={{ fontWeight: 700 }}>b.</Typography>
            <div style={{ paddingLeft: "10px" }}>
              <Typography sx={{ fontWeight: 700, paddingBottom: "10px" }}>
                Bukti kompetensi yang relevan :
              </Typography>
            </div>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell rowSpan={2}>No.</StyledTableCell>
                  <StyledTableCell rowSpan={2}>
                    Rincian Bukti Pendidikan/Pelatihan, Pengalaman Kerja,
                    Pengalaman Hidup
                  </StyledTableCell>
                  <StyledTableCell colSpan={4} align="center">
                    Lampiran Bukti
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell colSpan={2}>Ada</StyledTableCell>
                  <StyledTableCell colSpan={2}>Tidak Ada</StyledTableCell>
                  {/* <StyledTableCell>Ada</StyledTableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {dataBuktiKelengkapan.map((row, i) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {(i += 1)}
                    </StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell colSpan={2}></StyledTableCell>
                    <StyledTableCell colSpan={2}></StyledTableCell>
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
