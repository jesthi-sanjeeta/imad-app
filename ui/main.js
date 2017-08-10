
var button = document.getElementById('counter');

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
};
//Submit name

var submit = document.getElementById('submit_btn');
submit.onClick = function() {
    //Make a request to server nd send name
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
       if(request.readyState === XMLHttpRequest.DONE) {
           if(request.status === 200){
            //Capture a list of names and render it as a list
                var names = request.responseText;
                names = JSON.parse(names);
                var list ='';
                for(var i = 0 ;i<names.length;i++)
                {
                    list +='<li>' +name[i]+'</li>';
                }
       
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
   }
  }
};
var nameInput = document.getElementById('name');
var name = nameInput.value;
request.open('GET','http://jesthisanjeeta.imad.hasura-app.io/submit-name?name='+ name,true);
 request.send(null);
};