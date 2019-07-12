
var columnWraper = function(){

    var inner = document.getElementsByClassName("art-container");

    for(var i = 0; i < inner.length; i++){
        if( i % 2 === 0){
            inner[i].classList.add("art-column-1");
        } else {
            inner[i].classList.add("art-column-2");
        }
    }

    $(".art-column-1").wrapAll("<div class='art-column' />");
    $(".art-column-2").wrapAll("<div class='art-column' />");

}

var modalBoxOpener = function(){
    
    var clickable = document.getElementsByClassName("art-container");

    for(var i = 0; i < clickable.length; i++){
        clickable[i].onclick = function(event){
            var clickedId = this.id;
            var imgSrc = this.getElementsByTagName("img")[0].src;
            openModalBox(clickedId, imgSrc);
        }
    }

    closeModalBoxListener();
}

var openModalBox = function(artId, imgSrc){

    var modalBoxContainer = document.getElementsByClassName("modalbox-container")[0];
    var toShowImage = document.getElementById("to-show-image");
    //var toShowDescription = document.getElementById("description-" + artId);
    
    toShowImage.src = imgSrc;
    //toShowDescription.style.display = "block";

    modalBoxContainer.style.display = "block";
    setTimeout(function(){modalBoxContainer.classList.add("open-modalbox");}, 20);
}

var closeModalBoxListener = function(){
    var modalBoxContainer = document.getElementsByClassName("modalbox-container")[0];
    modalBoxContainer.onclick = function(event){
        if(event.target === this){
            modalBoxContainer.classList.remove("open-modalbox");
            setTimeout(function(){
                modalBoxContainer.style.display = "none";
                //$(".description").hide(); 
            }, 500);          
        }
    }
}

var imageNames = [
    "character_01.jpg",
    "character_02.jpg",
    "character_03.jpg",
    "character_04.jpg",
    "character_05.jpg",
    "character_06.jpg",
    "character_07.jpg",
    "character_08.jpg",
    "character_09.jpg",
    "character_10.jpg",
    "character_11.jpg",
    "character_12.jpg",
    "character_13.jpg",
    "character_14.jpg",
    "character_15.jpg",
    "character_16.jpg",
    "character_17.jpg",
    "character_18.jpg",
    "character_19.jpg",
    "character_20.jpg",
    "character_21.jpg",
    "character_22.jpg",
    "character_23.jpg",
    "character_24.jpg",
    "character_25.jpg",
    "character_26.jpg",
    "character_27.jpg",
    "character_28.jpg",
    "character_29.jpg",
    "character_30.jpg",
    "character_31.jpg",
    "character_32.jpg",
    "character_33.jpg",
    "character_34.jpg",
    "character_35.jpg",
    "character_36.jpg",
    "character_37.jpg",
    "character_38.jpg",
    "cire_01.JPG",
    "cire_02.jpg",
    "cire_03.jpg",
    "cire_04.jpg",
    "cire_05.jpg",
    "cire_06.jpg",
    "cire_07.jpg",
    "cire_08.jpg",
    "cire_09.jpg",
    "cire_10.jpg",
    "cire_11.jpg",
    "cire_12.jpg",
    "cire_13.jpg",
    "silhouette_01.jpg",
    "silhouette_02.jpg",
    "silhouette_03.jpg",
    "silhouette_04.jpg",
    "silhouette_05.jpg"
]

var createGallery = function() {
    injectImages(imageNames);
}

var injectImages = function(names) {
    var container = document.getElementById("gallery-pictures-container");
    for (i = 0; i < names.length; ++i) {
        container.appendChild(createImageNode(names[i]));
    }
}

var createImageNode = function(name) {
    var node = document.createElement("div");
    node.setAttribute("class", "art-container");

    var image = document.createElement("img");
    image.setAttribute("class", "art-img");
    image.setAttribute("src", "../images/" + name);

    var hoverFilter = document.createElement("div");
    hoverFilter.setAttribute("class", "hover-filter");

    var moreInfoBtn = document.createElement("button");
    moreInfoBtn.setAttribute("class", "more-info-btn");
    moreInfoBtn.innerHTML = "👁"

    node.appendChild(image);
    node.appendChild(hoverFilter);
    node.appendChild(moreInfoBtn);

    return node
}

$(document).ready(createGallery)
$(document).ready(columnWraper);
$(document).ready(modalBoxOpener);