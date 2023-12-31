"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import "./../globals.css";
import styleDashboard from "./component/dashboardContainer/styleDashboard.module.css";
import HeaderDashboard from "./component/header";
// import Sidebar from "./component/sidebar/";
import Sidebar from "./component/sidebar/index2";

import Login from "../login/page";
// import jsHttpCookie from "cookie";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Person3Icon from "@mui/icons-material/Person3";
import Modal from "@mui/material/Modal";
import LogoutIcon from "@mui/icons-material/Logout";
import sidebarStyle from "./component/sidebar/sidebarstyle.module.css";

const drawerWidth = 240;

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

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
// DashboardLayout.getInitialProps = ({ req }) => {
//   console.log("initialProp");
//   const initProps = {
//     token: null,
//   };

//   if (req && req.headers) {
//     const cookies = req.headers.cookie;
//     console.log(cookies, "cookies");

//     if (typeof cookies === "string") {
//       const cookiesJSON = jsHttpCookie.parse(cookies);

//       initProps.token = cookiesJSON.token;
//     }
//   }
// };

export default function DashboardLayout({ children }) {
  const [openM, setOpenM] = React.useState(false);
  const handleOpen = () => setOpenM(true);
  const handleClose = () => setOpenM(false);

  function handleLogout() {
    console.log("handleLogout");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    router.push("/login");
  }
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  console.log("masuk layour dashboard");
  let router = useRouter();
  let token;
  let user;
  let sessionToken = null;
  let sessionUser = null;
  const [users, setUser] = useState();
  const [tokens, setToken] = useState();
  try {
    sessionToken = sessionStorage.getItem("token");
    sessionUser = JSON.parse(sessionStorage.getItem("user"));
    token = localStorage.getItem("token");
    user = JSON.parse(localStorage.getItem("user")); //untuk ubah dari string ke obj
    console.log(localStorage.getItem("token"), typeof user, "tokendd");
  } catch (err) {
    console.log("gak dapet token");
  }

  // console.log(sessionToken, sessionUser?.role, "user");
  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("user")));
    setToken(sessionStorage.getItem("token"));
  }, []);

  let menuSidebar = [
    {
      name: "Status",
      url: "/user/dashboard",
      role: "asesi",
    },
    {
      name: "Data Asesi",
      url: "/user/profiluser",
      role: "asesi",
    },
    {
      name: "Asesi",
      url: "/user/admin/Asesi",
      role: "admin",
    },
    {
      name: "Skema Sertifikasi",
      url: "/user/admin/skema-sertifikasi",
      role: "admin",
    },
    {
      name: "User",
      url: "/user/admin/skema-sertifikasi",
      role: "admin",
    },
    {
      name: "Jadwal",
      url: "/user/admin/jadwal",
      role: "admin",
    },
    {
      name: "Report",
      url: "/user/admin/report",
      role: "admin",
    },
  ];
  return (
    <Fragment>
      {(tokens && users.role === "asesi") ||
      (tokens && users.role === "admin") ? (
        // <div className={inter.className}>
        //   <div className={`${styleDashboard.boxContainer}`}>
        //     <Sidebar />
        //     <div className={`${styleDashboard.boxContent}`}>
        //       <HeaderDashboard />
        //       <div className={`${styleDashboard.content}`}>{children}</div>
        //     </div>
        //   </div>
        // </div>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: "10px",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "12px", md: "15px" },
                    paddingTop: "10px",
                  }}
                >
                  Halo, {user.nama}
                </Typography>
                <Person3Icon
                  onClick={handleOpen}
                  sx={{
                    fontSize: { xs: "40px", md: "50px" },
                    cursor: "pointer",
                  }}
                />
              </div>
              <Modal
                open={openM}
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
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <div className={`${sidebarStyle.boxlogo}`}>
                <img
                  className={`${sidebarStyle.imglogo}`}
                  style={{ cursor: "pointer" }}
                  src="/logoolsp.png"
                  onClick={() => router.push("/")}
                />
              </div>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />

            <List>
              {menuSidebar
                .filter((dt) => dt.role === user.role)
                .map((text, index) => (
                  <ListItem
                    key={index}
                    disablePadding
                    sx={{ display: "block" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                        onClick={() => router.push(text.url)}
                      >
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        {/* {text.name} */}
                      </ListItemIcon>
                      <ListItemText
                        primary={text.name}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
            </List>
            <Divider />
            {/* <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List> */}
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <div className={`${styleDashboard.content}`}>{children}</div>
          </Box>
        </Box>
      ) : (
        // {/* </PDFViewer> */}
        // router.push("/login")
        <Login />
      )}
    </Fragment>
  );
}
