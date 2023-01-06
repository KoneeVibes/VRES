import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import SubscriptionBox from '../../Components/SubscriptionBox/SubscriptionBox';
import './Newsroom.css';
import HeaderPhoto from './Assets/HeaderPhoto.svg';
import MobileHeader from './Assets/MobileHeader.svg';
import BlogCard from '../../Components/Blog/BlogCard';
import ThumbnailOne from './Assets/ThumbnailOne.svg';
import ThumbnailTwo from './Assets/ThumbnailTwo.svg';
import ThumbnailThree from './Assets/ThumbnailThree.svg';

const Newsroom = () => {
  return (
    <div id='Newsroom'>
      <Navbar />
      <Header background={(window.screen.availWidth > 425) ? HeaderPhoto : MobileHeader}
        height={'31.0625em'}
        display={'none'}
        HeadOne={'Stay informed about Us'} />
      <div className='main'>
        <div className='ArticlesSection'>
          <h2>All articles</h2>
          <BlogCard thumbnail={ThumbnailOne}
            header={'Investing In Africa Oil & Gas? Top 5 Forums You Should Attend'}
            body={'Oil and Gas (petroleum) is almost as vital to human existence as water, because petroleum is used in every day-to-day activity, Petroleum remains in high demand.'}
            text={'Learn More '}
            border={'none'}
            bgColor={'#FFFFFF'}
            display={'flex'}
            gap={(window.screen.availWidth > 768) ? '5em' : '1em'}
            padding={`var(--sectioning-gap)`}
            align={(window.screen.availWidth > 769) ? 'center' : 'stretch'}
            flexDirection={(window.screen.availWidth < 769) ? 'column' : ''}
            link={'/newsroom/articleone'} />

          <BlogCard thumbnail={ThumbnailTwo}
            header={'Tullow Oil and Capricorn Energy to give birth to a Tullicorn, a Caprillow… or maybe a Unicorn?'}
            body={'As of mid-year 2022, Tullow Oil and Capricorn Energy were about forming a new Africa-focused energy company.'}
            text={'Learn More '}
            border={'none'}
            bgColor={'#FFFFFF'}
            display={'flex'}
            gap={(window.screen.availWidth > 768) ? '5em' : '1em'}
            padding={`var(--sectioning-gap)`}
            align={(window.screen.availWidth > 769) ? 'center' : 'stretch'}
            flexDirection={(window.screen.availWidth < 769) ? 'column' : ''}
            link={'/newsroom/articletwo'} />

          <BlogCard thumbnail={ThumbnailThree}
            header={'Will Africa become the new green hydrogen “El Dorado”?'}
            body={'Can Africa become a place where advanced science can be applied and contribute to improving the environment, i.e., an "El Dorado" in the new green economy?'}
            text={'Learn More '}
            border={'none'}
            bgColor={'#FFFFFF'}
            display={'flex'}
            gap={(window.screen.availWidth > 768) ? '5em' : '1em'}
            padding={`var(--sectioning-gap)`}
            align={(window.screen.availWidth > 769) ? 'center' : 'stretch'}
            flexDirection={(window.screen.availWidth < 769) ? 'column' : ''}
            link={'/newsroom/articlethree'} />
        </div>
        <SubscriptionBox />
      </div>
      <Footer />
    </div>
  )
}

export default Newsroom