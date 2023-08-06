import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFoundPage() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/d/dashboard");
    }, 2000);
  }, []);

  return (
    <div className="items-center h-[100vh]  justify-center flex">
      <h1 className="text-xl  text-center">
        Hello there , This page is still under construction
      </h1>
    </div>
  );
}
