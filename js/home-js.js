

var articleSwitcher = function(){
    
    var contentBlocks = document.getElementsByClassName("contentblock");
    var articleHeads = document.getElementsByClassName("article-head");
    var articles = document.getElementsByClassName("article");

    var i;
    for(i = 0; i < document.getElementsByClassName("contentblock").length; i++){          
        if(i % 2 === 0){
            articleHeads[i].style.float = "left";
            articleHeads[i].style.marginRight = "50px";
            articleHeads[i].firstElementChild.style.textAlign = "left";
        } else {
            articleHeads[i].style.float = "right";
            articleHeads[i].style.marginLeft = "50px";
            articleHeads[i].firstElementChild.style.textAlign = "right";
        }
    }
}

$(document).ready(articleSwitcher);