function hieny(){
   
    document.getElementById("den_y").style.display = "block";  
    document.getElementById("me_y").style.display = "block";  
    document.getElementById("y_to_be").innerHTML = '<button  id="y_dong" onclick="hieny_an()" title="Close (Esc)" type="button" class="mfp-close">×</button><iframe id="xxx" class="mfp-iframe" src="//www.youtube.com/embed/9_nyG2TUDcQ?autoplay=1" frameborder="0" allowfullscreen=""></iframe>';   

}

function hieny_an(){ 
   
            document.getElementById("y_dong").remove();
            document.getElementById("xxx").remove();
            document.getElementById("den_y").style.display = "none";
            document.getElementById("me_y").style.display = "none";  

} 