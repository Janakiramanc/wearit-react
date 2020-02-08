import React from 'react';
import './styles/vendor.min.css';
import './styles/app.scss';
import {BrowserRouter, Router, Route, Switch, Link} from 'react-router-dom';
import $ from 'jquery';
import bootstrap from 'bootstrap';
import Catalog from './components/catalog';
import Product from './components/product';
import Header from './components/header';
import Footer from './components/footer';
import Banner from './components/banner';

function App() {
    return (
        <> 
        <BrowserRouter>
        <div>
        <Header />
        <Banner />
        <Switch>
            <Route path="/" exact component={Catalog} />
            <Route path="/Prodcut/:productID" exact component={Product} />
        </Switch>
        <Footer />
        </div>
    </BrowserRouter>
    </>
    );
}

export function sum(a,b){
    return a+b;
}

export default App;