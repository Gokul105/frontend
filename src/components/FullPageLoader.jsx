import React, {Component} from 'react';
//import {connect} from 'react-redux';
import LoaderGif from '../staticfiles/images/Infinity-1.3s-200px.gif'
import '../staticfiles/css/loading.css'
export default class FullPageLoader extends Component {

  render() { 
       return ( 
            <div className="loader-container">
                <div className="loader">
                    <img src={LoaderGif} alt="loading gif"/>
                </div>
            </div>
         );
    }
}

