import React, { Component } from 'react';
import axios from 'axios';
import Query from './Query';
import Button from './Buttons';

export default class Usertable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: null,
            newusers: null,
            msg: "",
        };
    }

    componentDidMount() {
        axios({
            // url: "http://127.0.0.1:3003/data",
            url:"/user/list",
            params: {
            }
        }).then(res => {
            console.log("res:",res)
            this.setState({
                // users: res.data.data,
                // newusers: res.data.data
                users: res.data.page.list,
                newusers: res.data.page.list
            });
            console.log("user.data", res.data.page.list)
        }).catch(err => {
            console.error(err);
        });
    }



    renderalluser() {
        return (
            <div>
                <center>
                    <table border="1" border-color="#5B5B5B" width="770px" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>用户名</th>
                                <th>姓名</th>
                                <th>所在组织</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.newusers.map((item, index) => {
                                    return (
                                        <tr key={index + 1}>
                                            <td align="center">
                                                {item.loginName}
                                            </td>
                                            <td align="center">
                                                {item.nickName}
                                            </td>
                                            <td align="center">
                                                {item.userGroup}
                                            </td>
                                            <td align="center" width="380px">
                                                <button className="buttons" type="button">分配权限</button>
                                                &nbsp;
                                                <a href="/#/passwd">
                                                    <button className="buttons" type="button">修改密码</button>
                                                </a>
                                                &nbsp;
                                                <button className="buttons" type="button" onClick={e => this.removeUser_of_all(index)}>
                                                    删除用户
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </center>
            </div >
        )
    }

    renderqueryuser() {
        return (
            <div>
                <center>
                    <table border="1" border-color="#5B5B5B" width="770px" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>用户名</th>
                                <th>姓名</th>
                                <th>所在组织</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map((item, index) => {
                                    return (
                                        <tr key={index + 1}>
                                            <td align="center">
                                                {item.loginName}
                                            </td>
                                            <td align="center">
                                                {item.nickName}
                                            </td>
                                            <td align="center">
                                                {item.userGroup}
                                            </td>
                                            <td align="center" width="380px">
                                                <button className="buttons" type="button">分配权限</button>
                                                &nbsp;
                                                <a href="/#/passwd">
                                                    <button className="buttons" type="button">修改密码</button>
                                                </a>
                                                &nbsp;
                                                <button className="buttons" type="button" onClick={e => this.removeUser_of_query(index)}>
                                                    删除用户
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </center>
            </div>
        )
    }

    renderEmpty() {
        return (
            <div>
            </div>
        )
    }

    render() {
        let Message
        if (this.state.msg === ("")) {
            Message = (
                this.renderEmpty()
            )
        } else if (this.state.msg === true) {
            Message = (
                this.renderalluser()
            )
        } else {
            Message = (
                this.renderqueryuser()
            )
        }

        return (
            <div>
                <Query getusername={e => this.getUsername(e)} clear={() => this.clear()} />
                <Button displayallUsers={() => this.displayallUsers()} userAdded={e => this.userAdded(e)} getUserinfo={e => this.getUserinfo(e)} />
                {Message}
            </div>
        )
    }
    getUsername(msg_input) {
        msg_input === "" ? console.log("请输入用户名") : console.log("msg_input", msg_input)
        this.setState({
            msg: msg_input,
            users: this.state.newusers.filter(item => item.loginName === msg_input)
        })
        axios({
            url:"/queryUserByLoginName",
            params: {
                LoginName:msg_input
            }
        }).then(res => {
            console.log("LoginNameres查询用户")
        }).catch(err => {
            console.error(err);
        });


    }
    clear() {
        this.setState({
            users: this.state.newusers,
            msg: ""
        })
    }
    displayallUsers() {
        this.setState({
            msg: true
        })

    }
    getUserinfo(e) {
        axios({
            url:"/user/save",
            data: {"loginName":e.loginName},
            method: 'post',
        }).then(res => {
            console.log("用户添加成功")
        }).catch(err => {
            console.log("错误 ")
            console.error(err);
        });
    }
    userAdded() {
        axios({
            url:"/user/list",
            params: {
            }
        }).then(res => {
            this.setState({
                users: res.data.page.list,
                newusers: res.data.page.list
            });
            console.log("userAdded更新成功",)
        }).catch(err => {
            console.error(err);
        });
    }
    removeUser_of_all(index) {
        this.setState({
            newusers: this.state.newusers.filter((item, indey) => index !== indey)
        })
        const userid=this.state.newusers[index].userId
        console.log("userid",userid)
        axios({
            url:"/user/delete1",
            params: {
                userId:userid
            }
        }).then(res => {
            console.log("removeUser_of_all")
        }).catch(err => {
            console.error(err);
        });
    }
    removeUser_of_query(index) {
        this.setState({
            users: this.state.users.filter((item, indey) => index !== indey),
            newusers: this.state.newusers.filter((item, indey) => index !== indey),
        })
        const userid=this.state.newusers[index].userId
        axios({
            url:"/user/delete1",
            params: {
                userId:userid
            }
        }).then(res => {
            console.log("removeUser_of_query")
        }).catch(err => {
            console.error(err);
        });
    }

}
