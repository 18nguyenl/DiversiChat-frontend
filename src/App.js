import React, { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import ChatWindow from "./Components/chat-window";
import {
  Layout,
  Menu,
  Dropdown,
  Icon,
  PageHeader
} from "antd";

const { Header, Footer, Content } = Layout;

function DropdownMenu({ setLang }) {
  return (
    <Menu className="menu" theme="light">
      <Menu.Item>
        <a onClick={() => {setLang("es")}} rel="noopener noreferrer">
          Spanish
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => {setLang("en")}} rel="noopener noreferrer">
          English
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => setLang("ja")} rel="noopener noreferrer">
          Japanese
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => setLang("hi")} rel="noopener noreferrer">
          Hindi
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => setLang("zh")} rel="noopener noreferrer">
          Chinese
        </a>
      </Menu.Item>
    </Menu>
  );
}

function App() {
  const [lang, setLang] = useState("en");

  return (
    <>
    <PageHeader title="DiversiChat" extra={
    <Dropdown overlay={<DropdownMenu setLang={setLang} lang={lang}/>}>
          <a className="ant-dropdown-link" href="#">
            Choose Language <Icon type="down" />
          </a>
        </Dropdown>}>
    </PageHeader>
    <Layout className="layout">
      <Content className="content">
        <ChatWindow setLang={setLang} lang={lang} />
      </Content>
      <Footer className="footer" style={{textAlign: "center"}}>&copy; 2019 | made by Long Nguyen, Eric Nwagwu, and Jeremia Gusti</Footer>
    </Layout>
    </>
  );
}

export default App;
