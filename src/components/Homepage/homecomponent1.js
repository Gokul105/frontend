import React,{Component} from 'react'
import img from "../../staticfiles/images/rsz_bg.jpg";
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import {Spring} from 'react-spring/renderprops';

export class Homecomponent1 extends Component{
    render(){
    return (
    <div>
          <Spring
          from={{ opacity:0, marginTop: -500 }}
          to={{ opacity:1, marginTop: 0 }}

          >
              { props=>(
                  <div style={props}>
                    <Jumbotron>
                        <Container>
                            <Row>
                                <Col sm="5">
                                    <img src={img} alt="bg"  className="rounded-circle" width="100%" height="85%"/>
                                </Col>
                                <Col sm="7">
                                    <strong><h1  align="left" justify="inter-word" style={{fontSize:"47px",color:"#000000"}}>
                                    Performance Comparison Of Various Machine Learning Algorithms For Water Quality Monitoring</h1>
                                    </strong>   
                                    <p  align="justify" justify="inter-word" style={{fontSize:"150%",color:"#000000"}}>
                                    This web application is used for comparing different machine learning algorithm
                                    and to determine the efficient algorithm for water quality monitoring. The efficient algorithm for the system is compared based upon certain comparsion metrics.
                                    The system also provides continuous water quality monitoring (digital solution) for stake-holders.
                                    To know more about this application click the button  below.
                                    </p>
                                    <Button color="dark"  onClick={this.props.toggle}>Learn More</Button>
                                </Col>  
                            </Row>  
                        </Container>
                    </Jumbotron>

                  </div>
              )

              }
          </Spring>






       
        </div>
    )
            }
}

export default Homecomponent1;