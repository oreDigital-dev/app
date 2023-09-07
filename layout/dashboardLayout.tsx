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
import NotificationLayout from "./notificationLayout";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ProfileLayout from "./profileLayout";
import { DashBoardSection, links, rmbLinks } from "@/utils/dataAssets";
import { useAppDispatch } from "@/stores/store";
import {
  setNotificationPanelVisibility,
  setProfilePanelVisibility,
} from "@/features/appPages";

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
      <span className="hidden lg:block">{props.title}</span>
    </div>
  );
};

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [activeLink, setActiveLink] = useState(links[0].title);
  const [visibility, setVisibility] = useState(false);
  const [hiddeNotifications, setHideNotifications] = useState(false);

  useEffect(() => {
    if (router.pathname.includes("/d") || router.pathname.includes("/rmb")) {
      setVisibility(true);
    }
  }, [router.pathname]);

  const setActiveLinkHandler = async (href: string) => {
    if (router.pathname.includes("/d")) {
      await router.push(
        ("/d/" + links.find((link) => link.title === href)?.url) as string
      );
    } else {
      await router.push(
        ("/rmb/" + rmbLinks.find((link) => link.title === href)?.url) as string
      );
    }
    setActiveLink(href);
  };
  const dispatchActions = () => {
    dispatch(setProfilePanelVisibility({ type: "close" }));
    dispatch(setNotificationPanelVisibility({ type: "open" }));
  };
  return (
    <>
      {visibility == true ? (
        <div className="sm:flex gap-0 bg-bg max-w-screen-2xl mx-auto">
          <div className="hidden sm:block w-[20vw]  sticky top-0   bg-white h-screen ">
            <div className="px-[40px] h-[60px] flex items-center border-b-2 border-bg">
              <Logo withText />
            </div>
            <div className="mt-10 px-[20px] ">
              {router.pathname.includes("/d")
                ? links.map((link, index) => (
                    <NavLink
                      isActive={activeLink === link.title}
                      props={link}
                      key={index}
                      setActiveSection={setActiveLinkHandler}
                    />
                  ))
                : rmbLinks.map((link, index) => (
                    <NavLink
                      isActive={activeLink === link.title}
                      props={link}
                      key={index}
                      setActiveSection={setActiveLinkHandler}
                    />
                  ))}
            </div>
          </div>
          <div className="w-[100vw] sm:w-[80vw]">
            <div className="px-5 header h-[60px] sticky top-0 border-l-2 border-bg flex items-center  justify-between bg-white">
              <h1 className="font-bold text-[20px]">{activeLink}</h1>
              <div className="flex items-center hover:cursor-pointer gap-6 ">
                <button
                  onClick={() => dispatchActions()}
                  className="fill-black-300 text-black-300 hover:fill-app hover:text-app "
                >
                  <NofiticationsIcon />
                </button>
                <CurrentUser
                  email={localStorage.getItem("loggedInUser")?.toString()}
                />
              </div>
            </div>

            <NotificationLayout />
            <ProfileLayout />
            <div>{children}</div>
          </div>
          <div className="sm:hidden w-[100vw]  ">
            <div className="mt-10 flex  justify-evenly ">
              {router.pathname.includes("/d")
                ? links.map((link, index) => (
                    <NavLink
                      isActive={activeLink === link.title}
                      props={link}
                      key={index}
                      setActiveSection={setActiveLinkHandler}
                    />
                  ))
                : rmbLinks.map((link, index) => (
                    <NavLink
                      isActive={activeLink === link.title}
                      props={link}
                      key={index}
                      setActiveSection={setActiveLinkHandler}
                    />
                  ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-screen-2xl">{children}</div>
      )}
    </>
  );
}
