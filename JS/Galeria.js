var ResultAjax = [[null,null],[null,null]];
var firstConsulta=true;
var urlBase = window.location.origin;

function Now(){
	$.post( urlBase+"/PHP_JQuery/GaleriaHeritage.php", { } )
	.done(function( data ) {	
		ResultAjax = JSON.parse(data);
	for(var i=0; i<=ResultAjax.length; i++){
		var adcInput = document.createElement("input");
		adcInput.value=ResultAjax[i][0]+" - "+ResultAjax[i][1];
		adcInput.id=ResultAjax[i][0];
		adcInput.setAttribute("onclick","ajax("+ResultAjax[i][1]+");");
		//adcInput.onclick = function(u){ajax(i)};
		adcInput.type="submit";
		document.getElementById("codesCenarios").appendChild(adcInput); 
	}
	});
	
}

function ajax(Code_Room){
	$.post( urlBase+"/PHP_JQuery/SelectAllNameHeritage.php", { Code_Room: Code_Room} )
	.done(function( data ) {
	var Result = JSON.parse(data);
	if(firstConsulta){
		for(var i=0; i<Result.length; i++){
			var adcHeritage = document.createElement("label");
			adcHeritage.innerHTML=(i+1)+"º - "+Result[i];
			adcHeritage.id=i;
			//adcHeritage.setAttribute("onclick","ajax("+ResultAjax[i][1]+");");
			//adcHeritage.onclick = function(u){ajax(i)};
			adcHeritage.type="submit";
			document.getElementById("rightSideCenario").appendChild(adcHeritage);
			firstConsulta=false;
		}
	}else{
		for(var i=0; i<Result.length; i++){
			var adcHeritage = document.getElementById(i);
			adcHeritage.innerHTML=(i+1)+"º - "+Result[i];
		}
	}
	
	})
	.fail(function() {
	alert("Erro ao tentar conectar-se ao servidor. Tente novamente mais tarde.");
	});
}



/* fazer depois

$.post( urlBase+"/PHP_JQuery/SelectAllNameHeritage.php", { Code_Room: Code_Room} )
.done(function( data ) {
var Result = JSON.parse(data);
alert("Aguarde");
//Escreve a partir daqui
})
.fail(function() {
alert("Erro ao tentar conectar-se ao servidor. Tente novamente mais tarde.");
});

*/
