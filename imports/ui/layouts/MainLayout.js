import React from 'react';
import MainNav from '../components/MainNav';

const MainLayout = function({content}){
  return (
  	<div>
  		<MainNav/>
  		<div className="row">
  			<div className="col m3 l2 hide-on-small-only">
  				<h1>hola</h1>

  			</div>
  			<div className="col m9 l10 s12">
  				{content}

  			</div>
  			
  		</div>
  	</div>
  	)
}

export default MainLayout;