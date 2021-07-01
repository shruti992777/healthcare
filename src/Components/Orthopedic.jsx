import React, { Component } from 'react';
import {Card ,Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Orthopedic extends Component {
    state = { 
        add1:'Apollo Hospitals, Great Nag Road, Ganesh Peth, Nagpur - 440018, Besides Hotel Orient Taibah Opp. ',
        add2:'Apollo Clinic, Great Nag Road, Ganesh Peth, Nagpur - 440018, Beside Hotel Orient Taibah',
        add3:' Medicure Mutispeciality Clinic Opp. Neeti Gaurav Bld, Ramdas Peth, Nagpur - 440010,'
     }
    style1={backgroundColor:'#85a3e0'}
    render() { 
        return (
            <React.Fragment>
                <div style={this.style1}>
                   
                        
                        <Carousel>
                            <Carousel.Item>
                         <img
                           
                            src="/images/ortho.jpg"
                            alt="First slide"
                            style={{width :'100%', height:500}}
                            
                        />
                        </Carousel.Item>
                         <Carousel.Item>
                         <img
                            
                            src="/images/ortho1.jpg"
                            alt="Second slide"
                            style={{width :'100%', height:500}}
                          />
                         </Carousel.Item>
                         <Carousel.Item>
                         <img
                             
                              src="/images/ortho2.jpg"
                              alt="Third slide"
                              style={{width :'100%', height:500}}
                             />
                           </Carousel.Item>
                          </Carousel>

        {/* DOCTOR INFORMATION */}
        <div class="container" >
                        <div style={{marginTop:50}}>
                       
                        <center><h1 style={this.style}> <i class="fas fa-bone"aria-hidden="true"></i> ORTHOPEDIC < i class="fas fa-bone" aria-hidden="true"></i></h1></center>
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/images/soh.jpg" style={{width:286 ,height:160}} />
            <Card.Body>
            <Card.Title>Dr. Sohael Khan</Card.Title>
            <Card.Text><i class="fa fa-phone"style={{color:'black'}} aria-hidden="true"></i> 07947292012</Card.Text>
            <Card.Text>
            <i class="fa fa-address-card" style={{color:'black'}} aria-hidden="true"> {this.state.add2}</i>
            </Card.Text>
            <Card.Text>
            <i class="fa fa-money" style={{color:'black'}} aria-hidden="true"> ₹ 400</i>
            </Card.Text>
            <Card.Text>
            <i class="fa fa-clock-o" style={{color:'black'}} aria-hidden="true"> Mon-Sat : 9:00 a.m - 9:00 p.m </i>
            </Card.Text>
            <Card.Text>
            <i class="fa fa-history" style={{color:'black'}} aria-hidden="true"> 14 Years Experience</i>
            </Card.Text>
             <Card.Link href="/doc">Book Appointment</Card.Link>   
            </Card.Body>
            </Card>
            </div>

{/* Second Card */}

            <div class="col">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/images/sur.webp" style={{width:286 ,height:160}} />
            <Card.Body>
            <Card.Title>Dr. Suvarn Gupta </Card.Title>
            <Card.Text><i class="fa fa-phone"style={{color:'black'}} aria-hidden="true"></i>  07947292010</Card.Text>
            <Card.Text>
            <i class="fa fa-address-card" style={{color:'black'}} aria-hidden="true"> {this.state.add1}</i>
            </Card.Text>
            <Card.Text>
            <i class="fa fa-money" style={{color:'black'}} aria-hidden="true"> ₹ 300</i>
            </Card.Text>
            <Card.Text>
            <i class="fa fa-clock-o" style={{color:'black'}} aria-hidden="true"> Mon-Sat : 10:00 a.m - 9:00 p.m </i>
            </Card.Text>
            <Card.Text>
            <i class="fa fa-history" style={{color:'black'}} aria-hidden="true"> 9 Years Experience</i>
            </Card.Text>
             <Card.Link href="/doc">Book Appointment</Card.Link>   
            </Card.Body>
            </Card>
            </div>


{/* Third Card  */}

<div class="col">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/images/rom.jpg" style={{width:286 ,height:160}}/>
            <Card.Body>
            <Card.Title>Dr. Romil Rathi</Card.Title>
            <Card.Text><i class="fa fa-phone"style={{color:'black'}} aria-hidden="true"></i> 07947290310</Card.Text>
            <Card.Text>
            <i class="fa fa-address-card" style={{color:'black'}} aria-hidden="true"> {this.state.add3}</i>
            </Card.Text>
            <Card.Text>
            <i class="fa fa-money" style={{color:'black'}} aria-hidden="true"> ₹ 500</i>
            </Card.Text>
            <Card.Text>
            <i class="fa fa-clock-o" style={{color:'black'}} aria-hidden="true"> Mon-Sat : 8:00 a.m - 9:00 p.m </i>
            </Card.Text>
            <Card.Text>
            <i class="fa fa-history" style={{color:'black'}} aria-hidden="true"> 15 Years Experience</i>
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

 
export default Orthopedic;