import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import ServiceBox from '../../Components/ServiceBox/ServiceBox';
import HeaderPhoto from './Assets/EngineeringProcurementAndConstructionHeader.svg';
import './Services.css';


const EngineeringProcurementAndConstruction = () => {
  return (
    <div id='EngineeringProcurementAndConstruction'>
      <Navbar />
      <Header background={HeaderPhoto}
        height={'27.25em'}
        display={'none'}
        HeadOne={'Engineering Procurment & Construction'}
        Body={'Valley Ridge offers a wide range of asset management'} />
      <div className='EngineeringPCServiceBox'>
        <ServiceBox Header={'We are formost independent Contactors'}
          Body={'Valley Ridge is one of the foremost independent contractors for Engineering, Procurement & Construction (EPC) and Project Management; as well as Construction liaison representatives for clients committed or inclined towards to construct projects of significant worth in various industries such as Power sector, Oil and Gas Industries, Aviation etc.'}
          background={'#FF7113'}
          border={'#FF7113'}
          text={'Back to Services'}
          displayBoardTwo={'none'}
          displayBoardThree={'none'}
          one={'Our multi-gifted EPC workforce makes it a point of duty to build a concerted working affiliation'}
          two={'Through all disciplines to realize a shared commitment to project goals – such as minimizing the EPC project realization lead time (that is, time between the project initiation and the completions),'}
          three={'Improving Service Quality Level. This explains why Valley Ridge has been able to successfully execute a sizeable number of EPC projects.'}
          four={'Valley Ridge also offers a single point solution to the execution of project engineering, procurement and construction, commissioning of large contract projects . Our workforce is also focused on delivering the best engineering practices with high quality standards and successfully meeting all completion targets.'}
          five={'Equally as important as Project Engineering and Construction is the procurement aspect.'}
          six={'With international and inland value chains of industrial supply markets developing at an unprecedented pace, Projects are completed safely, on time, and within budget. Tighter project integration reduces both project costs and timeline.'}
          seven={'It is increasing becoming crucial for organizations to seek to partner sourcing consulting agencies that truly understand the market, equipped to provide clients the most viable, economical and inexpensive sources for their construction projects and in general fully grasps the true cost of doing business'} />
      </div>
      <Footer />
    </div>
  )
}

export default EngineeringProcurementAndConstruction