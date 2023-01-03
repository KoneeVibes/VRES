import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CallToAction from '../Buttons/CallToAction';
import ListBoard from '../ListBoard/ListBoard';

const ServiceBoxWrapper = styled.section`
  padding: var(--page-padding);

  .Main{
    display: flex;
    gap: 3em;
    border-top: 1.5px solid #D7D7D7;
    margin: var(--sectioning-gap);
  }

  .LeftFlank{
    flex: 35%;
  }
  
  .RightFlank{
    flex: 65%;
  }

  h3{
    font-family: Space Grotesk;
    font-size: 40px;
    font-weight: 600;
    line-height: 55px;
    letter-spacing: 0em;
  }

  img{
    width: 100%;
  }

  .LeftFlank p{
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
  }

  .RightFlank p{
    font-family: Space Grotesk;
    font-size: 18px;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0em;
  }

  .ListBoards{
    display: flex;
    gap: 1em;
    justify-content: space-between;
  }

  a{
    text-decoration: none;
  }

  @media screen and (max-width: 930px){
    .Main{
      flex-direction: column;
      gap: 0;
    }

    h3, .LeftFlank p{
      margin-block: 0;
    }

    .RightFlank p{
      margin-block-start: 0;
    }
  }

  @media screen and (max-width: 768px){
    .RightFlank p{
        font-size: 16px;
    }

    h3{
        font-size: 32px;
        font-weight: 700;
        line-height: 48px;
    }
  }

  @media screen and (max-width: 516px){
    .ListBoards{
      flex-direction: column;
      gap: 0;
    }
  }

  @media screen and (max-width: 320px){
    .RightFlank p{
        font-size: 14px;
    }

    h3{
        font-size: 25px;
        font-weight: 700;
        line-height: 35px;
    }
  }

  @media screen and (max-width: 200px){
    .LeftFlank p, .RightFlank p{
        font-size: 7px;
        line-height: 21px;
        word-break: break-all;
    }

    h3{
        font-size: 14px;
    }
  }

  @media screen and (max-width: 120px){
    h3{
        font-size: 7px;
    }
  }

  @media screen and (max-width: 70px){
    .LeftFlank p, RightFlank p{
        font-size: 2px;
        line-height: 10px;
    }

    h3{
        font-size: 4px;
    }
  }
`

const ServiceBox = ({ Header, Note, src, ImageDescription, Body, background, border, display, text, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyone, twentytwo, twentythree, twentyfour, twentyfive, twentysix, twentyseven, twentyeight, twentynine, thirty, thirtyone, thirtytwo, thirtythree, ListBoardBg, boxShadow, borderRadius, padding, width, ListBoardDisp, displayBoardOne, displayBoardTwo, displayBoardThree, margin }) => {
  return (
    <ServiceBoxWrapper>
      <div className='Main'>
        <div className='LeftFlank' id='Left'>
          <h3 id='HeaderText'>{Header}</h3>
          <p>{Note}</p>
          <img src={src} alt={ImageDescription}></img>
        </div>
        <div className='RightFlank' id='Right'>
          <p>{Body}</p>
          <div className='ListBoards' style={{ display: ListBoardDisp }}>
            <ListBoard one={one}
              two={two}
              three={three}
              four={four}
              five={five}
              six={six}
              seven={seven}
              eight={eight}
              nine={nine}
              ten={ten}
              eleven={eleven}
              background={ListBoardBg}
              boxShadow={boxShadow}
              borderRadius={borderRadius}
              padding={padding}
              width={width}
              display={displayBoardOne} />
            <ListBoard one={twelve}
              two={thirteen}
              three={fourteen}
              four={fifteen}
              five={sixteen}
              six={seventeen}
              seven={eighteen}
              eight={nineteen}
              nine={twenty}
              ten={twentyone}
              eleven={twentytwo}
              background={ListBoardBg}
              boxShadow={boxShadow}
              borderRadius={borderRadius}
              padding={padding}
              width={width}
              display={displayBoardTwo} />
            <ListBoard one={twentythree}
              two={twentyfour}
              three={twentyfive}
              four={twentysix}
              five={twentyseven}
              six={twentyeight}
              seven={twentynine}
              eight={thirty}
              nine={thirtyone}
              ten={thirtytwo}
              eleven={thirtythree}
              background={ListBoardBg}
              boxShadow={boxShadow}
              borderRadius={borderRadius}
              padding={padding}
              width={width}
              display={displayBoardThree} />
          </div>
          <Link to='/services'><CallToAction background={background}
            border={border}
            display={display}
            text={text}
            margin={margin} /></Link>
        </div>
      </div>
    </ServiceBoxWrapper>
  )
}

export default ServiceBox