import React, { Component } from 'react';
import {Form , Col , Row,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Doctor extends Component {
    state = {  }
    
    render() { 
        return ( 
            <React.Fragment>
               
                <div class="container" style={{marginTop:25,backgroundColor:'#85a3e0',
            width:'50%'}}>
              
                <Form>
               <h6>BOOK APPOINTMENT</h6>
            <hr/>
    <Form.Group className="mb-3" controlId="formGridfullName">

      <Form.Control type="text" placeholder=" Enter Full Name" />
    </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress1">

    <Form.Control  type=" number" placeholder="Enter Mobile Number" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGridAddress1">

    <Form.Control  type=" email" placeholder=" Enter Email Address" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGriddate">
 
    <Form.Control  type="date" placeholder="Appointment Date" />
  </Form.Group>
  <br/>
  <h6>ADDRESS DETAILS</h6>
            <hr/>
  <Row className="mb-3">
  <Form.Group as ={Col} controlId="formGridAddress">
    <Form.Control type="textarea" placeholder=" Enter Address" /> 
    </Form.Group>
    <Form.Group as={Col} controlId="formGridCity">
     
      <Form.Control type="text" placeholder="Enter City" />
    </Form.Group>
    </Row>
   
    <Row className="mb-3">
  <Form.Group as ={Col} >
    <Form.Control type="text" placeholder="Enter State" /> 
    </Form.Group>
    <Form.Group as={Col} controlId="formGridZip">
     
      <Form.Control type="number" placeholder="Enter Zip" />
    </Form.Group>
    </Row>

  <Button variant="primary" type="submit" style={{width:'100%'}}>
  BOOK APPOINTMENT
  </Button>
  
</Form>
</div>

            </React.Fragment>
         );
    }
}
 
export default Doctor;