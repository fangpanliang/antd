import React, { Component } from 'react';
import axios from 'axios';
import Header from './header/Header';
import './resultbasedrawing.css';

export default class resultbasedrawing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawings: [],
            bigdrawings: null,
            sourcedrawing: window.location.hash.split("?")[1].split("=")[1],
        };
    }

    componentDidMount() {
        axios({
            url:"drawing/retrieve",
            data: {
            },
            method: "post",
        }).then(res => {
            this.setState({
                drawings: res.data.data,
            });
            console.log("res", res.data)
        }).catch(err => {
            console.error(err);
        });
    }

    render() {
        return (
            <div>
                <Header />
                <center>
                    <table>
                        <tbody>
                            
                            <tr>
                                <td>
                                    <div className="sourceimg"><img className="bigimg" alt="" src={this.state.sourcedrawing} /></div>
                                </td>
                                <td>
                                    <div className="resultimg"><img className="bigimg" alt="" src={this.state.bigdrawings} /></div>
                                </td>
                                <td>
                                    <div className="thumbnaildiv">
                                        <table border="1px solid">
                                            <tbody>
                                                {
                                                    this.state.drawings.map((item, index) => {
                                                        return (
                                                            <tr key={index + 1}>
                                                                <td className="thumbnailtd">
                                                                    {<img src={"http://172.31.73.208:8080/"+item.drawingUrl} alt="" className="thumbnailimg" onClick={() => this.displaybig(index)} />}
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </center>
            </div>
        )
    }
    displaybig(index) {
        this.setState({
            bigdrawings: "http://172.31.73.208:8080/"+(this.state.drawings.filter((item, indey) => indey === index))[0].drawingUrl,
        })
    }
}
