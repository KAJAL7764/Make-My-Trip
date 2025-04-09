import React from 'react';
 import "./OffersPage.css";

 export const OffersPage = () => {
  return (

    <div className="collections-page">
        <div className='first-section'>
      <h1>Handpicked Collections for You</h1>
      
      <div className="collection-container">
       
        
        <div className='outer-div'>
        <div className="collection-card delhi-card">
          <span className="top-badge">TOP 8</span>
         
          <p> Steps in & Around Delhi for a  Weekend Getaway</p>
         
        </div>
        </div>

        <div className="collection-card mumbai-card ">
          <span className="top-badge">TOP 8</span>
          
          <p> Steps in & Around Mumbai for a Weekend Getaway</p>
         
        </div>

        <div className="collection-card bangalore-card">
          <span className="top-badge">TOP 8</span>
         
          <p> Steps in & Around Bangalore for a Weekend Getaway</p>
         
        </div>
        
        <div className="collection-card  beach-card">
          <span className="top-badge">TOP 11</span>
          <p>Beach Destinations</p>
        </div>
        
        <div className="collection-card getaway-card">
          <span className="top-badge">TOP 11</span>
          <p>Weekend Getaway</p>
        </div>
        
        <div className="collection-card hill-card">
          <span className="top-badge">TOP 11</span>
          <p>Hill Static</p>
        </div>
      </div>
      </div>
      
      <div className="second-section">
        
      </div>
      
      <h1>Unlock Lesser-Known Wonders of India</h1>
      
      <div className="wonders-container">


      <div className="wonder-card shimla-card">
         
         <p>Shimla's Best Kept Secret </p>
         
       </div>

        <div className="wonder-card tamilnadu-card">
         
          <p>Tamil Nadu's Charming Hill Town</p>
          
        </div>
        
        <div className="wonder-card gatesway-card">
          
          <p>Picturesque Gatesway to  Himalayas</p>
         
         
        </div>
        
        <div className="wonder-card gujarat-card">
         
          <p>Quaint Little Hill Station in Gujarat</p>
         
        
        </div>

        <div className="wonder-card summer-card">
          
          <p>A pleasant summer retreat and a snowy winter wonderland!</p>
         
        
         
        </div>

        <div className="wonder-card bengal-card">
          
          <p>Senside in West Bengal</p>
         
         
        </div>
      </div>
      </div>
      
     
    
  )
};

// export default OffersPage;