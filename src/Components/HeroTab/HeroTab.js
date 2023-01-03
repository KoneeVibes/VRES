import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LearnMore from '../Buttons/LearnMore';

const HeroTabWrapper = styled.section`
    display: flex;
    gap: 7em;
    justify-content: space-between;

    h4{
        font-family: Space Grotesk;
        font-size: 40px;
        font-weight: 600;
        line-height: 40px;
        letter-spacing: -0.02em;
    }

    p{
        font-family: Poppins;
        font-size: 18px;
        font-weight: 500;
        line-height: 33px;
    }

    a{
        text-decoration: none;
    }

    .TextFlank, .ImageFlank{
        flex: 50%
    }

    .ImageFlank img{
        border-radius: 10px;
        width: 100%;
    }

    .ImageFlank{
        width: 100%;
    }

    @media screen and (max-width: 1440px){
        align-items: center;
    }

    @media screen and (max-width: 1023px){
        gap: 3em;
        flex-direction: column;
        .ImageFlank img{
            width: 100%;
        }
    }

    @media screen and (max-width: 426px){
        h4{
            font-size: 25px;
            line-height: 40px;
            letter-spacing: -0.02em;
        }

        p{
            font-size: 12px;
            line-height: 28px;
        }
    }

    @media screen and (max-width: 150px){
        h4{
            font-size: 5px;
            line-height: 10px;
            // padding: 2px;
        }

        p{
            font-size: 5px;
            line-height: 10px;
            // padding: 2px;
        }
    }
`

const HeroTab = ({ img, description, leadtext, body, justifyContent, gap, display, padding, flexDirection }) => {

    return (
        <HeroTabWrapper style={{ justifyContent: justifyContent, gap: gap, padding: padding, flexDirection: flexDirection }}>
            <div className='TextFlank'>
                <h4 className='LeadText'>{leadtext}</h4>
                <p className='BodyText'>{body}</p>
                <Link to='/about'><LearnMore text={'Learn More '} border={'none'} bgColor={'#FFFFFF'} color={'#FF7215'} margin={'3em 0'} display={display} /></Link>
            </div>
            <div className='ImageFlank'>
                <img src={img} alt={description}></img>
            </div>
        </HeroTabWrapper>
    )
}

export default HeroTab