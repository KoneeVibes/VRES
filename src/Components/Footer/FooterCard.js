import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const FooterCardWrapper = styled.div`
    h6{
        font-family: Space Grotesk;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        margin-block: 0;
    }

    p{
        font-family: Space Grotesk;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
    }

    a{
        text-decoration: none;
        color: #FFFFFF;
    }

    @media (min-width: 768px) and (max-width:1024px){
        p{
            word-break: break-all;
        }
    }

    @media screen and (max-width:280px){
        p{
            word-break: break-all;
        }
    }

    @media screen and (max-width: 100px){
        h6{
            font-size: 5px;
            line-height: 10px;
        }

        p{
            font-size: 2px;
            line-height: 10px;
        }
    }
`

const FooterCard = ({ header, body1, body2, body3, body4, body5, body6, body7, body8, body9, link1, link2, link3, link4, link5, link6, link7, link8, link9, cursor1, cursor2, cursor3 }) => {
    return (
        <FooterCardWrapper>
            <h6>{header}</h6>
            <HashLink to={link1} onClick={(e) => {
                window.location.href = link1;
                e.preventDefault();
            }} style={{ cursor: cursor1 }}><p>{body1}</p></HashLink>
            <HashLink to={link2} onClick={(e) => {
                window.location.href = link2;
                e.preventDefault();
            }} style={{ cursor: cursor2 }}><p>{body2}</p></HashLink>
            <HashLink to={link3} smooth onClick={(e) => {
                window.location.href = link3;
                e.preventDefault();
            }} style={{ cursor: cursor3 }}><p>{body3}</p></HashLink>
            <HashLink to={link4} smooth onClick={(e) => {
                window.location.href = link4;
                e.preventDefault();
            }}><p>{body4}</p></HashLink>
            <HashLink to={link5} smooth><p>{body5}</p></HashLink>
            <HashLink to={link6}><p>{body6}</p></HashLink>
            <HashLink to={link7}><p>{body7}</p></HashLink>
            <HashLink to={link8}><p>{body8}</p></HashLink>
            <HashLink to={link9}><p>{body9}</p></HashLink>
        </FooterCardWrapper>
    )
}

export default FooterCard