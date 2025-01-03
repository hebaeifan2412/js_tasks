

  const f1 =document.getElementById("form1").onsubmit = function myFunction () {
    console.log("hi");
    event.preventDefault();
    
    let email = document.getElementById("email1").value;

    let reg = /^\w+\d*@gmail.com$/gi;
    console.log(email.match(reg));
    
  }


