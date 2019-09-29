import React, { Component } from "react";
import axios from "axios";

class Translator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "你好",
      translatedText: "",
      preferredLang: "en",
      messages: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://37950813.ngrok.io/messages`)
      .then(res => {
        this.setState({ messages: res.data });
        console.log(res.data);
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.messages.map(message => (
            <li>
              {message.message} - {message.language} - {message.date}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Translator;
