import React from 'react';
import styled from 'styled-components';
import QuestionBox from './QuestionBox';

const FAQWrapper = styled.section`
    .TextSection{
        display: flex;
        justify-content: center;
    }

    .TextContainer{
        width: 33.0625em;
        text-align: center;
    }

    .TextContainer p{
        font-family: Space Grotesk;
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
    }

    h2{
        font-family: Space Grotesk;
        font-size: 40px;
        font-weight: 700;
        line-height: 48px;
        letter-spacing: -0.02em;
    }

    @media screen and (max-width: 768px){
        h2{
            font-size: 30px;
        }
    }

    @media screen and (max-width: 279px){
        h2{
            font-size: 20px;
        }
    }

    @media screen and (max-width: 150px){
        h2, .TextContainer p{
            font-size: 5px;
        }
    }
`

const FAQ = () => {
    return (
        <FAQWrapper>
            <div className='TextSection'>
                <div className='TextContainer'>
                    <h2>Frequently Asked Questions</h2>
                    <p>Have  any question? </p>
                </div>
            </div>
            <div>
                <QuestionBox Question={'What is your Quality  Policy?'}
                    Answer={'We work with top manufacturers and suppliers to ensure that customers get the best value for their money while ensuring continual improvement of quality.'} />
                <QuestionBox Question={'What is your Corporate Social Responsiblility?'}
                    Answer={'We have a strong corporate HSE culture and strive to make a positive impact in the communities where it operates.'} />
                <QuestionBox Question={' How do you support local communities where you operate in?'}
                    Answer={'We always strive to have a strong positive impact in the communities we operate in.'} />
                <QuestionBox Question={' How do you invest in research and development to improve your operations?'}
                    Answer={'we work with clients from project conception, offering world class solutions, researching and gathering insights across the value chain.'} />
            </div>
        </FAQWrapper>
    )
}

export default FAQ