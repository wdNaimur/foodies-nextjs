"use client";
import classes from "./nav-link.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link
      className={path.startsWith(`${href}`) ? classes.active : undefined}
      href={`${href}`}
    >
      {children}
    </Link>
  );
}
