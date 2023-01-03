import React from 'react';
import styled from 'styled-components';

const ProfileCardWrapper = styled.div`
    padding: 2em;
    border-radius: 18px;
    flex: 1;
    border: 1px solid #ABABAB;

    :hover{
        background: #000000;
        color: #FFFFFF;
    }

    .ImageSection{
        width: 60%;
    }

    img{
        border-radius: 50%;
        width: 80%;
    }

    h2{
        font-family: Space Grotesk;
        font-size: 32px;
        font-weight: 700;
        line-height: 48px;
    }

    p{
        font-family: Poppins;
        font-size: 18px;
        font-weight: 400;
        line-height: 32px;
    }

    @media screen and (min-width: 1024px){
        padding: 2em 1em;
    }

    @media screen and (max-width: 768px){
        p{
            font-size: 16px;
            line-height: 28px;
        }
    }

    @media screen and (max-width: 425px){

        p{
            font-size: 14px;
        }
    }

    @media screen and (max-width: 320px){
        padding: 1em 0.5em;
    }

    @media screen and (max-width: 279px){
        p{
            font-size: 12px;
        }

        h2{
            font-size: 16px;
            line-height: 20px;
        }

        word-break: break-all;
    }

    @media screen and (max-width: 150px){
        padding: 0.5em 0em;

        p{
            font-size: 5px;
            line-height: 10px;
        }

        h2{
            font-size: 5px;
            line-height: 10px;
        }
    }

`

const ProfileCard = ({src, description, header, body}) => {
  return (
    <ProfileCardWrapper>
        <div className='ImageSection'>
            <img src={src} alt={description}></img>
        </div>
        <h2>{header}</h2>
        <p>{body}</p>
    </ProfileCardWrapper>
  )
}

export default ProfileCard