import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import {CarImages}  from '../../api/CarImages';
import CarImagesGall from '../components/CarImagesGall';

export default createContainer((props) => {
	const carName = props.carName;
  const handle = Meteor.subscribe('images.carDetails',carName);
  
  
  const images = CarImages.find({carName},{sort:{createdAt:1}}).fetch();
  console.log(images)
  return {
  	handleReady: handle.ready(),
    images
  };
}, CarImagesGall);