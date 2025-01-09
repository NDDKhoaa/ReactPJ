import React, { Component } from "react";
import './css/Layout.css';

export default class LeftBar extends Component {
    render() {
        return (
            <aside className="left-bar">
                <h2>Left Sidebar</h2>
                {this.props.children}
            </aside>
        );
    }
}