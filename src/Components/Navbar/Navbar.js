import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from './Assets/Logo.svg';
import { Link } from 'react-router-dom';
import LanguageIcon from './Assets/LanguageIcon.svg'

const NavbarWrapper = styled.nav`
    --nav-height: 5.03875em;
    --NavLinkPadding: 7px 23px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: var(--nav-height);
    padding: var(--page-padding);

    ul{
        display: flex;
        gap: 1em;
        align-items: center;
        list-style-type: none;
        cursor: pointer;
    }

    ul, h6{
        font-family: Space Grotesk;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: -0.02em;
    }

    a{
        text-decoration: none;
        color: #000000;
    }

    h6{
        margin: 0;
        color: #FF7215;
    }

    .LanguageSelector{
        display: flex;
        gap: 0.25em;
        padding: var(--NavLinkPadding);
    }

    .NavHighlight{
        padding: var(--NavLinkPadding);
    }

    .NavHighlight:hover{
        color: #000000;
    }

    .logo{
        width: 100%;
    }

    .hamburger{
        display: none;
        cursor: pointer;
    }

    .bar{
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-color: #FF7215;
    }

    @media screen and (max-width: 1440px){
        --NavLinkPadding: 7px 14px;
        ul{
            // necessary only if the careers link is up
            // gap: 0.2em;
        }
    }

    @media screen and (max-width: 1260px){
        --NavLinkPadding: 7px 10px;
    }

    @media screen and (max-width: 1200px){
        ul, h6{
            font-size: 14px;
        }

        ul{
            // necessary only if the careers link is up
            // gap: 0;
        }

        .logo{
            width: 80%;
        }
    }

    @media screen and (max-width: 1048px){
        --NavLinkPadding: 7px;
    }

    @media screen and (max-width: 1024px){

        .hamburger{
            display: block;     
        }

        .hamburger.active .bar:nth-child(2){
            opacity: 0;
        }

        .hamburger.active .bar:nth-child(1){
            transform: translateY(8px) rotate(45deg);
        }

        .hamburger.active .bar:nth-child(3){
            transform: translateY(-8px) rotate(-45deg);
        }

        ul{
            position: fixed;
            left: -100%;
            top: var(--nav-height);
            gap: 50px;
            width: 100%;
            height: 100%;
            margin: 0;
            background: #FFFFFF;
            flex-direction: column;
            text-align: center;
            transition: 0.3;
            color: #000000;
            padding: 6.25em 0 0 0;
        }

        ul.active{
            left: 0;
        }
    }

    @media screen and (max-width: 150px){
        --NavLinkPadding: 2px;

        ul, h6{
            font-size: 7px;
            line-height: 15px;
            word-break: break-all;
            top: 8.4em;
        }
    }

`

const Navbar = () => {

    const [isActive, setisActive] = useState(false);

    const toggleClass = () => {
        setisActive(!isActive);
        if (isActive) {
            document.body.style.overflowY = 'visible';
        } else {
            document.body.style.overflowY = 'hidden';
        }
    }

    useEffect(() => {

        const triggers = document.querySelectorAll('.NavHighlight');
        const highlight = document.createElement('span');
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('ul');
        const counter = document.querySelector('.CounterContainer');

        highlight.classList.add('highlight');
        document.body.append(highlight);

        function highlightLink() {
            const linkCoords = this.getBoundingClientRect();

            const coords = {
                width: linkCoords.width,
                height: linkCoords.height,
                top: linkCoords.top + window.scrollY,
                left: linkCoords.left + window.scrollX,
            }

            highlight.style.width = `${coords.width}px`;
            highlight.style.height = `${coords.height}px`;
            highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
        }

        if (counter) {
            (isActive) ? counter.classList.add('DisplayNone') : counter.classList.remove('DisplayNone');
        }

        document.querySelectorAll('.NavHighlight').forEach(i => i.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflowY = 'visible';
        }))

        function resetToDefault() {
            if (window.screen.availWidth >= 1024) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflowY = 'visible';
            }
        }

        const HideHighlight = function(){
            highlight.style.transform = 'translate(0%, -102%)';
        };

        window.addEventListener('resize', resetToDefault);
        triggers.forEach(navLink => navLink.addEventListener('mouseenter', highlightLink));
        triggers.forEach(navLink => navLink.addEventListener('click', HideHighlight));
        triggers.forEach(navLink => navLink.addEventListener('mouseout', HideHighlight));
    }, [isActive])


    return (
        <NavbarWrapper>
            <Link to='/'><img src={Logo} alt='valley ridge logo' className='logo'></img></Link>
            <ul className={isActive ? "active" : null}>
                <Link to='/'><li className='NavHighlight' id='HomeHighlight'>Home</li></Link>
                <Link to='/about'><li className='NavHighlight' id='AboutHighlight'>About Us</li></Link>
                <Link to='/services'><li className='NavHighlight' id='ServicesHighlight'>Our Services</li></Link>
                {/* <li className='NavHighlight'>Careers</li> */}
                <Link to='/newsroom'><li className='NavHighlight' id='NewsroomHighlight'>NewsRoom</li></Link>
                <Link to='/contact'><li className='NavHighlight' id='ContactHighlight'>Contact Us</li></Link>
                <li className='LanguageSelector'>
                    <img src={LanguageIcon} alt='language icon'></img>
                    <h6>EN</h6>
                </li>
            </ul>
            <div className={isActive ? "hamburger active" : "hamburger"} onClick={toggleClass}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
        </NavbarWrapper>
    )
}

export default Navbar