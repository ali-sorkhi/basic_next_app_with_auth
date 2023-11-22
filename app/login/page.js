"use client";

import { signIn, useSession } from "next-auth/react";

import ButtonSub from "@/app/components/button-submit";
import { useRef } from "react";

export default function Login() {
  const usernameInput = useRef();
  const passwordInput = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const username = usernameInput.current.value;
    const password = passwordInput.current.value;

    const result = await signIn("credentials", {
      username,
      password,
      callbackUrl: "/users/dashboard",
    });
  };
  return (
    <>
      <div className="mx-auto mt-[130px] mb-[190px] w-[40%] bg-dark-gray/60 rounded-3xl px-[30px] py-[50px]">
        <form className="align-center" onSubmit={submitHandler}>
          <div className="mb-4 flex flex-row">
            <label
              htmlFor="username"
              className="text-[18px] text-light basis-1/4 "
            >
              نام کاربری
            </label>
            <input
              type="username"
              className="w-[300px] mx-2 rounded-md basis-1/2 text-black px-1"
              id="username"
              required
              ref={usernameInput}
            ></input>
          </div>
          <div className="mb-4 flex flex-row">
            <label
              htmlFor="password"
              className="text-[18px] text-light  basis-1/4"
            >
              رمز عبور{" "}
            </label>
            <input
              type="password"
              className="w-[300px] mx-2 rounded-md basis-1/2 text-black px-1"
              id="password"
              required
              ref={passwordInput}
            ></input>
          </div>
          <button type="submit">
            <ButtonSub>ورود</ButtonSub>
          </button>
        </form>
      </div>
    </>
  );
}
