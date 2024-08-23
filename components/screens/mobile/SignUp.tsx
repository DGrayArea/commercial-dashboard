import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { primary } from "@/constants";
import { useRouter } from "next/router";
import React from "react";
import { FaGoogle } from "react-icons/fa";

const SignUpMobile = () => {
  const router = useRouter();
  const handleLogin = () => router.push("/sign-in");
  const handleCreate = () => router.push("/");
  return (
    <div className="w-[390px] h-[806px] px-4 py-6 flex-col justify-start items-center gap-8 inline-flex lg:hidden">
      <div className="w-[200px] h-[25.72px] relative mt-5">
        <Logo />
      </div>
      <div className="self-stretch h-[60px] flex-col justify-center items-center gap-1 flex">
        <div className="self-stretch text-center text-zinc-800 text-[32px] font-bold ">
          Create your account
        </div>
        <div className="text-center text-zinc-500 text-sm font-medium ">
          Please insert your details information
        </div>
      </div>
      <form className="w-full" onSubmit={(e) => e.preventDefault()}>
        <div className="self-stretch h-[67px] mt-3 flex-col justify-start items-start gap-2 flex">
          <div className="text-center text-zinc-800 text-sm font-medium ">
            Name
          </div>
          <div className="self-stretch h-[42px] justify-start items-center gap-2 inline-flex">
            <Input
              placeholder="Insert Your Name"
              className="placeholder:text-zinc-400 h-full grow shrink basis-0 text-zinc-400"
            />
          </div>
        </div>

        <div className="self-stretch h-[67px] mt-3 flex-col justify-start items-start gap-2 flex">
          <div className="text-center text-zinc-800 text-sm font-medium ">
            Email
          </div>
          <div className="self-stretch h-[42px] justify-start items-center gap-2 inline-flex">
            <Input
              type="email"
              placeholder="Insert email"
              className="placeholder:text-zinc-400 h-full grow shrink basis-0 text-zinc-400"
            />
          </div>
        </div>
        <div className="self-stretch h-[67px] mt-3 flex-col justify-start items-start gap-2 flex">
          <div className="text-center text-zinc-800 text-sm font-medium ">
            Password
          </div>
          <div className="self-stretch h-[42px] justify-start items-center gap-2 inline-flex">
            <Input
              type="password"
              placeholder="Insert Password"
              className="placeholder:text-zinc-400 h-full grow shrink basis-0 text-zinc-400"
            />
          </div>
        </div>
      </form>
      <div className="self-stretch h-[108px] flex-col justify-center items-center gap-4 flex">
        <div className="self-stretch px-6 py-3.5 rounded-[14px] border border-neutral-200 justify-start items-center gap-4 inline-flex">
          <div className="">
            <FaGoogle color={primary} size={20} />
          </div>
          <div className="grow shrink basis-0 text-center text-zinc-800 text-base font-medium ">
            Sign in with Google
          </div>
        </div>

        <Button
          onClick={handleLogin}
          variant="outline"
          className="self-stretch h-[42px] px-6 mt-3 py-3.5 bg-white rounded-[14px] justify-center items-center gap-1.5 inline-flextext-center text-orange-400 text-sm font-medium  leading-normal"
        >
          I have an account
        </Button>
      </div>
      <div className="self-stretch h-[66px] mt-3 flex-col justify-center items-center gap-1 flex">
        <div className="self-stretch text-center">
          <span className="text-zinc-500 text-sm font-normal  leading-snug">
            By clicking Create account, you agree to Jioyouout{"'"}s{" "}
          </span>
          <span className="text-zinc-500 text-sm font-semibold  leading-snug">
            Terms and Conditions{" "}
          </span>
          <span className="text-zinc-500 text-sm font-normal  leading-snug">
            and confirm you have read our{" "}
          </span>
          <span className="text-zinc-500 text-sm font-semibold  leading-snug">
            Privacy Notice
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 w-full px-4 py-3 border-t border-t-[#ECECE9]">
        <Button
          onClick={handleCreate}
          className=" border-t w-full h-[42px] px-3 py-1.5 bg-[#FFA43C] rounded-[14px] justify-center items-center gap-1.5  text-center text-white text-sm font-medium leading-normal"
        >
          CREATE MY ACCOUNT
        </Button>
      </div>
    </div>
  );
};

export default SignUpMobile;
