import React, { Component } from 'react';
import '../../staticfiles/css/form.css';
import axios from 'axios';
import FullPageLoader from '../FullPageLoader';

import Component2 from '../computepage/component2';
import { Container, Row, Col } from 'reactstrap';
import {Spring} from 'react-spring/renderprops';

const url="https://waqmbackend.herokuapp.com/formresult";

export default class Compute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValue:{
            pH: '',
            Turbidity: '',
            ElectricalConductivity: '',
            Tds: ''
            },
            formErrors: {
                pHErr: '',
                turbidityErr: '',
                ecErr:'',
                tdsErr:''
            },
            fieldValidity: {
                ph: false,
                turbidity: false,
                ec:false,
                tds:false,
                buttonActive:false
            },
            formValid: false,
            successMessage: '',
            
            result:"",
            errorMessage:'',
            loading:false,
            modalIsOpen:false,
            fetched:false
        };
     
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }
   


    handleChange=event=>{
        const name=event.target.name
        const value=event.target.value
        const {formValue}=this.state
        this.setState({formValue:{...formValue,[name]:value}})
        this.validateField(name,value)
    }

    validateField=(fieldName,value)=>{
         var formErrors = this.state.formErrors;
        var fieldValidity = this.state.fieldValidity;
        var reg=/[\D]$/
        switch(fieldName)
        {
           
            case 'pH':
               
                if(value==="")
                {
                    formErrors.pHErr="Field Required"
                    fieldValidity.ph=false
                }
                else if(value<1 || value>14)
                { 
                   formErrors.pHErr="Please Enter Valid Value"
                   fieldValidity.ph=false
                }
                else if(value.match(reg))
                {
                    formErrors.pHErr="Please Enter Valid Value"
                    fieldValidity.ph=false
                }
                else{
                    formErrors.pHErr=""
                    fieldValidity.ph=true
                }
                break
            case 'Turbidity':
               
                if(value==="")
                {
                    formErrors.turbidityErr="Field Required"
                    fieldValidity.turbidity=false
                }  
                else if(value<0)
                {
                    
                    formErrors.turbidityErr="Please Enter Valid Value"
                    fieldValidity.turbidity=false
                }
                else if(value.match(reg))
                {
                    formErrors.turbidityErr="Please Enter Valid Value"
                    fieldValidity.turbidity=false
                }
                else{
                    
                    formErrors.turbidityErr=""
                    fieldValidity.turbidity=true
                   } 
                 break
            case 'ElectricalConductivity':
                
                if(value==="")
                {
                    formErrors.ecErr="Field Required"
                    fieldValidity.ec=false
                }        
                else if(value<0)
                {
                      
                    formErrors.ecErr="Please Enter Valid Value"
                    fieldValidity.ec=false
                }
                else if(value.match(reg))
                {
                    formErrors.ecErr="Please Enter Valid Value"
                    fieldValidity.ec=false
                }
                else{
                          
                    formErrors.ecErr=""
                    fieldValidity.ec=true
                }
                break
            case 'Tds':
               
                if(value==="")
                {
                    formErrors.tdsErr="Field Required"
                    fieldValidity.tds=false
                }  
                else if(value.match(reg))
                {
                    formErrors.tdsErr="Please Enter Valid Value"
                    fieldValidity.tds=false
                }
                else{
                    formErrors.tdsErr=""
                    fieldValidity.tds=true
                } 
                break 
            default:
                break
            }
        fieldValidity.buttonActive=fieldValidity.ph && 
                         fieldValidity.turbidity &&
                         fieldValidity.ec &&
                         fieldValidity.tds
        this.setState({formErrors:formErrors,fieldValidity:fieldValidity,successMessage:"",errorMessage:""})

   }

   handleSubmit=event=>{
    event.preventDefault()
    this.submitForm()
    }


    submitForm=()=>{
        this.setState({fetched:false})
        this.setState({loading:true})
      const {formValue}=this.state  
      console.log('data:',this.state.formValue)
      axios.post(url,formValue)
      .then(response =>{
          console.log(response.data)
          this.setState({result:response.data})
         
      })
     
      
      setTimeout(() => {
        this.setState({fetched:true})
        this.setState({loading:false})
      },5000);
    
     this.setState({result:""})


      }
     
   
render() {
     const { pH,Turbidity,ElectricalConductivity,Tds,fetched,loading } = this.state;
    return (
    <div>
         <Spring
            from={{ opacity:0, marginLeft: -700 }}
            to={{ opacity:1, marginLeft: 0 }}>
                                 
            { props=>(
                <div style={props}>
                <Container>
            <Row>
                <Col sm="5">
                    <div className="container">
                    <div id="task-container">
                    <div  id="form-wrapper">
                        <u><strong><h3 className="text-center">DETERMINE WATER QUALITY</h3></strong></u>
                        <br/>
                    <form >
                        <div className="form-group">
                            <label htmlFor="pH"><h5  className="text-dark">pH:</h5></label>
                            <input type="text" 
                            name="pH"
                            id="pH"
                            value={pH}
                            onChange={this.handleChange}
                            placeholder="Range(1-14)"
                            className="form-control" />
                            <span className="text-danger">{this.state.formErrors.pHErr}</span>
                        </div>
                         <div className="form-group">
                            <label htmlFor="Turbidity"><h5 className="text-dark">Turbidity:</h5></label>
                            <input type="text" 
                            name="Turbidity"
                            id="Turbidity"
                            value={Turbidity}
                            onChange={this.handleChange}
                            placeholder="(ppm)"
                            className="form-control"/>
                            <span className="text-danger">{this.state.formErrors.turbidityErr}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="ElectricalConductivity"><h5 className="text-dark">ElecticalConductivity:</h5></label>
                            <input type="text" 
                            name="ElectricalConductivity"
                            id="ElectricalConductivity"
                            value={ElectricalConductivity}
                            onChange={this.handleChange}  
                            placeholder="(mS/cm)"
                            className="form-control"/>
                            <span className="text-danger">{this.state.formErrors.ecErr}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Tds"><h5 className="text-dark">Total Dissolved Salt:</h5></label>
                            <input type="text" 
                            name="Tds"
                            id="Tds"
                            value={Tds}
                            onChange={this.handleChange} 
                            placeholder="mg/L"
                            className="form-control"/>
                            <span className="text-danger">{this.state.formErrors.tdsErr}</span>
                        </div>
                        <div>
                            <center>  
                            <button type="button" className="btn btn-dark" onClick={this.handleSubmit} disabled={!this.state.fieldValidity.buttonActive}>Submit</button>
                            <button type="reset" className ="btn btn-dark">Reset  </button>
                            </center>
                        </div>      
                        <div>
                            {loading ? (<FullPageLoader/>) : (null)}
                            
                        </div>            
                    </form>
                    </div>
                    </div>
                    </div>
                </Col>
                <Col sm="7">
                {fetched ?(<div><Component2 data={this.state.result}/></div>) :(null)}
                </Col>
            </Row>
        </Container>
                </div>
                 )
             }
        </Spring>
        
    </div>
        );
    }
}



