import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import LearnMore from '../Buttons/LearnMore';

const CarouselWrapper = styled.section`
    padding: var(--sectioning-gap);

    .dots{
        text-align: center;
        padding-top: 2em;
    }

    .carousel{
        position: relative;
        margin: auto;
    }

    .slide{
        display: none;
        background-size: cover;
        background-repeat: no-repeat;
        height: 31.25em;
        border-radius: 10px;
        padding: 0 8em;
    }

    .slide .text-container{
        width: 29.8125em;
        transform: translate(0%, 30%);
    }

    .prev,
    .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width:1.7em;
        height: 1.7em;
        margin-left: 2em;
        padding: 16px;
        color: #FFFFFF;
        transition: 0.6s ease;
        border-radius: 50%;
        -webkit-user-select: none;
        user-select: none;
        font-family: Poppins;
        font-size: 18px;
        font-weight: 600;
        transform: translate(0%, -50%);
        text-align: center;
    }

    .next {
        right: 0;
        margin-left: 0;
        margin-right: 2em;
    }

    .prev:hover, .next:hover {
        background-color: rgba(0,0,0, 0.5);
    }

    a{
        text-decoration: none;
    }

    h4{
        font-family: Space Grotesk;
        font-size: 36px;
        font-weight: 600;
        line-height: 46px;
        color: #FFFFFF;
    }

    p{
        font-family: Poppins;
        font-size: 18px;
        font-weight: 400;
        line-height: 27px;
        color: #FFFFFF;
    }

    .dot {
        cursor: pointer;
        height: 1em;
        width: 1em;
        margin: 0 2px;
        background: #A7A9AC;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
    }

    .active,
    .dot:hover {
        background: #FF7215;
    }

    .fade {
        animation-name: fade;
        animation-duration: 1.5s;
    }

    @keyframes fade {
        from {
            opacity: .4
        }

        to {
            opacity: 1
        }
    }

    @media screen and (max-width: 830px){
        .prev, .next{
            display: none;
        }
    }

    @media screen and (max-width: 768px){
        .slide .text-container{
            width: auto;
        }
    }

    @media (min-width: 426px) and (max-width: 680px){
        .slide .text-container{
            transform: translate(0%, 0%);
            padding-top: 2em;
        }

        .slide {
            padding: 1em;
        }
    }

    @media screen and (max-width: 426px){
        h4{
            font-size: 25px;
            line-height: 32px;
        }

        p{
            font-size: 11px;
            line-height: 17px;
        }

        .slide{
            padding: var(--page-padding);
        }
    }

    @media screen and (max-width: 200px){
        .slide .text-container{
            transform: translate(0%, 0%);
            padding-top: 2em;
        }

        h4{
            font-size: 14px;
            line-height: 30px;
        }

        p{
            font-size: 7px;
            line-height: 17px;
        }
    }

    @media screen and (max-width: 100px){
      h4{
        font-size: 5px;
        line-height: 10px;
      }

      p{
        font-size: 2px;
        line-height: 10px;
      }
    }
`

const Carousel = ({ carousel1, carousel2, carousel3, carousel4, description, leadtext1, leadtext2, leadtext3, body1, body2, body3, Link1, Link2, Link3 }) => {

    useEffect(() => {

        let slideIndex = 0;
        let slides = document.querySelectorAll(".slide");
        let dots = document.querySelectorAll(".dot");
        let previous = document.querySelector('.prev');
        let next = document.querySelector('.next');
        let timeOut;

        function plusSlides(n) {
            showSlide(slideIndex += n);
        }

        function currentSlide(n) {
            showSlide(slideIndex = n);
        }

        function autoSlides() {
            let i;
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 };
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            timeOut = setTimeout(autoSlides, 5000);
        }

        function showSlide(n) {
            clearTimeout(timeOut)
            let i;
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            timeOut = setTimeout(autoSlides, 5000);
        }

        autoSlides();
        previous.addEventListener('click', () => plusSlides(-1));
        next.addEventListener('click', () => plusSlides(1));
        dots.forEach(dot => dot.addEventListener('click', () => {
            let n = dot.getAttribute("data-index");
            currentSlide(n);
        }));

    }, [])


    return (
        <CarouselWrapper>
            <div className="carousel">
                <div className="slide fade" style={{ backgroundImage: `url(${carousel1})` }}>
                    <div className='text-container'>
                        <h4>{leadtext1}</h4>
                        <p>{body1}</p>
                        <Link to={Link1}><LearnMore text={"Learn More "} bgColor={'rgba(244, 244, 244, 0.32)'} color={" #FFFFFF"} borderRadius={window.screen.availWidth <= 100 ? '5px' : "31px"} border={'none'} padding={window.screen.availWidth < 360 ? '0 0.5em' : '0.5em 1em'} margin={window.screen.availWidth <= 200 ? '0em' : '3em 0'} /></Link>
                    </div>
                </div>
                <div className="slide fade" style={{ backgroundImage: `url(${carousel2})` }}>
                    <div className='text-container'>
                        <h4>{leadtext2}</h4>
                        <p>{body2}</p>
                        <Link to={Link2}><LearnMore text={"Learn More "} bgColor={'rgba(244, 244, 244, 0.32)'} color={" #FFFFFF"} borderRadius={window.screen.availWidth <= 100 ? '5px' : "31px"} border={'none'} padding={window.screen.availWidth < 360 ? '0 0.5em' : '0.5em 1em'} margin={window.screen.availWidth <= 200 ? '0em' : '3em 0'} /></Link>
                    </div>
                </div>
                <div className="slide fade" style={{ backgroundImage: `url(${carousel3})` }}>
                    <div className='text-container'>
                        <h4>{leadtext3}</h4>
                        <p>{body3}</p>
                        <HashLink to={Link3} smooth><LearnMore text={"Learn More "} bgColor={'rgba(244, 244, 244, 0.32)'} color={"#FFFFFF"} borderRadius={window.screen.availWidth <= 100 ? '5px' : "31px"} border={'none'} padding={window.screen.availWidth < 360 ? '0 0.5em' : '0.5em 1em'} margin={window.screen.availWidth <= 200 ? '0em' : '3em 0'} /></HashLink>
                    </div>
                </div>
                <span className="prev">&#10094;</span>
                <span className="next">&#10095;</span>
            </div>
            <div className='dots'>
                <span className="dot" data-index='1'></span>
                <span className="dot" data-index='2'></span>
                <span className="dot" data-index='3'></span>
            </div>
        </CarouselWrapper>
    )
}

export default Carousel