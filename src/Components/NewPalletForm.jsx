import { useState } from "react";
import {
  Box,
  Drawer,
  Typography,
  Divider,
  IconButton,
  Button,
} from "@mui/material";
import { ChevronLeft as ChevronLeftIcon } from "@mui/icons-material";
import DragableColorList from "@/Components/DragableColorList";
import PalletFormNav from "@/Components/PalletFormNav";
import ColorPickerForm from "@/Components/ColorPickerForm";
import {
  Main,
  DrawerHeader,
  Buttons,
  Container,
} from "@/Styles/NewPalletFormStyles";
import SeedColors from "@/utils/SeedColors";

const drawerWidth = 300;
const maxColors = 20;

export default function NewPalletForm({ savePallet, pallets = [] }) {
  const [open, setOpen] = useState(true);
  const [colors, setColors] = useState(SeedColors[0].colors);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleDelete(colorName) {
    setColors((prev) => {
      return prev.filter((col) => col.name !== colorName);
    });
  }

  function clearColors() {
    setColors([]);
  }

  function addRandomColor() {
    const allColors = pallets.map((p) => p.colors).flat();
    let rand;
    let randomColor;
    let isDuplicateColor = true;
    while (isDuplicateColor) {
      rand = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[rand];
      isDuplicateColor = colors.some((col) => col.name === randomColor.name);
    }
    setColors((prev) => {
      return [...prev, randomColor];
    });
  }

  if (pallets.length === 0) {
    return <div>Loading Pallets...</div>;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <PalletFormNav
        colors={colors}
        drawerWidth={drawerWidth}
        pallets={pallets}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        savePallet={savePallet}
      />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />

        <Container>
          <Typography variant="h5" gutterBottom>
            Design Your Pallet
          </Typography>

          <Buttons>
            <Button variant="contained" color="secondary" onClick={clearColors}>
              Clear Pallet
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={addRandomColor}
              disabled={colors.length >= maxColors}
            >
              Random Color
            </Button>
          </Buttons>
          <ColorPickerForm
            setColors={setColors}
            colors={colors}
            maxColors={maxColors}
          />
        </Container>
      </Drawer>
      <Main open={open} drawerWidth={drawerWidth}>
        <DrawerHeader />
        <DragableColorList
          colors={colors}
          handleDelete={handleDelete}
          setColors={setColors}
        />
      </Main>
    </Box>
  );
}
