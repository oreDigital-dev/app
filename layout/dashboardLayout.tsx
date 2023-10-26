import Logo from "@/components/ui/logo";
import CurrentUser from "@/components/units/currentUser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NotificationLayout from "./notificationLayout";
import ProfileLayout from "./profileLayout";
import {
  DashBoardSection,
  links,
  mfoLinks,
  rescueTeams,
  rmbLinks,
} from "@/utils/dataAssets";
import { RootState, useAppDispatch } from "@/stores/store";
import { setNotificationPanelVisibility, setRoles } from "@/features/appPages";
import { NofiticationsIcon } from "@/components/icons";
import { useSelector } from "react-redux";
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
      className={`px-[5px] sm:px-[20px] py-[2px] sm:py-[12px] lg:flex items-center gap-4  cursor-pointer  ${
        isActive
          ? "text-white  fill-white bg-app rounded-md"
          : "text-black-500 fill-black-500"
      }`}
      onClick={() => setActiveSection(props.title)}
    >
      <props.icon />
      <span className="block sm:hidden lg:block">{props.title}</span>
    </div>
  );
};

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeLink, setActiveLink] = useState(links[0].title);
  const [visibility, setVisibility] = useState(false);
  const [hiddeNotifications, setHideNotifications] = useState(false);
  const [user, setUser] = useState<any>();
  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")!);
    setUser(loggedInUser);
    let roles: String[] = [""];
    loggedInUser.roles.forEach((role: any) => {
      roles.push(role.roleName);
    });
    dispatch(setRoles(roles));

    if (
      router.pathname.includes("/d") ||
      router.pathname.includes("/rmb") ||
      router.pathname.includes("/mfo")
    ) {
      setVisibility(true);
    } else if (router.pathname.includes("/login")) {
      setVisibility(false);
    }
  }, [router.pathname]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")!);
    setUser(loggedInUser);
    let roles: String[] = [""];
    loggedInUser.roles.forEach((role: any) => {
      roles.push(role.roleName);
    });
    dispatch(setRoles(roles));
    const token = localStorage.getItem("refreshToken");
    if (token == null) {
      router.push("/login");
    }
  }, []);

  const setActiveLinkHandler = async (href: string) => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")!);
    setUser(loggedInUser);
    let roles: String[] = [""];
    user.roles.forEach((role: any) => {
      roles.push(role.roleName);
    });
    dispatch(setRoles(roles));

    if (router.pathname.includes("/d")) {
      await router.push(
        ("/d/" + links.find((link) => link.title === href)?.url) as string
      );
    } else if (router.pathname.includes("/d") && roles.includes("RMB_ADMIN")) {
      await router.push(
        ("/rmb/" + rmbLinks.find((link) => link.title === href)?.url) as string
      );
    } else if (router.pathname.includes("mfo") && roles.includes("MFO")) {
      await router.push(
        ("/mfo/" + mfoLinks.find((link) => link.title === href)?.url) as string
      );
    } else if (
      router.pathname.includes("rescue_teams") &&
      roles.includes("RESCUE_TEAM_ADMIN")
    ) {
      await router.push(
        ("/rescue_team/" +
          mfoLinks.find((link) => link.title === href)?.url) as string
      );
    } else {
      console.log("Invalid href");
    }
    setActiveLink(href);
  };
  const roles: String[] = useSelector(
    (store: RootState) => store.appPages.roles
  );

  const dispatchActions = async () => {
    // dispatch(setProfilePanelVisibility({ type: "close" }));

    dispatch(setNotificationPanelVisibility({ type: "open" }));
  };
  return (
    <>
      {visibility == true ? (
        <div className="sm:flex gap-0 bg-bg">
          {/* max-w-screen-2xl */}
          <div className="hidden sm:block w-[20vw] sticky  top-0   bg-white h-screen ">
            <div className="px-[40px] h-[60px] flex items-center border-b-2 border-bg">
              <Logo withText />
            </div>
            <div className="mt-10 px-[20px] ">
              {roles.includes("COMPANY_ADMIN") &&
                links.map((link, index) => (
                  <NavLink
                    isActive={activeLink === link.title}
                    props={link}
                    key={index}
                    setActiveSection={setActiveLinkHandler}
                  />
                ))}

              {roles.includes("COMPANY_EMPLOYEE") &&
                !roles.includes("COMPANY_ADMIN") &&
                links.map((link, index) => (
                  <NavLink
                    isActive={activeLink === link.title}
                    props={link}
                    key={index}
                    setActiveSection={setActiveLinkHandler}
                  />
                ))}
              {roles.includes("SYSTEM_ADMIN") &&
                rmbLinks.map((link, index) => (
                  <NavLink
                    isActive={activeLink === link.title}
                    props={link}
                    key={index}
                    setActiveSection={setActiveLinkHandler}
                  />
                ))}

              {!roles.includes("SYSTEM_ADMIN") &&
                roles.includes("RMB_EMPLOYEE") &&
                rmbLinks.map((link, index) => (
                  <NavLink
                    isActive={activeLink === link.title}
                    props={link}
                    key={index}
                    setActiveSection={setActiveLinkHandler}
                  />
                ))}

              {roles.includes("RMB_EMPLOYEE") &&
                !roles.includes("RMB_ADMIN") &&
                mfoLinks.map((link, index) => (
                  <NavLink
                    isActive={activeLink === link.title}
                    props={link}
                    key={index}
                    setActiveSection={setActiveLinkHandler}
                  />
                ))}
              {roles.includes("COMPANY_EMPLOYEE") &&
                !roles.includes("COMPANY_ADMIN")}
              {!roles.includes("RESCUE_TEAM_ADMIN") &&
                roles.includes("RESCUE_TEAM_EMPLOYEE") &&
                rescueTeams.map((link, index) => (
                  <NavLink
                    isActive={activeLink === link.title}
                    props={link}
                    key={index}
                    setActiveSection={setActiveLinkHandler}
                  />
                ))}
              {roles.includes("RESCUE_TEAM_ADMIN") &&
                rescueTeams.map((link, index) => (
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
          <div className="sm:hidden w-[100vw]">
            <div className="mt-10 flex w-[100%]">
              {router.pathname.includes("/d") &&
                links.map((link, index) => (
                  <NavLink
                    isActive={activeLink === link.title}
                    props={link}
                    key={index}
                    setActiveSection={setActiveLinkHandler}
                  />
                ))}
              {router.pathname.includes("/mfo") &&
                mfoLinks.map((link, index) => (
                  <NavLink
                    isActive={activeLink === link.title}
                    props={link}
                    key={index}
                    setActiveSection={setActiveLinkHandler}
                  />
                ))}
              {router.pathname.includes("/rmb") &&
                rmbLinks.map((link, index) => (
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
