import React from 'react';
import styled from 'styled-components';

const TextCardWrapper = styled.div`
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.09);
    border-radius: 18px;
    background: #FFFFFF;
    flex: 50%;

    h4{
        font-family: Space Grotesk;
        font-size: 32px;
        font-weight: 600;
        line-height: 40px;
        letter-spacing: -0.02em;
    }

    p{
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 27px;
    }

    img{
      width: 15%;
    }

    @media screen and (max-width: 426px){
      h4{
        font-size: 25px;
        line-height: 40px;
        letter-spacing: -0.02em;
      }

      p{
        font-size: 12px;
        line-height: 20px;
      }
    }

    @media screen and (max-width: 150px){
      h4{
        font-size: 5px;
        line-height: 10px;
        padding: 2px;
      }

      p{
        font-size: 5px;
        line-height: 10px;
        padding: 2px;
        word-break: break-word;
      }
    }
`

const TextCard = ({ src, description, header, body, id }) => {
  return (
    <TextCardWrapper>
      <img src={src} alt={description}></img>
      <h4>{header}</h4>
      <p>{body}</p>
    </TextCardWrapper>
  )
}

export default TextCard