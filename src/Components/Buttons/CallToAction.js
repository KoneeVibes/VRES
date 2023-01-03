import React from 'react';
import styled from 'styled-components';

const CallToActionWrapper = styled.button`
    border-radius: 7px;
    padding: 14px 60px;
    font-family: Space Grotesk;
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: -0.02em;
    color: #FFFFFF;

    @media screen and (max-width: 768px){
      padding: 14px 30px;
      width: 80%;
    }

    @media screen and (max-width: 280px){
      font-size: 14px;
      padding: 14px;
    }

    @media screen and (max-width: 150px){
      font-size: 5px;
      line-height: 10px;
      padding: 2px;
    }
`

const CallToAction = ({text, background, border, display, margin, type}) => {
  return (
    <CallToActionWrapper type={type} style={{background: background, border: border, display: display, margin: margin}}>{text}</CallToActionWrapper>
  )
}

export default CallToAction