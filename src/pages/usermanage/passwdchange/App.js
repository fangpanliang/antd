import React, { Component } from 'react';
import Header from '../../../public/header/header';
import Passwd from './Passwd';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header pagename="修改密码" />
                <Passwd/>
            </div>
        )
    }
}
