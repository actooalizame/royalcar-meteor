import React from 'react';
import MainNav from '../components/MainNav';

const MainLayout = function({content}){
  return (
  
    	<div className="container">
    		<MainNav/>
    		<div className="row">
    			<div className="col m3 l2 hide-on-small-only">
    				<img className="responsive-img logo-img" src="http://www.royalcar.cl/wp-content/themes/Divi/images/logo.png" alt=""/>

    			</div>
    			<div className="col m9 l10 s12">
    				{content}

    			</div>
    			
    		</div>
    	</div>
   
  	)
}

export default MainLayout;