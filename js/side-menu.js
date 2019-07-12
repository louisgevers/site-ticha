
var sideMenuOpener = function(){

    var openButton = document.getElementById("side-menu-opener");
    var closeButton = document.getElementById("close-side-menu-btn");
    
    var sideMenu = document.getElementById("side-menu");
    var sideMenuShadow = document.getElementById("side-menu-shadow");

    openButton.onclick = function(event){
        sideMenu.style.width = "50%";
        sideMenuShadow.style.width = "100%";
    }

    closeButton.onclick = function(event){
        sideMenu.style.width = "0";
        sideMenuShadow.style.width = "0";
    }

    sideMenuShadow.onclick = function(event){
        if(event.target === this){
            closeButton.onclick();
        }
    }

}

$(document).ready(sideMenuOpener);