import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import {Row,Col, FormGroup,Input,Table, Button, Container, CardBody,Card, Pagination, PaginationItem, PaginationLink} from "reactstrap"
import { loadProducts,deleteProduct as delete_product, loadSingleProduct } from "../../../Service/product-service";
import { Link, useNavigate } from 'react-router-dom'
function AdminViewproduct(){
    const[product,setProduct]=useState(null)
    const[productSingle,setProductSingle]=useState(null);
    useEffect(()=>{
       loadproductFromServer(0)
           
          
    },[])

    const loadproductFromServer=(pageNumber)=>{
        loadProducts(pageNumber,2).then(data=>{
            setProduct(data)
        }).catch(error=>{
            console.log(error)
        })
    }

    const viewProductAdmin=(productId)=>{
       
    }

    const UpdateProduct=(productId)=>{
      loadSingleProduct(productId).then(data=>{
        setProductSingle(data)
        console.log(productSingle)
      }).catch(error=>{
        console.log(error)
      })
        
    }
    const deleteProduct=(productId)=>{
       delete_product(productId).then(data=>{
          toast.success("product Delete Successfully")
       }).catch(error=>{
        toast.error("Product Can't be Delete anyone cart Having this Product")
       })
       
    }

    const produtcTableHtml=()=>{
        return(
            <Row>

            <Col md={20}>
                    <FormGroup> 
                        <Input style={{
                             width:500,
                             marginLeft:225
                        }} type="text" placeholder="Enter Product Name For Search" /> 
                    </FormGroup>

                    <Table bordered responsive 
                    hover
                    className={'bg-white text-center'}
                    
                    >
                        {/* Start Table Headinig */}
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>title</th>
                            <th>Prize</th>
                            <th>Stock</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th >View Product</th>
                            <th >Update Product</th>
                            <th >Delete Product</th>
                          </tr>
                        </thead>


                        {/* End Table head */}
                        <tbody>
                            {
                                product.content.map((p,index)=>{
                                    
                                    return(
                                        <tr key={index}>
                                        <td>{p.productId}</td>
                                        <td>{p.productName}</td>
                                        <td>{p.productPrize}</td>
                                        <td>{p.stock?"True":"False"}</td>
                                        <td>{p.category.title}</td>
                                        <td>{p.productQuantity}</td>
                                        <td> 
                                            <Button  tag={Link} to={'/viewproduct/'+p.productId}  color="primary"  size="sm" onClick={(event=>viewProductAdmin(p.productId))}>View</Button>
                                            
                                        </td>
                                        <td>
                                        <Button  tag={Link} to={'/admin-dashboard/UpdateProduct/'+p.productId} action='true' color="success" size="sm" >Update</Button>
                                        </td>
                                        <td>
                                        <Button color="danger" size="sm" onClick={event=>deleteProduct(p.productId)}>Delete</Button>
                                        </td>
                                        
                                        </tr>
                                    )
                                })
                            }   
                        </tbody>
                    </Table>
                    <Pagination>
                            {Array.from(Array(product.totalPages),(e,i) =>(
                                <PaginationItem active={i===product.pageNumber}>
                                    <PaginationLink onClick={(()=>loadproductFromServer(i))} >{i}</PaginationLink>
                                </PaginationItem>
                            )
                            )}
                            <PaginationItem disabled={product.lastPage}>
                                <PaginationLink onClick={((event=>loadproductFromServer(product.pageNumber+1)))} next></PaginationLink>
                                
                            </PaginationItem>
                    </Pagination>
            </Col>
        </Row>
        )
    }
    return(

      <Container>
        <Card >
            <CardBody>
                {product && produtcTableHtml()}
            </CardBody>
        </Card>
      </Container>
        
    )
}
export default AdminViewproduct