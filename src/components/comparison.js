import React from 'react';
import Comparisoncomp1 from '../components/comparisoncomp1';
import {Spring} from 'react-spring/renderprops';

export default class Comparison extends React.Component{
  
  render() {    
      return (
        <div>
          <Spring
          from={{ opacity:0, marginTop: 700 }}
          to={{ opacity:1, marginTop: 0 }}

          >
              { props=>(
                  <div style={props}>
                    <Comparisoncomp1 />
                  </div>
              )

              }
          </Spring>
      
        </div>
       
        
      );
    }
  }
 
  


























  