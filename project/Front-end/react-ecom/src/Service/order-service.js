import { PrivateHttp } from "./axios-helper";

export const createOrder=(orderDetails)=>{
   console.log(orderDetails.cartID)
   console.log(orderDetails.address)
    return PrivateHttp.post(`/order/`,{
        "address":orderDetails.address,
        "cartID":orderDetails.cartID
    })
    .then(response => response.data)
}
export const getOrder=()=>{
    return PrivateHttp.get(`/order/`).then(response=>response.data)
}