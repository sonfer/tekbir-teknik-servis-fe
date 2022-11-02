import React from "react";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import { Layout, Menu } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../app/store";
import {setCollapsed} from "../../../features/layout/layoutSlice";
const { Header, Content, Footer, Sider } = Layout;

const HeaderComp = () => {
    const collapsed = useSelector((state: RootState) => state.layout.collapsed);
    const dispatch = useDispatch();

    return (
        <Header className="site-layout-background" style={{ padding: 0 }} >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => dispatch(setCollapsed()),
            })}
        </Header>
    )
}

export default HeaderComp;
