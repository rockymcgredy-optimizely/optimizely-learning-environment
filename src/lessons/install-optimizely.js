import React from 'react';
import LessonList from '../components/LessonList';
import LessonListItem from '../components/LessonListItem';
import { Layout } from 'antd';
import 'antd/dist/antd.css'; 

const { Header, Footer, Sider, Content } = Layout;

const InstallOptimizely = () => {
    return (
        <div>
        <Layout>
            <Sider>Sider</Sider>
            <Layout>
                <Header className="header">Header</Header>
                <Content>
                    <LessonList>
                        <LessonListItem content = "Check out the app here" />
                        <LessonListItem content = "App code is located at" />
                        <LessonListItem manualCheck content = "This is a manual check item" />
                    </LessonList>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
        </div>
    )
}

export default InstallOptimizely;