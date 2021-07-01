import React ,{Component} from 'react';
import {Form, Button,Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Contact extends Component {
    style={
        width:'50%'
    }
    style1={
        color:'blue',
        fontSize:20, 
        marginTop:15
       
    }
    style2={backgroundColor:'#85a3e0'}
    render() { 
         return ( 
            <React.Fragment>
                <div style={this.style2}>
                <center>
                
                    <h1 style={this.style1}> 
                        We like meeting new people.
                    </h1>
                    <p><i>
                    Use this form and we’ll be in touch.
                    </i></p>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                            <Form.Control type="text" placeholder="First Name" style={this.style} required />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Control type="text" placeholder="Last Name"style={this.style} required  />
                            </Form.Group>
                         </Row>
                        <Row className="mb-3">
                         <Form.Group as={Col}>
                            <Form.Control type="email" placeholder="Email" style={this.style} required />
                        </Form.Group>
                        <Form.Group as={Col}>
                             <Form.Control type="number" placeholder="Phone" style={this.style} required />
                        </Form.Group>
                         </Row>
                        <Form.Group className="mb-3">
                          <Form.Control  type ="textarea"placeholder=" Comment" style={{width:"75%" , height:'100px'}} required />
                        </Form.Group>


                        <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="warning" type="submit" style={{width:"20%"}}>
                        Send Request
                        </Button>
                    </Form>
                </center>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Contact;