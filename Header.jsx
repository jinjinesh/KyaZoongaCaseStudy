import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-inverse site-nav">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="site-logo" href="#"><img src="images/kyazoonga.png" alt="The Big Ticket" title="The Big Ticket"/></a>
                   </div>
                        <div class="collapse navbar-collapse navbar-right " id="myNavbar">
                            <ul class="nav navbar-nav top-nav hide-on-mobile">
                                <li><a href="#">Sign Up</a></li>
                                <li><a href="#">Sign In</a></li>
                                <li><a href="#"><i class="fa fa-shopping-basket" aria-hidden="true"></i><span class="badge">4</span></a></li>
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i class="fa fa-bell" aria-hidden="true"></i><span class="badge">10</span></a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else here</a></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                </li>
                                <li><a href="#"><span class="label label-primary">Ticket Your Event</span></a></li>
                            </ul>
                            <ul class="nav navbar-nav top-nav hide-on-desktop">
                                <li><a href="#">Sign Up</a></li>
                                <li><a href="#">Sign In</a></li>
                                <li><a href="#"><i class="fa fa-shopping-basket" aria-hidden="true"></i><span class="badge">4</span></a></li>
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i class="fa fa-bell" aria-hidden="true"></i><span class="badge">10</span></a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else here</a></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                </li>
                                <li><a href="#"><span class="label label-primary">Ticket Your Event</span></a></li>
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
</nav>
         </div>
                );
             }
          }
          
          export default Header;
