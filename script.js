var allBtns = document.querySelectorAll(".tab-btn");

for (let b = 0; b < allBtns.length; b++) {
  allBtns[b].addEventListener("click", function () {
    const data = this.dataset.tab;
    const ids = document.getElementById(data);

    var allContent = document.querySelectorAll(".tabcontent");

    for (let s = 0; s < allContent.length; s++) {
      allContent[s].style.display = "none";
    }

    for (let s = 0; s < allBtns.length; s++) {
      allBtns[s].classList.remove("active");
    }

    this.classList.add("active");
    ids.style.display = "flex";
  });
}

document.querySelector(".tab-btn").click();





var btns = document.querySelectorAll(".btn");

for (let b = 0; b < btns.length; b++) {
  btns[b].addEventListener("click", function () {
    const data = this.dataset.box;
    const ids = document.getElementById(data);

    var allContent = document.querySelectorAll(".BoxContent");

    for (let s = 0; s < allContent.length; s++) {
      allContent[s].style.display = "none";
    }

    for (let s = 0; s < btns.length; s++) {
      btns[s].classList.remove("react");
    }

    this.classList.add("react");
    ids.style.display = "block";
  });
}

document.querySelector(".btn").click();