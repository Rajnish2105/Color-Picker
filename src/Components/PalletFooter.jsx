import { PalletFooterContainer, Emoji } from "../Styles/PalletFooterStyles";

export default function PalletFooter({ pallet }) {
  return (
    <PalletFooterContainer>
      {pallet.paletteName}
      <Emoji>{pallet.emoji}</Emoji>
    </PalletFooterContainer>
  );
}
