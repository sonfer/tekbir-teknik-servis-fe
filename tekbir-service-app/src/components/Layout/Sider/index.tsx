import {Layout, Menu, MenuProps} from "antd";
import React from "react";
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined, ShopOutlined, TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from "@ant-design/icons";
import {useSelector} from "react-redux";
import {RootState} from "../../../app/store";

const { Sider } = Layout;

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

const SiderComp = () => {
    const collapsed = useSelector((state: RootState) => state.layout.collapsed)
    return (
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
            }}
            trigger={null}
            collapsed={collapsed}
            collapsible
        >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
        </Sider>
    )
}

export default SiderComp
