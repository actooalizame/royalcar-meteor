import React, { Component } from 'react';
import {render} from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import SingleCarImage from './SingleCarImage';

var slugify = require('slugify')

export default class CreateCar extends Component {

	constructor(props) {
    super(props);
  };


  handleChange(e) {
  	var carName = Session.get('carName');
    var files;
    files = e.currentTarget.files;
    return Cloudinary.upload(files, {
      folder: carName
    }, function(err, res) {
      console.log("Upload Error:");
      console.log(err);
      console.log("Upload Result:");
      var data = {
      		imageUrl: res.secure_url,
      		carName: Session.get('carName')
      }
      Meteor.call('insertCarImage',data)

      return console.log(data);
    });
  }

  setTitle(){
  	let carName = jQuery('.car-name').val();
  	return Session.set('carName', carName)
  }

  getImages(){
  	return this.props.images.map((image) =>{
      return <SingleCarImage key={image._id} image={image} />
    });
  }
  
  insertNewCar(e){
    e.preventDefault();
    let carName = Session.get('carName'),
        slug = slugify(carName,{
        remove: /[$*_+~.()'"!\-:@]/g,
        lower: true
      })

    let data = {
      carName,
      slug
    }

  Meteor.call('insertNewCar',data);
 
  }

  render() {
  	return(
  			<div>
  					<h3>Cloudinary Upload</h3><br/>

  					<form onSubmit={this.insertNewCar}>
  						<input type="text" name="carName" className="car-name" onBlur={this.setTitle} />
  						<input type="file" className="file_bag" onChange={this.handleChange}/>
              <button type="submit" className="waves-effect waves-light btn">Enviar Evaluación</button>
  					</form>
  					{this.getImages()}
  					
  			</div>
  		
  		)
  }

}