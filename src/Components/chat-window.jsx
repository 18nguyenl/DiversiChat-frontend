import React, { useEffect, useState } from "react";
import { Layout, Menu, Comment, ToolTip, Avatar, Button } from "antd";
import axios from "axios";
import moment from "moment";
const { Header, Footer } = Layout;

function ChatWindow (props) {
  const [messageData, setMessageData] = useState([]);

  function formatDate(date) {
    date = parseInt(date);
    return moment.unix(date).format("LLL");
  }

  function refreshChat() {
    axios
        .get(`https://diversichat-api.herokuapp.com/messages-${props.lang}`)
        .then(res => {
          setMessageData(res.data);
        })
        .catch(console.log); 
  }

  useEffect(() => {
    refreshChat()
  }, [props.lang])

    return (
      <>
          {messageData.map(message => (
            <Comment
              author={<a>Anonymous</a>}
              avatar={
                <Avatar
                  src={`https://api.adorable.io/avatars/500/${message.userid}`}
                  alt="Han Solo"
                />
              }
              content={<p>{message.message}</p>}
              datetime={formatDate(message.date)}
            />
          ))}
          <Button type="primary" onClick={refreshChat}>
            Refresh Chat!
          </Button>
      </>
    );
}

export default ChatWindow;
