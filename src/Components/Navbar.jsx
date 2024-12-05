import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Select, MenuItem, Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavbarContainer,
  Logo,
  SliderContainer,
  SelectContainer,
} from "../Styles/NavbarStyles";

export default function Navbar({
  level,
  changeLevel,
  changeFormat,
  format,
  showingAllColors,
}) {
  const [open, setOpen] = useState(false);

  function closeSnackbar() {
    setOpen(false);
  }

  function handleFormatChange(e) {
    setOpen(true);
    changeFormat(e.target.value);
  }

  return (
    <NavbarContainer>
      <Logo>
        <Link to="/">ReactColorPeaker</Link>
      </Logo>
      {showingAllColors && (
        <div>
          <span>Level: {level}</span>
          <SliderContainer>
            <Slider
              defaultValue={level}
              min={100}
              step={100}
              max={900}
              onAfterChange={changeLevel}
            />
          </SliderContainer>
        </div>
      )}

      <SelectContainer>
        <Select
          sx={{
            height: "35px",
            width: "15vw",
          }}
          value={format}
          onChange={handleFormatChange}
          id="demo-simple-select"
          label="Format"
        >
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255, 255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
        </Select>
      </SelectContainer>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={3000}
        message={
          <span id="message-id">Format Changed to {format.toUpperCase()}</span>
        }
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        onClose={closeSnackbar}
        action={[
          <IconButton onClick={closeSnackbar} color="inherit" key="close">
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </NavbarContainer>
  );
}
