import React from 'react';
import styled from 'styled-components';
import Location from './Assets/LocationIcon.svg';
import Phone from './Assets/PhoneIcon.svg';
import Mail from './Assets/MailIcon.svg';

const ContactsTabWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2em;

    .Location, .Phone, .Mail{
        display: flex;
        align-items: flex-start;
        gap: 1em;
    }

    h6{
        font-family: Space Grotesk;
        font-size: 27px;
        font-weight: 600;
        line-height: 34px;
        letter-spacing: 0em;
        margin: 0;
    }

    p{
        font-family: Space Grotesk;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
    }

    @media screen and (max-width: 1480px){
        gap: 6em;
    }

    @media screen and (max-width: 1280px){
        gap: 1em;

        h6{
            font-size: 24px;
        }

        p{
            font-size: 16px;
        }
    }

    @media screen and (max-width: 1024px){
        flex-direction: column;
        gap: 3em;

        h6{
            font-size: 20px;
            line-height: 26px;
        }

        p{
            font-size: 14px;
        }
    }

    @media screen and (max-width: 550px){
        .Location, .Phone, .Mail{
            width: 100%;
        }

        img{
            width: 10%;
        }
    }

    @media screen and (max-width: 279px){
        h6{
            font-size: 14px;
        }

        p{
            font-size: 7px;
            line-height: 21px;
            letter-spacing: -0.02em;
        }
    }

    @media screen and (max-width: 150px){
      h6{
        font-size: 5px;
        line-height: 21px;
        word-break: break-all;
      }

      p{
        font-size: 2px;
        word-break: break-all;
      }
    }
`

const ContactsTab = () => {
    return (
        <ContactsTabWrapper>
            <div className='Location'>
                <img src={Location} alt='Location Icon'></img>
                <div className='TextSide'>
                    <h6>Location</h6>
                    <p>382 Ikorodu Road, Maryland, Lagos</p>
                    <p>5th Floor Interservice Tower Lumumba Avenue, Nakasero Kampala, Uganda.</p>
                    <p>Abidjan, Cocody - Angré, immeuble Mah djalika</p>
                </div>
            </div>
            <div className='Phone'>
                <img src={Phone} alt='Phone Icon'></img>
                <div className='TextSide'>
                    <h6>Contact</h6>
                    <p>+23408033855764, +447776306738</p>
                </div>
            </div>
            <div className='Mail'>
                <img src={Mail} alt='Mail Icon'></img>
                <div className='TextSide'>
                    <h6>Email</h6>
                    <p>info@valleyridgeenergy.com</p>
                </div>
            </div>
        </ContactsTabWrapper>
    )
}

export default ContactsTab