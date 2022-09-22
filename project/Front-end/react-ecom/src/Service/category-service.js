import { http } from "./axios-helper";

export const loadCategories=()=>{
    return http.get(`/cat/`).then((response)=>response.data)
}