(() => {
  const app = {
    initialize () {
      this.gfCategories = null;
      this.cacheElements();
      this.loadGFCategoriesData();
    },
    cacheElements () {
      this.gfCategoriesElement = document.querySelector('.gf-categories');
    },
    loadGFCategoriesData () {
      getJSON('https://datatank.stad.gent/4/toerisme/gentsefeestencategorien.json',
        (data) => {
          this.gfCategories = data;
          this.generateUIForGFCategories();
        },
        (error) => {
          console.log(error);
        })
    },
    generateUIForGFCategories () {
      if (this.gfCategories !== null && this.gfCategoriesElement !== null) {
        let gfCategoryElement;
        this.gfCategories.forEach((category, index) => {
          gfCategoryElement = document.createElement('li');
          gfCategoryElement.setAttribute('data-id', category.uuid);
          gfCategoryElement.innerHTML = `<span class="name">${category.name.nl}</span>`;
          this.gfCategoriesElement.append(gfCategoryElement);
        });
      }
    }
  }
  app.initialize();
})();