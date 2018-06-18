import {FlowRouter} from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '../ui/layouts/MainLayout';
import Home from '../ui/layouts/home';
import CreateCarContainer from '../ui/containers/CreateCarContainer';

FlowRouter.route('/', {
	name: 'home',
	action(){
		mount(MainLayout, {content: <Home  />});
	}
});

FlowRouter.route('/subir-auto', {
	name: 'subirAuto',
	action(){
		mount(MainLayout, {content: <CreateCarContainer/>});
	}
});