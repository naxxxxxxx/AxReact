import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';


export default class Aside extends Component {
    render() {
        return (
            <div className="aside">
                <Link to="Home">Home</Link>
                <Link to="Form">Form</Link>
                <Link to="Buttons">Buttons</Link>
            </div>
        );
    }
}

