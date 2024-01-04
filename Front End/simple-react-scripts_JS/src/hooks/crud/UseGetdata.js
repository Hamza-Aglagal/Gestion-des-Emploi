import baseUrl from "../../Api/baseUrl"



export const UseGetdata = async(url, params) => {
    const res = await baseUrl.get(url, params)
    return res
}


// export const UseGetdata = async(url, params) => {
//     const res = await baseUrl.get(url, params)
//     return res
// }
