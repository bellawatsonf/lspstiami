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
// import style from "./style.module.css";
import { Button } from "@mui/material";
import { Fragment } from "react";

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
    paddingBottom: 5,
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
  console.log(
    encodeURI(props?.data?.asesi_skema.asesi.ttd_asesi),
    "dr document"
  );

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
                {props.data?.asesi_skema.asesi.nama_lengkap === "null" ? (
                  <Text>:</Text>
                ) : (
                  <Text>: {props.data?.asesi_skema.asesi.nama_lengkap}</Text>
                )}
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
                {props.data?.asesi_skema.asesi.jenis_kelamin === "null" ? (
                  <Text>:</Text>
                ) : (
                  <Text>: {props.data?.asesi_skema.asesi.jenis_kelamin}</Text>
                )}
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
                {props.data?.asesi_skema.asesi.kebangsaan === "null" ? (
                  <Text>:</Text>
                ) : (
                  <Text>: {props.data?.asesi_skema.asesi.kebangsaan}</Text>
                )}
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
                {props.data?.asesi_skema.asesi.alamat_rumah === "null" ? (
                  <Text>:</Text>
                ) : (
                  <Text>: {props.data?.asesi_skema.asesi.alamat_rumah}</Text>
                )}
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
                    {props.data?.asesi_skema.asesi.kodepos === "null" ? (
                      <Text>:</Text>
                    ) : (
                      <Text>: {props.data?.asesi_skema.asesi.kodepos}</Text>
                    )}
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
                    {props.data?.asesi_skema.asesi.telp === "null" ? (
                      <Text>:</Text>
                    ) : (
                      <Text>: {props.data?.asesi_skema.asesi.telp}</Text>
                    )}
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
                    {props.data?.asesi_skema.asesi.telp_kantor === "null" ? (
                      <Text>:</Text>
                    ) : (
                      <Text>: {props.data?.asesi_skema.asesi.telp_kantor}</Text>
                    )}
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
                    {props.data?.asesi_skema.asesi.phone_number === "null" ? (
                      <Text>:</Text>
                    ) : (
                      <Text>
                        : {props.data?.asesi_skema.asesi.phone_number}
                      </Text>
                    )}
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
                    {props.data?.asesi_skema.asesi.email === "null" ? (
                      <Text>:</Text>
                    ) : (
                      <Text>: {props.data?.asesi_skema.asesi.email}</Text>
                    )}
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
                {props.data?.asesi_skema.asesi.kualifikasi_pendidikan ===
                "null" ? (
                  <Text>:</Text>
                ) : (
                  <Text>
                    : {props.data?.asesi_skema.asesi.kualifikasi_pendidikan}
                  </Text>
                )}
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
                {props.data?.asesi_skema.asesi.nama_instansi === "null" ? (
                  <Text>:</Text>
                ) : (
                  <Text>: {props.data?.asesi_skema.asesi.nama_instansi}</Text>
                )}
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
                {props.data?.asesi_skema.asesi.jabatan === "null" ? (
                  <Text>:</Text>
                ) : (
                  <Text>: {props.data?.asesi_skema.asesi.jabatan}</Text>
                )}
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
                {props.data?.asesi_skema.asesi.alamat_kantor === "null" ? (
                  <Text>:</Text>
                ) : (
                  <Text>: {props.data?.asesi_skema.asesi.alamat_kantor}</Text>
                )}
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
                    {props.data?.asesi_skema.asesi.kodepos_kantor === "null" ? (
                      <Text>:</Text>
                    ) : (
                      <Text>
                        : {props.data?.asesi_skema.asesi.kodepos_kantor}
                      </Text>
                    )}
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
                    {props.data?.asesi_skema.asesi.telp_kantor === "null" ? (
                      <Text>:</Text>
                    ) : (
                      <Text>: {props.data?.asesi_skema.asesi.telp_kantor}</Text>
                    )}
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
                    {props.data?.asesi_skema.asesi.fax === "null" ? (
                      <Text>:</Text>
                    ) : (
                      <Text>: {props.data?.asesi_skema.asesi.fax}</Text>
                    )}
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
                    {props.data?.asesi_skema.asesi.email_kantor === "null" ? (
                      <Text></Text>
                    ) : (
                      <Text>{props.data?.asesi_skema.asesi.email_kantor}</Text>
                    )}
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
                width: "30%",
              }}
            >
              <Text style={{ marginTop: 10, fontSize: 10, paddingLeft: "3px" }}>
                Skema Sertifikasi / Klaster Asesmen
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
              <View
                style={{
                  borderBottom: "1px solid black",
                  paddingTop: "2px",
                  height: "35px",
                }}
              >
                <Text
                  style={{
                    margin: "auto",
                    marginTop: 5,
                    fontSize: 10,
                    paddingBottom: 5,
                    marginTop: "10px",
                  }}
                >
                  Judul
                </Text>
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
              <View
                style={{
                  borderBottom: "1px solid black",
                  paddingTop: "2px",
                  height: "35px",
                }}
              >
                <Text
                  style={{
                    margin: "auto",
                    marginTop: 5,
                    fontSize: 10,
                    paddingBottom: 5,
                    marginTop: "10px",
                  }}
                >
                  :
                </Text>
              </View>
              <Text style={styles.tableCell}>:</Text>
            </View>
            {/* <View
              style={{
                width: "55%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <View
                style={{ borderBottom: "1px solid black", paddingTop: "2px" }}
              >
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 10,
                    paddingLeft: "3px",
                    paddingBottom: "4px",
                  }}
                >
                  {props.data?.asesi_skema.skema.nama_skema}
                </Text>
              </View>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 10,
                  paddingLeft: "3px",
                  // paddingBottom: "4px",
                }}
              >
                {props.data?.asesi_skema.skema.no_skema}
              </Text>
            </View> */}
            <View
              style={{
                width: "55%",
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <View
                style={{
                  borderBottom: "1px solid black",
                  paddingTop: "2px",
                  height: "35px",
                }}
                wrap
              >
                <Text
                  style={{
                    marginLeft: "3px",
                    marginTop: 5,
                    fontSize: 10,
                    paddingBottom: 5,
                  }}
                >
                  {" "}
                  {props.data?.asesi_skema.skema.nama_skema}
                </Text>
              </View>
              <Text
                style={{
                  marginLeft: "3px",
                  marginTop: 5,
                  fontSize: 10,
                  paddingBottom: 5,
                }}
              >
                {" "}
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
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 10,
                  paddingLeft: "3px",
                  paddingBottom: "3px",
                }}
              >
                Tujuan Asesmen
              </Text>
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
              <View style={{ flexDirection: "row" }}>
                {/* <View style={{ borderRight: "1px solid black", width: "100%" }}> */}
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
                        props?.data?.asesi_skema.asesi.tujuan_asesmen ===
                        "sertifikasi"
                          ? "block"
                          : "none",
                    }}
                    src="/check.png"
                  >
                    {" "}
                  </Image>
                </View>
                <Text
                  style={{
                    marginTop: 7,
                    marginLeft: "2px",
                    fontSize: 10,
                    paddingBottom: 5,
                  }}
                >
                  Sertifikasi{" "}
                </Text>
                {/* </View> */}
              </View>
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
              <View style={{ flexDirection: "row" }}>
                {/* <View style={{ borderRight: "1px solid black", width: "100%" }}> */}
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
                        props?.data?.asesi_skema.asesi.tujuan_asesmen !==
                        "sertifikasi"
                          ? "block"
                          : "none",
                    }}
                    src="/check.png"
                  >
                    {" "}
                  </Image>
                </View>
                <Text
                  style={{
                    marginTop: 7,
                    marginLeft: "2px",
                    fontSize: 10,
                    paddingBottom: 5,
                  }}
                >
                  Sertifikasi Ulang{" "}
                </Text>
                {/* </View> */}
              </View>
            </View>
            {/* <View
              style={{
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0,
                width: "20%",
              }}
            >
              <Text style={styles.tableCell}>Sertifikasi Ulang</Text>
            </View> */}
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
              <Text
                style={{
                  marginTop: 15,
                  fontSize: 10,
                  paddingLeft: "3px",
                  paddingBottom: "3px",
                  margin: "auto",
                }}
              >
                No.
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
              <Text
                style={{
                  marginTop: 15,
                  fontSize: 10,
                  paddingLeft: "3px",
                  paddingBottom: "3px",
                  margin: "auto",
                }}
              >
                Kode Unit
              </Text>
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
              <Text
                style={{
                  marginTop: 15,
                  fontSize: 10,
                  paddingLeft: "3px",
                  paddingBottom: "3px",
                  margin: "auto",
                }}
              >
                Judul Unit
              </Text>
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
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 10,
                    paddingBottom: 5,
                    // paddingLeft: "3px",
                    margin: "auto",
                  }}
                >
                  {el.kode_unit}
                </Text>
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
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 10,
                    paddingBottom: 5,
                    paddingLeft: "3px",
                  }}
                >
                  {el.judul_unit}
                </Text>
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
          break
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
              <Text
                style={{
                  margin: "auto",
                  marginTop: 5,
                  fontSize: 10,
                  paddingTop: "20px",
                }}
              >
                No.
              </Text>
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
              <Text
                style={{
                  margin: "auto",
                  marginTop: 5,
                  fontSize: 10,
                  paddingTop: "20px",
                }}
              >
                Bukti Persyaratan
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
                <Text style={styles.tableCell}>Ada</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    borderRight: "1px solid black",
                    width: "50%",
                    paddingBottom: "10px",
                    // paddingTop: "10px",
                  }}
                >
                  <Text
                    style={{
                      margin: "auto",
                      marginTop: 6,
                      fontSize: 10,
                      marginLeft: "2px",
                      marginRight: "2px",
                      textAlign: "center",
                    }}
                  >
                    memenuhi syarat
                  </Text>
                </View>
                <View
                  style={{
                    width: "50%",
                    paddingBottom: "10px",
                    // paddingTop: "10px",
                  }}
                >
                  <Text
                    style={{
                      margin: "auto",
                      marginTop: 6,
                      fontSize: 10,
                      marginLeft: "2px",
                      marginRight: "2px",
                      textAlign: "center",
                    }}
                  >
                    tidak memenuhi syarat
                  </Text>
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
              <Text
                style={{
                  margin: "auto",
                  marginTop: 5,
                  fontSize: 10,
                  paddingTop: "20px",
                }}
              >
                Tidak Ada
              </Text>
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
              {props.data?.asesi_skema.skema.id === 1 ? (
                <Text
                  style={{
                    marginLeft: "3px",
                    marginRight: "3px",
                    marginTop: 5,
                    fontSize: 10,
                  }}
                >
                  Mahasiswa S1 Prodi Manajemen Logistik Institut Ilmu Sosial dan
                  Manajemen STIAMI yang telah menyelesaikan mata kuliah
                  Manajemen Pergudangan, Pengantar Ilmu Logistik and Supply
                  Chain, Manajemen Distribusi.
                </Text>
              ) : props.data?.asesi_skema.skema.id === 2 ? (
                <Text
                  style={{
                    marginLeft: "3px",
                    marginRight: "3px",
                    marginTop: 5,
                    fontSize: 10,
                  }}
                >
                  Mahasiswa aktif S1 Prodi Manajemen Komunikasi lnstitut STIAMI
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
                  mahasiswa STIAMI yang masih berlaku.
                </Text>
              ) : props.data?.asesi_skema.skema.id === 3 ? (
                <Text
                  style={{
                    marginLeft: "3px",
                    marginRight: "3px",
                    marginTop: 5,
                    fontSize: 10,
                  }}
                >
                  Mahasiswa Prodi Administrasi Bisnis Institut Ilmu Sosial dan
                  Manajemen STIAMI yang telah menyelesaikan mata kuliah internal
                  dan eksternal : Perencanaan dan Pengembangan Bisnis, MSDM,
                  Organisasi dan Manajemen Bisnis, Manajemen Operasional.
                </Text>
              ) : props.data?.asesi_skema.skema.id === 4 ? (
                <Text
                  style={{
                    marginLeft: "3px",
                    marginRight: "3px",
                    marginTop: 5,
                    fontSize: 10,
                  }}
                >
                  Mahasiswa aktif S1 program studi Manajemen Komunikasi Institut
                  Ilmu Sosial dan Manajemen STIAMI yang telah menyelesaikan mata
                  kuliah dan dinyatakan lulus pada mata kuliah Pendidikan Adab,
                  Pengantar Manajemen, Dasar Dasar Akuntansi, Dasar Dasar
                  Jurnalistik, Komunikasi Massa, Kepemimpinan, Fotografi,
                  Manajemen Produksi Siaran Televisi, Tehnik Wawancara,
                  Penulisan Berita, Perencanaan Media, Post Production &
                  Editing, Etika dan fiilsafat KomuniLasi, JurnaTistik Foto,
                  Rules & Ethics, Computer Mediated Communication, Print Media
                  Management, Social Media Management, Kebijakan Media,
                  Jurnalistik Foto.
                </Text>
              ) : props.data?.asesi_skema.skema.id === 5 ? (
                <Text
                  style={{
                    marginLeft: "3px",
                    marginRight: "3px",
                    marginTop: 5,
                    fontSize: 10,
                  }}
                >
                  Mahasiswa S1 prodi Ilmu Administrasi Publik Institut Ilmu
                  Sosial dan Manajemen STIAMI yang telah menyelesaikan mata
                  kuliah Kebijakan Publik, Analisis Kebijakan Publik atau
                  Komunikasi dan Advokasi Kebijakan.
                </Text>
              ) : props.data?.asesi_skema.skema.id === 6 ? (
                <Text
                  style={{
                    marginLeft: "3px",
                    marginRight: "3px",
                    marginTop: 5,
                    fontSize: 10,
                  }}
                >
                  Mahasiswa S1 Prodi Ilmu Administrasi Publik Institut Ilmu
                  Sosial dan Manajemen STIAMI yang telah menyelesaikan mata
                  kuliah Pengantar Perpajakan, Kebijakan dan Adm. Pajak
                  Penghasilan I, Kebijakan dan Adm. Pajak Penghasilan II, dan
                  Praktikum Adm. PPh
                </Text>
              ) : props.data?.asesi_skema.skema.id === 7 ? (
                <Text
                  style={{
                    marginLeft: "3px",
                    marginRight: "3px",
                    marginTop: 5,
                    fontSize: 10,
                  }}
                >
                  Mahasiswa S1 Prodi Manajemen Logistik Institut Ilmu Sosial dan
                  Manajemen STIAMI yang telah menyelesaikan mata kuliah
                  Pengantar Ilmu Logistik dan Supply Chain, Manajemen
                  Pergudangan, Manajemen Distribusi, Etika Dan Komunikasi
                  Bisnis, Manajemen Proyek Supply Chain.
                </Text>
              ) : props.data?.asesi_skema.skema.id === 8 ? (
                <Text
                  style={{
                    marginLeft: "3px",
                    marginRight: "3px",
                    marginTop: 5,
                    fontSize: 10,
                  }}
                >
                  Mahasiswa S1 Prodi Manajemen Komunikasi Institut Ilmu Sosial
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
                  & External Relations
                </Text>
              ) : props.data?.asesi_skema.skema.id === 9 ? (
                <Text
                  style={{
                    marginLeft: "3px",
                    marginRight: "3px",
                    marginTop: 5,
                    fontSize: 10,
                  }}
                >
                  Mahasiswa Institut Ilmu Sosial dan Manajemen STIAMI yang telah
                  menyelesaikan mata kuliah Public Relation, Service Excellence,
                  MSDM Pariwisata, Psikologi Pelayanan Pariwisata, Analisis
                  Operasional Hospitaliti; atau;
                </Text>
              ) : (
                <Text
                  style={{
                    marginLeft: "3px",
                    marginRight: "3px",
                    marginTop: 5,
                    fontSize: 10,
                  }}
                >
                  Mahasiswa Prodi Manajemen Komunikasi Institut Ilmu Sosial dan
                  Manajemen STIAMI yang telah menyelesaikan mata kuliah Brand
                  Management, MPR Writing, Corporate Relationship Management,
                  Integrated Marketing Communication, Negotiation Technique,
                  Marcom Program & Event Management, Manajemen Periklanan &
                  Branding, Etika PR dan Periklanan, Media Buying, Komunikasi
                  Visual dan Copywriting, Digital Marketing, Skill Presentasi.
                </Text>
              )}
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
              <Text style={styles.tableCell}></Text>
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
              <Text
                style={{
                  marginLeft: "3px",
                  marginRight: "3px",
                  marginTop: 5,
                  fontSize: 10,
                }}
              >
                {props.data?.asesi_skema.skema.id === 1 ? (
                  <Text
                    style={{
                      marginLeft: "3px",
                      marginRight: "3px",
                      marginTop: 5,
                      fontSize: 10,
                    }}
                  >
                    Memiliki sertifikat pelatihan berbasis kompetensi pada
                    Klaster Pengelolaan Sistem Pergudangan yang dilakukan oleh
                    Institut Ilmu Sosial dan Manajemen STIAMI
                  </Text>
                ) : props.data?.asesi_skema.skema.id === 2 ? (
                  <Text
                    style={{
                      marginLeft: "3px",
                      marginRight: "3px",
                      marginTop: 5,
                      fontSize: 10,
                    }}
                  >
                    Memiliki sertifikasi pelatihan berbasis kompetensi pada
                    jabatan KKNI Level 5 pada bidang kewirausahaan industri yang
                    dilakukan oleh Institut Ilmu Sosial dan Manajemen STIAMI
                  </Text>
                ) : props.data?.asesi_skema.skema.id === 3 ? (
                  <Text
                    style={{
                      marginLeft: "3px",
                      marginRight: "3px",
                      marginTop: 5,
                      fontSize: 10,
                    }}
                  >
                    Telah mengikuti pelatihan berbasis kompetensi dibidang
                    Penyelia ekspor yang dilakukan oleh Institut Ilmu Sosial dan
                    Manajemen STIAMI
                  </Text>
                ) : props.data?.asesi_skema.skema.id === 4 ? (
                  <Text
                    style={{
                      marginLeft: "3px",
                      marginRight: "3px",
                      marginTop: 5,
                      fontSize: 10,
                    }}
                  >
                    Memiliki sertifikat pelatihan berbasis kompetensi pada
                    jabatan Asisten Produser Produksi Program Televisi yang
                    dilakukan oleh Institut Ilmu Sosial dan Manajemen STIAMI
                  </Text>
                ) : props.data?.asesi_skema.skema.id === 5 ? (
                  <Text
                    style={{
                      marginLeft: "3px",
                      marginRight: "3px",
                      marginTop: 5,
                      fontSize: 10,
                    }}
                  >
                    Memiliki Sertifikat Pelatihan berbasis kompetensi pada
                    Analis Kebijakan Publik yang dilakukan oleh Institut Ilmu
                    Sosial dan Manajemen STIAMI
                  </Text>
                ) : props.data?.asesi_skema.skema.id === 6 ? (
                  <Text
                    style={{
                      marginLeft: "3px",
                      marginRight: "3px",
                      marginTop: 5,
                      fontSize: 10,
                    }}
                  >
                    Telah mengikuti pelatihan berbasis kompetensi Teknisi
                    Perpajakan PPh Badan Sektor Usaha Jasa Dan Perdagangan yang
                    dilakukan oleh Institut Ilmu Sosial dan Manajemen STIAMI
                  </Text>
                ) : props.data?.asesi_skema.skema.id === 7 ? (
                  <Text
                    style={{
                      marginLeft: "3px",
                      marginRight: "3px",
                      marginTop: 5,
                      fontSize: 10,
                    }}
                  >
                    Memiliki sertifikat pelatihan berbasis kompetensi pada
                    Okupasi Manajer Logistik Proyek yang dilakukan oleh Institut
                    Ilmu Sosial dan Manajemen STIAMI
                  </Text>
                ) : props.data?.asesi_skema.skema.id === 8 ? (
                  <Text
                    style={{
                      marginLeft: "3px",
                      marginRight: "3px",
                      marginTop: 5,
                      fontSize: 10,
                    }}
                  >
                    Memiliki sertifikat pelatihan berbasis kompetensi pada
                    Jabatan Public Relations Coordinator yang dilakukan oleh
                    Institut Ilmu Sosial dan Manajemen STIAMI
                  </Text>
                ) : props.data?.asesi_skema.skema.id === 9 ? (
                  <Text
                    style={{
                      marginLeft: "3px",
                      marginRight: "3px",
                      marginTop: 5,
                      fontSize: 10,
                    }}
                  >
                    Memiliki sertifikasi pelatihan berbasis kompetensi pada
                    jabatan Front Office Supervisor yang dilakukan oleh Institut
                    Ilmu Sosial dan Manajemen STIAMI
                  </Text>
                ) : (
                  <Text
                    style={{
                      marginLeft: "3px",
                      marginRight: "3px",
                      marginTop: 5,
                      fontSize: 10,
                    }}
                  >
                    Memiliki sertifikat pelatihan berbasis kompetensi pada Media
                    Planing Manajer yang dilakukan oleh Institut Ilmu Sosial dan
                    Manajemen STIAMI
                  </Text>
                )}
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
              <Text style={styles.tableCell}></Text>
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
              <Text
                style={{
                  marginLeft: "3px",
                  marginRight: "3px",
                  marginTop: 5,
                  fontSize: 10,
                }}
              >
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
              <Text style={styles.tableCell}></Text>
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
              <Text
                style={{
                  marginLeft: "3px",
                  marginRight: "3px",
                  marginTop: 5,
                  fontSize: 10,
                }}
              >
                Copy KTP
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
              <Text style={styles.tableCell}></Text>
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
              <Text
                style={{
                  marginLeft: "3px",
                  marginRight: "3px",
                  marginTop: 5,
                  fontSize: 10,
                }}
              >
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
              <Text style={styles.tableCell}></Text>
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
              <Text
                style={{
                  marginLeft: "3px",
                  marginRight: "3px",
                  marginTop: 5,
                  fontSize: 10,
                }}
              >
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
              <Text style={styles.tableCell}></Text>
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
              <Text
                style={{
                  margin: "auto",
                  marginTop: 15,
                  fontSize: 10,
                  // paddingBottom: 5,
                }}
              >
                No.
              </Text>
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
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 10,
                  paddingBottom: 5,
                  marginLeft: "3px",
                }}
              >
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
                  <Text style={styles.tableCell}>tidak ada</Text>
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
              <Text style={styles.tableCell}></Text>
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
                <View
                  style={{
                    borderRight: "1px solid black",
                    width: "50%",
                    color: "white",
                  }}
                >
                  <Text style={styles.tableCell}>memenuhi syarat</Text>
                </View>
                <View style={{ width: "50%", color: "white" }}>
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
              <Text style={styles.tableCell}></Text>
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
                <View
                  style={{
                    borderRight: "1px solid black",
                    width: "50%",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <Text style={styles.tableCell}></Text>
                </View>
                <View
                  style={{
                    width: "50%",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <Text style={styles.tableCell}></Text>
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
              <Text style={styles.tableCell}></Text>
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
                <View
                  style={{
                    borderRight: "1px solid black",
                    width: "50%",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <Text style={styles.tableCell}></Text>
                </View>
                <View
                  style={{
                    width: "50%",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <Text style={styles.tableCell}></Text>
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
              <Text style={styles.tableCell}></Text>
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
                <View
                  style={{
                    borderRight: "1px solid black",
                    width: "50%",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <Text style={styles.tableCell}></Text>
                </View>
                <View
                  style={{
                    width: "50%",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <Text style={styles.tableCell}></Text>
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
              <Text style={styles.tableCell}></Text>
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
                <View
                  style={{
                    borderRight: "1px solid black",
                    width: "50%",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <Text style={styles.tableCell}></Text>
                </View>
                <View
                  style={{
                    width: "50%",

                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <Text style={styles.tableCell}></Text>
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
              <Text style={styles.tableCell}></Text>
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
                <View
                  style={{
                    borderRight: "1px solid black",
                    width: "50%",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={{ width: "50%", color: "white" }}>
                  <Text style={styles.tableCell}></Text>
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
              <Text
                style={{
                  marginTop: 6,
                  marginLeft: "3px",
                  fontSize: 12,
                  paddingBottom: 4,
                  fontWeight: 700,
                }}
              >
                Rekomendasi (diisi oleh LSP)
              </Text>
              <Text
                style={{
                  marginLeft: "3px",
                  marginRight: "3px",
                  marginTop: 5,
                  fontSize: 10,
                  paddingBottom: 5,
                }}
              >
                Berdasarkan ketentuan persyaratan dasar pemohon,maka pemohon:
              </Text>
              {/* <View style={{ flexDirection: "row" }}> */}
              <Text
                style={{
                  // margin: "auto",
                  marginTop: 10,
                  fontSize: 10,
                  marginLeft: "3px",
                }}
              >
                Diterima sebagai peserta asesi
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
              {/* <Text
                  style={{
                    margin: "auto",
                    marginTop: 5,
                    fontSize: 10,
                    // textDecoration: "lineThrough",
                  }}
                >
                  *sebagai peserta sertifikasi
                </Text> */}
              {/* </View> */}
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
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 10,
                    paddingBottom: 5,
                    marginLeft: "3px",
                  }}
                >
                  Pemohon:
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderBottom: "1px solid black",
                }}
              >
                <View style={{ borderRight: "1px solid black", width: "40%" }}>
                  <Text
                    style={{
                      marginTop: 5,
                      fontSize: 10,
                      paddingBottom: 5,
                      marginLeft: "3px",
                    }}
                  >
                    Nama
                  </Text>
                </View>
                <View style={{ width: "60%" }}>
                  <Text
                    style={{
                      marginTop: 5,
                      fontSize: 10,
                      paddingBottom: 5,
                      marginLeft: "3px",
                    }}
                  >
                    {props?.data?.asesi_skema.asesi.nama_lengkap}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ borderRight: "1px solid black", width: "40%" }}>
                  <Text
                    style={{
                      marginTop: 5,
                      fontSize: 10,
                      marginLeft: "3px",
                      marginRight: "3px",
                      paddingTop: "20px",
                    }}
                  >
                    Tanda Tangan /
                  </Text>
                  <Text
                    style={{
                      marginTop: 5,
                      fontSize: 10,
                      paddingBottom: 5,
                      marginLeft: "3px",
                      marginRight: "3px",
                    }}
                  >
                    Tanggal
                  </Text>
                </View>
                <View style={{ width: "60%" }}>
                  <Image
                    style={{ width: 100, height: 100 }}
                    src={`/api/download-asesi/${
                      props.data.asesi_skema.asesi.ttd_asesi.split("/")[4]
                    }`}
                  ></Image>
                  <Text
                    style={{
                      marginTop: 5,
                      fontSize: 10,
                      paddingBottom: 5,
                      marginLeft: "3px",
                      marginRight: "3px",
                    }}
                  >
                    {
                      new Date(props.data.asesi_skema.createdAt)
                        .toISOString()
                        .split("T")[0]
                    }
                  </Text>
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
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 10,
                  paddingBottom: 5,
                  marginLeft: "3px",
                }}
              >
                Catatan:
              </Text>
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
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 10,
                    paddingBottom: 5,
                    marginLeft: "3px",
                  }}
                >
                  Admin LSP:
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderBottom: "1px solid black",
                }}
              >
                <View style={{ borderRight: "1px solid black", width: "40%" }}>
                  <Text
                    style={{
                      marginTop: 5,
                      fontSize: 10,
                      paddingBottom: 5,
                      marginLeft: "3px",
                    }}
                  >
                    Nama
                  </Text>
                </View>
                <View style={{ width: "60%" }}>
                  <Text
                    style={{
                      marginTop: 5,
                      fontSize: 10,
                      paddingBottom: 5,
                      marginLeft: "3px",
                    }}
                  >
                    {props.data.admins.nama}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ borderRight: "1px solid black", width: "40%" }}>
                  <Text
                    style={{
                      marginTop: 5,
                      fontSize: 10,
                      marginLeft: "3px",
                      marginRight: "3px",
                      paddingTop: "20px",
                    }}
                  >
                    Tanda Tangan /
                  </Text>
                  <Text
                    style={{
                      marginTop: 5,
                      fontSize: 10,
                      paddingBottom: 5,
                      marginLeft: "3px",
                      marginRight: "3px",
                    }}
                  >
                    Tanggal
                  </Text>
                </View>
                <View style={{ width: "60%" }}>
                  <Image
                    style={{ width: 100, height: 100 }}
                    src={`/api/download-admin/${
                      props.data.admins.ttd_admin.split("/")[4]
                    }`}
                  ></Image>
                  <Text
                    style={{
                      marginTop: 5,
                      fontSize: 10,
                      paddingBottom: 5,
                      marginLeft: "3px",
                      marginRight: "3px",
                    }}
                  >
                    {new Date(props.data.createdAt).toISOString().split("T")[0]}
                  </Text>
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
      <Fragment>
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  // marginBottom: "10px",
                }}
              >
                <Button
                  variant="outlined"
                  // disabled={asesiskemabyuser.map((el) => {
                  //   el.status_cek === "sudah-dicek" ? false : true;
                  // })}

                  sx={{
                    fontWeight: 700,
                    textTransform: "none",
                    marginRight: "10px",
                    height: "40px",
                  }}
                >
                  Download PDF
                </Button>
              </div>
            )
          }
        </PDFDownloadLink>
      </Fragment>
    );
  }
  return <div></div>;
}
