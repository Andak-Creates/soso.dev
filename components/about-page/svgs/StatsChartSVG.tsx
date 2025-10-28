const StatsChartSVG = () => {
  return (
    <svg
      className="w-fit overflow-hidden rounded-2xl mx-auto border-6 border-white bg-[#cfcfcf]"
      height="166"
      viewBox="0 0 252 166"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 0.5H236C244.56 0.5 251.5 7.43959 251.5 16V165.5H0.5V16C0.5 7.43959 7.43959 0.5 16 0.5Z"
        stroke="#D6DADE"
        strokeOpacity="0.5"
      />
      {/* Chart bars */}
      <path
        d="M24 73C24 70.7909 25.7909 69 28 69H40C42.2091 69 44 70.7909 44 73V146H24V73Z"
        fill="#6C47FF"
      />
      <path
        d="M208 79C208 76.7909 209.791 75 212 75H224C226.209 75 228 76.7909 228 79V146H208V79Z"
        fill="#6C47FF"
      />
      <path
        d="M178 45C178 42.7909 179.791 41 182 41H194C196.209 41 198 42.7909 198 45V146H178V45Z"
        fill="#6C47FF"
      />
      <path
        d="M148 70C148 67.7909 149.791 66 152 66H164C166.209 66 168 67.7909 168 70V146H148V70Z"
        fill="#6C47FF"
      />
      <path
        d="M118 99C118 96.7909 119.791 95 122 95H134C136.209 95 138 96.7909 138 99V146H118V99Z"
        fill="#6C47FF"
      />
      <path
        d="M88 88C88 85.7909 89.7909 84 92 84H104C106.209 84 108 85.7909 108 88V146H88V88Z"
        fill="#6C47FF"
      />
      <path
        d="M58 52C58 49.7909 59.7909 48 62 48H74C76.2091 48 78 49.7909 78 52V146H58V52Z"
        fill="#6C47FF"
      />
    </svg>
  );
};

export default StatsChartSVG;
