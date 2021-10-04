// import React, { Component } from 'react'
// import Logo from '../../../public/logo/Logo';
// import './header.css'
// export default class Header extends Component {

//     render() {
//         return (
//             <div>
//                 <table className="headertable">
//                     <tbody>
//                         <tr>
//                             <td width="45px" height="20px">
//                                 <a href="/#/"><Logo /></a>
//                             </td>
//                             <td width="500px">
//                             </td>

//                             <td width="86px">
//                                 <a href="/#/comparison"><div className="topwords">图纸比对</div></a>
//                             </td>
//                             <td width="86px">
//                                 <a href="/#/drawingupload"><div className="topwords">图纸归档</div></a>
//                             </td>
//                             <td width="86px">
//                                 <a href="/#/drawingmanage"><div className="topwords">图档管理</div></a>
//                             </td>
//                             <td width="86px">
//                                 <a href="/#/maintain"><div className="topwords">系统维护</div></a>
//                             </td>
//                             <td width="86px">
//                                 <a href="/#/logmanage"><div className="topwords">日志管理</div></a>
//                             </td>
//                             <td width="86px">
//                                 <a href="/#/usermanage"><div className="topwords">用户管理</div></a>
//                             </td>
//                             <td width="86px">
//                                 <a href="/#/login"><div className="topwords">登录</div></a>
//                             </td>
//                             <td width="86px">
//                                 <a href="/#/test"><div className="topwords">测试</div></a>
//                             </td>

//                         </tr>
//                     </tbody>
//                 </table>
//                 <hr className="hrline"/>
//             </div>
//         )
//     }
// }

import React, { Component } from 'react'
import Logo from '../../../public/logo/Logo';
import './header.css'
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

export default class Head extends Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" >
                        <Logo />
                    </div>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key='1'> 图纸对比 </Menu.Item>
                        <Menu.Item key='2'> 图纸归档 </Menu.Item>
                        <Menu.Item key='3'> 图档管理 </Menu.Item>
                        <Menu.Item key='4'> 系统维护 </Menu.Item>
                        <Menu.Item key='5'> 日志管理 </Menu.Item>
                        <Menu.Item key='6'> 用户管理 </Menu.Item>
                        <Menu.Item key='7'> 登录 </Menu.Item>
                        {/* {new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })} */}
                    </Menu>
                </Header>
                <Content style={{ padding: '0 10px', margin: '16px 0' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
                    <div className="site-layout-content">Content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }

}