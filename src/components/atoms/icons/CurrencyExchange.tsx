const CurrencyExchange = () => {
  return (
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(#FF9F38,#FF9F38)",
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="currency-exchange">
          <circle
            id="Oval"
            cx="3"
            cy="3"
            r="2.5"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path"
            d="M8 3.5H14.5V7.5"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_2"
            d="M11 0.5L8 3.5L11 6.5"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            id="Oval_2"
            cx="13"
            cy="13"
            r="2.5"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_3"
            d="M8 12.5H1.5V8.5"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_4"
            d="M5 15.5L8 12.5L5 9.5"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default CurrencyExchange;
