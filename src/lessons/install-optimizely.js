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
                <Header className="header">Optimizely Learning Environment</Header>
                <Content>
                    <LessonList>
                        <LessonListItem 
                            stepTitle = "Before We Start the Tutorial" 
                            content = 
                                "We will build a small game during this tutorial. You might be tempted to skip it because you’re not building games — 
                                but give it a chance. The techniques you’ll learn in the tutorial are fundamental to building any React app, and mastering 
                                it will give you a deep understanding of React." 
                        />
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