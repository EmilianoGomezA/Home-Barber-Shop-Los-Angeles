window.addEventListener("scroll", function(){
    const header = document.getElementById("header");
    header.classList.toggle("header-scroll", window.scrollY>0);
})