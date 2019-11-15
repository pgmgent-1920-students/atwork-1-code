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
      this.concertsElement = document.querySelector('.pollepelaar');  
    },
    generateUIForConcerts () {
      if (this.concertsElement !== null) {
        let concertElement;
        database.concerts.forEach((concert, id) => {
          concertElement = document.createElement('div');
          concertElement.classList.add('g-fb-col-12', 'g-fb-col-md-6', 'g-fb-col-lg-4', 'g-fb-col-xl-3');
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