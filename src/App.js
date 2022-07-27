import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import About from './pages/About';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/view';
import './App.css';
import Header from './components 1/Header';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(){
    return (
        <BrowserRouter>
        {/* <div className="App"> */}
            <Header/>
            <ToastContainer position="top-center" />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/add' component={AddEdit} />
                <Route path='/update/:id' component={AddEdit} />
                <Route path='/view/:id' component={View} />
                <Route path='about/:id' component={About} />
            </Switch>
            
        
        {/* </div> */}
        </BrowserRouter>
       
    );
 }
 export default App;
