function footer_4(){
   
    document.getElementById("footer_row1").innerHTML = `
    
    <div id="col_re_1" class="col-lg-5 col-md-6">
    <div class="single-footer-item">
        <div class="footer-logo">
            <a href="#">
               <div class="footer_ggg">
                <img src="images/logo.png" alt="logo">
                <h3> AIC Hospital </h3>
                </div>
            </a>
        </div>
        <p class="footer_thep">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        <div class="footer-social">
            <ul>
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                <li><a href="#"><i class="fab fa-youtube"></i></a></li>
            </ul>
        </div>
    </div>
    </div>
    
    
    <div id="col_re_2" class="col-lg-2 col-md-6">
    <div class="single-footer-item">
        <div class="link footer_thep">
            <h4>Links</h4>
            <ul>
                <li><a class="footer_thep href="#">Popular Package</a></li>
                <li><a class="footer_thep href="#">Services</a></li>
                <li><a class="footer_thep href="#">Testimonials</a></li>
                <li><a class="footer_thep href="#">Contact </a></li>
            </ul>
        </div>
    </div>
    </div>
    
    <div id="col_re_3" class="col-lg-2 col-md-6">
    <div class="single-footer-item">
        <div class="faq title footer_thep">
            <h4>FAQ</h4>
            <ul>
                <li><a class="footer_thep href="#">How much Cost ?</a></li>
                <li><a class="footer_thep href="#">How can I apply ?</a></li>
                <li><a class="footer_thep href="#">What is the process ?</a></li>
                <li><a class="footer_thep href="#">How Guide help us ?</a></li>
            </ul>
        </div>
    </div>
    </div>
    
    <div id="col_re_4" class="col-lg-3 col-md-6">
    <div class="single-footer-item">
        <div class="contact title footer_thep">
            <h4>contact</h4>
            <ul>
                <li><a  class="footer_thep" href="#"><i class="fas fa-envelope"></i > <a class="tt_infor"> info@company.com </a> </a></li>
                <li><a class="footer_thep" href="#"><i class="fas fa-phone-alt"></i> <a class="tt_infor">  +12 123 4567</a></a></li>
                <li><a class="footer_thep" href="#"><i class="fas fa-map-marker-alt"></i> <a class="tt_infor"> 12 - Pkview, San Joes, NY-1206, USA</a> </a></li>
            </ul>
        </div>
    </div>
    
    </div>
    `;
    
    
    }
    
    ////////////////////////////////
    function footer_22(){
    var check_row1 = document.getElementById('footer_row1'); 
    check_row1.innerHTML = `
    <div id="col_re_1" class="col-lg-5 col-md-6">
    <div class="single-footer-item">
        <div class="footer-logo">
            <a href="#">
               <div class="footer_ggg">
                <img src="images/logo.png" alt="logo">
                <h3> AIC Hospital </h3>
               </div>
            </a>
        </div>
        <p class="footer_thep">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        <div class="footer-social">
            <ul>
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                <li><a href="#"><i class="fab fa-youtube"></i></a></li>
            </ul>
        </div>
    </div>
    </div>
    
    
    <div id="col_re_2" class="col-lg-2 col-md-6">
    <div class="single-footer-item">
        <div class="link footer_thep">
            <h4>Links</h4>
            <ul>
                <li><a class="footer_thep href="#">Popular Package</a></li>
                <li><a class="footer_thep href="#">Services</a></li>
                <li><a class="footer_thep href="#">Testimonials</a></li>
                <li><a class="footer_thep href="#">Contact </a></li>
            </ul>
        </div>
    </div>
    </div>
    `;
    
    
    //////////////////////////////
    var check_row2 = document.getElementById('footer_row2'); 
    check_row2.innerHTML = `
    <div id="col_re_3" class="col-lg-2 col-md-6">
    <div class="single-footer-item">
        <div class="faq title footer_thep">
            <h4>FAQ</h4>
            <ul>
                <li><a class="footer_thep href="#">How much Cost ?</a></li>
                <li><a class="footer_thep href="#">How can I apply ?</a></li>
                <li><a class="footer_thep href="#">What is the process ?</a></li>
                <li><a class="footer_thep href="#">How Guide help us ?</a></li>
            </ul>
        </div>
    </div>
    </div>
    
    <div id="col_re_4" class="col-lg-3 col-md-6">
    <div class="single-footer-item">
        <div class="contact title footer_thep">
            <h4>contact</h4>
            <ul>
                <li><a class="footer_thep href="#"><i class="fas fa-envelope"></i > <a class="tt_infor"> info@company.com</a></a></li>
                <li><a class="footer_thep href="#"><i class="fas fa-phone-alt"></i> <a class="tt_infor"> +12 123 4567</a></a></li>
                <li><a class="footer_thep href="#"><i class="fas fa-map-marker-alt"></i> <a class="tt_infor"> 12 - Pkview, San Joes, NY-1206, USA</a></a></li>
            </ul>
        </div>
    </div>
    
    </div>
    `;
    
    }
    
    
    
    // footer_create(4);
    
    
    chaystep_footer(); // 
    function chaystep_footer(){
    var change = document.body.offsetWidth ;
    if (change >= 1030){
        document.getElementById('footer_row2').innerHTML = "";
        footer_4();
    
    }
    if (change < 1030){
        document.getElementById("footer_row1").innerHTML = '';
        footer_22()
    
    }
    
    setTimeout(function(){chaystep_footer()},500) ; // sau m???t th???i gian l???i g???i h??m ???? ch???y
    }

document.querySelector(".bottomToup").addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
    });
});
