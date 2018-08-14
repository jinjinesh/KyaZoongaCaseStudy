import React from 'react';

export default class Carousel extends React.Component {
    render() {
        return (
            <div>
                <div id="myCarousel" class="carousel slide carousel-fade home-slider" data-ride="carousel">
                    <h1>Tickets made simple for everyone, everywhere</h1>
                    <div class="site-manu container">
                        <div class="collapse navbar-collapse hide-on-mobile">
                            <ul class="nav navbar-nav sub-main-nav">
                                <li><a href="#">Concerts</a></li>
                                <li><a href="#" class="blue-bg">Cricket</a></li>
                                <li><a href="#" class="orange-bg">Events</a></li>
                                <li><a href="#" class="green-bg">Sports</a></li>
                                <li><a href="#" class="pink-lt-bg">Amusement Parks</a></li>
                                <li><a href="#" class="purple-bg">Restaurants</a></li>
                                <li><a href="#" class="yellow-bg">Theatre & Arts</a></li>
                                <li><a href="#">Parties</a></li>
                            </ul>
                        </div>
                        <div class="banner-serch-box"><input id="txtSearchBox" class="" name="q" value="" placeholder="Search for an event, venue or city" type="text" />
                            <a href="javascript:void(0);" onclick="searchfor();">
                                <i class="fa fa-search" aria-hidden="true"></i></a></div>
                    </div>
                    <div class="carousel-inner">
                        <div data-slide="0" class="item active">
                            <img src="http://content.kyazoonga.com/Footer/slider-1.jpg" alt="" class="hide-on-desktop" />
                            <div class="hide-on-mobile">
                                <video title="0" id="bgvid0" autoplay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
                                    <source src="http://content.kyazoonga.com/videos/video9.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
                            </div>
                        </div>
                        <div data-slide="1" class="item">
                            <img src="http://content.kyazoonga.com/Footer/slider-1.jpg" alt="" class="hide-on-desktop" />
                            <div class="hide-on-mobile">
                                <video title="1" id="bgvid1" autoplay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
                                    <source src="http://content.kyazoonga.com/videos/video1.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
                            </div>
                        </div>
                        <div data-slide="2" class="item">
                            <img src="http://content.kyazoonga.com/Footer/slider-1.jpg" alt="" class="hide-on-desktop" />
                            <div class="hide-on-mobile">
                                <video title="2" id="bgvid2" autoplay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
                                    <source src="http://content.kyazoonga.com/videos/video2.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
                            </div>
                        </div>
                        <div data-slide="3" class="item">
                            <img src="http://content.kyazoonga.com/Footer/slider-1.jpg" alt="" class="hide-on-desktop" />
                            <div class="hide-on-mobile">
                                <video title="3" id="bgvid3" autoplay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
                                    <source src="http://content.kyazoonga.com/videos/video3.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
                            </div>
                        </div>
                        <div data-slide="4" class="item">
                            <img src="http://content.kyazoonga.com/Footer/slider-1.jpg" alt="" class="hide-on-desktop" />
                            <div class="hide-on-mobile">
                                <video title="4" id="bgvid4" autoplay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
                                    <source src="http://content.kyazoonga.com/videos/video8.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        );
    }
}