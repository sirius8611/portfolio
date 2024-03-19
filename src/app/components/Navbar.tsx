'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Navbar() {
  const path = usePathname();
  const renderLayout = path !== "/" && path !== "_error";
  const {setTheme, resolvedTheme} = useTheme();
  const onClick = resolvedTheme === "dark" ? () => setTheme("light") : () => setTheme("dark");
  const navItems = [
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Projects",
      link: "/projects"
    }
    , 
    ] 
    return (
      <> 
      {/* {renderLayout && ( */}
      <nav className="sticky top-0 mt-2 flex items-center justify-between">
          {/* <ul className="flex items-center justify-between"> */}
            <div className="flex py-2 items-center">
              {/* <li className="pr-3 py-2"> */}
                <Link className=" pr-3" href="/"><Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar></Link>
              {/* </li> */}
              {navItems.map(page => {
                return (
                  // <li className="px-3" key={page.link}>
                    <Link className="px-3 hover:underline focus:font-medium underline-offset-2" href={page.link}>{page.name}</Link>
                  // </li>
                )
              })}
          </div>
            <div className="flex ml-4 items-center space-x-4">
              {/* <li className=""> */}
                <Button variant="outline" size="icon" onClick={onClick}>
                  {resolvedTheme === "light" ? <SunIcon /> : <MoonIcon />}
                </Button>
              {/* </li> */}
            </div>
          {/* </ul> */}
      </nav>
      {/* )} */}
      </>
    );
  }