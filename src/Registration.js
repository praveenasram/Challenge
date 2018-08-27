import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import './App.css';

class Registration extends Component {
	constructor(props){
		super(props);
		this.state = {
			      email: "",
			      password: ""
		};
	}
	
	validateForm() {
	    return this.state.email.length > 0 && this.state.password.length > 0;
	}
	
	handleChange = event => {
	  this.setState({
	    [event.target.id]: event.target.value
	  });
	}
	
	handleSubmit = event => {
	   event.preventDefault();
	}
	
    render() {
      return (
		<div className="Login" text-align="start" >
			
			<div>
		        <header className="App-header">
		          <h1 className="App-title">Welcome to Registration Page</h1>          
		        </header>	        
        	</div>
			
	        <form onSubmit={this.handleSubmit}>
	        	
		        <FormGroup bsSize="large">
		          <ControlLabel>First Name</ControlLabel>
		          <FormControl className="Label-style"/>
		        </FormGroup>
	        
		        <FormGroup controlId="email" bsSize="large">
		          <ControlLabel>Email</ControlLabel>
		          <FormControl className="Label-style" autoFocus type="email" value={this.state.email} onChange={this.handleChange}/>
		        </FormGroup>
		          
		        <FormGroup controlId="password" bsSize="large">
		          <ControlLabel>Password</ControlLabel>
		          <FormControl className="Label-style" value={this.state.password} onChange={this.handleChange} type="password"/>
		        </FormGroup>
		        
		        <FormGroup controlId="repassword" bsSize="large">
		          <ControlLabel>Re-enter Password</ControlLabel>
		          <FormControl className="Label-style" type="password"/>
		        </FormGroup>
		        
		        <button className="Button-style" disabled={!this.validateForm()} type="submit"> Register </button>
		        
	        </form>
	        
	        <p className="App-intro">Terms & Conditions</p>	        
	        
      </div>
    );
  }
}
export default Registration;