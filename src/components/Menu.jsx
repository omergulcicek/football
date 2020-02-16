import React, {Component} from "react";
import {
  Link
} from "react-router-dom";

import './../Menu.css';
 
export default class Info extends Component {
  render() {
    return (
      <nav className="menu">
        <Link to="/">Ana Sayfa</Link>
        <Link to="/players">Tüm Oyuncular</Link>
        <Link to="/random">Rastgele Oyuncu</Link>
        <Link to="/teampower">Takım Gücü</Link>
      </nav>
    );
  }
}