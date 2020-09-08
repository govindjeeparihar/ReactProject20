import React from 'react';
import ReactDOM from 'react-dom';
import './css/Style.css'; 

import Header from './Header';
import Footer from './Footer';
 
import Home from './Home';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import News from './News';
import Contact from './Contact';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

 
ReactDOM.render(
    <>
    <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path="/" render={ () => <Home /> } />
                <Route path="/About" component={About} />
                <Route path="/Services" render={ () => <Services /> } />
                <Route path="/Projects" component={Projects} />
                <Route path="/News" component={News} />
                <Route path="/Contact" render={() => <Contact /> } />
            </Switch>
        <Footer />
    </BrowserRouter>
    </>
,document.getElementById('root') );

 