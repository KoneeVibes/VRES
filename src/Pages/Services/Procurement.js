import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import './Services.css';
import HeaderPhoto from './Assets/ProcurementHeader.svg';
import MobilePhoto from './Assets/MobileProcurement.svg';
import ServiceBox from '../../Components/ServiceBox/ServiceBox';


const Procurement = () => {
  return (
    <div id='Procurement'>
      <Navbar />
      <Header background={(window.screen.availWidth > 425) ? HeaderPhoto : MobilePhoto}
        height={'27.25em'}
        HeadOne={'Procurement Service'}
        display={'none'}
        Body={'We understand the importance of sourcing high-quality products and services to meet the needs of your business.'} />
      <div className='ProcurementServiceBox'>
        <ServiceBox Header={'Procurement Service'}
          Note={'Valley Ridge offers a wide range of procurement solutions in different catergories, What do we source?'}
          one={'Construction material'}
          two={'Power systems'}
          three={'Industrial tools'}
          four={'MRO'}
          five={'Pumps & Filters'}
          six={'Casing &Tubing'}
          seven={'Steel (Structural & Wire)'}
          eight={'Cleaning equipment'}
          nine={'Tubing & Hosing'}
          ten={'Drilling equipment'}
          eleven={'Industrial equipment'}
          twelve={'Rehabilitation'}
          thirteen={'Refrigeration'}
          fourteen={'Plumbing'}
          fifteen={'Electrical'}
          sixteen={'Ball/Roller bearings'}
          seventeen={'Automotive parts / Tyres'}
          eighteen={'Chemicals, Paint and Liquids'}
          nineteen={'Power tools'}
          twenty={'Pipe & Workwear'}
          twentyone={'Capital plant'}
          twentytwo={'Site support equipment'}
          twentythree={'Power tools'}
          twentyfour={'Pipe & Workwear'}
          twentyfive={'Capital plant'}
          twentysix={'Site support equipment'}
          twentyseven={'Rehabilitation'}
          twentyeight={'Refrigeration'}
          twentynine={'Pipes'}
          thirty={'Safety equipments'}
          thirtyone={'Fittings & Flanges'}
          thirtytwo={'Ironmongery'}
          thirtythree={'Laboratory'}
          ListBoardBg={'#FFFFFF'}
          boxShadow={'2px 6px 35px -6px rgba(0, 0, 0, 0.08)'}
          borderRadius={'20px'}
          padding={'1em 2em 1em 0'}
          width={'fit-content'}
          background={'#FF7113'}
          border={'#FF7113'}
          text={'Back to Services'}
          margin={'2em 0 0 0'} />
      </div>
      <Footer />
    </div>
  )
}

export default Procurement