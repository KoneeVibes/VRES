import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import ServiceBox from '../../Components/ServiceBox/ServiceBox';
import HeaderPhoto from './Assets/DrillingSupportHeader.svg';

const DrillingSupportAndService = () => {
  return (
    <div id='DrillingSupportAndService'>
      <Navbar />
      <Header background={HeaderPhoto}
        height={'27.25em'}
        display={'none'}
        HeadOne={'Drilling Support Service'}
        Body={'Valley Ridge offers a wide range of asset management'} />
      <div className='DrillingSupportAndServiceServiceBox'>
        <ServiceBox Header={'Optimize your drilling expenditure'}
          Body={'Valley Ridge has developed robust solutions tailored to provide drilling, well control and completion services. Our teams have a broad range of experience to guarantee the best solution to optimize your drilling capital expenditure.'}
          background={'#FF7113'}
          border={'#FF7113'}
          text={'Back to Services'}
          displayBoardTwo={'none'}
          displayBoardThree={'none'}
          one={'Our Senior Completion Specialists, Wireline Supervisors and Field Supervisors are well- trained and vast in the installation of completion equipment at well sites located at different geographical locations on call out basis. Our key service provisions include:'}
          two={'Supply, Hoisting and Operation of Drilling rigs  Supply of tubing and casings (OCTGs)'}
          three={'Repair and Modification of Xmas Trees'}
          four={'Waste Management'}
          five={'Foreign procurement of drilling and Well completion equipment  Supply of drilling and completion fluids and chemicals.'}
          six={'Well completion services'}
          seven={'Well control monitoring and management services'} />
      </div>
      <Footer />
    </div>
  )
}

export default DrillingSupportAndService