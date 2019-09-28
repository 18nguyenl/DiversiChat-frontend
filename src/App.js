import React from "react";
import "antd/dist/antd.css";
import "./App.css";

import { Layout, Menu, Comment, ToolTip, Avatar } from "antd";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content className="content">
        <Comment
          author={<a>Han Solo</a>}
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          }
          datetime={
            <div>2/2/2019</div>
          }
        />
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
