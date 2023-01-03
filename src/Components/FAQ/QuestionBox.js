import React, { useState } from 'react';
import styled from 'styled-components';

const QuestionBoxWrapper = styled.div`
    border-radius: 10px;
    padding-left: 2em;
    margin: var(--sectioning-gap);
    -webkit-transition: all 5s ease-in-out;
    transition: all 2s ease-in-out;

    .Question, .Answer{
        display: flex;
        align-items: center;
    }

    h5{
        font-family: Space Grotesk;
        font-size: 22px;
        font-weight: 400;
        line-height: 36px;
        flex: 90%
    }

    p{
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: #A8A8A8;
        flex: 90%;
    }

    span{
        font-family: Poppins;
        font-size: 18px;
        font-weight: 600;
        flex: 10%;
        padding-left: 5em;
        cursor: pointer;
        user-select: none;
    }

    .active{
        display: none;
    }

    @media screen and (max-width: 360px){
        padding-left: 1em;

        h5{
            font-size: 14px;
            line-height: 22px;
        }

        p{
            font-size: 14px;
            line-height: 21px;
            letter-spacing: -0.02em;
        }
    }

    @media screen and (max-width: 250px){

        h5{
            font-size: 10px;
            line-height: 18px;
        }

        p{
            font-size: 7px;
            line-height: 16px;
        }

        span{
            padding: 1em;
            flex: 50%;
            font-size: 12px;
        }
    }

    @media screen and (max-width: 150px){
        h5, span{
            font-size: 5px;
        }

        p{
            font-size: 2px;
        }
    }

    @media screen and (max-width: 100px){
        padding-left: 0;

        h5{
            font-size: 2.5px;
        }
    }
`

const QuestionBox = ({Question, Answer}) => {

    const [isActive, setisActive] = useState(false);

    const toggleClass = () => {
        setisActive(!isActive);
    }

  return (
      <QuestionBoxWrapper style={{
        border: isActive ? 'none':'1px solid #B8B8B8', background: isActive ? '#F3F3F3':'#FFFFFF'}}>
        <div className='Question'>
            <h5>{Question}</h5>
            <span onClick={toggleClass}>&minus;</span>
        </div>
        <div className={isActive ? 'Answer' : "active Answer"}>
            <p>{Answer}</p>
            <span>&rarr;</span>
        </div>
    </QuestionBoxWrapper>
  )
}

export default QuestionBox