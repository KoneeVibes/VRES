import React from 'react';
import styled from 'styled-components';

const LearnMoreWrapper = styled.button`
    display: flex;
    gap: 1em;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: -0.02em;
    padding: 0;

    @media screen and (max-width: 200px){
      font-size: 12px;
    }

    @media screen and (max-width: 140px){
      font-size: 7px;
      line-height: 10px;
      gap: 1px;
    }

    @media screen and (max-width: 90px){
      font-size: 3px;
      line-height: 10px;
      gap: 1px;
    }
`

const LearnMore = ({text, border, bgColor, color, borderRadius, padding, margin, display, spanDisplay}) => {
  return (
    <LearnMoreWrapper style={{border: border, backgroundColor: bgColor, color: color, borderRadius: borderRadius, padding: padding, margin: margin, display: display}}>
        {text}
        <span style={{display: spanDisplay}}>&rarr;</span>
    </LearnMoreWrapper>
  )
}

export default LearnMore