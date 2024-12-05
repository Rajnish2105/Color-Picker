import { memo } from "react";
import {
  Root,
  Colors,
  Title,
  Emoji,
  MiniColors,
  DeleteButton,
} from "@/Styles/MiniPalletStyles";
import DeleteIcon from "@mui/icons-material/Delete";

function MiniPallet({ pallet, goToPallet, openDialog }) {
  function handleClick() {
    goToPallet(pallet.id);
  }

  return (
    <Root onClick={handleClick}>
      <DeleteButton>
        <DeleteIcon
          onClick={(e) => {
            e.stopPropagation();
            openDialog(pallet.id);
          }}
        />
      </DeleteButton>
      <Colors>
        {pallet.colors.map((color) => {
          return (
            <MiniColors
              key={color.name}
              style={{ backgroundColor: color.color }}
            />
          );
        })}
      </Colors>
      <Title>
        {pallet.paletteName}
        <Emoji>{pallet.emoji}</Emoji>
      </Title>
    </Root>
  );
}

export default memo(MiniPallet);
