var idi = document.getElementById("idi");
var num = document.getElementById("num");
var re = document.getElementById("re");
var dob = document.getElementById("dob");
var email = document.getElementById("email");
var branch = document.getElementById("branch");
var dom = document.getElementById("dom");
var fb = document.getElementById("fb");
var insta = document.getElementById("insta");
var database = firebase.database();

function validform() {
    if(num.value=='' || idi.value==''||re.value==''||dob.value==''||email.value==''||branch.value==''||dom.value=='')
      alert("fill up all the fields") ;
    else if(document.querySelector("#num").value.length!=10)
    alert("number should be of 10 digits") ; 
    else
    alert("thank u") ;
}
