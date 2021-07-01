import React, { Component } from 'react';
import {Card, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Neurologist extends Component {
    state = { 
        add1:'Neeti Gaurav Complex A wing,3rd Floor, Central Bazar Road, Lokmat Square, Ramdaspeth, Nagpur, MH 440010',
        add2:'In Jasleen Hospital Opp. Big Bazar Panchashil Square, Wardha Road, Nagpur, MH 440012',
        add3:'Department of Neurology, CIIMS Hospital, 88/2, Bajaj Nagar, Nagpur, MH 440010'
     }
    style1={backgroundColor:'#85a3e0'}
    render() { 
        return (
            <React.Fragment>
            <div style={this.style1}>
                
                    
                    <Carousel>
                        <Carousel.Item>
                     <img
                       
                        src="/images/neu.jpg"
                        alt="First slide"
                        style={{width :'100%', height:500}}
                        
                    />
                    </Carousel.Item>
                     <Carousel.Item>
                     <img
                        
                        src="/images/neu1.jpg"
                        alt="Second slide"
                        style={{width :'100%', height:500}}
                      />
                     </Carousel.Item>
                     <Carousel.Item>
                     <img
                         
                          src="/images/neu3.jpg"
                          alt="Third slide"
                          style={{width :'100%', height:500}}
                         />
                       </Carousel.Item>
                      </Carousel>

    {/* DOCTOR INFORMATION */}
    <div class="container" >
                    <div style={{marginTop:50}}>
                  
                    <center><h1 style={this.style}> <i class="fas fa-brain" aria-hidden="true"></i>NEUROLOGIST<i class="fas fa-brain"  aria-hidden="true"></i></h1></center>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/sanjay.jpg" style={{width:286 ,height:160}} />
        <Card.Body>
        <Card.Title>Dr. Sanjay Ramteke</Card.Title>
        <Card.Text><i class="fa fa-phone"style={{color:'black'}} aria-hidden="true"></i>  0712 2458303</Card.Text>
        <Card.Text>
        <i class="fa fa-address-card" style={{color:'black'}} aria-hidden="true"> {this.state.add2}</i>
        </Card.Text>
        <Card.Text>
        <i class="fa fa-money" style={{color:'black'}} aria-hidden="true"> ₹ 800</i>
        </Card.Text>
        <Card.Text>
        <i class="fa fa-clock-o" style={{color:'black'}} aria-hidden="true"> Mon,Tue,Thu & Fri : 11:00 a.m - 5:00 p.m <br/> Wed & Sat : 1:00 p.m - 5:00 p.m </i>
        </Card.Text>
        <Card.Text>
        <i class="fa fa-history" style={{color:'black'}} aria-hidden="true"> 24 Years Experience</i>
        </Card.Text>
         <Card.Link href="/doc">Book Appointment</Card.Link>   
        </Card.Body>
        </Card>
        </div>

{/* Second Card */}

        <div class="col">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/vasant.jpeg" style={{width:286 ,height:160}} />
        <Card.Body>
        <Card.Title>Dr. Vasant Dangra</Card.Title>
        <Card.Text><i class="fa fa-phone"style={{color:'black'}} aria-hidden="true"></i>  0712 2421790</Card.Text>
        <Card.Text>
        <i class="fa fa-address-card" style={{color:'black'}} aria-hidden="true"> {this.state.add1}</i>
        </Card.Text>
        <Card.Text>
        <i class="fa fa-money" style={{color:'black'}} aria-hidden="true"> ₹ 500</i>
        </Card.Text>
        <Card.Text>
        <i class="fa fa-clock-o" style={{color:'black'}} aria-hidden="true"> Mon & Tue, Thu-Sat : 10:00 a.m - 7:00 p.m <br/> Wed : 1:00 p.m - 7:00 p.m </i>
        </Card.Text>
        <Card.Text>
        <i class="fa fa-history" style={{color:'black'}} aria-hidden="true"> 11 Years Experience</i>
        </Card.Text>
         <Card.Link href="/doc">Book Appointment</Card.Link>   
        </Card.Body>
        </Card>
        </div>


{/* Third Card  */}

<div class="col">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/neeraj.jpg" style={{width:286 ,height:160}}/>
        <Card.Body>
        <Card.Title>Dr. Neeraj Baheti</Card.Title>
        <Card.Text><i class="fa fa-phone"style={{color:'black'}} aria-hidden="true"></i> 9325428259</Card.Text>
        <Card.Text>
        <i class="fa fa-address-card" style={{color:'black'}} aria-hidden="true"> {this.state.add3}</i>
        </Card.Text>
        <Card.Text>
        <i class="fa fa-money" style={{color:'black'}} aria-hidden="true"> ₹ 700</i>
        </Card.Text>
        <Card.Text>
        <i class="fa fa-clock-o" style={{color:'black'}} aria-hidden="true"> Mon-Sat :9:00 a.m - 4:00 p.m </i>
        </Card.Text>
        <Card.Text>
        <i class="fa fa-history" style={{color:'black'}} aria-hidden="true"> 22 Years Experience</i>
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

 
export default Neurologist;