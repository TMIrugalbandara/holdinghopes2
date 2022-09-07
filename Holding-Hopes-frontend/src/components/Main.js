import React from 'react'
import styled from 'styled-components'
import Comments from './Comments'
import Aboutus from './Aboutus'
import Services from './Services';

function Main() {
  return (
    <>
     <Container>
     <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
 <Aboutus/>
 <Services/>
     
      </Container>   
    </>
  )
}


const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #eae9e9;
  color: black;
  text-align: center;

`
export default Main