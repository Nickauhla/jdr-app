import React, { Component } from 'react';
import './AccueilComponent.css';
import { Button, ButtonGroup } from 'reactstrap';

class AccueilComponent extends Component {
  render() {
    return (
        <p className="App-intro">
          <img className="IntroImage" src="https://i.pinimg.com/originals/8d/e6/61/8de6615b56b052a04c4e6f8ee77417dd.jpg"/>
	          
          	<div className="Intro">
	          <body className="IntroText">
	          		Bienvenue sur l'application...<br />
	          		Le site est en cours de développement, et il n'est pas nécessaire de s'inquiéter de l'absence de page...
	          </body>
	        </div>
        </p>
    );
  }
}

export default AccueilComponent;