import React, { Component } from 'react';
import App from './App.css';

class ReactLifeCycle extends Component{
  constructor (props){
    super(props);

    this.state = { 
    	test : [] 
    }
  }
  componentWillMount(){
    console.log("This time componentWillMount");
    //debugger;
  }
  componentDidMount(){
    console.log("This time componentDidMount");  

  }
  componentWillUnmount(){
    console.log("This time componentWillUnmount");
  }

  componentWillReceiveProps(){
    console.log("This time componentWillReceiveProps");
  }
  shouldComponentUpdate(){
    console.log("This time shouldComponentUpdate");
    return true;
  }
  componentWillUpdate(){
    console.log("This time componentWillUpdate");
  };
  componentDidUpdate(){
    console.log("This time componentDidUpdate");
  };
  render() {

    return (
      <div >
<h1>This is React-LifeCycle app</h1>
      </div>
      );
   }
  
}
export default ReactLifeCycle;