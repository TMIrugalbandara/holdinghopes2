import React, { useState } from "react";
import serviceapi from "./serviceApi.js";

import styled from 'styled-components';



const Services = () => {
  const [serviceData, setServiceData] = useState(serviceapi);
  return (
 <Container>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            How to send money
          </h1>
          <div className="row">
            {serviceData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div
                    className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                    key={id}>
                      <a>
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para">{info}</p></a>
                    <a></a>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      
      </Container>
  );
};

export default Services;
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #eae9e9;
    display: flex;
    justify-content: center;
    z-index: -1;
    


`
