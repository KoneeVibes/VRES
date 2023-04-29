import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import HeaderPhoto from './Assets/ManpowerHeader.svg';
import MobilePhoto from './Assets/ManpowerMobileHeader.svg';
import ServiceBox from '../../Components/ServiceBox/ServiceBox';
import Footer from '../../Components/Footer/Footer';

const ManPower = () => {
    return (
        <div id='ManPower' >
            <Navbar />
            <Header background={(window.screen.availWidth > 425) ? HeaderPhoto : MobilePhoto}
                height={'27.25em'}
                HeadOne={'Man Power Service'}
                display={'none'}
                Body={'We are equipped to provide both technical and non-technical experts for projects, offering a range of personnel categories to our clients.'} />
            <div className='ManPowerServiceBox'>
                <ServiceBox Header={'Efficient Manpower Solutions'}
                    Body={'At Valley Ridge, we pride ourselves in our ability to supply knowledgeable and experienced personnel across multiple industries, enabling our clients to execute their projects with ease and efficiency. Our current offerings include the following:'}
                    one={'Structural experts'}
                    two={'Inspectors (including NDT, QAQC, Coating, Painting, etc.)'}
                    three={' Drilling personnel (Engineers & Supervisors)'}
                    four={'HSE Specialists'}
                    five={'Controls & Hardware Technicians/Engineers'}
                    six={'Design Engineers (including Mechanical, Electrical, Instrumentation, Process, and Structural)'}
                    BodyII={''}
                    displayBoardTwo={'none'}
                    displayBoardThree={'none'}
                    background={'#FF7113'}
                    border={'#FF7113'}
                    text={'Back to Services'} />
            </div>
            <Footer/>
        </div>
    )
}

export default ManPower