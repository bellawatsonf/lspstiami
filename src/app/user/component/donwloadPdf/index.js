import {
  Page,
  Text,
  Image,
  Document,
  Stylesheet,
  View,
  PDFDownloadLink,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import style from "./style.module.css";
import { Button } from "@mui/material";

const styles = StyleSheet.create({
  body: {
    // paddingTop: 25,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },

  header: {
    width: "15%",
    // marginBottom: 20,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,

    paddingHorizontal: 35,
    fontSize: "8px",
    // color: "grey",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  },
  tableCellSpan2: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  },
});
const DocumentPdf = (props) => {
  if (!props.data) {
    return <div>pp</div>;
  }
  console.log(encodeURI(props?.data?.admins.ttd_admin), "dr document");

  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <Image style={styles.header} src="/logoolsp.png" fixed>
          {/* <Image style={styles} ></Image> */}
        </Image>
        <Text
          style={{ fontSize: "15px", fontWeight: 700, marginBottom: "20px" }}
        >
          FR-APL-01. FORMULIR PERMOHONAN SERTIFIKASI KOMPETENSI
        </Text>
        <Text
          style={{ fontSize: "12px", fontWeight: 700, marginBottom: "20px" }}
        >
          Bagian 1 : Rincian Data Permohonan Sertifikasi
        </Text>
        <Text style={{ fontSize: "12px" }}>
          Pada bagian ini, cantumkan data pribadi, data pendidikan formal serta
          data pekerjaan anda pada saat ini.
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            fontSize: "12px",
            paddingTop: "20px",
          }}
        >
          <Text style={{ fontWeight: 700 }}>a.</Text>
          <View style={{ paddingLeft: "10px" }}>
            <Text style={{ fontWeight: 700 }}>Data Pribadi</Text>
            <View
              style={{
                flexDirection: "row",
                marginBottom: "10px",
                marginTop: "10px",
              }}
            >
              <View style={{ width: 230 }}>
                <Text>Nama Lengkap</Text>
              </View>
              <View
                style={{
                  borderBottom: "1px sold black",
                  width: "100%",
                }}
              >
                <Text>: {props.data?.asesi_skema.asesi.nama_lengkap}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: "10px" }}>
              <View style={{ width: 230 }}>
                <Text>Tempat / tgl. lahir</Text>
              </View>
              <View
                style={{
                  borderBottom: "1px sold black",
                  width: "100%",
                }}
              >
                <Text>
                  :{" "}
                  {props?.data?.asesi_skema?.asesi?.tempat_lahir +
                    " / " +
                    props?.data?.asesi_skema?.asesi?.tgl_lahir
                      .toString()
                      .replace(/T.*/, "")
                      .split("-")
                      .reverse()
                      .join("-")}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: "10px" }}>
              <View style={{ width: 230 }}>
                <Text>Jenis Kelamin</Text>
              </View>
              <View
                style={{
                  borderBottom: "1px sold black",
                  width: "100%",
                }}
              >
                <Text>: {props.data?.asesi_skema.asesi.jenis_kelamin}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: "10px" }}>
              <View style={{ width: 230 }}>
                <Text>Kebangsaan</Text>
              </View>
              <View
                style={{
                  borderBottom: "1px sold black",
                  width: "100%",
                }}
              >
                <Text>: {props.data?.asesi_skema.asesi.kebangsaan}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: "10px" }}>
              <View style={{ width: 230 }}>
                <Text>Alamat Rumah</Text>
              </View>
              <View
                style={{
                  borderBottom: "1px sold black",
                  width: "100%",
                }}
              >
                <Text>: {props.data?.asesi_skema.asesi.alamat_rumah}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: "10px" }}>
              <View style={{ width: 230 }}>
                <Text></Text>
              </View>
              <View style={{ flexDirection: "row", width: "100%" }}>
                <View style={{ flexDirection: "row", width: "50%" }}>
                  <View style={{ marginRight: "10px" }}>
                    <Text></Text>
                  </View>
                  <View style={{ width: "100%" }}>
                    <Text></Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "50%",
                    marginLeft: "10px",
                  }}
                >
                  <View style={{ marginRight: "20px" }}>
                    <Text>Kode Pos</Text>
                  </View>
                  <View
                    style={{ borderBottom: "1px solid black", width: "100%" }}
                  >
                    <Text>: {props.data?.asesi_skema.asesi.kodepos}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: "10px" }}>
              <View style={{ width: 230 }}>
                <Text>No.Telepon / Email</Text>
              </View>
              <View style={{ flexDirection: "row", width: "100%" }}>
                <View style={{ flexDirection: "row", width: "50%" }}>
                  <View style={{ marginRight: "10px", marginRight: "20px" }}>
                    <Text>: Rumah</Text>
                  </View>
                  <View
                    style={{ borderBottom: "1px solid black", width: "100%" }}
                  >
                    <Text>: {props.data?.asesi_skema.asesi.telp}</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "50%",
                    marginLeft: "10px",
                  }}
                >
                  <View style={{ marginRight: "20px" }}>
                    <Text>Kantor</Text>
                  </View>
                  <View
                    style={{ borderBottom: "1px solid black", width: "100%" }}
                  >
                    <Text>: {props.data?.asesi_skema.asesi.telp_kantor}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: "10px" }}>
              <View style={{ width: 230 }}>
                <Text></Text>
              </View>
              <View style={{ flexDirection: "row", width: "100%" }}>
                <View style={{ flexDirection: "row", width: "50%" }}>
                  <View style={{ marginRight: "10px", marginRight: "20px" }}>
                    <Text>: HP</Text>
                  </View>
                  <View
                    style={{ borderBottom: "1px solid black", width: "100%" }}
                  >
                    <Text>: {props.data?.asesi_skema.asesi.phone_number}</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "50%",
                    marginLeft: "10px",
                  }}
                >
                  <View style={{ marginRight: "20px" }}>
                    <Text>Email</Text>
                  </View>
                  <View
                    style={{ borderBottom: "1px solid black", width: "100%" }}
                  >
                    <Text>: {props.data?.asesi_skema.asesi.email}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: "10px" }}>
              <View style={{ width: 230 }}>
                <Text>Pendidikan Terakhir</Text>
              </View>
              <View
                style={{
                  borderBottom: "1px sold black",
                  width: "100%",
                }}
              >
                <Text>
                  :{props.data?.asesi_skema.asesi.kualifikasi_pendidikan}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            fontSize: "12px",
            paddingTop: "20px",
          }}
        >
          <Text style={{ fontWeight: 700 }}>b.</Text>
          <View style={{ paddingLeft: "10px" }}>
            <Text style={{ fontWeight: 700 }}>Data Pekerjaan Sekarang</Text>
            <View
              style={{
                flexDirection: "row",
                marginBottom: "10px",
                marginTop: "10px",
              }}
            >
              <View style={{ width: 230 }}>
                <Text>Nama Lembaga/ Perusahaan</Text>
              </View>
              <View
                style={{
                  borderBottom: "1px sold black",
                  width: "100%",
                }}
              >
                <Text>: {props.data?.asesi_skema.asesi.nama_instansi}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: "10px" }}>
              <View style={{ width: 230 }}>
                <Text>Jabatan</Text>
              </View>
              <View
                style={{
                  borderBottom: "1px sold black",
                  width: "100%",
                }}
              >
                <Text>: {props.data?.asesi_skema.asesi.jabatan}</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginBottom: "10px" }}>
              <View style={{ width: 230 }}>
                <Text>Alamat </Text>
              </View>
              <View
                style={{
                  borderBottom: "1px sold black",
                  width: "100%",
                }}
              >
                <Text>: {props.data?.asesi_skema.asesi.alamat_kantor}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: "10px" }}>
              <View style={{ width: 230 }}>
                <Text></Text>
              </View>
              <View style={{ flexDirection: "row", width: "100%" }}>
                <View style={{ flexDirection: "row", width: "50%" }}>
                  <View style={{ marginRight: "10px" }}>
                    <Text></Text>
                  </View>
                  <View style={{ width: "100%" }}>
                    <Text></Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "50%",
                    marginLeft: "10px",
                  }}
                >
                  <View style={{ marginRight: "20px" }}>
                    <Text>Kode Pos</Text>
                  </View>
                  <View
                    style={{ borderBottom: "1px solid black", width: "100%" }}
                  >
                    <Text>
                      : {props.data?.asesi_skema.asesi.kodepos_kantor}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: "10px" }}>
              <View style={{ width: 230 }}>
                <Text>No.Telp/Fax/Email</Text>
              </View>
              <View style={{ flexDirection: "row", width: "100%" }}>
                <View style={{ flexDirection: "row", width: "50%" }}>
                  <View style={{ marginRight: "10px", marginRight: "20px" }}>
                    <Text>: Telp</Text>
                  </View>
                  <View
                    style={{ borderBottom: "1px solid black", width: "100%" }}
                  >
                    <Text>: {props.data?.asesi_skema.asesi.telp_kantor}</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "50%",
                    marginLeft: "10px",
                  }}
                >
                  <View style={{ marginRight: "20px" }}>
                    <Text>Fax</Text>
                  </View>
                  <View
                    style={{ borderBottom: "1px solid black", width: "100%" }}
                  >
                    <Text>: {props.data?.asesi_skema.asesi.fax}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: "10px" }}>
              <View style={{ width: 230 }}>
                <Text></Text>
              </View>
              <View style={{ flexDirection: "row", width: "100%" }}>
                <View style={{ flexDirection: "row", width: "50%" }}>
                  <View style={{ marginRight: "10px", marginRight: "20px" }}>
                    <Text>: Email</Text>
                  </View>
                  <View
                    style={{ borderBottom: "1px solid black", width: "100%" }}
                  >
                    <Text>: {props.data?.asesi_skema.asesi.email_kantor}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{
            fontSize: "12px",
            fontWeight: 700,
            marginBottom: "20px",
            // marginTop: "100px",
          }}
        >
          Bagian 2 : Data Sertifikasi
        </Text>
        <Text
          style={{ fontSize: "12px", fontWeight: 700, marginBottom: "20px" }}
        >
          Tuliskan Judul dan Nomor Skema Sertifikasi, Tujuan Asesmen serta
          Daftar Unit Kompetensi sesuai kemasan pada skema sertifikasi yang anda
          ajukan untuk mendapatkan pengakuan sesuai dengan latar belakang
          pendidikan, pelatihan serta pengalaman kerja yang anda miliki.
        </Text>
        {/* table */}
        <View style={styles.table} break>
          <View style={styles.tableRow}>
            <View
              style={{
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
                widht: "30%",
              }}
            >
              <Text style={styles.tableCell}>
                Skema Sertifikasi/Klaster Asesmen
              </Text>
            </View>

            <View
              style={{
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
                width: "10%",
              }}
            >
              <View style={{ borderBottom: "1px solid black" }}>
                <Text style={styles.tableCell}>Judul</Text>
              </View>
              <Text style={styles.tableCell}>Nomor</Text>
            </View>
            <View
              style={{
                width: "5%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <View style={{ borderBottom: "1px solid black" }}>
                <Text style={styles.tableCell}>:</Text>
              </View>
              <Text style={styles.tableCell}>:</Text>
            </View>
            <View
              style={{
                width: "55%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <View style={{ borderBottom: "1px solid black" }}>
                <Text style={styles.tableCell}>
                  {props.data?.asesi_skema.skema.nama_skema}
                </Text>
              </View>
              <Text style={styles.tableCell}>
                {props.data?.asesi_skema.skema.no_skema}
              </Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View
              style={{
                width: "40%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>Tujuan Asesmen</Text>
            </View>
            <View
              style={{
                width: "5%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>:</Text>
            </View>
            <View
              style={{
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
                width: "20%",
              }}
            >
              <Text style={styles.tableCell}>Sertifikasi </Text>
            </View>
            <View
              style={{
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
                width: "20%",
              }}
            >
              <Text style={styles.tableCell}>Sertifikasi Ulang</Text>
            </View>
            <View
              style={{
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
                width: "15%",
              }}
            >
              <Text style={styles.tableCell}></Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            fontSize: "12px",
            fontWeight: 700,
            marginBottom: "6px",
            marginTop: "20px",
          }}
        >
          Daftar Unit Kompetensi :
        </Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View
              style={{
                width: "10%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>No.</Text>
            </View>
            <View
              style={{
                width: "30%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>Kode Unit</Text>
            </View>
            <View
              style={{
                width: "40%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>Judul Unit</Text>
            </View>
            <View
              style={{
                width: "20%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
                paddingHorizontal: "3px",
              }}
            >
              <Text style={styles.tableCell}>
                Jenis Standar (Standar Khusus/Standar Internasional/SKKNI)
              </Text>
            </View>
          </View>
          {props.data?.asesi_skema.skema.unitkompetensi.map((el, i) => (
            <View style={styles.tableRow}>
              <View
                style={{
                  width: "10%",
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderLeftWidth: 0,
                  borderTopWidth: 0,
                }}
              >
                <Text style={styles.tableCell}>{(i += 1)}</Text>
              </View>
              <View
                style={{
                  width: "30%",
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderLeftWidth: 0,
                  borderTopWidth: 0,
                }}
              >
                <Text style={styles.tableCell}>{el.kode_unit}</Text>
              </View>
              <View
                style={{
                  width: "40%",
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderLeftWidth: 0,
                  borderTopWidth: 0,
                  paddingHorizontal: "3px",
                }}
              >
                <Text style={styles.tableCell}>{el.judul_unit}</Text>
              </View>
              <View
                style={{
                  width: "20%",
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderLeftWidth: 0,
                  borderTopWidth: 0,
                }}
              >
                <Text style={styles.tableCell}>SKKNI</Text>
              </View>
            </View>
          ))}
        </View>
        <Text
          style={{
            fontSize: "12px",
            fontWeight: 700,
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          Bagian 3 : Bukti Kelengkapan Pemohon
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            fontSize: "12px",
            // paddingTop: "20px",
          }}
        >
          <Text style={{ fontWeight: 700 }}>a.</Text>
          <View style={{ paddingLeft: "10px", marginBottom: "6px" }}>
            <Text style={{ fontWeight: 700 }}>
              Bukti kelengkapan persyaratan dasar pemohon :
            </Text>
          </View>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View
              style={{
                width: "10%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>No.</Text>
            </View>
            <View
              style={{
                width: "50%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>Bukti Persyaratan</Text>
            </View>
            <View
              style={{
                width: "30%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <View style={{ borderBottom: "1px solid black" }}>
                <Text style={styles.tableCell}>Ada</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ borderRight: "1px solid black", width: "50%" }}>
                  <Text style={styles.tableCell}>memenuhi syarat</Text>
                </View>
                <View style={{ width: "50%" }}>
                  <Text style={styles.tableCell}>tidak memenuhi syarat</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "10%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>Tidak Ada</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View
              style={{
                width: "10%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>1.</Text>
            </View>
            <View
              style={{
                width: "50%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
                height: "70px",
              }}
            >
              <Text style={styles.tableCell}>
                Mahasiswa Institut STIAMI Jakarta yang telah menyelesaikan mata
                kuliah internal dan eksternal : Perencanaan dan Pengembangan
                Bisnis, MSDM, Organisai dan Manajemen Bisnis, Manajemen
                Operasional, Total Quality Manajemen, Atau Kewirausahaan
              </Text>
            </View>
            <View
              style={{
                width: "30%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
                height: "70px",
              }}
            >
              {/* <View style={{ borderBottom: "1px solid black" }}>
                <Text style={styles.tableCell}>:Ada</Text>
              </View> */}
              <View style={{ flexDirection: "row", height: "100%" }}>
                <View style={{ borderRight: "1px solid black", width: "50%" }}>
                  <View
                    style={{
                      width: "15px",
                      height: "15px",
                      border: "1px solid black",
                      marginHorizontal: 6,
                      marginVertical: 6,
                      // position: "absolute",
                    }}
                  >
                    <Image
                      style={{
                        width: "15px",
                        display:
                          props?.data?.asesi_skema.asesi.transkrip !== null
                            ? "block"
                            : "none",
                      }}
                      src="/check.png"
                    ></Image>
                  </View>
                </View>
                <View style={{ width: "50%" }}>
                  <View
                    style={{
                      width: "15px",
                      height: "15px",
                      border: "1px solid black",
                      marginHorizontal: 6,
                      marginVertical: 6,
                      // position: "absolute",
                    }}
                  >
                    <Image
                      style={{
                        width: "15px",
                        display:
                          props?.data?.asesi_skema.asesi.transkrip === null
                            ? "block"
                            : "none",
                      }}
                      src="/check.png"
                    ></Image>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "10%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>Tidak Ada</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View
              style={{
                width: "10%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>2.</Text>
            </View>
            <View
              style={{
                width: "50%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
                height: "50px",
              }}
            >
              <Text style={styles.tableCell}>
                {`Memiliki sertifikasi pelatihan berbasis kompetensi pada jabatan ${props?.data?.asesi_skema.skema.nama_skema} yang diselenggarakan oleh Institut STIAMI Jakarta`}
              </Text>
            </View>
            <View
              style={{
                width: "30%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
                height: "50px",
              }}
            >
              {/* <View style={{ borderBottom: "1px solid black" }}>
                <Text style={styles.tableCell}>:Ada</Text>
              </View> */}
              <View style={{ flexDirection: "row", height: "100%" }}>
                <View style={{ borderRight: "1px solid black", width: "50%" }}>
                  <View
                    style={{
                      width: "15px",
                      height: "15px",
                      border: "1px solid black",
                      marginHorizontal: 6,
                      marginVertical: 6,
                      // position: "absolute",
                    }}
                  >
                    <Image
                      style={{
                        width: "15px",
                        display:
                          props?.data?.asesi_skema.asesi
                            .sertifikat_pelatihan_pendukung !== null
                            ? "block"
                            : "none",
                      }}
                      src="/check.png"
                    ></Image>
                  </View>
                </View>
                <View style={{ width: "50%" }}>
                  <View
                    style={{
                      width: "15px",
                      height: "15px",
                      border: "1px solid black",
                      marginHorizontal: 6,
                      marginVertical: 6,
                      // position: "absolute",
                    }}
                  >
                    <Image
                      style={{
                        width: "15px",
                        display:
                          props?.data?.asesi_skema.asesi
                            .sertifikat_pelatihan_pendukung === null
                            ? "block"
                            : "none",
                      }}
                      src="/check.png"
                    ></Image>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "10%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>Tidak Ada</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View
              style={{
                width: "10%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>3.</Text>
            </View>
            <View
              style={{
                width: "50%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>
                Copy Ijazah terakhir (SLTA/sederajat)
              </Text>
            </View>
            <View
              style={{
                width: "30%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              {/* <View style={{ borderBottom: "1px solid black" }}>
                <Text style={styles.tableCell}>:Ada</Text>
              </View> */}
              <View style={{ flexDirection: "row" }}>
                <View style={{ borderRight: "1px solid black", width: "50%" }}>
                  <View
                    style={{
                      width: "15px",
                      height: "15px",
                      border: "1px solid black",
                      marginHorizontal: 6,
                      marginVertical: 6,
                      // position: "absolute",
                    }}
                  >
                    <Image
                      style={{
                        width: "15px",
                        display:
                          props?.data?.asesi_skema.asesi.ijazah !== null
                            ? "block"
                            : "none",
                      }}
                      src="/check.png"
                    ></Image>
                  </View>
                </View>
                <View style={{ width: "50%" }}>
                  <View
                    style={{
                      width: "15px",
                      height: "15px",
                      border: "1px solid black",
                      marginHorizontal: 6,
                      marginVertical: 6,
                      // position: "absolute",
                    }}
                  >
                    <Image
                      style={{
                        width: "15px",
                        display:
                          props?.data?.asesi_skema.asesi.ijazah === null
                            ? "block"
                            : "none",
                      }}
                      src="/check.png"
                    ></Image>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "10%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>Tidak Ada</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View
              style={{
                width: "10%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>4.</Text>
            </View>
            <View
              style={{
                width: "50%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>Copy KTP</Text>
            </View>
            <View
              style={{
                width: "30%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              {/* <View style={{ borderBottom: "1px solid black" }}>
                <Text style={styles.tableCell}>:Ada</Text>
              </View> */}
              <View style={{ flexDirection: "row" }}>
                <View style={{ borderRight: "1px solid black", width: "50%" }}>
                  <View
                    style={{
                      width: "15px",
                      height: "15px",
                      border: "1px solid black",
                      marginHorizontal: 6,
                      marginVertical: 6,
                      // position: "absolute",
                    }}
                  >
                    <Image
                      style={{
                        width: "15px",
                        display:
                          props?.data?.asesi_skema.asesi.img_ktp !== null
                            ? "block"
                            : "none",
                      }}
                      src="/check.png"
                    ></Image>
                  </View>
                </View>
                <View style={{ width: "50%" }}>
                  <View
                    style={{
                      width: "15px",
                      height: "15px",
                      border: "1px solid black",
                      marginHorizontal: 6,
                      marginVertical: 6,
                      // position: "absolute",
                    }}
                  >
                    <Image
                      style={{
                        width: "15px",
                        display:
                          props?.data?.asesi_skema.asesi.img_ktp === null
                            ? "block"
                            : "none",
                      }}
                      src="/check.png"
                    ></Image>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "10%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>Tidak Ada</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View
              style={{
                width: "10%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>5.</Text>
            </View>
            <View
              style={{
                width: "50%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>
                Pas foto 3x4 berlatar warna merah sebanyak 2 lembar
              </Text>
            </View>
            <View
              style={{
                width: "30%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              {/* <View style={{ borderBottom: "1px solid black" }}>
                <Text style={styles.tableCell}>:Ada</Text>
              </View> */}
              <View style={{ flexDirection: "row" }}>
                <View style={{ borderRight: "1px solid black", width: "50%" }}>
                  <View
                    style={{
                      width: "15px",
                      height: "15px",
                      border: "1px solid black",
                      marginHorizontal: 6,
                      marginVertical: 6,
                      // position: "absolute",
                    }}
                  >
                    <Image
                      style={{
                        width: "15px",
                        display:
                          props?.data?.asesi_skema.asesi.pas_foto !== null
                            ? "block"
                            : "none",
                      }}
                      src="/check.png"
                    ></Image>
                  </View>
                </View>
                <View style={{ width: "50%" }}>
                  <View
                    style={{
                      width: "15px",
                      height: "15px",
                      border: "1px solid black",
                      marginHorizontal: 6,
                      marginVertical: 6,
                      // position: "absolute",
                    }}
                  >
                    <Image
                      style={{
                        width: "15px",
                        display:
                          props?.data?.asesi_skema.asesi.pas_foto === null
                            ? "block"
                            : "none",
                      }}
                      src="/check.png"
                    ></Image>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "10%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>Tidak Ada</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View
              style={{
                width: "10%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>6.</Text>
            </View>
            <View
              style={{
                width: "50%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>
                Surat pernyataan tidak merekam (bermaterai)
              </Text>
            </View>
            <View
              style={{
                width: "30%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              {/* <View style={{ borderBottom: "1px solid black" }}>
                <Text style={styles.tableCell}>:Ada</Text>
              </View> */}
              <View style={{ flexDirection: "row" }}>
                <View style={{ borderRight: "1px solid black", width: "50%" }}>
                  <View
                    style={{
                      width: "15px",
                      height: "15px",
                      border: "1px solid black",
                      marginHorizontal: 6,
                      marginVertical: 6,
                      // position: "absolute",
                    }}
                  >
                    <Image
                      style={{
                        width: "15px",
                        display:
                          props?.data?.asesi_skema.asesi.surat_pernyataan !==
                          null
                            ? "block"
                            : "none",
                      }}
                      src="/check.png"
                    ></Image>
                  </View>
                </View>
                <View style={{ width: "50%" }}>
                  <View
                    style={{
                      width: "15px",
                      height: "15px",
                      border: "1px solid black",
                      marginHorizontal: 6,
                      marginVertical: 6,
                      // position: "absolute",
                    }}
                  >
                    <Image
                      style={{
                        width: "15px",
                        display:
                          props?.data?.asesi_skema.asesi.surat_pernyataan ===
                          null
                            ? "block"
                            : "none",
                      }}
                      src="/check.png"
                    ></Image>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "10%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>Tidak Ada</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            fontSize: "12px",
            paddingTop: "20px",
          }}
          break
        >
          <Text style={{ fontWeight: 700 }}>b.</Text>
          <View style={{ paddingLeft: "10px", marginBottom: "6px" }}>
            <Text style={{ fontWeight: 700 }}>
              Bukti kompetensi yang relevan :
            </Text>
          </View>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View
              style={{
                width: "10%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>No.</Text>
            </View>
            <View
              style={{
                width: "60%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>
                Rincian Bukti Pendidikan/Pelatihan, Pengalaman Kerja, Pengalaman
                Hidup
              </Text>
            </View>
            <View
              style={{
                width: "30%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <View style={{ borderBottom: "1px solid black" }}>
                <Text style={styles.tableCell}>Lampiran Bukti</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ borderRight: "1px solid black", width: "50%" }}>
                  <Text style={styles.tableCell}>ada</Text>
                </View>
                <View style={{ width: "50%" }}>
                  <Text style={styles.tableCell}>ridak ada</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View
              style={{
                width: "10%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>1.</Text>
            </View>
            <View
              style={{
                width: "60%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>Bukti Persyaratan</Text>
            </View>
            <View
              style={{
                width: "30%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              {/* <View style={{ borderBottom: "1px solid black" }}>
                <Text style={styles.tableCell}>:Ada</Text>
              </View> */}
              <View style={{ flexDirection: "row" }}>
                <View style={{ borderRight: "1px solid black", width: "50%" }}>
                  <Text style={styles.tableCell}>memenuhi syarat</Text>
                </View>
                <View style={{ width: "50%" }}>
                  <Text style={styles.tableCell}>tidak memenuhi syarat</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View
              style={{
                width: "10%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>2.</Text>
            </View>
            <View
              style={{
                width: "60%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>Bukti Persyaratan</Text>
            </View>
            <View
              style={{
                width: "30%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              {/* <View style={{ borderBottom: "1px solid black" }}>
                <Text style={styles.tableCell}>:Ada</Text>
              </View> */}
              <View style={{ flexDirection: "row" }}>
                <View style={{ borderRight: "1px solid black", width: "50%" }}>
                  <Text style={styles.tableCell}>memenuhi syarat</Text>
                </View>
                <View style={{ width: "50%" }}>
                  <Text style={styles.tableCell}>tidak memenuhi syarat</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View
              style={{
                width: "10%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>3.</Text>
            </View>
            <View
              style={{
                width: "60%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>Bukti Persyaratan</Text>
            </View>
            <View
              style={{
                width: "30%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              {/* <View style={{ borderBottom: "1px solid black" }}>
                <Text style={styles.tableCell}>:Ada</Text>
              </View> */}
              <View style={{ flexDirection: "row" }}>
                <View style={{ borderRight: "1px solid black", width: "50%" }}>
                  <Text style={styles.tableCell}>memenuhi syarat</Text>
                </View>
                <View style={{ width: "50%" }}>
                  <Text style={styles.tableCell}>tidak memenuhi syarat</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View
              style={{
                width: "10%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>4.</Text>
            </View>
            <View
              style={{
                width: "60%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>Bukti Persyaratan</Text>
            </View>
            <View
              style={{
                width: "30%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              {/* <View style={{ borderBottom: "1px solid black" }}>
                <Text style={styles.tableCell}>:Ada</Text>
              </View> */}
              <View style={{ flexDirection: "row" }}>
                <View style={{ borderRight: "1px solid black", width: "50%" }}>
                  <Text style={styles.tableCell}>memenuhi syarat</Text>
                </View>
                <View style={{ width: "50%" }}>
                  <Text style={styles.tableCell}>tidak memenuhi syarat</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View
              style={{
                width: "10%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>5.</Text>
            </View>
            <View
              style={{
                width: "60%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>Bukti Persyaratan</Text>
            </View>
            <View
              style={{
                width: "30%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              {/* <View style={{ borderBottom: "1px solid black" }}>
                <Text style={styles.tableCell}>:Ada</Text>
              </View> */}
              <View style={{ flexDirection: "row" }}>
                <View style={{ borderRight: "1px solid black", width: "50%" }}>
                  <Text style={styles.tableCell}>memenuhi syarat</Text>
                </View>
                <View style={{ width: "50%" }}>
                  <Text style={styles.tableCell}>tidak memenuhi syarat</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View
              style={{
                width: "10%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>6.</Text>
            </View>
            <View
              style={{
                width: "60%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>Bukti Persyaratan</Text>
            </View>
            <View
              style={{
                width: "30%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              {/* <View style={{ borderBottom: "1px solid black" }}>
                <Text style={styles.tableCell}>:Ada</Text>
              </View> */}
              <View style={{ flexDirection: "row" }}>
                <View style={{ borderRight: "1px solid black", width: "50%" }}>
                  <Text style={styles.tableCell}>memenuhi syarat</Text>
                </View>
                <View style={{ width: "50%" }}>
                  <Text style={styles.tableCell}>tidak memenuhi syarat</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{
            paddingTop: "8px",
            paddingBottom: "20px",
            fontSize: "8px",
          }}
        >
          * Diisi oleh LSP
        </Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View
              style={{
                width: "50%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>Rekomendasi (diisi oleh LSP)</Text>
              <Text style={styles.tableCell}>
                Berdasarkan ketentuan persyaratan dasar pemohon,maka pemohon:
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    margin: "auto",
                    marginTop: 5,
                    fontSize: 10,
                  }}
                >
                  Diterima
                </Text>
                {/* <Text
                  style={{
                    margin: "auto",
                    marginTop: 5,
                    fontSize: 10,
                    // textDecoration: "lineThrough",
                  }}
                >
                  /
                </Text>
                <Text
                  style={{
                    margin: "auto",
                    marginTop: 5,
                    fontSize: 10,
                    textDecoration: "line-through",
                  }}
                >
                  Tidak diterima
                </Text> */}
                <Text
                  style={{
                    margin: "auto",
                    marginTop: 5,
                    fontSize: 10,
                    // textDecoration: "lineThrough",
                  }}
                >
                  *sebagai peserta sertifikasi
                </Text>
              </View>
              {/* <Text style={styles.tableCell}>* coret yang tidak sesuai</Text> */}
            </View>
            <View
              style={{
                width: "50%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <View style={{ borderBottom: "1px solid black" }}>
                <Text style={styles.tableCell}>Pemohon:</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderBottom: "1px solid black",
                }}
              >
                <View style={{ borderRight: "1px solid black", width: "40%" }}>
                  <Text style={styles.tableCell}>Nama</Text>
                </View>
                <View style={{ width: "60%" }}>
                  <Text style={styles.tableCell}>
                    {props?.data?.asesi_skema.asesi.nama_lengkap}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ borderRight: "1px solid black", width: "40%" }}>
                  <Text style={styles.tableCell}>Tanda Tangan/Tanggal</Text>
                </View>
                <View style={{ width: "60%" }}>
                  <Image
                    style={{ width: 100, height: 100 }}
                    src={`/download-asesi/${
                      props.data.asesi_skema.asesi.ttd_asesi.split("/")[4]
                    }`}
                  ></Image>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View
              style={{
                width: "50%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <Text style={styles.tableCell}>Catatan:</Text>
              <Text></Text>
            </View>
            <View
              style={{
                width: "50%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <View style={{ borderBottom: "1px solid black" }}>
                <Text style={styles.tableCell}>Admin LSP:</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderBottom: "1px solid black",
                }}
              >
                <View style={{ borderRight: "1px solid black", width: "40%" }}>
                  <Text style={styles.tableCell}>Nama</Text>
                </View>
                <View style={{ width: "60%" }}>
                  <Text style={styles.tableCell}>{props.data.admins.nama}</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ borderRight: "1px solid black", width: "40%" }}>
                  <Text style={styles.tableCell}>Tanda Tangan/Tanggal</Text>
                </View>
                <View style={{ width: "60%" }}>
                  <Image
                    style={{ width: 100, height: 100 }}
                    src={`/download-admin/${
                      props.data.admins.ttd_admin.split("/")[4]
                    }`}
                  ></Image>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* footer */}
        <View style={styles.pageNumber} fixed>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderTop: "1px solid black",
            }}
          >
            <Text style={{ justifyContent: "flex-start", paddingVertical: 6 }}>
              KOMISI SERTIFIKASI BNSP
            </Text>

            <Text
              style={{
                flex: 1,
                textAlign: "right",
                paddingVertical: 6,
                paddingRight: "10px",
              }}
            >
              FORM APL-01-2018
            </Text>

            <Text
              style={{
                width: 30,
                paddingVertical: "5px",
                backgroundColor: "red",
                //   display: "flex",
                justifyContent: "flex-end",
                textAlign: "center",
              }}
              render={({ pageNumber, totalPages }) => `${pageNumber} `}
            ></Text>
          </View>
        </View>

        {/* <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        /> */}
      </Page>
    </Document>
  );
};

export default function DownloadPdf(props) {
  console.log(props.data, "props kiri");

  if (Object.keys(props.data).length > 0) {
    return (
      <>
        {/* <PDFViewer>
          <DocumentPdf />
        </PDFViewer> */}
        <PDFDownloadLink
          document={<DocumentPdf data={props?.data} />}
          fileName={`apl01_${props.data.asesi_skema.asesi.nama_lengkap}.pdf`}
        >
          {({ blob, url, loading, error }) =>
            loading ? (
              "Loading document..."
            ) : (
              <Button
                variant="outlined"
                // disabled={asesiskemabyuser.map((el) => {
                //   el.status_cek === "sudah-dicek" ? false : true;
                // })}

                sx={{
                  fontWeight: 700,
                  textTransform: "none",
                  marginRight: "10px",
                }}
              >
                Download PDF
              </Button>
            )
          }
        </PDFDownloadLink>
      </>
    );
  }
  return <div></div>;
}