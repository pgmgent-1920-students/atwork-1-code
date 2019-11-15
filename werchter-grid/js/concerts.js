(() => {
  const database = {
    concerts: [
      {
        artist: 'Amyl And The Sniffers',
        picture: 'https://assets.rockwerchter.be/files/cache/medium/files/amyl-web-5c8653f98e011.jpg',
        location: 'The Slope',
      },
      {
        artist: 'Tool',
        picture: 'https://assets.rockwerchter.be/files/cache/medium/files/tool-rw19-web-5bcf2d9ebe3d7.jpg',
        location: 'Main Stage',
      },
      {
        artist: 'Tamino',
        picture: 'https://assets.rockwerchter.be/files/cache/medium/files/tamino-web-5c5c1327cb356.jpg',
        location: 'The Barn',
      },
      {
        artist: 'Underworld',
        picture: 'https://assets.rockwerchter.be/files/cache/medium/files/underworld-web2-5bf54c7fd1bef.jpg',
        location: 'Klub C',
      },
      {
        artist: 'Amyl And The Sniffers',
        picture: 'https://assets.rockwerchter.be/files/cache/medium/files/amyl-web-5c8653f98e011.jpg',
        location: 'The Slope',
      },
      {
        artist: 'Amyl And The Sniffers',
        picture: 'https://assets.rockwerchter.be/files/cache/medium/files/amyl-web-5c8653f98e011.jpg',
        location: 'The Slope',
      },
    ]
  };

  const app = {
    init () {
      this.cacheElements();
      this.generateUIForConcerts();
    },
    cacheElements () {
      this.concertsElement = document.querySelector('.concerts');  
    },
    generateUIForConcerts () {
      if (this.concertsElement !== null) {
        let concertElement;
        database.concerts.forEach((concert, id) => {
          concertElement = document.createElement('div');
          if (id === 0) {
            concertElement.classList.add('g-gr-cspan-12', 'g-gr-cspan-md-6', 'g-gr-cspan-lg-6', 'g-gr-cspan-xl-6', 'g-gr-rspan-2');
          } else if(id === 1) {
            concertElement.classList.add('g-gr-cspan-12', 'g-gr-cspan-md-6', 'g-gr-cspan-lg-4', 'g-gr-cspan-xl-4', 'g-gr-rspan-2');
          } else if(id === 2 || id === 3) {
            concertElement.classList.add('g-gr-cspan-12', 'g-gr-cspan-md-6', 'g-gr-cspan-lg-4', 'g-gr-cspan-xl-2', 'g-gr-rspan-1');
          } else {
            concertElement.classList.add('g-gr-cspan-12', 'g-gr-cspan-md-6', 'g-gr-cspan-lg-4', 'g-gr-cspan-xl-6-2');
          }
          concertElement.innerHTML = `
<article class="concert">
    <picture class="concert__picture">
        <img src="${concert.picture}">
    </picture>
    <div class="concert__body">
        <div class="concert__meta">
            <span class="concert__location">${concert.location}</span>
            <span class="concert__date">Zondag</span>
        </div>
        <h1 class="concert__artist">${concert.artist}</h1>
    </div>
</article>
          `;
          this.concertsElement.appendChild(concertElement);
        });        
      }
    },
  };
  app.init();
})();