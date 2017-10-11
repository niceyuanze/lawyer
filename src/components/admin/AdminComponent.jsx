import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout,Radio,Form,Row, Col, Menu, Icon,Input, Button, Checkbox ,Modal} from 'antd';
import AdminLoginComponent from './AdminLoginComponent';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
class AdminComponent extends Component {














    constructor() {
        super();
        this.state={
            login:false,

        };
    }



    componentWillMount(){

    }




    render() {
        var content;
        if(this.state.login != false){
            content = (<AdminLoginComponent />);

        }else{
            content = (<Layout>
                <Sider　width={150 }>
                    <Menu
                        mode="inline"
                        theme="dark"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0}}
                    >
                        <SubMenu key="people" title={<span><Icon type="user" />用户管理</span>}>
                            <Menu.Item key="addUser">
                                <Link to="/admin/addAdmin" style={{color:'white'}}>增加管理员</Link>
                            </Menu.Item>
                            <Menu.Item key="deleteUser">
                                <Link to="/admin/deleteAdmin" style={{color:'white'}}>删除管理员</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="myHouse" title={<span><Icon type="laptop" />房源审核</span>}>
                            <Menu.Item key="mySecondHouse">
                                <Link to="/admin/checkSecondHandHouse" style={{color:'white'}}>审核二手房</Link>
                            </Menu.Item>

                        </SubMenu>
                        <SubMenu key="checkInformation" title={<span><Icon type="notification" />小区管理</span>}>
                            <Menu.Item key="secondHandCheck">添加小区</Menu.Item>
                        </SubMenu>
                        <SubMenu key="communityManage" title={<span><Icon type="notification" />地区管理</span>}>
                            <Menu.Item key="addAreae">添加小区</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        {/*<Route exact path="/admin/addAdmin" component={AddAdmin}/>*/}
                        {/*<Route exact path="/admin/deleteAdmin" component={DeleteAdmin}/>*/}
                        {/*<Route exact path="/admin/checkSecondHandHouse" component={CheckSecondHandHouse}/>*/}


                    </Content>
                </Layout>
            </Layout>)
        };



        return (
            <div>
                {content}
            </div>
        );
    }
}

export default AdminComponent;
