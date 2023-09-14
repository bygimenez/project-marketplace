import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { AuthButtonServer } from "./login/auth-button-server";

export default function App() {
  return (
    <Navbar shouldHideOnScroll maxWidth="2xl">
      <NavbarBrand>
      <Link href="/" color="foreground">
        <p className="font-semibold text-inherit">Project <span className="underline underline-offset-2 decoration-purple-800  decoration-2">Marketplace</span></p>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
        <AuthButtonServer />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
