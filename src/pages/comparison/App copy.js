import React, { Component, useEffect, useState, useMemo } from "react";
import axios from 'axios';
import Header from '../../public/header/header';
import './app.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img1: null,
        }
    }
    
    
    render() {
        
        return (
            <div>
                <Header pagename="图纸比对" />
                <center>
                    <div className="imgdiv">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="img1div"><img src="" alt="" id="img1" /></div>
                                    </td>
                                    <td>
                                        <div className="img2div"><img src="" alt="" id="img2" /></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <form method="post" action="/test" encType="multipart/form-data">
                                            <input id="uploadimg1" type="file" name="img1" accept="image/jpg, image/jpeg" capture="camera" onChange={() => this.getimg1()}></input>
                                        </form>
                                        
                                    </td>
                                    <td>
                                        <form method="post" action="/test" encType="multipart/form-data">
                                            <input id="uploadimg2" type="file" name="img2" accept="image/jpg, image/jpeg" capture="camera" onChange={() => this.getimg2()}></input>
                                        </form>
                                        
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </center>
                <center>
                    <div className="buttondiv">
                        <table>
                            <tbody>
                                <tr>
                                    <td width="50px"></td>
                                    <td width="50px"></td>
                                    <td width="50px"></td>
                                    <td width="50px"></td>
                                    <td width="50px"></td>
                                    <td width="50px">
                                        <button onClick={() => this.getcomparisonresult()}>比对</button>
                                    </td>
                                    <td width="50px"></td>
                                    <td width="50px"></td>
                                    <td width="50px">
                                        <button className="bottombutton">错误反馈</button>
                                    </td>
                                    <td width="50px">
                                        <button className="bottombutton">比对记录</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </center>

            </div>
        )
    }
    getimg1() {
        let fileData = document.querySelector("#uploadimg1").files[0];
        let formdata = new FormData();
        formdata.append("img1", fileData);
        const localUrl = URL.createObjectURL(fileData);
        document.getElementById("img1").src = localUrl
        this.setState({
            img1: formdata
        })
    }
    getimg2() {
        let fileData = document.querySelector("#uploadimg2").files[0];
        this.state.img1.append("img2", fileData);
        const localUrl = URL.createObjectURL(fileData);
        document.getElementById("img2").src = localUrl
    }
    getcomparisonresult() {
        let headers ={'Content-Type': 'multipart/form-data'}
        axios.post('http://127.0.0.1:5000/student/', this.state.img1, {headers:headers})
            .then(res => {
                var  url = "data:image/png;base64,";
                document.getElementById("img1").src = url + encodeURI(res.data['img1'])
                document.getElementById("img2").src = url + encodeURI(res.data['img2'])

            }).catch(err => {
                console.error("错误");
                console.error(err);
            });
    }
}
