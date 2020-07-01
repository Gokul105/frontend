import React from 'react';
import '../staticfiles/css/comparison.css';
import axios from 'axios';
import FullPageLoader2 from './FullPageLoader2';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const geturl="https://waqmbackend.herokuapp.com/comparisonresult";

export default class Comparisoncomp1 extends React.Component {

 constructor(props)
 {
   super(props);
   this.state = {
    comparisonresult: [],
    loading:false,
    fetched:false
     }
 }

  handleSubmit=()=> {
    this.setState({loading:true})
    axios.get(geturl).then(response => {
        console.log(response.data) 
        this.setState({ comparisonresult: response.data});
        this.setState({loading:false})
        this.setState({fetched:true})
       })
             
     
         
     
    }

render() {
    const {loading}=this.state
    const {fetched}=this.state
    const {comparisonresult}=this.state
    return (
      <div>
      <br/><br/>
      <br/>
      <Jumbotron>
<h1> Performance Comparison Of Various Machine Learning Algorithms </h1>
<br/>
<p>
click the button below to generate comparison result
</p>
<p>
  <Button variant="dark" onClick={this.handleSubmit}>Compare</Button>
</p>
    {loading ? (<FullPageLoader2/>) :(null)}
    {fetched ? (<div>
       {<Table striped bordered hover responsive>
  <thead>
    <tr>
      <th><strong><u>Comparison Metrics</u></strong></th>
      <th><strong><u>Decision Tree Classifier</u></strong></th>
      <th><strong><u>Multilayer Perceptron Classifier</u></strong></th>
      <th><strong><u>Random Forest Classifier</u></strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Mean Accuracy</strong></td>
       <td>{comparisonresult[0]}</td>
      <td>{comparisonresult[7]}</td>
      <td>{comparisonresult[14]}</td>
    </tr>
    <tr>
      <td><strong>Standard Deviation Accuracy</strong></td>
      <td>{comparisonresult[1]}</td>
      <td>{comparisonresult[8]}</td>
      <td>{comparisonresult[15]}</td>
    </tr>
    <tr>
      <td><strong>F1 Score</strong></td>
      <td >{comparisonresult[2]}</td>
      <td>{comparisonresult[9]}</td>
      <td>{comparisonresult[16]}</td>
    </tr>
    <tr>
      <td><strong>Mean Absolute Error</strong></td>
      <td >{comparisonresult[3]}</td>
      <td>{comparisonresult[10]}</td>
      <td>{comparisonresult[17]}</td>
    </tr>
    <tr>
      <td><strong>Lograthmic Loss</strong></td>
      <td >{comparisonresult[4]}</td>
      <td>{comparisonresult[11]}</td>
      <td>{comparisonresult[18]}</td>
    </tr>
    <tr>
      <td><strong>Mean Squared Error</strong></td>
      <td >{comparisonresult[5]}</td>
      <td>{comparisonresult[12]}</td>
      <td>{comparisonresult[19]}</td>
    </tr>
    <tr>
      <td><strong>Area Under Curve</strong></td>
      <td >{comparisonresult[6]}</td>
      <td>{comparisonresult[13]}</td>
      <td>{comparisonresult[20]}</td>
    </tr>
  </tbody>
</Table>}
 
 {
   <div>
     <br/>
     <h2>Result Analaysis :</h2><br/>
     <dl>
  <dt>Accuracy :</dt>
  <dd>- Accuracy is the most intuitive performance measure and it is simply a ratio of correctly predicted observation to the total observations. 
    Random Forest has the highest accuracy i.e predicting the the result when compare to other two algorithm. 
    Random Forest can generalize over the data in a better way. 
    This randomized feature selection makes random forest much more accurate than a Decision Tree. 
    Random Forest is suitable for situations when we have a large dataset, and interpretability is not a major concern.
    The Random Forests requires less preprocessing and the training process is simpler.</dd>
  <dt>F1 Score :</dt>
  <dd>- F1 Score is the Harmonic Mean between precision and recall. 
    The range for F1 Score is [0, 1]. 
    It tells you how precise the classifier is as well as how robust it is. 
    Robustness is the property that characterizes how effective the algorithm is while being tested on the new independent dataset.
    The greater the F1 Score, the better is the performance of our model.
    Random Forest classifier has that ability to predict new independent dataset.</dd>
  <dt>Mean Absolute Error :</dt>
  <dd>- Mean Absolute Error is the average of the difference between the original values and the predicted values. 
    It gives us the measure of how far the predictions were from the actual output.
    The deviations found to be less in Decision Tree and Random Forest classifier whereas for Multilayer Perceptron Classifier the value is high when compared to other classification algorithm.</dd>
  <dt>Mean Squared Error :</dt>
  <dd>- Mean Squared Error(MSE) is quite similar to Mean Absolute Error, the only difference being that MSE takes the average of the square of the difference between the original values and the predicted values.
    As, we take square of the error, the effect of larger errors become more pronounced than smaller error, hence the model can now focus more on the larger errors.
</dd>
  <dt>Lograthmic Loss :</dt>
  <dd>- Logarithmic Loss or Log Loss, works by penalising the false classifications.Log Loss has no upper bound and it exists on the range [0, ∞). 
    Log Loss nearer to 0 indicates higher accuracy, whereas if the Log Loss is away from 0 then it indicates lower accuracy.
     MLP has lesser deviation from 0.</dd>
  <dt>Area Under Curve :</dt>
  <dd>- AUC of a classifier is equal to the probability that the classifier will rank a randomly chosen positive example higher than a randomly chosen negative example.
     The AUC has a range of [0, 1] the greater the value, the better is the performance of our model.
      From the result Decision Tree Classifier holds the highest value and Multilayer Perceptron Classifier holds the least value. </dd>
  </dl>
  <br/>
  <h2>Conclusion :</h2><br/>
  <p>
  For the case of our data set, the Random forest algorithm is the best classifier when compared to MLP & Decision tree in terms of Accuracy, AUC and F1 Score.
  Random forest algorithm works well even if the data has missing values or it has not been trained when compared to other algorithms.To predict the answers with the new dataset random algorithm is the best one to use. 

 </p>
  </div> 
 } 
   


       </div>) :(null)}
</Jumbotron>

   
        </div>   
    );
  }
}


