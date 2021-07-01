import React, { Component } from 'react';

class HeaCenter extends Component {
    state = {  
        add1:'Nehru Colony, Gorewada Road, Anant Nagar, Nagpur - 440013, Blue Diamond School',
        add2:'DR Guru, Hanuman Nagar, Nagpur - 440024, Near Bcn Office',
        add3:'Plot No.28/D, Cement Road, Sai Mandir Road, Ayodhya Nagar, Nagpur - 440024, Near Apeksha Electronic',
        tim1:'Monday to Sunday : Open 24hrs',
        tim2:'Monday to Sunday : 9:00 a.m - 10:00 p.m',
        tim3:'Monday to Sunday : 7:30 a.m - 9:00 p.m'
    
    }
   
    style1={backgroundColor:'#85a3e0'}
    render() { 
        return (  
            <React.Fragment>
              <div style={this.style1}>
             <div class="container">
             <center><h1 > <i class="fa fa-plus"style={{color:'red'}} aria-hidden="true"></i>HEALTHCARE CENTER<i class="fa fa-plus"style={{color:'red'}} aria-hidden="true"></i></h1></center>
             <div class="row">
        <div class="row-md-4">
            <div class="card text-black mb-3"style={{backgroundColor:'#b3ffb3'}}>
              <img width="30%" height="225" src="/images/old.webp"  preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"/>
               <div class="card-body">
                <h4 class="card-title" style={{marginTop:'-240px',marginLeft:'330px'}}>Old Age Care Centre</h4>
                <p class="card-text" style={{marginLeft:'330px'}}><i class="fa fa-phone"  aria-hidden="true" style={{color:'black'}}></i>  07947449886</p>
                <p class="card-text" style={{marginLeft:'330px'}}><i class="fa fa-address-card"  aria-hidden="true" style={{color:'black'}}></i>  {this.state.add1}</p>
                <p class="card-text" style={{marginLeft:'330px'}}><i class="fa fa-clock-o"  aria-hidden="true" style={{color:'black'}}></i>  {this.state.tim1}</p>
                <p class="card-text" style={{marginLeft:'330px'}}><b>Services</b></p>
                <p class="card-text" style={{marginLeft:'330px'}}><i class="fa fa-check-circle-o"  aria-hidden="true" style={{color:'black'}}></i>	
	
                Home Nursing Services For Senior Citizen</p>
<p class="card-text" style={{marginLeft:'330px'}}><i class="fa fa-check-circle-o"  aria-hidden="true" style={{color:'black'}}></i>	
	
Home Nursing Services For Brain Stroke Patient</p>


                
              </div>
            </div>
        
          <div class="card text-black  mb-3" style={{backgroundColor:' #99e6e6'}}>
              <img width="30%" height="225" src="/images/yog.webp"  preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"/>
               <div class="card-body">
                <h4 class="card-title" style={{marginTop:'-240px',marginLeft:'330px'}}>Yog Sanskar</h4>
                <p class="card-text" style={{marginLeft:'330px'}}><i class="fa fa-phone"  aria-hidden="true" style={{color:'black'}}></i> 7122744921 , 7122556501</p>
                <p class="card-text" style={{marginLeft:'330px'}}><i class="fa fa-address-card"  aria-hidden="true" style={{color:'black'}}></i>  {this.state.add2}</p>
                <p class="card-text" style={{marginLeft:'330px'}}><i class="fa fa-clock-o"  aria-hidden="true" style={{color:'black'}}></i>  {this.state.tim2}</p>
                <p class="card-text" style={{marginLeft:'330px'}}><b>Services</b></p>
                <p class="card-text" style={{marginLeft:'330px'}}><i class="fa fa-check-circle-o"  aria-hidden="true" style={{color:'black'}}></i>	
	
                	
Yoga Classes For Women</p>
<p class="card-text" style={{marginLeft:'330px'}}><i class="fa fa-check-circle-o"  aria-hidden="true" style={{color:'black'}}></i>	
	
Meditation Classes</p>
           
              </div>
            </div>

            <div class="card text-black  mb-3"style={{backgroundColor:' #ffb3b3'}}>
              <img width="30%" height="225" src="/images/nut.jpg"  preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"/>
               <div class="card-body">
                <h4 class="card-title" style={{marginTop:'-240px',marginLeft:'330px'}}>One One Four Nutrition Club 2</h4>
                <p class="card-text" style={{marginLeft:'330px'}}><i class="fa fa-phone"  aria-hidden="true" style={{color:'black'}}></i>07947291820</p>
                <p class="card-text" style={{marginLeft:'330px'}}><i class="fa fa-address-card"  aria-hidden="true" style={{color:'black'}}></i>  {this.state.add3}</p>
                <p class="card-text" style={{marginLeft:'330px'}}><i class="fa fa-clock-o"  aria-hidden="true" style={{color:'black'}}></i>  {this.state.tim3}</p>
                <p class="card-text" style={{marginLeft:'330px'}}><b>Services</b></p>
                <p class="card-text" style={{marginLeft:'330px'}}><i class="fa fa-check-circle-o"  aria-hidden="true" style={{color:'black'}}></i>	
	
                	
                diet counselling</p>
<p class="card-text" style={{marginLeft:'330px'}}><i class="fa fa-check-circle-o"  aria-hidden="true" style={{color:'black'}}></i>	
Weight Management Counseling</p>



                
              </div>
            </div>
          </div>
      </div> 
    </div>
            
</div>
 
         </React.Fragment>
       );
 }
}

 
export default HeaCenter;