function onChange() {
  const password = document.querySelector("input[name=password]");
  const confirm = document.querySelector("input[name=confirm-password]");
  const message = document.getElementById("matching-msg");
  if (confirm.value === password.value) {
    message.style.visibility = "hidden";
    password.style.border = "1px rgb(218, 218, 218) solid";
    confirm.style.border = "1px rgb(218, 218, 218) solid";
  } else {
    message.style.visibility = "visible";
    password.style.border = "1px solid rgb(251, 81, 34)";
    confirm.style.border = "1px solid rgb(251, 81, 34)";
  }
}
