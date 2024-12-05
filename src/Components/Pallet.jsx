import { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PalletFooter from "./PalletFooter";
import { PalletContainer, ColorsContainer } from "../Styles/PalletStyles";

export default function Pallet({ pallet }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  function changeLevel(level) {
    setLevel(level);
  }

  function changeFormat(val) {
    setFormat(val);
  }

  return (
    <PalletContainer>
      <Navbar
        level={level}
        format={format}
        changeLevel={changeLevel}
        changeFormat={changeFormat}
        showingAllColors
      />
      <ColorsContainer>
        {pallet.colors[level].map((col) => (
          <ColorBox
            key={col.id}
            bgcolor={col[format]}
            name={col.name}
            moreUrl={`/pallet/${pallet.id}/${col.id}`}
            showFullPallet
          />
        ))}
      </ColorsContainer>
      <PalletFooter pallet={pallet} />
    </PalletContainer>
  );
}
