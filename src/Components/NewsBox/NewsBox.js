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

    p, strong, li{
        font-family: Poppins;
        font-size: 18px;
        font-weight: 500;
        line-height: 33px;
        letter-spacing: -0.02em;
        margin-block: 2em;
    }

    a{
        text-decoration: none;
        color: #000000;
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

        ul{
            margin: 0;
            padding: 0;
            list-style-position: inside;
        }

        strong{
            word-wrap: break-word;
        }

        p, strong, li{
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

        .Header p, p, strong, li{
            font-size: 7px;
        }
    }

    @media screen and (max-width: 100px){
        h1{
            font-size: 7px;
            line-height: 15px;
            word-break: break-all;
        }

        .Header p, p, strong, li{
            font-size: 3px;
            line-height: 10px;
        }
    }
`

const NewsBox = ({ Header, DateTag, BodyI, BodyII, BodyIII, BodyIV, BodyV, BodyVI, BodyVII, BodyVIII, BodyIX, BodyX, BodyXI, BodyXII, BodyXIII, BodyXIV, BodyXV, TopicI, TopicII, TopicIII, TopicIV, TopicV, TopicVI, TopicVII, TopicVIII, TopicIX, TopicX, TopicXI, TopicXII, TopicXIII, TopicXIV, TopicXV, Point5I, Point5II, Point5III, Point1I, Point1II, Point1III, Link, LinkText, Display }) => {
    return (
        <NewsBoxWrapper>
            <div className='Header'>
                <h1>{Header}</h1>
                <p>{DateTag}</p>
            </div>
            <div>
                <strong>{TopicI}</strong>
                <ul style={{display: Display}}>
                    <li>{Point1I}</li>
                    <li>{Point1II}</li>
                    <li>{Point1III}</li>
                </ul>
                <p>{BodyI}</p>
            </div>
            <div>
                <strong>{TopicII}</strong>
                <p>{BodyII}</p>
            </div>
            <div>
                <strong>{TopicIII}</strong>
                <p>{BodyIII}</p>
            </div>
            <div>
                <strong>{TopicIV}</strong>
                <p>{BodyIV}</p>
            </div>
            <div>
                <strong>{TopicV}</strong>
                <p>{BodyV}</p>
                <div>
                    <p>{Point5I}</p>
                    <p>{Point5II}</p>
                    <p>{Point5III}</p>
                </div>
            </div>
            <div>
                <strong>{TopicVI}</strong>
                <p>{BodyVI}</p>
            </div>
            <div>
                <strong>{TopicVII}</strong>
                <p>{BodyVII}</p>
            </div>
            <div>
                <strong>{TopicVIII}</strong>
                <p>{BodyVIII}</p>
            </div>
            <div>
                <strong>{TopicIX}</strong>
                <p>{BodyIX}</p>
            </div>
            <div>
                <strong>{TopicX}</strong>
                <p>{BodyX}</p>
            </div>
            <div>
                <strong>{TopicXI}</strong>
                <p>{BodyXI}</p>
            </div>
            <div>
                <strong>{TopicXII}</strong>
                <p>{BodyXII}</p>
            </div>
            <div>
                <strong>{TopicXIII}</strong>
                <p>{BodyXIII}</p>
            </div>
            <div>
                <strong>{TopicXIV}</strong>
                <p>{BodyXIV}</p>
            </div>
            <div>
                <strong>{TopicXV}</strong>
                <p>{BodyXV}</p>
            </div>
            <p>Source: <span><a href={Link} target='_blank' rel="noopener noreferrer external">{LinkText}</a></span></p>
        </NewsBoxWrapper>
    )
}

export default NewsBox