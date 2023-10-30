
import authHeader from "@/pages/api-services/auth-header";
import { axios } from "../axios"
export const loginPerson = (formData: { email: string, password: string, userType: string }) => {
    return new Promise((resolve, reject) => {
        axios.post("/auth/login", formData,{
            headers:authHeader()
        }).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        })
    })
}