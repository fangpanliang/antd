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
    getdrawing(e) {
        let fileData = document.querySelector("#uploaddrawing").files[0];
        const localUrl = URL.createObjectURL(fileData) 
        // const reader = new FileReader()
        // reader.readAsDataURL(fileData)
        // // console.log("localUrl", localUrl)
        // reader.onload = function () {
        //     {console.log(this.result)}
        //     // {document.getElementById("test").src=this.result}
        //     // axios({
        //     //     url: "/drawing/upload",
        //     //     method: "post",
        //     //     data: {
        //     //         "drawingUrl": this.result,
        //     //         "drawingName": fileData.name,
        //     //     },
        //     //     // data: {"file":fileData},
        //     //     headers: { 'Content-type': 'application/json' },
        //     // }).then(res => {
        //     //     console.log("res.data",res.data)
        //     //     // if (res.data.msg === "success") {
        //     //     //     this.setState({
        //     //     //         issucces: true
        //     //     //     });
        //     //     //     // document.getElementById("test").src=localUrl
        //     //     // } else {
        //     //     //     this.setState({
        //     //     //         issucces: false
        //     //     //     });
        //     //     // }
        //     //     // console.log("issucces:", this.state.issucces)
        //     // }).catch(err => {
        //     //     console.error("错误");
        //     //     console.error(err);
        //     // });




        //     axios.post('/drawing/upload', { "drawingName": fileData.name })
        //     .then(res => {
        //         console.log("res:", res.data)
        //         console.log("成功")
        //     }).catch(err => {
        //         console.error("错误");
        //         console.error(err);
        //     });
        // }
        // this.state.issucces === false ? console.log() : window.location.href = '/#/drawingtrieval?drawingUrl=' + localUrl;
        
        let formdata = new FormData();
        formdata.append("multipartFile", fileData);
        axios.post('/drawing/upload', formdata)
            .then(res => {
                if (res.data.msg === "success"){window.location.href = '/#/drawingtrieval?drawingUrl=' + localUrl }
            }).catch(err => {
                console.error("错误");
                console.error(err);
            });

        // }


        // //这是正确的
        // let formdata = new FormData();
        // formdata.append("multipartFile", fileData)
        // // console.log("formdata::", formdata.get('file'))
        // // console.log("fileData.File:",fileData)
        // // console.log("localUrl:",localUrl)
        
        // axios.post('drawing/retrieve', formdata)
        //     .then(res => {
        //         console.log("res:", res.data.data)
        //         this.setState({
        //             drawings:res.data.data
        //         })
        //         // if (res.data.msg === "success") { window.location.href = '/#/drawingtrieval?drawingUrl=' + localUrl + ',' + JSON.stringify(res.data.data) }
        //         // console.log("res:", res.data.data)
        //         // console.log("成功")
        //         // this.setState({
        //         //                     issucces: true,
        //         //                     drawingimg: res.data.data,
        //         //                     inputdrawing: localUrl
        //         //                 });
        //         // {document.getElementById("test").src="http://172.31.73.208:8080"+'/static/'+fileData.name}
        //     }).catch(err => {
        //         console.error("错误");
        //         console.error(err);
        //     });


        // {console.log("issucces",this.state.issucces)}
        // {console.log("drawingimg",this.state.drawingimg)}
        // this.state.issucces === false ? console.log() : window.location.href = '/#/drawingtrieval?drawingUrl=' + localUrl + ','+this.state.drawingimg;



        // // document.getElementById("test").src=localUrl
        // axios({
        //     url:"/drawing/save",
        //     method: "post",
        //     data: {file: formdata},

        //     // data: {"drawing":[{"drawing_url":"blob:http://localhost:3000/ffde433b-2333-40c2-8003-1b4808837f14"}],}
        //     // data: {
        //     //     drawing:[{drawing_url:localUrl},
        //     //     {drawing_name: fileData.name }],
        //     //     // drawing_name: fileData.name ,
        //     //     file: localUrl,
        //     // },
        //     headers:{'Content-type':'application/json'},
        // }).then(res => {
        //     console.log("res:",res)
        //     console.log("成功")
        // }).catch(err => {
        //     console.error("错误");
        //     console.error(err);
        // });
        // fileData === undefined? console.log(): window.location.href='/#/drawingtrieval';
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
