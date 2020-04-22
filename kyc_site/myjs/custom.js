function postionHeader(headerElement, afterHeaderElement){
    var topDist = afterHeaderElement.getBoundingClientRect().top;
    if(topDist < 0){
        headerElement.classList.add('fixed-header');
        afterHeaderElement.classList.add('pt-174');
    }
    else{
        headerElement.classList.remove('fixed-header');
        afterHeaderElement.classList.remove('pt-174');
    }
}
window.addEventListener("load", function(loadEvent){
    var headerElement = document.querySelector(".header-top");
    var afterHeaderElement = document.querySelector(".header-content") || headerElement.nextElementSibling;
    postionHeader(headerElement, afterHeaderElement);
    window.addEventListener("scroll", function(event){
        postionHeader(headerElement, afterHeaderElement);
    });              
    //////



})