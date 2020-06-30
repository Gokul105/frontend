import React from 'react';
import user from '../staticfiles/images/user.png'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'mdbreact/dist/css/mdb.css';
import { MDBMask, MDBView, MDBCol   } from "mdbreact";

//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

export default class Contact extends React.Component
{
  render(){    
    return (
      <div>
        <br/><br/>
        <br/>
        <CardDeck>
         <Card>
            <center>
            <MDBCol md="6">
            <MDBView hover zoom>
            <Card.Img variant="top" src={user} alt="gokul" class="rounded-circle" width="140" height=" 133px" />
            <MDBMask className="flex-center"></MDBMask>
            </MDBView> 
            </MDBCol>
            </center>
            <Card.Body>
            <Card.Title>Gokul S</Card.Title>
            <Card.Text>Email Id : gokul1051999@gmail.com<br/>Contact No : 8428868723</Card.Text>
            </Card.Body>
         </Card>
         <Card>
            <center>
            <MDBCol md="6">
            <MDBView hover zoom>
            <Card.Img variant="top" src={user} alt="gokul" class="rounded-circle" width="140" height=" 133px" />
            <MDBMask className="flex-center"></MDBMask>
            </MDBView> 
            </MDBCol>
            </center>
            <Card.Body>
            <Card.Title>Gopinathan M</Card.Title>
            <Card.Text>Email Id : gopitricks1307@gmail.com<br/>Contact No : 9428845723</Card.Text>
            </Card.Body>
         </Card>
         <Card> 
         <center>
            <MDBCol md="6">
            <MDBView hover zoom>
            <Card.Img variant="top" src={user} alt="gokul" class="rounded-circle" width="140" height=" 133px" />
            <MDBMask className="flex-center"></MDBMask>
            </MDBView> 
            </MDBCol>
            </center>
            <Card.Body>
            <Card.Title>Kishore Kumar</Card.Title>
            <Card.Text>Email Id : kishorkm.mohan@gmail.com<br/>Contact No : 7001068723</Card.Text>
            </Card.Body>
         </Card>
        </CardDeck>
     </div>
        
      );
    }
  }


  