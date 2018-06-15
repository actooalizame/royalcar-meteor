import React, { Component } from 'react';
import {render} from 'react-dom';


export default class SingleCarImage extends Component {

	constructor(props) {
    super(props);
  };

  render(){
		return(
			<div>
		    <img src={this.props.image.imageUrl} alt=""/>
		  </div>
			)
	}
}