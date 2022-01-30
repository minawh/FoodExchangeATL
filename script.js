//get user info from survey
function getInfo(){
  var userName = document.getElementById("name").value ;
  var userMail = document.getElementById("email").value ;
  var userCity = document.getElementById("city").value ;
  var userRole = document.getElementById("role").value ;
  var userName = document.getElementById("name").value ;
  var userDistance = displayRadioValue();
  //to test if 
  return(userName);
}

//const activeUser = new Array(getInfo());
console.log(getInfo());

function displayRadioValue() {
   var distance = document.getElementsByName('travel');
   for(i = 0; i < distance.length; i++) {
    if(distance[i].checked)
      return(distance[i])
   }
}