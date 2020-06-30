import React from 'react';
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Home from'./components/home'
import Compute from'./components/compute'
import Comparison from'./components/comparison'
import Contact from './components/contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav} from 'react-bootstrap';
import './App.css'

export default class App extends React.Component {
    render() {    
      return (
   <Router>
  
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href={'/home'}>HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
         <Nav.Link href={'/compute'}>COMPUTE</Nav.Link>
         <Nav.Link href={'/comparison'}>COMPARISON</Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link href={'/contact'}>CONTACT</Nav.Link>
        </Nav>
       </Navbar.Collapse>
   </Navbar>
   <div>
     <Switch>
       <Route exact path="/" component={Home}/>

       <Route path="/home" component={Home}/>
      <Route path="/compute" component={Compute}/>
      <Route path="/comparison" component={Comparison}/>
      <Route path="/contact" component={Contact}/>
    
    </Switch>
  </div>
   
  </Router>
      
        
      );
    }
  }


  