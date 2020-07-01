import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col,Container } from 'reactstrap';


export default function Homecomponent2() {
    return (
    <div>
        <Container>
        <Row>
            <Col sm="6">
                <Card body>
                <CardTitle><u><strong><h2>Determining Water Quality</h2></strong></u></CardTitle>
                <CardText> 
                    <p  align="justify" justify="inter-word" style={{fontSize:"150%",color:"#000000"}}>
                    This page helps to determine the quality of water based on the given parameter values. 
                    The parameters taken into consideration are pH, Turbidity, Electrical Conductivity, Total Dissolved Salt. 
                    This page Contains a form where user inputs the parameter values and then on submiting
                    it displays whether the quality of water is Pure or Impure or Unusable.
                    Click the button below to compute the quality of water. 
                    </p>
                </CardText>
                <Button color="dark" href="/compute">Determine Water Quality</Button>
                </Card>
            </Col>
            <Col sm="6">
                <Card body>
                <CardTitle><u><strong><h2>Comparison of Algorithms</h2></strong></u></CardTitle>
                <CardText>
                    <p  align="justify" justify="inter-word" style={{fontSize:"150%",color:"#000000"}}>
                    Once the quality of water is determined the user can compare the performance of various machine learning algorithms.
                    The Machine Learning algorithms used are Decision tree algorithm, Multilayer Perceptron, Random Forest Algorithm.
                    And they are compared over certain metrics scores.The comparison metrics used are Accuracy, Logarithmic Loss, 
                    Confusion Matrix, Area under Curve, F1 Score, Mean Absolute Error and Mean Squared Error.    
                    </p>   
                </CardText>
                <Button color="dark" href="/comparison">Compare algorithms</Button>
                </Card>
            </Col>
        </Row>
        </Container>
    </div>
    )
}
