import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';

import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import React, {useState} from 'react';
import Header from "./Header";
import Sider from "./Sider";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
const { Content, Footer } = Layout;


const items: MenuProps['items'] = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
}));

type LayoutCompProp = {
    children: React.ReactNode
}

const LayoutComp = (props: LayoutCompProp) => {
    const collapsed = useSelector((state: RootState) => state.layout.collapsed)

    return (
        <Layout hasSider>
            <Sider />
            <Layout className="site-layout" style={{ marginLeft: collapsed ? 80 : 200 }}>
                <Header />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div className="site-layout-background" style={{ padding: 24}}>
                        {props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}


export default LayoutComp;
