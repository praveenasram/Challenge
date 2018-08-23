import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, PageHeader } from "react-bootstrap";
import './App.css';

class Login extends Component {
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
		<div className="Login">
			
			<PageHeader className="App-header"> Please Login for React JS Tutorials </PageHeader>
			
	        <form onSubmit={this.handleSubmit}>
	        
		        <FormGroup controlId="email" bsSize="large">
		          <ControlLabel>Email</ControlLabel>
		          <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange}/>
		        </FormGroup>
		          
		        <FormGroup controlId="password" bsSize="large">
		          <ControlLabel>Password</ControlLabel>
		          <FormControl value={this.state.password} onChange={this.handleChange} type="password"/>
		        </FormGroup>
		        
		        <Button block bsSize="large" disabled={!this.validateForm()} type="submit"> Login </Button>
		        
	        </form>
	        
	        <p className="App-intro">Terms & Conditions</p>	        
	        
      </div>    	   
      
    );
  }
}
export default Login;
//ReactDOM.render(<Index />, document.getElementById('root'));
