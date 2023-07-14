let loginForm = document.getElementById("myform");
alert("Please try to open in Laptop");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let password = document.getElementById("inputPassword6");

  if ( password.value == "sachin@1234") {
    location.href="index2.html";
  } else {
    alert("wrong password");
    location.reload();
;
    password.value = "sachin@1234";
  }
});
