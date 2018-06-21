import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import {CarImages}  from '../../api/CarImages';
import SingleCar from '../components/SingleCar';

export default createContainer((props) => {
  
  const carName = props.car.carName;
 Meteor.subscribe('images.featured',carName);
  const images = CarImages.findOne({carName:carName});
  return {
  	carName,
    images
  };
}, SingleCar);