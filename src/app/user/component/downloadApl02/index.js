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
  // console.log(
  //   props?.data[0].APL01?.asesi_skema?.skema.map((el) => {
  //     el?.unitkompetensi?.map((dt) => {
  //       dt?.kriteria_unitkerja?.map((h) => {
  //         console.log(h, "biillll");
  //       });
  //     });
  //   })
  // );

  props?.data[0].APL01.asesi_skema?.skema?.unitkompetensi?.map((el) => {
    el?.kriteria_unitkerja?.map((h) => {
      console.log(h.eleme, "hasilnya");
    });
  });

  if (!props.data) {
    return <div>pp</div>;
  }
  // console.log(encodeURI(props?.data?.admins.ttd_admin), "dr document");
  // console.log(
  //   encodeURI(props?.data?.asesi_skema.asesi.ttd_asesi),
  //   "dr document"
  // );

  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <Image style={styles.header} src="/logoolsp.png" fixed>
          {/* <Image style={styles} ></Image> */}
        </Image>
        <Text
          style={{ fontSize: "15px", fontWeight: 700, marginBottom: "20px" }}
        >
          FR-APL-02. ASESMEN MANDIRI
        </Text>

        {/* table */}
        <View style={styles.table}>
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
                  {props.data[0].APL01.asesi_skema.skema.nama_skema}
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
                {props.data[0].APL01.asesi_skema.skema.no_skema}
              </Text>
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
        {props.data[0].APL01.asesi_skema.skema.unitkompetensi.map((el) => (
          <View
            style={{
              display: "table",
              width: "auto",
              borderStyle: "solid",
              borderWidth: 1,
              borderRightWidth: 0,
              borderBottomWidth: 0,
              marginTop: "20px",
              breakInside: "avoid",
            }}
          >
            <View style={styles.tableRow}>
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
                  Unit Kompetensi
                </Text>
              </View>
              <View
                style={{
                  width: "70%",
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
                  {el.judul_unit}
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View
                style={{
                  width: "70%",
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
                  Dapatkah Saya...?
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
                <Text
                  style={{
                    marginTop: 15,
                    fontSize: 10,
                    paddingLeft: "3px",
                    paddingBottom: "3px",
                    margin: "auto",
                  }}
                >
                  K
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
                <Text
                  style={{
                    marginTop: 15,
                    fontSize: 10,
                    paddingLeft: "3px",
                    paddingBottom: "3px",
                    margin: "auto",
                  }}
                >
                  BK
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
                <Text
                  style={{
                    marginTop: 15,
                    fontSize: 10,
                    paddingLeft: "3px",
                    paddingBottom: "3px",
                    margin: "auto",
                  }}
                >
                  Bukti yang relevan
                </Text>
              </View>
            </View>
            {el.kriteria_unitkerja?.map((dt) => (
              <View
                style={{
                  margin: "auto",
                  flexDirection: "row",
                  breakInside: "avoid",
                }}
              >
                <View
                  style={{
                    width: "70%",
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
                      // margin: "auto",
                    }}
                  >
                    Elemen: {dt.eleme}
                  </Text>

                  <Text
                    style={{
                      marginTop: 15,
                      fontSize: 10,
                      // marginLeft: "20px",
                      // paddingBottom: "5px",
                      paddingTop: "15px",
                      // margin: "auto",
                    }}
                  >
                    Kriteria Unjuk Kerja :
                  </Text>
                  {dt.krite?.map((h) => (
                    <View style={{ breakInside: "avoid" }}>
                      <Text
                        style={{
                          marginTop: 15,
                          fontSize: 10,
                          // marginLeft: "20px",
                          paddingBottom: "3px",
                          paddingTop: "15px",
                          // margin: "auto",
                        }}
                      >
                        {h}
                      </Text>
                    </View>
                  ))}
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
                  <Text
                    style={{
                      marginTop: 15,
                      fontSize: 10,
                      paddingLeft: "3px",
                      paddingBottom: "3px",
                      margin: "auto",
                    }}
                  >
                    K
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
                  <Text
                    style={{
                      marginTop: 15,
                      fontSize: 10,
                      paddingLeft: "3px",
                      paddingBottom: "3px",
                      margin: "auto",
                    }}
                  >
                    BK
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
                  <Text
                    style={{
                      marginTop: 15,
                      fontSize: 10,
                      paddingLeft: "3px",
                      paddingBottom: "3px",
                      margin: "auto",
                    }}
                  >
                    Bukti yang relevan
                  </Text>
                </View>
              </View>
            ))}

            {/* {props.data?.APL01?.asesi_skema.skema.unitkompetensi.map((el, i) => (
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
          ))} */}
          </View>
        ))}

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

export default function DownloadApl02(props) {
  console.log(props.data, "props kiris");

  if (props.data.length > 0) {
    return (
      <Fragment>
        {/* <PDFViewer>
          <DocumentPdf />
        </PDFViewer> */}
        <PDFDownloadLink
          document={<DocumentPdf data={props?.data} />}
          fileName={`apl02_${props.data[0].APL01?.asesi_skema.asesi.nama_lengkap}.pdf`}
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
                  Download Apl02
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
