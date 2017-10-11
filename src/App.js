import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import ContactComponent from './components/contact/ContactComponent';
import AdminComponent from './components/admin/AdminComponent';

import { Layout, Menu, Icon, Row, Col,Dropdown } from 'antd';
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
const menu = (
    <Menu>
        <Menu.Item><Link to="/about">团队介绍</Link></Menu.Item>
        <Menu.Item><Link to="/about">律师介绍</Link></Menu.Item>
        <Menu.Item><Link to="/about">行业咨询</Link></Menu.Item>
        <Menu.Item><Link to="/about">法律咨询</Link></Menu.Item>
        <Menu.Item><Link to="/contact">联系我们</Link></Menu.Item>

    </Menu>
);

class App extends Component {


    state = {
        current: 'mail',
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

  render() {
    return (
        <Router>
            <Layout>
                <Header className="header"　
                        style={{ width:'100%',height:'48px',background:"white" }}
                        breakpoint="lg" collapsedWidth="0"
                >
                    <Row style={{ width:'100%',height:'48px',background:"" }}>
                        <Col xs={4}　sm={0} md={0} lg={0}  ></Col>
                        <Col xs={18}　sm={5} md={5} lg={5}  style={{lineHeight:"50px",fontSize:"13px"}}>超级强的律师事务所</Col>
                        <Col xs={1}　sm={0} md={0} lg={0} >
                            <Dropdown overlay={menu}>
                                <Icon type="pushpin-o" style={{fontSize:21,lineHeight:"-10px",margin:"-5px 0px 0px 0px"}} />
                            </Dropdown>

                        </Col>
                        <Col xs={0} sm={19} md={17} lg={15} >
                            <Menu
                            theme="light"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ width:'100%',height:'48px',background:""}}
                        >
                            <Menu.Item key="2">团队介绍</Menu.Item>
                            <Menu.Item key="3">律所简介</Menu.Item>
                            <Menu.Item key="3.6">行业咨询</Menu.Item>
                            <Menu.Item key="4">法律咨询</Menu.Item>
                            <Menu.Item key="5">
                                <Link to="/contact">联系我们</Link>
                            </Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                    <div className="logo" />

                </Header>



                <Content　style={{ lineHeight: '64px',width:'100%',height:'400px' }}>
                    <Route path="/contact" component={ContactComponent}/>
                    <Route path="/admin" component={AdminComponent}/>

                </Content>



                <Footer　style={{bottom:'0px',backgroundColor:'#333' ,color:'#999',lineHeight:'20px',fontSize:'12px',padding:'20px',marginBottom:0,fontFamily: "Hiragino Sans GB"}}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-5'>
                                <h3 className='lead' style={{color:'#999'}}>Information and Copyright</h3>
                                <p>You may view the <a href='https://github.com/sahat/newedenfaces-react'>Source Code</a> behind this project on GitHub.</p>
                                <p>© 2015 Sahat Yalkabov.</p>
                                <img src={'http://sh.lianjia.com/public/img/gonganbeianicon.png'} class="fl" style={{width:'14px',marginTop:'3px'}}  />
                                <span class="fl" style={{marginLeft:'5px',color:'#999'}}>京公网安备 11010802024019号</span>
                            </div>
                        </div>
                    </div>
                </Footer>
            </Layout>


        </Router>
    );
  }
}

export default App;
