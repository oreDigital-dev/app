import { useAppDispatch } from "@/stores/store";
import { CurrentUserIcon } from "../icons";
import { setProfilePanelVisibility } from "@/features/appPages";
import { useEffect, useState } from "react";

export default function CurrentUser({ email }: { email: any }) {
  const dispatch = useAppDispatch();
  const [role, setRole] = useState("");
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
  console.log(loggedInUser.roles, "====");

  const roles: String[] = [];
  useEffect(() => {
    loggedInUser.roles.forEach((role: any) => {
      roles.push(role.roleName);
    });
    if (roles.includes("SYSTEM_ADMIN")) {
      setRole("RMB");
    } else if (roles.includes("COMPANY_ADMIN")) {
      setRole("COMPANY");
    } else if (roles.includes("RESCUE_TEAM_ADMIN")) {
      setRole("RESCUE_TEAM");
    } else {
      setRole("");
    }
  }, []);

  return (
    <div
      id="profile"
      onClick={() => dispatch(setProfilePanelVisibility({ type: "open" }))}
      className="flex z-100 items-center gap-2"
    >
      <CurrentUserIcon />
      <div className="text-sm">
        <p className="text-black-300">{`Logged in as ${role}`}</p>
        <p className="font-bold text-black-500 ">
          {loggedInUser?.email?.toString()}
        </p>
      </div>
    </div>
  );
}
