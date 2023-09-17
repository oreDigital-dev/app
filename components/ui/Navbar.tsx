import Link from "next/link";
import { useEffect, useState } from "react";
import { OreDigitalText } from "../icons";

const Navbar = () => {
  const navObs: { name: string; path: string }[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/",
    },
    {
      name: "The process",
      path: "/",
    },
    {
      name: "Contact us",
      path: "/",
    },
  ];
  const [showNav, setShowNav] = useState(true);

  const handleScreenResize = () => {
    window.addEventListener("resize", () => {
      console.log(window.screenX);
      if (window.screenX >= 768) {
        setShowNav(true);
      }
    });
  };

  useEffect(() => {
    handleScreenResize();
  }, []);

  return (
    <div>
      <nav className=" md:px-24 msm:px-4 py-2 md:flex items-center justify-between  msm:shadow-lg msm:shadow-slate-200 md:shadow-none absolute msm:h-fit w-full z-30 bg-black-900/40  ">
        <div className="flex items-center justify-between  py-4">
          <div className="hidden md:block">
            <OreDigitalText />
          </div>
        </div>
        {true && (
          <div className="flex msm:flex-col md:flex-row msm:gap-6 md:gap-2 items-center space-x-4 msm:w-full md:w-fit">
            {navObs.map((link, index) => (
              <Link href={link.path} key={index} passHref>
                <span
                  className="md:text-white msm:text-black capitalize hover:text-brand cursor-pointer"
                  onClick={() => setShowNav(false)}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        )}
        <div className="msm:hidden md:flex items-center gap-4">
          <Link href={"https://app-oredigital.vercel.app/create-workspace"} className="text-white">
            Request workspace
          </Link>
          <a href="https://app-oredigital.vercel.app/login">
            <button className="text-white hover:opacity-90 py-3 px-6 rounded-full bg-app font-semibold">
              Login
            </button>
          </a>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
