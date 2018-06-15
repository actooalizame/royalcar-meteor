import { Meteor } from 'meteor/meteor';
import '../imports/startup/server';

Meteor.startup(() => {
  // code to run on server at startup
  Cloudinary.config({
	  cloud_name: 'gatosauriocloud9',
	  api_key: '949499676144738',
	  api_secret: 'ICCPDK9eyD_Q-t0ZYwbu_GO8jb4'
	});
});
