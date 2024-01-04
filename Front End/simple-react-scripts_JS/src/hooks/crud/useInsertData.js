import baseUrl from "../../Api/baseUrl"





export const UseInsertData = async (url, params) => {
    const res = await baseUrl.post(url, params)
    return res
}


export const useInsertDataWithImg = async (url, params) => {
    const config = {
        headers: { "Content-Type": "multipart/form-data" }
    }
    const res = await baseUrl.post(url, params, config)
    return res.data
}



