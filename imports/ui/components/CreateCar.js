import React, { Component } from 'react';
import {render} from 'react-dom';

export default class CreateCar extends Component {

	constructor(props) {
    super(props);
  };

  componentDidMount(){
  	/*$.cloudinary.config({
	  		cloud_name: 'gatosauriocloud9',
	  		api_key: '949499676144738'
			});*/
			console.log(Cloudinary.collection.find().fetch())
  }

  handleChange(e) {
    var files;
    files = e.currentTarget.files;
    return Cloudinary.upload(files, {
      folder: "secret"
    }, function(err, res) {
      console.log("Upload Error:");
      console.log(err);
      console.log("Upload Result:");
      return console.log(res);
    });
  }

  getImages(){
  	let images = Cloudinary.collection.find().fetch().map(x => x.secure_url);
  	return images;
  }

  render() {
  	return(
  			<div>
  					<h3>Cloudinary Upload</h3><br/>
  					<input type="file" className="file_bag" onChange={this.handleChange}/>
  					{this.getImages()}
  			</div>
  		
  		)
  }

}