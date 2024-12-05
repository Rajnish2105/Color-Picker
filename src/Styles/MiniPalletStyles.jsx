import { styled } from "@mui/system";

// Create styled components using `styled`
export const Root = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "5px",
  padding: "0.5rem",
  height: "fit-content",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  "&:hover": {
    "& svg": {
      opacity: "1",
    },
  },
}));

export const Colors = styled("div")({
  backgroundColor: "#dae1e4",
  height: "150px",
  width: "100%",
  borderRadius: "5px",
  overflow: "hidden",
});

export const Title = styled("h5")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0",
  color: "black",
  paddingTop: "0.5rem",
  fontSize: "1rem",
  position: "relative",
});

export const Emoji = styled("span")({
  marginLeft: "0.5rem",
  fontSize: "1.5rem",
});

export const MiniColors = styled("div")({
  height: "25%",
  width: "20%",
  display: "inline-block",
  margin: "0 auto",
  position: "relative",
  marginBottom: "-3.5px",
});

export const DeleteButton = styled("div")({
  "& svg": {
    color: "white",
    backgroundColor: "#eb3d30",
    width: "20px",
    height: "20px",
    position: "absolute",
    right: "0",
    top: "0",
    padding: "10px",
    zIndex: "10",
    opacity: "0",
    transition: "all 0.3s ease-in-out",
  },
});
