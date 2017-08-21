
/*var button = document.getElementById('counter');

button.onclick = function() {
  //Create a request Object 
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
   if(request.readyState === XMLHttpRequest.DONE) {
       if(request.status === 200){
           var counter = request.responseText;
           var span = document.getElementById('count');
           span.innerHTML = counter.toString();
       }
   } 
    
  };
  //Capture the response and store it a variable
  // Render the variable in th ecorrect span    
  //counter = counter + 1;
  //var span = document.getElementById('count');
 // span.innerHTML = counter.toString();
 //Make a request 
 request.open('GET','http://jesthisanjeeta.imad.hasura-app.io/counter',true);
 request.send(null);
};*/
//Submit user name and password 

var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //Make a request to server nd send name
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
       if(request.readyState === XMLHttpRequest.DONE) {
           if(request.status === 200){
            console.log('user logged in');
            alert('Logged in succssfully');
   }else if(request.status === 403){
       alert('Username/password is incorrect');
   }else if(request.status === 500){
       alert('something went wrong on the server');
   }
  }
};
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
console.log(username);
console.log(password);
//var name = nameInput.value;
request.open('POST','http://jesthisanjeeta.imad.hasura-app.io/login',true);
request.setRequestHeader('Content-Type', 'application/json');
 request.send(JSON.stringify({username: username,password: password}));
};