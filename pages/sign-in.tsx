import SignInDesktop from "@/components/screens/desktop/SignIn";
import SignInMobile from "@/components/screens/mobile/SignIn";

export default function SignIn() {
  return (
    <main className="flex min-h-screen justify-center">
      <SignInDesktop />
      <SignInMobile />
    </main>
  );
}
