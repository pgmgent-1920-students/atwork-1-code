(() => {
  const app = {
    initialize () {
      this.ruData = null;
      this.cacheElements();
      this.loadRandomUsers(50);
    },
    cacheElements () {
      this.randomUsersListElement = document.querySelector('.random-users-list');
      this.userDetailElement = document.querySelector('.user-detail');
      this.userDetailElement.addEventListener('click', (ev) => {
        this.userDetailElement.classList.remove('open');
      });
    },
    loadRandomUsers (amount) {
      // eslint-disable-next-line no-undef
      Ajax.loadJsonByHandlers(`https://randomuser.me/api/?format=json&results=${amount}`,
        (data) => {
          this.ruData = data.results;
          this.generateUIForRandomUsers();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForRandomUsers () {
      if (this.ruData !== null && this.randomUsersListElement !== null) {
        console.log(this.ruData);
        let userElement = null;
        this.ruData.forEach((user, index) => {
          userElement = document.createElement('div');
          userElement.classList.add('g-fb-col-12', 'g-fb-col-sm-6', 'g-fb-col-md-4', 'g-fb-col-lg-3', 'g-fb-col-xl-2');
          userElement.innerHTML = `
          <article class="random-user" data-id="${user.login.uuid}">
            <h1 class="random-user__name">${user.name.first} ${user.name.last}</h1>
            <picture class="random-user__picture">
              <img src="${user.picture.large}" alt="" />
            </picture>
            <span class="random-user__gender ${this.convertGenderToFontAwesomeClasses(user.gender)}"></span>
          </article>
          `;
          this.randomUsersListElement.append(userElement);

          userElement.querySelector('.random-user').addEventListener('click', (ev) => {
            const userId = ev.target.dataset.id || ev.target.parentNode.dataset.id || ev.target.parentNode.parentNode.dataset.id;
            this.showUserDetails(userId);
          });
        });
      }
    },
    convertGenderToFontAwesomeClasses (gender) {
      switch (gender) {
        case 'male': return 'fas fa-mars';
        case 'female': return 'fas fa-venus';
        default: return 'fas fa-genderless';
      }
    },
    showUserDetails (userId) {
      const user = this.ruData.find(obj => obj.login.uuid === userId);

      let tmpStr = '';
      tmpStr += `
      <article class="user-detail__content">
        <picture class="user-detail__picture">
          <img src="${user.picture.large}" alt="" />
        </picture>
        <h1 class="user-detail__name">${user.name.first} ${user.name.last}</h1>
        <table class="user-detail__info">
          <tr>
            <td>Email</td><td>${user.email}</td>
          </tr>
          <tr>
            <td>Phone</td><td>${user.phone}</td>
          </tr>
          <tr>
            <td>Gender</td><td>${user.gender}</td>
          </tr>
          <tr>
            <td>Day of birth</td><td>${user.dob.date}</td>
          </tr>
          <tr>
            <td>Cell</td><td>${user.cell}</td>
          </tr>
          <tr>
            <td>Location</td><td><span class="user-detail__street">${user.location.street.name} ${user.location.street.number}</span><span class="user-detail__city">${user.location.city}</span><span class="user-detail__country">${user.location.country}</span></td>
          </tr>
          <tr>
            <td>Nationality</td><td>${user.nat}</td>
          </tr>
          <tr>
            <td>User id</td><td>${user.login.uuid}</td>
          </tr>
          <tr>
            <td>Username</td><td>${user.login.username}</td>
          </tr>
          <tr>
            <td>Registered</td><td>${user.registered.date}</td>
          </tr>
        </table>
      </article>
      `;
      this.userDetailElement.innerHTML = tmpStr;
      this.userDetailElement.classList.add('open');
    },
  };
  app.initialize();
})();
