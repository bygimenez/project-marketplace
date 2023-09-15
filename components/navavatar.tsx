"use client";
import {
  Avatar,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { IconUserCircle, IconBug, IconBrandDiscord, IconShield, IconLogout, IconCloudUpload  } from '@tabler/icons-react';
import {
  type Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function NavbarAvatar({
  avatar_url,
}: {
  avatar_url: string;
}) {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleProfileClick = () => {
    window.location.href = `/home`;
  };

  const handleProfileClick1 = () => {
    window.open(`/discord`, '_blank');
  };
  const handleProfileClick2 = () => {
    window.location.href = `https://github.com/model-ai/model-ai/issues/new`;
  };
  const handleProfileClick3 = () => {
    window.location.href = `/upload`;
  };

  const handleAdminDashboardClick = () => {
    window.location.href = `/admin`;
  };
  
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  const iconClasses = "text-sm text-default-500 pointer-events-none flex-shrink-0";
  const dropdownItems = [
    <DropdownItem key="profile" onClick={handleProfileClick} startContent={<IconUserCircle className={iconClasses} />}>
                <p className="font-semibold">Profile</p>
  </DropdownItem>,
      <DropdownItem key="upload" onClick={handleProfileClick3} isDisabled startContent={<IconCloudUpload className={iconClasses} />}>
      Upload model
    </DropdownItem>,
    <DropdownItem key="discord" onClick={handleProfileClick1} startContent={<IconBrandDiscord className={iconClasses} />}>
      Discord
    </DropdownItem>,
    <DropdownItem key="bug" onClick={handleProfileClick2} startContent={<IconBug className={iconClasses} />}>
    Report a bug
  </DropdownItem>,
      <DropdownItem key="logout" onClick={handleSignOut} className="text-danger" color="danger" startContent={<IconLogout className={iconClasses} />}>
      Logout
    </DropdownItem>,
  ];


  return (
    <div className="flex items-center">
      <Dropdown>
        <DropdownTrigger>
          <Avatar
            isBordered
            color="secondary"
            name="JW"
            src={avatar_url}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          {dropdownItems}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}