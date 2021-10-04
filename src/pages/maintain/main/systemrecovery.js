import React, { PureComponent } from 'react';
import './systemrecovery.css'

export default class systemrecovery extends PureComponent {
    render() {
        return (
            <div id="systemrecoverydiv">
                <span>
                    <h3>系统恢复</h3>
                    <span>
                        <button id="recoverybutton">一键恢复</button>
                    </span>
                    <span>
                        导入系统数据文件，恢复系统历史版本
                    </span>
                </span>
                <span>
                    <h3 id="initialh3">系统初始化</h3>
                    <span>
                        <button id="initialbutton">一键初始化</button>
                    </span>
                    <span>
                        初始化系统，一键清空系统数据
                    </span>
                </span>
            </div>
        )
    }
}
