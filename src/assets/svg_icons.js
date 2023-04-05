const favoritesIcon = (
  <svg
    width="14"
    height="18"
    viewBox="0 0 14 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_9197_27976)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0H2C0.9 0 0 0.9 0 2V18L7 15L14 18V2C14 0.9 13.1 0 12 0ZM12 14.97L7 12.83L2 14.97V2H12V14.97Z"
        fill="rgb(185, 145, 133)"
      />
    </g>
    <defs>
      <clipPath id="clip0_9197_27976">
        <rect width="14" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const favoritesBGIcon = (
  <svg
    width="14"
    height="18"
    viewBox="0 0 14 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_9197_27985)">
      <mask
        id="mask0_9197_27985"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="14"
        height="18"
      >
        <path d="M14 0H0V18H14V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_9197_27985)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 14.97L7 12.82L12 14.97V2H2V14.97Z"
          fill="rgb(185, 145, 133)"
          stroke="rgb(185, 145, 133)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 0H2C0.9 0 0 0.9 0 2V18L7 15L14 18V2C14 0.9 13.1 0 12 0ZM12 14.97L7 12.83L2 14.97V2H12V14.97Z"
          fill="rgb(185, 145, 133)"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_9197_27985">
        <rect width="14" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const burgerIcon = (
  <svg
    width="32px"
    height="32px"
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
      <path
        d="M4 18L20 18"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>{" "}
      <path
        d="M4 12L20 12"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>{" "}
      <path
        d="M4 6L20 6"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>{" "}
    </g>
  </svg>
);
const closeIcon = (
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
);

export { favoritesIcon, favoritesBGIcon, burgerIcon, closeIcon };
