import React, { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import ChatWindow from "./Components/chat-window";
import {
  Layout,
  Menu,
  Comment,
  ToolTip,
  Avatar,
  Button,
  Dropdown,
  Icon
} from "antd";

const { Header, Footer, Content } = Layout;
let userLang = "en";
function setLang(lang) {
  userLang = lang;
}

const menu = (
  <Menu>
    <Menu.Item>
      <a onClick={setLang("es")} rel="noopener noreferrer" href="#">
        Spanish
      </a>
    </Menu.Item>
    <Menu.Item>
      <a onClick={setLang("en")} rel="noopener noreferrer" href="#">
        English
      </a>
    </Menu.Item>
    <Menu.Item>
      <a onClick={setLang("ja")} rel="noopener noreferrer" href="#">
        Japanese
      </a>
    </Menu.Item>
    <Menu.Item>
      <a onClick={setLang("hi")} rel="noopener noreferrer" href="#">
        Hindi
      </a>
    </Menu.Item>
    <Menu.Item>
      <a onClick={setLang("zh")} rel="noopener noreferrer" href="#">
        Chinese
      </a>
    </Menu.Item>
  </Menu>
);

function App() {
  return (
    <Layout className="layout">
      <Header>
        <h1
          style={{
            color: "white",
            display: "inline-block",
            marginRight: "2rem"
          }}
        >
          DiversiChat
        </h1>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            Choose Language <Icon type="down" />
          </a>
        </Dropdown>
      </Header>
      <ChatWindow lang={userLang} />
      <Footer></Footer>
    </Layout>
  );
}

export default App;
