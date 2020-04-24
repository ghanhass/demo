function postionHeader(headerElement, afterHeaderElement, data){
    var topDist = afterHeaderElement.getBoundingClientRect().top;
    if(topDist < 0){
        headerElement.classList.add('fixed-header');
        /*afterHeaderElement.classList.add('pt-174');*/
        afterHeaderElement.style.paddingTop = (data.specificPaddingTop + 74)+"px"
    }
    else{
        headerElement.classList.remove('fixed-header');
        /*afterHeaderElement.classList.remove('pt-174');*/
        afterHeaderElement.style.paddingTop = "";
    }
}
window.addEventListener("load", function(loadEvent){
    var headerElement = document.querySelector(".header-top");
    var afterHeaderElement = document.querySelector(".header-content") || document.querySelector(".main");
    var specificPaddingTop = parseInt(window.getComputedStyle(afterHeaderElement).paddingTop);
    postionHeader(headerElement, afterHeaderElement,{'specificPaddingTop': specificPaddingTop});
    window.addEventListener("scroll", function(event){
        postionHeader(headerElement, afterHeaderElement, {'specificPaddingTop': specificPaddingTop});
    });              
    //////

    var triggerModalBtn = document.querySelector(".modal-trigger");
    if(triggerModalBtn){
        var targetModal = triggerModalBtn.dataset.modalid;
        triggerModalBtn.addEventListener("click", function(ev){
            document.querySelector("#"+targetModal).classList.remove("hide");
        });

        var modalCloseBtn = document.querySelector("#"+triggerModalBtn.dataset.modalid+"-close-btn");
        if(modalCloseBtn){
            modalCloseBtn.addEventListener("click", function(ev){
                document.querySelector("#"+targetModal).classList.add("hide");
            })
        }
    }
    

})