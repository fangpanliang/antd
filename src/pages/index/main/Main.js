import React, { Component } from 'react';
import axios from 'axios';
import logoimg from '../../../public/logo/logo.png';
import Icon from '../icons/Icon';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import './main.css';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <center>
                    <div className="logodiv"><img src={logoimg} alt="" /></div>
                    <table className="maintable">
                        <tbody>
                            <tr>
                                <td>
                                    <Input className="indexInput" id="indexInput"

                                        prefix={<button className="query_base_text" type="button" onClick={() => this.query_base_text()}>按文本</button>}
                                        suffix={
                                            <a href="/#/" >
                                                <Icon />
                                                <input id="uploaddrawing" type="file" name="multipartFile" accept="image/jpg, image/jpeg" capture="camera" onChange={(e) => this.getdrawing(e)}></input>
                                            </a>
                                        }
                                    />
                                </td>
                                <td>
                                    <button className="retrievalbutton" type="button" onClick={() => this.gototextretrievalresult()}>搜 索</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </center>

                <div id="query_base_text_win">
                    <table align="center" className="query_base_text_table">
                        <tbody>
                            <tr>
                                <td colSpan="2" id="texttitle">按文本搜索</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>图纸名称：</td>
                                <td><input type="text" id="inputname" /></td>
                            </tr>
                            <tr>
                                <td>图纸标签：</td>
                                <td><input type="text" id="inputlabel" /></td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <button className="okbutton" type="button" onClick={() => this.gettextinput()}>确定</button>
                                    &nbsp;&nbsp;&nbsp;
                                    <button className="okbutton" type="button" onClick={() => this.hidetextWindow()}>取消</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
    query_base_text() {
        document.getElementById("query_base_text_win").style.display = "block"
        document.getElementById("shadow").style.display = "block"
    }
    getdrawing() {
        let fileData = document.querySelector("#uploaddrawing").files[0];
        const localUrl = URL.createObjectURL(fileData)

        let formdata = new FormData();
        formdata.append("multipartFile", fileData);
        console.log("formdata)",typeof(formdata))
        axios.post('/drawing/upload', formdata)
            .then(res => {
                if (res.data.msg === "success") { window.location.href = '/#/drawingtrieval?drawingUrl=' + localUrl }
            }).catch(err => {
                console.error("错误");
                console.error(err);
            });
    }

    gototextretrievalresult() {
        const inputinfo = document.getElementById("indexInput").value
        if (inputinfo === "") {
            console.log("请输入图纸名或图纸标签")
        } else {
            window.location.href = '/#/textretrieval';
        }
    }
    gettextinput() {
        const name = document.getElementById("inputname").value
        const label = document.getElementById("inputlabel").value
        document.getElementById("query_base_text_win").style.display = "none"
        document.getElementById("shadow").style.display = "none"
        document.getElementById("indexInput").value = `name:${name};label:${label}`
    }
    hidetextWindow() {
        document.getElementById("query_base_text_win").style.display = "none"
        document.getElementById("shadow").style.display = "none"
    }
}
