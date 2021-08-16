var FirstTimeBtClicked = false; // Primeira vez ao clicar no botão next
var First = true; // Primeira vez ao clicar no botão previous
var ItsOk = true; // Se está Ok para continuar colocando informações ao clicar no botão next
var ItsOkPrevious =true; // Se está Ok para começar a colocar informações ao clicar no botão previous
var TimePrevious = 0; // Conta quantas vezes o botão previous foi clicado
var i = 1; //variável dos "Ifs"
var foto,Heritage, Question, AnswerRight, AnswerWrongOne, AnswerWrongTwo, AnswerWrongThree, form_data, TipOne, TipTwo, TipThree, Code_Room, Position;
var OldCenario, FirstCenario; // Captura o código do cenário existente para edição
//-----------------------------------------------------------------------------------------------------

//Caso o usuário vá gerar um "Novo Código"
function NewCode(){
	document.getElementById("Bloco_Inicial").style.visibility = "hidden";
	document.getElementById("inputBlock").style.visibility = "visible";
	document.getElementById("Aguarde").style.visibility = "hidden";
	FirstCenario = true;
}

//Caso o usuário vá editar um "Código Existente"
function Edit(){	
	OldCenario = document.getElementById("OldCenario").value;
	FirstCenario = false;
	if(OldCenario.length == 0){
		alert("Preencha o campo do Cenário antes de continuar.");
	} else{
		document.getElementById("Aguarde").style.visibility = "visible";
			
//--------------------------------------------------------------------
		$.post( "https://trosleihard.000webhostapp.com/TCP/SelectHeritageToEdit.php", { Code_Room: OldCenario } )
			.done(function( data ) {
			var Result = JSON.parse(data);
			document.getElementById("Heritage").value = Result[0];
			document.getElementById("Question").value = Result[1];
			document.getElementById("AnswerRight").value = Result[2];
			document.getElementById("AnswerWrongOne").value = Result[3];
			document.getElementById("AnswerWrongTwo").value = Result[4];
			document.getElementById("AnswerWrongThree").value = Result[5];
			document.getElementById("TipOne").value = Result[6];
			document.getElementById("TipTwo").value = Result[7];
			document.getElementById("TipThree").value = Result[8];
			Position = Result[9];
			document.getElementById("ImageBt").src="data:image/jpeg;base64,"+Result[10];
			
			if((document.getElementById("Heritage").value == "")&&(document.getElementById("Question").value == "")&&(document.getElementById("AnswerRight").value == "")&&(document.getElementById("AnswerWrongOne").value == "")&&(document.getElementById("AnswerWrongTwo").value == "")&&(document.getElementById("AnswerWrongThree").value == "")&&(document.getElementById("TipOne").value == "")&&(document.getElementById("TipTwo").value == "")&&(document.getElementById("TipThree").value == "")){
				alert("Cenario inexistente");
				document.getElementById("Aguarde").style.visibility = "hidden";
			} else {
				//Fechar o div inicial
				document.getElementById("Bloco_Inicial").style.visibility = "hidden";
				document.getElementById("Aguarde").style.visibility = "hidden";
				document.getElementById("inputBlock").style.visibility = "visible";
			}
		})
		.fail(function() {
			alert("Erro ao tentar conectar-se ao servidor. Tente novamente mais tarde.");
			document.getElementById("Aguarde").style.visibility = "hidden";
		});
	}
}

//Função para colocar o nome do cenário
function Name_Room(){
	var NameRoom_value = document.getElementById("Name_Room").value;
	if(NameRoom_value.length == 0) {
		alert("Preencha o campo de informação para prosseguir");
	} else{
		alert("Aguarde");
		$.post( "https://trosleihard.000webhostapp.com/TCP/Name_Room.php", { Code_Room:Code_Room, Name_Room: NameRoom_value} )
			.done(function( data ) {
			alert("Nome posto com sucesso!");
			document.getElementById("PutName").style.visibility = "hidden";
			document.getElementById("showCode").style.visibility = "visible";
			document.getElementById("Code").innerHTML = NameRoom_value+" <br> "+Code_Room;
		})
		.fail(function() {
			alert("Erro ao tentar conectar-se ao servidor. Tente novamente mais tarde.");
		});
	}
}

//Quando a página iniciar
function Now(){
document.getElementById("Previous").disabled = true;
document.getElementById("inputBlock").style.visibility = "hidden";

}

//Para carregar a foto
function Photo(){
	foto = document.getElementById("ImageBt");
	var image_name = foto.value;
	var image_extension = image_name.split(".").pop().toLowerCase();
	
	if(jQuery.inArray(image_extension, ['gif', 'png', 'jpg', 'jpeg']) == -1)
	{
		alert("Extensão de imagem inválida.");
		document.getElementById("ImageBt").value = null;
	} 
	else 
	{
		var image_size = foto.size;
		
		if(image_size > 2000000)
		{
			alert("A imagem é muito grande.");
			document.getElementById("ImageBt").value = null;
		} else {
			form_data = new FormData();
			form_data.append("ImageBt", foto);
		}
	}
}

//Função para obter os valores presentes nos campos de informações
function InfoHeritage(){
	Heritage = document.getElementById("Heritage").value;
	Question = document.getElementById("Question").value;
	AnswerRight = document.getElementById("AnswerRight").value;
	AnswerWrongOne = document.getElementById("AnswerWrongOne").value;
	AnswerWrongTwo = document.getElementById("AnswerWrongTwo").value;
	AnswerWrongThree = document.getElementById("AnswerWrongThree").value;
	TipOne = document.getElementById("TipOne").value;
	TipTwo = document.getElementById("TipTwo").value;
	TipThree = document.getElementById("TipThree").value;
	Photo();
}

//Função para obtenção das informações dos patrimônios que estarão no BD
function PutInformation(){
    $.post( "https://trosleihard.000webhostapp.com/TCP/SelectHeritage.php", { Code_Room: Code_Room, Position: TimePrevious} )
		.done(function( data ) {
		var Result = JSON.parse(data);
		document.getElementById("Heritage").value = Result[0];
		document.getElementById("Question").value = Result[1];
		document.getElementById("AnswerRight").value = Result[2];
		document.getElementById("AnswerWrongOne").value = Result[3];
		document.getElementById("AnswerWrongTwo").value = Result[4];
		document.getElementById("AnswerWrongThree").value = Result[5];
		document.getElementById("TipOne").value = Result[6];
		document.getElementById("TipTwo").value = Result[7];
		document.getElementById("TipThree").value = Result[8];
		Position = Result[9];
		document.getElementById("ImageBt").src="data:image/jpeg;base64,"+Result[10];
	})
	.fail(function() {
		alert("Erro ao tentar conectar-se ao servidor. Tente novamente mais tarde.");
	});
}

function PutInformationEdit(){
	$.post( "https://trosleihard.000webhostapp.com/TCP/SelectHeritage.php", { Code_Room: Code_Room, Position: (TimePrevious +1)} )
		.done(function( data ) {
		var Result = JSON.parse(data);
		document.getElementById("Heritage").value = Result[0];
		document.getElementById("Question").value = Result[1];
		document.getElementById("AnswerRight").value = Result[2];
		document.getElementById("AnswerWrongOne").value = Result[3];
		document.getElementById("AnswerWrongTwo").value = Result[4];
		document.getElementById("AnswerWrongThree").value = Result[5];
		document.getElementById("TipOne").value = Result[6];
		document.getElementById("TipTwo").value = Result[7];
		document.getElementById("TipThree").value = Result[8];
		Position = Result[9];
		document.getElementById("ImageBt").src="data:image/jpeg;base64,"+Result[10];
	})
	.fail(function() {
		alert("Erro ao tentar conectar-se ao servidor. Tente novamente mais tarde.");
	});
}

//Função do botão Previous
function PreviousButton(){
	
	alert("Aguarde alguns segundos.");
	
	if (TimePrevious == 0) //Colocando um limite no número de vezes que uma pessoa pode clicar no botão previous.
            {
                alert("Não há mais páginas anteriores.");
                TimePrevious += 1;
                ItsOkPrevious = false;
            }
            else if ((TimePrevious == 1) && (ItsOkPrevious == false)) 
            {
                alert("Não há mais páginas anteriores.");
            } 
            else
            {
                if (First == true)
                {
                    PutInformation();
                    ItsOk = false;
                    First = false;
                } else
                {
					if((TimePrevious == 1) && (ItsOkPrevious == true)){
						alert("Não há mais páginas anteriores.");
						ItsOkPrevious = false;
						ItsOk = false;
					}else{
						InfoHeritage();
// ------------------------------------------------------------------------------
						var data = new FormData();
						data.append('Code_Room', Code_Room);
						data.append('foto', foto.files[0]);
						data.append('Nick_Heritage',Heritage);
						data.append('Question',Question);
						data.append('Right_Answer',AnswerRight);
						data.append('Wrong_Answer_One',AnswerWrongOne);
						data.append('Wrong_Answer_Two',AnswerWrongTwo);
						data.append('Wrong_Answer_Three',AnswerWrongThree);
						data.append('Tip_One',TipOne);
						data.append('Tip_Two',TipTwo);
						data.append('Tip_Three',TipThree);
						data.append('Position', Position);
						$.ajax({
							url: 'https://trosleihard.000webhostapp.com/TCP/UpdateHeritage.php',
							data: data,
							processData: false,
							contentType: false,
							type: 'POST',
							success: function(data) 
							{
								alert("As informações do " + Position + " patrimônio foram atualizadas com sucesso. Retorne até onde você estava para continuar a colocar as informações.");
							}
						})
						.fail(function() {
							alert("Erro ao tentar conectar-se ao servidor. Tente novamente mais tarde.");
						});
// ------------------------------------------------------------------------------
						TimePrevious -= 1;
						PutInformation();
						ItsOk = false;
						ItsOkPrevious = false;
					}
                }
            }
}

//Função do botão Next
function NextButton(){
	
	//Primeiro checar se todos os campos estão preenchidos
	if ((document.getElementById("Heritage").value == "") || (document.getElementById("Question").value == "") || (document.getElementById("AnswerRight").value == "") || (document.getElementById("AnswerWrongOne").value == "") || (document.getElementById("AnswerWrongTwo").value == "") || (document.getElementById("AnswerWrongThree").value == "") || (document.getElementById("TipOne").value == "") || (document.getElementById("TipTwo").value == "") || (document.getElementById("TipThree").value == "") || (document.getElementById("ImageBt").value == "")) {
		alert("Por favor, preencha todos os campos de informações para poder continuar.");
	} 
	else {
		alert("Aguarde alguns segundos");
		InfoHeritage(); // Função para pegar as informações que o usuário escrever nos campos vazios
		
		if ((TimePrevious < i) && (ItsOk == false)) //Atualizar a página
		{
	// ------------------------------------------------------------------------------
				var data = new FormData();
				data.append('Code_Room', Code_Room);
				data.append('foto', foto.files[0]);
				data.append('Nick_Heritage',Heritage);
				data.append('Question',Question);
				data.append('Right_Answer',AnswerRight);
				data.append('Wrong_Answer_One',AnswerWrongOne);
				data.append('Wrong_Answer_Two',AnswerWrongTwo);
				data.append('Wrong_Answer_Three',AnswerWrongThree);
				data.append('Tip_One',TipOne);
				data.append('Tip_Two',TipTwo);
				data.append('Tip_Three',TipThree);
				data.append('Position', Position);
				$.ajax({
					url: 'https://trosleihard.000webhostapp.com/TCP/UpdateHeritage.php',
					data: data,
					processData: false,
					contentType: false,
					type: 'POST',
					success: function(data) 
					{
						alert("As informações do " + Position + " patrimônio foram atualizadas com sucesso. Retorne até onde você estava para continuar a colocar as informações.");
						if (TimePrevious == 0)
						{
							TimePrevious += 2;
							PutInformation();
						} else
						{
							TimePrevious += 1;
							PutInformation();
							ItsOkPrevious = true;
						}
					}
				})
				.fail(function() {
					alert("Erro ao tentar conectar-se ao servidor. Tente novamente mais tarde.");
				});
	// ------------------------------------------------------------------------------
			
		}
		else if ((TimePrevious == i) && (ItsOk == false)) //Checar se o jogador pode continuar colocando informação
		{
	// ------------------------------------------------------------------------------
				var data = new FormData();
				data.append('Code_Room', Code_Room);
				data.append('foto', foto.files[0]);
				data.append('Nick_Heritage',Heritage);
				data.append('Question',Question);
				data.append('Right_Answer',AnswerRight);
				data.append('Wrong_Answer_One',AnswerWrongOne);
				data.append('Wrong_Answer_Two',AnswerWrongTwo);
				data.append('Wrong_Answer_Three',AnswerWrongThree);
				data.append('Tip_One',TipOne);
				data.append('Tip_Two',TipTwo);
				data.append('Tip_Three',TipThree);
				data.append('Position', Position);
				$.ajax({
					url: 'https://trosleihard.000webhostapp.com/TCP/UpdateHeritage.php',
					data: data,
					processData: false,
					contentType: false,
					type: 'POST',
					success: function(data) 
					{
						alert("As informações do " + Position + " patrimônio foram atualizadas com sucesso. Retorne até onde você estava para continuar a colocar as informações.");
						switch(FirstCenario){
							case true:
								CleanAll();
								break;
							case false:
								PutInformationEdit();
								break;
						}

						ItsOk = true;
						First = true;
					}
				})
				.fail(function() {
					alert("Erro ao tentar conectar-se ao servidor. Tente novamente mais tarde.");
				});
	// ------------------------------------------------------------------------------

		}
		else if ((TimePrevious <= i) && (ItsOk == true)) //Checar se o jogador pode continuar colocando informação
		{
			if ((document.getElementById("Heritage").value == null) || (document.getElementById("Question").value == null) || (document.getElementById("AnswerRight").value == null) || (document.getElementById("AnswerWrongOne").value == null) || (document.getElementById("AnswerWrongTwo").value == null) || (document.getElementById("AnswerWrongThree").value == null) || (document.getElementById("TipOne").value == null) || (document.getElementById("TipTwo").value == null) || (document.getElementById("TipThree").value == null)) //Checar se os valores dos campos estão nulos
		{
			alert("Por favor, preencha todos os campos de informações para poder continuar.");
		}
		else
		{
			switch(FirstCenario){
				case true:
					
				if (FirstTimeBtClicked == true)
				{
					if (i <= 15)
					{
						// passar as informações
						i += 1;
			// ------------------------------------------------------------------------------
						var data = new FormData();
						data.append('Code_Room', Code_Room);
						data.append('foto', foto.files[0]);
						data.append('Nick_Heritage',Heritage);
						data.append('Question',Question);
						data.append('Right_Answer',AnswerRight);
						data.append('Wrong_Answer_One',AnswerWrongOne);
						data.append('Wrong_Answer_Two',AnswerWrongTwo);
						data.append('Wrong_Answer_Three',AnswerWrongThree);
						data.append('Tip_One',TipOne);
						data.append('Tip_Two',TipTwo);
						data.append('Tip_Three',TipThree);
						data.append('Position', i);
						$.ajax({
							url: 'https://trosleihard.000webhostapp.com/TCP/InsertAllInfoHeritage.php',
							data: data,
							processData: false,
							contentType: false,
							type: 'POST',
							success: function(data) 
							{
								if((i>=2) && (i<=13)) {
									alert("As informações dos " + i + " patrimônios foram postas com sucesso. Por favor, coloque as informações dos demais " + (15-i) + " patrimônios para obter o código do cenário.");
								}
								if((i == 14)){
									alert("As informações dos " + i + " patrimônios foram postas com sucesso. Por favor, coloque as informações do último patrimônio para obter o código do cenário.");
								}
								if (i == 15)
								{
									alert("As informações de todos os patrimônios foram postas com sucesso. Anote o código a seguir para usá-lo posteriormente e acessar as salas do jogo.");
									FirstTimeBtClicked = false;
									document.getElementById("PutName").style.visibility = "visible";
									document.getElementById("Next").disabled = true;
									document.getElementById("Previous").disabled = true;
									document.getElementById("Clean").disabled = true;
								}
								CleanAll();
							}
						})
						.fail(function() {
							alert("Erro ao tentar conectar-se ao servidor. Tente novamente mais tarde.");
						});
			// ------------------------------------------------------------------------------
						
					}

				}
				else
				{
					FirstTimeBtClicked = true; //Checar se é a primeira vez em que o usuário vai pôr as informações sobre os patrimônios

					// Passando informações
		// ------------------------------------------------------------------------------
					$.post( "https://trosleihard.000webhostapp.com/TCP/SelectMaxCodeRoom.php", function( data ) {
						var JSON_Data = JSON.parse(data);
						if (JSON_Data == null){
							Code_Room += 100000; //Gera um código aleatório de 6 posições (max - 999999 | min - 100000)
						} else {
							Code_Room = parseInt(JSON_Data);
							Code_Room += 1;
						}
						
						var data = new FormData();
						data.append('Code_Room', Code_Room);
						data.append('foto', foto.files[0]);
						data.append('Nick_Heritage',Heritage);
						data.append('Question',Question);
						data.append('Right_Answer',AnswerRight);
						data.append('Wrong_Answer_One',AnswerWrongOne);
						data.append('Wrong_Answer_Two',AnswerWrongTwo);
						data.append('Wrong_Answer_Three',AnswerWrongThree);
						data.append('Tip_One',TipOne);
						data.append('Tip_Two',TipTwo);
						data.append('Tip_Three',TipThree);
						$.ajax({
							url: 'https://trosleihard.000webhostapp.com/TCP/FirstInsertAllInfoHeritage.php',
							data: data,
							processData: false,
							contentType: false,
							type: 'POST',
							success: function(data) 
							{
								alert("As informações do primeiro patrimônio foram postas com sucesso. Por favor, coloque as informações dos demais 14 patrimônios para obter o código do cenário.");
								document.getElementById("Previous").disabled = false; //Agora o jogador poder começar a clicar no botão previous
								CleanAll();
							}
						})
						.fail(function() {
							alert("Erro ao tentar conectar-se ao servidor. Tente novamente mais tarde.");
						});
					})
					.fail(function() {
						alert("Erro ao tentar conectar-se ao servidor. Tente novamente mais tarde.");
					});	
		// ------------------------------------------------------------------------------
					//Code_Room = Math.floor(Math.random() * (999999 - 100000)) + 100000; //Gera um código aleatório de 6 posições (max - 999999 | min - 100000)
				}
					TimePrevious += 1;
					break;
					
				case false:
					if (FirstTimeBtClicked == true)
					{
						if (i <= 15)
						{
							// passar as informações
							i += 1;
			// ------------------------------------------------------------------------------
							var data = new FormData();
							data.append('Position', Position);
							data.append('Code_Room', Code_Room);
							data.append('foto', foto.files[0]);
							data.append('Nick_Heritage',Heritage);
							data.append('Question',Question);
							data.append('Right_Answer',AnswerRight);
							data.append('Wrong_Answer_One',AnswerWrongOne);
							data.append('Wrong_Answer_Two',AnswerWrongTwo);
							data.append('Wrong_Answer_Three',AnswerWrongThree);
							data.append('Tip_One',TipOne);
							data.append('Tip_Two',TipTwo);
							data.append('Tip_Three',TipThree);
							data.append('Position', i);
							$.ajax({
								url: 'https://trosleihard.000webhostapp.com/TCP/UpdateHeritage.php',
								data: data,
								processData: false,
								contentType: false,
								type: 'POST',
								success: function(data) 
								{
									if((i>=2) && (i<=13)) {
									alert("As informações dos " + i + " patrimônios foram alteradas com sucesso. Por favor, aguarde alguns segundos para continuar a colocar as informações dos demais " + (15-i) + " patrimônios.");
									}
									if((i == 14)){
										alert("As informações dos " + i + " patrimônios foram alteradas com sucesso. Por favor, aguarde alguns segundos para continuar a colocar as informações do último patrimônio.");
									}
									if (i == 15)
									{
										alert("As informações de todos os patrimônios foram alteradas com sucesso. Anote o código a seguir para usá-lo posteriormente e acessar as salas do jogo.");
										FirstTimeBtClicked = false;
										document.getElementById("PutName").style.visibility = "visible";
										document.getElementById("Next").disabled = true;
										document.getElementById("Previous").disabled = true;
										document.getElementById("Clean").disabled = true;
									}
								}
							})
							.fail(function() {
								alert("Erro ao tentar conectar-se ao servidor. Tente novamente mais tarde.");
							});
				// ------------------------------------------------------------------------------
								
						}

					}
					else
					{
						FirstTimeBtClicked = true; //Checar se é a primeira vez em que o usuário vai pôr as informações sobre os patrimônios

						// Passando informações
						Code_Room = OldCenario; // Cenário editável
			// ------------------------------------------------------------------------------
						var data = new FormData();
						data.append('Position', Position);
						data.append('Code_Room', Code_Room);
						data.append('foto', foto.files[0]);
						data.append('Nick_Heritage',Heritage);
						data.append('Question',Question);
						data.append('Right_Answer',AnswerRight);
						data.append('Wrong_Answer_One',AnswerWrongOne);
						data.append('Wrong_Answer_Two',AnswerWrongTwo);
						data.append('Wrong_Answer_Three',AnswerWrongThree);
						data.append('Tip_One',TipOne);
						data.append('Tip_Two',TipTwo);
						data.append('Tip_Three',TipThree);
						$.ajax({
							url: 'https://trosleihard.000webhostapp.com/TCP/UpdateHeritage.php',
							data: data,
							processData: false,
							contentType: false,
							type: 'POST',
							success: function(data) 
							{
								alert("As informações do primeiro patrimônio foram alteradas com sucesso. Por favor, aguarde alguns segundos para continuar a colocar as informações dos demais 14 patrimônios.");
								document.getElementById("Previous").disabled = false; //Agora o jogador poder começar a clicar no botão previous
							}
						})
						.fail(function() {
							alert("Erro ao tentar conectar-se ao servidor. Tente novamente mais tarde.");
						});
			// ------------------------------------------------------------------------------
						
					}
						TimePrevious += 1;
						PutInformationEdit();
						break;
			}
		}
		}
	}
	
}

//Função do botão Clean
function CleanButton(){
	var Ok = confirm("Aceita limpar todos os campos de informações?");
	if(Ok){
		CleanAll();
	} else {
		return;
	}
}

// Limpa todos os campos de informações da tela
function CleanAll(){
	document.getElementById("Heritage").value = null;
	
	document.getElementById("Question").value = null;
	document.getElementById("AnswerRight").value = null;
	document.getElementById("AnswerWrongOne").value = null;
	document.getElementById("AnswerWrongTwo").value = null;
	document.getElementById("AnswerWrongThree").value = null;
	
	document.getElementById("TipOne").value = null;
	document.getElementById("TipTwo").value = null;
	document.getElementById("TipThree").value = null;
	
	document.getElementById("ImageBt").value = null;
}