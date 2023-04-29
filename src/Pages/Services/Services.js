import React from 'react';
import './Services.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import HeaderPhoto from './Assets/HeaderPhoto.svg';
import MobilePhoto from './Assets/MobileHeader.svg';
import BlogCard from '../../Components/Blog/BlogCard';
import MailBox from '../../Components/MailBox/MailBox';
import Procurement from './Assets/Procurement.svg';
import AssetManagaement from './Assets/AssetManagement.svg';
import FabricationAndConstruction from './Assets/FabricationAndConstruction.svg';
import ElectricalAndMechanical from './Assets/ElectricalAndMechanical.svg';
import ProcessAndInstrumentation from './Assets/ProcessAndInstrumentation.svg';
import EngineeringProcurementAndConstruction from './Assets/EngineeringProcurementAndConstruction.svg';
import DrillingSupport from './Assets/DrillingSupport.svg';
import Integrating from './Assets/Integrating.svg';
import PowerSolution from './Assets/PowerSolution.svg';
import ManPower from './Assets/Manpower.svg';
import SubscriptionBox from '../../Components/SubscriptionBox/SubscriptionBox';


const Services = () => {
  return (
    <div id='Services'>
      <Navbar />
      <Header background={(window.screen.availWidth > 425) ? HeaderPhoto : MobilePhoto}
        height={'39.9375em'}
        HeadOne={'Transforming ideas into solutions and plans into assets.'}
        Body={"We're shaping a sustainable future."}
        TextOne={'Learn More'}
        TextTwo={'Schedule a call'}
        BgColorTwo={'#FF7113'}
        BgColorOne={'rgba(255, 113, 19, 0)'}
        BorderTwo={'none'}
        BorderOne={'1px solid #FFFFFF'}
        Link1={'/services#servicescontainer'}
        Link2={'/#calendly'} />
      <div className='main' id='servicescontainer'>
        <div className='TextSection'>
          <h4>Our Service</h4>
          <p>With over 200 engineers and other professionals, we offer our clients a vast range of services covering engineering design, construction, operations and supply chain management, we safely and successfully deliver the best service solutions to our clients in the energy business.</p>
          <MailBox />
        </div>
        <div className='ServiceCardSection'>
          <div className='row1'>
            <BlogCard thumbnail={Procurement}
              header={'Procurement Service'}
              body={'We understand the importance of sourcing high-quality products and services to meet the needs of your business.'}
              background={'#F5F5F5'}
              borderRadius={'18px'}
              text={'Learn More '}
              border={'none'}
              bgColor={'#F5F5F5'}
              color={'#ADADAD'}
              margin={'1em 0 0 0'}
              link={'/services/procurement'}
              padding={'0 0 1.5em 0'} />

            <BlogCard thumbnail={AssetManagaement}
              header={'Asset Management'}
              body={'Our focus is on field development, brownfield revamp/modification of fixed platforms, associated pipelines and deep-water floating systems.'}
              background={'#F5F5F5'}
              borderRadius={'18px'}
              text={'Learn More '}
              border={'none'}
              bgColor={'#F5F5F5'}
              color={'#ADADAD'}
              margin={'1em 0 0 0'}
              link={'/services/assetmanagement'}
              padding={'0 0 1.5em 0'} />

            <BlogCard thumbnail={FabricationAndConstruction}
              header={'Fabrication, Civil, Work & Construction Service'}
              body={'We have the capabilities to deliver quality civil and construction services, as well as extensive fabrication services.'}
              background={'#F5F5F5'}
              borderRadius={'18px'}
              text={'Learn More '}
              border={'none'}
              bgColor={'#F5F5F5'}
              color={'#ADADAD'}
              margin={'1em 0 0 0'}
              link={'/services/fabricationandcivilworkandconstruction'}
              padding={'0 0 1.5em 0'} />
          </div>
          <div className='row2'>
            <BlogCard thumbnail={ElectricalAndMechanical}
              header={'Electrical & Mechanical Service'}
              body={'We are a leading provider of electrical and mechanical engineering solutions.'}
              background={'#F5F5F5'}
              borderRadius={'18px'}
              text={'Learn More '}
              border={'none'}
              bgColor={'#F5F5F5'}
              color={'#ADADAD'}
              margin={'1em 0 0 0'}
              link={'/services/electricalandmechanicalservice'}
              padding={'0 0 1.5em 0'} />

            <BlogCard thumbnail={ProcessAndInstrumentation}
              header={'Process & Instrumentation'}
              body={'We are dedicated to building close working relationships with our clients to ensure a complete understanding of their requirements.'}
              background={'#F5F5F5'}
              borderRadius={'18px'}
              text={'Learn More '}
              border={'none'}
              bgColor={'#F5F5F5'}
              color={'#ADADAD'}
              margin={'1em 0 0 0'}
              link={'/services/processandinstrumentation'}
              padding={'0 0 1.5em 0'} />

            <BlogCard thumbnail={EngineeringProcurementAndConstruction}
              header={'Engineering Procurment & Construction'}
              body={'We are leading independent contractor for engineering, procurement, and construction (EPC) and project management services.'}
              background={'#F5F5F5'}
              borderRadius={'18px'}
              text={'Learn More '}
              border={'none'}
              bgColor={'#F5F5F5'}
              color={'#ADADAD'}
              margin={'1em 0 0 0'}
              link={'/services/engineeringprocurementandconstruction'}
              padding={'0 0 1.5em 0'} />
          </div>
          <div className='row3'>
            <BlogCard thumbnail={DrillingSupport}
              header={'Drilling Support Service'}
              body={'Valley Ridge has developed robust solutions tailored to provide drilling, well control and completion services.'}
              background={'#F5F5F5'}
              borderRadius={'18px'}
              text={'Learn More '}
              border={'none'}
              bgColor={'#F5F5F5'}
              color={'#ADADAD'}
              margin={'1em 0 0 0'}
              link={'/services/drillingsupportandservice'}
              padding={'0 0 1.5em 0'} />

            <BlogCard thumbnail={Integrating}
              header={'Integrating '}
              body={'We are an integrated oil and gas company that operates throughout the entire oil value chain.'}
              background={'#F5F5F5'}
              borderRadius={'18px'}
              text={'Learn More '}
              border={'none'}
              bgColor={'#F5F5F5'}
              color={'#ADADAD'}
              margin={'1em 0 0 0'}
              link={'/services/integrating'}
              padding={'0 0 1.5em 0'} />

            <BlogCard thumbnail={PowerSolution}
              header={'Power Solution'}
              body={'We continue to make significant progress in improvements in the areas of engineering and executions of electrification projects across Nigeria.'}
              background={'#F5F5F5'}
              borderRadius={'18px'}
              text={'Learn More '}
              border={'none'}
              bgColor={'#F5F5F5'}
              color={'#ADADAD'}
              margin={'1em 0 0 0'}
              link={'/services/powersolution'}
              padding={'0 0 1.5em 0'} />
          </div>
          <div className='row4'>
            <BlogCard thumbnail={ManPower}
              header={'Man Power Supply'}
              body={'We are equipped to provide both technical and non-technical experts for projects, offering a range of personnel categories to our clients.'}
              background={'#F5F5F5'}
              borderRadius={'18px'}
              text={'Learn More '}
              border={'none'}
              bgColor={'#F5F5F5'}
              color={'#ADADAD'}
              margin={'1em 0 0 0'}
              link={'/services/manpowerservice'}
              padding={'0 0 1.5em 0'} />

            <BlogCard displayThumbnail={'none'}
              displayButton={'none'} />

            <BlogCard displayThumbnail={'none'}
              displayButton={'none'} />
          </div>
        </div>
        <SubscriptionBox />
      </div>
      <Footer />
    </div>
  )
}

export default Services