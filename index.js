window.onload = function(){

    window.onscroll = function(){stickNavBar()};
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop - 35;

    function stickNavBar(){
        if(window.pageYOffset >= sticky){
            navbar.classList.add("sticky");
        }else{
            navbar.classList.remove("sticky");
        }
    }






}