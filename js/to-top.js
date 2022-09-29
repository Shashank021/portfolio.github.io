var scrollTopBtn = document.getElementById("to-top");
if(scrollTopBtn){
    scrollTopBtn.addEventListener("click",fun)
    function fun(){
        window.scrollTo(0,0);
    }
}