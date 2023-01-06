import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import NewsBox from '../../Components/NewsBox/NewsBox';
import SubscriptionBox from '../../Components/SubscriptionBox/SubscriptionBox';
import HeaderPhoto from './Assets/ArticleThreeHeaderPhoto.svg';

const ArticleThree = () => {
  return (
    <div id='ArticleThree'>
      <Navbar />
      <Header background={HeaderPhoto}
        height={'30.625em'}
        display={'none'} />
      <NewsBox Header={'Will Africa become the new green hydrogen “El Dorado”?'}
        DateTag={'Jan 6, 2023'}
        TopicI={'Key implications'}
        Point1I={'Ten green hydrogen projects are at various stages of development in Africa.'}
        Point1II={'Africa has land mass and sunlight, two key characteristics and project requirements supportive of green hydrogen production.'}
        Point1III={'In Africa, 593 renewable power plants are operating with a total capacity of 64,000 MW and 580 projects are planned with a capacity of 152,000 MW.'}
        BodyI={'Can Africa become a place where advanced science can be applied and contribute to improving the environment, i.e., an "El Dorado" in the new green economy? The global transition to lower carbon energy sources draws attention to renewables and green hydrogen as alternatives to fossil fuels. Some of the largest markets in Africa have taken important steps to evolve their economies away from highly polluting sources of energy (e.g., woodfire) by implementing strategies that combine "bridge" or "transition" fuels such as LPG and longer-term low-carbon solutions such as renewables. Green hydrogen consumption is expected to grow significantly over the next decades as transport (e.g., aviation, shipping) and heavy industry (e.g., steel, aluminum, cement, chemicals) sectors decarbonize their operations.'}
        BodyII={'Considering the renewable energy potential of many African countries, green hydrogen represents a great opportunity for the continent to transform its energy and economy sectors. Furthermore, Africa, as a source location of green hydrogen has the potential to emerge as cost-effective worldwide supplier of green hydrogen. Egypt, Mauritania, Morocco, Namibia, Niger, and South Africa are planning large-scale hydrogen projects ( Table 1) and the momentum is building. African hydrogen production has the potential to play a major role in the lower carbon energy supply diversification strategy of European Union countries. Africa has a few characteristics supportive of green hydrogen projects, namely a large land mass sunlight for green power production. Collaboration between the European Union and interested African parties on both continents would facilitate progress toward country and company-specific plans aligned with 2050 net-zero emissions targets.'}
        TopicIII={'Egypt—Ain Sokhna (Scatec-TSFE-EBIC)'}
        BodyIII={"Scatec, The Sovereign Fund of Egypt (TSFE), and Egypt Basic Industries Corp (EBIC) Fertiglobe's subsidiary entered into agreement in October 2021 to develop a 50-100 MW green hydrogen facility through electrolysis. A 100 MW capacity was fixed a month later. Plus Power Inc will be providing the electrolyzer. Orascom Construction was appointed as the builder in late November 2021, with works being scheduled to start in November 2022 at the earliest. The production could be starting from 2024. The hydrogen will be sold to the ammonia plant nearby Egypt Basic Industries Corp (EBIC) under a long-term purchase contract."}
        TopicIV={'Egypt—Ain Sokhna (Scatec)'}
        BodyIV={'Another green hydrogen project—to be developed by Scatec only—was announced in December 2021. A memorandum of understanding (MOU) was signed on 10 March between Scatec, TSFE, Suez Canal Economic Zone general authority (SCZONE), and New and Renewable Energy Authority (NREA) to develop a 1 MMt/y green ammonia plant in Ain Sokhna industrial zone.'}
        TopicV={'Egypt—Port Said (H2-Industries)'}
        BodyV={'In mid-February, H2-Industries received a preliminary approval to develop a waste-to-hydrogen plant in East Port Said. The project is named "1 GW LOHC hydrogen hub at East Port Said." This type of hydrogen plant would be the first to be deployed in the world. The study is expected to be completed soon and will be sent to the government for approval. The plant will be able to process 4 MMt/y of organic waste and non-recyclable plastic, with which it will be able to produce 300,000 metric tons per year of hydrogen.'}
        TopicVI={'Egypt—Port Said (Siemens)'}
        BodyVI={'In August 2021, Siemens Energy and Egyptian Electricity Holding Company (EEHC) signed an MOU for developing a 100-200 MW electrolyzer in the Industrial Zone of East Port Said (EPSIZ). That hydrogen would be sent to a green ammonia plant for bunker fuel replacement for shipping.'}
        TopicVII={'Egypt—Port Said (ThyssenKrupp)'}
        BodyVII={'In November 2021, Eni, General Electric, and Thyssenkrup have submitted a $2 billion bid for the development of a green hydrogen production plant. ThyssenKrupp was selected in late 2021 to build the plant, along with a green ammonia plant. Its production would be used for export to Germany. In late January, an MOU was stated to be in preparation.'}
        TopicVIII={'Mauritania—Project Nour'}
        BodyVIII={'Chariot has signed in September 2021 an MOU with the Ministry of Petroleum, Mines, and Energy of Mauritania to develop a large-scale green hydrogen project. The partnership will develop a potential 10 GW green hydrogen facility named "Project Nour." The project would cover an area of 14,400 sq km onshore and offshore, producing power from solar and wind resources for electrolysis to produce green hydrogen. The green hydrogen would then be exported to the international market, particularly Europe. The feasibility work to assess the wind and solar resources, and environmental impact and social impact studies should start soon.'}
        TopicIX={'Morocco—Guelmim-Oued Noun'}
        BodyIX={'Morocco has adopted a national policy for the development of green hydrogen projects in 2021. Morocco wants to impose itself worldwide as a leader in this sector. Total Eren announced in January that it will invest $10.69 billion for the realization of a project for production of green hydrogen and green ammonia in the region of Guelmim-Oued Noun. The hybrid project will generate more than 10 GW by combining solar and wind energy. Topographic studies of the site covering an area of more than 170 sq km, analysis of the renewable resource, and preliminary design have already been carried out. The Guelmin-Oued Noun project should enter its active phase by 2025 and first production is expected by 2027.'}
        TopicX={'Namibia—Tsau Khaeb'}
        BodyX={"In early November 2021, Namibia selected Hyphen Energy as preferred bidder to develop the country's first large-scale green hydrogen project in the vicinity of the Tsau Khaeb National Park. This site is considered as an ideal location thanks to its extensive combination of solar and wind resources and proximity to the ocean (i.e., a water source) and the port of Lüderitz for export options. Developed in phases, the project is set to ultimately produce 300,000 metric tons per year of green hydrogen, for the domestic and international markets, along with 2 gigawatts (GW) of renewable electricity by 2026 at an estimated cost of $4.4 billion. Further phases of development in the late 2020s will scale up to 3 GW of electrolyzer capacity and 5 GW of combined renewable power generation for a total estimated cost of $9.4 billion. The production will serve either as pure green hydrogen or will be converted into green ammonia."}
        TopicXI={'Niger—Ganaram'}
        BodyXI={'In February, the government of Niger has signed an agreement with German company Emerging Energy Corporation (EEC) to develop the hydrogen market. The government has given the green light for the exploration and development of green hydrogen projects. EEC plans to implement an electrolysis technique based on clean energy. This project should help decarbonize oil field operations and refineries. The green hydrogen produced in Niger will also be exported to the international market, particularly to Europe and America. This project is still at an early stage in comparison with most advanced projects in other African countries.'}
        TopicXII={'South Africa—Boegoebaai'}
        BodyXII={"In October 2021, the Northern Cape Development Agency inked an MOU with Sasol to conduct a 24-month feasibility study to assess the potential of the Boegoebaai location to act as an export hub for green hydrogen and green ammonia and the phases of development. Boegoebaai is a port in the Namakwa Special Economic Zone, 60 km north of Port Nolloth. Classified as a Strategic Integrated Project in South Africa's National Development Plan, the project has the potential to produce up 400,000 metric tons per year of green hydrogen requiring an estimated 9 GW of renewable electricity generation."}
        Link={'https://www.spglobal.com/commodityinsights/en/ci/research-analysis/africa-green-hydrogen.html'}
        LinkText={'S&P Global Commodity Insights'}
      />
      <SubscriptionBox />
      <Footer />
    </div>
  )
}

export default ArticleThree