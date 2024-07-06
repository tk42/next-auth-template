"use client"

import React from "react"
import CustomLink from "./custom-link"
import { cn } from "@/src/lib/utils"

export function MainNav() {
  return (
    <div className="flex gap-4 items-center">
      <CustomLink href="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </CustomLink>
      <CustomNavigationMenu>
        <CustomNavigationMenuList>
          <CustomNavigationMenuItem>
            <CustomNavigationMenuLink href="/server-example">
              Server Side
            </CustomNavigationMenuLink>
          </CustomNavigationMenuItem>
          <CustomNavigationMenuItem>
            <CustomNavigationMenuLink href="/middleware-example">
              Middleware Side
            </CustomNavigationMenuLink>
          </CustomNavigationMenuItem>

          <CustomNavigationMenuItem>
            <CustomNavigationMenuLink href="/client-example">
              Client Side
            </CustomNavigationMenuLink>
          </CustomNavigationMenuItem>
        </CustomNavigationMenuList>
      </CustomNavigationMenu >
    </div >
  )
}

function CustomNavigationMenu({ children }: { children: React.ReactNode }) {
  return <div className="relative">{children}</div>
}

function CustomNavigationMenuList({ children }: { children: React.ReactNode }) {
  return <ul className="flex">{children}</ul>
}

function CustomNavigationMenuItem({ children }: { children: React.ReactNode }) {
  return <li className="relative">{children}</li>
}

function CustomNavigationMenuLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <CustomLink href={href} className="px-2 py-1 hover:bg-gray-100 rounded">
      {children}
    </CustomLink>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
          {children}
        </p>
      </a>
    </li>
  )
})
ListItem.displayName = "ListItem"