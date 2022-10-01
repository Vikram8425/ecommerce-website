import React from "react";
import { CardBody,Card,Button } from "reactstrap";


function Adminhome(){
 return(
 
  <Card color="primary" >
    <CardBody  className="text-center">
        <h1><b> Welcome to Admin Login </b></h1>
        <p>Start adding the product and managing the  order from here</p>
        <Button color='danger'>Add Product</Button>
    </CardBody>
  </Card>
  
 )   
}
export default Adminhome;