import { useRef } from 'react';
import styled from 'styled-components';
import CallToAction from '../Buttons/CallToAction';
import emailjs from '@emailjs/browser';

const CommentBoxWrapper = styled.section`
    form{
        display: flex;
        flex-direction: column;
        gap: 1em;
        padding: 2em;
        background: #E9E9E9;
        backdrop-filter: blur(90.5px);
        border-radius: 18px;
    }

    input, textarea{
        padding: 1em;
        color: #202020;
        outline: none;
        border: none;
        background: #FFFFFF;
        border-radius: 5px;
        font-family: Space Grotesk;
        font-size: 16px;
        font-weight: 500;
        line-height: 26px;
        letter-spacing: -0.02em;
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
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        margin: 0;
    }

    .Button-Container{
        display: flex;
        justify-content: flex-end;
    }

    @media screen and (max-width: 1280px){

        h6{
            font-size: 24px;
        }

        p{
            font-size: 16px;
        }
    }

    @media screen and (max-width: 1024px){
        h6{
            font-size: 20px;
            line-height: 26px;
        }

        p, input, textarea{
            font-size: 14px;
        }

        .Button-Container button{
            width: auto;
        }
    }

    @media screen and (max-width: 279px){
        h6{
            font-size: 14px;
        }

        p, input, textarea{
            font-size: 7px;
            line-height: 21px;
            letter-spacing: -0.02em;
        }

        form{
            padding: 1em;
        }

        .Button-Container button{
            width: 100%;
        }
    }

    @media screen and (max-width: 150px){
      h6{
        font-size: 5px;
        line-height: 21px;
        word-break: break-all;
      }

      p, input, textarea{
        font-size: 2px;
        word-break: break-all;
      }

      form{
        padding: 5px;
      }
    }

`

const CommentBox = () => {

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMP_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLICKEY_ID;

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMP_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <CommentBoxWrapper className='CommentBox'>
            <form ref={form} onSubmit={sendEmail}>
                <h6>Get In Touch</h6>
                <p>For any inquiries, questions or commendations, please fill out the following form</p>
                <input type='text' placeholder='Your Name' name='user_name' required></input>
                <input type='email' placeholder='Your Email address' name='user_email' required></input>
                <input type='tel' placeholder='Your Phone Number' name='user_phone_number' required></input>
                <input type='text' placeholder='Subject' name='subject' ></input>
                <textarea type='text' placeholder='Send us an email' name='message' rows="5" required></textarea>
                <div className='Button-Container'>
                    <CallToAction type={'submit'}
                        text={'Submit'}
                        background={' #FF7113'}
                        border={' #FF7113'} />
                </div>
            </form>
        </CommentBoxWrapper>
    )
}

export default CommentBox