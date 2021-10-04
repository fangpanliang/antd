import React, { Component } from 'react';
import Header from '../../public/header/header';
import Main from './main/Main';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        )
    }
}
