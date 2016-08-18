import React, { Component } from 'react'

export default class Demo extends Component {
    constructor(props) {
        super(props);        
    }
    handleTest(){
    	const {ChangeText}=this.props.actions;
    	ChangeText(Math.random()*100);
    }
    render() {    	 
        return ( 
        	<div onClick={()=>this.handleTest()}> 
        		<span>{this.props.text}</span> 
        	</div>)
    }
  }
