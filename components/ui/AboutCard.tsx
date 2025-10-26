import Image from "next/image";
import Link from "next/link";

const AboutCard = () => {
  return (
    <div className="col-span-1 md:col-span-5 lg:col-span-5 lg:row-span-6">
      <Link href="/about" className="block">
        <div className="group relative flex flex-col rounded-2xl border border-border-primary bg-bg-primary p-6 hover:bg-white hover:text-black overflow-hidden h-[275px] md:h-[304px] lg:h-[220px]">
          <div className="absolute bottom-4 right-4 z-999 flex h-9 w-9 rotate-6 items-center justify-center rounded-full bg-indigo-200 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-[-8px] group-hover:rotate-0 group-hover:opacity-100">
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
                  inset-0 z-30 bg-linear-to-tl from-indigo-400/20 
                  via-transparent to-transparent opacity-0 transition-opacity 
                  duration-300 ease-in-out group-hover:opacity-100"
          />

          {/* About content */}
          <div className="flex h-full">
            <div className="text-balance">
              <h2 className="mb-4 text-base font-semibold">
                Learn more about me
              </h2>
              <p className="mb-2 text-balance pr-1 text-[#aaa] md:pr-4">
                Good evening! <br />
                I'm Kelvin, an experienced front-end developer.
              </p>
            </div>

            <div className="p-2 bg-white border rounded-lg h-[500px]">
              <div className="w-40 h-[300px] bg-black p-2 rounded-lg relative shrink-0">
                <Image
                  src={"/image1.jpg"}
                  alt="profile image"
                  fill
                  className="object-cover rotate-6 scale-[1.1] -mt-2.5 lg:scale-[1] lg:group-hover:rotate-4 lg:group-hover:scale-[1.1] rounded-lg transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AboutCard;
