import { useAppDispatch } from "@/stores/store";
import { CurrentUserIcon } from "../icons";
import { setProfilePanelVisibility } from "@/features/appPages";

export default function CurrentUser({ email }: { email: any }) {
  const dispatch = useAppDispatch();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
  
  return (
    <div
      id="profile"
      onClick={() => dispatch(setProfilePanelVisibility({ type: "open" }))}
      className="flex z-100 items-center gap-2"
    >
      <CurrentUserIcon />
      <div className="text-sm">
        <p className="text-black-300">Logged in as</p>
        <p className="font-bold text-black-500 ">
          {loggedInUser?.email?.toString()}
        </p>
      </div>
    </div>
  );
}
