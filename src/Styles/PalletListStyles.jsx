import { styled } from "@mui/system";
import Sizes from "./Sizes";
import bgimage from "../assets/bermuda-diamond.svg";
import { TransitionGroup } from "react-transition-group";

export const Root = styled("div")({
  backgroundImage: `url(${bgimage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  paddingBottom: "2rem",
  minHeight: "95.5vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
});

export const Container = styled("div")({
  width: "50%",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  flexWrap: "wrap",
  [Sizes.down("xl")]: {
    width: "80%",
  },
  [Sizes.down("xs")]: {
    width: "75%",
  },
});

export const Nav = styled("nav")({
  display: "flex",
  width: "90%",
  justifyContent: "space-between",
  alignItems: "center",
  color: "white",
  margin: "0 auto",
  "& a": {
    color: "white",
    fontWeight: "bold",
  },
  "& h1": {
    FontSize: "2rem",
  },
});

export const Pallets = styled(TransitionGroup)({
  boxSizing: "border-box",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(3, 30%)",
  gridGap: "1.5rem",
  justifyContent: "center",
  [Sizes.down("md")]: {
    gridTemplateColumns: "repeat(2, 50%)",
  },
  [Sizes.down("xs")]: {
    gridTemplateColumns: "repeat(1, 100%)",
    gridGap: "1rem",
  },
});
