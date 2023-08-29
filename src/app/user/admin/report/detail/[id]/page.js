"use client";

import { fetchApl01ById } from "@/app/services/apl01";
import DownloadPdf from "@/app/user/component/donwloadPdf";
import PdfFile from "@/app/user/component/pdfFile";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function detailReport() {
  // const [data, setData] = useState([{ test: "q" }]);
  let apl01byid = useSelector((state) => state.apl01.apl01ById);
  let dispatch = useDispatch();
  let params = useParams();
  let id = params.id;
  console.log(apl01byid, "dataapl01");
  useEffect(() => {
    dispatch(fetchApl01ById(id));
  }, []);

  console.log(apl01byid, "props apl");
  if (Object.keys(apl01byid).length > 0) {
    return (
      <>
        <PdfFile />
        {/* <PDFViewer>
          <Pdf2 />
        </PDFViewer> */}
        <DownloadPdf data={apl01byid} />
      </>
      // <Document>
      //   <Page size="A4" style={styles.page}>
      //     <View style={styles.section}>
      //       <Text>Section #1</Text>
      //     </View>
      //     <View style={styles.section}>
      //       <Text>Section #2</Text>
      //     </View>
      //   </Page>
      // </Document>
    );
  }
}
