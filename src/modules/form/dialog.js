const button = document.getElementById("new-schedule");
const modal = document.querySelector("dialog");
const schedule = document.getElementById("schedule");

button.onclick = function(){
  modal.showModal();
}
