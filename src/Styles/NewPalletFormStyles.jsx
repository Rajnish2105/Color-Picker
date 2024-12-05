import { styled } from "@mui/material/styles";

export const Main = styled("main")(({ theme, open, drawerWidth }) => ({
  flexGrow: 1,
  padding: 0,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: open ? 0 : `-${drawerWidth}px`,
  height: "calc(100vh - 64px)",
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const Container = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "center",
});

export const Buttons = styled("div")({
  width: "95%",
  margin: "auto",
  display: "flex",
  gap: "5px",
  "& button": {
    width: "50%",
    fontSize: "0.8rem",
  },
});
