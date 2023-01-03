import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import ServiceBox from '../../Components/ServiceBox/ServiceBox';
import HeaderPhoto from './Assets/IntegratingHeader.svg';

const Integrating = () => {
  return (
    <div id='Integrating'>
      <Navbar />
      <Header background={HeaderPhoto}
        height={'27.25em'}
        display={'none'}
        HeadOne={'Integrating '}
        Body={'We are an integrated oil and gas company that operates throughout the entire oil value chain. '} />
      <div className='IntegratingServiceBox'>
        <ServiceBox Header={'We operate over the whole oil value chain'}
          Body={'Valley Ridge is an integrated oil & gas company this means that they operate over the whole oil value chain system from oil exploration and production to shipment via tankers or pipelines and finally refining, and marketing of petroleum products. Overall operations of integrated companies are categorized into three main classes that are:'}
          background={'#FF7113'}
          border={'#FF7113'}
          text={'Back to Services'}
          displayBoardTwo={'none'}
          displayBoardThree={'none'}
          one={'Upstream Operations: This operation involves all the activities which are related to search, explore and produce the subsurface deposits of hydrocarbons;'}
          two={'Midstream Operations: This operation involves all the activities which are involved in the primary processing and transportation of produced hydrocarbon via tankers and pipelines to the refineries for further processing.'}
          three={'Downstream Operations: This operation deals with all the activities involved in the refining, fractionation and marketing of petrochemical products.'} />
      </div>
      <Footer />
    </div>
  )
}

export default Integrating