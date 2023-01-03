import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import ServiceBox from '../../Components/ServiceBox/ServiceBox';
import HeaderPhoto from './Assets/PowerSolutionHeader.svg';
import './Services.css';

const PowerSolution = () => {
  return (
    <div id='PowerSolution'>
      <Navbar />
      <Header background={HeaderPhoto}
        height={'27.25em'}
        display={'none'}
        HeadOne={'Power Solution'}
        Body={'We continue to make significant progress in improvements in the areas of engineering and executions of electrification projects across Nigeria. '} />
      <ServiceBox Header={'Solution that support African Economy'}
        Body={'At Valley Ridge Energy, we continue to make significant progress in improvements in the areas of engineering and executions of electrification projects across Nigeria. Our aim is to develop solutions that support African economies, provide expert management skills, electrical engineering services, mechanical engineering services, procurements and installations.'}
        background={'#FF7113'}
        border={'#FF7113'}
        text={'Back to Services'}
        ListBoardDisp={'none'} />
      <Footer />
    </div>
  )
}

export default PowerSolution