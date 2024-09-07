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
import { usePathname } from "next/navigation";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const menuItems = [
    { name: "Services", link: "/services" },
    { name: "Technologies", link: "/technologies" },
    { name: "Clients", link: "/clients" },
    { name: "Blog", link: "/blogs" },
    { name: "Contact", link: "/contact" },
    { name: "About", link: "/about" },
    { name: "Career", link: "/career" },
  ];

  const pathname = usePathname();
  console.log("path", pathname);

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
      className="w-full border-none bg-green-100 bg-opacity-50"
      maxWidth="full" // Ensure Navbar spans full width
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <div className="mx-auto w-full max-w-7xl flex items-center justify-between">
        <NavbarBrand>
          <Link href="/">
            <Image src={logo} width={140} height={100} alt="MAST IT" />
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item) => (
            <NavbarItem key={item.link}>
              <Link
                href={item.link}
                className={`text-black transition delay-150 duration-300 ease-in-out hover:text-red-500 font-bold hover:scale-110 ${
                  pathname === item.link ? "text-red-500" : ""
                }`}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarMenuToggle
          className="sm:hidden text-3xl p-2 text-green-800"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </div>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.link}>
            <Link
              href={item.link}
              className={`w-full ${
                pathname === item.link ? "text-red-500" : "text-black"
              }`}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
