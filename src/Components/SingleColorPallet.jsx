import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/Components/Navbar";
import ColorBox from "@/Components/ColorBox";
import PalletFooter from "@/Components/PalletFooter";
import {
  PalletContainer,
  ColorsContainer,
  GoBackButton,
} from "@/Styles/PalletStyles";

export default function SingleColorPallet({ pallet, colorId }) {
  const [shades, setShades] = useState(gatherShades(pallet, colorId));
  const [format, setFormat] = useState("hex");

  function changeFormat(val) {
    setFormat(val);
  }

  function gatherShades(pallet, colorToFilter) {
    let shades = [];
    let allColors = pallet.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((col) => col.id === colorToFilter)
      );
    }
    return shades.slice(1);
  }

  return (
    <PalletContainer>
      <Navbar
        format={format}
        changeFormat={changeFormat}
        showingAllColors={false}
      />
      <ColorsContainer>
        {shades.map((col) => (
          <ColorBox
            key={col.name}
            name={col.name}
            bgcolor={col[format]}
            showFullPallet={false}
          />
        ))}
        <GoBackButton>
          <Link to={`/pallet/${pallet.id}`}>Go Back</Link>
        </GoBackButton>
      </ColorsContainer>
      <PalletFooter pallet={pallet} />
    </PalletContainer>
  );
}
