import React from 'react';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';

class App extends React.Component {


    render() {
        return (
            <>
                <Header />
                <Main />
                <Footer />
            </>
        )
    }
}

export { App }
