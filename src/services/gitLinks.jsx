


const gitUserName = userName => {
  return fetch(`https://api.github.com/users/${userName}`, {
    
  })
    .then(res => res.json())
    .then(({ links }) => links);
};

const gitRepoUrl = userName => {
  return fetch(`https://api.github.com/users/${userName}/repos`, {
    
  })
    .then(res => res.json())
    .then(({ links }) => links);
};

export { gitUserName, gitRepoUrl };
