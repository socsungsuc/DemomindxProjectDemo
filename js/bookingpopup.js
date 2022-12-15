document.querySelector("#show-booking").addEventListener("click", function() {
    document.querySelector(".popup").classList.add("active2");
    document.querySelector(".background-popup").classList.add("active1");
});
document.querySelector(".close-btn").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("active2");
    document.querySelector(".background-popup").classList.remove("active1");
});

document.querySelector(".form-element button").addEventListener("click", function(){
    alert('Đặt lịch khám thành công');
    document.querySelector(".popup").classList.remove("active2");
    document.querySelector(".background-popup").classList.remove("active1");
});