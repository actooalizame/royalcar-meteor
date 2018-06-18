import React, { Component } from 'react';
import {render} from 'react-dom';
import SingleCar from '../components/SingleCar';
//import SingleCarContainer from '../containers/SingleCarContainer';

export default class Home extends Component {
	constructor(props) {
    super(props);
  };

  getCars(){
  	return this.props.cars.map((car) =>{
      return <SingleCar key={car._id} car={car} />
    });
  }

  render() {
  	return(
  		<div>
  			<h3>Hola Viejas Por la chuchaaaa</h3>
  			{this.getCars()}
  		</div>
  		
  		)
  }

}