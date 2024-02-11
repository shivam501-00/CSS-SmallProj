const expand_btn = document.querySelector(".expand-btn");
let activeIndex;

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");

});
document.body.querySelectorAll(".tooltip").forEach((tooltip)=>{
    tooltip.style.overflow="hidden";
  })

const current= window.location.href;

const allLinks= document.querySelectorAll(".sidebar_links a");

allLinks.forEach((elem)=>{
    elem.addEventListener("click",function(){
        const hrefLinkclick=elem.href;

        allLinks.forEach((link)=>{
            if(link.href==hrefLinkclick){
                link.classList.add("active");
            }
            else{
                link.classList.remove("active")
            }
        });
    });
});

const searchInput= document.querySelector(".search_wrapper.svg");
searchInput.addEventListener("focus",(e)=>{
    document.body.classList.remove("collapsed")
});
