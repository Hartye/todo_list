const date = {
  loadDate() {
    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    document.querySelector(".date").innerHTML = nowYear;
  },
};

const DOM = {
  swap() {
    document.querySelector(".module").classList.toggle("active");
    document.querySelector(".copy").classList.toggle("deactivate");
  },
};

date.loadDate();
