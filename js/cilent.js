let cilent4 =  document.getElementById('anh_bon');
let cilent1 =  document.getElementById('anh_motx'); 
let cilent2 =  document.getElementById('anh_haix'); 
chaystep();
function chaystep(){
//  alert(document.body.offsetWidth);
  //1519
//document.body.offsetWidth
//cilent4.setAttribute('style', `font-size:${js_value}px`) ;

  //alert(document.body.offsetWidth)
var change = document.body.offsetWidth ;
  //const c4 = 40/99*document.body.offsetWidth - 25120/99;
  //const c4 = -25/413424*Math.pow(document.body.offsetWidth,2) + 20965/37584*document.body.offsetWidth - 8986720/25839;
  const c4 = -25/413424*Math.pow(change,2) + 20965/37584*change - 8986720/25839;
  const c1 = 695/1240272*Math.pow(change,2) - 115115/112752*change  + 37043780/77517; 
  const c2 = 89/310068*Math.pow(change,2) - 10325/28188*change  + 11945744/77517
  const c3 =  -10/273*change + 32200/39;
  const c3rigt =  320/819*change - 28490/117;
  const c5 =   85/819*change + 57605/117;
  const c5rigt =   220/819*change - 18490/117;
  const c6 =    25/819*change  +  53075/117;
  const c6rigt =     310/819*change - 27490/117;
 


  //console.log(c4)
  //alert(c4);
 // cilent4.setAttribute('style', `left:${c4}px`) ; 

 var r = document.querySelector(':root');
 var rs = getComputedStyle(r);

 if (change > 700){

 r.style.setProperty('--anhbontop', `${570}px`); 
 r.style.setProperty('--anhbon', `${c4}px`);

 r.style.setProperty('--anhmottop', `${480}px`);//700
  r.style.setProperty('--anhmot', `${c1}px`);

  r.style.setProperty('--anhhaitop', `${800}px`); 
  r.style.setProperty('--anhhai', `${c1}px`);




  // r.style.setProperty('--anhbatop', `${800}px`); //700
  // r.style.setProperty('--anhbarigt', `${30}px`);//700

  // r.style.setProperty('--anhnamtop', `${565}px`); //700
  // r.style.setProperty('--anhnamrigt', `${30}px`);//700

  // r.style.setProperty('--anhsautop', `${475}px`); //700
  // r.style.setProperty('--anhsaurigt', `${30}px`);//700


  r.style.setProperty('--anhbatop', `${c3}px`); //700
  r.style.setProperty('--anhbarigt', `${c3rigt}px`);//700
 
  r.style.setProperty('--anhnamtop', `${c5}px`); //700
  r.style.setProperty('--anhnamrigt', `${c5rigt}px`);//700

  r.style.setProperty('--anhsautop', `${c6}px`); //700
  r.style.setProperty('--anhsaurigt', `${c6rigt}px`);//700



  //cilent2.style.left = `${c2}px`;
 //cilent1.style.left = `${c1}px`;
 }
 if (change <= 700){
  const c4 = 11/25*change - 120;
  r.style.setProperty('--anhbon', `${c4}px`);
  const docao = -4/5*change + 1360;
  //r.style.setProperty('--anhbontop', `${800}px`);//700
  //r.style.setProperty('--anhbontop', `${1000}px`);//450
  r.style.setProperty('--anhbontop', `${docao}px`);//450

  //r.style.setProperty('--anhmot', `${180}px`); //700
  //r.style.setProperty('--anhmottop', `${720}px`);//700

 // r.style.setProperty('--anhmot', `${90}px`); //450
 //r.style.setProperty('--anhmottop', `${900}px`);//450
 const anhmot_left = 9/25*change -72;
 const anhmot_top = -18/25*change + 1224;
 r.style.setProperty('--anhmot', `${anhmot_left}px`); //450
  r.style.setProperty('--anhmottop', `${anhmot_top}px`);//450

 // r.style.setProperty('--anhhaitop', `${780}px`); //700
 // r.style.setProperty('--anhhai', `${90}px`); //700
//  r.style.setProperty('--anhhaitop', `${980}px`); //450
//  r.style.setProperty('--anhhai', `${10}px`); //450
 const anhhai_top = -17/25*change + 1256;
 const anhhai_left = 8/25*change - 134;
  r.style.setProperty('--anhhaitop', `${anhhai_top}px`); //450
  r.style.setProperty('--anhhai', `${anhhai_left}px`); //450
///////////////
const c66top = -37/50*change + 1348 - 15;
const c66right = 11/25*change - 118;

const c55top = -37/50*change + 1248 - 15;
const c55right = 11/25*change - 123;

const c33top = -37/50*change + 1303 - 15;
const c33right = 9/25*change - 152;

r.style.setProperty('--anhsautop', `${c66top}px`); //700
r.style.setProperty('--anhsaurigt', `${c66right}px`);//700

r.style.setProperty('--anhnamtop', `${c55top}px`); //700
r.style.setProperty('--anhnamrigt', `${c55right}px`);//700

r.style.setProperty('--anhbatop', `${c33top}px`); //700
r.style.setProperty('--anhbarigt', `${c33right}px`);//700




//   r.style.setProperty('--anhsautop', `${830}px`); //700
//   r.style.setProperty('--anhsaurigt', `${190}px`);//700

//  r.style.setProperty('--anhnamtop', `${730}px`); //700
//  r.style.setProperty('--anhnamrigt', `${185}px`);//700

//  r.style.setProperty('--anhbatop', `${785}px`); //700
//  r.style.setProperty('--anhbarigt', `${100}px`);//700



//   r.style.setProperty('--anhsautop', `${1015}px`); //450
//   r.style.setProperty('--anhsaurigt', `${80}px`);//450

//  r.style.setProperty('--anhnamtop', `${915}px`); //450
//  r.style.setProperty('--anhnamrigt', `${75}px`);//450

//  r.style.setProperty('--anhbatop', `${970}px`); //450
//  r.style.setProperty('--anhbarigt', `${10}px`);//450



  }
  
// cilent4.setAttribute('style', `left:${c4}px`) ; 

 //cilent4.style.left = `${c4}px`;




 


// if (change < 700){
//   const c4 = 11/25*change - 120;
//   cilent4.style.left = `${c4}px`;


// }

// var r = document.querySelector(':root'); // Dom tới khu vực biến này
// var rs = getComputedStyle(r);
// var kkk =  rs.getPropertyValue('--blue')
// alert(kkk);
// r.style.setProperty('--blue', '9px');
// var kkk =  rs.getPropertyValue('--blue')
// alert(kkk);




if (document.body.offsetWidth >= 900 && document.body.offsetWidth <= 1024) {

  const block_b =  document.getElementById('anh_mot');
  block_b.setAttribute('style', `width:${100}px`) ;  
}
if (document.body.offsetWidth > 1024) {

  const block_b =  document.getElementById('anh_mot');
  block_b.setAttribute('style', `width:${180}px`) ;  
}

setTimeout(function(){chaystep()},0)
}



function scale_wait(loaic){
    var cilentbon = false; 
    var cilent =  document.getElementById('cilent_zom');
    if (loaic == 4) {
     cilentbon =  document.getElementById('anh_bon');
    
    }
    if (loaic == 1) {
        cilentbon =  document.getElementById('anh_motx');
        
       }
       if (loaic == 2) {
        cilentbon =  document.getElementById('anh_haix');
        
       }
       if (loaic == 3) {
        cilentbon =  document.getElementById('anh_bax');
        
       }
       if (loaic == 5) {
        cilentbon =  document.getElementById('anh_namx');
        
       }
       if (loaic == 6) {
        cilentbon =  document.getElementById('anh_saux');
        
       }

    if (cilent) {
        cilent.setAttribute('style', `transform: scale(0.8,0.8);transition: all 1s ease`); 
        cilentbon.setAttribute('style', `transform: scale(0.8,0.8);transition: all 1s ease`); 
       //transition: all 1s ease;
    }

}


function click_cilent(loai){

event.preventDefault();
var cilentbon = false; 
var cilent =  document.getElementById('cilent_zom');
if (loai == 4) {
  
//button
 cilentbon =  document.getElementById('anh_bon');
}
if (loai == 1) {
    //button
cilentbon =  document.getElementById('anh_motx');
}
if (loai == 2) {
  
    //button
cilentbon =  document.getElementById('anh_haix');
}
if (loai == 3) {
  //button
cilentbon =  document.getElementById('anh_bax');
}
if (loai == 5) {
  //button
cilentbon =  document.getElementById('anh_namx');
}
if (loai == 6) {
  //button
cilentbon =  document.getElementById('anh_saux');
}
//view
var cilent_img =  document.getElementById('cilent_img');
var cilent_name =  document.getElementById('cilent_name');
var cilent_nv =  document.getElementById('cilent_nv');


if (cilent) {


   
    cilent.setAttribute('style', `transform: scale(0.4,0.4); `); 
    cilentbon.setAttribute('style', `transform: scale(1.2,1.2);`); 

     
        const str_a = cilentbon.src;
        const anh_but = str_a.slice(str_a.length-8);

        ///////////////////
     function doiten() {

        if (anh_but == "anh1.jpg")
        {
        //view    
        cilent_name .innerHTML = "Alen Walker";
        }
        //
        if (anh_but == "anh2.jpg")
        {
        //view    
        cilent_name .innerHTML = "Alvie Smith";
        }
//
if (anh_but == "anh3.jpg")
{
//view    
cilent_name .innerHTML = "Selena Gomez";
}
//
        if (anh_but == "anh4.jpg")
        {
        //view    
        cilent_name .innerHTML = "Ally Jan";
        }
//
if (anh_but == "anh5.jpg")
{
//view    
cilent_name .innerHTML = "Dawid Malan";
}
//
if (anh_but == "anh6.jpg")
{
//view    
cilent_name .innerHTML = "Shelly Ahsan";
}
//

        if (anh_but == "anh7.jpg")
        {
        //view    
        cilent_name .innerHTML = "rose smith";
        }

     }
        ///////////////////

        if (anh_but == "anh1.jpg")
        {
          //view
       
          cilent_img.setAttribute('src', `./images/anh1.jpg`); 
          
          cilent_nv .innerHTML = "SMB, Company"; 
        }
//////////////
if (anh_but == "anh2.jpg")
{
  //view

  cilent_img.setAttribute('src', `./images/anh2.jpg`); 
  
  cilent_nv .innerHTML = "CSO, Company"; 
}
//////////////

if (anh_but == "anh3.jpg")
{
  //view

  cilent_img.setAttribute('src', `./images/anh3.jpg`); 
  
  cilent_nv .innerHTML = "MIC, Company"; 
}
//////////////



        if (anh_but == "anh4.jpg")
          {
            //view
         
            cilent_img.setAttribute('src', `./images/anh4.jpg`); 
            
            cilent_nv .innerHTML = "DIV, Company"; 
          }
      /////

      if (anh_but == "anh5.jpg")
      {
        //view
      
        cilent_img.setAttribute('src', `./images/anh5.jpg`); 
        
        cilent_nv .innerHTML = "WWE, Company"; 
      }
      //////////////

      if (anh_but == "anh6.jpg")
      {
        //view
      
        cilent_img.setAttribute('src', `./images/anh6.jpg`); 
        
        cilent_nv .innerHTML = "SEA, Company"; 
      }
      //////////////



          if (anh_but == "anh7.jpg")
          {
            //view
         
            cilent_img.setAttribute('src', `./images/anh7.jpg`); 
            
            cilent_nv .innerHTML = "MRO, Company"; 
          }
  


let motlan = 0;



if (motlan == 0) {
    if (cilent_name .innerHTML == "Alen Walker") 
    {
   
      //button
      cilentbon.src = `./images/anh1.jpg`; 
      doiten();
      motlan = 1;
    }
  }

//

if (motlan == 0) {
    if (cilent_name .innerHTML == "Alvie Smith") 
    {
   
      //button
      cilentbon.src = `./images/anh2.jpg`; 
      doiten();
      motlan = 1;
    }
  }

//

if (motlan == 0) {
    if (cilent_name .innerHTML == "Selena Gomez") 
    {
   
      //button
      cilentbon.src = `./images/anh3.jpg`; 
      doiten();
      motlan = 1;
    }
  }

//


if (motlan == 0) {
    if (cilent_name .innerHTML == "Ally Jan") 
    {
   
      //button
      cilentbon.src = `./images/anh4.jpg`; 
      doiten();
      motlan = 1;
    }
  }

///
  
if (motlan == 0) {
    if (cilent_name .innerHTML == "Dawid Malan") 
    {
   
      //button
      cilentbon.src = `./images/anh5.jpg`; 
      doiten();
      motlan = 1;
    }
  }

///

if (motlan == 0) {
    if (cilent_name .innerHTML == "Shelly Ahsan") 
    {
   
      //button
      cilentbon.src = `./images/anh6.jpg`; 
      doiten();
      motlan = 1;
    }
  }

///



  if (motlan == 0) {
    if (cilent_name .innerHTML == "rose smith") //anh7
    {
   
      //button
      cilentbon.src = `./images/anh7.jpg`; //anh7
      doiten();
      motlan = 1;
    }
  }
//

      

    


     setTimeout(function(){scale_wait(loai)},100)
}




}