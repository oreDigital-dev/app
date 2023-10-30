import { axios } from "../axios"

export const getAllNotifications = ():Promise<any>=>{
return new Promise((resolve,reject)=>{
    const token = localStorage.getItem("refreshToken");
    axios.get("notifications/all",{
        headers:{
            'Authorization':`Bearer ${token}`
        }
    }).then((res)=>{
        resolve(res.data)
    }).catch((err)=>{
        console.log(`error from notification service ${err}`)
        reject(err);
    })
})
}