"use client";

import styleHeader from "./style.module.css";
import Person3Icon from "@mui/icons-material/Person3";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";
const style = {
  position: "absolute",
  top: "10%",
  right: "1%",
  // transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function HeaderDashboard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log(user, "user");
  let router = useRouter();

  function handleLogout() {
    console.log("handleLogout");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    router.push("/login");
  }
  return (
    <>
      <div className={`${styleHeader.boxheader}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "10px",
          }}
        >
          <Typography
            sx={{ fontWeight: 600, fontSize: "15px", paddingTop: "10px" }}
          >
            Halo, {user.nama}
          </Typography>
          <Person3Icon
            onClick={handleOpen}
            sx={{ fontSize: "50px", cursor: "pointer" }}
          />
        </div>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              sx={{ fontSize: "17px", cursor: "pointer" }}
              onClick={() => {
                handleLogout();
              }}
            >
              <LogoutIcon sx={{ fontSize: "17px" }} />
              {"  "}Logout
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}
