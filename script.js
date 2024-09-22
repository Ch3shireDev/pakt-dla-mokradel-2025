function updatePage() {
    const parts = window.location.hash.split("/");
    const hash = parts[parts.length - 1] || "#home";
    const navItems = document.querySelectorAll(".nav-link");
    $("section").hide();
    navItems.forEach((item, index) => {
      if (item.getAttribute("href") === hash) {
        item.classList.add("active");
        $(hash).show();
        
        $(`.header-image`).hide();
        $(`#header-0${index}`).show();


      } else {
        item.classList.remove("active");
      }
    });
  }

  $(document).ready(() => {
    updatePage();
    window.addEventListener("hashchange", updatePage.bind(this));
  });


$('.thumbnail').click(function(){
    modal.style.display = "block";
    modalImg.src = this.src;
});

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImage");
var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
