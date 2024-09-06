"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import Image from "next/image";

import logo from "@/asset/masit logo-01.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const menuItems = [
    "Services",
    "Technologies",
    "Clients",
    "Blog",
    "Contact",
    "About",
    "Career",
  ];

  useEffect(() => {
    // Handler to call on scroll
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      className="w-full border-none bg-green-100 bg-opacity-50 "
      maxWidth="full" // Ensure Navbar spans full width
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Container to constrain max width */}
      <div className="mx-auto w-full max-w-7xl flex items-center justify-between">
        <NavbarBrand>
          <Link href="/.">
            {/* <Image src={logo} width={50} height={50} alt="MAST IT" /> */}
            <p className="font-bold text-center  text-xl ms-2  text-green-900">
              MAS IT
              <br />
              <span className="text-sm text-red-500">SOLUTIONS</span>
            </p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link
              className="text-black transition delay-150 duration-300 ease-in-out hover:text-red-500 font-bold hover:scale-110"
              href="/services"
            >
              Services
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              className="text-black transition delay-150 duration-300 ease-in-out hover:text-red-500 font-bold hover:scale-110"
              href="/technologies"
            >
              Technologies
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="text-black transition delay-150 duration-300 ease-in-out hover:text-red-500 font-bold hover:scale-110"
              href="clients"
            >
              Clients
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="text-black transition delay-150 duration-300 ease-in-out hover:text-red-500 font-bold hover:scale-110"
              href="/blog"
            >
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="text-black transition delay-150 duration-300 ease-in-out hover:text-red-500 font-bold hover:scale-110"
              href="/career"
            >
              Career
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="text-black transition delay-150 duration-300 ease-in-out hover:text-red-500 font-bold hover:scale-110"
              href="/contact"
            >
              Contact
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="text-black transition delay-150 duration-300 ease-in-out hover:text-red-500 font-bold hover:scale-110"
              href="/about"
            >
              About
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <div className="bg-[#ad0505] text-white px-4 py-2 rounded text-[14px]">
              Get Started
            </div>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenuToggle
          className="sm:hidden text-3xl p-2 text-green-800"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </div>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full "
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
