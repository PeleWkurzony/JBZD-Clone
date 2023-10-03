import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import './Style.css'

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className="text-white">
        <NavMenu />
        <div className="container-fluid main-content"> 
          {this.props.children}
        </div>
      </div>
    );
  }
}
