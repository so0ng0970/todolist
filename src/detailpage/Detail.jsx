import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
const Detail = (props) => {
    return (
       <Input>
        <div class="card"style={{width:'40rem',height:'40rem'}}>
        <div class="card-body"style={{width:'40rem',height:'40rem'}} >
          <h5 class="card-title">Card title</h5>
       
          <p class="card-text">Some quick example text to build on th
          e card title and make up the bulk of the card's content.</p>
        
        </div>
      </div></Input>
    )
}

const Input = styled.h5`

  padding: 16px;
  margin:  auto;
 

`;





export default Detail;