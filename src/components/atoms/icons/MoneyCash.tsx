const MoneyCash = () => {
  return (
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(#6C5DD3,#6C5DD3)",
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="money-12">
          <rect
            id="Rectangle"
            x="0.5"
            y="4.5"
            width="15"
            height="11"
            rx="1"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            id="Oval"
            cx="8"
            cy="10"
            r="2.5"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path"
            d="M2.5 2.5H13.5"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_2"
            d="M4.5 0.5H11.5"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default MoneyCash;
