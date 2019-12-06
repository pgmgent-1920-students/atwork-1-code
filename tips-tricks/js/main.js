(() => {
  const bodyElement = document.body;

  const btnToggleElement = document.querySelector('.btn-toggle');
  
  btnToggleElement.addEventListener('click', (ev) => {
    (bodyElement.classList.contains('nav-isopen')) ? bodyElement.classList.remove('nav-isopen') : bodyElement.classList.add('nav-isopen');
  });
})();