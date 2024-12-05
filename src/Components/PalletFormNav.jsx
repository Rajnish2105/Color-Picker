import {
  CssBaseline,
  AppBar as MuiAppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import { AddToPhotos } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import PalletMetaForm from "@/Components/PalletMetaForm";

export default function PalletFormNav({
  pallets,
  colors,
  open,
  handleDrawerOpen,
  savePallet,
  drawerWidth,
}) {
  const AppBar = styled(MuiAppBar)(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    height: "64px",
  }));

  const Root = styled("div")({
    display: "flex",
  });

  const NavBtns = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& button": {
      marginRight: "1rem",
      "@media (max-width: 500px)": {
        margin: "0 0.1rem",
        fontSize: "0.8rem",
      },
    },
  });

  return (
    <Root>
      <CssBaseline />
      <AppBar color="default" position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[{ mr: 2 }, open && { display: "none" }]}
          >
            <AddToPhotos />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Create A Pallet
          </Typography>
        </Toolbar>
        <NavBtns>
          <Link to="/">
            <Button variant="contained" color="secondary">
              Go Back
            </Button>
          </Link>
          <PalletMetaForm
            savePallet={savePallet}
            pallets={pallets}
            colors={colors}
          />
        </NavBtns>
      </AppBar>
    </Root>
  );
}
