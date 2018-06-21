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

	componentDidMount(){
		
		function explode(){
		  //$('#slider').slider();
		  $('.carousel').carousel({
		  	indicators:true,
		  	dist: -20
		  });
		  $('.materialboxed').materialbox();
		}
		setTimeout(explode, 300);
		
	}

	getImages(){
		return this.props.images.map((image) =>{
		  return (
		  	<li key={image._id}>
	        <img src={image.imageUrl} />
	        
	      </li>
		  	)
		});
	}

	captureMe(){
		let images = this.props.images;
		let urls = images.map(function(a) {return a.imageUrl;});


		images.forEach(function(item) {
		  var imageUrl = item[1];
		  /*function renameKeys(imageUrls, newKeys) {
			  const keyValues = Object.keys(imageUrls).map(key => {
			    const newKey = newKeys[key] || key;
			    return { [newKey]: imageUrls[key] };
			  });
			  return Object.assign({}, ...keyValues);
			}

			const newKeys = { imageUrl: "src" };
			const renamedObj = renameKeys(imageUrls, newKeys);*/
			
			console.log(imageUrl);
		});
		
		return (
			<p>{urls}</p>
			)
	}

	getCarrousel(){
		return this.props.images.map((image) =>{
		  return (
		  	<a className="carousel-item" href="#one!"><img className="img-reponsive" src={image.imageUrl} /></a>
		  	)
		});
	}

	getGallery(){
		return this.props.images.map((image) =>{
		  return (
		  	<div key={image._id} className="col m4">
	        <img width="139" className="materialboxed" src={image.imageUrl} />
	        <hr/>
	      </div>
		  	)
		});
	}

 render(){
 	//const link = '/auto/'+this.props.car.slug;
		return(
				<div>
						
					<div className="row">
						<div className="carousel carousel-slider">
					    {this.getCarrousel()}
					  </div>
					</div>
					
				  <hr/>
				  <div className="row">
				  	{this.getGallery()}
					</div>
					
					
				</div>
				
	
			)
 }
	
}