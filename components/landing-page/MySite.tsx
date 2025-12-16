import Image from "next/image";
import Link from "next/link";

const MySite = () => {
  return (
    <section className="relative space-y-10 md:space-y-16 px-3 md:px-[30px] my-[100px]">
      {/* My Site Section */}
      <div className="space-y-4 text-balance">
        <div
          className="relative w-full before:absolute before:top-0 before:h-px 
      before:bg-border-primary/50 before:-left-4 before:right-4 md:before:-left-8 
      md:before:right-8 lg:before:inset-x-0 after:-left-4 after:right-4 md:after:-left-8
       md:after:right-8 lg:after:inset-x-0 after:absolute after:bottom-0 after:h-px
        after:bg-border-primary/50"
        >
          <div className="text-center text-sm font-medium text-indigo-600">
            <span>Music</span>
          </div>
        </div>
        <div
          className="relative w-full before:absolute before:top-0
       before:h-px before:bg-border-primary/50 before:-left-4 before:right-4 
       md:before:-left-8 md:before:right-8 lg:before:inset-x-0 after:-left-4
        after:right-4 md:after:-left-8 md:after:right-8 lg:after:inset-x-0
         after:absolute after:bottom-0 after:h-px after:bg-border-primary/50"
        >
          <h2
            className="text-center text-3xl font-medium leading-10 tracking-tighter
         text-text-primary md:mx-auto md:max-w-lg md:text-4xl"
          >
            This is the part where I keep my music, explore && say hello
          </h2>
        </div>
      </div>

      <div
        className="relative w-full before:absolute before:top-0 before:h-px
     before:bg-border-primary/50 before:-left-4 before:right-4 md:before:-left-8
      md:before:right-8 lg:before:inset-x-0 after:-left-4 after:right-4
       md:after:-left-8 md:after:right-8 lg:after:inset-x-0 after:absolute after:bottom-0
        after:h-px after:bg-border-primary/50"
      >
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {/* Speaking Card */}
          <Link href="/speaking" className="block">
            <div className="group relative flex flex-col rounded-2xl border border-border-primary bg-bg-primary p-6 hover:bg-white overflow-hidden h-[276px]">
              <div
                className="absolute bottom-4 right-4 z-999
               flex h-9 w-9 rotate-6 items-center justify-center 
               rounded-full bg-indigo-200 opacity-0 transition-all
                duration-300 ease-in-out group-hover:-translate-y-2 
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

              <div className="h-full">
                {/* Circular rings SVG */}
                <span className="absolute left-1/2 -translate-x-1/2">
                  <svg
                    className="h-full w-[400px]"
                    viewBox="0 0 368 256"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="86.5"
                      y="108.5"
                      width="195"
                      height="195"
                      rx="97.5"
                      fill="none"
                      stroke="#D6DADE"
                      strokeOpacity="0.5"
                    />
                    <rect
                      x="50.5"
                      y="72.5"
                      width="267"
                      height="267"
                      rx="133.5"
                      fill="none"
                      stroke="#D6DADE"
                      strokeOpacity="0.5"
                    />
                    <rect
                      x="14.5"
                      y="36.5"
                      width="339"
                      height="339"
                      rx="169.5"
                      fill="none"
                      stroke="#D6DADE"
                      strokeOpacity="0.5"
                    />
                    <rect
                      x="-21.5"
                      y="0.5"
                      width="411"
                      height="411"
                      rx="205.5"
                      fill="none"
                      stroke="#D6DADE"
                      strokeOpacity="0.5"
                    />
                  </svg>
                </span>

                {/* Audio waveform */}
                {/* Audio waveform with continuous animation */}
                <span className="absolute bottom-16 left-1/2 z-20 -translate-x-1/2">
                  <svg
                    width="103"
                    height="32"
                    viewBox="0 0 103 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_1_2713)">
                      <rect width="103" height="32" rx="16" fill="#F7F7F8" />
                      <rect
                        x="0.75"
                        y="0.75"
                        width="101.5"
                        height="30.5"
                        rx="15.25"
                        stroke="#D6DADE"
                        strokeOpacity="0.5"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="14"
                        y="10"
                        width="2"
                        height="12"
                        rx="1"
                        fill="#6366f1"
                        className="animate-wave-on-hover"
                        style={{
                          transformOrigin: "center",
                          animationDelay: "0s",
                        }}
                      />
                      <rect
                        x="19"
                        y="7"
                        width="2"
                        height="18"
                        rx="1"
                        fill="#6366f1"
                        className="animate-wave-on-hover"
                        style={{
                          transformOrigin: "center",
                          animationDelay: "0.1s",
                        }}
                      />
                      <rect
                        x="24"
                        y="9"
                        width="2"
                        height="14"
                        rx="1"
                        fill="#6366f1"
                        className="animate-wave-on-hover"
                        style={{
                          transformOrigin: "center",
                          animationDelay: "0.2s",
                        }}
                      />
                      <rect
                        x="29"
                        y="10"
                        width="2"
                        height="12"
                        rx="1"
                        fill="#6366f1"
                        className="animate-wave-on-hover"
                        style={{
                          transformOrigin: "center",
                          animationDelay: "0.3s",
                        }}
                      />
                      <rect
                        x="34"
                        y="8"
                        width="2"
                        height="16"
                        rx="1"
                        fill="#6366f1"
                        className="animate-wave-on-hover"
                        style={{
                          transformOrigin: "center",
                          animationDelay: "0.4s",
                        }}
                      />
                      <rect
                        x="39"
                        y="7"
                        width="2"
                        height="18"
                        rx="1"
                        fill="#6366f1"
                        className="animate-wave-on-hover"
                        style={{
                          transformOrigin: "center",
                          animationDelay: "0.5s",
                        }}
                      />
                      <rect
                        x="44"
                        y="9"
                        width="2"
                        height="14"
                        rx="1"
                        fill="#6366f1"
                        className="animate-wave-on-hover"
                        style={{
                          transformOrigin: "center",
                          animationDelay: "0.6s",
                        }}
                      />
                      <rect
                        x="49"
                        y="10"
                        width="2"
                        height="12"
                        rx="1"
                        fill="#6366f1"
                        className="animate-wave-on-hover"
                        style={{
                          transformOrigin: "center",
                          animationDelay: "0.7s",
                        }}
                      />
                      <rect
                        x="54"
                        y="8"
                        width="2"
                        height="16"
                        rx="1"
                        fill="#6366f1"
                        className="animate-wave-on-hover"
                        style={{
                          transformOrigin: "center",
                          animationDelay: "0.8s",
                        }}
                      />
                      <rect
                        x="59"
                        y="7"
                        width="2"
                        height="18"
                        rx="1"
                        fill="#6366f1"
                        className="animate-wave-on-hover"
                        style={{
                          transformOrigin: "center",
                          animationDelay: "0.9s",
                        }}
                      />
                      <rect
                        x="64"
                        y="9"
                        width="2"
                        height="14"
                        rx="1"
                        fill="#6366f1"
                        className="animate-wave-on-hover"
                        style={{
                          transformOrigin: "center",
                          animationDelay: "1s",
                        }}
                      />
                      <rect
                        x="69"
                        y="10"
                        width="2"
                        height="12"
                        rx="1"
                        fill="#6366f1"
                        className="animate-wave-on-hover"
                        style={{
                          transformOrigin: "center",
                          animationDelay: "0.1s",
                        }}
                      />
                      <rect
                        x="74"
                        y="8"
                        width="2"
                        height="16"
                        rx="1"
                        fill="#6366f1"
                        className="animate-wave-on-hover"
                        style={{
                          transformOrigin: "center",
                          animationDelay: "0.2s",
                        }}
                      />
                      <rect
                        x="79"
                        y="7"
                        width="2"
                        height="18"
                        rx="1"
                        fill="#6366f1"
                        className="animate-wave-on-hover"
                        style={{
                          transformOrigin: "center",
                          animationDelay: "0.3s",
                        }}
                      />
                      <rect
                        x="84"
                        y="9"
                        width="2"
                        height="14"
                        rx="1"
                        fill="#6366f1"
                        className="animate-wave-on-hover"
                        style={{
                          transformOrigin: "center",
                          animationDelay: "0.4s",
                        }}
                      />
                      <rect
                        x="89"
                        y="10"
                        width="2"
                        height="12"
                        rx="1"
                        fill="#6366f1"
                        className="animate-wave-on-hover"
                        style={{
                          transformOrigin: "center",
                          animationDelay: "0.5s",
                        }}
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_i_1_2713"
                        x="0"
                        y="-2"
                        width="103"
                        height="34"
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
                          result="effect1_innerShadow_1_2713"
                        />
                      </filter>
                    </defs>
                  </svg>
                </span>

                {/* Profile images */}
                <div className="flex justify-around">
                  <span className="mt-16">
                    <span className="relative">
                      <svg
                        width="76"
                        height="76"
                        viewBox="0 0 76 76"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_i_1_2749)">
                          <rect width="76" height="76" rx="38" fill="#F7F7F8" />
                          <rect
                            x="0.75"
                            y="0.75"
                            width="74.5"
                            height="74.5"
                            rx="37.25"
                            stroke="#D6DADE"
                            strokeOpacity="0.5"
                            strokeWidth="1.5"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_i_1_2749"
                            x="0"
                            y="-2"
                            width="76"
                            height="78"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
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
                              result="effect1_innerShadow_1_2749"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <Image
                        className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform rounded-full object-cover"
                        alt="Speaker"
                        src="/avatars/image1.jpg"
                        width={64}
                        height={64}
                      />
                    </span>
                  </span>
                  <span className="z-20 mt-4">
                    <span className="relative">
                      <svg
                        width="117"
                        height="116"
                        viewBox="0 0 117 116"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_i_1_2745)">
                          <rect
                            x="0.5"
                            width="116"
                            height="116"
                            rx="58"
                            fill="#F7F7F8"
                          />
                          <rect
                            x="1.25"
                            y="0.75"
                            width="114.5"
                            height="114.5"
                            rx="57.25"
                            stroke="#D6DADE"
                            strokeOpacity="0.5"
                            strokeWidth="1.5"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_i_1_2745"
                            x="0.5"
                            y="-2"
                            width="116"
                            height="118"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
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
                              result="effect1_innerShadow_1_2745"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <Image
                        className="absolute left-1/2 top-1/2 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 transform rounded-full object-cover"
                        alt="Speaker"
                        src="/avatars/image2.jpg"
                        width={100}
                        height={100}
                      />
                    </span>
                  </span>
                  <span className="mt-16">
                    <span className="relative">
                      <svg
                        width="76"
                        height="76"
                        viewBox="0 0 76 76"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_i_1_2749_2)">
                          <rect width="76" height="76" rx="38" fill="#F7F7F8" />
                          <rect
                            x="0.75"
                            y="0.75"
                            width="74.5"
                            height="74.5"
                            rx="37.25"
                            stroke="#D6DADE"
                            strokeOpacity="0.5"
                            strokeWidth="1.5"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_i_1_2749_2"
                            x="0"
                            y="-2"
                            width="76"
                            height="78"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
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
                              result="effect1_innerShadow_1_2749_2"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <Image
                        className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform rounded-full object-cover"
                        alt="Speaker"
                        src="/avatars/image3.jpg"
                        width={64}
                        height={64}
                      />
                    </span>
                  </span>
                </div>

                <div className="absolute inset-0 h-full w-full bg-linear-to-t from-white" />
                <div className="absolute bottom-6 left-6 z-5 grid h-full grid-cols-2 grid-rows-2 items-end gap-8">
                  <div className="col-1 row-start-2 text-balance">
                    <h2 className="mb-2 font-semibold text-black">My Music</h2>
                    <p className="text-[#3a3939]">
                      Check out && listen to my latest tracks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Community Wall Card */}
          <Link href="/community-wall" className="block">
            <div
              className="group relative flex flex-col rounded-2xl border
             border-border-primary bg-bg-primary p-6 hover:bg-white overflow-hidden h-[276px]"
            >
              <div
                className="absolute bottom-4 right-4 z-999 flex h-9 w-9 rotate-6 
              items-center justify-center rounded-full bg-indigo-200 opacity-0
               transition-all duration-300 ease-in-out group-hover:-translate-y-2 
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

              <div
                className="pointer-events-none absolute
               inset-0 z-30 bg-linear-to-tl from-indigo-400/20 via-transparent
                to-transparent opacity-0 transition-opacity duration-300 ease-in-out 
                group-hover:opacity-100 "
              />

              <div
                className="absolute top-0 h-full
               w-full bg-[radial-gradient(#e5e7eb_1px,transparent_2px)] 
               bg-size-[16px_16px] 
               mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
              />

              {/* Polaroid card - left */}
              <svg
                className="absolute top-0 w-48 md:w-40 transition-all duration-1000 delay-1000 
                ease-out group-hover:-translate-y-2 group-hover:rotate-12"
                viewBox="0 0 171 152"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: "translateY(-15px) rotate(-8deg)" }}
              >
                <g clipPath="url(#clip0_1_2784)">
                  <g filter="url(#filter0_d_1_2784)">
                    <g filter="url(#filter1_i_1_2784)">
                      <rect
                        x="-0.170898"
                        y="-17.4697"
                        width="130"
                        height="160"
                        rx="8"
                        transform="rotate(-12 -0.170898 -17.4697)"
                        fill="#F7F7F8"
                      />
                    </g>
                    <g opacity="0.75">
                      <g clipPath="url(#clip1_1_2784)">
                        <rect
                          width="125.899"
                          height="124.298"
                          rx="2.56284"
                          transform="matrix(-0.978148 0.207912 0.207912 0.978148 120.827 -35.0101)"
                          fill="#E6649C"
                        />
                      </g>
                    </g>
                    <circle
                      opacity="0.25"
                      cx="46.9592"
                      cy="117.685"
                      r="10"
                      transform="rotate(-12 46.9592 117.685)"
                      fill="#A5AEB8"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_2784"
                    x="1.31592"
                    y="-43.0114"
                    width="165.451"
                    height="188.558"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="8" dy="8" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.839216 0 0 0 0 0.854902 0 0 0 0 0.870588 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_2784"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_2784"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_i_1_2784"
                    x="1.31592"
                    y="-44.5114"
                    width="157.451"
                    height="182.058"
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
                    <feOffset dy="-1.5" />
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
                      result="effect1_innerShadow_1_2784"
                    />
                  </filter>
                  <clipPath id="clip0_1_2784">
                    <rect width="171" height="152" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_1_2784">
                    <rect
                      width="114"
                      height="116"
                      rx="2"
                      transform="matrix(-0.978148 0.207912 0.207912 0.978148 120.826 -35.0097)"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>

              {/* Polaroid card - right */}
              <svg
                className="absolute -right-5 top-8 w-56 md:right-0 md:top-0 transition-all
                 duration-5000 ease-out group-hover:-translate-y-2 group-hover:-rotate-18"
                viewBox="0 0 214 223"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: "translateY(-5px) rotate(8deg)" }}
              >
                <g filter="url(#filter0_dd_1_2773)">
                  <g filter="url(#filter1_i_1_2773)">
                    <rect
                      x="64.5547"
                      y="8.50171"
                      width="130"
                      height="160"
                      rx="8"
                      transform="rotate(12 64.5547 8.50171)"
                      fill="#F7F7F8"
                    />
                  </g>
                  <g opacity="0.75">
                    <g clipPath="url(#clip0_1_2773)">
                      <rect
                        width="125.899"
                        height="124.298"
                        rx="2.56284"
                        transform="matrix(-0.978148 -0.207912 -0.207912 0.978148 182.226 41.6919)"
                        fill="url(#paint0_linear_1_2773)"
                      />
                    </g>
                  </g>
                  <circle
                    opacity="0.25"
                    cx="52.6379"
                    cy="151.141"
                    r="10"
                    transform="rotate(12 52.6379 151.141)"
                    fill="#A5AEB8"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_1_2773"
                    x="0.775879"
                    y="-22.0115"
                    width="221.451"
                    height="244.558"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="8" dy="8" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.839216 0 0 0 0 0.854902 0 0 0 0 0.870588 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_2773"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="16" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_1_2773"
                      result="effect2_dropShadow_1_2773"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_1_2773"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_i_1_2773"
                    x="32.7759"
                    y="8.48854"
                    width="157.451"
                    height="182.058"
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
                    <feOffset dy="-1.5" />
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
                      result="effect1_innerShadow_1_2773"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1_2773"
                    x1="110.398"
                    y1="-2.56166"
                    x2="-4.8642"
                    y2="120.596"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFD2ED" />
                    <stop offset="1" stopColor="#C691FF" />
                  </linearGradient>
                  <clipPath id="clip0_1_2773">
                    <rect
                      width="114"
                      height="116"
                      rx="2"
                      transform="matrix(-0.978148 -0.207912 -0.207912 0.978148 182.226 41.6921)"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div className="grid h-full grid-cols-2 grid-rows-2 items-end gap-8 group-hover:text-black">
                <div className="col-1 z-10 row-start-2">
                  <h2 className="mb-2 font-semibold">Community Wall</h2>
                  <p className="group-hover:text-[#3a3939]">
                    Let everyone know you were here
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MySite;
