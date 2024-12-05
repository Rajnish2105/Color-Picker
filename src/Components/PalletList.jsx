import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MiniPallet from "./MiniPallet";
import { Root, Container, Pallets, Nav } from "@/Styles/PalletListStyles";
import { CSSTransition } from "react-transition-group";
import { Check as CheckIcon, Close } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import { blue, red } from "@mui/material/colors";

export default function PalletList({ allPallets, deletePallet }) {
  const navigate = useNavigate();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deletingId, setDeletingId] = useState("");

  function openDialog(id) {
    setOpenDeleteDialog(true);
    setDeletingId(id);
  }

  function closeDialog() {
    setOpenDeleteDialog(false);
    setDeletingId("");
  }

  function handleDelete() {
    deletePallet(deletingId);
    closeDialog();
  }

  function goToPallet(id) {
    navigate(`/pallet/${id}`);
  }

  return (
    <Root>
      <Container>
        <Nav>
          <h1>React Colors</h1>
          <Link to="/pallet/new">Create Pallet</Link>
        </Nav>
        <Pallets>
          {allPallets.map((pallet) => {
            return (
              <CSSTransition key={pallet.id} classNames="fade" timeout={500}>
                <MiniPallet
                  pallet={pallet}
                  goToPallet={goToPallet}
                  openDialog={openDialog}
                />
              </CSSTransition>
            );
          })}
        </Pallets>
      </Container>

      <Dialog
        open={openDeleteDialog}
        aria-labelledby="delete-dialog-title"
        onClose={closeDialog}
      >
        <DialogTitle id="delete-dialog-title">Delete this Pallet?</DialogTitle>
        <List>
          <ListItem button sx={{ cursor: "pointer" }} onClick={handleDelete}>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: blue[100], color: blue[600] }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete" />
          </ListItem>
          <ListItem button sx={{ cursor: "pointer" }} onClick={closeDialog}>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: red[100], color: red[600] }}>
                <Close />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItem>
        </List>
      </Dialog>
    </Root>
  );
}
