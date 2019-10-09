
//contact validation
function validate(){
  var test = "test";
  var email = "email@domain.com"
  var message = "a message"
  test = document.getElementById("name").value;
  email = document.getElementById("email").value;
  message = document.getElementById("msg").value;
  phone = document.getElementById("phone").value;

  if(test=="" || email=="" || message=="" || phone==""){
  alert("All fields are required");
  return
  }else{

  alert("Thank you " + test + " for contacting us  We have received your message ");
  }
}
/*******contact validation */

//hover text for index images

$(document).ready(function(){
  $("#img1").mouseover(function(){
    $("#1").addClass(".show");
  });
  $("#img1").mouseleave(function(){
    $("#1").addClass(".hidden");
  });
});
