import React from 'react';
import styled from 'styled-components';
import Tick from './Assets/Tick.svg';

const ListBoardWrapper = styled.div`

    ul{
        list-style-image: url(${Tick});
        font-family: Space Grotesk;
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
    }

    li{
        margin: 2em 0;
    }

    @media screen and (min-width: 516px) and (max-width: 1466px){
        ul{
            font-size: 15px;
        }
    }

    @media screen and (max-width: 600px){
        ul{
            padding-inline-start: 0.5em;
            list-style-position: inside;
        }
    }

    @media screen and (max-width: 516px){
        ul{
            margin: 0;
        }
    }

    @media screen and (max-width: 200px){
        ul{
            font-size: 7px;
            line-height: 21px;
        }
    }

    @media screen and (max-width: 70px){
        ul{
            font-size: 2px;
            line-height: 10px;
        }
    }

`

const ListBoard = ({ one, two, three, four, five, six, seven, eight, nine, ten, eleven, background, boxShadow, borderRadius, padding, width, display }) => {
    return (
        <ListBoardWrapper style={{ background: background, boxShadow: (window.screen.availWidth <= 516) ? '' : boxShadow, borderRadius: (window.screen.availWidth <= 516) ? '' : borderRadius, padding: (window.screen.availWidth <= 600) ? '1em 1em 1em 0' : padding, width: width, display: display }}>
            <ul>
                <li id='one'>{one}</li>
                <li id='two'>{two}</li>
                <li id='three'>{three}</li>
                <li id='four'>{four}</li>
                <li id='five'>{five}</li>
                <li id='six'>{six}</li>
                <li id='seven'>{seven}</li>
                <li id='eight'>{eight}</li>
                <li id='nine'>{nine}</li>
                <li id='ten'>{ten}</li>
                <li id='eleven'>{eleven}</li>
            </ul>
        </ListBoardWrapper>
    )
}

export default ListBoard