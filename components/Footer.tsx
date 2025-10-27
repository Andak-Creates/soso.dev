import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-[50px] px-[30px] border-t grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        {/* content */}
        <div className="flex flex-row justify-between items-end">
          {/* about - thanks */}
          <div className="w-[50%]">
            <h1 className="text-[40px]">Logo</h1>
            <h2 className="mt-5">
              I&apos;m Kelvin Andak - a front-end developer && music artist.
              Thanks for checking out my portfolio!
            </h2>
            <p className="mt-[30px]">© 2025 Kelvin Andak</p>
          </div>

          {/* Social Links */}
          <div>
            <div className="shadow-md bg-black w-fit rounded-3xl px-5 py-1.5 flex flex-row gap-3">
              <Link
                href={
                  "https://www.instagram.com/soso.andak?igsh=MWNmOGRyZTgxdWZpaA%3D%3D&utm_source=qr"
                }
                className="text-[20px]"
              >
                <FaInstagram />{" "}
              </Link>

              <Link
                href={
                  "https://www.tiktok.com/@soso.andak?_t=ZS-90nmmXPBfLs&_r=1"
                }
                className="text-[20px]"
              >
                <FaTiktok />
              </Link>

              <Link
                href={"https://www.linkedin.com/in/kelvin-andakuro-2618b92bb"}
                className="text-[20px]"
              >
                <FaLinkedin />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-row justify-between border-t border-[#aaa] md:border-none pt-10 ">
        {/* General */}
        <div>
          <h2 className="font-semibold">General</h2>
          <div className="flex flex-col gap-4 mt-3 text-[#aaa]">
            <Link href={"/"}>Home</Link>

            <Link href={"/"}>About</Link>

            <Link href={"/"}>Projects</Link>

            <Link href={"/"}>Music</Link>
          </div>
        </div>

        {/* Specific links */}
        <div>
          <h2 className="font-semibold">Specifics</h2>
          <div className="flex flex-col gap-4 mt-3 text-[#aaa]">
            <Link href={"/"}>Toolbox</Link>

            <Link href={"/"}>Music</Link>

            <Link href={"/"}>Community Wall</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
