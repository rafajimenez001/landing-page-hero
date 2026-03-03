"use client";

import { useEffect, useState } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Image } from "@heroui/image";

export const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={clsx(
        "py-1 transition-shadow duration-300",
        scrolled && "shadow-md border-b border-default-100"
      )}
    >
      {/* ── Logo ── */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand>
          <NextLink href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/logo_color.png"
              alt="Elite Medical"
              className="h-30 w-auto object-contain"
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* ── Desktop nav ── */}
      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem className="flex items-center gap-1">
          {siteConfig.navItems.map((item) => {
            const active = item.href === pathname;
            return (
              <NextLink
                key={item.href}
                href={item.href}
                className={clsx(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                  "after:absolute after:bottom-1 after:left-4 after:right-4 after:h-[2px] after:rounded-full",
                  "after:transition-transform after:duration-250 after:origin-left",
                  active
                    ? "text-[#064194] after:bg-[#064194] after:scale-x-100"
                    : "text-default-600 hover:text-[#064194] after:bg-[#064194] after:scale-x-0 hover:after:scale-x-100 hover:bg-default-100"
                )}
              >
                {item.label}
              </NextLink>
            );
          })}
          <div className="ml-2 pl-2 border-l border-default-200">
            <ThemeSwitch />
          </div>
        </NavbarItem>
      </NavbarContent>

      {/* ── Mobile right ── */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        />
      </NavbarContent>

      {/* ── Mobile menu ── */}
      <NavbarMenu className="pt-6 pb-8 gap-0">
        <div className="flex flex-col gap-1">
          {siteConfig.navItems.map((item, index) => {
            const active = item.href === pathname;
            return (
              <NavbarMenuItem key={`${item.label}-${index}`}>
                <NextLink
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={clsx(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors duration-150",
                    active
                      ? "bg-[#064194]/10 text-[#064194] font-semibold"
                      : "text-default-700 hover:bg-default-100 hover:text-[#064194]"
                  )}
                >
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#064194] flex-shrink-0" />
                  )}
                  {item.label}
                </NextLink>
              </NavbarMenuItem>
            );
          })}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
