"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

import { Dropdown } from "flowbite-react";
import { HiCog, HiLogout, HiViewGrid } from "react-icons/hi";
import Link from "next/link";

export default function DropDown(props) {
  const { data, status } = useSession();

  return (
    <Dropdown
      inline
      label={data.user.firstName + " " + data.user.lastName}
      className="bg-dark-gray border-dark-gray"
    >
      <Link href="/users/dashboard">
        <Dropdown.Item
          className="text-[22px] font-semibold leading-6 text-light transition ease-in-out delay-100 hover:text-dark-orange"
          icon={HiViewGrid}
        >
          داشبورد
        </Dropdown.Item>
      </Link>

      {data.user.role === "admin" && (
        <Link href="/admin/dashboard">
          <Dropdown.Item
            className="text-[22px] font-semibold leading-6 text-light transition ease-in-out delay-100 hover:text-dark-orange"
            icon={HiCog}
          >
            داشبورد مدیر
          </Dropdown.Item>
        </Link>
      )}
      <Dropdown.Divider />
      <Dropdown.Item
        className="text-[22px] font-semibold leading-6 text-light transition ease-in-out delay-100 hover:text-dark-orange"
        icon={HiLogout}
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        خروج
      </Dropdown.Item>
    </Dropdown>
  );
}
