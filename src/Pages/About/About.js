import React from 'react';
import './About.css'
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import HeaderPhoto from './Assets/HeaderPhoto.svg';
import MobileHeaderPhoto from './Assets/MobileHeaderPhoto.svg';
import HeroTab from '../../Components/HeroTab/HeroTab.js'
import HeroPhoto from './Assets/HeroPhoto.png';
import Footer from '../../Components/Footer/Footer';
import FAQ from '../../Components/FAQ/FAQ';
import LearnMore from '../../Components/Buttons/LearnMore';
import TextCard from '../../Components/TextCard/TextCard';
import Energy from './Assets/EnergyAboutPage.svg';
import Tractor from './Assets/TractorAboutPage.svg';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import ImageI from './Assets/ImageI.svg';
import ImageII from './Assets/ImageII.svg';

const About = () => {
  return (
    <div id='About'>
      <Navbar />
      <Header display={'none'} background={(window.screen.availWidth > 425) ? HeaderPhoto : MobileHeaderPhoto} height={'22.9375em'} />
      <div className='main'>
        <div className='HeroSection'>
          <HeroTab display={'none'} img={HeroPhoto} padding={window.screen.availWidth >= 1024 ? 'var(--sectioning-gap)' : ''}
            leadtext={'Delivering excellence in everything we do.'}
            body={"Leading providers of engineering and procurement services in the oil and gas industry. with a highly skilled and multi-disciplinary team, equipped to handle a wide range of projects and challenges."}
            flexDirection={(window.screen.availWidth >= 1024) ? 'row-reverse' : ''} />
        </div>
        <div className='TextCardsSection' id='VisionAndMission'>
          <LearnMore border={'none'} bgColor={'#FFFFFF'} color={'#F37521'} text={'Learn about us'} spanDisplay={'none'} />
          <h4 className='BodyCopy'>We craft all our experience around our values</h4>
          <div className='Cards'>
            <TextCard src={Energy} alt={'Energy Icon'} header={'Our Vision'} body={"To be the go-to choice for oil and gas companies in Nigeria and across Africa. Dedicated to delivering top-quality services and building long lasting relationships, ensuring we're always at the forefront of the industry."} />
            <TextCard src={Tractor} alt={'Tractor Icon'} header={'Our Mission'} body={'We believe that our attention to detail and commitment to excellence sets us apart from competition. With a focus on safety, sustainability, and efficiency, we work hard to ensure our clients receive the best possible service in this rapidly changing world.'} />
          </div>
        </div>
        <div className='ProfileSection' id='Team'>
          <ProfileCard src={ImageI} description={'Picture'} header={'Kunle Gbagba'} body={'Kunle Gbagba is Co Founder and a graduate of Computer Engineering with a Masters in Geographical Information Systems from the University of Portsmouth UK,  with over 13 years experience of working within the IT and Software Development, Consultancy and Health Care . He has worked with different companies with experiences Implementing Sap Procurement and Strategic Sourcing. and an expert in big data and currently Director at Valley Ridge Energy Ltd and Albay Technologies LTD '} />
          <ProfileCard src={ImageII} description={'Picture'} header={'Tunde Tella'} body={"Tunde Tella is a graduate of Mathematics and Statistics with an MSC from the University of Connecticut School of Business, Worked with the joint venture and Global Business Team at International Energy services. Tunde has over 16 years work experience in Consulting, Health Care,  Oil and Gas like  defunct National bank(Sales), Oceanic Bank (Operations),Connecticut centre for Innovation and entrepreneurship (CCIE USA) and GE Health care and now a Director at Valley Ridge Energy Services Limited"} />
        </div>
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default About