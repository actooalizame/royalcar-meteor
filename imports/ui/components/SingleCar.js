import React, { Component } from 'react';
import {render} from 'react-dom';
import FeaturedImgContainer from '../containers/FeaturedImgContainer';

export default class SingleCar extends Component {
	constructor(props) {
    super(props);
  };

 getFeatured(){
  	
    return <FeaturedImgContainer key={this.props.car._id} carName={this.props.car.carName} />
  
  }

 render(){
 	const link = '/auto/'+this.props.car.slug;
		return(
				<div className="col m4">
					<a href={link}>
						<div className="card">
		        <div className="card-image">
		        	{this.getFeatured()}
		          
		          <span className="card-title">{this.props.car.carName}</span>
		        </div>
		        <div className="card-content">
		          <p>{this.props.car.slug}</p>
		        </div>
		        
		      </div>


					</a>
				</div>
				
	
			)
 }
	
}