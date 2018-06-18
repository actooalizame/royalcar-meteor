import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import {CarImages}  from '../../api/CarImages';
import SingleCar from '../components/SingleCar';

export default createContainer((props) => {
  Meteor.subscribe('images.all');
  const carName = props.car.carName;
  console.log(carName)
  const images = CarImages.findOne({carName:carName});
  return {
  	carName,
    images
  };
}, SingleCar);