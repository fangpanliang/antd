import React, { Component } from 'react';
import Header from '../../../public/header/header';
import Icon from '../../index/icons/Icon';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import './header.css';


export default class header extends Component {
    render() {
        return (
            <div>
                <Header className="headerfont"
                    pagename={
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <Input className="indexInput" id="indexInput"
                                        prefix={<button className="query_base_text" type="button" onClick={() => this.query_base_text()}>按文本</button>}
                                        suffix={
                                            <a href="/#/" >
                                                <Icon />
                                                <input id="uploaddrawing" type="file" accept="image/jpg, image/jpeg" capture="camera" onChange={() => this.getdrawinginfo()}></input>
                                            </a>
                                        }
                                        />
                                    </td>
                                    <td><button className="searchagainbutton">重新搜索</button></td>
                                    <td><a href="/#/comparise"><button className="comparisonbutton">比对</button></a></td>
                                </tr>
                            </tbody>
                        </table>} 
                />
            </div>
        )
    }
}
