import React, { Component } from 'react';

class NavigationBar extends Component {
    render() {
        return (
            <nav className="navigation-bar">
                <p>Home</p>
                <p>Projects</p>
                <p>About</p>
                <p>Contact</p>
            </nav>
        );
    }
}

export default NavigationBar;
