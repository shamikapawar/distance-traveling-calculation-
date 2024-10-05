
import React from 'react';
import { Button, Card, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
import axios from 'axios';

const LoginPage = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const response = await axios.post('http://localhost:4448/login', {
                email: values.email,
                password: values.password,
            });

            localStorage.setItem('token', response.data.token);
            if (response.status === 200) {

                navigate('/welcome');
            } else {
                // message.error('Login failed, please check your credentials.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            // message.error('An error occurred during login. Please try again.');
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login-container">
            <Card style={{ width: "30vw" }} >
                <div className="logo">
                    <img
                        src="/logo.png"
                        alt="Speedo Logo"
                        className="logo-img"
                    />
                </div>
                <Form
                    name="login"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                                type: 'email',
                            },
                        ]}
                    >
                        <Input placeholder="Example@email.com" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                                min: 8,
                            },
                        ]}
                    >
                        <Input.Password placeholder="At least 8 characters" />
                    </Form.Item>

                    <Form.Item>

                        <Button type="primary" htmlType="submit" block>
                            Sign in
                        </Button>

                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default LoginPage;

