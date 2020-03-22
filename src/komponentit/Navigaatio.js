import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import "../App.css";

class Navigaatio extends Component {
    render() {
        return (
            <div>
                <NavLink className= "navi" to="/">Koti</NavLink> 
                <NavLink className= "navi" to="/lomakkeet">Johto</NavLink> 
                <NavLink className= "navi" to="/lomake">Henkilöstö</NavLink>
                <NavLink className= "navi" to="/tilastot">Tilastot</NavLink>
                <NavLink className= "navi" to="/lista">Lista</NavLink>
            </div>
        );
    }
}

export default Navigaatio;