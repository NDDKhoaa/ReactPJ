import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Welcome extends Component {
    elem = '';

    componentDidMount() {
        // This is where you can perform actions after the component mounts.
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Return true or false to control whether the component should update.
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        // This is where you can perform actions after the component updates.
    }

    componentWillUnmount() {
        // This is where you can perform cleanup before the component unmounts.
    }

    render() {
        return (
            <section>
                <h1>Welcome {this.props.membername} to React by {this.props.username} with {this.props.email}</h1>
            </section>
        );
    }
}

Welcome.propTypes = {
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    membername: PropTypes.string.isRequired,
};