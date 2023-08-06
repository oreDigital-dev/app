import {
  AccountsIcon,
  DashBoardIcon,
  EmployeesIcon,
  LogsIcon,
  NofiticationsIcon,
  ReportsIcon,
  SitesIcon,
  SupportIcon,
} from "@/components/icons";
import Logo from "@/components/ui/logo";
import CurrentUser from "@/components/units/currentUser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface DashBoardSection {
  title: string;
  url: string;
  icon: () => JSX.Element;
}

const links: DashBoardSection[] = [
  {
    title: "Dashboard",
    url: "dashboard",
    icon: DashBoardIcon,
  },
  {
    title: "Sites",
    url: "sites",
    icon: SitesIcon,
  },
  {
    title: "Reports",
    url: "reports",
    icon: ReportsIcon,
  },
  {
    title: "Employees",
    url: "employees",
    icon: EmployeesIcon,
  },
  {
    title: "Accounts",
    url: "accounts",
    icon: AccountsIcon,
  },
  {
    title: "Logs",
    url: "logs",
    icon: LogsIcon,
  },
  {
    title: "Support",
    url: "support",
    icon: SupportIcon,
  },
];

const NavLink = ({
  props,
  setActiveSection,
  isActive,
}: {
  props: DashBoardSection;
  setActiveSection: (value: any | null) => void;
  isActive: boolean;
}) => {
  return (
    <div
      className={`px-[20px] py-[12px] flex items-center gap-4  cursor-pointer  ${
        isActive
          ? "text-white  fill-white bg-app rounded-md"
          : "text-black-500 fill-black-500"
      }`}
      onClick={() => setActiveSection(props.title)}
    >
      <props.icon />
      <span>{props.title}</span>
    </div>
  );
};

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(links[0].title);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    if (router.pathname.includes("/d")) {
      setVisibility(true);
    }
  }, [router.pathname]);

  const setActiveLinkHandler = async (href: string) => {
    await router.push(
      ("/d/" + links.find((link) => link.title === href)?.url) as string
    );
    setActiveLink(href);
  };
  return (
    <>
      {visibility == true ? (
        <div className="flex gap-0 bg-bg max-w-screen-2xl mx-auto">
          <div className="w-[20vw]  bg-white h-screen ">
            <div className="px-[40px] h-[60px] flex items-center border-b-2 border-bg">
              <Logo withText />
            </div>
            <div className="mt-10 px-[20px]">
              {links.map((link, index) => (
                <NavLink
                  isActive={activeLink === link.title}
                  props={link}
                  key={index}
                  setActiveSection={setActiveLinkHandler}
                />
              ))}
            </div>
          </div>
          <div className="w-[80vw]">
            <div className="px-5 h-[60px] border-l-2 border-bg flex items-center  justify-between bg-white">
              <h1 className="font-bold text-[20px]">{activeLink}</h1>
              <div className="flex items-center gap-6 ">
                <button className="fill-black-300 text-black-300 hover:fill-app hover:text-app ">
                  <NofiticationsIcon />
                </button>
                <CurrentUser
                  email={localStorage.getItem("loggedInUser")?.toString()}
                />
              </div>
            </div>
            <div>{children}</div>
          </div>
        </div>
      ) : (
        <div className="max-w-screen-2xl">{children}</div>
      )}
    </>
  );
}
