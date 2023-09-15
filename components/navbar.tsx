import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { AuthButtonServer } from "./login/auth-button-server";
import NavAvatar from "./navavatar";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/app/types/database";


export default async function App() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const userId = session?.user?.id;
  let avatarUrl = "";

  if (userId) {
    const { data: userData, error } = await supabase
      .from("users")
      .select("avatar_url")
      .eq("id", userId)
      .single();

    if (!error) {
      avatarUrl = userData?.avatar_url || "";
      console.log(error);
    }
  }

  
  return (
    <Navbar shouldHideOnScroll maxWidth="2xl">
      <NavbarBrand>
      <Link href="/" color="foreground">
        <p className="font-semibold text-inherit">Project <span className="underline underline-offset-2 decoration-purple-800  decoration-2">Marketplace</span></p>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">

        <NavbarItem>
        {
        session !== null && <NavAvatar avatar_url={avatarUrl} />
        }
        <AuthButtonServer />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
