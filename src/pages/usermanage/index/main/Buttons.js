import React, { Component } from 'react';
import './buttons.css';

export default class Button extends Component {
    render() {
        return (
            <div>
                <center>
                    <table width="770px">
                        <tbody>
                            <tr>
                                <td>
                                    <div align="right">
                                        <button  className="buttons" type="button" onClick={e => this.displayallUsers(this.props)}>全部用户</button>
                                        &nbsp;
                                        <button className="buttons" type="button" onClick={() => this.displayUseradd()}>+新增用户</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div id="useraddwin" className="useraddwin_css">
                        <table>
                            <tbody>
                                <tr >
                                    <td>
                                        用户名:
                                        <input type="text" placeholder="请输入用户名" id="inputloginName" />
                                        &nbsp;
                                    </td>
                                    <td>
                                        姓名:
                                        <input type="text" placeholder="请输入姓名" id="inputnickName" />
                                        &nbsp;
                                    </td>
                                </tr>
                                <tr>
                                    {/* <th id="inputsex">
                                        性别:
                                        男：<input type="radio" name="Sex" value="male" />
                                        女：<input type="radio" name="Sex" value="female" />
                                        &nbsp;
                                    </th> */}
                                    <td>
                                        密码:
                                        <input type="password" placeholder="请输入密码" id="inputpasswd" />
                                        &nbsp;
                                    </td>
                                    <td>
                                        组织:
                                        <input type="text" placeholder="请输入姓名" id="inputuserGrou" />
                                        &nbsp;
                                    </td>
                                    <td>
                                        手机号:
                                        <input type="text" placeholder="请输入手机号"/>
                                        &nbsp;
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="buttons" type="button" href="#!" onClick={e => {this.getinput(this.props);this.userAdded(this.props)}}>
                            确定
                        </button>
                        &nbsp;
                        <button className="buttons" href="#!" onClick={() => this.hideWindow()}>
                            取消
                        </button>
                    </div>
                </center>
            </div>

        )
    }
    displayallUsers(props){
        document.getElementById("inputbox").value = null
        const result = true
        return props.displayallUsers(result)
    }
    displayUseradd(){
        document.getElementById("useraddwin").style.display = "block"
        document.getElementById("shadow").style.display = "block"
    }
    
    getinput(props) {
        const loginName = document.getElementById("inputloginName").value
        const nickName = document.getElementById("inputnickName").value
        const userGroup = document.getElementById("inputuserGrou").value
        const passwd = document.getElementById("inputpasswd").value
        document.getElementById("useraddwin").style.display = "none"
        document.getElementById("shadow").style.display = "none"
        const result = {loginName,nickName,userGroup,passwd}
        return props.getUserinfo(result)
    }
    userAdded(props) {
        const result = true
        return props.userAdded(result)
    }
    hideWindow() {
        document.getElementById("useraddwin").style.display = "none"
        document.getElementById("shadow").style.display = "none"
    }
}