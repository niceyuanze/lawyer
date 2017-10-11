import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Radio,Form,Row, Col, Menu, Icon,Input, Button, Checkbox } from 'antd';
class ContactComponent extends Component {


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





    componentDidMount(){
        console.log(this.props.form);
    }



    render() {
        return (
            <div>
                联系我们呀
            </div>
        );
    }
}

export default ContactComponent;
