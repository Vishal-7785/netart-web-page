import React from 'react';
import '../App.css';

 class App extends React.Component{
  render(){
  return (
    <div className="App">  
     <img className="logo"
     src={`${process.env.PUBLIC_URL}/logo.png`}
     alt="logo"
     />
    <div className="main-container">
      <div className="trophy">
       <img className="trophy-image"
       src= {`${process.env.PUBLIC_URL}/1.png`}
       alt="trophy"
       />
    </div>
    <div className="content">
      <p className="heading"> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION
       AWARD 2018 for the 4th time. </p>
    <ul className="list">
        <li>
             C.R.I.'s energy efficient products are well recognized by various Government
             Institutions, as trustworthy products for various projects across the globe to 
             save energy.
        </li>
        <li> 
             C.R.I. is the highest contributor in the country for the projects of EESL 
             (Energy Efficiency Services Limited) to replace the old inefficient pumps with 
             5 Star rated energy efficient smart pumps with IoT enabled control panel. 
	      </li>
    </ul>
     <img className="gift"
    src= {`${process.env.PUBLIC_URL}/2.png`}
    alt="award"
    /> 
    <p className="award-para">Government of India has awarded the <strong> "National Energy Conservation Award 2018 </strong> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
    </div>
    </div>
    <p className="installed"> INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
 </p>
    <img className="tools"
    src= {`${process.env.PUBLIC_URL}/3.png`}
    alt="tools"
    /> 
    <p className="below-tools-text"> Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
    <p className="line"> </p>
    <p className="bottom-text-1"> <strong> C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS </strong> </p>
    <p className="bottom-text-2"> CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS
     & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE 
    PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL </p>
    <footer>
        <span className="toll-free">
           <img
           className="flat-icon"
             src="https://as1.ftcdn.net/jpg/01/08/37/70/500_F_108377009_2tZ5rRDuwK97F6uDU3UWQkGdWKgAe9KX.jpg"
             alt="user-dp"
                  />
        <p className="toll-text"> Toll free 1800 200 1234  </p> 
        </span>
        <span className="toll-free">
           <img
           className="flat-icon"
             src="https://t4.ftcdn.net/jpg/02/04/57/07/240_F_204570779_5fl9enPDBrUZd47vOs28fr9r9FrdGRJB.jpg"
             alt="user-dp"
                  />
        <p className="toll-text">  www.facebook.com/cripumps  </p> 
        </span>
        <span className="toll-free">
           <img
           className="flat-icon"
             src="https://t4.ftcdn.net/jpg/01/34/15/11/240_F_134151149_4qh7m3ir2TR4wZOCeysrpql2xHSQhc5b.jpg"
             alt="user-dp"
                  />
        <p className="toll-text"> www.crigroups.com  </p> 
        </span>
      
      
   </footer>
    </div>
  );
}
}

export default App;
