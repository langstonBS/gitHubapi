import React, { Component } from 'react';
import Usegitform from '../components/form/Usergitform';
import List from '../components/list/List';
import Displayuser from '../components/user/Displayuser';
import { gitUserName, gitRepoUrl } from '../services/gitLinks';


export default class Maincontainer extends Component {
  
  state = {
    name: '',
    followers: '',
    following: '',
    url: '',
    userName: [],
    userRepo:[],
    repo: []
  }

  handleChange = ({ target }) => {
    this.setState({ userName: target.value });
    
  }

  handleSubmit = event => {
    event.preventDefault();
    
    const { userName } = this.state;
    Promise.all([
      gitUserName(userName)
    ])
      .then(([name, followers, following, url]) => this.setState({ name, followers, following, url }));
    console.log(this.state.userName);
  }

  render() {

    const { name, followers, following, url, userName } = this.state;
    return (
      <>
        <Usegitform userName={userName} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Displayuser name={name} followerCount={followers} followingCount={following} githubLink={url} />
    

        
      </>
    );
  }
}
