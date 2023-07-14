let loginForm = document.getElementById("myform");


loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let password = document.getElementById("inputPassword6");

  if ( password.value == "sachin@1234") {
    location.href="index2783644dilp143143loveokokdht.html";
  } else {
    alert("wrong password");
    location.reload();
;
    password.value = "sachin@1234";
  }
});
