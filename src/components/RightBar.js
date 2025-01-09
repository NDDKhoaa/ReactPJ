import React, { Component } from "react";
import './css/Layout.css';

export default class RightBar extends Component {
    render() {
        return (
            <aside className="right-bar">
                <h2>Right Sidebar</h2>
                {this.props.children}
            </aside>
        );
    }
}