import React from "react";
import { closeIcon } from "../../assets/svg_icons";

const BtnClose = ({ onClose }) => {
  return (
    <button
      className="btn-close"
      onClick={onClose}
      style={{
        border: "none",
        background: "transparent",
        outline: "none",
        cursor: "pointer",
      }}
    >
      {closeIcon}
    </button>
  );
};

export default BtnClose;
