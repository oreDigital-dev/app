import { axios } from "../axios"


export const createMinesite = (mineSiteInfo: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        axios.post("/minesites/create", mineSiteInfo,{
            headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem("refreshToken") || '{}')}`
        }}
        ).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            console.log(err);
            reject(err);
        })

    })
}
export const getAllMinesites = ():Promise<any>=>{
    return new Promise((resolve,reject)=>{
        axios.get("/minesites/all",{
            headers:{
                'Authorization':`Bearer ${JSON.parse(localStorage.getItem("refreshToken") || '{}')}`
            }
        }).then((res)=>{
            resolve(res.data);
        }).catch((err)=>{
            console.log(err);
            reject(err)
        })
    })
}