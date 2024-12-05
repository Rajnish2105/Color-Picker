import { styled } from "@mui/system";
import Sizes from "./Sizes";
// Define styled components using MUI's styled
export const PalletContainer = styled("div")(({ theme }) => ({
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

export const ColorsContainer = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
}));

export const GoBackButton = styled("div")({
  width: "20%",
  height: "50%",
  margin: "0 auto",
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  marginBottom: "-3.5px",
  backgroundColor: "black",
  opacity: "1",
  "& a": {
    color: "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    outline: "none",
    backgroundColor: "rgba(255,255,255,0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    textDecoration: "none",
  },
  [Sizes.down("lg")]: {
    width: "25%",
    height: "33.3333%",
  },
  [Sizes.down("md")]: {
    width: "50%",
    height: "20%",
  },
  [Sizes.down("xs")]: {
    width: "100%",
    height: "10%",
  },
});
