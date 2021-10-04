import React, { Component } from 'react';
import axios from 'axios';

export default class test1 extends Component {
    componentDidMount() {
        axios({
            // url: "/data",
            url:"/student",
            data: {
            },
        }).then(res => {
            console.log("111测试",res.data)
        }).catch(err => {
            console.log("错误:::")
            console.error(err);
        });
    }
    

    render() {
        return (
            <div>

            </div>
        )
    }
}
