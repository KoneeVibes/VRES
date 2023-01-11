import React from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar.js';
import Header from '../../Components/Header/Header';
import PCHeaderPhoto from './Assets/HeaderPhoto.svg';
import MobilePhoto from './Assets/MobileHeaderPhoto.svg';
import HeroTab from '../../Components/HeroTab/HeroTab';
import HeroPhoto from './Assets/HeroPhoto.svg';
import Carousel from '../../Components/Carousel/Carousel'
import Carousel1 from './Assets/Carousel1.svg';
import Carousel2 from './Assets/Carousel2.svg';
import Carousel3 from './Assets/Carousel3.svg';
import BookSession from '../../Components/BookSession/BookSession';
import Blog from '../../Components/Blog/Blog';
import FAQ from '../../Components/FAQ/FAQ';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div id='Home'>
      <Navbar />
      <Header background={(window.screen.availWidth > 425) ? PCHeaderPhoto : MobilePhoto}
        HeadOne={'Global Leaders In Energy Servicing and Procurement '}
        TextOne={'Learn More'}
        TextTwo={'Schedule a call'}
        BgColorTwo={'#FF7113'}
        BgColorOne={'rgba(255, 113, 19, 0)'}
        BorderTwo={'none'}
        BorderOne={'1px solid #FFFFFF'}
        Body={'We take pride in equipping ourselves with tools of the highest quality to execute our  projects.'}
        height={'42.25em'}
        Link1={'/services'}
        Link2={'#calendly'} />
      <section className='UpperBody'>
        <div className='HeroTabContainer'>
          <HeroTab img={HeroPhoto}
            description={'Hero Photo'}
            leadtext={'What we see'}
            body={"To be the go-to choice for oil and gas companies in Nigeria and across Africa. Dedicated to delivering top-quality services and building long lasting relationships, ensuring we're always at the forefront of the industry."}
            justifyContent={'space-between'} padding={window.screen.availWidth >= 1024 ? '3.65625em 0 0 0' : ''}/>
        </div>
        <Carousel
          carousel1={Carousel1}
          carousel2={Carousel2}
          carousel3={Carousel3}
          leadtext1={'Who we are'}
          leadtext2={'What we do'}
          leadtext3={'Our Team'}
          body1={"Leading providers of engineering and procurement services in the oil and gas industry, always striving to exceed our clients' expectations."}
          body2={'Providing Technical solutions for the oil and gas industry, offering a full range of solutions and prioritize safety through a strong corporate culture.'}
          body3={'A team of experienced professionals and state-of-the-art technology, we are able to efficiently and effectively extract, transport, and refine oil and gas to meet the diverse needs of our customers.'}
          Link1={'/about'}
          Link2={'/services'}
          Link3={'/about#Team'} />
      </section>
      <BookSession />
      <div className='LowerBody'>
        <Blog />
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default Home