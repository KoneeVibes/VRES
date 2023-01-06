import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import NewsBox from '../../Components/NewsBox/NewsBox'
import SubscriptionBox from '../../Components/SubscriptionBox/SubscriptionBox';
import HeaderPhoto from './Assets/ArticleTwoHeaderPhoto.svg';

const ArticleTwo = () => {
  return (
    <div id='ArticleTwo'>
      <Navbar />
      <Header background={HeaderPhoto}
        height={'30.625em'}
        display={'none'} />
      <NewsBox Header={'Tullow Oil and Capricorn Energy to give birth to a Tullicorn, a Caprillow… or maybe a Unicorn?'}
        DateTag={'Jan 6, 2023'}
        Display={'none'}
        BodyI={'As of mid-year 2022, Tullow Oil and Capricorn Energy were about forming a new Africa-focused energy company. They reached agreement to create a combined group on the terms of a recommended all-share combination of the two companies. The name of the new group is yet to be determined.'}
        TopicII={'Contract Details'}
        BodyII={"According to the management of the two companies, this combination has the potential to create a new energy company with a material and diversified asset base and a portfolio of investment opportunities. The aggregated pan-African upstream portfolio will be underpinned by low-cost producing assets having a high potential return on investment in Ghana, Egypt, Gabon and Côte d'Ivoire. On top that, and as shown in the charts below, Tullow also operates several onshore assets in Kenya and both companies are present offshore Mauritania. On completion of the combination, Capricorn shareholders will hold approximately 47 % of the combined group and Tullow shareholders will hold approximately 53 % of the combined group. It is intended that the combination will be implemented by means of a court sanctioned scheme of arrangement under Part 26 of the Companies Act, where Tullow will acquire all of the issued and to be issued Capricorn shares under the terms of the combination, each Capricorn shareholder will be entitled to receive: for each Capricorn share: 3.8068 new Tullow shares. Alongside of their announcements Tullow and Capricorn stated that the combination of the two companies will create robust cash generation, a resilient balance sheet of USD 1.8 billion of liquidity and cost synergies."} 
        TopicIII={'Deal History'}
        BodyIII={"Interestingly, Tullow and Capricorn (formerly named Cairn Energy until December 2021) yet partnered in Cote d'Ivoire, where together they controlled the entire onshore fringe of Cote d'Ivoire Basin between 2017 and 2021. However, after a Full Tensor Gradiometry (FTG) survey in 2019 and an aborted 2D seismic campaign in 2020, both companies relinquished their valid contracts."}
        TopicIV={'Impact in Africa'}
        BodyIV={'As of 31 December 2021, the production of the combined companies was of 96 kboe/d (76%) liquid) split between Ghana (44%), Egypt (38%) and others (18%) and their combined 2P remaining reserves amounted to 343 MMboe (75% liquid) divided between Ghana (62%), Egypt (26%) and others (12%). At the same time, their combined 2C resources (contingent resources) were estimated at 696 MMboe split between Ghana (45%), Kenya (33%), Egypt (10%) and others (12%). The merger of Tullow and Capricorn will create a complementary portfolio for the new combined group.'}
        TopicV={'Tullow Oil is mainly active in Sub-Saharan Africa:'}
        BodyV={"In Ghana, the company operates deepwater productive assets (Jubilee and TEN group of fields). In Kenya, Tullow operates four promising onshore exploration blocks in the Eastern Africa Rift System. In Gabon, the company partners with Perenco and Maurel & Prom in the Gabon Coastal Basin, and with Vaalco in the Lower Congo Basin. In Cote d'Ivoire, Tullow has interest in CNR's producing block CI-26 and operates one deepwater block that adjoins the border with Ghana. In Mauritania, Tullow is partner with Pertronas in the offshore Area B/Chinguetti oil prone permit."}
        TopicVI={'Capricorn Energy is exclusively active in North Africa:'}
        BodyVI={"In Egypt, Capricorn has a significant presence in exploration and production assets with partner Cheiron Petroleum, after taking Shell's Western Desert assets in September 2021. The producing fields are split over four concessions, Obaiyed, Badr El Din, North-East Abu Gharadiq, Alam El Shawish West and North Alam El Shawish West. The net production averaged 36,500 boe/d from the acquisition completion to year end 2021 (38% of the production mix being oil and condensate). Still in the Western Desert, the company's exploration assets with partner Cheiron Petroleum include the Southeast Horus, West El Fayum and South Abu Sennan concessions. In Mauritania, the company operates the promising C-7 gas prone permit (including the Cormoran discovery), in the Senegal (M.S.G.B.C.) Basin."}
        Link={'https://www.spglobal.com/commodityinsights/en/ci/research-analysis/tullow-oil-and-capricorn-energy-to-give-birth-to-a-tullicorn.html'}
        LinkText={'S&P Global Commodity Insights'}/>
      <SubscriptionBox />
      <Footer />
    </div>
  )
}

export default ArticleTwo