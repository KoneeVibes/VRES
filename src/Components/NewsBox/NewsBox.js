import React from 'react';
import styled from 'styled-components';

const NewsBoxWrapper = styled.article`
    padding: var(--page-padding);

    .Header p{
        text-align: right;
        font-family: Poppins;
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        letter-spacing: -0.02em;
        color: #9C9C9C;
    }

    h1{
        font-family: Space Grotesk;
        font-size: 64px;
        font-weight: 600;
        line-height: 72px;
        letter-spacing: -0.02em;
        margin-block-end: 0;
    }

    .Header{
        border-bottom: 1.5px solid #DBDBDB;
    }

    p{
        font-family: Poppins;
        font-size: 18px;
        font-weight: 500;
        line-height: 33px;
        letter-spacing: -0.02em;
        margin-block: 2em;
    }

    @media screen and (max-width: 1024px){
        h1{
            font-size: 50px;
            line-height: 54px;
        }
    }

    @media screen and (max-width: 768px){
        h1{
            font-family: Space Grotesk;
            font-size: 32px;
            font-weight: 700;
            line-height: 48px;
            letter-spacing: 0px;
        }

        .Header p{
            font-size: 16px;
        }
    }

    @media screen and (max-width: 425px){
        .Header p{
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: -0.02em;
        }

        p{
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: -0.02em;
        }
    }

    @media screen and (max-width: 200px){
        h1{
            font-size: 14px; 
            line-height: 24px;
        }

        .Header p, p{
            font-size: 7px;
        }
    }

    @media screen and (max-width: 100px){
        h1{
            font-size: 7px;
            line-height: 15px;
            word-break: break-all;
        }

        .Header p, p{
            font-size: 3px;
            line-height: 10px;
        }
    }
`

const NewsBox = ({ Header, DateTag, Body }) => {
    return (
        <NewsBoxWrapper>
            <div className='Header'>
                <h1>{Header}</h1>
                <p>{DateTag}</p>
            </div>
            <p>{Body}</p>
        </NewsBoxWrapper>
    )
}

export default NewsBox