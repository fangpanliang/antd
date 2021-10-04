import React, { Component } from 'react';
import axios from 'axios';
import './login.css'

export default class login extends Component {

    render() {
        return (
            <div>
                <center>
                    <div>
                        <div className="loginword">登录</div>
                        <div className="inputloginname"><input type="text" placeholder="请输入用户名" id="inputName" /></div>
                        <div className="inputpasswd"><input type="password" placeholder="请输入密码" id="inputPasswd" /></div>
                    </div>
                    <div className="submit">
                        <button className="submitbutton" type="button" onClick={() => this.submit()}>提交</button>
                    </div>
                </center>
            </div>
        )
    }

    submit() {
        const inputName = document.getElementById("inputName").value
        const inputPasswd = document.getElementById("inputPasswd").value
        console.log("inputName", inputName)
        console.log("inputPasswd", inputPasswd)
        if (inputName === '' || inputPasswd === '') {
            alert('账号或密码不能为空');
        } else {
            axios({
                url: "/user/login",
                params: {
                    LoginName: inputName,
                    passwordMd5: inputPasswd
                }
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.error(err);
            });
        }


    }

}
