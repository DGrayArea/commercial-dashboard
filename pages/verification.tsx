import VerificationDesktop from "@/components/screens/desktop/Verification";
import VerificationMobile from "@/components/screens/mobile/Verification";

export default function VerificationCode() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center relative`}
    >
      <VerificationDesktop />
      <VerificationMobile />
    </div>
  );
}
