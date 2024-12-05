import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export default function PalletMetaForm({ savePallet, pallets, colors }) {
  const navigate = useNavigate();
  const [stage, setStage] = useState("noshow");
  const [newPalletName, setNewPalletName] = useState("");
  const {
    register: register1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 },
    reset: resetPallet,
  } = useForm();

  const handleClickOpen = () => {
    setStage("form");
  };

  const handleClose = () => {
    setStage("noshow");
  };

  function showEmojiPicker(data1) {
    setStage("emoji");
    setNewPalletName(data1.Palletname);
  }

  function makeNewPallet(emoji) {
    const newPallet = {
      paletteName: newPalletName,
      id: newPalletName.toLowerCase().replace(/ /g, "-"),
      emoji: emoji.native,
      colors: colors,
    };
    savePallet(newPallet);
    navigate("/");
    resetPallet();
    setStage("noshow");
  }

  const validatePalletName = (value) => {
    if (!value) return "Pallet Name is required";
    if (
      pallets.some(
        (col) => col.paletteName.toLowerCase() === value.toLowerCase()
      )
    ) {
      return `${value} is already used`;
    }
    return true;
  };

  return (
    <>
      <Dialog open={stage === "emoji"} onClose={handleClose}>
        <Picker data={data} onEmojiSelect={makeNewPallet} />
      </Dialog>

      <Button variant="contained" onClick={handleClickOpen}>
        Save Pallet
      </Button>

      <Dialog open={stage === "form"} onClose={handleClose}>
        <DialogTitle>Saving a Pallet</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can save Pallet from here and you can't give two pallets same
            Name as you can't name two colors the same way.
          </DialogContentText>

          <form
            onSubmit={handleSubmit1(showEmojiPicker)}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <label>
              <input
                {...register1("Palletname", { validate: validatePalletName })}
                style={{
                  width: "35vw",
                  padding: "5px",
                  fontSize: "1rem",
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                  border: "none",
                  borderBottom: "2px solid",
                  borderColor: errors1.Palletname ? "red" : "black",
                  outline: "0",
                  color: errors1.Palletname ? "red" : "black",
                  paddingTop: "0.7rem",
                }}
              />
              {errors1.Palletname && (
                <div
                  style={{
                    color: "red",
                    marginLeft: "0.5rem",
                  }}
                >
                  {errors1.Palletname.message}
                </div>
              )}
            </label>
            <DialogActions
              sx={{
                mr: "0.5rem",
                ml: "auto",
              }}
            >
              <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
