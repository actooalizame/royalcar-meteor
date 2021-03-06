import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import {CarImages}  from '../../api/CarImages';
import FeaturedImg from '../components/FeaturedImg';

export default createContainer((props) => {
	const carName = props.carName;
	//console.log(carName)
  const handle = Meteor.subscribe('images.featured',carName);
  
  
  const images = CarImages.find({carName:carName}, {sort: {createdAt: 1}, limit: 1}).fetch();
  return {
  	handleReady: handle.ready(),
    images
  };
}, FeaturedImg);