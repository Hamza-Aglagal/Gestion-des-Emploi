import baseUrl from "../../Api/baseUrl"



export const UseDeleteData = async(url, params) => {
    const res = await baseUrl.delete(url, params)
    return res
}

