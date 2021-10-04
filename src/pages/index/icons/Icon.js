
import React, { Component } from 'react';
import iconimg from './icon.png';
import './icon.css';

export default class Icon extends Component {
    render() {
        return (
            <div>
                <img src={iconimg} alt="" className="icon"/>
            </div>
        )
    }
}


