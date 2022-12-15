document.querySelector("#show-booking").addEventListener("click", function() {
    document.querySelector(".popup").classList.add("active2");
    document.querySelector(".background-popup").classList.add("active1");
});
document.querySelector(".close-btn").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("active2");
    document.querySelector(".background-popup").classList.remove("active1");
});