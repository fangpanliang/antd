import React, { Component } from 'react';
import logoimg from '../../public/logo/logo.png';
import './test.css'

export default class test extends Component {
    render() {
        return (
            <div>
                <img id="smallImg" src={logoimg} alt="" onMouseOver={() => this.test1()} onMouseOut={()=>this.test2()} onMouseMove={e =>this.test3(e)}/>
                <div id="smallDiv"></div>
                <div id="bigDiv"></div>
                <img id="bigImg"/>
            </div>
        )
        
    }

    test1() {
        document.getElementById("smallDiv").style.display = "block"
        document.getElementById("bigDiv").style.display = "block"
    }
    test2() {
        document.getElementById("smallDiv").style.display = "none"
        document.getElementById("bigDiv").style.display = "none"
    }
    test3(index) {
        let e = index || window.event;
        let x = e.clientX - 50;
        let y = e.clientY - 50;
        // 对移动范围进行判断
        if (x >= 200) {
            x = 200;
        }
        if (x <= 0) {
            x = 0;
        }
        if (y >= 200) {
            y = 200;
        }
        if (y <= 0) {
            y = 0;
        }
        document.getElementById("smallDiv").style.left = x + 'px';
        document.getElementById("smallDiv").style.top = y + 'px';
        document.getElementById("bigImg").style.left = -3 * x + 'px';
        document.getElementById("bigImg").style.top = -3 * y + 'px';
    }
}
