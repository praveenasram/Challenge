import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Registration from './Registration';

class Index extends Component {	
	
	constructor(props){
		super(props);
		this.loadAnotherView = this.loadAnotherView.bind(this);
		this.state ={
				isLoginPage : true
		};
	}
	
	loadAnotherView(e){
		this.setState({
			isLoginPage : e.target.name === 'login' ? true : false
		});
	}
	
  render() {	
    return (
		<div className="App">
      		<div>
		        <header className="App-header">
		          <h1 className="App-title">Welcome to React</h1>          
		        </header>	        
	        </div>
	        
	        <div>
	          <Button bsSize="large" name='login' onClick = {this.loadAnotherView}>Login</Button>	
	        </div>
	      	
	        <div>
	      		<Button name='register' onClick = {this.loadAnotherView}>Register</Button>
	      	</div>
	      	
	      	{this.state.isLoginPage ? <Login/> : <Registration/>}
      </div>
    );
  }
}

ReactDOM.render(
		<Index />, document.getElementById('root')
);
