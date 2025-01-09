import React, { Component } from "react";
import './css/Layout.css';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>My Website Header</h1>
                {this.props.children}
            </header>
        );
    }
}