import { axios } from "../axios"

export const getAllNotifications = ():Promise<any>=>{
return new Promise((resolve,reject)=>{
    const token = localStorage.getItem("refreshToken");
    console.log(token)
    axios.get("notifications/all",{
        headers:{
            'Authorization':`Bearer ${token}`
        }
    }).then((res)=>{
        console.log(`notifications from service are ${res.data}`);
        resolve(res.data)
    }).catch((err)=>{
        console.log(`error from notification service ${err}`)
        reject(err);
    })
})
}