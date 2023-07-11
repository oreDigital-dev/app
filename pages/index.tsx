import Logo from "@/components/ui/logo";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Home() {
  const router = useRouter();

  const redirectToLogin = () => {
    router.push("/login");
  };
  useEffect(() => {
    setTimeout(() => {
      redirectToLogin();
    },2000)
  }, []);
  return (
    <main className="flex w-sreen h-screen items-center justify-center bg-bg">
      <div className="w-fit h-fit animate-bounce ">
        <Logo withText />
        <p className="text-neutral-300 text-sm font-semibold">Loading...</p>
      </div>
    </main>
  );
}
