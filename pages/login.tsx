import Button from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import Input from "@/components/units/input";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

/* eslint-disable react/no-unescaped-entities */
const Login = () => {
  const router  = useRouter();
  const [companyName,setCompanyName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [accountType, setAccountType ] = useState('')
 
  const loginRequest = async(email: string, password: string, accountType: string) => {
    try {
      const response = await axios.post(`https://ore-d-iot.onrender.com/api/v1/auth/login?loginType=${accountType}`, {
        emailAddress: email,
        password: password
      })
      const responseData = await response.data
      localStorage.setItem('authKey', responseData.token)
      router.push('/d/logs')
  
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className=" h-screen w-screen flex flex-col md:flex-row items-center justify-center content-center  bg-bg">
        <div className="space-y-10 m-auto">
          <div className="flex items-center gap-4">
            <Logo withText />
          </div>
          <p className="text-5xl text-black-900 font-bold w-[50%] ">Login to your account</p>
          <p className=" w-[65%] text-black-300">
            We aim at making your company develop by maximizing security for
            both employees and the products.
          </p>
        </div>
        <div className="rounded-lg w-[30%] bg-white px-12 h-fit m-auto space-y-4 flex flex-col justify-center content-center  p-10">
            <p className=" text-2xl font-semibold">Welcome Back!</p>
            <p className="text-black-300">Don't have a workspace? <Link href={'/create-workspace'} className="text-app">Request yours</Link></p>
            <Input label="Email address" type="email" state={email} setState={setEmail}  placeholder={'Email address'} />
            <Input  label="Login as" type="select" state={accountType} setState={setAccountType}  placeholder={'Company name'} />
            <Input label="Password" type="password" state={password} setState={setPassword}  placeholder={'Your password'} />
            <Button onClick={() =>loginRequest(email, password, accountType)}>Log in</Button>
        </div>
      </div>
  );
};  

export default Login;


