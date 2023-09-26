import { useState } from "react";
import { EmailVerificationIcon } from "../icons";
import ReactInputVerificationCode from "react-input-verification-code";
import Button from "../ui/button";
import Link from "next/link";
import Logo from "../ui/logo";
import { axios } from "@/services/axios";
import { toast } from "react-toastify";
const VerifyAcc = () => {
  const handleResendKey = ()=>{
    console.log('clicked for the resend key')

  }
  const [value, setValue] = useState("");
  const handleVerification = async (payload: {
    email: string;
    verificationCode: number;
  }) => {
    try {
      const res = await axios.post("auth/verify_account", payload);
      toast(`${res.data.message}`, {
        style: {
          backgroundColor: "white",
          color: "green",
        },
        progressStyle: {
          background: "green",
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
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
          onCompleted={(data) => {
            setValue(data);
            console.log(typeof value, "00000000000");
          }}
        />
      </div>
      <div className="flex justify-center">
        <Button
          className="w-4/12 py-[14px] px-10 text-center bg-app text-white rounded-[500px]"
          onClick={() =>
            handleVerification({
              email: localStorage.getItem("email")!,
              verificationCode: Number(value),
            })
          }
        >
          Verify
        </Button>
      </div>
      <Button onClick={handleResendKey}>
        <Link
          href={"/"}
          className="text-app underline decoration-app mx-auto flex justify-center"
        >
          Resend key
        </Link>
      </Button>
    </div>
  );
};
export default VerifyAcc;
