import {FlowRouter} from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '../ui/layouts/MainLayout';
import HomeContainer from '../ui/containers/HomeContainer';
import CreateCarContainer from '../ui/containers/CreateCarContainer';

FlowRouter.route('/', {
	name: 'home',
	action(){
		mount(MainLayout, {content: <HomeContainer  />});
	}
});

FlowRouter.route('/subir-auto', {
	name: 'subirAuto',
	action(){
		mount(MainLayout, {content: <CreateCarContainer/>});
	}
});