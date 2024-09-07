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

import logo from "@/asset/mas-logo.jpg";

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

  const menuLinks = [
    "/services",
    "/technologies",
    "/clients",
    "/blogs",
    "/contact",
    "/about",
    "/career",
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
            <Image src={logo} width={100} height={100} alt="MAST IT" />
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
              href="/blogs"
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
{/* 
        <NavbarContent justify="end"></NavbarContent> */}

        <NavbarMenuToggle
          className="sm:hidden text-3xl p-2 text-green-800"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </div>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href={menuLinks[index]} size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
