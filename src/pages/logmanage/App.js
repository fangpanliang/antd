import React, { Component } from 'react';
import Header from '../../public/header/header';
import { Input, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import './app.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header pagename="日志管理" />
                <center>
                    <div className="logmanagemaindiv">
                        <div className="selectdatadiv">
                            <table>
                                <tbody>
                                    <tr>
                                        <td id="dataselecttd">
                                            <Input.Group compact>
                                                <Input style={{ width: '30%' }} defaultValue="选择日期" />
                                                <DatePicker.RangePicker style={{ width: '70%' }} />
                                            </Input.Group>
                                        </td>
                                        <td id="inputname">
                                            用户名：
                                        </td>
                                        <td>
                                            <input />
                                        </td>
                                        {/* <td>
                                            开始日期：
                                        </td>
                                        <td>
                                            <input type="date" />
                                        </td>
                                        <td id="enddata">
                                            结束日期：
                                        </td>
                                        <td>
                                            <input type="date" />
                                        </td> */}
                                        <td id="selectuserbutton">
                                            <button className="logmanagebutton" onClick={() => this.selectuser()}>选择用户</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bottombuttondiv">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <button className="logmanagebutton">导出日志</button>
                                        </td>
                                        <td>
                                            <button className="logmanagebutton">重置</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </center>
                <div id="select_user_win">
                    <table className="" align="center">
                        <tbody>
                            <tr>
                                <td colSpan="3" id="userchoose">用户选择</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><input type="text" id="" /></td>
                                <td><button>查询</button></td>
                                <td><button>此用户</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="1px solid" id="userselecttable">
                        <thead>
                            <tr>
                                <th>
                                    选择
                                </th>
                                <th>
                                    用户名
                                </th>
                                <th>
                                    姓名
                                </th>
                                <th>
                                    所在组织
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <center>
                        <div id="buttondiv">
                            <span><button onClick={() => this.userselectbutton()}>确定</button></span>
                            <span><button id="cancelbutton" onClick={()=> this.hidetextWindow()}>取消</button></span>
                        </div>

                    </center>
                </div>
            </div>
        )
    }
    selectuser() {
        document.getElementById("select_user_win").style.display = "block"
        document.getElementById("shadow").style.display = "block"
    }
    userselectbutton() {
        document.getElementById("select_user_win").style.display = "none"
        document.getElementById("shadow").style.display = "none"
    }
    hidetextWindow() {
        document.getElementById("select_user_win").style.display = "none"
        document.getElementById("shadow").style.display = "none"
    }

}