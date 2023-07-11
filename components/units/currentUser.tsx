import { CurrentUserIcon } from "../icons";

export default function CurrentUser({ email }: { email: string }) {
  return (
    <div className="flex items-center gap-2">
      <CurrentUserIcon />
      <div className="text-sm">
        <p className=" text-black-300">Logged in as</p>
        <p className="font-bold text-black-500 ">{email}</p>
      </div>
    </div>
  );
}
