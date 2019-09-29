import React, { Component } from "react";
import { Layout, Menu, Comment, ToolTip, Avatar, Button } from "antd";
import axios from "axios";
import moment from "moment";
const { Header, Footer, Content } = Layout;

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageData: [],
      preferredLanguage: "en"
    };
    this.formatDate = this.formatDate.bind(this);
    this.refreshChat = this.refreshChat.bind(this);
  }

  componentDidMount() {
    axios
      .get(`http://37950813.ngrok.io/messages-${this.state.preferredLanguage}`)
      .then(res => {
        this.setState({ messageData: res.data });
        console.log(res.data);
      })
      .catch(console.log);
  }

  componentDidUpdate() {
    if (this.props.lang !== this.state.preferredLanguage) {
      this.setState({
        preferredLanguage: this.props.lang
      });
    }
  }
  formatDate(date) {
    date = parseInt(date);
    return moment.unix(date).format("LLL");
  }

  refreshChat() {
    axios
      .get(`http://37950813.ngrok.io/messages-${this.state.preferredLanguage}`)
      .then(res => {
        this.setState({ messageData: res.data });
        console.log(res.data);
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <Content className="content">
          {this.state.messageData.map(message => (
            <Comment
              author={<a>Anonymous</a>}
              avatar={
                <Avatar
                  src={`https://api.adorable.io/avatars/500/${message.message}`}
                  alt="Han Solo"
                />
              }
              content={<p>{message.message}</p>}
              datetime={this.formatDate(message.date)}
            />
          ))}
          <Button type="primary" onClick={this.refreshChat}>
            Refresh Chat!
          </Button>
        </Content>
      </div>
    );
  }
}

export default ChatWindow;
