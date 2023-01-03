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
            header={'The power of business strategic partnership'}
            body={'Valley Ridge offers a wide range of procurement solutions in different catergories, What do we source?'}
            text={'Learn More '}
            border={'none'}
            bgColor={'#FFFFFF'}
            display={'flex'}
            gap={(window.screen.availWidth > 768) ? '5em' : '1em'}
            padding={`var(--sectioning-gap)`}
            align={(window.screen.availWidth > 769) ? 'center' : 'stretch'}
            flexDirection={(window.screen.availWidth < 769) ? 'column' : ''}
            link={'/newsroom/thepowerofbusinessstrategicpartnership'} />

          <BlogCard thumbnail={ThumbnailTwo}
            header={'The power of business strategic partnership'}
            body={'Valley Ridge offers a wide range of procurement solutions in different catergories, What do we source?'}
            text={'Learn More '}
            border={'none'}
            bgColor={'#FFFFFF'}
            display={'flex'}
            gap={(window.screen.availWidth > 768) ? '5em' : '1em'}
            padding={`var(--sectioning-gap)`}
            align={(window.screen.availWidth > 769) ? 'center' : 'stretch'}
            flexDirection={(window.screen.availWidth < 769) ? 'column' : ''}
            link={'/newsroom/thepowerofbusinessstrategicpartnership'} />

          <BlogCard thumbnail={ThumbnailThree}
            header={'The power of business strategic partnership'}
            body={'Valley Ridge offers a wide range of procurement solutions in different catergories, What do we source?'}
            text={'Learn More '}
            border={'none'}
            bgColor={'#FFFFFF'}
            display={'flex'}
            gap={(window.screen.availWidth > 768) ? '5em' : '1em'}
            padding={`var(--sectioning-gap)`}
            align={(window.screen.availWidth > 769) ? 'center' : 'stretch'}
            flexDirection={(window.screen.availWidth < 769) ? 'column' : ''}
            link={'/newsroom/thepowerofbusinessstrategicpartnership'} />
        </div>
        <SubscriptionBox />
      </div>
      <Footer />
    </div>
  )
}

export default Newsroom