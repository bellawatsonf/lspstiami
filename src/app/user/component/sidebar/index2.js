"use client";

import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Button, MenuItem, MenuList } from "@mui/material";
import Menu from "@mui/material/Menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import sidebarStyle from "./sidebarstyle.module.css";
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
import { styled, useTheme } from "@mui/material/styles";

const drawerWidth = 240;

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

export default function Sidebar() {
  const theme = useTheme();
  const [openDraw, setOpenDraw] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDraw(true);
  };

  const handleDrawerClose = () => {
    setOpenDraw(false);
  };
  let router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // let [user, setUser] = useState("");
  // useEffect(() => {
  //   try {
  //     let value = JSON.parse(localStorage.getItem("user")); //untuk ubah dari string ke obj
  //     console.log(value, "value");
  //     setUser(value);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);
  // console.log(user.role, user === "", "role");
  // let user = null;
  // useEffect(() => {
  let user = JSON.parse(sessionStorage.getItem("user"));
  // }, []);
  console.log(user, "disidebar");
  return (
    <Fragment>
      {user !== null ? (
        <div className={`${sidebarStyle.boxMenu}`}>
          <div className="aa" style={{ height: "100vh" }}>
            <div className={`${sidebarStyle.boxlogo}`}>
              <img
                className={`${sidebarStyle.imglogo}`}
                style={{ cursor: "pointer" }}
                src="/logoolsp.png"
                onClick={() => router.push("/")}
              />
            </div>
            <div className={`${sidebarStyle.boxListMenu}`}>
              {/* <AppBar position="fixed" open={openDraw}>
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
                  <Typography variant="h6" noWrap component="div">
                    Mini variant drawer
                  </Typography>
                </Toolbar>
              </AppBar> */}
              {/* <Drawer variant="permanent" open={openDraw}>
                <DrawerHeader>
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
                  {["Inbox", "Starred", "Send email", "Drafts"].map(
                    (text, index) => (
                      <ListItem
                        key={text}
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
                          >
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                          </ListItemIcon>
                          <ListItemText
                            primary={text}
                            sx={{ opacity: open ? 1 : 0 }}
                          />
                        </ListItemButton>
                      </ListItem>
                    )
                  )}
                </List>
                <Divider />
                <List>
                  {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem
                      key={text}
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
                </List>
              </Drawer> */}
              {user.role === "admin" ? (
                <MenuList sx={{ fontSize: "20px", letterSpacing: "3px" }}>
                  <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon
                        sx={{ marginRight: "5px", marginTop: "3px" }}
                      />
                      <Link
                        className={`${sidebarStyle.boxlist}`}
                        href="/user/admin/Asesi"
                      >
                        Asesi
                      </Link>
                    </MenuItem>
                  </div>
                  <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon
                        sx={{ marginRight: "5px", marginTop: "3px" }}
                      />
                      <Link
                        className={`${sidebarStyle.boxlist}`}
                        href="/user/admin/skema-sertifikasi"
                      >
                        Skema Sertifikasi
                      </Link>
                    </MenuItem>
                  </div>
                  {/* <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon sx={{ marginRight: "5px" }} />
                      <Link
                        href="/user/admin/unit-kompetensi"
                        className={`${sidebarStyle.boxlist}`}
                      >
                        Unit Kompetensi
                      </Link>
                    </MenuItem>
                  </div>
                  <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon sx={{ marginRight: "5px" }} />
                      <Link href="" className={`${sidebarStyle.boxlist}`}>
                        Kriteria Unjuk Kerja
                      </Link>
                    </MenuItem>
                  </div> */}
                  <div className={`${sidebarStyle.boxlist}`}>
                    <PersonPinIcon sx={{ marginLeft: "15px" }} />
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      style={{
                        textTransform: "none",
                        color: "white",
                        fontSize: "15px",
                        marginLeft: "-5px",
                      }}
                    >
                      User
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={handleClose}>
                        {" "}
                        <Link
                          // className={`${sidebarStyle.boxlist}`}
                          href="/user/admin/admin"
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          Admin
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        {" "}
                        <Link
                          // className={`${sidebarStyle.boxlist}`}
                          href="/user/admin/asesor"
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          Asesor
                        </Link>
                      </MenuItem>
                    </Menu>
                  </div>
                  <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon sx={{ marginRight: "5px" }} />
                      <Link
                        className={`${sidebarStyle.boxlist}`}
                        href="/user/admin/jadwal"
                      >
                        Jadwal
                      </Link>
                    </MenuItem>
                  </div>
                  <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon sx={{ marginRight: "5px" }} />
                      <Link
                        className={`${sidebarStyle.boxlist}`}
                        href="/user/admin/report"
                      >
                        Report
                      </Link>
                    </MenuItem>
                  </div>
                </MenuList>
              ) : (
                <MenuList sx={{ fontSize: "20px", letterSpacing: "3px" }}>
                  <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon
                        sx={{ display: { xs: "none", md: "block" } }}
                      />
                      <Link
                        className={`${sidebarStyle.boxlist}`}
                        href="/user/dashboard"
                      >
                        Status
                      </Link>
                    </MenuItem>
                  </div>
                  <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon
                        sx={{ display: { xs: "none", md: "block" } }}
                      />
                      <Link
                        className={`${sidebarStyle.boxlist}`}
                        href="/user/profiluser"
                      >
                        Data Asesi
                      </Link>
                    </MenuItem>
                  </div>
                  {/* <div className={`${sidebarStyle.boxlist}`}>
                    <MenuItem>
                      <PersonPinIcon sx={{ marginRight: "5px" }} />
                      <Link href="" className={`${sidebarStyle.boxlist}`}>
                        Nilai
                      </Link>
                    </MenuItem>
                  </div> */}
                </MenuList>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}
