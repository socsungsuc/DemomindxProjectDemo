document.addEventListener('scroll', () => {
    var scrollTop = document.documentElement.scrollTop;
    var menubar = document.getElementById("menuBar");
    var menucontainer = document.getElementById("menuContainer");
    var sticky = menubar.offsetTop;
    if (scrollTop > sticky)
    {
        menubar.classList.add("stickymenubar");
        menucontainer.classList.add("stickymenucontainer")
    }
    else
    {
        menubar.classList.remove("stickymenubar");
        menucontainer.classList.remove("stickymenucontainer");
    }
});


document.querySelectorAll(".menu-col ul.menu-content li a").forEach(anchor =>{
    anchor.addEventListener("click",function(e){
        console.log("hello");
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});

function toggleFunction(){
    var x = document.getElementById("menucol");
    if (x.className == "menu-col")
    {
        x.className += " responsive";
    } else{
        x.className = "menu-col";
    }
}

function itemMenuFunction(){
    var x = document.getElementById("menucol");
    if (x.className != "menu-col"){
        x.className = "menu-col";
    }
}



// $(document).ready(function(){
//     $('#toggle').click(function(){
//         alert('ok');
//         // $('#menucol').slideToggle();
//     });
// });


// $(window).resize(function(){
//     var width = $(window).width();
//     if (width <= 900){
//         $(document).ready(function(){
//             $('.menu-item1').click(function(){
//                 $('#menucol').hide();
//             });
//         });
//     }
//     else $('#menucol').show();
// });
