import React, { useState } from "react";
import howToUseApp from "./howToUse.js";
import styled from 'styled-components';



const Aboutus = () => {
  const [aboutData, setAboutData] = useState(howToUseApp);
  return (
    <Container><Content>
      <section className="common-section our-services">
      <div className="container mb-5">
        

            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-list">
            
              <h1 className="main-heading">ABOUT US</h1><br></br>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
            </div>
          </div>
      
      </section>

      {/* 2nd part of bayt us section  */}

      <section className="common-section our-services our-services-rightside">
       

        
          
      </section></Content>
      </Container>
  );
};

export default Aboutus;
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #eae9e9;
    display: flex;
    justify-content: center;
    z-index: -1;


`
const Content = styled.div`
z-index: 1;
height:600px;

display: flex;
flex-direction: column;


background: white;


border-radius: 15px;

`