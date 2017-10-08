import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import { Layout, Menu, Icon, Row, Col } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
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
                <Header className="header"　style={{ width:'100%',height:'100%' }} >
                    <div className="logo" />
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['2']}

                            >
                                <Menu.Item key="2">网站首页</Menu.Item>
                                <Menu.Item key="3">律师团队</Menu.Item>
                                <Menu.Item key="3.6">注意事项</Menu.Item>
                                <Menu.Item key="4">联系方式</Menu.Item>
                                <Menu.Item key="5">留言咨询</Menu.Item>
                            </Menu>

                    <div className="logo" />

                </Header>
                <Content　style={{ lineHeight: '64px',width:'100%',height:'400px' }}>Content</Content>
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
