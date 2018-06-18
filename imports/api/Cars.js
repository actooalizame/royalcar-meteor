import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


export const Cars = new Mongo.Collection('cars');

if (Meteor.isServer){
	Meteor.publish('cars.all', () => {
	  return Cars.find({},{sort:{createdAt:-1}})
	});
  Meteor.publish('cars.single', (slug) => {
    return Cars.find({slug:slug}, {sort: {createdAt: -1}, limit: 1})
  });
}

Meteor.methods({
  'insertNewCar': function(data){
    let timestamp = (new Date()).getTime();
    Cars.insert({
      carName: data.carName,
      slug: data.slug,
      createdAt: new Date(timestamp)
    });
  },
});