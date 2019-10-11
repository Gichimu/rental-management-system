
//contact validation
// function validate(){
//   var test = "test";
//   var email = "email@domain.com"
//   var message = "a message"
//   test = document.getElementById("name").value;
//   email = document.getElementById("email").value;
//   message = document.getElementById("msg").value;
//   phone = document.getElementById("phone").value;

//   if(test=="" || email=="" || message=="" || phone==""){
//   alert("All fields are required");
//   return
//   }else{

//   alert("Thank you " + test + " for contacting us  We have received your message ");
//   }
// }
/*******contact validation */





//hover text for index images

$(document).ready(function(){
  $("#img1").mouseenter(function(){
    $("#overlay1").show();
    
  });
   $("#img1").mouseleave(function(){
   $("#overlay1").hide();
   });
  $("#img2").mouseenter(function(){
    $("#overlay2").show();
    
  });
  $("#img2").mouseleave(function(){
    $("#overlay2").hide();
  });
   $("#img3").mouseenter(function(){
    $("#overlay3").show();
    
  });
   $("#img3").mouseleave(function(){
   $("#overlay3").hide();
   });

    $("#login-btn").click(function(){
      window.location.href = "profile.html";
    });

    $("#btn-profile").click(function(){
      window.location.href = "single-view.html";
    });

    $("#search").click(function(){
      window.location.href = "results.html";
    });

   /* login authentication */
   $("button#savebtn").click(function(){

        var pass1 = document.getElementById("password1");
        var pass2 = document.getElementById("password2");
        var email = document.getElementById("email");

        //alert(pass1.value+""+pass2.value)

        if(pass1.value !== pass2.value){
            alert("Your passwords do not match, please try again!");
            return false;
        }else if(pass1.value === "" || pass2.value === "" || email.value === ""){
          alert("Please fill out everything");
          return false;
        } else{
          return true;
        }
        
        localStorage.setItem('email', email.value)
        localStorage.setItem('password', pass1.value)
   });
      
   
});
