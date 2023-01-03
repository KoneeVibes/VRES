import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import './Contact.css';
import HeaderPhoto from './Assets/HeaderPhoto.svg';
import MobileHeader from './Assets/MobileHeader.svg';
import ContactsTab from '../../Components/ContactsTab/ContactsTab';
import CommentBox from '../../Components/CommentBox/CommentBox';
import MapBox from '../../Components/MapBox/MapBox';
import { useEffect } from 'react';

const Contact = () => {

  useEffect(() => {

    let val = document.querySelector('.CommentBox').offsetHeight + 'px';
    document.querySelector('.MapBox1').style.height = val;

  }, [])

  return (
    <div id='Contact'>
      <Navbar />
      <Header background={(window.screen.availWidth > 425) ? HeaderPhoto : MobileHeader}
        HeadOne={'Contact Us'}
        Body={'Want to talk to us about your on starting an new project? or want to to pay us a visit at the office?'}
        height={'27.25em'}
        display={'none'} />
      <div className='Main'>
        <div className='UpperSection'>
          <ContactsTab />
        </div>
        <div className='BottomSection'>
          <MapBox />
          <CommentBox />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact