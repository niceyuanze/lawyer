import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Radio,Form,Row, Col, Menu, Icon,Input, Button, Checkbox ,Modal} from 'antd';
class AdminLoginComponent extends Component {


    formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 5 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 12 },
        },
    };
    formButtonLayout = {
        wrapperCol:{offset:5}
    }



    constructor() {
        super();
        this.state={
            visible:true

        };
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }


    login(){
        alert("213123");
    }



    render() {

        return (
            <div>
                <Modal
                    title="管理员认证"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form>
                        <Form.Item
                            {...this.formItemLayout}
                            label="用户名"
                        >
                            <Input placeholder="请在此输入您用户名" onChange={this.usernameChange} />
                        </Form.Item>
                        <Form.Item
                            {...this.formItemLayout}
                            label="密码"
                        >
                            <Input placeholder="请在此输入您的密码" onChange={this.passwordChange} />
                        </Form.Item>
                        <Form.Item
                            {...this.formButtonLayout}
                        >
                            <Button onClick={this.login}>登录</Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default AdminLoginComponent;
