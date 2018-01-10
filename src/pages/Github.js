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

export default Github;