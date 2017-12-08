  const btnSearch = document.getElementById('btnSearch');
  const input = document.getElementById('searchInput');
  const avatarImg = document.getElementById('avatar-img');
  const followers = document.getElementById('followers');
  const following = document.getElementById('following');
  const email = document.getElementById('email');
  const bio = document.getElementById('bio');

  const setInfo = (info) => {
    avatarImg.src = info.avatar_url;
    followers.textContent = `${info.followers} followers`;
    following.textContent = `${info.following} following`;
    email.textContent = `Email: ${info.email}`;
    bio.textContent = `Bio: ${info.bio}`;
    console.log(info);
  }

  const searchUser = () => {
    const search = input.value;
    const url = `https://api.github.com/users/${search}`;
    fetch(url, {
      method: 'get'
    }).then(response => response.json())
      .then(json => {
        setInfo(json);
      });
  }

  btnSearch.addEventListener('click', searchUser);