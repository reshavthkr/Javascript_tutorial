const validateForm = (e) => {
    e.preventDefault();
    var fname = document.getElementById("fname").value
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value
    console.log(fname.length)
    if (fname.length < 3) {
        alert("Name is very small ")
    }
    document.getElementById("span_name").innerHTML = fname
    document.getElementById("span_email").innerHTML = email
    document.getElementById("span_message").innerHTML = message
    document.getElementById("myform").reset();
    document.getElementById("span_name").style.fontSize = "200px"
}