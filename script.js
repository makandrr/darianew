const $menuToggler = document.querySelector('.openMenu');
const $drawer = document.querySelector('.header nav');
$menuToggler.onclick = () => {
    $drawer.style.left = '0';
}

document.body.onclick = (e) => {
    console.log(e.target.closest('.drawer'))
    if(e.target != $menuToggler && !e.target.closest('.drawer')) {
        $drawer.style.left = '-100%';
    }
}