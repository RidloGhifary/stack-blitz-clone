const closeBtn = document.getElementById('closeNavButton')
const resNavbar = document.querySelector('.outside'),
  openNavbar = document.getElementById('openNavbar')


closeBtn.addEventListener('click', function () {
  resNavbar.classList.add('close')
  resNavbar.classList.remove('open')
})

openNavbar.addEventListener('click', function () {
  resNavbar.classList.add('open')
  resNavbar.classList.remove('close')
})

//const email = document.getElementById('email'),
//  subscrive = document.getElementById("subscribe")

//email.addEventListener('input', function (e) {
//  e.preventDefault();
//  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
 
//  if (eInput.value == "") {
//    text.innerText = "Email can't be blank";
//  } else if (!eInput.value.match(pattern)) { //if patter is not matched with user's enter value
//    text.innerText = "Please enter a valid email";
//  } else {
//    form.classList.replace("error", "valid"); //replacing error class with valid class
//    text.innerText = "This is a valid email";
//  }
//})