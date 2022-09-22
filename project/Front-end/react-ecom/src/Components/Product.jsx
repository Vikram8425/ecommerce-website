import { margin } from '@mui/system'
import React from 'react'
import { Button, Card,CardBody, CardText, Container } from 'reactstrap'
import { Base_url } from '../Service/axios-helper'

function Product({product,addToCart}){

    let imagesStyle={
        width:'100%',
        height:'300px',
        objectFit:'contain',
        margin:'15px 0'
    }

    const getProductHtml=()=>{
        return(
            <Card className='mt-2 border-0 shadow-sm'>
        

        <img style={imagesStyle} src={Base_url+'/products/images/'+product.productId} alt="" />


        <CardBody>
            <h5>{product.productName.slice(0,10)}{product.productId}</h5>
        </CardBody>
        <CardText>
            <span>
            {product.productDesc.slice(0,30)}
            {product.category.title}
            </span>
        </CardText>
        <CardText><h5>Prize:₹{product.productPrize}</h5></CardText>
        <Container className='text-'>
            <Button size='sm' className='my-3' color='success'>Buy Now</Button>
            <Button onClick={(event)=>addToCart(product)} size='sm'className='ms-4' color='primary'>Add to Cart</Button>
        </Container>
    </Card>
            
        ) 
        
    }

  return (
    (product) && getProductHtml()
  )
}

export default Product
