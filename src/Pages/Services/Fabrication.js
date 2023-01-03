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
        Body={'We have the capabilities to deliver quality civil and construction services, as well as extensive fabrication services.'} />
      <div className='FabricationServiceBox'>
        <ServiceBox src={ServiceBoxPhoto}
          ImageDescription={'Fabrication Service'}
          ListBoardDisp={'none'}
          Body={'We have the capabilities to deliver quality civil and constuction services and extensive Fabrication services. We cover complete construction and installation works for On-shore and Off shore projects, tum-keyinstallationsfordesign, productionunits, Subsea constructions etc. We have the understanding that quality of construction service and installation can be attributed to good civil works, quality of construction materials, safety and adherance to quality control processes.'}
          background={'#FF7113'}
          border={'#FF7113'}
          text={'Back to Services'}/>
      </div>
      <Footer />
    </div>
  )
}

export default Fabrication