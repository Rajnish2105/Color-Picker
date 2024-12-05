import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import {
  ColorBoxContainer,
  CopyOverlay,
  SeeMore,
  ColorName,
  CopyButton,
  CopyMsg,
  CopyText,
  BoxContent,
} from "../Styles/ColorBoxstyles";

export default function ColorBox({ bgcolor, name, moreUrl, showFullPallet }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <CopyToClipboard text={bgcolor} onCopy={handleCopy}>
      <ColorBoxContainer bgcolor={bgcolor} showFullPallet={showFullPallet}>
        <CopyOverlay copied={copied} />
        <CopyMsg copied={copied}>
          <h1>Copied!</h1>
          <CopyText bgcolor={bgcolor}>{bgcolor}</CopyText>
        </CopyMsg>

        <BoxContent>
          <ColorName bgcolor={bgcolor}>{name}</ColorName>
        </BoxContent>
        <CopyButton bgcolor={bgcolor} copied={copied}>
          Copy
        </CopyButton>

        {showFullPallet && (
          <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
            <SeeMore bgcolor={bgcolor}>MORE</SeeMore>
          </Link>
        )}
      </ColorBoxContainer>
    </CopyToClipboard>
  );
}
