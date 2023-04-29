import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import ServiceBox from '../../Components/ServiceBox/ServiceBox';
import HeaderPhoto from './Assets/FabricationAndConstructionHeader.svg';
import ServiceBoxPhoto from './Assets/FabricationServiceBoxPhoto.svg';
import './Services.css';

const Fabrication = () => {
  return (
    <div id='Fabrication'>
      <Navbar />
      <Header background={HeaderPhoto}
        height={'27.25em'}
        display={'none'}
        HeadOne={'Fabrication, Civil, Work & Construction Service'}
        Body={'We possess the expertise and resources to deliver exceptional civil and construction services, as well as extensive fabrication services.'} />
      <div className='FabricationServiceBox'>
        <ServiceBox src={ServiceBoxPhoto}
          ImageDescription={'Fabrication Service'}
          ListBoardDisp={'none'}
          Body={'We possess the expertise and resources to deliver exceptional civil and construction services, as well as extensive fabrication services. Our capabilities cover all aspects of construction and installation works, including on-shore and off-shore projects, turnkey installations for design and production units, subsea constructions, and more. We understand that the quality of our construction services and installations depends on several factors, such as good civil works, the use of high-quality construction materials, safety measures, and adherence to quality control processes. At our company, we prioritize these elements to ensure that our clients receive only the best construction services and installations.'}
          background={'#FF7113'}
          border={'#FF7113'}
          text={'Back to Services'}/>
      </div>
      <Footer />
    </div>
  )
}

export default Fabrication