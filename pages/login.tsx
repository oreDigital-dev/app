import Button from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import Input from "@/components/units/input";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { baseUrli, loginTypes } from "@/utils/dataAssets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "@/stores/store";
import {
  setLoggedInSuccessfully,
  setWelcomeMessage,
} from "@/features/appPages";
import Input2 from "@/components/units/input2";

/* eslint-disable react/no-unescaped-entities */
const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState(loginTypes[0]);

  const loginRequest = async (
    email: string,
    password: string,
    accountType: string
  ) => {
    try {
      const response = await axios.post(`${baseUrli}/auth/login`, {
        emailAddress: email,
        password: password,
        logginType: accountType,
      });

      const responseData = await response.data;
      console.log(responseData);
      localStorage.setItem("loggedInUser", JSON.stringify(responseData.user));
      localStorage.setItem("authKey", responseData.token);
      dispatch(
        setWelcomeMessage({ message: "Hi! You've loggedIn successfully" })
      );
      dispatch(setLoggedInSuccessfully({ type: true }));
      router.push("/d/dashboard");
    } catch (error: any) {
      if (error.response.data.status != 500) {
        toast(error.response.data.message);
      } else {
        toast("Some thing went wrong, please try again");
      }
    }
  };

  return (
    <div className="lg:flex md:flex sm:block justify-evenly items-center h-screen lg:w-full md:w-full bg-bg">
      <div className="space-y-10 m-auto lg:w-1/3 md:w-1/2 sm:w-3/4 xs:w-3/4">
        <div className="flex items-center gap-4 sm:pt-8">
          <Logo withText />
        </div>
        <ToastContainer />
        <p className="text-5xl text-black-900 font-bold">
          Login to your account
        </p>
        <p className="text-black-300 sm:pb-12">
          We aim at making your company develop by maximizing security for both
          employees and the products.
        </p>
      </div>
      <div className="rounded-lg lg:w-1/3 md:w-1/3 sm:w-3/4 xs:w-3/4 bg-white h-fit m-auto space-y-4 flex flex-col content-center p-10">
        <p className=" text-2xl font-semibold">Welcome Back!</p>
        <p className="text-black-300">
          Don't have a workspace?{" "}
          <Link href={"/create-workspace"} className="text-app">
            Request yours
          </Link>
        </p>
        <Input
          label="Email address"
          type="email"
          state={email}
          setState={setEmail}
          placeholder={"Email address"}
        />
        <Input2
          label="Login as"
          type="select"
          state={accountType}
          setState={setAccountType}
          placeholder={"Company name"}
        />
        <Input
          label="Password"
          type="password"
          state={password}
          setState={setPassword}
          placeholder={"Your password"}
        />
        <Button onClick={() => loginRequest(email, password, accountType)}>
          Log in
        </Button>
      </div>
    </div>
  );
};

export default Login;