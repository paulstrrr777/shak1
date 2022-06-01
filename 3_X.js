let buttonCall1 = document.querySelector(".buttonCall");
let callMe1 = document.querySelector(".callMeWindow");
buttonCall1.addEventListener("click", (e) => {
  let target = e.target;
  console.log(target);
  callMe1.classList.toggle("hidden");
});
let callMeX1 = document.querySelector("#X1");

callMeX1.addEventListener("click", (e) => {
  let target = e.target;
  console.log(target);
  callMe1.classList.toggle("hidden");
});
