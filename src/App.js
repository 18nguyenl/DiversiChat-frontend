import React, { useState, useEffect } from "react";
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

function DropdownMenu({ setLang, lang }) {
  return (
    <Menu>
      <Menu.Item>
        <a onClick={() => {setLang("es"); console.log(lang)}} rel="noopener noreferrer" href="#">
          Spanish
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => {setLang("en")}} rel="noopener noreferrer" href="#">
          English
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => setLang("ja")} rel="noopener noreferrer" href="#">
          Japanese
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => setLang("hi")} rel="noopener noreferrer" href="#">
          Hindi
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => setLang("zh")} rel="noopener noreferrer" href="#">
          Chinese
        </a>
      </Menu.Item>
    </Menu>
  );
}

function App() {
  const [lang, setLang] = useState("en");

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
        <Dropdown overlay={<DropdownMenu setLang={setLang} lang={lang}/>}>
          <a className="ant-dropdown-link" href="#">
            Choose Language <Icon type="down" />
          </a>
        </Dropdown>
      </Header>
      <ChatWindow setLang={setLang} lang={lang} />
      <Footer className="footer" style={{textAlign: "center"}}>&copy; 2019 | made by Long Nguyen, Eric Nwagwu, and Jeremia Gusti</Footer>
    </Layout>
  );
}

export default App;
