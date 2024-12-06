import { styled } from "@mui/system";
import Sizes from "@/Styles/Sizes";
import { TransitionGroup } from "react-transition-group";

export const Root = styled("div")({
  backgroundImage: `url(/bermuda-diamond.svg)`,
  overflowY: "auto",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "repeat",
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

export const Nav = styled("nav")(({ theme }) => ({
  display: "flex",
  width: "95%",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  color: "white",
  "& a": {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    padding: "0.5rem 1rem",
    borderRadius: "25px",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.1)",
      transform: "translateY(-2px)",
    },
  },
  "& h1": {
    fontSize: "2rem",
    margin: 0,
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
  },
}));

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
