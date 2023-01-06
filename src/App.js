import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.js';
import About from './Pages/About/About.js';
import Services from './Pages/Services/Services.js';
import Newsroom from './Pages/Newsroom/Newsroom.js';
import Procurement from './Pages/Services/Procurement';
import Fabrication from './Pages/Services/Fabrication';
import AssetManagement from './Pages/Services/AssetManagement';
import ElectricalAndMechanical from './Pages/Services/ElectricalAndMechanical';
import ProcessAndInstrumentation from './Pages/Services/ProcessAndInstrumentation';
import EngineeringProcurementAndConstruction from './Pages/Services/EngineeringProcurementAndConstruction';
import DrillingSupportAndService from './Pages/Services/DrillingSupportAndService';
import Integrating from './Pages/Services/Integrating';
import PowerSolution from './Pages/Services/PowerSolution';
import ArticleOne from './Pages/Newsroom/ArticleOne';
import ArticleTwo from './Pages/Newsroom/ArticleTwo';
import ArticleThree from './Pages/Newsroom/ArticleThree';
import ScrollToTop from './ScrollToTop';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/newsroom' element={<Newsroom />}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/services/procurement' element={<Procurement />}></Route>
            <Route path='/services/assetmanagement' element={<AssetManagement />}></Route>
            <Route path='/services/fabricationandcivilworkandconstruction' element={<Fabrication />}></Route>
            <Route path='/services/electricalandmechanicalservice' element={<ElectricalAndMechanical />}></Route>
            <Route path='/services/processandinstrumentation' element={<ProcessAndInstrumentation />}></Route>
            <Route path='/services/engineeringprocurementandconstruction' element={<EngineeringProcurementAndConstruction />}></Route>
            <Route path='/services/drillingsupportandservice' element={<DrillingSupportAndService />}></Route>
            <Route path='/services/integrating' element={<Integrating />}></Route>
            <Route path='/services/powersolution' element={<PowerSolution />}></Route>
            <Route path='/newsroom/articleone' element={<ArticleOne />}></Route>
            <Route path='/newsroom/articletwo' element={<ArticleTwo />}></Route>
            <Route path='/newsroom/articlethree' element={<ArticleThree />}></Route>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;