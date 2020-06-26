import React from 'react';
import './login.less'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const NormalLoginForm = () => {
const onFinish = values => {
    console.log('Received values of form: ', values);
};
    return ( 
            <Form
            className="login-form"
            onFinish={onFinish}
            >
            <Form.Item
                name="username"
                rules={[
                    { required: true, message: ' Please input your Username!' },
                    { min: 4, message: ' must be at least 4 characters' },
                    { max: 12, message: ' cannot be longer than 12 characters' },
                    { pattern: /^[a-zA-Z0-9]+$/, message: ' only allow capital/lower-case/numbers' }
                ]}
            >
                <Input 
                className="login-form-inputbox"
                prefix={<UserOutlined className="site-form-item-icon" />} 
                placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {required: true, message: 'Please input your Password!' }
                    
                ]}
            >
                <Input
                className="login-form-inputbox"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
                </Button>
            </Form.Item>
            </Form>
        );
}

 
export default NormalLoginForm;