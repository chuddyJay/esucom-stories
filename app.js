let respond = document.querySelectorAll(".respond").length;
for (var i = 0; i < respond; i++) {
  document.querySelectorAll(".respond")[i].addEventListener("click", function() {
    document.querySelector(".responsive-menu-container").style.display = "block";
  })
}


document.querySelector(".closeButton h1").addEventListener("click", function() {
  document.querySelector(".responsive-menu-container").style.display = "none";

})


function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

const firebaseConfig = {
  apiKey: "AIzaSyDVz_mQbXSaqF1IKJVFvjnT2NOpTUhYLIg",
  authDomain: "movie-blog-a13a2.firebaseapp.com",
  projectId: "movie-blog-a13a2",
  storageBucket: "movie-blog-a13a2.appspot.com",
  messagingSenderId: "422158153792",
  appId: "1:422158153792:web:9157e42028fc5109ad07a5",
  measurementId: "G-B3Z9YZ47RX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Reference for form collection(3)
let formMessage = firebase.database().ref('register');

document.getElementById('registrationform').addEventListener('submit', formSubmit);

$(".submitButton").click(formSubmit());


function formSubmit(e) {
  e.preventDefault();

  var errorMessage = "";
  var successMessage = "";

  if (isEmail($("#email").val()) === false) {

    errorMessage += "<p>This email is not valid</p>"

  };

  if ($("#password").val() != $("#confirmPassword").val()) {

    errorMessage += "<p>This password is not valid</p>"

  };

  if ($("#email").val() === "") {

    errorMessage += "<p>Email field cannot be left empty</p>"

  };


  if (errorMessage != "") {
    $(".error-message-container").show();
    $(".error-message").html(errorMessage);

  } else {
    successMessage += "Account Created Successfully!!!"
    $(".success-message-container").show();
    $(".success-message").html(successMessage)
  }

  // Get Values from the DOM
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;

  sendMessage(email, pasword);

  document.getElementById("registrationform").reset();
}



function sendMessage(email, pasword){
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      email: email,
      password: password
    });
}
