import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="text-3xl font-extrabold">
        <Logo />
      </div>
    </main>
  );
}
