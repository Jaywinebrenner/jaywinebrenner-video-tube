import React from 'react';
import styled from 'styled-components'


function Contact() {

 

  return (
    <Container>
        <h1>jaywinebrenner@gmail.com</h1>
    </Container>

  
  );
}

export default Contact;

const Container = styled.div`
margin: 200px auto 0;
width: 50%;
height: calc(100vh -70px);
padding: 10px;
text-align: center;
@media only screen and (max-width: 600px) {
 h1 {
   font-size: 18px;
 }
}
`
