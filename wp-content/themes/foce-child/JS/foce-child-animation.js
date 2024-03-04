// ANIMATION LOGO
window.addEventListener("scroll", function () {
  const banner = document.querySelector(".banner");
  const logo = document.querySelector(".banner img");

  const bannerHeight = banner.offsetHeight;
  const logoHeight = logo.offsetHeight * 1.1;

  const scrollTopLogo = window.scrollY || document.documentElement.scrollTop;

  if ((scrollTopLogo  > 0) && (scrollTopLogo  < bannerHeight - logoHeight)) {
    logo.classList.remove("absolute");
    logo.classList.add("fixed");
  } else if (scrollTopLogo  >= bannerHeight - logoHeight) {
    logo.classList.remove("fixed");
    logo.classList.add("absolute");
  }
});

// ANIMATION FLEURS
window.addEventListener('scroll', function() {
  document.documentElement.style.setProperty('--animation-duration-flower', '1s');
  document.documentElement.style.setProperty('--animation-delay', '0s');

  clearTimeout(window.scrollTimeout);
  window.scrollTimeout = setTimeout(function() {
    scroll = false;
    document.documentElement.style.setProperty('--animation-duration-flower', '6s');
    document.documentElement.style.setProperty('--animation-delay', '2s');
  }, 200); 
});

// ANIMATION TITRES
function separeTexteDansSpan(element) {
  const text = element.textContent;
  element.innerHTML = '';
  const words = text.split(' ');

  words.forEach((word, index) => {
    const span = document.createElement('span');
    span.textContent = word;
    span.classList.add(`anim-titre-${index + 1}`);
    element.appendChild(span);
  });
}

const titresAObserver = document.querySelectorAll('.anim-titre-initial');

const titresIntersectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      separeTexteDansSpan(entry.target);
      titresIntersectionObserver.unobserve(entry.target);
      entry.target.classList.remove('anim-titre-initial');
    }
  });
}, { threshold: 0.9 });

titresAObserver.forEach(element => {
  titresIntersectionObserver.observe(element);
});

// ANIMATION NUAGES
function scrollParallax() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  let parallaxValeur = Math.min(scrollTop * 0.1, 300);
  parallaxValeur = Math.max(parallaxValeur, 0); 
  document.documentElement.style.setProperty('--parallax', parallaxValeur + 'px');
}

const placeElement = document.querySelector('#place');
let ecouteurAttache = false; 

const placeObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      if (!ecouteurAttache) {
        window.addEventListener('scroll', scrollParallax);
        ecouteurAttache = true;
      }
    } else {
      if (ecouteurAttache) {
        window.removeEventListener('scroll', scrollParallax);
        ecouteurAttache = false;
      }
    }
  });
});

placeObserver.observe(placeElement);
