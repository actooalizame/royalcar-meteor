import React, { Component } from 'react';
import {render} from 'react-dom';


export default function SingleCarImage(props) {


		return(
			<div>
		    <img src={props.image.imageUrl} alt={props.image.carName}/>
		  </div>
			)
	
}