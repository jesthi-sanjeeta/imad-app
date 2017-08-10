console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML='New Value';
var img = document.getElementById("madi");
var marginLeft =0;
function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick =function(){
    //img.style.marginLeft='100px';
    var interval = setInterval(moveRight,50);
};
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
  //MAke a request to th ecounter endpoint 
  //Capture the response and store it a variable
  // Render the variable in th ecorrect span    
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};