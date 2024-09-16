window.onscroll = function() {
    var backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 200) { // Exibe após rolar 200px
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
};