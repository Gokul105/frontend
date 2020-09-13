import React, { Component } from 'react';
import { Table , Button } from 'reactstrap';


export default class Component1 extends Component {
    render(){

    
    return (
        <div>
             
            <div className="container">
            <div id="task-container">
            <div  id="form-wrapper">
                <h2>Result:</h2>
                <p  align="justify" justify="inter-word" style={{fontSize:"150%",color:"#000000"}}>
                Based on the value entered by the user the quality of water is found to be <u><strong>{this.props.data}</strong></u> for agriculture use.
                This result is obtained based on Classification by Machine Learning algorithm.
                The data set has been formed based on the water parameter values obtained from Fao.org .
                Below table represents the nominal Range for water parameters as per FAO for agriculture use.
                </p>
                <Table responsive  bordered striped hover >
                    <thead>
                        <tr>
                        <th><u><h3>Attributes</h3></u></th>
                        <th><u><h3>Normal Range</h3></u></th>
                       
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row"><strong>pH</strong></th>
                        <td><strong>From 6.50 to 8.40 pH (Scale of 1 to 14)</strong></td>
                        
                        </tr>
                        <tr>
                        <th scope="row"><strong>Turbidity</strong></th>
                        <td><strong>From 2.50 to 5.00 ppm</strong></td>
                      
                        </tr>
                        <tr>
                        <th scope="row"><strong>Electrical Conductivity</strong></th>
                        <td><strong>From 0.00 to 0.70 mS/cm</strong></td>
                       
                        </tr>
                        <tr>
                        <th scope="row"><strong>Total Dissolved Salts</strong></th>
                        <td><strong>From 450 to 2000 mg/l</strong></td>
                       
                        </tr>
                    </tbody>
                </Table>
                <p style={{fontSize:"150%",color:"#000000"}}>Click the button below to compare algorithms</p>
               <Button color="dark" href="/comparison">comparison</Button>
            </div>
            </div>
            </div>
        </div>
    )
    }
}
