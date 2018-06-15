import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/routes.js';

Meteor.startup(() => {
	$.cloudinary.config({
  		cloud_name: 'gatosauriocloud9',
  		api_key: '949499676144738'
		});
  render(renderRoutes(), document.getElementById('app'));
});