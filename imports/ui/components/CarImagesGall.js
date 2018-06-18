import React, { Component } from 'react';
import {render} from 'react-dom';
//import FeaturedImgContainer from '../containers/FeaturedImgContainer';

export default class CarImagesGall extends Component {
	constructor(props) {
    super(props);
  };
/*
 getFeatured(){
  	
    return <FeaturedImgContainer key={this.props.car._id} carName={this.props.car.carName} />
  
  }*/


getImages(){
	return this.props.images.map((image) =>{
	  return (
	  	<div key={image._id}>
	  		<img className="responsive-img" src={image.imageUrl} alt={image.carName}/>
	  		
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
							{this.getImages()}
						</div>
						:
						<span></span>
					}
					
				</div>
				
	
			)
 }
	
}