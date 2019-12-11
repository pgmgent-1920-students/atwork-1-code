(() => {
  const database = {
    filters: [
      'JavaScript',
      'HTML',
      'CSS',
      'PHP',
      'Python'
    ],
    portfolio: [
      {
        title: 'Wicked Thing 1',
        tags: [
          'JavaScript'
        ]
      },
      {
        title: 'Wicked Thing 2',
        tags: [
          'JavaScript',
          'HTML',
          'CSS'
        ]
      },
      {
        title: 'Wicked Thing 3',
        tags: [
          'Python'
        ]
      }
    ]
  };

  const app = {
    init () {
      this.cacheElements();
      this.generateUIForFilters();
      this.generateUIForPortfolio();
    },
    cacheElements () {
      this.filtersElement = document.querySelector('.filters'); 
      if (this.filtersElement !== null) {
        this.filtersElement.addEventListener('click', ev => {
          const dataName = ev.target.dataset.name || ev.target.parentNode.dataset.name || ev.target.parentNode.parentNode.dataset.name;
          const portfolioElements = document.querySelectorAll('.portfolio .work');
          
          portfolioElements.forEach((pElem) => {
            if (dataName !== 'All') {
              if (pElem.dataset.cat.indexOf(dataName) === -1) {
                pElem.parentNode.classList.add('hidden');
              } else {
                pElem.parentNode.classList.remove('hidden');
              }
            } else {
              pElem.parentNode.classList.remove('hidden');
            }            
          });
        });
      } 
      this.portfolioElement = document.querySelector('.portfolio'); 
    },
    generateUIForPortfolio () {
      if (this.portfolioElement !== null) {
        let workElement;
        database.portfolio.forEach((work, id) => {
          workElement = document.createElement('div'); 
          workElement.classList.add('g-fb-col-12', 'g-fb-col-md-6', 'g-fb-col-lg-4', 'g-fb-col-xl-3');        
          workElement.innerHTML = `
          <article class="work" data-cat="${work.tags.join(',')}">
            <h1>${work.title}</h1>
          </article>`;
          this.portfolioElement.appendChild(workElement);
        });        
      }
    },
    generateUIForFilters () {
      if (this.filtersElement !== null) {
        let filterElement;
        filterElement = document.createElement('li'); 
        filterElement.setAttribute('data-name', 'All');         
        filterElement.innerHTML = `All`;
        this.filtersElement.appendChild(filterElement);
        database.filters.forEach((filter, id) => {
          filterElement = document.createElement('li'); 
          filterElement.setAttribute('data-name', filter);         
          filterElement.innerHTML = `${filter}`;
          this.filtersElement.appendChild(filterElement);
        });        
      }
    },
  };
  app.init();
})();