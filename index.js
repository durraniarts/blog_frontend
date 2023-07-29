let mainLinks = document.querySelectorAll(".first-data");
let toggle_data = document.querySelectorAll(".drop-down");
let toggle = document.querySelector(".toggle");
let nav = document.querySelector(".toggle-section ");

toggle.onclick = (e) => {
  // console.log(e);
  nav.classList.toggle("show");
  if (nav.classList.contains("show")) {
    toggle.src = "./images/icon-close.svg";
  } else {
    toggle.src = "./images/icon-hamburger.svg";
  }
};

mainLinks.forEach((single) => {
  //   console.log(single);
  single.addEventListener("click", (e) => {
    toggle_data.forEach((data) => {
      data.style.display = "none";
      //   console.log(data.style.display);
    });

    if (e.target.accessKey === "open") {
      e.target.parentNode.children[1].style.display = "block";
      e.target.children[0].style.transform = "rotate(-180deg)";
      // console.log;
    }
    if (e.target.accessKey === "img") {
      e.target.style.transform = "none";
      // console.log(e.target.style);
    }
    // console.log(e);
    e.preventDefault();
  });
});
