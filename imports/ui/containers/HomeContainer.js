import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import {Cars}  from '../../api/Cars';
import Home from '../layouts/home.js';

export default createContainer(() => {
  Meteor.subscribe('cars.all');
  //const carName = Session.get('carName');
  const cars = Cars.find({}).fetch();
  return {
    cars
  };
}, Home);