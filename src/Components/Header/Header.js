import React from 'react';
import styled from 'styled-components';
import CallToAction from '../Buttons/CallToAction';
import { HashLink } from 'react-router-hash-link';

const HeaderWrapper = styled.header`
    background-size: cover;
    background-repeat: no-repeat;
    padding: var(--page-padding);
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h1{
      font-family: Space Grotesk;
      font-size: 55px;
      font-weight: 700;
      line-height: 61px;
      letter-spacing: -0.02em;
      color: #FFFFFF;
    }

    p{
      font-family: Poppins;
      font-size: 18px;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: -0.02em;
      color: #FFFFFF;
    }

    .HeaderTextFrame{
      width: 37em;
    }

    .HeaderButtons{
      display: flex;
      gap: 1.375em;
      padding: 2em 0;
      align-items: center;
    }

    a{
      text-decoration: none;
    }

    @media screen and (max-width: 768px){
      .HeaderButtons{
        flex-direction: column;
        align-items: stretch;
      }

      .HeaderTextFrame{
        width: auto;
      }
    }

    @media (min-width: 426px) and (max-width: 768px){
      h1{
        font-size: 48px;
      }
    }

    @media screen and (max-width: 426px){
      h1{
        font-size: 40px;
        line-height: 44px;
      }

      p{
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.02em;
      }
    }

    @media screen and (max-width: 360px){
      h1{
        font-size: 30px;
        font-weight: 700;
        line-height: 44px;
      }

      p{
        font-size: 12px;
        line-height: 21px;
        letter-spacing: -0.02em;
      }
    }

    @media screen and (max-width: 200px){
      h1{
        font-size: 14px;
        font-weight: 700;
        line-height: 30px;
      }

      p{
        font-size: 7px;
        line-height: 21px;
        letter-spacing: -0.02em;
      }
    }

    @media screen and (max-width: 100px){
      h1{
        font-size: 5px;
        font-weight: 700;
        line-height: 10px;
      }

      p{
        font-size: 2px;
        line-height: 10px;
        letter-spacing: -0.02em;
      }
    }

`

const Header = ({ background, HeadOne, Body, TextOne, BgColorOne, BorderOne, TextTwo, BgColorTwo, BorderTwo, display, height, Link1, Link2 }) => {
  return (
    <HeaderWrapper style={{ backgroundImage: `url(${background})`, height: height }}>
      <div className='HeaderTextFrame'>
        <h1>{HeadOne}</h1>
        <p>{Body}</p>
        <div className='HeaderButtons'>
          <HashLink to={Link1} smooth><CallToAction text={TextOne} background={BgColorOne} border={BorderOne} display={display} /></HashLink>
          <HashLink to={Link2} smooth><CallToAction text={TextTwo} background={BgColorTwo} border={BorderTwo} display={display} /></HashLink>
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default Header