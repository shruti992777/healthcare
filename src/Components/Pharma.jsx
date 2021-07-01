import React, { Component } from 'react';
class Pharma extends Component {
    state = { 
      add:'Shop No 23, Shree Wardhan Complex, Wardha Road, Ramdas Peth, Nagpur - 440010 ',
      add1:'Shop No 18 Gokhale House, Khamla Square, Deonagar, Nagpur - 440015, Near Orange City Hospital',
      add2:'Shop No. 01, Daulat Layout, Godhni Road, Zingabai Takali, Nagpur - 440030, ',
      add3:'Kirti Apartment No 3, Nikalas Mandir Road, Itwari, Nagpur - 440002',
      add4:'Shop No. 3, Galaxy Biulding, Sita Kunj, Civil Lines, Nagpur - 440001, Near Sandipani School',
      add5:'Harinam Block No 3 and 4, Central Avenue Road, Chhapru Nagar, Nagpur - 440008, Beside SBI Bank',
      tim:'Monday to Saturday : 8 a.m - 10 p.m',
      tim1:'Monday to Saturday : 9 a.m - 10:30 p.m',
      tim2:'Monday to Sunday : 10 a.m - 11:30 p.m',
      tim3:'Monday to Sunday : 8:30 a.m - 11:30 p.m',
      tim4:'Monday to Saturday: 11:00 a.m - 8:00 p.m',
      tim5:'Monday to Saturday: 9:00 a.m - 11:30 p.m'
     }

    style1={backgroundColor:'#85a3e0'}
    render() { 
        return (
            <React.Fragment >
             <div style={this.style1}>
                <div class="container" >
                <center><h1 > <i class="fa fa-plus"style={{color:'green'}} aria-hidden="true"></i>PHARMACIES<i class="fa fa-plus"style={{color:'green'}} aria-hidden="true"></i></h1></center>
                <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
            <div class="card text-black  mb-3" style={{maxWidth:"25em", fontSize:15,backgroundColor: '	 #ffffb3'}}>
             <img src="/images/shree.webp" class="card-img-top" alt="..." />
             <div class="card-body">
             <h5 class="card-title">Shree Medical And General Store</h5>
             <p class="card-title"><i class="fa fa-phone"  aria-hidden="true" style={{color:'black'}}></i> 07947289768</p>
             <p class="card-title"><i class="fa fa-address-card"  aria-hidden="true" style={{color:'black'}}></i> {this.state.add} </p>
             <p class="card-title"><i class="fa fa-clock-o"  aria-hidden="true" style={{color:'black'}}></i> {this.state.tim} </p>
             <p class="card-title"><i class="fa fa-plus"  aria-hidden="true" style={{color:'black'}}></i> Chemists General Stores<br></br>
                   Chemist Home Delivery <br/>Generic Medicine Retailers</p>
             <p class="card-title"><i class="fa fa-map-marker"  aria-hidden="true" style={{color:'black'}}></i> Map</p> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3672118565996!2d79.07670641481916!3d21.13777978593943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c091775d67b3%3A0xa9b8f2be2caabe23!2sShree%20Wardhan%20Complex!5e0!3m2!1sen!2sin!4v1624963395202!5m2!1sen!2sin" ></iframe>    
           
            <br/>
                
     </div>
     </div>
   </div>
   <div class="col">
   <div class="card text-black  mb-3" style={{maxWidth:"25em", fontSize:15,backgroundColor: '	 #ffffb3'}}>
             <img src="/images/maan.jpg" class="card-img-top" alt="..." />
             <div class="card-body">
             <h5 class="card-title">Maan Medicals</h5>
             <p class="card-title"><i class="fa fa-phone"  aria-hidden="true" style={{color:'black'}}></i>+918956644434 , +918668931023</p>
             <p class="card-title"><i class="fa fa-address-card"  aria-hidden="true" style={{color:'black'}}></i> {this.state.add1} </p>
             <p class="card-title"><i class="fa fa-clock-o"  aria-hidden="true" style={{color:'black'}}></i> {this.state.tim1} </p>
             <p class="card-title"><i class="fa fa-plus"  aria-hidden="true" style={{color:'black'}}></i> Chemists , Ayurvedic Medicine Shops ,
Chemist Home Delivery</p>
         
             <p class="card-title"><i class="fa fa-map-marker"  aria-hidden="true" style={{color:'black'}}></i> Map</p> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.987011372871!2d79.06368871744382!3d21.113084000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bff9e720b8b1%3A0x6a58be448fdf5249!2sMaan%20Medicals!5e0!3m2!1sen!2sin!4v1624965664244!5m2!1sen!2sin" ></iframe>
           
            <br/>
  </div>
  </div>
  </div>
  <div class="col">
  <div class="card text-black  mb-3" style={{maxWidth:"25em", fontSize:15,backgroundColor: '#ffffb3'}}>
             <img src="/images/shri.webp" class="card-img-top" alt="..." />
             <div class="card-body">
             <h5 class="card-title">Shri Ramkrishna Swast Aushadhi Sewa Generic Medicine Store</h5>
             <p class="card-title"><i class="fa fa-phone"  aria-hidden="true" style={{color:'black'}}></i> +917973255921</p>
             <p class="card-title"><i class="fa fa-address-card"  aria-hidden="true" style={{color:'black'}}></i> {this.state.add2} </p>
             <p class="card-title"><i class="fa fa-clock-o"  aria-hidden="true" style={{color:'black'}}></i> {this.state.tim2} </p>
             <p class="card-title"><i class="fa fa-plus"  aria-hidden="true" style={{color:'black'}}></i> 
Ayurvedic Medicine Shops ,
Ayurvedic Medicine Retailers-Baidyanath 
             </p>
            
             <p class="card-title"><i class="fa fa-map-marker"  aria-hidden="true" style={{color:'black'}}></i> Map</p> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14880.121185623677!2d79.06276806977539!3d21.190955400000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1d8eb30e247%3A0x317ee72b9713bb32!2sShri%20Ramkrishna%20Swast%20Aushadhi%20Sewa%20Generic%20Medicine%20Store!5e0!3m2!1sen!2sin!4v1624966413522!5m2!1sen!2sin"></iframe>
           
            <br/>
  </div>
  </div>
  </div>

  <div class="col">
            <div class="card text-black  mb-3" style={{maxWidth:"25em", fontSize:15,backgroundColor: '	 #ffffb3'}}>
             <img src="/images/apx.webp" class="card-img-top" alt="..." />
             <div class="card-body">
             <h5 class="card-title">Apex Medicose Pvt Ltd</h5>
             <p class="card-title"><i class="fa fa-phone"  aria-hidden="true" style={{color:'black'}}></i> +917947424846</p>
             <p class="card-title"><i class="fa fa-address-card"  aria-hidden="true" style={{color:'black'}}></i> {this.state.add3} </p>
             <p class="card-title"><i class="fa fa-clock-o"  aria-hidden="true" style={{color:'black'}}></i> {this.state.tim3} </p>
             <p class="card-title"><i class="fa fa-plus"  aria-hidden="true" style={{color:'black'}}></i>Allopathic Medicine Stockists ,
HIV Medicine Retailers ,
Kidney Medicine Retailers
</p>
             
             <p class="card-title"><i class="fa fa-map-marker"  aria-hidden="true" style={{color:'black'}}></i> Map</p> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0255872598427!2d79.1102283148193!3d21.151379985932106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c7348a26deb5%3A0x3e98c98bfb4d62a4!2sApex%20Medicose%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1624969083451!5m2!1sen!2sin"></iframe>
           
            <br/>
  </div>
  </div>
  </div>
  <div class="col">
            <div class="card text-black  mb-3" style={{maxWidth:"25em", fontSize:15,backgroundColor: '	 #ffffb3'}}>
             <img src="/images/sai.webp" class="card-img-top" alt="..." />
             <div class="card-body">
             <h5 class="card-title">Sai Medicos</h5>
             <p class="card-title"><i class="fa fa-phone"  aria-hidden="true" style={{color:'black'}}></i> +917350785576</p>
             <p class="card-title"><i class="fa fa-address-card"  aria-hidden="true" style={{color:'black'}}></i> {this.state.add4} </p>
             <p class="card-title"><i class="fa fa-clock-o"  aria-hidden="true" style={{color:'black'}}></i> {this.state.tim4} </p>
             <p class="card-title"><i class="fa fa-plus"  aria-hidden="true" style={{color:'black'}}></i> 
             
Generic Medicine Retailers ,
Surgical Medicine Retailers ,
ESIC Chemists
             </p>
             <p class="card-title"><i class="fa fa-map-marker"  aria-hidden="true" style={{color:'black'}}></i> Map</p> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1860.5185550117121!2d79.0742031080337!3d21.150921396483085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1718974a921%3A0x321d251f509dc46!2sSai%20Medicos!5e0!3m2!1sen!2sin!4v1624969458414!5m2!1sen!2sin"></iframe>
           
            <br/>
  </div>
  </div>
  </div>
  <div class="col">
  <div class="card text-black  mb-3" style={{maxWidth:"25em", fontSize:15,backgroundColor: '	 #ffffb3'}}>
             <img src="/images/insta.webp" class="card-img-top" alt="..." />
             <div class="card-body">
             <h5 class="card-title">Insta Dawa</h5>
             <p class="card-title"><i class="fa fa-phone"  aria-hidden="true" style={{color:'black'}}></i> 07947073410</p>
             <p class="card-title"><i class="fa fa-address-card"  aria-hidden="true" style={{color:'black'}}></i> {this.state.add5} </p>
             <p class="card-title"><i class="fa fa-clock-o"  aria-hidden="true" style={{color:'black'}}></i> {this.state.tim5} </p>
             <p class="card-title"><i class="fa fa-plus"  aria-hidden="true" style={{color:'black'}}></i> 
            
Chemist Home Delivery ,
Baby Care Product Dealers ,

Skin Care Product Dealers
             </p>
             <p class="card-title"><i class="fa fa-map-marker"  aria-hidden="true" style={{color:'black'}}></i> Map</p> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.092994600714!2d79.12459591481931!3d21.148697135933638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c7bf0d4ebe77%3A0x3e2c814154de2a64!2sINSTA%20DAWA!5e0!3m2!1sen!2sin!4v1624969801967!5m2!1sen!2sin"></iframe>
           
            <br/>
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
 
export default Pharma;