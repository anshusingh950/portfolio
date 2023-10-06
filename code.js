let v=window.innerWidth;
window.addEventListener('resize', () => {    
    if (window.innerWidth <=500) {
      cll1.style.display='none';

    }
    else{
        if(window.innerWidth >=500 && v<500){
        cll1.style.display='flex';
        }
    }
    v=window.innerWidth;
    console.log(v);

  });

function show() {
    if(cll1.style.display=='none'){  
        cll1.style.display='flex';
        btns.innerHTML='<<';
    }
    else{
        cll1.style.display='none';
        btns.innerHTML='>>';
    }
}


const elements = document.querySelectorAll('.slil1a');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1
}
const callbacks = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.toggle('active');
    }
  });
}
let observer = new IntersectionObserver(callbacks, options);
elements.forEach(element => {
  observer.observe(element);
});