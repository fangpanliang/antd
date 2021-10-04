import React, { Component } from 'react';
import './passwd.css'

export default class passwd extends Component {

    render() {
        return (
            <div>
                <center>
                    <div>
                        <div className="oldpasswd"><input type="password" placeholder="请输入旧密码" id="inputOldpasswd" /></div>
                        
                        <div className="newpasswd"><input type="password" placeholder="请输入新密码" id="inputNewpasswd" /></div>
                        
                        <div className="newpasswdagain"><input type="password" placeholder="请再次输入新密码" id="inputNewpasswdagain" /></div>
                    </div>
                    <div>
                        <button className="okbutton" type="button" onClick={() => this.submit()}>确定</button>
                    </div>
                </center>
            </div>
        )
    }

    submit() {
        const inputOldpasswd = document.getElementById("inputOldpasswd").value
        const inputNewpasswd = document.getElementById("inputNewpasswd").value 
        const inputNewpasswdagain = document.getElementById("inputNewpasswdagain").value 
        console.log("inputOldpasswd",inputOldpasswd)
        console.log("inputNewpasswd",inputNewpasswd)
        console.log("inputNewpasswdagain",inputNewpasswdagain)
        // axios({
        //     url:"/queryUserByLoginName",
        //     params: {
        //         LoginName:inputName，
        //         password:inputPasswd
        //     }
        // }).then(res => {
        //     console.log("验证用户登录")
        // }).catch(err => {
        //     console.error(err);
        // });
    }

}
