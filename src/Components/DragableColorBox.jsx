import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  StyledColorBox,
  BoxContent,
  deleteIconStyles,
} from "../Styles/DragableColorBoxStyles";

export default function DragableColorBox({ bgcolor, name, handleDelete }) {
  return (
    <StyledColorBox style={{ backgroundColor: bgcolor }}>
      <BoxContent bgcolor={bgcolor}>
        <span>{name}</span>
        <DeleteIcon
          onClick={(e) => {
            e.stopPropagation(); // Stop event bubbling to prevent dragging
            handleDelete(e); // Trigger the delete function
          }}
          onPointerDown={(e) => e.stopPropagation()} // Prevent drag event when clicking on DeleteIcon
          sx={deleteIconStyles}
        />
      </BoxContent>
    </StyledColorBox>
  );
}
