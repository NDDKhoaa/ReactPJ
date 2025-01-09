import React, { Component } from "react";
import './css/MemberInfo.css'

export default class MemberInfo extends Component {
    render() {
        return <span>{this.props.membername}</span>
    }
}