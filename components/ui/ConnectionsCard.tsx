import Image from "next/image";
import Link from "next/link";

const ConnectionsCard = () => {
  return (
    <div className="md:col-span-12 lg:col-span-7 lg:row-span-8">
      <Link href="/connections" className="block">
        <div
          className="group relative flex flex-col rounded-2xl border
                 border-border-primary bg-bg-primary p-6 hover:bg-white hover:text-black overflow-hidden
                  h-[300px]"
        >
          <div
            className="absolute bottom-4 right-4 z-999 flex h-9 w-9 
                  
                  rotate-6 items-center justify-center rounded-full bg-indigo-200 opacity-0 
                  transition-all duration-300 ease-in-out group-hover:translate-y-2
                   group-hover:rotate-0 group-hover:opacity-100"
          >
            <svg
              className="h-6 w-6 text-indigo-600"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.25 15.25V6.75H8.75"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 7L6.75 17.25"
              />
            </svg>
          </div>
          <div className="pointer-events-none absolute inset-0 z-30 bg-linear-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />

          <div className="flex h-full flex-col">
            <div
              className="absolute inset-y-0 left-0 z-20 w-1/3 bg-linear-to-r 
                    from-bg-primary to-transparent group-hover:from-white"
            />
            <div
              className="absolute inset-y-0 right-0 z-20 w-1/3 bg-linear-to-l
                     from-bg-primary to-transparent group-hover:from-white"
            />

            <div>
              <svg
                className="absolute left-1/2 top-0 -translate-x-1/2"
                width="704"
                height="250"
                viewBox="0 0 637 250"
              >
                <g clipPath="url(#clip0_170_308)">
                  <g filter="url(#filter0_i_170_308)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M-24.5145 175.237C5.95935 205.744 55.3673 205.744 85.8412 175.237C116.315 144.731 116.315 95.2694 85.8412 64.7626C55.3673 34.2558 5.95935 34.2558 -24.5145 64.7626L-79.6924 120L-24.5145 175.237ZM-30.1683 59.1027L-85.3462 114.34L-91 120L-85.3462 125.66L-30.1683 180.897C3.42807 214.53 57.8986 214.53 91.495 180.897C102.486 169.894 109.882 156.654 113.681 142.641C117.481 156.654 124.876 169.894 135.868 180.897C169.464 214.53 223.935 214.53 257.531 180.897L312.709 125.66L318.363 120L312.709 114.34L257.531 59.1027C223.935 25.47 169.464 25.47 135.868 59.1027C124.876 70.106 117.481 83.3459 113.681 97.359C109.882 83.3459 102.486 70.106 91.495 59.1027C57.8986 25.47 3.42807 25.47 -30.1683 59.1027ZM251.877 175.237C221.403 205.744 171.995 205.744 141.522 175.237C111.048 144.731 111.048 95.2694 141.522 64.7626C171.995 34.2558 221.403 34.2558 251.877 64.7626L307.055 120L251.877 175.237ZM385.118 175.237C415.592 205.744 465 205.744 495.474 175.237C525.948 144.731 525.948 95.2694 495.474 64.7626C465 34.2558 415.592 34.2558 385.118 64.7626L329.94 120L385.118 175.237ZM379.464 59.1027L324.287 114.34L318.633 120L324.287 125.66L379.464 180.897C413.061 214.53 467.531 214.53 501.128 180.897C511.657 170.356 518.887 157.762 522.816 144.403C526.746 157.762 533.975 170.356 544.505 180.897C578.101 214.53 632.572 214.53 666.168 180.897L721.346 125.66L727 120L721.346 114.34L666.168 59.1027C632.572 25.47 578.101 25.47 544.505 59.1027C533.975 69.6438 526.746 82.2376 522.816 95.5975C518.887 82.2376 511.657 69.6438 501.128 59.1027C467.531 25.47 413.061 25.47 379.464 59.1027ZM550.159 175.237C580.633 205.744 630.041 205.744 660.514 175.237L715.692 120L660.514 64.7626C630.041 34.2558 580.633 34.2558 550.159 64.7626C519.685 95.2694 519.685 144.731 550.159 175.237Z"
                      fill="#D6DADE"
                      fillOpacity="0.24"
                    />
                  </g>
                  <mask id="path-2-inside-1_170_308" fill="white">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M530.935 62.0924C527.084 67.0776 518.876 67.0706 515.032 62.0796C512.556 58.8646 509.846 55.772 506.902 52.8249C469.842 15.725 409.756 15.725 372.696 52.8249L362.342 63.1907C359.509 66.0262 355.041 66.2786 351.611 64.2065C341.932 58.3606 330.605 55 318.5 55C306.004 55 294.338 58.581 284.458 64.7802C281.014 66.9409 276.466 66.7264 273.593 63.8501L262.942 53.1878C226.082 16.2884 166.321 16.2884 129.462 53.1878C126.674 55.9787 124.097 58.9007 121.73 61.9341C117.882 66.8675 109.765 66.8619 105.928 61.9195C88.6146 39.6164 61.5624 25.266 31.1621 25.266C-21.1017 25.266 -63.4698 67.6799 -63.4698 120C-63.4698 172.32 -21.1017 214.734 31.1621 214.734C61.5623 214.734 88.6146 200.384 105.928 178.081C109.765 173.138 117.882 173.133 121.73 178.066C124.097 181.099 126.674 184.021 129.462 186.812C166.321 223.712 226.082 223.712 262.942 186.812L273.593 176.15C276.466 173.274 281.014 173.059 284.458 175.22C294.338 181.419 306.004 185 318.5 185C330.605 185 341.932 181.639 351.611 175.793C355.041 173.721 359.509 173.974 362.342 176.809L372.696 187.175C409.756 224.275 469.842 224.275 506.902 187.175C509.846 184.228 512.556 181.135 515.032 177.92C518.876 172.929 527.084 172.922 530.935 177.908C548.243 200.309 575.356 214.734 605.835 214.734C658.099 214.734 700.467 172.32 700.467 120C700.467 67.6799 658.099 25.266 605.835 25.266C575.356 25.266 548.243 39.6906 530.935 62.0924Z"
                    />
                  </mask>
                  <path
                    d="M506.902 52.8249L506.194 53.5316L506.194 53.5316L506.902 52.8249ZM372.696 52.8249L371.989 52.1181L371.989 52.1181L372.696 52.8249ZM262.942 53.1878L262.234 53.8945L262.234 53.8945L262.942 53.1878ZM129.462 53.1878L128.754 52.4811L128.754 52.4811L129.462 53.1878ZM129.462 186.812L128.754 187.519L128.754 187.519L129.462 186.812ZM262.942 186.812L262.234 186.106L262.234 186.106L262.942 186.812ZM372.696 187.175L371.989 187.882L371.989 187.882L372.696 187.175ZM506.902 187.175L507.609 187.882L507.609 187.882L506.902 187.175Z"
                    fill="#A5AEB8"
                    fillOpacity="0.12"
                    mask="url(#path-2-inside-1_170_308)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i_170_308"
                    x="-91"
                    y="33.8782"
                    width="818"
                    height="173.744"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="0.75" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.32 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_170_308"
                    />
                  </filter>
                  <clipPath id="clip0_170_308">
                    <rect
                      width="704"
                      height="250"
                      fill="white"
                      transform="translate(-34)"
                    />
                  </clipPath>
                </defs>
              </svg>

              {/* Center profile image */}
              <span className="absolute left-1/2 top-2.5 -translate-x-1/2">
                <div className="relative mt-9">
                  <svg
                    className="mx-auto"
                    width="148"
                    height="148"
                    viewBox="0 0 148 148"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_0_1)">
                      <rect
                        x="16"
                        y="16"
                        width="116"
                        height="116"
                        rx="58"
                        fill="#F7F7F8"
                      />
                      <rect
                        className="stroke-[#D6DADE] transition-colors delay-200 duration-500 group-hover:stroke-indigo-400"
                        x="16.75"
                        y="16.75"
                        width="114.5"
                        height="114.5"
                        rx="57.25"
                        stroke="#D6DADE"
                        strokeWidth="1.5"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_i_0_1"
                        x="16"
                        y="14"
                        width="116"
                        height="118"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="-2" />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_0_1"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <Image
                    className="absolute left-1/2 top-1/2 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 transform rounded-full object-cover"
                    alt="Connection"
                    src="/image1.jpg"
                    width={100}
                    height={100}
                  />
                </div>
              </span>

              {/* Desktop connection images */}
              <span className="hidden md:block">
                <div
                  className="absolute w-12 h-12 p-1 z-10"
                  style={{ top: "55%", left: "23%" }}
                >
                  <div className="rounded-full border border-bg-secondary relative bg-[#EDEEF0] w-12 h-12 p-1 ">
                    <Image
                      className="rounded-full object-cover"
                      alt="Connection"
                      src="/image1.jpg"
                      fill
                    />
                  </div>
                </div>
                <div
                  className="absolute w-16 h-16 p-1 z-10"
                  style={{ top: "53%", left: "67%" }}
                >
                  <div className="rounded-full border border-bg-secondary relative bg-[#EDEEF0] w-16 h-16 p-1">
                    <Image
                      className="rounded-full object-cover"
                      alt="Connection"
                      src="/image2.jpg"
                      fill
                    />
                  </div>
                </div>
                <div
                  className="absolute w-14 h-14 p-1 z-10"
                  style={{ top: "4%", left: "32%" }}
                >
                  <div className="rounded-full border border-bg-secondary relative bg-[#EDEEF0] w-14 h-14 p-1">
                    <Image
                      className="rounded-full object-cover"
                      alt="Connection"
                      src="/image3.jpg"
                      fill
                    />
                  </div>
                </div>
                <div
                  className="absolute w-10 h-10 p-1 z-10"
                  style={{ top: "15%", left: "78%" }}
                >
                  <div className="rounded-full border border-bg-secondary relative bg-[#EDEEF0] w-10 h-10 p-1">
                    <Image
                      className="rounded-full object-cover"
                      alt="Connection"
                      src="/image4.jpg"
                      fill
                    />
                  </div>
                </div>
                <div
                  className="absolute w-9 h-9 p-1 z-10"
                  style={{ top: "5%", left: "7%" }}
                >
                  <div className="rounded-full border border-bg-secondary relative bg-[#EDEEF0] w-9 h-9 p-1">
                    <Image
                      className="rounded-full object-cover"
                      alt="Connection"
                      src="/image1.jpg"
                      fill
                    />
                  </div>
                </div>
              </span>

              {/* Mobile connection images */}
              <span className="lg:hidden">
                <div
                  className="rounded-full border border-bg-secondary 
                        bg-[#EDEEF0] w-10 h-10 p-1 absolute left-4 top-6 md:left-24"
                >
                  <Image
                    className="rounded-full object-cover"
                    alt="Connection"
                    src="/avatars/image1.jpg"
                    fill
                  />
                </div>
                <div className="rounded-full border border-bg-secondary bg-[#EDEEF0] w-12 h-12 p-1 absolute bottom-20 left-14 md:left-52">
                  <Image
                    className="rounded-full object-cover"
                    alt="Connection"
                    src="/avatars/image2.jpg"
                    fill
                  />
                </div>
                <div className="rounded-full border border-bg-secondary bg-[#EDEEF0] w-14 h-14 p-1 absolute right-16 top-4 md:right-52">
                  <Image
                    className="rounded-full object-cover"
                    alt="Connection"
                    src="/avatars/image3.jpg"
                    fill
                  />
                </div>
                <div className="rounded-full border border-bg-secondary  bg-[#EDEEF0] w-11 h-11 p-1 absolute bottom-20 right-4 md:right-12">
                  <Image
                    className="rounded-full object-cover"
                    alt="Connection"
                    src="/avatars/image4.jpg"
                    fill
                  />
                </div>
              </span>
            </div>

            <div className="z-20 mt-auto w-full text-balance text-center">
              <h2 className="text-base font-semibold">Connections</h2>
              <p className="mt-1 text-[#aaa]">
                An evolving list of people I've met and those I wish to meet.
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ConnectionsCard;
