import React from 'react';
import '../staticfiles/css/homepage.css';
import Particles from 'react-particles-js';
import obj from './particle.json';
import '../staticfiles/css/homepage.css';
import img from "../staticfiles/images/rsz_bg.jpg";
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';

export default class Home extends React.Component{
  
   render() {    
      return (
        <div>
        <Jumbotron>
          <Container>
            <Row>
            <Col sm="5">
              <img src={img} alt="bg" className="img-responsive" className="rounded-circle" width="100%" height="85%"/>
            </Col>
            <Col sm="7">
              <strong><h1  align="left" justify="inter-word" style={{fontSize:"47px",color:"#000000"}}>
              Performance Comparison Of Various Machine Learning Algorithms For Water Quality Monitoring</h1>
              </strong>   
              <p  align="justify" justify="inter-word" style={{fontSize:"150%",color:"#000000"}}>
              This web application is used for comparing different machine learning algorithm
              and to determine the efficient algorithm for water quality monitoring. The efficient algorithm for the system is compared based upon certain comparsion metrics.
              The system also provides continuous water quality monitoring (digital solution) for stake-holders.
              To know more about this application click the button below.
              </p>
              <Button color="primary" size="sm">Learn More</Button>
            </Col>  
            </Row>  
          </Container>
        </Jumbotron>
        </div>
       
        
      );
    }
  }
 
  


























  