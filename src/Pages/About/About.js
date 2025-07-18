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
            body={"We play a lead role in providing engineering and procurement services in Nigeria through a highly skilled and multi-disciplinary team equipped to handle a wide range of projects and challenges."}
            flexDirection={(window.screen.availWidth >= 1024) ? 'row-reverse' : ''} />
        </div>
        <div className='TextCardsSection' id='VisionAndMission'>
          <LearnMore border={'none'} bgColor={'#FFFFFF'} color={'#F37521'} text={'Learn about us'} spanDisplay={'none'} />
          <h4 className='BodyCopy'>We craft all our experience around our values</h4>
          <div className='Cards'>
            <TextCard src={Energy} alt={'Energy Icon'} header={'Our Vision'} body={"To be the go-to choice for oil and gas companies in Nigeria and across Africa that is dedicated to delivering top-quality services and building long lasting relationships while ensuring we are always at the forefront of the industry."} />
            <TextCard src={Tractor} alt={'Tractor Icon'} header={'Our Mission'} body={"Our mission is to provide exceptional service while upholding the highest ethical standards and complying with all relevant statutory regulations. We are committed to conducting all of our operations with integrity, ensuring that our clients receive the best possible experience. At the heart of our business is a passion for delivering outstanding service, and we take pride in our ability to meet and exceed our clients' expectations. With our unwavering commitment to excellence and ethical conduct, you can trust us to always act in your best interests."} />
          </div>
        </div>
        <div className='ProfileSection' id='Team'>
          <ProfileCard src={ImageI} description={'Picture'} header={'Kunle Gbagba'} bodyI={'Kunle Gbagba is the Co-Founder and Director at Valley Ridge Energy Ltd with more than 13 years of experience as an IT and Software Development expert and a Consultant in healthcare.'}
            bodyII={'He holds a Master’s degree in Geographical Information Systems from the University of Portsmouth UK and a Bachelors degree in Computer Engineering. Gbagba’s expertise spans Implementing SAP Procurement and Strategic Sourcing as well as big data.'} />
          <ProfileCard src={ImageII} description={'Picture'} header={'Tunde Tella'} bodyI={"Tunde Tella is a graduate of Mathematics and Statistics from the University of Lagos. He also holds an MBA from the University of Connecticut School of Business, with a concentration in Strategy, Marketing, and Finance."}
            bodyII={'With extensive experience in Banking, Healthcare, Telecoms, Consulting, and New Technologies, Tunde has worked in various African countries, including Nigeria, Mozambique, Angola, Gabon, Ivory Coast, Uganda, and Ghana. Currently, he serves as a Director at Valley Ridge Energy Services Limited, where he is in charge of Operations and Business Development.'} />
        </div>
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default About