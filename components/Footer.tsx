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
      <div>this is my link bitch</div>
    </footer>
  );
};

export default Footer;
