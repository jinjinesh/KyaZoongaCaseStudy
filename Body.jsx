import React from 'react';
import Carousel from './Carousel';
import Ticket from './Ticket';
import BrowseByCategory from './BrowseByCategory';
import SellerUse from './SellerUse';
export default class Body extends React.Component {
    render() {
        return (
            <div>
                <Carousel />
                <section class="hot-ticket-sec ticket-boxes">
                    <div class="container">
                        <h2 class="site-title">Hot Tickets <small>Get tickets to your favourite events</small></h2>
                        <div class="row">
                            <Ticket/>
                            <BrowseByCategory/>
<SellerUse/>
                             <section class="home-featured-sec text-center">
    <h2 class="site-title"><span>We've been featured in</span></h2>
    <div class="container-fluid">
      <a target="_blank" href="https://www.forbes.com/sites/julianmitchell/2017/06/08/this-ticketing-platform-aims-to-overthrow-ticketmaster-and-stubhub-as-global-leader/#2eee65851bc2">
            <img src="https://static3.kyazoonga.com/Images/featured-logo/forbes-logo.jpg" alt="Forbes"/></a>

      <a target="_blank" href="https://tech.co/technology-upgrading-events-industry-2017-06">
            <img src="https://static3.kyazoonga.com/Images/featured-logo/techco-logo.jpg" alt="Forbes"/></a>
      <a target="_blank" href="https://www.ausleisure.com.au/news/forbes-names-kyazoonga-as-the-fastest-growing-international-online-ticket-p/">
            <img src="https://static3.kyazoonga.com/Images/featured-logo/ausleisure-logo.jpg" alt="INC"/></a>


      <a target="_blank" href="http://www.inc.com/drew-hendricks/top-3-trends-driving-change-for-the-events-industry.html">
            <img src="https://static3.kyazoonga.com/Images/featured-logo/inc-logo.jpg" alt="INC"/></a>
      <a target="_blank" href="https://www.entrepreneur.com/article/289909">
            <img src="https://static3.kyazoonga.com/Images/featured-logo/entrepreneur-magazine.jpg" alt="Entrepreneur Magazine"/></a> <a target="_blank" href="https://www.youtube.com/watch?v=1aSuorjmrRs">
                    <img src="https://static3.kyazoonga.com/Images/featured-logo/cnbc.jpg" alt="CNBC"/></a>
      <a target="_blank" href="http://zeenews.india.com/exclusive/guns-n-roses-in-delhi-waiting-with-impatience-for-the-next-time_5910.html">
            <img src="https://static3.kyazoonga.com/Images/featured-logo/z-news.jpg" alt="Z News"/></a>
      <a target="_blank" href="http://tech.economictimes.indiatimes.com/news/startups/ratan-tata-invests-undisclosed-amount-in-e-ticketing-startup-kyazoonga/52681961">
            <img src="https://static3.kyazoonga.com/Images/featured-logo/the-economic-times.jpg" alt="The Economic Times"/></a>
      <a target="_blank" href="http://timesofindia.indiatimes.com/australia-in-india-2009/top-stories/MCA-appoints-KyaZoonga-com-as-the-official-ticketing-partner/articleshow/5196286.cms">
            <img src="https://static3.kyazoonga.com/Images/featured-logo/the-times-of-india.jpg" alt="Times of India"/></a>
      <a target="_blank" href="http://www.business-standard.com/article/companies/ratan-tata-invests-in-kyazoonga-116061000326_1.html">
            <img src="https://static3.kyazoonga.com/Images/featured-logo/business-standard.jpg" alt="Business Standard"/></a>
      <a target="_blank" href="http://www.news18.com/news/buzz/guns-n-roses-india-tour-80-tickets-outlets-opened-524376.html">
            <img src="https://static3.kyazoonga.com/Images/featured-logo/news18.jpg" alt="News 18"/></a>
      <a target="_blank" href="https://sports.ndtv.com/india-vs-west-indies-2013-14/sachin-tendulkars-200th-test-tickets-sold-out-in-15-hours-kyazoongacom-1527446">
            <img src="https://static3.kyazoonga.com/Images/featured-logo/ndtv.jpg" alt="NDTV"/></a>
    </div>
  </section>
                        </div>
                        <div class="btn-sec text-center p-20 pt-0">
                            <a href="#" class="btn btn-primary btn-custome-lg">Discover More</a>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}