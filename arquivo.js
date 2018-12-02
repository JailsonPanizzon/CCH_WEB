function dizOla(){
	document.getElementById("ola").innerHTML = "Ola " + document.getElementById("nome").value;
}

//$("button").attr("onclick","dizOla()");

$( "button" ).click(function() {
  $("#ola").text("Ola " + $("#nome").val());
  $("#nome").attr("value","Assim também muda o texto");
});
  

