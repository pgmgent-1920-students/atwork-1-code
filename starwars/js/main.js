(() => {
  const app = {
    initialize () {
      this.swPeopleData;
      this.cacheElements();
      this.loadSWPeopleData(1);
    },
    cacheElements () {
      this.swPeopleElement = document.querySelector('.sw-people');
    },
    loadSWPeopleData (personId) {
      getJSON(`https://swapi.co/api/people/${personId}`,
        (data) => {
          this.swPeopleData = data;
          this.generateUIForSWPeople();
        },
        (error) => {
          console.log(error);
        })
    },
    generateUIForSWPeople () {
      if (this.swPeopleData !== null && this.swPeopleElement !== null) {
        console.log(this.swPeopleData);
        let tmpStr = '';
        tmpStr += `
        <h1>${this.swPeopleData.name}</h1>
        <section>
          <h2>Info</h2>
          <table>
            <body>
              <tr>
                <td>Height</td>
                <td>${this.swPeopleData.height}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>${this.swPeopleData.mass}</td>
              </tr>
              <tr>
                <td>Skin color</td>
                <td>${this.swPeopleData.skin_color}</td>
              </tr>
              <tr>
                <td>Skin color</td>
                <td>${this.swPeopleData.hair_color}</td>
              </tr>
              <tr>
                <td>Eye color</td>
                <td>${this.swPeopleData.eye_color}</td>
              </tr>
            </tbody>
          </table>
        </section>
        `;
        this.swPeopleElement.innerHTML = tmpStr;
      }
    },
  }
  app.initialize();
})();