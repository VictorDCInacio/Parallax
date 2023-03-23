let texto = document.getElementById('texto');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let leaf = document.getElementById('leaf');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    texto.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.0 + 'px';
    hill1.style.top = value * 0.8 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill5.style.left = value * 0.4 + 'px';
});

