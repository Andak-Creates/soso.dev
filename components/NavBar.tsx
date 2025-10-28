"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const tabs = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Music", href: "/music" },
  ] as const;

  type TabKey = (typeof tabs)[number]["name"];
  const [activeTab, setActiveTab] = React.useState<TabKey>("Home");

  const pathname = usePathname();

  // ✅ Set active tab based on current route
  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.href === pathname);
    if (currentTab) setActiveTab(currentTab.name);
  }, [pathname]);

  // Scroll hide/show logic
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) setShowNav(true);
      else if (currentScrollY > lastScrollY + 10) setShowNav(false);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNav ? "translate-y-0" : "md:-translate-y-full"
      } flex justify-between items-center py-5 px-6 border-b bg-black/70 backdrop-blur-sm`}
    >
      <div>Logo</div>

      {/* burger */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className=" h-6 flex justify-center items-center cursor-pointer"
      >
        <button
          className={`w-[50px] md:hidden relative  flex flex-col cursor-pointer
      gap-2 items-end`}
        >
          <div
            className={`h-0.5  bg-white ${
              isOpen
                ? "rotate-40 w-[70%] absolute  top-1/2 -translate-y-1/2 "
                : "w-full rotate-0"
            }`}
          ></div>
          <div
            className={`h-0.5 w-[70%] bg-white ${
              isOpen ? "-rotate-40  top-1/2 -translate-y-1/2 " : "rotate-0"
            }`}
          ></div>
        </button>
      </div>

      {/* Side Menu Mobile */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-black -z-10 px-6 flex items-center
             transition-transform duration-300 ${
               isOpen ? "translate-x-0 fixed" : "translate-x-full"
             }`}
      >
        <div className="flex flex-col gap-10 w-full">
          {tabs.map((tab) => (
            <Link
              onClickCapture={() => setIsOpen(false)}
              key={tab.name}
              href={tab.href}
              className={`w-full  ${
                activeTab === tab.name
                  ? "font-semibold text-white"
                  : "  fadedText"
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Navbar Desktop */}
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
          >
            {tab.name}
          </Link>
        ))}
      </div>

      {/* Socials */}
      <div className="border rounded-3xl px-5 py-1.5 hidden md:flex flex-row gap-3 sm:hidden">
        <Link
          href={"https://www.instagram.com/soso.andak"}
          className="text-[20px]"
        >
          <FaInstagram />
        </Link>

        <Link
          href={"https://www.tiktok.com/@soso.andak"}
          className="text-[20px]"
        >
          <FaTiktok />
        </Link>

        <Link
          href={"https://www.linkedin.com/in/kelvin-andakuro-2618b92bb"}
          className="text-[20px]"
        >
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
