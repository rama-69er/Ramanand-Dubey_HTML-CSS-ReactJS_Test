// Logic for Mobile Menu --------------
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Logic for Form Validation --------------
function data() {
  var fName = document.querySelector("#fName").value;
  var lName = document.querySelector("#lName").value;
  var pNumber = document.querySelector("#pNumber").value;
  var passWord = document.querySelector("#passWord").value;

  if (!(fName >= "a" && fName <= "z") && !(fName >= "A" && fName <= "Z")) {
    return false;
    alert("Enter a valid name");
  } else if (
    !(lName >= "a" && lName <= "z") &&
    !(lName >= "A" && lName <= "Z")
  ) {
    return false;
    alert("Enter a valid name");
  } else if (!(passWord <= 8)) {
    return false;
    alert("Enter a valid Number");
  } else if (pNumber <= 10 || pNumber >= 10) {
    return false;
    alert("Enter a valid Number");
  } else {
    return true;
  }
}

// Logic for Getting the Form Data as Object --------------
document.querySelector("#form").addEventListener("submit", (e) => {
  const data = new FormData(e.target);
  const entries = Object.fromEntries(data.entries());
  console.log(entries);
});
