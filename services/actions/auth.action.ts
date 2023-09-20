
import { axios } from "../axios"


export const companyAdminRegistration = (formData: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        axios.post("/companies/create", formData).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err.response)
        })
    })

}
export const loginPerson = (formData: { email: string, password: string, userType: string }) => {
    return new Promise((resolve, reject) => {
        axios.post("/auth/login", formData).then((res) => {
            console.log(res.data);
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        })
    })
}