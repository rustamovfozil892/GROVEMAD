const btn = document.querySelector('.footer__btn')

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
    if(scrollPos >= 710){
        btn.classList.add('active')
    }else{
        btn.classList.remove('active')
    }
}

document.addEventListener('scroll', (e) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
