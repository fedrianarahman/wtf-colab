

const scrollToTop = document.getElementById('scroll-to-top');

scrollToTop.addEventListener('click', ()=>{
    window.scrollTo({
        top : 0,
        behavior : 'smooth'
    })
})

window.addEventListener('scroll', ()=>{
    if (window.scrollY > 70) {
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
    }
})

