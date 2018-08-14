import React from 'react';

export default class Ticket extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
        };
        this.ticketData = this.ticketData.bind(this);
    }
    componentDidMount(){
        this.ticketData();
    }

    ticketData(){
        let json = {
            imgURL:"http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif",
            price:"INR 50 - 2,500",
            time:"SAT, FEB 10, 2018 20:00 Onward",
            title:"JamshedpurFC - ISL Season 4",
            venue:"JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur"
        }
        let finalData=[];
        for (let index = 0; index < 6; index++) {
            finalData.push(json);
            
        }
        this.setState({data:finalData});
    }
    render() {
        return (

            <div>
                {this.state.data.map((row, index) => (
                <div class="col-xs-12 col-sm-6 col-lg-4">
                    <div class="box">
                        <div class="dropdown visiter-icon">
                            <a href="#" class="dropdown-toggle" type="button" data-toggle="dropdown"><span class="glyphicon glyphicon-user" aria-hidden="true"></span></a>
                            <div class="dropdown-menu">
                                <p>Who's attending (9)</p>
                                <a href="#"> <img src="http://www.kyazoonga.com/images/rsvp-blank-1.jpg" alt="" /> </a>
                                <a href="#"> <img src="http://www.kyazoonga.com/images/rsvp-blank-1.jpg" alt="" /> </a>
                                <a href="#"> <img src="http://www.kyazoonga.com/images/rsvp-blank-1.jpg" alt="" /> </a>
                                <a href="#"> <img src="http://www.kyazoonga.com/images/rsvp-blank-1.jpg" alt="" /> </a>
                                <a href="#"> <img src="http://www.kyazoonga.com/images/rsvp-blank-1.jpg" alt="" /> </a>
                                <a href="#"> <img src="http://www.kyazoonga.com/images/rsvp-blank-1.jpg" alt="" /> </a>
                                <a href="#"> <img src="http://www.kyazoonga.com/images/rsvp-blank-1.jpg" alt="" /> </a>
                                <a href="#"> <img src="http://www.kyazoonga.com/images/rsvp-blank-1.jpg" alt="" /> </a>
                                <a href="#"> <img src="http://www.kyazoonga.com/images/rsvp-blank-1.jpg" alt="" /> </a>
                                <a href="#"> <img src="http://www.kyazoonga.com/images/rsvp-blank-1.jpg" alt="" /> </a>
                            </div>
                        </div>
                        <a href="#" class="block-link">
                            <div class="ticket-img">
                                <img src={row.imgURL} alt="" />
                                <span class="ticket-price">{row.price}</span>
                            </div>
                            <div class="ticket-info">
                                <span class="time-info">{row.time}</span>
                                <h3 class="ticket-title">{row.title}</h3>
                                <p class="venue-info">{row.venue}</p>
                            </div>
            </a>
                        <div class="social clearfix">
                            <div class="pull-left">
                                <a class="btn btn-default btn-xs ical" href="#">
                                    <i class="fa fa-calendar"></i> &nbsp;iCal</a>
                                <a class="btn btn-default btn-xs ml-10" href="#">
                                    <i class="fa fa-calendar"></i> &nbsp;Google</a>
                            </div>
                            <div class="pull-right">
                                <a class="btn btn-default btn-xs btn-circle" href="#">
                                    <i class="fa fa-facebook"></i></a>
                                <a class="btn btn-default btn-xs btn-circle" href="#">
                                    <i class="fa fa-twitter"></i></a>
                                <a class="btn btn-default btn-xs btn-circle" href="#">
                                    <i class="fa fa-twitter"></i></a>
                                <a class="btn btn-default btn-xs btn-circle" href="#">
                                    <i class="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        );
    }
}

