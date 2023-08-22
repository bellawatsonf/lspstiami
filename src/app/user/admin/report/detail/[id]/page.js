"use client";

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

export default function detailReport() {
  return (
    // <PDFViewer>
    <>
      <PdfFile />
    </>
    // {/* </PDFViewer> */}
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
