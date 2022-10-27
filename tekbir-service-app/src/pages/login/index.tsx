import React from 'react'
import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import {login} from "../../features/auth/authSlice";
import {Button, Checkbox, Form, Input, Row, Col} from 'antd';
import {LoginRequestModel} from "../../models/loginRequestModel";


const Login: React.FC = () => {
    const user = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch()

    console.log(user, 'user')

    const onFinish = (values: LoginRequestModel) => {
        console.log('Success:', values);
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
                        <Input />
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
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>

        </Row>
    )
}

export default Login
