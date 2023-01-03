import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import ServiceBox from '../../Components/ServiceBox/ServiceBox';
import HeaderPhoto from './Assets/AssetManagementHeader.svg';
import MobilePhoto from './Assets/MobileAssetManagement.svg';

const AssetManagement = () => {
  return (
    <div id='AssetManagement'>
      <Navbar />
      <Header background={(window.screen.availWidth > 425) ? HeaderPhoto : MobilePhoto}
        height={'27.25em'}
        HeadOne={'Asset Management'}
        Body={'Our focus is on field development, brownfield revamp/modification of fixed platforms, associated pipelines and deep-water floating systems. '}
        display={'none'} />
      <ServiceBox ListBoardDisp={'none'}
        Header={'Collaborating with global leaders'}
        Body={"Our focus is on field development, brownfield revamp/modification of fixed platforms, associated pipelines and deep-water floating systems. Our installation activities bring together a range of fields of expertise including collaboration with partners who are global leaders in offshore installation to create comprehensive, cost-effective solutions that are specifically tailored to meet your needs. Our teams are equipped with the necessary tools and equipment that will help predict why equipment fails and when it is likely to fail to allow technicians to resolve problems faster and support more efficient preventative maintenance progams. We put in place processes to support everyay operations that will support proper Asset Management to streamline operations and support safety"}
        background={'#FF7113'}
        border={'#FF7113'}
        text={'Back to Services'} />
      <Footer />
    </div>
  )
}

export default AssetManagement