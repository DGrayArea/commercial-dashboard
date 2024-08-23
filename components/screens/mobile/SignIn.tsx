import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { primary } from "@/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaGoogle } from "react-icons/fa";

const SignInMobile = () => {
  const router = useRouter();

  const handleContinue = () => router.push("/");

  const handleCreate = () => router.push("/sign-up");

  return (
    <div className="w-[390px] h-[806px] p-4 flex-col justify-center items-center gap-8 inline-flex lg:hidden">
      <div className="flex-col justify-center items-center gap-4 flex">
        <div className="w-[280px] h-9 justify-center items-center inline-flex">
          <Logo />
        </div>
        <div className="justify-center items-center gap-2 inline-flex">
          <div className="text-center text-orange-400 text-base font-medium ">
            Stand out your business to more people
          </div>
        </div>
      </div>
      <div className="self-stretch h-[349px] flex-col justify-center items-center gap-4 flex">
        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
          <div className="self-stretch h-[67px] flex-col justify-start items-start gap-2 flex">
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
          <div className="self-stretch h-[67px] flex-col justify-start items-start gap-2 flex">
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

        <Link
          href="/forgot-password"
          className="self-stretch text-zinc-400 text-sm font-medium hover:underline transition-all"
        >
          Forgot password?
        </Link>
        <div className="self-stretch h-[84px] flex-col justify-center items-center flex">
          <Button
            onClick={handleContinue}
            className="self-stretch h-[42px] px-3 py-3.5 bg-[#FFA43C] rounded-[14px] justify-center items-center gap-1.5 inline-flex text-center text-white text-sm font-medium  leading-normal"
          >
            CONTINUE
          </Button>

          <Button
            onClick={handleCreate}
            variant="outline"
            className="self-stretch h-[42px] px-3 mt-3 py-3.5 bg-white rounded-[14px] justify-center items-center gap-1.5 inline-flextext-center text-orange-400 text-sm font-medium  leading-normal"
          >
            Create new account
          </Button>
        </div>
        <div className="self-stretch px-6 py-3.5 rounded-[14px] border border-neutral-200 justify-start items-center gap-4 inline-flex">
          <div className="">
            <FaGoogle color={primary} size={20} />
          </div>
          <div className="grow shrink basis-0 text-center text-zinc-800 text-base font-medium ">
            Sign in with Google
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInMobile;
