import React, {Component} from 'react';
import {render} from 'react-dom';



export default class MainNav extends Component {

  componentDidMount(){
   jQuery('.button-collapse').sideNav();
  }


  render(){
    return(
      <nav className="grey darken-4 hide-on-med-and-up">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo" data-transition-out="scaleOut onTop" data-transition-in="scaleIn onTop"><img className="responsive-img" src="/images/logo-enef2.png" alt="" /></a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="#">Mis Cotizaciones</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#"><i className="fa fa-facebook-official"></i></a></li>
          </ul>
        </div>
      </nav>
           
      
      
      )
  }
}

