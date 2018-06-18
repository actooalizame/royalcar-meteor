import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import {CarImages}  from '../../api/CarImages';
import CreateCar from '../components/CreateCar';

export default createContainer(() => {
  Meteor.subscribe('images.all');
  const carName = Session.get('carName');
  const images = CarImages.find({carName:carName}).fetch();
  return {
    images,
  };
}, CreateCar);