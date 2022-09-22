import { PrivateHttp } from "./axios-helper";

export const createOrder=(orderDetails)=>{
   console.log(orderDetails.cartID)
    return PrivateHttp.post(`/order/`,{
        "address":orderDetails.address,
        "cartID":orderDetails.cartID
     
    })
    .then(response => response.data)
}