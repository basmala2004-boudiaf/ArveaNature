let menu =document.querySelector('#menu-btn');
let navbar =document.querySelector('.header .navbar');
menu.onclick= () => {
    menu.classList.toggle('fas-times');
    navbar.classList.toggle('active');   
}
window.onsroll = () => {
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}
window.onscroll = function() {
    var scrollButton = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollButton.style.display = "block"; 
    } else {
        scrollButton.style.display = "none";
    }
};


document.getElementById("scroll-to-top").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
});