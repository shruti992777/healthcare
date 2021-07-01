import React, { Component } from 'react';
import {Card,Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Cardiologist extends Component {
    state = {
        add1:' Platina Heart Hospital 2nd & 3rd Floor, Dhanshri Complex, Humpyard Road, Landmark: Near Hardeo Hotel, Nagpur',
        add2:'Avanti Institute Of Cardiology Pvt. Ltd. - Dhantoli 5, Abhyankar Road, Dhantoli, Nagpur, India, 440012',
        add3:'Kingsway Hospital, Kigsway, Mohan Nagar, Nagpur - 440001, Opp Shree Mohini Complex, Near Kasturchand Park'
    }
    style1={backgroundColor:'#85a3e0'}
    render() { 
        return (
            <React.Fragment>
                <div style={this.style1}>
                    
                        
                        
                        <Carousel>
                            <Carousel.Item>
                         <img
                           
                            src="/images/car.jpg"
                            alt="First slide"
                            style={{width :'100%', height:500}}
                            
                        />
                        </Carousel.Item>
                         <Carousel.Item>
                         <img
                            
                            src="/images/car1.jpg"
                            alt="Second slide"
                            style={{width :'100%', height:500}}
                          />
                         </Carousel.Item>
                         <Carousel.Item>
                         <img
                             
                              src="/images/car2.jpg"
                              alt="Third slide"
                              style={{width :'100%', height:500}}
                             />
                           </Carousel.Item>
                          </Carousel>

        {/* DOCTOR INFORMATION */}
        <div class="container" >
                        <div style={{marginTop:50}}>
                        <center><h1 style={this.style}> <i class="fa fa-heartbeat"style={{color:'red'}} aria-hidden="true"></i>CARDIOLOGIST<i class="fa fa-heartbeat" style={{color:'red'}} aria-hidden="true"></i></h1></center>
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/images/virag.jpg" style={{width:286 ,height:160}} />
            <Card.Body>
            <Card.Title>Dr. Virag Uday Mahorkar</Card.Title>
            <Card.Text><i class="fa fa-phone"style={{color:'black'}} aria-hidden="true"></i>  0712 2452509</Card.Text>
            <Card.Text>
            <i class="fa fa-address-card" style={{color:'black'}} aria-hidden="true"> {this.state.add2}</i>
            </Card.Text>
            <Card.Text>
            <i class="fa fa-money" style={{color:'black'}} aria-hidden="true"> ₹ 300</i>
            </Card.Text>
            <Card.Text>
            <i class="fa fa-clock-o" style={{color:'black'}} aria-hidden="true"> Mon-Sat : 9:00 a.m - 5:00 p.m </i>
            </Card.Text>
            <Card.Text>
            <i class="fa fa-history" style={{color:'black'}} aria-hidden="true"> 11 Years Experience</i>
            </Card.Text>
             <Card.Link href="/doc">Book Appointment</Card.Link>   
            </Card.Body>
            </Card>
            </div>

{/* Second Card */}

            <div class="col">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/images/parmod.jpg" />
            <Card.Body>
            <Card.Title>Dr. Pramod Mundra</Card.Title>
            <Card.Text><i class="fa fa-phone"style={{color:'black'}} aria-hidden="true"></i>  0712 256 6777</Card.Text>
            <Card.Text>
            <i class="fa fa-address-card" style={{color:'black'}} aria-hidden="true"> {this.state.add1}</i>
            </Card.Text>
            <Card.Text>
            <i class="fa fa-money" style={{color:'black'}} aria-hidden="true"> ₹ 500</i>
            </Card.Text>
            <Card.Text>
            <i class="fa fa-clock-o" style={{color:'black'}} aria-hidden="true"> Mon-Sat : 8:00 a.m - 5:00 p.m </i>
            </Card.Text>
            <Card.Text>
            <i class="fa fa-history" style={{color:'black'}} aria-hidden="true"> 20 Years Experience</i>
            </Card.Text>
             <Card.Link href="/doc">Book Appointment</Card.Link>   
            </Card.Body>
            </Card>
            </div>


{/* Third Card  */}

<div class="col">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/images/shali.jpg" style={{width:286 ,height:160}}/>
            <Card.Body>
            <Card.Title>Dr. Shailendra Ganjewar</Card.Title>
            <Card.Text><i class="fa fa-phone"style={{color:'black'}} aria-hidden="true"></i> +(91)-8149830032</Card.Text>
            <Card.Text>
            <i class="fa fa-address-card" style={{color:'black'}} aria-hidden="true"> {this.state.add3}</i>
            </Card.Text>
            <Card.Text>
            <i class="fa fa-money" style={{color:'black'}} aria-hidden="true"> ₹ 200</i>
            </Card.Text>
            <Card.Text>
            <i class="fa fa-clock-o" style={{color:'black'}} aria-hidden="true"> Mon-Sat : 10:00 a.m - 8:00 p.m </i>
            </Card.Text>
            <Card.Text>
            <i class="fa fa-history" style={{color:'black'}} aria-hidden="true"> 11 Years Experience</i>
            </Card.Text>
             <Card.Link href="/doc">Book Appointment</Card.Link>   
            </Card.Body>
            </Card>
            </div>


            </div>
            </div>
            </div>
           </div>
            </React.Fragment>
          );
    }
}
 
export default Cardiologist;