function scrollToAnchor() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  for (let anchorLink of anchorLinks) {
    anchorLink.addEventListener('click', function (event) {
      event.preventDefault();
      const idAnchor = anchorLink.getAttribute('href');
    
      document.querySelector(idAnchor).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };
}

scrollToAnchor();
