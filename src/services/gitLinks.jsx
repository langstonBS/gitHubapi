


const getUserName = userName => {
  return fetch(`https://api.github.com/users/${userName}`, {
    
  })
    .then(res => res.json());
};

const getRepo = userName => {
  return fetch(`https://api.github.com/users/${userName}/repos`, {
    
  })
    .then(res => res.json());
};

export { getUserName, getRepo };
