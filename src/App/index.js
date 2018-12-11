import React, { Component } from "react";

import Head from "../head/Index";
import Post from "../post/post";

class Index extends Component {
  state = {
    mensagemPost: [
      { msg: "teste de mensagem do post1" },
      { msg: "teste de mensagem do post2" }
    ]
  };

  render() {
    return (
      <div>
        <Head />
        {this.state.mensagemPost.map(msg => {
          return <Post childrem={msg.msg} />;
        })}
      </div>
    );
  }
}

export default Index;
