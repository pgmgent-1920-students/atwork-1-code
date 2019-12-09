(() => {
  const app = {
    initialize () {
      this.ruData = null;
      this.cacheElements();
      this.loadRandomUsers(50);
    },
    cacheElements () {
      this.randomUsersListElement = document.querySelector('.random-users-list');
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
        });
      }
    },
    convertGenderToFontAwesomeClasses (gender) {
      switch (gender) {
        case 'male': return 'fas fa-mars';
        case 'female': return 'fas fa-venus';
        default: return 'fas fa-genderless';
      }
    }
  };
  app.initialize();
})();
