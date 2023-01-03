import React, { useEffect } from 'react';
import styled from 'styled-components';

const CounterWrapper = styled.section`
    background: #FFFFFF;
    box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.13);
    border-radius: 10px;
    transform: translate(0%, -50%);
    display: flex;
    justify-content: space-between;
    padding: 2em 1em;
    margin: 0 12.1875em;
    
    .container{
        border-right: 1px solid #DCDCDC;
        padding: 0 3em;
    }

    .container.no-border{
        border-right: none;
    }

    h5{
        font-family: Poppins;
        font-size: 30px;
        font-weight: 600;
        line-height: 44px;
        letter-spacing: -0.02em;
        margin: 0;
    }

    p{
        font-family: Space Grotesk;
        font-size: 18px;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: 0em;
        color: #737373;
        margin: 0;
    }

    @media screen and (max-width: 1024px){
        .container{
            padding: 0 2em;
        }
    }

    @media screen and (max-width: 768px){
        margin: var(--page-padding);

        .container{
            padding: 0 0.5em;
        }

        h5{
            font-size: 20px;
            line-height: 24px;
        }

        p{
            font-size: 14px;
            line-height: 16px;   
        }

    }

    @media screen and (max-width: 426px){
        padding: 1em;

        h5{
            font-size: 15px;
            line-height: 24px;
        }

        p{
            font-size: 9px;
            line-height: 16px;   
        }
    }

    @media screen and (max-width: 360px){
        h5{
            font-size: 15px;
            line-height: 44px;
            letter-spacing: -0.02em;
        }

        p{
            font-size: 8px;
        }
    }

    @media screen and (max-width: 279px){
        padding: 0;
        .container{
            padding: 0em;
        }
    }

    @media screen and (max-width: 185px){
        border-radius: 3px;
        h5{
            font-size: 5px;
            font-weight: 700;
            line-height: 10px;
        }

        p{
            font-size: 2px;
            line-height: 10px;
            letter-spacing: -0.02em;
        }
    }
`

const Counter = () => {

    useEffect(() => {
      
        let valueDisplays = document.querySelectorAll('.num');
        let interval = 10000;

        valueDisplays.forEach(valueDisplay => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            let duration = Math.floor(interval/endValue);
            let counter = setInterval(function(){
                startValue += 1;
                valueDisplay.textContent = `${startValue < 10 ? '0' : ''}${startValue}`;  
                if (startValue === endValue){
                    clearInterval(counter);
                }
            }, duration)
        })

    }, [])
    

  return (
    <CounterWrapper>
        <div className='container'>
            <h5>2015</h5>
            <p>Year Established</p>
        </div>
        <div className='container'>
            <h5 data-val='105' className='num'>0</h5>
            <p>Projects Completed </p>
        </div>
        <div className='container'>
            <h5 data-val='08' className='num'>0</h5>
            <p>Contractors Appointed</p>
        </div>
        <div className='container no-border'>
            <h5 data-val='02' className='num'>0</h5>
            <p>Awards Won</p>
        </div>
    </CounterWrapper>
  )
}

export default Counter