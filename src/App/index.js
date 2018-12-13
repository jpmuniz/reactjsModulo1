import React, { Component } from "react";

import Head from "../head/Index";
import Post from "../post/post";

import "./style.css";

class Index extends Component {
  state = {
    posts: [
      {
        id: 1,
        avatar: "https://goo.gl/images/KisCFU",
        nome: "João Pedro",
        tempo: "há 3 min",
        msg:
          "Desenvolvimento web, de software em geral é uma arte! A cada código um desafio, uma nova maneira de ajudar as pessoas"
      },
      {
        id: 2,
        avatar: "https://goo.gl/images/KisCFU",
        nome: "Liz",
        tempo: "há 6 min",
        msg:
          "Aprendendo com meu papai, e meu papai aprendendo comigo, juntos somos apenas um!"
      }
    ]
  };

  render() {
    return (
      <div className="app">
        <Head />
        {this.state.posts.map(post => {
          return <Post key={post.id} data={post} />;
        })}
      </div>
    );
  }
}

export default Index;
