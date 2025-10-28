const VinylRecordSVG = ({ albumCover }: { albumCover: string }) => {
  return (
    <svg
      width="179"
      height="171"
      viewBox="0 0 179 171"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="89.5" cy="104.5" r="89.5" fill="#3C3C3F" />
      <circle
        cx="89.501"
        cy="104.5"
        r="87.06"
        stroke="#6C6D70"
        strokeWidth="1.3"
      />
      <circle
        cx="89.4992"
        cy="104.5"
        r="80.3"
        stroke="#4D4E52"
        strokeWidth="0.5"
      />
      <circle
        cx="89.4995"
        cy="104.5"
        r="69.56"
        stroke="#4D4E52"
        strokeWidth="0.5"
      />
      <circle
        cx="89.4995"
        cy="104.5"
        r="65.98"
        stroke="#4D4E52"
        strokeWidth="0.5"
      />
      <circle
        cx="89.4999"
        cy="104.5"
        r="49.87"
        stroke="#4D4E52"
        strokeWidth="0.5"
      />
      <g>
        <circle
          cx="89.5001"
          cy="104.5"
          r="39.13"
          fill="#4D4E52"
          stroke="#4D4E52"
          strokeWidth="0.5"
        />
        <clipPath id="albumClip">
          <circle cx="89.5001" cy="104.5" r="35" />
        </clipPath>
        <image
          href={albumCover}
          x="54.5001"
          y="69.5"
          width="70"
          height="70"
          clipPath="url(#albumClip)"
        />
      </g>
      <circle cx="89.5009" cy="104.5" r="3.58" fill="#4D4E52" />
      <circle
        cx="89.5009"
        cy="104.5"
        r="3.33"
        stroke="white"
        strokeOpacity="0.3"
        strokeWidth="0.5"
      />
    </svg>
  );
};

export default VinylRecordSVG;
