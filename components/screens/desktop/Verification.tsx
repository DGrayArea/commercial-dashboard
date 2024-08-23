import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/router";

const VerificationDesktop = () => {
  const router = useRouter();

  const handleContinue = () => router.push("/");

  const handleBack = () => router.push("/change-number");

  return (
    <div className="w-[1366px] h-[834px] px-[439px] bg-white justify-center items-center hidden lg:inline-flex">
      <div className="grow shrink basis-0 self-stretch px-10 py-4 bg-white flex-col justify-center items-center gap-6 inline-flex">
        <Logo />
        <div className="self-stretch h-[60px] flex-col justify-center items-center gap-1 flex">
          <div className="self-stretch text-center text-zinc-800 text-[32px] font-bold">
            Insert verification code
          </div>
          <div className="text-center text-zinc-500 text-sm font-medium">
            Please check your email and insert the code we sent
          </div>
        </div>
        <div className="self-stretch justify-center items-center gap-2 inline-flex">
          <div className="grow shrink basis-0">
            <Input
              className="grow shrink basis-0 h-[42px] text-center placeholder:text-zinc-400 text-base font-normal"
              placeholder="0"
            />
          </div>
          <div className="grow shrink basis-0">
            <Input
              className="grow shrink basis-0 h-[42px] text-center placeholder:text-zinc-400 text-base font-normal"
              placeholder="0"
            />
          </div>
          <div className="grow shrink basis-0">
            <Input
              className="grow shrink basis-0 h-[42px] text-center placeholder:text-zinc-400 text-base font-normal"
              placeholder="0"
            />
          </div>
          <div className="grow shrink basis-0">
            <Input
              className="grow shrink basis-0 h-[42px] text-center placeholder:text-zinc-400 text-base font-normal"
              placeholder="0"
            />
          </div>
          <div className="grow shrink basis-0">
            <Input
              className="grow shrink basis-0 h-[42px] text-center placeholder:text-zinc-400 text-base font-normal"
              placeholder="0"
            />
          </div>
        </div>
        <div className="self-stretch h-[100px] flex-col justify-center items-center gap-4 flex">
          <Button
            onClick={handleContinue}
            className="w-[408px] h-[42px] px-3 py-1.5 bg-orange-400 rounded-[14px] justify-center items-center gap-4 inline-flex text-center text-white text-sm font-medium leading-normal"
          >
            CONTINUE
          </Button>
          <Button
            onClick={handleBack}
            variant="outline"
            className="w-[408px] h-[42px] px-3 py-1.5 bg-white rounded-[14px] justify-center items-center gap-4 inline-flex text-center text-orange-400 text-sm font-medium leading-normal"
          >
            Change phone number
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerificationDesktop;
