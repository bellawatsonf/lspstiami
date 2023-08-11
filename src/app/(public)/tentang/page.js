"use client";

import { Typography } from "@mui/material";
import styles from "./tentang.module.css";

export default function AboutUs() {
  return (
    <>
      <div className={`${styles.bannertentang}`}>
        <div className={`${styles.boxImg}`}>
          <img
            // className={`${stylesTentang.imgbannertentang}`}
            src="/aset3.png"
          />
        </div>
        {/* <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img
                className={`${styles.imgbannertentang}`}
                src="https://www.crayon.co/hs-fs/hubfs/new-bg.png?width=2566&height=781&name=new-bg.png"
              />
            </div>
            <div className="col-lg-6">
              <div>
                <Typography
                  sx={{
                    fontSize: "64px",
                    color: "#040924",
                    fontWeight: 600,
                    paddingBottom: "15px",
                  }}
                >
                  Tentang
                </Typography>

                <Typography
                  sx={{
                    color: "#6f7375",
                    fontSize: "20px",
                    paddingBottom: "60px",
                  }}
                >
                  {" "}
                  Sejarah Berdirinya Lembaga Sertifikasi Profesi Institut STIAMI
                </Typography>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className={`${styles.describetentang}`}>
        <div className="container">
          <Typography
            sx={{
              fontSize: "64px",
              color: "#040924",
              fontWeight: 600,
              paddingBottom: "15px",
            }}
          >
            Tentang
          </Typography>

          <Typography
            sx={{
              color: "#6f7375",
              fontSize: "20px",
              paddingBottom: "60px",
            }}
          >
            {" "}
            Sejarah Berdirinya Lembaga Sertifikasi Profesi Institut STIAMI
          </Typography>
          <div className="row">
            <div className="col-lg-12">
              <img className={`${styles.imgtentang}`} src="/tentang.jpeg" />
            </div>
            <div className="col-lg-12">
              <Typography
                sx={{
                  color: "#6f7375",
                  paddingTop: "20px",
                  textAlign: "justify",
                }}
              >
                Lembaga Sertifikasi Profesi Lembaga sertifikasi profesi adalah
                perpanjangan tangan dari BNSP yang bertanggung jawab
                melaksanakan sertifikasi kompetensi profesi. LSP Institut STIAMI
                merupakan LSP Pihak 1 (multi sektor) yang dibentuk oleh Yayasan
                Ilomata berdasarkan Surat Keputusan Yayasan Ilomata No.
                008/SK-LSP/Yayasan-Ilomata/V/2018 dan terdaftar di BNSP dengan
                nomor lisensi berdasarkan keputusan ketua KEP.1217/BNSP/XI/2019
                pada 15 November 2019.
                <br />
                <br />
                LSP Institut STIAMI didirikan atas prakarsa beberapa pimpinan
                akademik yang telah mendapatkan pelatihan asesor kompetensi
                langsung dari BNSP dan didukung oleh Rektor Institut Ilmu Sosial
                dan Manajemen STIAMI dan Yayasan Ilomata beserta jajarannya.
                Sejak masa pendirianya LSP Institut STIAMI berstatus sebagai
                bagian di bawah Wakil Rektor (WAREK) 1 bidang akademik sampai
                dengan Desember 2022. Pada Januari 2023 status LSP Institut
                STIAMI ditingkatkan menjadi Direktorat di bawah Yayasan Ilomata.
                <br />
                <br />
                Kantor LSP Institut STIAMI berkedudukan di Jl. Ahmad Yani No.
                8-11, RT.5RT.004/RW.020, Pekayon Jaya, Kec. Bekasi Sel., Kota
                Bks, Jawa Barat 17148. Hingga saat ini, LSP Institut STIAMI
                telah memiliki 10 Skema yang terverifikasi dari berbagai program
                studi yang dimiliki Institut STIAMI.
                <br />
                <br />
                Kegiatan rutin LSP Institut STIAMI dalam rangka keseriusan
                membekali lulusan Institut Ilmu Sosial dan Manajemen STIAMI
                yaitu memastikan kompetensi calon lulusan pada bidang yang
                diminati. Mahasiswa yang kompeten akan mendapat sertifikat BNSP
                yang ditanda tangani oleh ketua LSP, untuk melengkapi Surat
                Keterangan Pendamping Ijasah (SKPI). Sertifikasi profesi
                merupakan salah satu cara memberikan jaminan bahwa calon lulusan
                mahasiswa Institut Ilmu Sosial dan Manajemen STIAMI memenuhi
                standar kompetensi dalam persyaratan skema sertifikasi dan
                terpelihara kompetensinya.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.managementim}`}>
        <Typography
          sx={{
            fontSize: "36px",
            color: "#008d5e",
            fontWeight: 600,
            paddingBottom: "55px",
            paddingTop: "15px",
            textAlign: "center",
          }}
        >
          Management Team
        </Typography>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={styles["boxmember"]}>
                <img className={`${styles.imgtim}`} src="/joko.png" />
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#008d5e",
                    fontWeight: 600,
                    paddingBottom: "3px",
                    paddingTop: "3px",
                  }}
                >
                  Dr. Joko S. Dwi Raharjo
                </Typography>

                <Typography
                  sx={{
                    color: "black",
                    fontSize: "20px",
                    paddingBottom: "10px",
                  }}
                >
                  {" "}
                  Dewan Pengarah
                </Typography>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles["boxmember"]}>
                <img className={`${styles.imgtim}`} src="/agus.png" />
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#008d5e",
                    fontWeight: 600,
                    paddingBottom: "3px",
                    paddingTop: "3px",
                  }}
                >
                  Dr. M. Agus Cholik
                </Typography>

                <Typography
                  sx={{
                    color: "black",
                    fontSize: "20px",
                    paddingBottom: "10px",
                  }}
                >
                  {" "}
                  Dewan Pengarah
                </Typography>
              </div>
            </div>
            <div className="col-lg-12">
              <div className={styles["boxmember"]}>
                <img className={`${styles.imgtim}`} src="/dir.png" />
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#008d5e",
                    fontWeight: 600,
                    paddingBottom: "3px",
                    paddingTop: "3px",
                  }}
                >
                  Indra Prabhata, M.A.
                </Typography>

                <Typography
                  sx={{
                    color: "black",
                    fontSize: "20px",
                    paddingBottom: "10px",
                  }}
                >
                  {" "}
                  Direktur
                </Typography>
              </div>
            </div>
            <div className="col-lg-12">
              <div className={styles["boxmember"]}>
                <img className={`${styles.imgtim}`} src="/sekretariat.png" />
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#008d5e",
                    fontWeight: 600,
                    paddingBottom: "3px",
                    paddingTop: "3px",
                  }}
                >
                  Andi Hariyanto, M.A.
                </Typography>

                <Typography
                  sx={{
                    color: "black",
                    fontSize: "20px",
                    paddingBottom: "10px",
                  }}
                >
                  {" "}
                  TUK/Kesekretariatan
                </Typography>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles["boxmember"]}>
                <img className={`${styles.imgtim}`} src="/ma.png" />
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#008d5e",
                    fontWeight: 600,
                    paddingBottom: "3px",
                    paddingTop: "3px",
                  }}
                >
                  Budhi Yuwono, M.A.
                </Typography>

                <Typography
                  sx={{
                    color: "black",
                    fontSize: "20px",
                    paddingBottom: "10px",
                  }}
                >
                  {" "}
                  Manager Administrasi
                </Typography>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles["boxmember"]}>
                <img className={`${styles.imgtim}`} src="/mk.png" />
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#008d5e",
                    fontWeight: 600,
                    paddingBottom: "3px",
                    paddingTop: "3px",
                  }}
                >
                  Yuliantin, M.M.
                </Typography>

                <Typography
                  sx={{
                    color: "black",
                    fontSize: "20px",
                    paddingBottom: "10px",
                  }}
                >
                  {" "}
                  Manager Keuangan
                </Typography>
              </div>
            </div>

            <div className="col-lg-3">
              <div className={styles["boxmember"]}>
                <img className={`${styles.imgtim}`} src="/mm.png" />
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#008d5e",
                    fontWeight: 600,
                    paddingBottom: "3px",
                    paddingTop: "3px",
                  }}
                >
                  Andhika Mahaputra Utama, M.A.
                </Typography>

                <Typography
                  sx={{
                    color: "black",
                    fontSize: "20px",
                    paddingBottom: "10px",
                  }}
                >
                  {" "}
                  PLT Manager Pengendali Mutu
                </Typography>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles["boxmember"]}>
                <img className={`${styles.imgtim}`} src="/ms.png" />
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#008d5e",
                    fontWeight: 600,
                    paddingBottom: "3px",
                    paddingTop: "3px",
                  }}
                >
                  Sukarni Novita Sari, M.A.
                </Typography>

                <Typography
                  sx={{
                    color: "black",
                    fontSize: "20px",
                    paddingBottom: "10px",
                  }}
                >
                  {" "}
                  Manager Sertifikasi
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
