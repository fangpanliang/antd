import React, { Component } from 'react';
import Header from '../../../public/header/header'
import Main from './Main';


export default class App extends Component {
    render() {
        return (
            <div>
                <Header pagename="用户管理"/>
                <Main/>
            </div>
        )
    }
}
