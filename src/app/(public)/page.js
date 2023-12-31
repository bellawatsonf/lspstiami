"use client";

import { Button, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import CountUp from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkema } from "../services/skema";
import Navbar from "./component/Navbar";
import Footer from "./component/footer";
import LoadingComponent from "./component/loading";
import styles from "./page.module.css";

export default function Home() {
  let dispatch = useDispatch();
  let skema = useSelector((state) => state.skema.skema);
  let asesor = useSelector((state) => state.asesor.asesor);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  useEffect(() => {
    dispatch(fetchSkema());
    // dispatch(fetchAsesorServices());
  }, []);

  console.log(skema, "skema");
  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <Fragment>
      <Navbar />
      <div className={styles["box-banner"]}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-6">
              <div className={styles["banner-img"]}>
                <img
                  className={`${styles.gambarbanner}`}
                  src="/48362100261.png"
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </div>
            <div className="col-12 col-xl-6">
              <div className={styles["desc-banner"]}>
                <Typography
                  sx={{
                    fontSize: "52px",
                    fontWeight: 700,
                    paddingBottom: "10px",
                    color: "#040924",
                  }}
                >
                  Buktikan Kompetensi Melalui Sertifikasi.
                </Typography>
                <Typography sx={{ fontSize: "24px", color: "#040924" }}>
                  Sertifikasi profesi bertujuan untuk memastikan kompetensi
                  Mahasiswa yang telah didapatkan melalui proses kegiatan
                  pembelajaran di Institut STIAMI.
                </Typography>
                <a
                  href="https://storage.googleapis.com/lspstiami/TATA%20CARA%20UJIKOM%20(1).pdf"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    sx={{
                      background: "#2dc3d0",
                      borderRadius: "8px",
                      padding: "12px 20px",
                      color: "#040924",
                      fontWeight: 700,
                      marginTop: "17px",
                      minWidth: "250px",
                      // textTransform: "none",
                      fontSize: "20px",
                      cursor: "pointer",
                      textTransform: "none",
                    }}
                    variant="contained"
                    color="success"
                  >
                    Tata Cara Pendaftaran
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["inform-section"]}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-6">
              <div className={styles["informsection-img"]}>
                <img
                  className={`${styles.gambarinformsection}`}
                  src="/aset4.png"
                />
              </div>
            </div>
            <div className="col-12 col-xl-6">
              <div className={styles["desc-informsection"]}>
                <Typography
                  sx={{
                    fontSize: "46px",
                    lineHeight: "1.15",
                    fontWeight: 700,
                  }}
                >
                  AYO IKUT SERTIFIKASI!
                </Typography>
                <Typography
                  sx={{
                    fontSize: "22px",
                    paddingTop: "15px",
                    paddingBottom: "50px",
                    textAlign: "justify",
                  }}
                >
                  Sertifikasi profesi memiliki banyak manfaat penting bagi
                  individu dalam bidang pekerjaan mereka. Sertifikasi dapat
                  membantu meningkatkan peluang karir, meningkatkan kredibilitas
                  profesional, meningkatkan keahlian dan pengetahuan,
                  meningkatkan gaji, mendapatkan kesempatan pelatihan yang lebih
                  baik, menghindari kesenjangan keterampilan, mengurangi risiko
                  kesalahan, memperkuat etika profesional, meningkatkan
                  kepercayaan diri, dan meningkatkan profesionalisme. Oleh
                  karena itu, jika kamu ingin meningkatkan karir kamu dan
                  meningkatkan kemampuan kamu dalam bidang tertentu,
                  pertimbangkan untuk memperoleh sertifikasi profesi yang diakui
                  oleh industri kamu.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["benefit-box"]}>
        <Typography
          sx={{
            fontWeight: 700,
            color: "white",
            fontSize: "36px",
            textAlign: "center",
            paddingTop: "35px",
            paddingBottom: "35px",
          }}
        >
          MANFAAT SERTIFIKASI
        </Typography>
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-4 mb-4">
              <div className={styles["benefit-card"]}>
                <div className={styles["benefit-img"]}>
                  <img src="/Karir.png" />
                </div>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#040924",
                    fontWeight: 600,
                    fontSize: "24px",
                    paddingTop: "10px",
                  }}
                >
                  PENINGKATAN KARIR
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#6F7375",
                    fontSize: "20px",
                    paddingTop: "15px",
                  }}
                >
                  Dengan memiliki sertifikasi, individu dapat menunjukkan bahwa
                  mereka memiliki keahlian dan pengetahuan yang diperlukan untuk
                  bekerja dalam bidang tertentu. Sertifikasi juga dapat membantu
                  membedakan diri dari kandidat lain dalam persaingan untuk
                  posisi pekerjaan yang diinginkan. Banyak perusahaan menawarkan
                  insentif finansial kepada karyawan yang memperoleh sertifikasi
                  tertentu. Ini karena perusahaan percaya bahwa karyawan yang
                  memiliki sertifikasi dapat memberikan nilai tambah yang lebih
                  besar pada bisnis mereka.
                </Typography>
                {/* <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    paddingTop: "25px",
                    color: "#2dc3d0",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "all .15s ease",
                    fontWeight: 500,
                  }}
                >
                  Learn More
                </Typography> */}
              </div>
            </div>
            <div className="col-12 col-xl-4 mb-4">
              <div className={styles["benefit-card"]}>
                <div className={styles["benefit-img"]}>
                  <img src="/Pengetahuan.png" />
                </div>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#040924",
                    fontWeight: 600,
                    fontSize: "24px",
                    paddingTop: "10px",
                  }}
                >
                  MENINGKATKAN KEMAMPUAN DAN KEAHLIAN
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#6F7375",
                    fontSize: "20px",
                    paddingTop: "15px",
                  }}
                >
                  Untuk lulus sertifikasi, individu harus mempelajari materi dan
                  konsep yang berkaitan dengan bidang tersebut. Proses belajar
                  ini dapat membantu meningkatkan keahlian dan pengetahuan
                  seseorang, sehingga mereka menjadi lebih efektif dalam
                  pekerjaan mereka. Organisasi sertifikasi sering menyediakan
                  pelatihan dan pengembangan berkelanjutan untuk memastikan
                  bahwa individu tetap terkini dalam bidang mereka. Pelatihan
                  ini dapat membantu individu meningkatkan keahlian dan
                  pengetahuan mereka, sehingga mereka dapat lebih sukses dalam
                  pekerjaan mereka.
                </Typography>
                {/* <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    paddingTop: "25px",
                    color: "#2dc3d0",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "all .15s ease",
                    fontWeight: 500,
                  }}
                >
                  Learn More
                </Typography> */}
              </div>
            </div>
            <div className="col-12 col-xl-4 mb-4">
              <div className={styles["benefit-card"]}>
                <div className={styles["benefit-img"]}>
                  <img src="Profesinalisme.png" />
                </div>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#040924",
                    fontWeight: 600,
                    fontSize: "24px",
                    paddingTop: "10px",
                  }}
                >
                  PROFESIONALITAS
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#6F7375",
                    fontSize: "20px",
                    paddingTop: "15px",
                  }}
                >
                  Sertifikasi menunjukkan bahwa individu telah menguji kemampuan
                  dan pengetahuan mereka secara independen oleh organisasi yang
                  diakui oleh industri. Ini dapat membantu membuktikan bahwa
                  seseorang memiliki keterampilan, etika, pengetahuan, bahkan
                  kepercayaan diri yang diperlukan untuk melakukan pekerjaan
                  dengan baik dan dapat dipercaya oleh klien dan rekan kerja.
                </Typography>
                {/* <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    paddingTop: "25px",
                    color: "#2dc3d0",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "all .15s ease",
                    fontWeight: 500,
                  }}
                >
                  Learn More
                </Typography> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles["insight-box"]}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            // minHeight: "400px",
            // height: "100%",
          }}
        >
          <img
            className={styles["imginsight"]}
            src="https://www.crayon.co/hs-fs/hubfs/bg-top-pattern.png?width=2718&height=4160&name=bg-top-pattern.png"
          />
        </div>
        <Box className={styles["box-infoinsight"]}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-5">
                <div className={styles["insight-img"]}>
                  <img src="https://www.crayon.co/hs-fs/hubfs/ProductImagery_Homepage-01.png?width=550&height=584&name=ProductImagery_Homepage-01.png" />
                </div>
              </div>
              <div className="col-lg-6 mb-5">
                <div className={styles["desc-insight"]}>
                  <Typography sx={{ fontSize: "40px" }}>
                    Way more data,
                    <br />
                    Way less time
                  </Typography>
                  <Typography
                    sx={{
                      color: "#040924",
                      fontSize: "17px",
                      paddingTop: "20px",
                    }}
                  >
                    Manual research is not only time-consuming—it’s also risky.
                    When you rely on human effort, you’re prone to missed
                    opportunities and undetected threats.
                    <br />
                    <br />
                    With Crayon, you can automatically capture your competitors’
                    movements in real time. Tap into more than one hundred
                    different data types across millions of competitive
                    intelligence sources to stay on top of product updates,
                    messaging pivots, executive team changes, and more.
                    <br />
                    <br />
                    Learn more about Crayon’s approach to Competitive
                    Intelligence and What We Track.
                  </Typography>
                </div>
              </div>

              <div className="col-lg-6 mb-5">
                <div className={`${styles.forDesktop}`}>
                  <div className={styles["desc-insight"]}>
                    <Typography sx={{ fontSize: "40px" }}>
                      Way more data,
                      <br />
                      Way less time
                    </Typography>
                    <Typography
                      sx={{
                        color: "#040924",
                        fontSize: "17px",
                        paddingTop: "20px",
                      }}
                    >
                      Manual research is not only time-consuming—it’s also
                      risky. When you rely on human effort, you’re prone to
                      missed opportunities and undetected threats.
                      <br />
                      <br />
                      With Crayon, you can automatically capture your
                      competitors’ movements in real time. Tap into more than
                      one hundred different data types across millions of
                      competitive intelligence sources to stay on top of product
                      updates, messaging pivots, executive team changes, and
                      more.
                      <br />
                      <br />
                      Learn more about Crayon’s approach to Competitive
                      Intelligence and What We Track.
                    </Typography>
                  </div>
                </div>
                <div className={`${styles.forMobile}`}>
                  <div className={styles["insight-img"]}>
                    <img src="https://www.crayon.co/hs-fs/hubfs/ProductImagery_Homepage-01.png?width=550&height=584&name=ProductImagery_Homepage-01.png" />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-5">
                <div className={`${styles.forDesktop}`}>
                  <div className={styles["insight-img"]}>
                    <img src="https://www.crayon.co/hs-fs/hubfs/ProductImagery_Homepage-01.png?width=550&height=584&name=ProductImagery_Homepage-01.png" />
                  </div>
                </div>
                <div className={`${styles.forMobile}`}>
                  <div className={styles["desc-insight"]}>
                    <Typography sx={{ fontSize: "40px" }}>
                      Way more data,
                      <br />
                      Way less time
                    </Typography>
                    <Typography
                      sx={{
                        color: "#040924",
                        fontSize: "17px",
                        paddingTop: "20px",
                      }}
                    >
                      Manual research is not only time-consuming—it’s also
                      risky. When you rely on human effort, you’re prone to
                      missed opportunities and undetected threats.
                      <br />
                      <br />
                      With Crayon, you can automatically capture your
                      competitors’ movements in real time. Tap into more than
                      one hundred different data types across millions of
                      competitive intelligence sources to stay on top of product
                      updates, messaging pivots, executive team changes, and
                      more.
                      <br />
                      <br />
                      Learn more about Crayon’s approach to Competitive
                      Intelligence and What We Track.
                    </Typography>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-5">
                <div className={styles["insight-img"]}>
                  <img src="https://www.crayon.co/hs-fs/hubfs/ProductImagery_Homepage-01.png?width=550&height=584&name=ProductImagery_Homepage-01.png" />
                </div>
              </div>
              <div className="col-lg-6 mb-5">
                <div className={styles["desc-insight"]}>
                  <Typography sx={{ fontSize: "40px" }}>
                    Way more data,
                    <br />
                    Way less time
                  </Typography>
                  <Typography
                    sx={{
                      color: "#040924",
                      fontSize: "15px",
                      paddingTop: "20px",
                    }}
                  >
                    Manual research is not only time-consuming—it’s also risky.
                    When you rely on human effort, you’re prone to missed
                    opportunities and undetected threats.
                    <br />
                    <br />
                    With Crayon, you can automatically capture your competitors’
                    movements in real time. Tap into more than one hundred
                    different data types across millions of competitive
                    intelligence sources to stay on top of product updates,
                    messaging pivots, executive team changes, and more.
                    <br />
                    <br />
                    Learn more about Crayon’s approach to Competitive
                    Intelligence and What We Track.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </div> */}
      <div className={styles["best-product"]}>
        <Typography
          sx={{
            color: "#040924",
            fontWeight: 700,
            fontSize: "36px",
            textAlign: "center",
            paddingBottom: "50px",
          }}
        >
          INFO GRAFIS
        </Typography>
        <div className="container">
          {/* <div className="row">
            <div className="col col-lg-6">
              <div className={styles["img-bestproduct"]}>
                <img src="https://www.crayon.co/hs-fs/hubfs/guide-to-ci-cover-page.png?width=284&height=357&name=guide-to-ci-cover-page.png" />
              </div>
            </div>
            <div className="col col-lg-6">
              <div>
                <Typography
                  sx={{
                    color: "#040924",
                    fontSize: "36px",
                    paddingBottom: "20px",
                  }}
                >
                  Ujikompetensi Bla Bla
                </Typography>
                <Typography
                  sx={{
                    color: "#6F7375;",
                    fontSize: "17px",
                    paddingBottom: "20px",
                  }}
                >
                  With a strong competitive intelligence program, you can
                  provide your marketing, sales, product, and executive teams
                  with a powerful, strategic advantage. Knowing what your
                  competitors are up to will help you beat them every time.
                </Typography>
              </div>
              <div className={styles["info-bestproduct"]}>
                <img
                  className={styles["imgproduct"]}
                  src="https://www.crayon.co/hs-fs/hubfs/book-gray.png?width=90&height=90&name=book-gray.png"
                />
                <Typography
                  sx={{
                    color: "#44474c",
                    padding: "10px",
                  }}
                >
                  1000 asesi
                </Typography>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-12 col-xl-3">
              <div className={`${styles.boxInfografis}`}>
                <Typography
                  sx={{
                    color: "#040924",
                    fontSize: "20px",
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  Skema
                </Typography>
                <CountUp
                  start={0}
                  end={10}
                  delay={0}
                  enableScrollSpy={true}
                  // scrollSpyDelay={100}
                >
                  {({ countUpRef }) => (
                    <Typography
                      sx={{
                        color: "#336666",
                        fontSize: "70px",
                        fontWeight: 700,
                        textAlign: "center",
                      }}
                    >
                      <span ref={countUpRef} />
                    </Typography>
                  )}
                </CountUp>
              </div>
            </div>
            <div className="col-12 col-xl-3">
              <div className={`${styles.boxInfografis}`}>
                <Typography
                  sx={{
                    color: "#040924",
                    fontSize: "20px",
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  Asesor
                </Typography>
                <CountUp
                  start={0}
                  end={23}
                  delay={0}
                  enableScrollSpy={true}
                  // scrollSpyDelay={100}
                >
                  {({ countUpRef }) => (
                    <Typography
                      sx={{
                        color: "#336666",
                        fontSize: "70px",
                        fontWeight: 700,
                        textAlign: "center",
                      }}
                    >
                      <span ref={countUpRef} />
                    </Typography>
                  )}
                </CountUp>
              </div>
            </div>
            <div className="col-12 col-xl-3">
              <div className={`${styles.boxInfografis}`}>
                <Typography
                  sx={{
                    color: "#040924",
                    fontSize: "20px",
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  TUK
                </Typography>
                <CountUp
                  start={0}
                  end={2}
                  delay={0}
                  enableScrollSpy={true}
                  // scrollSpyDelay={100}
                >
                  {({ countUpRef }) => (
                    <Typography
                      sx={{
                        color: "#336666",
                        fontSize: "70px",
                        fontWeight: 700,
                        textAlign: "center",
                      }}
                    >
                      <span ref={countUpRef} />
                    </Typography>
                  )}
                </CountUp>
              </div>
            </div>
            <div className="col-12 col-xl-3">
              <div className={`${styles.boxInfografis}`}>
                <Typography
                  sx={{
                    color: "#040924",
                    fontSize: "20px",
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  Asesi
                </Typography>
                <CountUp
                  start={0}
                  end={32}
                  delay={0}
                  enableScrollSpy={true}
                  // scrollSpyDelay={100}
                >
                  {({ countUpRef }) => (
                    <Typography
                      sx={{
                        color: "#336666",
                        fontSize: "70px",
                        fontWeight: 700,
                        textAlign: "center",
                      }}
                    >
                      <span ref={countUpRef} />
                    </Typography>
                  )}
                </CountUp>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
