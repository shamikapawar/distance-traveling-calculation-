import React from 'react'
import { Layout, } from 'antd';
const { Header, Content, Footer } = Layout;

const HeaderTop = () => {
    return (
        <Layout>
            <Header
                style={{
                    backgroundColor: "white",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.2)",
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <img src="logo.png" alt="" style={{ width: "17vh" }} />
            </Header>
        </Layout>
    )
}

export default HeaderTop
