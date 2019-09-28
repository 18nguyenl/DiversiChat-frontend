import React from 'react';
import 'antd/dist/antd.css';
import './App.css';

import { Layout, Menu, Card } from "antd"
import metaData from "./components/metaData";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content className="content">
        <Card title="personName" className="card" headStyle={{border: "none"}} bodyStyle={{padding: "0 24px"}}>
          <p> Card contentCard contentCard contentCard contentCard content Card content Card content Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
