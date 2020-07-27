import React, { Component } from 'react';
import Usegitform from '../components/form/Usergitform';
import Displayuser from '../components/user/Displayuser';
import { getUserName, getRepo } from '../services/gitLinks';


export default class Maincontainer extends Component {
  
  state = {
    followers: '',
    following: '',
    html_url: '',
    userName: '',
    name:'',
    repos:[],
  }

  handleChange = ({ target }) => {
    this.setState({ userName: target.value });
    
  }

  handleSubmit = event => {
    event.preventDefault();
    
    const { userName } = this.state;
    Promise.all([
      getUserName(userName),
      getRepo(userName)
    ])
      .then(([{ name, followers, following, html_url }, repos]) => this.setState({ name, followers, following, html_url, repos }));
  }

  render() {

    const { userName, name, followers, following, html_url, repos } = this.state;
    return (
      <>
        <Usegitform userName={userName} onChange={this.handleChange} onSubmit={this.handleSubmit} /> 
        { html_url === '' ? <h3>Search a username </h3> :
          <Displayuser name={name} followerCount={followers} followingCount={following} html_url={html_url} repos={repos} />
        }
      </>
    );
  }
}
