import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../public/header/header';
import './app.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploaddrawing: [
                {
                    drawingname: "",
                    uploadstate: "",
                    oprate: ""
                },
            ],
            formdata1: null
        }
    }
    render() {
        return (
            <div>
                <Header pagename="图纸归档" />
                <center>
                    <div className="toplabeldiv">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        标签名称：
                                    </td>
                                    <td>
                                        <input className="topinputline" type="text" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </center>
                <center>
                    <div className="uploadlistdiv">
                        <table border="1px solid">
                            <thead>
                                <tr>
                                    <th>图纸名称</th>
                                    <th>上传状态</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>


                                {this.state.uploaddrawing.map((item, index) => {
                                    return (
                                        <tr key={index + 1} height="30px">
                                            <td className="drawingnametd" align="center">
                                                {item.drawingname}
                                            </td>
                                            <td className="uploadstatetd" align="center">
                                                {item.uploadstate}
                                            </td>
                                            <td className="opratetd" align="center">
                                                <a href="/#" onClick={() => this.deletedata()}>{item.oprate}</a>
                                            </td>
                                        </tr>
                                    )
                                })}

                                <tr height="30px">
                                    <td className="drawingnametd">
                                    </td>
                                    <td className="uploadstatetd">
                                    </td>
                                    <td className="opratetd">
                                    </td>
                                </tr>
                                <tr height="30px">
                                    <td className="drawingnametd">
                                    </td>
                                    <td className="uploadstatetd">
                                    </td>
                                    <td className="opratetd">
                                    </td>
                                </tr>
                                <tr height="30px">
                                    <td className="drawingnametd">
                                    </td>
                                    <td className="uploadstatetd">
                                    </td>
                                    <td className="opratetd">
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </center>
                <center>
                    <div id="uploadbottombuttondiv">
                        <table>
                            <tbody>
                                <tr>
                                    <td width="320px"></td>
                                    <td>
                                        <input id="singlefile" type="file" name="multipartFile" multiple="multiple" accept="image/jpg, image/jpeg" onChange={() => this.getinputdrawing()}></input>
                                    </td>
                                    <td>
                                        <button className="uploadbottombutton" id="singlefilebutton">选择文件</button>
                                    </td>
                                    <td>
                                        <button className="uploadbottombutton" onClick={() => this.putdrawings()}>开始上传</button>
                                    </td>
                                    <td>
                                        <button className="uploadbottombutton" onClick={() => this.clearuploadDrawing()}>重置</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </center>
            </div>
        )
    }

    // getinputdrawing() {

    //     let fileData = document.querySelector("#singlefile").files[0];
    //     let formdata = new FormData();
    //     formdata.append("multipartFile", fileData);
    //     this.setState({
    //         uploaddrawing: [
    //             {
    //                 drawingname: fileData.name,
    //                 uploadstate: "等待上传",
    //                 oprate: "删除"
    //             }
    //         ],
    //         fileData1: fileData.name,
    //         formdata1: formdata
    //     })
    //     // let fileData = document.querySelector("#singlefile").files[0];
    //     // const localUrl = URL.createObjectURL(fileData)
    //     // this.setState({
    //     //     uploaddrawing: [
    //     //         {
    //     //             drawingname: fileData.name,
    //     //             uploadstate: "等待上传",
    //     //             oprate: "删除"
    //     //         }
    //     //     ],
    //     //     formdata1:  fileData
    //     // })
    //     // console.log("fileData:", fileData)
    //     // const localUrl = URL.createObjectURL(fileData) 


    //     // axios.post('/drawing/upload', formdata)
    //     //     .then(res => {
    //     //         if (res.data.msg === "success"){console.log("成功")}
    //     //     }).catch(err => {
    //     //         console.error("错误");
    //     //         console.error(err);
    //     //     });    

    //     // var fd = new FormData();
    //     // var iLen = fileData.length;
    //     // console.log("iLen", iLen)
    //     // for (var i = 0; i < iLen; i++) {
    //     //     var render = new FileReader();
    //     //     render.readAsDataURL(fileData[i])
    //     //     render.onload = function (e) {
    //     //         result = '<div id="result"><img src="' + this.result + '" alt=""/></div>';
    //     //         div = document.createElement('div');
    //     //         div.innerHTML = result;
    //     //         document.getElementById('body').appendChild(div);
    //     //     }
    //     // }

    // }

    getinputdrawing() {
        var drawing = document.querySelector("#singlefile").files

        // this.setState({
        //     uploaddrawing: document.querySelector("#singlefile").files,
        // });
        // console.log(uploaddrawing)
        // const localUrl = URL.createObjectURL(drawing) 
        //#myArray = this.state.uploaddrawing
        var myArray = []
        //myArray = this.state.uploaddrawing
        if (this.state.uploaddrawing[0]['drawingname'] === ''){
            
        }
        else{
            myArray = this.state.uploaddrawing
        }
        var formdata = new FormData();
        for (var i = 0; i < drawing.length; i++) {
            var d = {}
            
            var fileData = document.querySelector("#singlefile").files[i];
            formdata.append("multipartFile", fileData);
            // var fileData = document.querySelector("#singlefile").files[i];
            // formdata.append("multipartFile", fileData, fileData.name);
            console.log("fileData.name", fileData.name)
            //myArray[i] = fileData.name
            d['drawingname'] = fileData.name
            d['uploadstate'] = "等待上传"
            d['oprate'] = "删除"
            myArray.push(d)
            console.log("formdata:11", formdata.get("multipartFile"))
        }
        console.log("state", this.state.uploaddrawing)
        console.log("myarray", myArray)

        //myArray = this.state.uploaddrawing
        this.setState({
            uploaddrawing: myArray,})
            // console.log("formdata:",typeof(formdata))
            // console.log("formdata::", formdata.get('multipartFile'))
            // axios.get('/drawing/uploads', formdata)
            //     .then(res => {
            //         console.log(res.data)
            //         // if (res.data.msg === "success"){console.log("okk")}
            //     }).catch(err => {
            //         console.error("错误");
            //         console.error(err);
            //     });  
            // for (var i = 0;i < drawing.length; i++) {
            //     // var fileData = document.querySelector("#singlefile").files[i];
            //     // this.setState({
            //     //     uploaddrawing: document.querySelector("#singlefile").files,
            //     // });

            //     console.log("111:", document.querySelector("#singlefile").files,);
        }



    // const localUrl = URL.createObjectURL(fileData);
    // document.getElementById("img1").src = localUrl

    // }
    putdrawings() {
            axios.post('/drawing/upload', this.state.formdata1)
                .then(res => {
                    if (res.data.msg === "success") {
                        this.setState({
                            uploaddrawing: [
                                {
                                    drawingname: this.state.fileData1,
                                    uploadstate: "上传成功",
                                    oprate: "删除"
                                }
                            ],
                        })
                    }
                }).catch(err => {
                    console.error("错误");
                    console.error(err);
                });
        }
    clearuploadDrawing() {
            this.setState({
                uploaddrawing: [
                    {
                        drawingname: "",
                        uploadstate: "",
                        oprate: ""
                    }
                ],
            })
        }
    deletedata() {
            this.setState({
                uploaddrawing: [
                    {
                        drawingname: "",
                        uploadstate: "",
                        oprate: ""
                    }
                ],
            })
        }
}
