import React, { Component } from 'react';
import {render} from 'react-dom';
import CarImagesContainer from '../containers/CarImagesContainer';

export default class CarDetails extends Component {
	constructor(props) {
    super(props);
  };
/*
 getFeatured(){
  	
    return <FeaturedImgContainer key={this.props.car._id} carName={this.props.car.carName} />
  
  }*/


getCar(){
	return this.props.carData.map((car) =>{
	  return (
	  	<div key={car._id}>
	  		<h1>{car.carName}</h1>
	  		<CarImagesContainer key={car._id} carName={car.carName} />
	  	</div>
	  	)
	});
}


 render(){
 	//const link = '/auto/'+this.props.car.slug;
		return(
				<div className="row">

					{this.props.handleReady ?
						<div>
							{this.getCar()}
						</div>
						:
						<span></span>
					}
					
				</div>
				
	
			)
 }
	
}