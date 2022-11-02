import React, {useEffect} from 'react'
import type {AppDispatch, RootState} from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import {login} from "../../features/auth/authSlice";
import {Button, Checkbox, Form, Input, Row, Col} from 'antd';
import {User, UserAuth} from "../../models/User";
import axios from "axios";
import {useNavigate} from "react-router-dom";

interface LoginForm {
    email: string,
    password: string
}

const Login: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const auth = useSelector((state: RootState) => state.auth)
    const onFinish = (values: LoginForm) => {
        dispatch(login(values))
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row className="login" justify="center" align="middle">
            <Col>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button loading={auth.loading} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>

        </Row>
    )
}

export default Login
