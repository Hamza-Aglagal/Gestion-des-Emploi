import baseUrl from "src/Api/baseUrl"



export const useUpdateData = async (url, params) => {
    const res = await baseUrl.post(url, params)
    return res
}


export const useUpdateDataWithImg = async (url, params) => {
    const config = {
        headers: { "Content-Type": "multipart/form-data" }
    }
    const res = await baseUrl.post(url, params, config)
    return res.data
}



