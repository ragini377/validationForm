let formStartTime; 

// Start timer when page/form loads
$(document).ready(function () {
    formStartTime = new Date().getTime();
});

var errormsg = "";
var missingfield= "";

//  Restrict user from typing letters or symbols
$("#phoneno").on("keypress", function (e) {
  if (e.which < 48 || e.which > 57) {
    e.preventDefault(); // block non-numeric keys
  }
});

// Clean pasted input (remove characters)
$("#phoneno").on("input", function () {
  this.value = this.value.replace(/[^0-9]/g, '');
});

//check email validation code
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
//check phoneno validation
function isPhone(phoneno) {
    var phone = $("#phoneno").val().trim();
  var regex =  /^[6-9]\d{9}$/;
  return regex.test(phone);
}
//check password validation
function isPassword(password) {
    var password = $("#password").val().trim();
    var regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8}$/; //(ex-Secure@789)
     return regex.test(password);
}




// show and hide password
  
    $("#togglePassword").click(function () {
      var passwordField = $('#password');
      var fieldType = passwordField.attr('type');

      if (fieldType === 'password') {
        passwordField.attr('type', 'text');
        $(this).text('🙈'); // Hide icon
      } else {
        passwordField.attr('type', 'password');
        $(this).text('👁️'); // Show icon
      }
    });
      $("#togglePassword1").click(function () {
      var passwordField = $('#confirmpassword');
      var fieldType = passwordField.attr('type');

      if (fieldType === 'password') {
        passwordField.attr('type', 'text');
        $(this).text('🙈'); // Hide icon
      } else {
        passwordField.attr('type', 'password');
        $(this).text('👁️'); // Show icon
      }
    });
 
//submit button Click Event

$("#submitbutton").click(function(){
      
//for email  validation and check empty

    if($("#email").val()  == "")
    {
       missingfield +="<p>Please fill Email id.</p>"; 
       $("#error").html( missingfield);
      }
     else if(isEmail($("#email").val()) == false){
       errormsg += "<p>Email Id is not right.</p>";
       $("#error").html(errormsg);
   }
 //for  phoneNo  validation and check empty
   if($("#phoneno").val() == "" && $.isNumeric($("#phoneno").val())== false)
    {
       missingfield +="<p> Please fill Phone Number</p>";
       $("#error").html( missingfield);
        }
       else if(isPhone($("#phoneno").val()) == false){
        errormsg += "<p>Phone Number is not right</p>";
        $("#error").html(errormsg);
      }
   
        
 //for  password  validation and check empty
    if($("#password").val() == "")
    {
      missingfield +="<p>Please fill Password</p>";
      $("#error").html( missingfield);
    }
    else if(isPassword($("#password").val()) == false){
        errormsg += "<p>Password is not in correct format</p>";
         $("#error").html(errormsg);
    }


 //for  password  validation and check empty
    if($("#confirmpassword").val() == "")
    {
      missingfield +="<p>Please fill Confirm Password</p>";
      $("#error").html( missingfield);
    }
    else if($("#confirmpassword").val() != $("#password").val()){
        errormsg += "<p>Confirm Password not matched with Password</p>";
         $("#error").html(errormsg);
  
        
    }
  // sucesss Msg and time traker 
 else if (errormsg === "" && missingfield === "")
{
    $("#success").html("You are registered");
    const formEndTime = new Date().getTime();
    const totalTime = (formEndTime - formStartTime) / 1000; // in seconds
    $("#reactionResult").html("⏱️ Time taken to fill the form: <strong>" + totalTime.toFixed(2) + "</strong> seconds");
}  
 });
