import React, { Component } from 'react';
import Header from '../../public/header/header';
import './app.css';


export default class App extends Component {
    render() {
        return (
            <div>
                <Header pagename="图档管理"/>
                <center>
                    <div className="topquerydiv">
                        <table>
                            <tbody>
                                <tr>
                                    <td id="drawingname">
                                        图纸名称：
                                    </td>
                                    <td>
                                        <input/>
                                    </td>
                                    <td id="drawinglabel">
                                        图纸标签：
                                    </td>
                                    <td>
                                        <input className="labelinputline" type="text"/>
                                    </td>
                                    <td id="drawingquerybutton">
                                        <button className="topbutton">查询</button>
                                    </td>
                                    <td>
                                        <button className="topbutton">重置</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </center>
                <center>
                    <div className="drawingtablediv">
                        <table border="1px solid">
                            <thead>
                                <tr>
                                    <th>操作</th>
                                    <th>图片名称</th>
                                    <th>图片标签</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr height="30px">
                                    <td className="drawingmanageopratetd"></td>
                                    <td className="drawingmanagedrawingnametd"></td>
                                    <td className="drawingmanagedrawinglabeltd"></td>
                                </tr>
                                <tr height="30px">
                                    <td className="drawingmanageopratetd"></td>
                                    <td className="drawingmanagedrawingnametd"></td>
                                    <td className="drawingmanagedrawinglabeltd"></td>
                                </tr>
                                <tr height="30px">
                                    <td className="drawingmanageopratetd"></td>
                                    <td className="drawingmanagedrawingnametd"></td>
                                    <td className="drawingmanagedrawinglabeltd"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </center>
            </div>
        )
    }
}
