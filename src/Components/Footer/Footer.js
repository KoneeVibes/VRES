import React from 'react';
import styled from 'styled-components';
import Logo from './Assets/Logo.svg'
import FooterCard from './FooterCard';
import FacebookIcon from './Assets/FacebookIcon.svg'
import InstagramIcon from './Assets/InstagramIcon.svg'
import LinkedInIcon from './Assets/LinkedInIcon.svg'
import YoutubeIcon from './Assets/YoutubeIcon.svg'
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
    background: #000000;
    padding: var(--page-padding);
    color: #FFFFFF;
    margin-top: 7em;
    padding-top: 2em;
    padding-bottom: 2em;

    .UpperSection{
        display: flex;
        align-items: flex-start;
        gap: 5%;
        padding-bottom: 1em;
        border-bottom: 1px solid #FFFFFF;
    }

    .LogoFlank img{
        width: 100%;
    }

    .FooterCardsFlank{
        flex: 85%;
        display: flex;
        gap: 8%;
        justify-content: space-between;
    }

    .TextFlank div{
        height: 4px;
        width: 4px;
        border-radius: 50%;
        margin: 0 1em;
        background: #FFFFFF;
    }

    span{
        font-family: Space Grotesk;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        display: flex;
        align-items: center;
    }

    .LowerSection{
        padding: 2em 4em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8%;
    }

    .IconsFlank{
        display: flex;
        align-items: center;
        gap: 1em;
        padding: 0 1em;
    }

    .IconsFlank img{
        width: 100%;
    }

    @media screen and (max-width: 768px){
        --flex-gap: 3em;

        .UpperSection{
            flex-direction: column;
            gap: var(--flex-gap);
        }
        .FooterCardsFlank{
            flex-direction: column;
            gap: var(--flex-gap);
        }

        .LowerSection{
            padding: 2em 0;
        }
    }

    @media (min-width: 425px) and (max-width: 768px){
        .IconsFlank{
            flex: 30%;
        }

        .TextFlank{
            flex: 70%;
        }
    }

    @media screen and (max-width: 545px){
        .LowerSection{
            flex-direction: column-reverse;
            align-items: flex-start;
            gap: 1em;
        }

        .IconsFlank{
            padding: 0;
        }
    }

    @media screen and (max-width:280px){
        span{
            word-break: break-all;
        }
    }

    @media screen and (max-width: 160px){
        .IconsFlank{
            flex-direction: column;
        }
    }

    @media screen and (max-width: 100px){
        span{
            font-size: 2px;
            line-height: 10px;
        }

        .IconsFlank img{
            width: 30%;
        }
    }
`

const Footer = () => {
    return (
        <FooterWrapper id='Footer'>
            <div className='UpperSection'>
                <div className='LogoFlank'>
                    <img src={Logo} alt='valley ridge logo'></img>
                </div>
                <div className='FooterCardsFlank'>
                    <FooterCard header={'ABOUT'}
                        body1={'Who are We'} link1={'/about'}
                        body2={'Our Services'} link2={'/services'}
                        body3={'Our Vision'} link3={'/about#VisionAndMission'}
                        body4={'Our Mission'} link4={'/about#VisionAndMission'}
                        body5={'Our Team'} link5={'/about#Team'}
                    />
                    <FooterCard header={'SERVICES'}
                        body1={'Procurement Service'} link1={'/services/procurement'}
                        body2={'Assest Management'} link2={'/services/assetmanagement'}
                        body3={'Fabrication, Civil, Work & Construction Service'} link3={'/services/fabricationandcivilworkandconstruction'}
                        body4={'Electrical & Mechanical Service'} link4={'/services/electricalandmechanicalservice'}
                        body5={'Process & Instrumentation '} link5={'/services/processandinstrumentation'}
                        body6={'Engineering Procurment & Construction'} link6={'/services/engineeringprocurementandconstruction'}
                        body7={'Drilling Support Service'} link7={'/services/drillingsupportandservice'}
                        body8={'Integrating'} link8={'/services/integrating'}
                        body9={'Power Solution'} link9={'/services/powersolution'} />
                    <FooterCard header={'LOCATION'}
                        body1={'1-7 Muri Okonla Street, Victoria Island, Lagos '} link1={''} cursor1={'auto'}/>
                    <FooterCard header={'CONTACT'}
                        body1={'+2348098082746'} link1={'tel:+2348098082746'}
                        body2={'+23408033855764'} link2={'tel:+23408033855764'}
                        body3={'+447776306738'} link3={'tel: +447776306738'}
                        body4={'info@valleyridgeenergy.com'} link4={'mailto:info@valleyridgeenergy.com'}/>
                </div>
            </div>
            <div className='LowerSection'>
                <div className='TextFlank'>
                    <span>© TToil 2021 . All right reserved<div></div>Designed with by Lemon Designs</span>
                </div>
                <div className='IconsFlank'>
                    <Link to={''}><img src={YoutubeIcon} alt='Youtube Icon'></img></Link>
                    <Link to={''}><img src={LinkedInIcon} alt='LinkedIn Icon'></img></Link>
                    <Link to={''}><img src={FacebookIcon} alt='Facebook Icon'></img></Link>
                    <Link to={''}><img src={InstagramIcon} alt='Instagram Icon'></img></Link>
                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer