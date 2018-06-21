import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


export const CarImages = new Mongo.Collection('carImages');

if (Meteor.isServer){
	Meteor.publish('images.all', () => {
	  return CarImages.find({},{sort:{createdAt:-1}})
	});
  Meteor.publish('images.onlyOne', () => {
    return CarImages.find({},{sort:{createdAt:1}, limit: 1})
  });
  Meteor.publish('images.carDetails', (carName) => {
    return CarImages.find({carName},{sort:{createdAt:-1}})
  });
  Meteor.publish('images.featured', (carName) => {
    return CarImages.find({carName:carName}, {sort: {createdAt: 1}, limit: 1})
  });
}

Meteor.methods({
  'insertCarImage': function(data){
    let timestamp = (new Date()).getTime();
    CarImages.insert({
      carName: data.carName,
      imageUrl: data.imageUrl,
      createdAt: new Date(timestamp)
    });
  },
});