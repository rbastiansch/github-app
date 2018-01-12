const Github =
  `<section class="row">
    <div class="form-group">
      <input class="form-control" type="text" id="searchInput">
      <button class="btn btn-primary" id="btnSearch">Search User</button>
    </div>
  </section>
  <section class="row">
    <div class="col-sm-4">
      <img class="img-circle" id="avatar-img" width="100%">
      <div class="user-info">
        <p id="followers"></p>
        <p id="following"></p>
        <p id="email"></p>
        <p id="bio"></p>
      </div>
    </div>
    <div class="col-sm-8" id="repos"></div>
  </section>`;

const script = () => {
  const btnSearch = document.getElementById('btnSearch');
  const input = document.getElementById('searchInput');
  const avatarImg = document.getElementById('avatar-img');
  const followers = document.getElementById('followers');
  const following = document.getElementById('following');
  const email = document.getElementById('email');
  const bio = document.getElementById('bio');

  const setInfo = (info) => {
    avatarImg.alt = "avatar";
    avatarImg.src = info.avatar_url;
    followers.textContent = `${info.followers} followers`;
    following.textContent = `${info.following} following`;
    email.textContent = info.email ? `Email: ${info.email}` : null;
    bio.textContent = info.bio ? `Bio: ${info.bio}` : null;
  }

  const setRepos = (info) => {
    const repos = document.getElementById('repos');
    let html = '<div class="thumbnail">';

    info.map(item => {
      html +=
        `<div class="caption">
          <h3 id="repo-name">
            <a href="#">${item.name}<a/>
            <span class="badge" id="stars">${item.stargazers_count}</span>
          </h3>              
        </div>`;
    })
    html += '</div>';
    repos.innerHTML += html;
  }

  const listRepos = (search) => {
    const url = `https://api.github.com/users/${search}/repos`;
    fetch(url, { method: 'get' })
      .then(response => response.json())
        .then(json => {
          setRepos(json);
        });
  }

  const searchUser = () => {
    const search = input.value;
    const url = `https://api.github.com/users/${search}`;
    fetch(url, { method: 'get' })
      .then(response => response.json())
        .then(json => {
          setInfo(json);
          listRepos(search);
        });
  }

  btnSearch.addEventListener('click', searchUser);
};

export { Github, script };