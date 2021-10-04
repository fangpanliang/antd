import React, { Component } from 'react';
import Header from '../../public/header/header';
import TabControl from './TabControl';
import Systemstatistics from './main/systemstatistics'
import Systembackup from './main/systembackup'
import Systemrecovery from './main/systemrecovery'
import './app.css'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            currenIndex: 0,
            currenTitle: "系统统计",
            
        }
    }
    render() {
        var compo
        if(this.state.currenIndex === 0){
            compo = <Systemstatistics/>
        }else if(this.state.currenIndex === 1){
            compo = <Systembackup/>
        }else{
            compo = <Systemrecovery/>
        }    
        return (
            <div>
                <Header/>
                <TabControl itemClick={index => this.itemClick(index)} titles={['系统统计','系统备份','系统恢复']}/>
                {compo}
            </div>
        )
    }
    itemClick(index){
        this.setState({
            currenIndex: index
        })
    }
}