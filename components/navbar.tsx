import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { AuthButtonServer } from "./login/auth-button-server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/app/types/database";
import NavbarAvatar from "./navbar-avatar";

export default async function Navbar() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  const userId = session?.user?.id;
  let avatar_url = "";
  let user_name = "";
  let user_role = "";

  if (userId) {
    const { data: userData, error } = await supabase
      .from("users")
      .select("avatar_url, user_name, user_role")
      .eq("id", userId)
      .single();

      if (!error) {
        avatar_url = userData?.avatar_url || "";
        user_name = userData?.user_name || "";
        user_role = userData?.user_role || "";
        console.log(error);
      }
    }

  return (
    <NextUINavbar maxWidth="2xl" position="sticky" shouldHideOnScroll style={{ width: '100%' }}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-medium text-inherit">ModelAI</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          {userId && (
            <NavbarAvatar
              avatar_url={avatar_url}
              id={userId}
              userFullName={user_name}
              userRole={user_role}
            />
          )}
          <AuthButtonServer />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>
    </NextUINavbar>
  );
}
function filterVideos(videos: any, searchText: any) {
  throw new Error("Function not implemented.");
}

function getUsers(): { data: any } | PromiseLike<{ data: any }> {
  throw new Error("Function not implemented.");
}

function setUser(arg0: {
  avatar_url: string;
  full_name: string | null;
  id: string;
}) {
  throw new Error("Function not implemented.");
}