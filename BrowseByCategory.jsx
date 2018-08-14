import React from 'react';

export default class Ticket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name:"concerts",
                    url:"https://static2.kyazoonga.com/Images/kzconsumer/top-categories/concerts-cat1.jpg"
                },
                {
                    name:"Cricket",
                    url:"https://static2.kyazoonga.com/Images/kzconsumer/top-categories/cricket-cat1.jpg"

                },
                {
                    name:"Theatre & Arts",
                    url:"https://static2.kyazoonga.com/Images/kzconsumer/top-categories/theatre-cat.jpg"
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <section class="home-cat-sec text-center">
                    <div class="container">
                        <h2 class="site-title">Browse by top categories</h2>
                       
                        <div class="row">
                        {this.state.data.map((row,index)=>(
                            <div class="col-sm-4 cat-box">
                                <a href="#" class="block-link">
                                    <div class="cat-txt">
                                        <h3>{row.name}</h3>
                                    </div>
                                    <img src={row.url} alt="" class="img-full-width" />
                                </a>
                            </div>
                             ))}
                        </div>
                       
                    </div>
                </section>
            </div>
        );
    }
}