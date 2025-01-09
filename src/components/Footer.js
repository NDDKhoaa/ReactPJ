import React, { Component } from "react";
import './css/Layout.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <p>My Website Footer</p>
                {this.props.children}
            </footer>
        );
    }
}