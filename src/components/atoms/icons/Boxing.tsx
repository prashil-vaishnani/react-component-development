const Boxing = () => {
  return (
    <div
      style={{
        width: 112,
        height: 112,
        borderRadius: 56,
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
        background: "linear-gradient(#FFA051, #FF6628)",
      }}
    >
      <div style={{ width: 27, height: 32 }}>
        <svg
          width="27"
          height="32"
          viewBox="0 0 27 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="boxing-glove">
            <rect
              id="Rectangle"
              x="6"
              y="27"
              width="19"
              height="5"
              rx="1"
              fill="white"
            />
            <path
              id="Path"
              d="M20.5 15H13.787C13.1148 17.3638 10.9575 18.996 8.5 19H6C5.44772 19 5 18.5523 5 18C5 17.4477 5.44772 17 6 17H8.5C10.433 17 12 15.433 12 13.5C12 11.567 10.433 10 8.5 10H3C1.34315 10 0 11.3431 0 13V19C0.00330738 22.3123 2.68766 24.9967 6 25H22C24.7601 24.9967 26.9967 22.7601 27 20V11.966C25.3885 13.8886 23.0087 14.9994 20.5 15Z"
              fill="white"
            />
            <path
              id="Path_2"
              d="M8.49997 8C11.3419 8.00398 13.7138 10.1701 13.975 13H20.5C24.0898 13 27 10.0899 27 6.5C27 2.91015 24.0898 3.22293e-06 20.5 3.22293e-06H9.49997C7.50989 -0.00772934 5.6268 0.900111 4.39338 2.46189C3.15997 4.02367 2.71325 6.06589 3.18197 8H8.49997Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Boxing;
