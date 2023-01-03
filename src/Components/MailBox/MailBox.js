import React from 'react';
import ConvertKitForm from 'convertkit-react';
import styled from 'styled-components';

const MailBoxWrapper = styled.div`
    
    .form{
        border: 1.2px solid #000000;
        border-radius: 37px; 
        padding-left: 1em;
        padding-right: 0.3em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 74px;
    }

    .form input{
        border: none;
        height: 18px;
        width: 75%;
        color: #121212;
        outline: none;
    }

    .form button{
        background: #121212;
        border: none;
        border-radius: 37px;
        padding: 10px 30px;
        height: 90%;
        font-family: Poppins;
        font-size: 17px;
        font-weight: 500;
        line-height: 24px;
        color: #FFFFFF;
    }

    #ck-first-name {
        display:none;
    }

    #ck-email, #ck-email::placeholder{
        color: #121212;
        font-family: poppins;
        font-size: 15px;
        font-weight: 400;
        line-height: 18px;
    }

    @media screen and (max-width: 1046px){
        #ck-email, #ck-email::placeholder{
            font-size: 12px;
            line-height: 14.52px;
            padding-left: 0.5em;
        }

        .form button{
            font-size: 14px;
        }
    }

    @media screen and (min-width: 830px) and (max-width: 870px){
        #ck-email, #ck-email::placeholder{
            padding-left: 0em;
        }
    }

    @media screen and (min-width: 560px) and (max-width: 600px){
        #ck-email, #ck-email::placeholder{
            padding-left: 0em;
        }
    }

    @media screen and (max-width: 560px){
        .form{
            padding-left: 0.4%;
            padding-right: 1%;
        }

        #ck-email, #ck-email::placeholder{
            padding-left: 1em;
        }
    }

    @media screen and (max-width: 340px){
        #ck-email, #ck-email::placeholder{
            font-size: 10px;
        }

        .form button{
            font-size: 12px;
        }

        .form{
            padding-right: 1.5%;
        }
    }

    @media screen and (min-width: 279px) and (max-width: 292px){
        #ck-email, #ck-email::placeholder{
            padding-left: 2%;
        }
    }

    @media screen and (max-width: 279px){
        .form button{
            font-size: 5px;
            line-height: 15px;
            padding: 5% 15%;
        }
        
        #ck-email, #ck-email::placeholder{
            font-size: 5px;
            line-height: 10px;
            padding-left: 2em;
        }
    
        .form{
            padding-left: 0.1%;
        }
    }

    @media screen and (max-width: 190px){
        #ck-email, #ck-email::placeholder{
            padding-left: 3%;
        }
    }

    @media screen and (max-width: 155px){
        .form{
            display: none;
        }
    }

`


const MailBox = () => {

    const FORM_ID = parseFloat(`${process.env.REACT_APP_CONVERTKIT}`);

    const config = {
        formId: FORM_ID,
        emailPlaceholder: 'Enter your email address',
    }

    return (
        <MailBoxWrapper>
            <ConvertKitForm formId={FORM_ID} className='form' {...config} />
        </MailBoxWrapper>
    )
}

export default MailBox