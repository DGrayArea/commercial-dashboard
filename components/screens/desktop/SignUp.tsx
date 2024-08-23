import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignInOptions, primary } from "@/constants";
import Link from "next/link";

const SignUpDesktop = () => {
  return (
    <div className="w-full h-full lg:flex flex-row items-center justify-between hidden">
      <div className="text-3xl font-extrabold bg-[#FAF1DA] w-[65%] flex min-h-screen justify-center items-center flex-col">
        <Logo />
        <div className="text-[16px] font-medium text-primary mt-2">
          Stand out your business to more people
        </div>
      </div>
      <div className="w-[35%] h-full flex justify-center items-center flex-col">
        <div className="text-[#363330] text-[32px] font-bold spacing">
          Create your account
        </div>
        <div className="tracking-[-0.4px] mt-2">
          Please insert your details information
        </div>
        <div className="flex flex-row space-x-2 mt-4 w-full justify-center">
          {SignInOptions.map((option) => (
            <Link
              href={option.path}
              className="border border-[#E1E1E0] w-[20px] md:w-[132px] text-[14.6px] tracking-[-0.2px] space-x-3 font-medium rounded-md py-[11px] px-[8px] flex flex-row"
              key={option.path + option.name}
            >
              <div>
                <option.icon size={20} color={primary} />
              </div>
              <div>{option.name}</div>
            </Link>
          ))}
        </div>

        <div className="w-[408px] text-center text-zinc-400 text-sm font-medium my-6">
          Or sign up with email
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form Submitted");
          }}
          className="w-full justify-center flex flex-col items-center px-4"
        >
          <div className="w-full h-[67px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="text-center text-zinc-800 text-sm font-medium">
              Name
            </div>
            <div className="self-stretch h-[42px] justify-start items-center gap-2 inline-flex">
              <Input
                className="w-full grow shrink basis-0 placeholder:text-zinc-400"
                placeholder="Insert Your Name"
              />
            </div>
          </div>
          <div className="w-full h-[67px] flex-col justify-start items-start gap-2 inline-flex mt-4">
            <div className="text-center text-zinc-800 text-sm font-medium">
              Email
            </div>
            <div className="self-stretch h-[42px] justify-start items-center gap-2 inline-flex">
              <Input
                type="email"
                className="w-full grow shrink basis-0 placeholder:text-zinc-400"
                placeholder="Insert Email"
              />
            </div>
          </div>

          <div className="w-full h-[67px] flex-col justify-start items-start gap-2 mt-4 inline-flex">
            <div className="text-center text-zinc-800 text-sm font-medium">
              Password
            </div>
            <div className="self-stretch h-[42px] justify-start items-center gap-2 inline-flex">
              <Input
                type="password"
                className="w-full grow shrink basis-0 placeholder:text-zinc-400"
                placeholder="Insert Password"
              />
            </div>
          </div>
          <div className="w-full mt-6">
            <Link href="/" className="w-full">
              <Button
                type="submit"
                className="w-full h-[42px] mt-4 px-3 py-1.5 text-center rounded-[14px] justify-center items-center gap-1.5 inline-flex text-white text-sm bg-[#FFA43C] font-medium leading-normal"
              >
                CONTINUE
              </Button>
            </Link>
            <Link className="w-full" href="/sign-in">
              <Button
                variant="outline"
                className="self-stretch w-full h-[42px] px-3 mt-3 py-1.5 bg-white rounded-[14px] justify-center items-center gap-1.5 inline-flextext-center text-orange-400 text-sm font-medium  leading-normal"
              >
                I have an account
              </Button>
            </Link>
          </div>

          <div className="self-stretch h-[66px] mt-3 flex-col justify-center items-center gap-1 flex">
            <div className="self-stretch text-center">
              <span className="text-zinc-500 text-sm font-normal font-['Inter'] leading-snug">
                By clicking Create account, you agree to Jioyouout{"'"}s
              </span>{" "}
              <span className="text-zinc-500 text-sm font-semibold font-['Inter'] leading-snug">
                Terms and Conditions{" "}
              </span>
              <span className="text-zinc-500 text-sm font-normal font-['Inter'] leading-snug">
                and confirm you have read our{" "}
              </span>
              <span className="text-zinc-500 text-sm font-semibold font-['Inter'] leading-snug">
                Privacy Notice
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpDesktop;
