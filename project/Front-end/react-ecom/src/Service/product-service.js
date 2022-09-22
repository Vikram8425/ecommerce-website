import { http } from "./axios-helper";

export const loadProducts=(pageNumber="0",pageSize="2",sortBy="productId",sortDir="desc")=>{
  return  http.get(`/product/?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`).then(response=>response.data)
}

export const loadProductByCategory=(
  categoryId,
  pageNumber="0",
  pageSize="9"
  )=>{
    return http
    .get(`/category/${categoryId}/product?pageSize=${pageSize}&pageNumber=${pageNumber}`)
    .then(response=>response.data)

    // /category/1/product?pageSize=1&PageNumbe=2
};