"use client";
import Image from "next/image";
import logo from "../../public/img/Logo.png";
import logoBlack from "../../public/img/LogoBlack.png";
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import DropDown from "./drop-down";

function NavBar() {
  const [mobileMenu, setmobileMenu] = useState(false);

  const { data, status } = useSession();

  function toggleMobileMenu() {
    setmobileMenu(!mobileMenu);
  }
  return (
    <nav
      className="flex items-center justify-between p-4 lg:px-16 "
      aria-label="Global"
    >
      <div className="flex lg:flex-none lg:w-40">
        <Link href="/" className="-m-1.5 p-1.5">
          <Image
            className="h-[80px] lg:h-[120px] w-auto"
            src={logo}
            alt="ProGym"
          />
        </Link>
      </div>
      <div className="flex md:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-light  hover:text-dark-orange"
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="hidden md:flex md:gap-x-16 mr-12">
        <Link
          href="\"
          className="text-[20px] font-semibold leading-6 text-light hover:text-dark-orange"
        >
          خانه
        </Link>
        <Link
          href="\fields"
          className="text-[20px] font-semibold leading-6 text-light transition ease-in-out delay-100  hover:text-dark-orange"
        >
          رشته ها
        </Link>
        <Link
          href="\trainers"
          className="text-[20px] font-semibold leading-6 text-light transition ease-in-out delay-100 hover:text-dark-orange"
        >
          مربیان
        </Link>
        <Link
          href="/aboutus"
          className="text-[20px] font-semibold leading-6 text-light transition ease-in-out delay-100 hover:text-dark-orange"
        >
          درباره ما
        </Link>
      </div>
      <div className="hidden md:flex md:flex-1 gap-x-3	 md:justify-end">
        {data && data.user ? (
          <div className=" text-[20px] font-semibold leading-6 text-light transition ease-in-out delay-100 hover:text-dark-orange">
            {" "}
            <DropDown></DropDown>
          </div>
        ) : (
          <Link
            href="/login"
            className="text-[22px] font-semibold leading-6 text-light transition ease-in-out delay-100 hover:text-dark-orange"
          >
            ورود
          </Link>
        )}
      </div>
      {/* Mobile menu, show/hide based on menu open state.  */}
      {mobileMenu && (
        <div className="md:hidden" role="dialog" aria-modal="true">
          {/* Background backdrop, show/hide based on slide-over state.  */}
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-light px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-dark-gray/10">
            <div className="flex items-center justify-between">
              <Link
                href="\"
                className="-m-1.5 p-1.5"
                onClick={toggleMobileMenu}
              >
                <Image className="h-20 w-auto" src={logoBlack} alt="ProGym" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-dark-gray"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-dark-gray/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="\"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-dark-gray hover:bg-light"
                    onClick={toggleMobileMenu}
                  >
                    خانه
                  </Link>
                  <Link
                    href="\fields"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-dark-gray hover:bg-light"
                    onClick={toggleMobileMenu}
                  >
                    رشته ها
                  </Link>
                  <Link
                    href="\fields"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-dark-gray hover:bg-light"
                    onClick={toggleMobileMenu}
                  >
                    مربیان
                  </Link>
                  <Link
                    href="\aboutus"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-dark-gray hover:bg-light"
                    onClick={toggleMobileMenu}
                  >
                    درباره ما
                  </Link>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-dark-gray hover:bg-light"
                  >
                    ورود
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
