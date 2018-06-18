import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import {Cars}  from '../../api/Cars';
import {CarImages}  from '../../api/CarImages';
import CarDetails from '../components/CarDetails';

export default createContainer((props) => {
	let slug = FlowRouter.getParam('slug');
  const handle = Meteor.subscribe('cars.single',slug);
 

  //const images = CarImages.find({slug}).fetch();
  const car = Cars.find({slug}).fetch();
  const carData = car.map(function(a) {return a;});
  return {
  	handleReady: handle.ready(),
  	carData,
    //images
  };
}, CarDetails);