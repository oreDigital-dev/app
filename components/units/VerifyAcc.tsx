import { useState } from "react";
import { EmailVerificationIcon } from "../icons";
import ReactInputVerificationCode from "react-input-verification-code";
import Button from "../ui/button";
import Link from "next/link";
import Logo from "../ui/logo";
const VerifyAcc = () => {
  const [value, setValue] = useState("");

  return (
    <div className=" w-[100%] space-y-8 ">
      <div className="flex justify-center">
        <Logo withText />
      </div>
      <div className="w-full flex justify-center font-semibold text-lg">
        Verify your email
      </div>
      <div className="flex justify-center">
        <EmailVerificationIcon />
      </div>
      <div className={"px-12 text-gray-500"}>
        <p>
          we have sent an administration key on your email.Please enter the
          administration key below
        </p>
      </div>
      <div className="flex justify-center custom-styles">
        <ReactInputVerificationCode
          autoFocus
          placeholder=""
          onChange={console.log}
        />
      </div>
      <div className="flex justify-center">
        <Button className="w-4/12 py-[14px] px-10 text-center bg-app text-white rounded-[500px]">
          Next
        </Button>
      </div>
      <Link
        href={"/"}
        className="text-app underline decoration-app mx-auto flex justify-center"
      >
        Resend key
      </Link>
    </div>
  );
};
export default VerifyAcc;
