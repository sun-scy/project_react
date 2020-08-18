import { Layout } from 'antd';
import React, { Component } from 'react'
import './admin.less'
const { Header, Footer, Sider, Content } = Layout;

export default class admin extends Component {
    render() {
        return (
           
                <Layout className='layout'>
                    <Sider className='Sider'>Sider</Sider>
                    <Layout>
                        <Header className='header'>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
          
        )
    }
}
