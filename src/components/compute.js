import React from 'react';
import '../staticfiles/css/form.css'
import axios from 'axios';
import FullPageLoader from './FullPageLoader'
import Modal from 'react-modal'

const url="https://waqmbackend.herokuapp.com/formresult";

Modal.setAppElement('#root')
export default class Compute extends React.Component {
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
    
         


      }
     
   
render() {
       
     
        const { pH,Turbidity,ElectricalConductivity,Tds,fetched,loading } = this.state;
        return (

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
                 {fetched ?(<div>{
                       <div>
                           <br/>
                           
                           <h5>Based on the value entered by the user the quality of water is found to be {<u><strong>{this.state.result}</strong></u>} for agriculture use.
                           </h5>
                          <center>
                       <p>To know more ...</p>
                   <button onClick={(e)=>{
                       e.preventDefault()
                       this.setState({modalIsOpen:true})
                   }}> Click here</button></center>
                            <Modal isOpen={this.state.modalIsOpen} onRequestClose={()=>{this.setState({modalIsOpen:false})}}
                            style={{
                                
                                overlay:{
                                    backgroundColor: 'lightgrey'
                                },
                                content:{
                                    position: 'absolute',
                                    top: '100px',
                                    left: '40px',
                                    right: '40px',
                                    bottom: '300px',
                                    border: '1px solid #ccc',
                                    background: '#fff',
                                    overflow: 'auto',
                                    WebkitOverflowScrolling: 'touch',
                                    borderRadius: '4px',
                                    outline: 'none',
                                    padding: '20px'
                                }
                            }}
                            
                            >

                                <h3>This result is obtained based on Machine Learning Classification algorithm.
                                     The data from this webpage is sent to the Classification Algorithm , on receiving the data it classifies according to the criteria specified.
                                    The data set has been formed based on the water parameter values obtained from Fao.org 
                                </h3>
                                 
                          
                            </Modal>    
                    </div>   
                        
                        }
                 </div>) :(null)}

                     
         
    </div>            
                </form>
                
            </div>
            </div>
            </div>
        );
    }
}



