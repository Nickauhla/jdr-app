import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
	        <img src={logo} className="App-logo" alt="logo" />
	        <h1 className="App-title">Bienvenue sur JDRApp</h1>
	 
			<ButtonGroup className="MenuHorizontal">
				<Button color="secondary" type="Acceuil">Acceuil</Button> {' '}
				<Button color="secondary" type="News" >News</Button>{' '}
				<Button color="secondary" type="Connexion" >Connexion</Button>
				<Button color="secondary" type="Contact" >Contact</Button>
			</ButtonGroup>
        </header>
     </div>


    );
  }
}

export default App;
