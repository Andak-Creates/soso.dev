"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const NavBar = () => {
  const tabs = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Music", href: "/music" },
  ] as const;

  type TabKey = (typeof tabs)[number]["name"];
  const [activeTab, setActiveTab] = React.useState<TabKey>("Home");

  // State to track scroll
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setShowNav(true);
      } else if (currentScrollY > lastScrollY + 10) {
        // Scrolling down beyond threshold
        setShowNav(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } flex justify-between items-center py-5 px-6 border-b bg-black/70 backdrop-blur-sm`}
    >
      {/* Logo */}
      <div>Logo</div>

      {/* burger */}
      <div className="w-[50px] md:hidden relative flex flex-col gap-2 items-end">
        <div className="h-0.5 w-full bg-white"></div>
        <div className="h-0.5 w-[70%] bg-white"></div>
      </div>

      {/* Nav Menu */}
      <div
        className="border rounded-3xl px-5 py-1.5
      hidden md:flex flex-row gap-10 "
      >
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            href={tab.href}
            className={`${
              activeTab === tab.name ? "font-semibold" : "fadedText"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </Link>
        ))}
      </div>

      {/* Social Links */}
      <div className="border rounded-3xl px-5 py-1.5 hidden md:flex flex-row gap-3 sm:hidden">
        <Link
          href={
            "https://www.instagram.com/soso.andak?igsh=MWNmOGRyZTgxdWZpaA%3D%3D&utm_source=qr"
          }
          className="text-[20px]"
        >
          <FaInstagram />{" "}
        </Link>

        <Link
          href={"https://www.tiktok.com/@soso.andak?_t=ZS-90nmmXPBfLs&_r=1"}
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
  );
};

export default NavBar;
