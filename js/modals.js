const closeBtns = document.querySelectorAll(".modalClose").forEach((e) => {
  e.addEventListener("click", function (x) {
    console.log(x.target.dataset.modal);
    var ModalId = x.target.dataset.modal;
    document.querySelector("#" + ModalId).classList.remove("active");
    document.body.classList.remove("active");
  });
});
const modallBtn = document.querySelectorAll(".modalBtn");
const modallItems = document.querySelectorAll(".modal");
modallBtn.forEach((e) => {
  onTabClick(modallBtn, modallItems, e);
});
function onTabClick(modallBtns, modallItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (e.srcElement.classList.contains("active")) {
      e.srcElement.classList.remove("active");
    } else if (!currentBtn.classList.contains("active")) {
      modallBtns.forEach(function (item) {
        item.classList.remove("active");
      });
      modallItems.forEach(function (item) {
        item.classList.remove("active");
      });
      //currentBtn.classList.add('active');
      currentTab.classList.add("active");
      document.body.classList.add("active");
    }
  });

}
window.addEventListener("click", (event) => {
  modallItems.forEach((black) => {
    if (black == event.target) {
      black.classList.remove("active");
      document.body.classList.remove("active");
    }
  });
});