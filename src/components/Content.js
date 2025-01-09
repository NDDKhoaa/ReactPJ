import React, { Component } from "react";
import './css/Layout.css';

export default class Content extends Component {
    render() {
        return (
            <main className="content" style={{ padding: '10px', flex: '1' }}>
                <h2>Main Content Area</h2>
                {this.props.children}
            </main>
        );
    }
}