import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export default function HandPhoneDesktop() {
  const router = useRouter();

  const handleContinue = () => router.push("/verification");

  const handleBack = () => router.back();
  return (
    <div className="bg-white justify-center items-center hidden lg:inline-flex">
      <div className="grow shrink basis-0 self-stretch px-10 py-4 bg-white flex-col justify-center items-center gap-6 inline-flex">
        <div className="w-[200px] h-[25.72px] mb-4">
          <Logo />
        </div>
        <div className="self-stretch h-[60px] flex-col justify-center items-center gap-1 flex">
          <div className="self-stretch text-center text-zinc-800 text-[32px] font-bold">
            Login with phone number
          </div>
          <div className="text-center text-zinc-500 text-sm font-medium">
            Please insert your phone number linked to JioYouOut account
          </div>
        </div>
        <div className="self-stretch h-[42px] flex-col justify-center items-center gap-4 flex">
          <div className="self-stretch h-[42px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch h-[42px] px-1.5 rounded-md border border-stone-200 justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 text-center text-zinc-400 text-base font-normal">
                Insert your phone number
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[100px] flex-col justify-center items-center gap-4 flex">
          <Button
            onClick={handleContinue}
            className="self-stretch h-[42px] px-3 py-1.5 bg-[#FFA43C] rounded-[14px] justify-center items-center gap-1.5 inline-flex text-center text-white text-sm font-medium leading-normal"
          >
            CONTINUE
          </Button>

          <Button
            onClick={handleBack}
            variant="outline"
            className="self-stretch h-[42px] px-3 py-1.5 bg-white rounded-[14px] justify-center items-center gap-1.5 inline-flex text-center text-orange-400 text-sm font-medium leading-normal"
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}
