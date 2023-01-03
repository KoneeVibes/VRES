import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import ServiceBox from '../../Components/ServiceBox/ServiceBox';
import HeaderPhoto from './Assets/ElectricalAndMechanicalHeader.svg';

const ElectricalAndMechanical = () => {
  return (
    <div id='ElectricalAndMechanical'>
      <Navbar />
      <Header background={HeaderPhoto}
        height={'27.25em'}
        display={'none'}
        HeadOne={'Electrical & Mechanical Service'}
        Body={'We are a leading provider of electrical and mechanical engineering solutions.'} />
      <div className='EM-ServiceBox'>
        <ServiceBox Header={'Collaborating with global leaders'}
          Body={'Valley Ridge offers a wide range of Electrical & Mechanical Engineering solutions in different catergories, Valley Ridge provides premier electrical & mechanical contracting and maintenance for private and public sector in commercial industrial markets throughout the continent. Our electrical services include project management, design, supply, installation, testing plus commissioning and maintenance of electrical systems. Our Electrical Division places a great emphasis on its relationship with clients, private or commercial, and pride ourselves on the ability to respond to your contracting requirements in an efficient and cost effective way.'}
          one={'Electrical Installation'}
          two={'Supply & Installation of Control Panels, Switchgear and Motor Control Centers'}
          three={'Installation of H2 Generators'}
          four={'Supply & Installation of Cable Management System (Ladder, Trays, Trunking, Conduits, Covers and Accessories.)'}
          five={'Supply & Installation of Lighting, Emergency Lighting and External Lighting'}
          displayBoardTwo={'none'}
          displayBoardThree={'none'}
          background={'#FF7113'}
          border={'#FF7113'}
          text={'Back to Services'} />
      </div>
      <Footer />
    </div>
  )
}

export default ElectricalAndMechanical