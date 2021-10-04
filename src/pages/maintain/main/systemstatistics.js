import React, { Component } from 'react';
import './systemstatistics.css'

export default class systemstatistics extends Component {
    render() {
        return (
            <div>
                <center>
                    <div className="systemstatisticsquerydiv">
                        <table>
                            <tbody>
                                <tr>
                                    <td><button className="systemstatisticsbutton">选择用户</button></td>
                                    <td>开始日期：</td>
                                    <td><input /></td>
                                    <td>结束日期：</td>
                                    <td><input /></td>
                                    <td><button className="systemstatisticsbutton">查询</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </center>


            </div>
        )
    }
}
