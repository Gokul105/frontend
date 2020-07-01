import React from 'react';
import Homecomponent1 from '../Homepage/homecomponent1';
import Homecomponent2 from '../Homepage/homecomponent2';
import {Transition, animated } from 'react-spring/renderprops'
export default class Home extends React.Component{
  state = {
    showComponent2: false
  }
  
  toggle = e => this.setState({showComponent2: !this.state.showComponent2});
   render() {    
      return (
        <div>
         <Homecomponent1 toggle={this.toggle}/>
         <Transition
          native
          items={this.state.showComponent2}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
                <Homecomponent2/>
              </animated.div>
            ))
          }
        </Transition>
      
        </div>
       
        
      );
    }
  }
 
  


























  