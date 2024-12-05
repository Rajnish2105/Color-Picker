import chroma from "chroma-js";
import { styled } from "@mui/system";
import Sizes from "@/Styles/Sizes";

export const ColorBoxContainer = styled("div")(
  ({ bgcolor, showFullPallet }) => ({
    width: "20%",
    overflow: "hidden",
    height: showFullPallet ? "25%" : "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    backgroundColor: bgcolor,
    "&:hover": {
      "& button": {
        opacity: 1,
      },
    },
    [Sizes.down("lg")]: {
      width: "25%",
      height: showFullPallet ? "20%" : "33.3333%",
    },
    [Sizes.down("md")]: {
      width: "50%",
      height: showFullPallet ? "10%" : "20%",
    },
    [Sizes.down("xs")]: {
      width: "100%",
      height: showFullPallet ? "5%" : "10%",
    },
  })
);

export const CopyButton = styled("button")(({ bgcolor }) => ({
  color: chroma(bgcolor).luminance() > 0.7 ? "black" : "white",
  width: "100px",
  height: "30px",
  position: "absolute",
  display: "inline-block",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  outline: "none",
  backgroundColor: "rgba(255,255,255,0.3)",
  fontSize: "1rem",
  lineHeight: "30px",
  textTransform: "uppercase",
  border: "none",
  textDecoration: "none",
  opacity: "0",
}));

export const ColorName = styled("span")(({ bgcolor }) => ({
  color: chroma(bgcolor).luminance() <= 0.08 ? "white" : "black",
}));

export const SeeMore = styled("span")(({ bgcolor }) => ({
  color: chroma(bgcolor).luminance() > 0.7 ? "black" : "white",
  backgroundColor: "rgba(255,255,255,0.3)",
  position: "absolute",
  border: "none",
  right: "0",
  bottom: "0",
  width: "60px",
  height: "30px",
  textAlign: "center",
  lineHeight: "30px",
  textTransform: "uppercase",
  zIndex: "10", // Ensure it's above other elements but below the overlay
}));

export const CopyText = styled("p")(({ bgcolor }) => ({
  color: chroma(bgcolor).luminance() > 0.7 ? "black" : "white",
}));

export const BoxContent = styled("div")(() => ({
  position: "absolute",
  padding: "10px",
  width: "100%",
  left: "0",
  bottom: "0",
  color: "black",
  letterSpacing: "1px",
  textTransform: "uppercase",
  fontSize: "12px",
}));

export const CopyOverlay = styled("div")(({ copied }) => ({
  opacity: copied ? "1" : "0",
  zIndex: "20", // Make sure this is high enough to be visible
  height: "100%",
  width: "100%",
  transition: "opacity 0.4s ease-in-out, transform 0.4s ease-in-out", // Same duration and ease-in-out timing
  backgroundColor: "inherit", // Inherit background color from parent
  position: "fixed",
  top: "0",
  left: "0",
  transform: copied ? "scale(1)" : "scale(0.1)",
}));

export const CopyMsg = styled("div")(({ copied }) => ({
  position: "fixed",
  inset: "0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "4rem",
  transform: copied ? "scale(1)" : "scale(0.1)",
  opacity: copied ? "1" : "0",
  color: "white",
  transition: "opacity 0.4s ease-in-out, transform 0.4s ease-in-out 0.3s", // Same duration and ease-in-out timing
  zIndex: "30", // Ensure the message is above everything else
  "& h1": {
    fontWeight: "400",
    textShadow: "1px 2px black",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: "100%",
    textAlign: "center",
    marginBottom: "0",
    padding: "1rem",
    textTransform: "uppercase",
    [Sizes.down("xs")]: {
      fontSize: "5rem",
    },
  },
  "& p": {
    fontSize: "2rem",
    fontWeight: "100",
  },
}));
