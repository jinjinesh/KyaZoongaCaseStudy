import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Body/>
                <Footer />
            </div>
        );
    }
}

export default App;
