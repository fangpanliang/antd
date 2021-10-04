import React, { PureComponent } from 'react';
import './systembackup.css'

export default class systembackup extends PureComponent {
    render() {
        return (
            <div id="systembackupdiv">
                    <div><h3>自动备份</h3></div>
                    <span id="autobackupspan">数据库自动备份时间间隔:</span>
                    <span><input></input></span>
                    <div><h3>手动备份</h3></div>
                    <button id="backupbutton">一键备份</button><span>一键备份当前系统存储数据</span>
                

            </div>
        )
    }
}
