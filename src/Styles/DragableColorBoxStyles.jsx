import { styled } from "@mui/system";
import Sizes from "@/Styles/Sizes";
import chroma from "chroma-js";

export const StyledColorBox = styled("div")({
  height: "164px",
  width: "100%",
  margin: "0 auto",
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  marginBottom: "-8.5px",
  "&:hover": {
    "& svg": {
      color: "white",
      transform: "scale(1.5)",
    },
  },
  [Sizes.down("md")]: {
    height: "120px",
  },
  [Sizes.down("md")]: {
    height: "90px",
  },
  [Sizes.down("xs")]: {
    height: "50px",
  },
});

export const BoxContent = styled("div")(({ bgcolor }) => ({
  position: "absolute",
  width: "100%",
  left: "0",
  bottom: "0",
  padding: "10px",
  color:
    chroma(bgcolor).luminance() <= 0.08
      ? "rgba(255,255,255,0.8)"
      : "rbga(0,0,0,0.6)",
  letterSpacing: "1px",
  textTransform: "uppercase",
  fontSize: "12px",
  display: "flex",
  justifyContent: "space-between",
}));

export const deleteIconStyles = {
  transition: "all 0.3s ease-in-out",
};
