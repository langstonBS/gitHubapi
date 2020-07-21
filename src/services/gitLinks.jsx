


const gitUserName = userName => {
  return fetch(`https://api.github.com/users/:${userName}`, {
    
  })
    .then(res => res.json())
    .then(({ userInfo }) => userInfo);
};

const gitRepoUrl = userName => {
  return fetch(`https://api.github.com/users/:${userName}/repos`, {
    
  })
    .then(res => res.json())
    .then(({ repo })=> repo);
};

export { gitUserName, gitRepoUrl };
