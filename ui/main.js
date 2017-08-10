
var button = document.getElementById('counter');

button.onclick = function() {
  //Create a request Object 
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
   if(request.readyState === XMLHttpRequest.DONE) {
       if(request.ststus === 200){
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
};