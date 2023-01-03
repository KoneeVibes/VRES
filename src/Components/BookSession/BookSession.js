import React from 'react';
import styled from 'styled-components';
import { InlineWidget } from "react-calendly";

const BookSessionWrapper = styled.section`
    padding: var(--page-padding);
    padding-top: 3.65625em;
    padding-bottom: 3.65625em;
    background: #F3F3F3;
    display: flex;
    gap: 7em;

    h3{
        font-family: Space Grotesk;
        font-size: 40px;
        font-weight: 600;
        line-height: 40px;
        letter-spacing: -0.02em;
    }

    p{
        font-family: Poppins;
        font-size: 18px;
        font-weight: 400;
        line-height: 31px;
    }

    .TextFlank{
        flex: 49%;
    }

    .CalendarFlank{
        flex: 51%;
    }

    .calendly-inline-widget{
        background: #F3F3F3;
    }

    iframe{
        border-radius: 17px;
        border: 1px solid #D2D2D2;
        background: #F3F3F3;
    }

    @media screen and (max-width: 1024px){
        h3{
            font-size: 30px;
        }
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
    }

    @media screen and (max-width: 425px){
        h3{
            font-size: 30px;
        }
    }

    @media screen and (max-width: 360px){
        display: none;
    }
`

const BookSession = () => {

    const CALENDLY = process.env.REACT_APP_CALENDLY;    

  return (
    <BookSessionWrapper id='calendly'>
        <div className='TextFlank'>
            <h3>Still not sure? book a demo and see if we’re a fit!</h3>
              <p>By the end of this audit call, you will have a clear understanding of the next steps you can take for your business to build and scale a human-centric product . </p><p> Find a time on ValleyRidge (our Executive Assistance) calendar to schedule your call today and we look forward to speaking to you soon!</p>
        </div>
        <div className='CalendarFlank'>
            <InlineWidget url={CALENDLY}/>
        </div>
    </BookSessionWrapper>
  )
}

export default BookSession