function validateForm() {
    var user = document.form.user.value;
    var pass = document.form.pass.value;
    if (user == "admin" && pass == "user") {
        alert("Login Successfully");
        window.open("contact.html");
        return false;
    } else {
        alert("Login Unsuccess..");
    }
}