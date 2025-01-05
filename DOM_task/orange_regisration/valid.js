function showpass(id){
  let pass = document.getElementById(id);
  if (pass.type === "password") {
    pass.type = "text";
    pass.classList.replace("fa-eye-slash", "fa-eye");

  } else {
    pass.type = "password";
    pass.classList.replace("fa-eye", "fa-eye-slash");

  }
}

function getNextSeq() {
  let seq = parseInt(localStorage.getItem("seq")) || 0;
  seq += 1;
  localStorage.setItem("seq", seq);
  return seq;
}

const f1 = document.getElementById("form1").onsubmit = function (event) {
  event.preventDefault();

  let name = document.getElementById("text2").value;
  let email = document.getElementById("email1").value;
  let pass = document.getElementById("inputPassword1").value;
  let passcon = document.getElementById("inputPassword2").value;
  let mobile = document.getElementById("number").value;

  let reg1 = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i; 
  let reg2 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,18}$/;
  let reg3 = /^(077)[0-9]{7}$/;

  let e = document.getElementById("validEmail");
  let p = document.getElementById("validPassword");
  let c = document.getElementById("ConfirmPassword");
  let m = document.getElementById("validMobile");

  // Reset validation messages
  e.textContent = "Not a valid email";
  e.style.display = "none";
  p.textContent = "Not a valid pass";
  p.style.display = "none";
  c.textContent = "";
  c.style.display = "none";
  m.textContent = "Not a valid number";
  m.style.display = "none";

  let valid = true;

  if (!reg1.test(email)) {
    e.style.color = "red";
    e.style.display = "block";
    document.getElementById("email1").focus();
    valid = false;
  } else {
    e.style.display = "none";
  }

  if (!reg2.test(pass)) {
    p.style.color = "red";
    p.style.display = "block";
    document.getElementById("inputPassword1").focus();
    valid = false;
  } else {
    p.style.display = "none";
  }

  if (!reg3.test(mobile)) {
    m.style.color = "red";
    m.style.display = "block";
    document.getElementById("number").focus();
    valid = false;
  } else {
    m.style.display = "none";
  }

  if (pass !== passcon) {
    c.textContent = "Passwords do not match";
    c.style.color = "red";
    c.style.display = "block";
    valid = false;
  } else {
    c.style.display = "none";
  }

  if (valid) {

    let uId = getNextSeq();

    let user = {
      uid: uId,
      fullName: name,
      email: email,
      password: pass,
      mobileNumber: mobile,
    };

     let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    

    document.getElementById("form1").submit();
  }
};
