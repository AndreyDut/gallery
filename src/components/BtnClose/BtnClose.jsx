import React from "react";

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
      <svg
        width="34px"
        height="34px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g id="Menu / Close_LG">
            {" "}
            <path
              id="Vector"
              d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>{" "}
        </g>
      </svg>
    </button>
  );
};

export default BtnClose;
