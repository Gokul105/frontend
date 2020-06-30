import React, {Component} from 'react';
//import {connect} from 'react-redux';
import LoaderGif from '../staticfiles/images/Pulse-1.5s-371px.gif'
import '../staticfiles/css/loading2.css'
export default class FullPageLoader2 extends Component {

  render() { 
       return ( 
            <div className="loader-container2">
                <div className="loader2">
                    <img src={LoaderGif} alt="loading gif"/>
                </div>
            </div>
         );
    }
}

