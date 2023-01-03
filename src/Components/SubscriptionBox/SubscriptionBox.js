import React from 'react';
import styled from 'styled-components';
import MailBox from '../MailBox/MailBox';

const SubscriptionBoxWrapper = styled.section`
    display: flex;
    justify-content: center;
    text-align: center;

    h4{
        font-family: 'Poppins';
        font-size: 32px;
        font-weight: 700;
        line-height: 40px;
        letter-spacing: -0.02em;
    }

    p{
        font-family: 'Poppins';
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
    }

    @media screen and (max-width: 767px){
      h4{
        font-size: 25px;
        font-weight: 600;
      }

      p{
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.02em;
      }
    }

    @media screen and (max-width: 279px){
      h4{
        font-size: 14px;
      }

      p{
          font-size: 7px;
      }
    }

    @media screen and (max-width: 150px){
      display: none;
    }
`

const SubscriptionBox = () => {
  return (
    <SubscriptionBoxWrapper>
        <div>
              <h4>Never miss a drop</h4>
              <p>Subscribe for the latest news, drops & collectibles</p>
              <MailBox />
        </div>
    </SubscriptionBoxWrapper>
  )
}

export default SubscriptionBox