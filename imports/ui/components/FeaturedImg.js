import React, { Component } from 'react';
import {render} from 'react-dom';
import SingleCarImage from './SingleCarImage';

export default class FeaturedImg extends Component {
	constructor(props) {
    super(props);
  };


 getImage(){
 	return this.props.images.map((image) =>{

      return <SingleCarImage key={image._id} image={image} />
    });
 }

 render(){
		return(
			<div>
				{this.props.handleReady ?
					<span>{this.getImage()}</span>
					:
					<span></span>
				}
				
				
		  </div>
			)
 }
	
}