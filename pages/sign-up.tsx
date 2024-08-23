import SignUpDesktop from "@/components/screens/desktop/SignUp";
import SignUpMobile from "@/components/screens/mobile/SignUp";

export default function SignUp() {
  return (
    <main className="flex min-h-screen justify-center relative">
      <SignUpDesktop />
      <SignUpMobile />
    </main>
  );
}
