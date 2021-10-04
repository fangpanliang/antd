import React, { Component } from 'react';
import './query.css'

export default class Query extends Component {
    render() {
        return (
            <div className="queryuser">
                <center>
                    <table width="770px">
                        <thead>
                            <tr align="left"  height="100px">
                                <th>
                                    用户名:
                                    &nbsp;
                                    <input className="inputloginname" type="text" placeholder="请输入用户名" id="inputbox" width="500px"/>
                                    &nbsp;
                                    <button type="button" onClick={e => this.putUsername(this.props)}>查询</button>
                                    &nbsp;
                                    <button type="button" onClick={e => this.clearPage(this.props)}>重置</button>
                                </th>
                            </tr>
                        </thead>
                    </table>
                </center>
            </div>
        )
    }
    
    putUsername(props) {
        const inputvalue = document.getElementById("inputbox").value
        return props.getusername(inputvalue)
    }
    clearPage(props){
        document.getElementById("inputbox").value = null
        const result = true
        return props.clear(result)
    }
}
