import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import Button from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import Input from "@/components/units/input";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { baseUrli, loginTypes } from "@/utils/dataAssets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "@/stores/store";
import {
  setAdminLoggedIn,
  setCompanyAdminLoggedIn,
  setLoggedInSuccessfully,
  setWelcomeMessage,
} from "@/features/appPages";
import Input2 from "@/components/units/input2";
import { axios } from "@/services/axios";
import Loader from "@/components/ui/loader";
import { warn } from "console";
import { loginPerson } from "@/services/actions/auth.action";

/* eslint-disable react/no-unescaped-entities */
const Login = () => {
  const [showError, setShowError] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [type, setType] = useState("password");
  const [loading, setLaoding] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    email: "",
    password: "",
    userType: "",
  });
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState(loginTypes[0]);
  const handleShowPassword = (type: string) => {
    if (type == "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  const validateForm = (email: string, password: string, userTpe: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    error.email = "";
    error.password = "";
    error.userType = "";
    if (!email.trim()) {
      setError({ ...error, email: "Email is required" });
    } else if (!emailPattern.test(email)) {
      setError({ ...error, email: "Please provide a valid email" });
    }
    if (!userTpe.trim()) {
      setError({ ...error, userType: "Usertype is required" });
    }
    if (!password.trim()) {
      setError({ ...error, password: "Password is required" });
    }
  };
  const isFormValid = () => {
    return !Object.values(error).some((error) => error !== "");
  };
  const loginRequest = async (
    email: string,
    password: string,
    userType: string
  ) => {
    try {
      setShowError(false);
      validateForm(email, password, userType);
      if (isFormValid()) {
        setLaoding(true);
        const response: any = await loginPerson({ email, password, userType });
        localStorage.setItem("loggedInProfile", response.data.user);
        toast(`User logged in successfully`, {
          style: {
            backgroundColor: "white",
            color: "green",
          },
          progressStyle: {
            background: "green",
          },
        });
        dispatch(
          setWelcomeMessage({ message: "Hi! You've loggedIn successfully" })
        );
        dispatch(setLoggedInSuccessfully({ type: true }));

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify(response.data.user)
        );
        localStorage.setItem(
          "refreshToken",
          JSON.stringify(response.data.refresh_token)
        );
        if (response.data.user.company) {
          localStorage.setItem(
            "companyId",
            JSON.stringify(response.data.user.company.id)
          );
        }
        setTimeout(async () => {
          await router.push("/d/dashboard");
        }, 2000);
      } else {
        setShowError(true);
      }
    } catch (error: any) {
      console.log(error);
      toast(`${error?.response?.data?.message ?? "Check your credentials"}`, {
        style: {
          backgroundColor: "white",
          color: "red",
        },
        progressStyle: {
          background: "red",
        },
      });
    } finally {
      setLaoding(false);
    }
  };

  return (
    <div className="lg:flex md:flex sm:block justify-evenly items-center h-screen lg:w-full md:w-full xl:w-[100vw] bg-bg">
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
          <Link href={"/auth"} className="text-app">
            Request yours
          </Link>
        </p>
        {showError && (
          <p className="text-center text-red-500 text-lg">
            Please fill all fields
          </p>
        )}
        <Input
          label="Email address"
          type="email"
          state={email}
          setState={setEmail}
          placeholder={"Email address"}
        />
        {error.email !== "" && (
          <p className="text-red-500 text-lg">{error.email}</p>
        )}
        <Input2
          label="Login as"
          type="select"
          state={userType}
          setState={setUserType}
          placeholder={"User Category"}
        />
        {error.userType !== "" && (
          <p className="text-red-500 text-lg">{error.userType}</p>
        )}
        <div className="flex items-center w-full bg-white ">
          <div className="w-[98%]">
            <Input
              className="relative bg-none"
              label="Password"
              type={type}
              state={password}
              setState={setPassword}
              placeholder={"Your password"}
            />
          </div>
          <button onClick={() => handleShowPassword(type)}>
            {type == "password" ? <BsEyeSlashFill /> : <BsEyeFill />}
          </button>
        </div>
        {error.password !== "" && (
          <p className="text-red-500 text-lg">{error.password}</p>
        )}
        <Button
          className={`${
            loading
              ? " w-full py-[14px] px-10 text-center bg-app text-white rounded-md opacity-50"
              : "w-full py-[14px] px-10 text-center bg-app text-white rounded-md"
          }`}
          onClick={() => loginRequest(email, password, userType)}
        >
          {loading ? <Loader /> : "Login"}
        </Button>
      </div>
    </div>
  );
};

export default Login;
