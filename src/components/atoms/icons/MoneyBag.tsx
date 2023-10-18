const MoneyBag = () => {
  return (
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(#4FBF67,#4FBF67)",
      }}
    >
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="money-bag">
          <path
            id="Path"
            d="M9 4.5L11.5 0.5H2.5L5 4.5"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Path_2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 4.5H5C5 4.5 0.5 7.722 0.5 11.056C0.5 13.278 2.125 15.5 7 15.5C11.875 15.5 13.5 13.278 13.5 11.056C13.5 7.722 9 4.5 9 4.5Z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default MoneyBag;
