import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import ServiceBox from '../../Components/ServiceBox/ServiceBox';
import HeaderPhoto from './Assets/ProcessAndInstrumentationHeader.svg';
import './Services.css';

const ProcessAndInstrumentation = () => {
  return (
    <div id='ProcessAndInstrumentation'>
      <Navbar />
      <Header background={HeaderPhoto}
        height={'27.25em'}
        display={'none'}
        HeadOne={'Process & Instrumentation'}
        Body={'Valley Ridge offers a wide range of asset management '} />
      <div className='ProcessAndInstrumentationServiceBox'>
        <ServiceBox Header={'Use of latest Technology'}
          Body={'Valley Ridge is deeply committed in close working relationship, to ensure a complete understanding of client’s requirements, ensuring that the engineered solution uses the latest technology available. The scope of work covers all the activities starting from the feasibility, study, engineering, supply of automation equipment, installation, testing & commissioning up to system hand over.'}
          displayBoardTwo={'none'}
          displayBoardThree={'none'}
          one={'Procurement and Commissioning of Electronic and Electro-mechanical Equipment.'}
          two={'Procurement, Installation, Preventive Maintenance and Repairs of Radio Communication and Navigational Equipment.'}
          three={'Procurement, Installation, Preventive Maintenance and Repairs of Global Maritime Distress and Safety System (GMDSS)'}
          four={'Procurement, Installation, Preventive Maintenance and Repairs of Radio Communication and Navigational Equipment.'}
          five={'Installation, maintenance and repairs of fire and smoke detection system and safety equipment. '}
          six={'Installation, maintenance and repairs of CCTV, Surveillance and Anti-Burglary equipment'}
          background={'#FF7113'}
          border={'#FF7113'}
          text={'Back to Services'} />
      </div>
      <Footer />
    </div>
  )
}

export default ProcessAndInstrumentation