//Variaveis Globais
var quantidadeJogadores=4;
var Cenario, ResultAjax, ResultAjaxHeritage;
var sala =0;
var ResultAjaxOnline = ["", ""];
var TimePlayer, NumPatrimonio;
var numDicas=0;
var PtsQuestion = 500;
var QtdVoltas;
var EndPlayer = [0, false,false,false,false];
var RandomQuestion;
var FirstClick = true;
var InfoPAjax = ["","",""];
var Comand, ID_Sala, Dado;
var BtClicked = false;
var Temporizador, seg, timeTimeout, P_I;

//Novo Script para o jogo Online
function Add_ScriptOnline(file_script){
	var arq_js 		= document.createElement("script"); //criando um elemento script
		arq_js.type = "text/javascript";//informando o type como text/javacript
		arq_js.src 	= file_script;//inserindo um src com o valor do parâmetro file_script
	document.body.appendChild(arq_js);//inserindo o elemento(arq_js) como filho do  BODY
}

Add_ScriptOnline("../JS/GameOnline.js");
//--------------------------------------------------------------------------------------	


var Nick_Heritage = ["","","","","","","","","","","","","","",""];
var Image_Heritage = ["","","","","","","","","","","","","","",""];
var Question_Heritage = ["","","","","","","","","","","","","","",""];
var Answer_Question = [["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""]];
var Tips_Heritage = [["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]];
	
//posição da 1° casa trilha
posGreen = [[790,10]];
posRed = [[810,10]];
posYellow = [[855,10]];
posBlue = [[835,10]]; 

//posições da trilha a partir da 2° casa
posicao = [ 
	0,
	[820,65],
	[761,65],
	[700,65],
	[639,65],
	[575,65],
	[511,65],
	[511,115],
	[510,175],
	[438,175],
	[365,175],               
	[365,105],
	[365,30],
	[305,30],
	[243,30],
	[180,30],
	[121,30],
	[61,30],
	[61,90],
	[61,140],
	[61,195],
	[61,247],
	[61,297],
	[61,348],
	[61,401],
	[61,456],
	[63,512],
	[121,512],
	[178,512],
	[235,512],
	[292,512],
	[294,456],
	[294,396],
	[294,332],
	[354,332],
	[414,332],
	[475,332],
	[540,332],
	[602,332],
	[604,273],
	[604,219],
	[670,219],
	[740,219],
	[805,219],
	[806,270],
	[806,322],
	[806,372],
	[806,422],
	[806,477],
	[803,535],
	[744,535],
	[681,535],
	[618,535],
	[548,535],
	[485,535],
	[485,585]
];


//--------------------------------------------------------------------------------------	
//Informação dos jogadores
function Jogador(Nick, Time, Score, MapSpace, Dice) {
    this.Nick = Nick;
	this.Time = Time
    this.Score=Score;
    this.MapSpace=MapSpace;
	this.Dice = Dice;
}
	
	var One = new Jogador("Jogador 1", 1, 0.00, 0, null);
	var Two = new Jogador("Jogador 2", 2, 0.00, 0, null);
	var Three = new Jogador("Jogador 3", 3, 0.00, 0, null);
	var Four = new Jogador("Jogador 4", 4, 0.00, 0, null);

//--------------------------------------------------------------------------------------	

//Adiciona e remove os jogadores

function maisJogador(){
	if((quantidadeJogadores==2) && (quantidadeJogadores<=4)){
		document.getElementById("infoPlayer3").style.visibility="visible";
		quantidadeJogadores+=1;
	}else if((quantidadeJogadores==3) && (quantidadeJogadores<=4)){
		document.getElementById("infoPlayer4").style.visibility="visible";
		quantidadeJogadores+=1;
	}else if((quantidadeJogadores==4) && (quantidadeJogadores<=4)){
		alert("Este jogo suporta no máximo 4 jogadores por partida.");
	}
}

function menosJogador(){
	if((quantidadeJogadores==4) && (quantidadeJogadores<=4)){
		document.getElementById("infoPlayer4").style.visibility="hidden";
		quantidadeJogadores-=1;
	}else if((quantidadeJogadores==3) && (quantidadeJogadores<=4)){
		document.getElementById("infoPlayer3").style.visibility="hidden";
		quantidadeJogadores-=1;
	}else if((quantidadeJogadores==2) && (quantidadeJogadores<=4)){
		alert("Este jogo requer no mínimo 2 jogadores.");
	}
}

//--------------------------------------------------------------------------------------

/*Procura ID da Sala
function procurar_IDSALA() {
	
	var x = document.getElementById("Id_Sala");
	for(var u = 0; u < x.length; u++){
		if (x.length > 1) {
			x.remove(x.length-1);
		}
	}
	
	for(var i = 0; i < ID_Sala_PHP.length; i++){
		if(Cenario_PHP.indexOf(document.getElementById("Code").value) == ID_Sala_PHP.indexOf(ID_Sala_PHP[i])){
			var adcInput = document.createElement("OPTION");
			adcInput.setAttribute("value", ID_Sala_PHP[i]);
			adcInput.id = ID_Sala_PHP[i];
			var t = document.createTextNode("SALA - " + ID_Sala_PHP[i]);
			adcInput.appendChild(t);
			document.getElementById("Id_Sala").appendChild(adcInput);
			if(JogoAtivo_PHP[i] == true){
				document.getElementById(ID_Sala_PHP[i]).style.backgroundColor= "Red";
			} else if(JogoAtivo_PHP[i] == false){
				document.getElementById(ID_Sala_PHP[i]).style.backgroundColor= "Green";
			}
		}
	}
}
*/

//Seleciona a sala
function Room(){
	sala = parseInt(document.getElementById("Room").value);
	if( (sala == 1)) {
		document.getElementById("NamePlayerOnline").innerHTML = "JOGADOR ONLINE";
		document.getElementById("infoPlayer2").style.visibility = "hidden";
		document.getElementById("infoPlayer3").style.visibility = "hidden";
		document.getElementById("infoPlayer4").style.visibility = "hidden";
		document.getElementById("MJ").style.visibility = "hidden";
		document.getElementById("maisJogador").style.visibility = "hidden";
		document.getElementById("menosJogador").style.visibility = "hidden";
		
		document.getElementById("P_COM").style.visibility = "visible";
		document.getElementById("COM_NJ").style.visibility = "visible";
		document.getElementById("COM_JE").style.visibility = "visible";
		quantidadeJogadores = 1;
		
		FirstClick = false;
	} else if ((sala == 0) && (FirstClick == false) ){
		document.getElementById("NamePlayerOnline").innerHTML = "JOGADOR VERDE";
		document.getElementById("infoPlayer2").style.visibility = "visible";
		document.getElementById("infoPlayer3").style.visibility = "visible";
		document.getElementById("infoPlayer4").style.visibility = "visible";
		document.getElementById("MJ").style.visibility = "visible";
		document.getElementById("maisJogador").style.visibility = "visible";
		document.getElementById("menosJogador").style.visibility = "visible";
		
		document.getElementById("P_COM").style.visibility = "hidden";
		document.getElementById("COM_NJ").style.visibility = "hidden";
		document.getElementById("COM_JE").style.visibility = "hidden";
		quantidadeJogadores = 4;
	}
}
//--------------------------------------------------------------------------------------

//Seleciona COMANDO
function Comando(O_C){
	BtClicked = true;
	switch(O_C){
		case 0:
			Comand = "Novo_Jogo";
			document.getElementById("COM_NJ").style.backgroundColor = "Red";
			document.getElementById("COM_JE").style.backgroundColor = "#F2F2F2";
			document.getElementById("Id_Sala").style.visibility = "hidden";
			document.getElementById("P_ID_SALA").style.visibility = "hidden";
			break;
		case 1:
			Comand = "Jogo_Existente";
			document.getElementById("COM_JE").style.backgroundColor = "Red";
			document.getElementById("COM_NJ").style.backgroundColor = "#F2F2F2";
			document.getElementById("Id_Sala").style.visibility = "visible";
			document.getElementById("P_ID_SALA").style.visibility = "visible";
			break;
		default:
			alert("Erro na seção COMANDO");
			break;
	}
}
//--------------------------------------------------------------------------------------

//Função para iniciar o jogo e mostrar o tabuleiro
function Iniciar(){
	//Guardar os patrimônios dentro de variáveis globais
	Cenario = document.getElementById("Code").value;
	var P1 = document.getElementById("P1").value;
	var P2 = document.getElementById("P2").value;
	var P3 = document.getElementById("P3").value;
	var P4 = document.getElementById("P4").value;
	ID_Sala = parseInt(document.getElementById("Id_Sala").value);
	document.getElementById("buttonSend").disabled = true;
	
	//-------------------------------------------(INICIO DO MODO ONLINE)-----------------------------------------------------------------------
	if (sala == 1){
	
		//checar se todos os campos estão preenchidos
		if((Cenario.length == 0) || (P1.length == 0) || (BtClicked == false)){ 
			alert("Preencha todos os campos antes de iniciar.");
			document.getElementById("buttonSend").disabled = false;
		} else {
		//-------------------------------------------------------------------------------------------------------------------------
				$.post( "../PHP_JQuery/SelectCodeRoom.php", { Code_Room: Cenario} )
					.done(function( data ) {
					ResultAjax = JSON.parse(data);
					if((ResultAjax != Cenario)){
						alert("Cenário inexistente em nosso banco de dados.");
						document.getElementById("buttonSend").disabled = false;
					} else{
						//Checar comando
						if(Comand == "Novo_Jogo") {
							AjaxInicial();
							StartOnline();
						} else if (Comand == "Jogo_Existente"){
							//Checar o ID_Sala
							if(ID_Sala.length == 0) {
								alert("Preencha todos os campos antes de iniciar.");
								document.getElementById("buttonSend").disabled = false;
							} else {
								StartOnline();
							}
						}
					}
				})
				.fail(function() {
					alert("Erro ao tentar conectar-se ao servidor. Tente novamente mais tarde!");
					document.getElementById("buttonSend").disabled = false;
				});
		//-------------------------------------------------------------------------------------------------------------------------
		}
	} 
	//--------------------------------------------(MODO OFFLINE)----------------------------------------------------------------------
	else if(sala == 0) {
		
		switch(quantidadeJogadores){

			case 2:
				//checar se todos os campos estão preenchidos
				if( ((Cenario.length == 0) || (P1.length == 0) || (P2.length == 0) || (sala == undefined)) && (sala == 0)){
					alert("Preencha todos os campos antes de iniciar.");
					document.getElementById("buttonSend").disabled = false;
				} else{
					//Checar a sala escolhida
					 if (sala == undefined){ alert("Escolha uma sala válida.");document.getElementById("buttonSend").disabled = false;}else {
						
						//Chegar se existe nomes iguais
						if(P1 == P2){
							alert("Para iniciar, todos devem ter nomes individuais.");
							document.getElementById("buttonSend").disabled = false;
						} else{
		//-------------------------------------------------------------------------------------------------------------------------
							$.post( "/PHP_JQuery/SelectCodeRoom.php", { Code_Room: Cenario} )
								.done(function( data ) {
								ResultAjax = JSON.parse(data);
								if((ResultAjax != Cenario)){
									alert("Cenário inexistente em nosso banco de dados.");
									document.getElementById("buttonSend").disabled = false;
								} else{
									One.Nick = document.getElementById("P1").value;
									Two.Nick = document.getElementById("P2").value;
									document.getElementById("NomeJogadorVerde").innerHTML = One.Nick;
									document.getElementById("NomeJogadorVermelho").innerHTML = Two.Nick;
									document.getElementById("JogadorAmarelo").style.visibility = "hidden";
									document.getElementById("JogadorAzul").style.visibility = "hidden";
									AjaxInicial();
									Start();
								}
							})
							.fail(function() {
								alert("Erro ao tentar conectar-se ao servidor. Tente novamente mais tarde!");
								document.getElementById("buttonSend").disabled = false;
							});
		//-------------------------------------------------------------------------------------------------------------------------
						}
					}		
				}
			break;
			case 3:
				//checar se todos os campos estão preenchidos
				if((Cenario.length == 0) || (P1.length == 0) || (P2.length == 0) || (P3.length == 0) || (sala == undefined)){
					alert("Preencha todos os campos antes de iniciar.");
					document.getElementById("buttonSend").disabled = false;
				} else {
					//Checar a sala escolhida
					if(sala == undefined){ alert("Escolha uma sala válida."); document.getElementById("buttonSend").disabled = false;} else {
						//Chegar se existe nomes iguais
						if((P1 == P2) || (P1 == P3) || (P2 == P3)) {
							alert("Para iniciar, todos devem ter nomes individuais.");
							document.getElementById("buttonSend").disabled = false;
						} else{
			//-------------------------------------------------------------------------------------------------------------------------
							$.post( "../PHP_JQuery/SelectCodeRoom.php", { Code_Room: Cenario} )
								.done(function( data ) {
								ResultAjax = JSON.parse(data);
								if(ResultAjax != Cenario){
									alert("Cenário inexistente em nosso banco de dados.");
									document.getElementById("buttonSend").disabled = false;
								} else{
									One.Nick = document.getElementById("P1").value;
									Two.Nick = document.getElementById("P2").value;
									Three.Nick = document.getElementById("P3").value;
									document.getElementById("NomeJogadorVerde").innerHTML = One.Nick;
									document.getElementById("NomeJogadorVermelho").innerHTML = Two.Nick;
									document.getElementById("NomeJogadorAzul").innerHTML = Three.Nick;
									document.getElementById("JogadorAmarelo").style.visibility = "hidden";
									AjaxInicial();
									Start();
								}
							})
							.fail(function() {
								alert("Erro ao tentar conectar-se ao servidor. Tente novamente mais tarde!");
								document.getElementById("buttonSend").disabled = false;
							});;
			//-------------------------------------------------------------------------------------------------------------------------
						}
					}
				}
				break;
			case 4:
				//checar se todos os campos estão preenchidos
				if((Cenario.length == 0) || (P1.length == 0) || (P2.length == 0) || (P3.length == 0) || (P4.length == 0) || (sala == undefined)){
					alert("Preencha todos os campos antes de iniciar.");
					document.getElementById("buttonSend").disabled = false;
				} else{
					//Checar a sala escolhida
					if(sala == undefined){ alert("Escolha uma sala válida.");document.getElementById("buttonSend").disabled = false;}else {
						//Chegar se existe nomes iguais
						if((P1 == P2) || (P1 == P3) || (P1 == P4) || (P2 == P3) || (P2 == P4) || (P3 == P4)) {
							alert("Para iniciar, todos devem ter nomes individuais.");
							document.getElementById("buttonSend").disabled = false;
						} else{
		//-------------------------------------------------------------------------------------------------------------------------
							$.post( "../PHP_JQuery/SelectCodeRoom.php", { Code_Room: Cenario} )
								.done(function( data ) {
								ResultAjax = JSON.parse(data);
								if(ResultAjax != Cenario){
									alert("Cenário inexistente em nosso banco de dados.");
									document.getElementById("buttonSend").disabled = false;
								} else{
									One.Nick = document.getElementById("P1").value;
									Two.Nick = document.getElementById("P2").value;
									Three.Nick = document.getElementById("P3").value;
									Four.Nick = document.getElementById("P4").value;
									document.getElementById("NomeJogadorVerde").innerHTML = One.Nick;
									document.getElementById("NomeJogadorVermelho").innerHTML = Two.Nick;
									document.getElementById("NomeJogadorAzul").innerHTML = Three.Nick;
									document.getElementById("NomeJogadorAmarelo").innerHTML = Four.Nick;
									AjaxInicial();
									Start();
								}
							})
							.fail(function() {
								alert("Erro ao tentar conectar-se ao servidor. Tente novamente mais tarde!");
								document.getElementById("buttonSend").disabled = false;
							});;
		//-------------------------------------------------------------------------------------------------------------------------
						}
					}
				}
				break;
			default:
				console.log("Erro na quantidade de jogadores!");
				document.getElementById("buttonSend").disabled = false;
				break;
		}
	}
}

//Aqui há a chamada de todos os dados para o jogo
function AjaxInicial(){
	document.getElementById("Wait").style.visibility = "visible";
//------------------------------------------------------------------------------------------------------------------
	
$.post( "../PHP_JQuery/SelectAllHeritage.php", { Code_Room: Cenario} )
	.done(function( data ) {
	ResultAjaxHeritage = JSON.parse(data);
	
	//Nome dos patrimônios
	Nick_Heritage[0] = ResultAjaxHeritage[0];
	Nick_Heritage[1] = ResultAjaxHeritage[10];
	Nick_Heritage[2] = ResultAjaxHeritage[20];
	Nick_Heritage[3] = ResultAjaxHeritage[30]; 
	Nick_Heritage[4] = ResultAjaxHeritage[40];
	Nick_Heritage[5] = ResultAjaxHeritage[50];
	Nick_Heritage[6] = ResultAjaxHeritage[60];
	Nick_Heritage[7] = ResultAjaxHeritage[70];
	Nick_Heritage[8] = ResultAjaxHeritage[80];
	Nick_Heritage[9] = ResultAjaxHeritage[90];
	Nick_Heritage[10] = ResultAjaxHeritage[100];
	Nick_Heritage[11] = ResultAjaxHeritage[110];
	Nick_Heritage[12] = ResultAjaxHeritage[120];
	Nick_Heritage[13] = ResultAjaxHeritage[130];
	Nick_Heritage[14] = ResultAjaxHeritage[140];
	
	//Questão dos patrimônios
	Question_Heritage[0] = ResultAjaxHeritage[1];
	Question_Heritage[1] = ResultAjaxHeritage[11];
	Question_Heritage[2] = ResultAjaxHeritage[21];
	Question_Heritage[3] = ResultAjaxHeritage[31];
	Question_Heritage[4] = ResultAjaxHeritage[41];
	Question_Heritage[5] = ResultAjaxHeritage[51];
	Question_Heritage[6] = ResultAjaxHeritage[61];
	Question_Heritage[7] = ResultAjaxHeritage[71];
	Question_Heritage[8] = ResultAjaxHeritage[81];
	Question_Heritage[9] = ResultAjaxHeritage[91];
	Question_Heritage[10] = ResultAjaxHeritage[101];
	Question_Heritage[11] = ResultAjaxHeritage[111];
	Question_Heritage[12] = ResultAjaxHeritage[121];
	Question_Heritage[13] = ResultAjaxHeritage[131];
	Question_Heritage[14] = ResultAjaxHeritage[141];
	
	//Respota certa
	Answer_Question[0][0] = ResultAjaxHeritage[2];
	Answer_Question[1][0] = ResultAjaxHeritage[12];
	Answer_Question[2][0] = ResultAjaxHeritage[22];
	Answer_Question[3][0] = ResultAjaxHeritage[32];
	Answer_Question[4][0] = ResultAjaxHeritage[42];
	Answer_Question[5][0] = ResultAjaxHeritage[52];
	Answer_Question[6][0] = ResultAjaxHeritage[62];
	Answer_Question[7][0] = ResultAjaxHeritage[72];
	Answer_Question[8][0] = ResultAjaxHeritage[82];
	Answer_Question[9][0] = ResultAjaxHeritage[92];
	Answer_Question[10][0] = ResultAjaxHeritage[102];
	Answer_Question[11][0] = ResultAjaxHeritage[112];
	Answer_Question[12][0] = ResultAjaxHeritage[122];
	Answer_Question[13][0] = ResultAjaxHeritage[132];
	Answer_Question[14][0] = ResultAjaxHeritage[142];
	
	//Resposta errada 1
	Answer_Question[0][1] = ResultAjaxHeritage[3];
	Answer_Question[1][1] = ResultAjaxHeritage[13];
	Answer_Question[2][1] = ResultAjaxHeritage[23];
	Answer_Question[3][1] = ResultAjaxHeritage[33];
	Answer_Question[4][1] = ResultAjaxHeritage[43];
	Answer_Question[5][1] = ResultAjaxHeritage[53];
	Answer_Question[6][1] = ResultAjaxHeritage[63];
	Answer_Question[7][1] = ResultAjaxHeritage[73];
	Answer_Question[8][1] = ResultAjaxHeritage[83];
	Answer_Question[9][1] = ResultAjaxHeritage[93];
	Answer_Question[10][1] = ResultAjaxHeritage[103];
	Answer_Question[11][1] = ResultAjaxHeritage[113];
	Answer_Question[12][1] = ResultAjaxHeritage[123];
	Answer_Question[13][1] = ResultAjaxHeritage[133];
	Answer_Question[14][1] = ResultAjaxHeritage[143];
	
	//Resposta errada 2
	Answer_Question[0][2] = ResultAjaxHeritage[4];
	Answer_Question[1][2] = ResultAjaxHeritage[14];
	Answer_Question[2][2] = ResultAjaxHeritage[24];
	Answer_Question[3][2] = ResultAjaxHeritage[34];
	Answer_Question[4][2] = ResultAjaxHeritage[44];
	Answer_Question[5][2] = ResultAjaxHeritage[54];
	Answer_Question[6][2] = ResultAjaxHeritage[64];
	Answer_Question[7][2] = ResultAjaxHeritage[74];
	Answer_Question[8][2] = ResultAjaxHeritage[84];
	Answer_Question[9][2] = ResultAjaxHeritage[94];
	Answer_Question[10][2] = ResultAjaxHeritage[104];
	Answer_Question[11][2] = ResultAjaxHeritage[114];
	Answer_Question[12][2] = ResultAjaxHeritage[124];
	Answer_Question[13][2] = ResultAjaxHeritage[134];
	Answer_Question[14][2] = ResultAjaxHeritage[144];
	
	//Resposta errada 3
	Answer_Question[0][3] = ResultAjaxHeritage[5];
	Answer_Question[1][3] = ResultAjaxHeritage[15];
	Answer_Question[2][3] = ResultAjaxHeritage[25];
	Answer_Question[3][3] = ResultAjaxHeritage[35];
	Answer_Question[4][3] = ResultAjaxHeritage[45];
	Answer_Question[5][3] = ResultAjaxHeritage[55];
	Answer_Question[6][3] = ResultAjaxHeritage[65];
	Answer_Question[7][3] = ResultAjaxHeritage[75];
	Answer_Question[8][3] = ResultAjaxHeritage[85];
	Answer_Question[9][3] = ResultAjaxHeritage[95];
	Answer_Question[10][3] = ResultAjaxHeritage[105];
	Answer_Question[11][3] = ResultAjaxHeritage[115];
	Answer_Question[12][3] = ResultAjaxHeritage[125];
	Answer_Question[13][3] = ResultAjaxHeritage[135];
	Answer_Question[14][3] = ResultAjaxHeritage[145];
	
	//Dica 1
	Tips_Heritage[0][0] = ResultAjaxHeritage[6];
	Tips_Heritage[1][0] = ResultAjaxHeritage[16];
	Tips_Heritage[2][0] = ResultAjaxHeritage[26];
	Tips_Heritage[3][0] = ResultAjaxHeritage[36];
	Tips_Heritage[4][0] = ResultAjaxHeritage[46];
	Tips_Heritage[5][0] = ResultAjaxHeritage[56];
	Tips_Heritage[6][0] = ResultAjaxHeritage[66];
	Tips_Heritage[7][0] = ResultAjaxHeritage[76];
	Tips_Heritage[8][0] = ResultAjaxHeritage[86];
	Tips_Heritage[9][0] = ResultAjaxHeritage[96];
	Tips_Heritage[10][0] = ResultAjaxHeritage[106];
	Tips_Heritage[11][0] = ResultAjaxHeritage[116];
	Tips_Heritage[12][0] = ResultAjaxHeritage[126];
	Tips_Heritage[13][0] = ResultAjaxHeritage[136];
	Tips_Heritage[14][0] = ResultAjaxHeritage[146];
	
	//Dica 2
	Tips_Heritage[0][1] = ResultAjaxHeritage[7];
	Tips_Heritage[1][1] = ResultAjaxHeritage[17];
	Tips_Heritage[2][1] = ResultAjaxHeritage[27];
	Tips_Heritage[3][1] = ResultAjaxHeritage[37];
	Tips_Heritage[4][1] = ResultAjaxHeritage[47];
	Tips_Heritage[5][1] = ResultAjaxHeritage[57];
	Tips_Heritage[6][1] = ResultAjaxHeritage[67];
	Tips_Heritage[7][1] = ResultAjaxHeritage[77];
	Tips_Heritage[8][1] = ResultAjaxHeritage[87];
	Tips_Heritage[9][1] = ResultAjaxHeritage[97];
	Tips_Heritage[10][1] = ResultAjaxHeritage[107];
	Tips_Heritage[11][1] = ResultAjaxHeritage[117];
	Tips_Heritage[12][1] = ResultAjaxHeritage[127];
	Tips_Heritage[13][1] = ResultAjaxHeritage[137];
	Tips_Heritage[14][1] = ResultAjaxHeritage[147];
	
	//Dica 3
	Tips_Heritage[0][2] = ResultAjaxHeritage[8];
	Tips_Heritage[1][2] = ResultAjaxHeritage[18];
	Tips_Heritage[2][2] = ResultAjaxHeritage[28];
	Tips_Heritage[3][2] = ResultAjaxHeritage[38];
	Tips_Heritage[4][2] = ResultAjaxHeritage[48];
	Tips_Heritage[5][2] = ResultAjaxHeritage[58];
	Tips_Heritage[6][2] = ResultAjaxHeritage[68];
	Tips_Heritage[7][2] = ResultAjaxHeritage[78];
	Tips_Heritage[8][2] = ResultAjaxHeritage[88];
	Tips_Heritage[9][2] = ResultAjaxHeritage[98];
	Tips_Heritage[10][2] = ResultAjaxHeritage[108];
	Tips_Heritage[11][2] = ResultAjaxHeritage[118];
	Tips_Heritage[12][2] = ResultAjaxHeritage[128];
	Tips_Heritage[13][2] = ResultAjaxHeritage[138];
	Tips_Heritage[14][2] = ResultAjaxHeritage[148];
	
	//Imagem dos patrimônios
	Image_Heritage[0] = ResultAjaxHeritage[9];
	Image_Heritage[1] = ResultAjaxHeritage[19];
	Image_Heritage[2] = ResultAjaxHeritage[29];
	Image_Heritage[3] = ResultAjaxHeritage[39];
	Image_Heritage[4] = ResultAjaxHeritage[49];
	Image_Heritage[5] = ResultAjaxHeritage[59];
	Image_Heritage[6] = ResultAjaxHeritage[69];
	Image_Heritage[7] = ResultAjaxHeritage[79];
	Image_Heritage[8] = ResultAjaxHeritage[89];
	Image_Heritage[9] = ResultAjaxHeritage[99];
	Image_Heritage[10] = ResultAjaxHeritage[109];
	Image_Heritage[11] = ResultAjaxHeritage[119];
	Image_Heritage[12] = ResultAjaxHeritage[129];
	Image_Heritage[13] = ResultAjaxHeritage[139];
	Image_Heritage[14] = ResultAjaxHeritage[149];
	
	document.getElementById("Wait").style.visibility = "hidden";
	document.getElementById("starting").style.visibility = "hidden";
	document.getElementById("menosJogador").style.visibility = "hidden";
	document.getElementById("maisJogador").style.visibility = "hidden";
	document.getElementById("infoPlayer1").style.visibility = "hidden";
	document.getElementById("infoPlayer2").style.visibility = "hidden";
	document.getElementById("infoPlayer3").style.visibility = "hidden";
	document.getElementById("infoPlayer4").style.visibility = "hidden";
	document.getElementById("P_COM").style.visibility = "hidden";
	document.getElementById("COM_NJ").style.visibility = "hidden";
	document.getElementById("COM_JE").style.visibility = "hidden";
	document.getElementById("Id_Sala").style.visibility = "hidden";
	document.getElementById("P_ID_SALA").style.visibility = "hidden";
	document.getElementById("MJ").style.visibility = "hidden";
	document.getElementById("buttonSend").disabled = true;
	
	if(sala == 1){ // CASO A PARTIDA SEJA NO MODO ONLINE
		document.getElementById("Div_Sala").style.visibility = "visible"; // DIV PARA MOSTRAR O NÚMERO DA SALA
	}
	
})
.fail(function() {
	alert("Erro ao tentar conectar-se ao servidor. Tente novamente mais tarde!");
});

//------------------------------------------------------------------------------------------------------------------
}
//--------------------------------------------------------------------------------------
//Os códigos a seguir são acerca da funcionalidade do jogo

//Aqui é para igualar a quantidade de jogadores ao número de vezes
function AmountPlayer(){
	switch(quantidadeJogadores){
		case 2:
			switch(TimePlayer){
				case 1:
					TimePlayer += 1;
					break;
				case 2:
					TimePlayer = 1;
					break;
				default:
					alert("Erro ao passar a vez do jogador");
					break;
			}
			break;
		case 3:
			switch(TimePlayer){
				case 1:
					TimePlayer += 1;
					break;
				case 2:
					TimePlayer += 1;
					break;
				case 3:
					TimePlayer = 1;
					break;
				default:
					alert("Erro ao passar a vez do jogador");
					break;
			}
			AmountAux();
			break;
		case 4:
			switch(TimePlayer){
				case 1:
					TimePlayer += 1;
					break;
				case 2:
					TimePlayer += 1;
					break;
				case 3:
					TimePlayer += 1;
					break;
				case 4:
					TimePlayer = 1;
					break;
				default:
					alert("Erro ao passar a vez do jogador");
					break;
			}
			AmountAux();
			break;
		default:
			console.log("Erro na quantidade de jogadores");
			break;
	}
	
}

function AmountAux(){
	switch(quantidadeJogadores){
		case 3:
			//Checar se alguém já terminou o jogo
			if(((TimePlayer==1) && (EndPlayer[1] == true)) || ((TimePlayer==2) && (EndPlayer[2] == true)) || ((TimePlayer==3) && (EndPlayer[3] == true)) || ((TimePlayer==4) && (EndPlayer[4] == true))) 
			{
				switch(TimePlayer)
				{
					case 1:
						if((TimePlayer==1) && (EndPlayer[1] == true)){
							TimePlayer += 1;
						}
						if((TimePlayer==2) && (EndPlayer[2] == true)){
							TimePlayer += 1;
						}
						if((TimePlayer==3) && (EndPlayer[3] == true)){
							TimePlayer = 1;
						}
						break;
					case 2:
						if((TimePlayer==2) && (EndPlayer[2] == true)){
							TimePlayer += 1;
						}
						if((TimePlayer==3) && (EndPlayer[3] == true)){
							TimePlayer = 1;
						}
						if((TimePlayer==1) && (EndPlayer[1] == true)){
							TimePlayer += 1;
						}
						break;
					case 3:
						if((TimePlayer==3) && (EndPlayer[3] == true)){
							TimePlayer = 1;
						}
						if((TimePlayer==1) && (EndPlayer[1] == true)){
							TimePlayer += 1;
						}
						if((TimePlayer==2) && (EndPlayer[2] == true)){
							TimePlayer += 1;
						}
						break;
					default:
						console.log("Erro!");
						break;
				}
			}
		
			break;
			
		case 4:	
			//Checar se alguém já terminou o jogo
			if(((TimePlayer==1) && (EndPlayer[1] == true)) || ((TimePlayer==2) && (EndPlayer[2] == true)) || ((TimePlayer==3) && (EndPlayer[3] == true)) || ((TimePlayer==4) && (EndPlayer[4] == true))) 
			{
				switch(TimePlayer)
				{
					case 1:
						if((TimePlayer==1) && (EndPlayer[1] == true)){
							TimePlayer += 1;
						}
						if((TimePlayer==2) && (EndPlayer[2] == true)){
							TimePlayer += 1;
						}
						if((TimePlayer==3) && (EndPlayer[3] == true)){
							TimePlayer += 1;
						}
						if((TimePlayer==4) && (EndPlayer[4] == true)){
							TimePlayer = 1;
						}
						break;
					case 2:
						if((TimePlayer==2) && (EndPlayer[2] == true)){
							TimePlayer += 1;
						}
						if((TimePlayer==3) && (EndPlayer[3] == true)){
							TimePlayer += 1;
						}
						if((TimePlayer==4) && (EndPlayer[4] == true)){
							TimePlayer = 1;
						}
						if((TimePlayer==1) && (EndPlayer[1] == true)){
							TimePlayer += 1;
						}
						break;
					case 3:
						if((TimePlayer==3) && (EndPlayer[3] == true)){
							TimePlayer += 1;
						}
						if((TimePlayer==4) && (EndPlayer[4] == true)){
							TimePlayer = 1;
						}
						if((TimePlayer==1) && (EndPlayer[1] == true)){
							TimePlayer += 1;
						}
						if((TimePlayer==2) && (EndPlayer[2] == true)){
							TimePlayer += 1;
						}
						break;
					case 4:
						if((TimePlayer==4) && (EndPlayer[4] == true)){
							TimePlayer = 1;
						}
						if((TimePlayer==1) && (EndPlayer[1] == true)){
							TimePlayer += 1;
						}
						if((TimePlayer==2) && (EndPlayer[2] == true)){
							TimePlayer += 1;
						}
						if((TimePlayer==3) && (EndPlayer[3] == true)){
							TimePlayer += 1;
						}
						break;
					default:
						console.log("Erro!");
				}
				
			}
			break;
			
		default:
			console.log("Erro");
			break;
	}
}

//Aqui limpa o canvas
function LimparCanvas(){
	ctx.clearRect(0, 0, 955, 655);
}

//Aqui é para as casas das perguntas
function Question(PosX, PosY){
		RandomQuestion = Math.floor(Math.random()*14);
		document.getElementById("perguntas").style.visibility = "visible";
		Temporizador = true;
		seg = 51; P_I = 0;
		Cronometro();
		
		//Patrimônio 1
		if((PosX == posicao[1][0] && PosY == posicao[1][1])){
			document.getElementById("patrimonioQuestion").innerHTML = ("1° Questão - " + Question_Heritage[RandomQuestion]);
			document.getElementById("R1").innerHTML = "A) " + Answer_Question[RandomQuestion][0]; //Resposta Correta
			document.getElementById("R2").innerHTML = "B) " + Answer_Question[RandomQuestion][1];
			document.getElementById("R3").innerHTML = "C) " + Answer_Question[RandomQuestion][2];
			document.getElementById("R4").innerHTML = "D) " + Answer_Question[RandomQuestion][3];
			
			document.getElementById("R1").value = Answer_Question[RandomQuestion][0]; //Resposta Correta
			document.getElementById("R2").value = Answer_Question[RandomQuestion][1];
			document.getElementById("R3").value = Answer_Question[RandomQuestion][2];
			document.getElementById("R4").value = Answer_Question[RandomQuestion][3];
			
			//------------------ (Abaixo pertence ao div da correção)
			$("#patrimonioImg").attr("src", "data:image/jpge;base64," + Image_Heritage[RandomQuestion]);
			$("#patrimonioName").text("Nome do Patrimônio - " + Nick_Heritage[RandomQuestion]);
			NumPatrimonio = RandomQuestion; // Variavel para saber qual patrimonio será pedido
		}
		//Patrimônio 2
		else if((PosX == posicao[4][0] && PosY == posicao[4][1])){
			document.getElementById("patrimonioQuestion").innerHTML = ("2° Questão - " + Question_Heritage[RandomQuestion]);
			document.getElementById("R1").innerHTML = "A) " + Answer_Question[RandomQuestion][1];
			document.getElementById("R2").innerHTML = "B) " + Answer_Question[RandomQuestion][2];
			document.getElementById("R3").innerHTML = "C) " + Answer_Question[RandomQuestion][3];
			document.getElementById("R4").innerHTML = "D) " + Answer_Question[RandomQuestion][0]; //Resposta Correta
			
			document.getElementById("R1").value = Answer_Question[RandomQuestion][1];
			document.getElementById("R2").value = Answer_Question[RandomQuestion][2];
			document.getElementById("R3").value = Answer_Question[RandomQuestion][3];
			document.getElementById("R4").value = Answer_Question[RandomQuestion][0];  //Resposta Correta
			
			//------------------ (Abaixo pertence ao div da correção)
			$("#patrimonioImg").attr("src", "data:image/jpge;base64," + Image_Heritage[RandomQuestion]);
			$("#patrimonioName").text("Nome do Patrimônio - " + Nick_Heritage[RandomQuestion]);
			NumPatrimonio = RandomQuestion; // Variavel para saber qual patrimonio será pedido
		}
		//Patrimônio 3
		else if((PosX == posicao[9][0] && PosY == posicao[9][1])){
			document.getElementById("patrimonioQuestion").innerHTML = ("3° Questão - " + Question_Heritage[RandomQuestion]);
			document.getElementById("R1").innerHTML = "A) " + Answer_Question[RandomQuestion][2];
			document.getElementById("R2").innerHTML = "B) " + Answer_Question[RandomQuestion][0]; //Resposta Correta
			document.getElementById("R3").innerHTML = "C) " + Answer_Question[RandomQuestion][1];
			document.getElementById("R4").innerHTML = "D) " + Answer_Question[RandomQuestion][3];
			
			document.getElementById("R1").value = Answer_Question[RandomQuestion][2];
			document.getElementById("R2").value = Answer_Question[RandomQuestion][0]; //Resposta Correta
			document.getElementById("R3").value = Answer_Question[RandomQuestion][1];
			document.getElementById("R4").value = Answer_Question[RandomQuestion][3];  
			
			//------------------ (Abaixo pertence ao div da correção)
			$("#patrimonioImg").attr("src", "data:image/jpge;base64," + Image_Heritage[RandomQuestion]);
			$("#patrimonioName").text("Nome do Patrimônio - " + Nick_Heritage[RandomQuestion]);
			NumPatrimonio = RandomQuestion; // Variavel para saber qual patrimonio será pedido
		}
		//Patrimônio 4
		else if((PosX == posicao[14][0] && PosY == posicao[14][1])){
			document.getElementById("patrimonioQuestion").innerHTML = ("4° Questão - " + Question_Heritage[RandomQuestion]);
			document.getElementById("R1").innerHTML = "A) " + Answer_Question[RandomQuestion][2];
			document.getElementById("R2").innerHTML = "B) " + Answer_Question[RandomQuestion][1];
			document.getElementById("R3").innerHTML = "C) " + Answer_Question[RandomQuestion][3];
			document.getElementById("R4").innerHTML = "D) " + Answer_Question[RandomQuestion][0]; //Resposta Correta
			
			document.getElementById("R1").value = Answer_Question[RandomQuestion][2];
			document.getElementById("R2").value = Answer_Question[RandomQuestion][1];
			document.getElementById("R3").value = Answer_Question[RandomQuestion][3];
			document.getElementById("R4").value = Answer_Question[RandomQuestion][0]; //Resposta Correta  
			
			//------------------ (Abaixo pertence ao div da correção)
			$("#patrimonioImg").attr("src", "data:image/jpge;base64," + Image_Heritage[RandomQuestion]);
			$("#patrimonioName").text("Nome do Patrimônio - " + Nick_Heritage[RandomQuestion]);
			NumPatrimonio = RandomQuestion; // Variavel para saber qual patrimonio será pedido
		}
		//Patrimônio 5
		else if((PosX == posicao[17][0] && PosY == posicao[17][1])){
			document.getElementById("patrimonioQuestion").innerHTML = ("5° Questão - " + Question_Heritage[RandomQuestion]);
			document.getElementById("R1").innerHTML = "A) " + Answer_Question[RandomQuestion][3];
			document.getElementById("R2").innerHTML = "B) " + Answer_Question[RandomQuestion][1];
			document.getElementById("R3").innerHTML = "C) " + Answer_Question[RandomQuestion][2];
			document.getElementById("R4").innerHTML = "D) " + Answer_Question[RandomQuestion][0]; //Resposta Correta
			
			document.getElementById("R1").value = Answer_Question[RandomQuestion][3];
			document.getElementById("R2").value = Answer_Question[RandomQuestion][1];
			document.getElementById("R3").value = Answer_Question[RandomQuestion][2];
			document.getElementById("R4").value = Answer_Question[RandomQuestion][0]; //Resposta Correta
			
			//------------------ (Abaixo pertence ao div da correção)
			$("#patrimonioImg").attr("src", "data:image/jpge;base64," + Image_Heritage[RandomQuestion]);
			$("#patrimonioName").text("Nome do Patrimônio - " + Nick_Heritage[RandomQuestion]);
			NumPatrimonio = RandomQuestion; // Variavel para saber qual patrimonio será pedido
		}
		//Patrimônio 6
		else if((PosX == posicao[20][0] && PosY == posicao[20][1])){
			document.getElementById("patrimonioQuestion").innerHTML = ("6° Questão - " + Question_Heritage[RandomQuestion]);
			document.getElementById("R1").innerHTML = "A) " + Answer_Question[RandomQuestion][0]; //Resposta Correta
			document.getElementById("R2").innerHTML = "B) " + Answer_Question[RandomQuestion][1];
			document.getElementById("R3").innerHTML = "C) " + Answer_Question[RandomQuestion][2];
			document.getElementById("R4").innerHTML = "D) " + Answer_Question[RandomQuestion][3];
			
			document.getElementById("R1").value = Answer_Question[RandomQuestion][0]; //Resposta Correta
			document.getElementById("R2").value = Answer_Question[RandomQuestion][1];
			document.getElementById("R3").value = Answer_Question[RandomQuestion][2];
			document.getElementById("R4").value = Answer_Question[RandomQuestion][3]; 
			
			//------------------ (Abaixo pertence ao div da correção)
			$("#patrimonioImg").attr("src", "data:image/jpge;base64," + Image_Heritage[RandomQuestion]);
			$("#patrimonioName").text("Nome do Patrimônio - " + Nick_Heritage[RandomQuestion]);
			NumPatrimonio = RandomQuestion; // Variavel para saber qual patrimonio será pedido
		}
		//Patrimônio 7
		else if((PosX == posicao[23][0] && PosY == posicao[23][1])){
			document.getElementById("patrimonioQuestion").innerHTML = ("7° Questão - " + Question_Heritage[RandomQuestion]);
			document.getElementById("R1").innerHTML = "A) " + Answer_Question[RandomQuestion][0]; //Resposta Correta
			document.getElementById("R2").innerHTML = "B) " + Answer_Question[RandomQuestion][2];
			document.getElementById("R3").innerHTML = "C) " + Answer_Question[RandomQuestion][1];
			document.getElementById("R4").innerHTML = "D) " + Answer_Question[RandomQuestion][3];
			
			document.getElementById("R1").value = Answer_Question[RandomQuestion][0]; //Resposta Correta
			document.getElementById("R2").value = Answer_Question[RandomQuestion][2];
			document.getElementById("R3").value = Answer_Question[RandomQuestion][1];
			document.getElementById("R4").value = Answer_Question[RandomQuestion][3]; 
			
			//------------------ (Abaixo pertence ao div da correção)
			$("#patrimonioImg").attr("src", "data:image/jpge;base64," + Image_Heritage[RandomQuestion]);
			$("#patrimonioName").text("Nome do Patrimônio - " + Nick_Heritage[RandomQuestion]);
			NumPatrimonio = RandomQuestion; // Variavel para saber qual patrimonio será pedido
		}
		//Patrimônio 8
		else if((PosX == posicao[26][0] && PosY == posicao[26][1])){
			document.getElementById("patrimonioQuestion").innerHTML = ("8° Questão - " + Question_Heritage[RandomQuestion]);
			document.getElementById("R1").innerHTML = "A) " + Answer_Question[RandomQuestion][1];
			document.getElementById("R2").innerHTML = "B) " + Answer_Question[RandomQuestion][0]; //Resposta Correta
			document.getElementById("R3").innerHTML = "C) " + Answer_Question[RandomQuestion][3];
			document.getElementById("R4").innerHTML = "D) " + Answer_Question[RandomQuestion][2];
			
			document.getElementById("R1").value = Answer_Question[RandomQuestion][1]; 
			document.getElementById("R2").value = Answer_Question[RandomQuestion][0]; //Resposta Correta
			document.getElementById("R3").value = Answer_Question[RandomQuestion][3];
			document.getElementById("R4").value = Answer_Question[RandomQuestion][2]; 
			
			//------------------ (Abaixo pertence ao div da correção)
			$("#patrimonioImg").attr("src", "data:image/jpge;base64," + Image_Heritage[RandomQuestion]);
			$("#patrimonioName").text("Nome do Patrimônio - " + Nick_Heritage[RandomQuestion]);
			NumPatrimonio = RandomQuestion; // Variavel para saber qual patrimonio será pedido
		}
		//Patrimônio 9
		else if((PosX == posicao[29][0] && PosY == posicao[29][1])){
			document.getElementById("patrimonioQuestion").innerHTML = ("9° Questão - " + Question_Heritage[RandomQuestion]);	
			document.getElementById("R1").innerHTML = "A) " + Answer_Question[RandomQuestion][1];
			document.getElementById("R2").innerHTML = "B) " + Answer_Question[RandomQuestion][2];
			document.getElementById("R3").innerHTML = "C) " + Answer_Question[RandomQuestion][0]; //Resposta Correta
			document.getElementById("R4").innerHTML = "D) " + Answer_Question[RandomQuestion][3];
			
			document.getElementById("R1").value = Answer_Question[RandomQuestion][1]; 
			document.getElementById("R2").value = Answer_Question[RandomQuestion][2]; 
			document.getElementById("R3").value = Answer_Question[RandomQuestion][0]; //Resposta Correta
			document.getElementById("R4").value = Answer_Question[RandomQuestion][3]; 
			
			//------------------ (Abaixo pertence ao div da correção)
			$("#patrimonioImg").attr("src", "data:image/jpge;base64," + Image_Heritage[RandomQuestion]);
			$("#patrimonioName").text("Nome do Patrimônio - " + Nick_Heritage[RandomQuestion]);
			NumPatrimonio = RandomQuestion; // Variavel para saber qual patrimonio será pedido
		}
		//Patrimônio 10
		else if((PosX == posicao[34][0] && PosY == posicao[34][1])){
			document.getElementById("patrimonioQuestion").innerHTML = ("10° Questão - " + Question_Heritage[RandomQuestion]);
			document.getElementById("R1").innerHTML = "A) " + Answer_Question[RandomQuestion][0]; //Resposta Correta
			document.getElementById("R2").innerHTML = "B) " + Answer_Question[RandomQuestion][2];
			document.getElementById("R3").innerHTML = "C) " + Answer_Question[RandomQuestion][1];
			document.getElementById("R4").innerHTML = "D) " + Answer_Question[RandomQuestion][3];
			
			document.getElementById("R1").value = Answer_Question[RandomQuestion][0]; //Resposta Correta
			document.getElementById("R2").value = Answer_Question[RandomQuestion][2]; 
			document.getElementById("R3").value = Answer_Question[RandomQuestion][1]; 
			document.getElementById("R4").value = Answer_Question[RandomQuestion][3]; 
			
			//------------------ (Abaixo pertence ao div da correção)
			$("#patrimonioImg").attr("src", "data:image/jpge;base64," + Image_Heritage[RandomQuestion]);
			$("#patrimonioName").text("Nome do Patrimônio - " + Nick_Heritage[RandomQuestion]);
			NumPatrimonio = RandomQuestion; // Variavel para saber qual patrimonio será pedido
		}
		//Patrimônio 11
		else if((PosX == posicao[38][0] && PosY == posicao[38][1])){
			document.getElementById("patrimonioQuestion").innerHTML = ("11° Questão - " + Question_Heritage[RandomQuestion]);
			document.getElementById("R1").innerHTML = "A) " + Answer_Question[RandomQuestion][3];
			document.getElementById("R2").innerHTML = "B) " + Answer_Question[RandomQuestion][2];
			document.getElementById("R3").innerHTML = "C) " + Answer_Question[RandomQuestion][1];
			document.getElementById("R4").innerHTML = "D) " + Answer_Question[RandomQuestion][0]; //Resposta Correta
			
			document.getElementById("R1").value = Answer_Question[RandomQuestion][3];
			document.getElementById("R2").value = Answer_Question[RandomQuestion][2]; 
			document.getElementById("R3").value = Answer_Question[RandomQuestion][1]; 
			document.getElementById("R4").value = Answer_Question[RandomQuestion][0]; //Resposta Correta
			
			//------------------ (Abaixo pertence ao div da correção)
			$("#patrimonioImg").attr("src", "data:image/jpge;base64," + Image_Heritage[RandomQuestion]);
			$("#patrimonioName").text("Nome do Patrimônio - " + Nick_Heritage[RandomQuestion]);
			NumPatrimonio = RandomQuestion; // Variavel para saber qual patrimonio será pedido
		}
		//Patrimônio 12
		else if((PosX == posicao[44][0] && PosY == posicao[44][1])){
			document.getElementById("patrimonioQuestion").innerHTML = ("12° Questão - " + Question_Heritage[RandomQuestion]);
			document.getElementById("R1").innerHTML = "A) " + Answer_Question[RandomQuestion][2];
			document.getElementById("R2").innerHTML = "B) " + Answer_Question[RandomQuestion][3];
			document.getElementById("R3").innerHTML = "C) " + Answer_Question[RandomQuestion][1];
			document.getElementById("R4").innerHTML = "D) " + Answer_Question[RandomQuestion][0]; //Resposta Correta
			
			document.getElementById("R1").value = Answer_Question[RandomQuestion][2];
			document.getElementById("R2").value = Answer_Question[RandomQuestion][3]; 
			document.getElementById("R3").value = Answer_Question[RandomQuestion][1]; 
			document.getElementById("R4").value = Answer_Question[RandomQuestion][0]; //Resposta Correta
			
			//------------------ (Abaixo pertence ao div da correção)
			$("#patrimonioImg").attr("src", "data:image/jpge;base64," + Image_Heritage[RandomQuestion]);
			$("#patrimonioName").text("Nome do Patrimônio - " + Nick_Heritage[RandomQuestion]);
			NumPatrimonio = RandomQuestion; // Variavel para saber qual patrimonio será pedido
		}
		//Patrimônio 13
		else if((PosX == posicao[47][0] && PosY == posicao[47][1])){
			document.getElementById("patrimonioQuestion").innerHTML = ("13° Questão - " + Question_Heritage[RandomQuestion]);
			document.getElementById("R1").innerHTML = "A) " + Answer_Question[RandomQuestion][3];
			document.getElementById("R2").innerHTML = "B) " + Answer_Question[RandomQuestion][0]; //Resposta Correta
			document.getElementById("R3").innerHTML = "C) " + Answer_Question[RandomQuestion][2];
			document.getElementById("R4").innerHTML = "D) " + Answer_Question[RandomQuestion][1];
			
			document.getElementById("R1").value = Answer_Question[RandomQuestion][3];
			document.getElementById("R2").value = Answer_Question[RandomQuestion][0]; //Resposta Correta
			document.getElementById("R3").value = Answer_Question[RandomQuestion][2]; 
			document.getElementById("R4").value = Answer_Question[RandomQuestion][1];
			
			//------------------ (Abaixo pertence ao div da correção)
			$("#patrimonioImg").attr("src", "data:image/jpge;base64," + Image_Heritage[RandomQuestion]);
			$("#patrimonioName").text("Nome do Patrimônio - " + Nick_Heritage[RandomQuestion]);
			NumPatrimonio = RandomQuestion; // Variavel para saber qual patrimonio será pedido
		}
		//Patrimônio 14
		else if((PosX == posicao[49][0] && PosY == posicao[49][1])){
			document.getElementById("patrimonioQuestion").innerHTML = ("14° Questão - " + Question_Heritage[RandomQuestion]);
			document.getElementById("R1").innerHTML = "A) " + Answer_Question[RandomQuestion][1];
			document.getElementById("R2").innerHTML = "B) " + Answer_Question[RandomQuestion][3];
			document.getElementById("R3").innerHTML = "C) " + Answer_Question[RandomQuestion][0]; //Resposta Correta
			document.getElementById("R4").innerHTML = "D) " + Answer_Question[RandomQuestion][2];
			
			document.getElementById("R1").value = Answer_Question[RandomQuestion][1];
			document.getElementById("R2").value = Answer_Question[RandomQuestion][3]; 
			document.getElementById("R3").value = Answer_Question[RandomQuestion][0]; //Resposta Correta
			document.getElementById("R4").value = Answer_Question[RandomQuestion][2];
			
			//------------------ (Abaixo pertence ao div da correção)
			$("#patrimonioImg").attr("src", "data:image/jpge;base64," + Image_Heritage[RandomQuestion]);
			$("#patrimonioName").text("Nome do Patrimônio - " + Nick_Heritage[RandomQuestion]);
			NumPatrimonio = RandomQuestion; // Variavel para saber qual patrimonio será pedido
		}
		//Patrimônio 15
		else if((PosX == posicao[53][0] && PosY == posicao[53][1])){
			document.getElementById("patrimonioQuestion").innerHTML = ("15° Questão - " + Question_Heritage[RandomQuestion]);
			document.getElementById("R1").innerHTML = "A) " + Answer_Question[RandomQuestion][2];
			document.getElementById("R2").innerHTML = "B) " + Answer_Question[RandomQuestion][3];
			document.getElementById("R3").innerHTML = "C) " + Answer_Question[RandomQuestion][1];
			document.getElementById("R4").innerHTML = "D) " + Answer_Question[RandomQuestion][0]; //Resposta Correta
			
			document.getElementById("R1").value = Answer_Question[RandomQuestion][2];
			document.getElementById("R2").value = Answer_Question[RandomQuestion][3]; 
			document.getElementById("R3").value = Answer_Question[RandomQuestion][1];
			document.getElementById("R4").value = Answer_Question[RandomQuestion][0]; //Resposta Correta
			
			//------------------ (Abaixo pertence ao div da correção)
			$("#patrimonioImg").attr("src", "data:image/jpge;base64," + Image_Heritage[RandomQuestion]);
			$("#patrimonioName").text("Nome do Patrimônio - " + Nick_Heritage[RandomQuestion]);
			NumPatrimonio = RandomQuestion; // Variavel para saber qual patrimonio será pedido
		}
}

//Abrir o div dos imprevistos
function Imprevistos(PosX, PosY){
	document.getElementById('trapSound').play();
	document.getElementById("Imprevistos").style.visibility = "visible";
	Temporizador = true;
	seg = 11; P_I = 1;
	Cronometro();
	
	if((PosX == posicao[7][0] && PosY == posicao[7][1])){
		document.getElementById("TextImprevistos").innerHTML = "Você caiu numa poça de água. Agora terá que retornar para trocar suas roupas.";
		document.getElementById("TextQtdVoltas").innerHTML = "Volte 4 casas.";
		QtdVoltas = 4;
	}
	if((PosX == posicao[12][0] && PosY == posicao[12][1])){
		document.getElementById("TextImprevistos").innerHTML = "0:00 - Olha a hora!!! Está muito tarde e por isso você foi atrás do hotel mais próximo para se hospedar.";
		document.getElementById("TextQtdVoltas").innerHTML = "Volte 4 casas.";
		QtdVoltas = 4;
	}
	if((PosX == posicao[31][0] && PosY == posicao[31][1])){
		document.getElementById("TextImprevistos").innerHTML = "Você se perdeu e acabou entrando no parque. Agora terá que retornar para refazer seu caminho.";
		document.getElementById("TextQtdVoltas").innerHTML = "Volte 6 casas.";
		QtdVoltas = 6;
	}
	if((PosX == posicao[36][0] && PosY == posicao[36][1])){
		document.getElementById("TextImprevistos").innerHTML = "Você entrou por engano no ônibus errado e acabou no sentido oposto da estrada. Agora terá que descer na parada mais próxima.";
		document.getElementById("TextQtdVoltas").innerHTML = "Volte 3 casas.";
		QtdVoltas = 3;
	}
	if((PosX == posicao[41][0] && PosY == posicao[41][1])){
		document.getElementById("TextImprevistos").innerHTML = "As crianças se perderam. Que perigo!!! Você parou para ajuda-las a encontrar suas famílias.";
		document.getElementById("TextQtdVoltas").innerHTML = "Volte 4 casas.";
		QtdVoltas = 4;
	}
	if((PosX == posicao[51][0] && PosY == posicao[51][1])){
		document.getElementById("TextImprevistos").innerHTML = "Você esqueceu de sair com sua máscara nesta pandemia do vírus Covid. Agora terá que retornar para busca-la.";
		document.getElementById("TextQtdVoltas").innerHTML = "Volte pro início - retorne 49 casas.";
		QtdVoltas = 49;
	}

}

//Fechar o div da Imprevistos e desenhar os peões nos novos lugares
function CloseImprevistos(){
	document.getElementById("Imprevistos").style.visibility = "hidden";
	document.getElementById("Dice").disabled = false;	
	Temporizador = false;
//--------------------------------------------------------------------------------
	if(sala == 0) {
			
		switch(TimePlayer){
			case 1:
				One.MapSpace -= QtdVoltas;
				LimparCanvas();
				DrawPieces(One.MapSpace);
				setTimeout(function(){IluminarNome(TimePlayer);}, 200);
				break;
			case 2:
				Two.MapSpace -= QtdVoltas;
				LimparCanvas();
				DrawPieces(Two.MapSpace);
				setTimeout(function(){ IluminarNome(TimePlayer);}, 200);
				break;
			case 3:
				Three.MapSpace -= QtdVoltas;
				LimparCanvas();
				DrawPieces(Three.MapSpace);
				setTimeout(function(){ IluminarNome(TimePlayer);}, 200);
				break;
			case 4:
				Four.MapSpace -= QtdVoltas;
				LimparCanvas();
				DrawPieces(Four.MapSpace);
				setTimeout(function(){ IluminarNome(TimePlayer);}, 200);
				break;
			default:
				alert("Erro nos Imprevistos");
				break;
		}
		AmountPlayer();
		QtdVoltas=0;
	} else if(sala == 1){
		CloseImprevistosOnline();
	}
}

// Aqui é para checar a resposta das questões
function Answers(EscolhaDoUsuario){
	Temporizador = false;
	numDicas = 0; //Zerar o número de dicas após o jogador ter respondido 	 a questão
	
	var Answer;
	
	if (sala == 0) {
		

		//Pegar a resposta correspondente ao botão clicado
		switch(EscolhaDoUsuario){
			case 0:
				Answer = document.getElementById("R1").value;
				break;
			case 1:
				Answer = document.getElementById("R2").value;
				break;
			case 2:
				Answer = document.getElementById("R3").value;
				break;
			case 3:
				Answer = document.getElementById("R4").value;
				break;
			default:
				alert("Erro na escolha da resposta!");
				break;
		}
		
		//Conferir se a resposta do botão bate com a resposta certa
		if(Answer == Answer_Question[NumPatrimonio][0]){
			document.getElementById('correctSound').play();
			//Pontuação alterada para caso ele selecione alguma dica
			if(numDicas > 0){
				PtsQuestion -= (numDicas*100);
			} else{
				PtsQuestion = 500;
			}
			//Pontuação por jogador
			switch(TimePlayer){
				case 1:
					One.Score += PtsQuestion;
					document.getElementById("PontosJogadorVerde").innerHTML = One.Score.toFixed(0);
					break;
				case 2:
					Two.Score += PtsQuestion;
					document.getElementById("PontosJogadorVermelho").innerHTML = Two.Score.toFixed(0);
					break;
				case 3:
					Three.Score += PtsQuestion;
					document.getElementById("PontosJogadorAzul").innerHTML = Three.Score.toFixed(0);
					break;
				case 4:
					Four.Score += PtsQuestion;
					document.getElementById("PontosJogadorAmarelo").innerHTML = Four.Score.toFixed(0);
					break;
			}
			
			switch(EscolhaDoUsuario){
				case 0:
				document.getElementById("R1").style.backgroundColor= "Green";
					setTimeout(function(){document.getElementById("R1").style.backgroundColor= "#00cec9";CloseCorrecao(); AmountPlayer(); IluminarNome(TimePlayer); document.getElementById("Dice").disabled = false;}, 1000);
					break;
				case 1:
					document.getElementById("R2").style.backgroundColor= "Green";
					setTimeout(function(){document.getElementById("R2").style.backgroundColor= "#00cec9";CloseCorrecao(); AmountPlayer(); IluminarNome(TimePlayer); document.getElementById("Dice").disabled = false; }, 1000);
					break;
				case 2:
					document.getElementById("R3").style.backgroundColor= "Green";
					setTimeout(function(){document.getElementById("R3").style.backgroundColor= "#00cec9";CloseCorrecao();  AmountPlayer(); IluminarNome(TimePlayer); document.getElementById("Dice").disabled = false;}, 1000);
					break;
				case 3:
					document.getElementById("R4").style.backgroundColor= "Green";
					setTimeout(function(){document.getElementById("R4").style.backgroundColor= "#00cec9";CloseCorrecao(); AmountPlayer(); IluminarNome(TimePlayer); document.getElementById("Dice").disabled = false; }, 1000);
					break;
				default:
					alert("Erro na escolha da resposta!");
					break;
			}
			
			PtsQuestion = 500; //Ao final, deve-se devolver os pontos iniciais a variável
		} else{
			document.getElementById('failSound').play();
			//Pontuação por jogador
			switch(TimePlayer){
				case 1:
					One.Score -= 250;
					document.getElementById("PontosJogadorVerde").innerHTML = One.Score.toFixed(0);
					break;
				case 2:
					Two.Score -= 250;
					document.getElementById("PontosJogadorVermelho").innerHTML = Two.Score.toFixed(0);
					break;
				case 3:
					Three.Score -= 250;
					document.getElementById("PontosJogadorAzul").innerHTML = Three.Score.toFixed(0);
					break;
				case 4:
					Four.Score -= 250;
					document.getElementById("PontosJogadorAmarelo").innerHTML = Four.Score.toFixed(0);
					break;
			}
			
			switch(EscolhaDoUsuario){
				case 0:
				document.getElementById("R1").style.backgroundColor= "Red";
					setTimeout(function(){document.getElementById("R1").style.backgroundColor= "#00cec9"; document.getElementById("blockDica").style.visibility = "hidden"; document.getElementById("perguntas").style.visibility = "hidden";AmountPlayer();IluminarNome(TimePlayer); document.getElementById("Dice").disabled = false;}, 1000);
					break;
				case 1:
					document.getElementById("R2").style.backgroundColor= "Red";
					setTimeout(function(){document.getElementById("R2").style.backgroundColor= "#00cec9"; document.getElementById("blockDica").style.visibility = "hidden"; document.getElementById("perguntas").style.visibility = "hidden";AmountPlayer();IluminarNome(TimePlayer); document.getElementById("Dice").disabled = false;}, 1000);
					break;
				case 2:
					document.getElementById("R3").style.backgroundColor= "Red";
					setTimeout(function(){document.getElementById("R3").style.backgroundColor= "#00cec9"; document.getElementById("blockDica").style.visibility = "hidden"; document.getElementById("perguntas").style.visibility = "hidden";AmountPlayer();IluminarNome(TimePlayer); document.getElementById("Dice").disabled = false;}, 1000);
					break;
				case 3:
					document.getElementById("R4").style.backgroundColor= "Red";
					setTimeout(function(){document.getElementById("R4").style.backgroundColor= "#00cec9"; document.getElementById("blockDica").style.visibility = "hidden"; document.getElementById("perguntas").style.visibility = "hidden";AmountPlayer();IluminarNome(TimePlayer); document.getElementById("Dice").disabled = false;}, 1000);
					break;
				default:
					alert("Erro na escolha da resposta!");
					break;
			}
		}
	} else if (sala == 1){
		AnswersOnline(EscolhaDoUsuario);
	}
}

/*Fechar o div da pergunta
function CloseDiv_Aux(){
	document.getElementById("perguntas").style.visibility = "hidden";
}*/

//Fechar o div da correção
function CloseCorrecao(){
	document.getElementById("blockDica").style.visibility = "hidden";
	document.getElementById("perguntas").style.visibility = "hidden";
}

//Abrir o div da dica
function AbrirDivDica(){
	document.getElementById("blockDica").style.visibility = "visible";
	
	//Aqui vai ser acionado automaticamente, pois no momento que ele clicar no botão da dica, esse número já não pode ser mais 0
	if( numDicas == 0){
		alert("Você tem acesso a apenas 3 dicas. Ao ler e fechar a primeira dica, caso opte por outra, basta reclicar no mesmo botão.");
		numDicas = 1;
	}
	
	switch(numDicas){
		case 1:
			
			document.getElementById("TitleDica").innerHTML = "DICA UM"
			document.getElementById("dica").innerHTML = Tips_Heritage[NumPatrimonio][0];
			numDicas += 1;
			break;
		case 2:
			document.getElementById("TitleDica").innerHTML = "DICA UM E DOIS"
			document.getElementById("dica").innerHTML = Tips_Heritage[NumPatrimonio][0] + "<br><br>" + Tips_Heritage[NumPatrimonio][1];
			numDicas += 1;
			break;
		case 3:
			document.getElementById("TitleDica").innerHTML = "DICA UM, DOIS E TRÊS"
			document.getElementById("dica").innerHTML = Tips_Heritage[NumPatrimonio][0] + "<br><br>" + Tips_Heritage[NumPatrimonio][1] + "<br><br>" + Tips_Heritage[NumPatrimonio][2];
			numDicas = 3;
			break;
		default:
			alert("Tens direito a apenas 3 dicas.");
			break;
	}
}

//Fechar o div da dica
function CloseDivDica(){
	document.getElementById("blockDica").style.visibility = "hidden";
}

//Aqui ilumina o nome de quem for a vez
function IluminarNome(TimePlayer){
	
	switch(TimePlayer){
		case 1:
			document.getElementById("NomeJogadorVermelho").style.color = "white";
			document.getElementById("NomeJogadorAzul").style.color = "white";
			document.getElementById("NomeJogadorAmarelo").style.color = "white";
			document.getElementById("NomeJogadorVerde").style.color = "orange";
			break;
		case 2:
			document.getElementById("NomeJogadorVerde").style.color = "white";
			document.getElementById("NomeJogadorAzul").style.color = "white";
			document.getElementById("NomeJogadorAmarelo").style.color = "white";
			document.getElementById("NomeJogadorVermelho").style.color = "orange";
			break;
		case 3:
			document.getElementById("NomeJogadorVermelho").style.color = "white";
			document.getElementById("NomeJogadorVerde").style.color = "white";
			document.getElementById("NomeJogadorAmarelo").style.color = "white";
			document.getElementById("NomeJogadorAzul").style.color = "orange";
			break;
		case 4:
			document.getElementById("NomeJogadorVermelho").style.color = "white";
			document.getElementById("NomeJogadorAzul").style.color = "white";
			document.getElementById("NomeJogadorVerde").style.color = "white";
			document.getElementById("NomeJogadorAmarelo").style.color = "orange";
			break;
		default:
			alert("Erro ao iluminar o nome de quem for a vez!");
			break;
	}
}

//Aqui contabiliza a pontuação
function Score(TimePlayer, Dado){
	switch(TimePlayer){
		case 1:
			One.Score += (20 * Dado);
			document.getElementById("PontosJogadorVerde").innerHTML = One.Score.toFixed(0);
			break;
		case 2:
			Two.Score += (20 * Dado);
			document.getElementById("PontosJogadorVermelho").innerHTML = Two.Score.toFixed(0);
			break;
		case 3:
			Three.Score += (20 * Dado);
			document.getElementById("PontosJogadorAzul").innerHTML = Three.Score.toFixed(0);
			break;
		case 4:
			Four.Score += (20 * Dado);
			document.getElementById("PontosJogadorAmarelo").innerHTML = Four.Score.toFixed(0);
			break;
		default:
			alert("Erro para alterar a pontuação do jogador!");
			break;
	}
}

//Aqui desenha os pinos no tabuleiro
function DrawPieces(MapSpace){
	
//Aqui em baixo será gabiarra, então não mexe!
	
	switch(quantidadeJogadores){
//--------------------------------------------------------------------------------
		case 2:
			if ( (One.MapSpace == 0) || (Two.MapSpace == 0) ){
				if(One.MapSpace != 0) {
					Canvas = document.getElementById("TPC");
					ctx = Canvas.getContext("2d");
					
					// peão Verde
					ImgV1 = new Image();
					ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";		
					// peão Vermelho
					ImgVrm1 = new Image();
					ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
					
					ImgV1.onload = function() {
						ctx.drawImage(ImgV1,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
					}
					ImgVrm1.onload = function() {
						ctx.drawImage(ImgVrm1,posRed[Two.MapSpace][0],posRed[Two.MapSpace][1]);
					}
				}
				if( (One.MapSpace != 0) && (Two.MapSpace != 0) ){
					Canvas = document.getElementById("TPC");
					ctx = Canvas.getContext("2d");
					
					// peão Verde
					ImgV1 = new Image();
					ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";		
					// peão Vermelho
					ImgVrm1 = new Image();
					ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
					
					ImgV1.onload = function() {
						ctx.drawImage(ImgV1,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
					}
					ImgVrm1.onload = function() {
						ctx.drawImage(ImgVrm1,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
					}
				}
				if(Two.MapSpace != 0) {
					Canvas = document.getElementById("TPC");
					ctx = Canvas.getContext("2d");
					
					// peão Verde
					ImgV1 = new Image();
					ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";		
					// peão Vermelho
					ImgVrm1 = new Image();
					ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
					
					ImgV1.onload = function() {
						ctx.drawImage(ImgV1,posGreen[One.MapSpace][0],posGreen[One.MapSpace][1]);
					}
					ImgVrm1.onload = function() {
						ctx.drawImage(ImgVrm1,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
					}
				}
			} else {
				Canvas = document.getElementById("TPC");
				ctx = Canvas.getContext("2d");
				
				if(One.MapSpace==Two.MapSpace || Two.MapSpace==One.MapSpace){
					ImgUnisex = new Image();
					ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
					ImgUnisexTwo = new Image();
					ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
					ImgUnisex.onload = function() {
						ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
					}
					ImgUnisexTwo.onload = function() {
						ctx.drawImage(ImgUnisexTwo,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
					}
				}else{
					// peão Verde
					ImgV1 = new Image();
					ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";		
					// peão Vermelho
					ImgVrm1 = new Image();
					ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
					
					ImgV1.onload = function() {
						ctx.drawImage(ImgV1,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
					}
					ImgVrm1.onload = function() {
						ctx.drawImage(ImgVrm1,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
					}
				}
			}
			break;
//--------------------------------------------------------------------------------
		case 3:
			if ( ((One.MapSpace == 0) || (Two.MapSpace == 0) || (Three.MapSpace == 0)) ){
					
					if(One.MapSpace != 0) {
						Canvas = document.getElementById("TPC");
						ctx = Canvas.getContext("2d");
						
						// peão Verde
						ImgV1 = new Image();
						ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";		
						// peão Vermelho
						ImgVrm1 = new Image();
						ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
						// peão Azul
						ImgAz1 = new Image();
						ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
						
						ImgV1.onload = function() {
							ctx.drawImage(ImgV1,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
						ImgVrm1.onload = function() {
							ctx.drawImage(ImgVrm1,posRed[Two.MapSpace][0],posRed[Two.MapSpace][1]);
						}
						ImgAz1.onload = function() {
							ctx.drawImage(ImgAz1,posBlue[Three.MapSpace][0],posBlue[Three.MapSpace][1]);
						}
					}
					if( (One.MapSpace != 0) && (Two.MapSpace != 0) ){
						Canvas = document.getElementById("TPC");
						ctx = Canvas.getContext("2d");
						//Verifica se o jogador 1 e 2 estão na mesma posição
						if((One.MapSpace==Two.MapSpace) || (Two.MapSpace==One.MapSpace)){
							ImgUnisex = new Image();
							ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisexTwo = new Image();
							ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							// peão Azul
							ImgAz1 = new Image();
							ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
							ImgUnisex.onload = function() {
								ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
							}
							ImgUnisexTwo.onload = function() {
								ctx.drawImage(ImgUnisexTwo,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
							}
							ImgAz1.onload = function() {
								ctx.drawImage(ImgAz1,posBlue[Three.MapSpace][0],posBlue[Three.MapSpace][1]);
							}
						}else {
							// peão Verde
							ImgV1 = new Image();
							ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";	
							// peão Vermelho
							ImgVrm1 = new Image();
							ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
							// peão Azul
							ImgAz1 = new Image();
							ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
							
							ImgV1.onload = function() {
								ctx.drawImage(ImgV1,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
							}
							ImgVrm1.onload = function() {
								ctx.drawImage(ImgVrm1,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
							}
							ImgAz1.onload = function() {
								ctx.drawImage(ImgAz1,posBlue[Three.MapSpace][0],posBlue[Three.MapSpace][1]);
							}
						}
					}
					if(Two.MapSpace != 0) {
						Canvas = document.getElementById("TPC");
						ctx = Canvas.getContext("2d");
						
						// peão Verde
						ImgV1 = new Image();
						ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";		
						// peão Vermelho
						ImgVrm1 = new Image();
						ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
						// peão Azul
						ImgAz1 = new Image();
						ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
						
						ImgV1.onload = function() {
							ctx.drawImage(ImgV1,posGreen[One.MapSpace][0],posGreen[One.MapSpace][1]);
						}
						ImgVrm1.onload = function() {
							ctx.drawImage(ImgVrm1,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
						ImgAz1.onload = function() {
							ctx.drawImage(ImgAz1,posBlue[Three.MapSpace][0],posBlue[Three.MapSpace][1]);
						}
					}
					if( (Two.MapSpace != 0) && (Three.MapSpace != 0) ){
							Canvas = document.getElementById("TPC");
							ctx = Canvas.getContext("2d");
						if((Two.MapSpace==Three.MapSpace) || (Three.MapSpace==Two.MapSpace)){
							// peão Verde
							ImgV1 = new Image();
							ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";		
							ImgUnisex = new Image();
							ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisexTwo = new Image();
							ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisex.onload = function() {
								ctx.drawImage(ImgUnisex,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
							}
							ImgUnisexTwo.onload = function() {
								ctx.drawImage(ImgUnisexTwo,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
							}
							ImgV1.onload = function() {
								ctx.drawImage(ImgV1,posGreen[One.MapSpace][0],posGreen[One.MapSpace][1]);
							}
						} else {
							// peão Verde
							ImgV1 = new Image();
							ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";		
							// peão Vermelho
							ImgVrm1 = new Image();
							ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
							// peão Azul
							ImgAz1 = new Image();
							ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
							
							ImgV1.onload = function() {
								ctx.drawImage(ImgV1,posGreen[One.MapSpace][0],posGreen[One.MapSpace][1]);
							}
							ImgVrm1.onload = function() {
								ctx.drawImage(ImgVrm1,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
							}
							ImgAz1.onload = function() {
								ctx.drawImage(ImgAz1,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
							}
						}
					}
					if(Three.MapSpace != 0) {
						Canvas = document.getElementById("TPC");
						ctx = Canvas.getContext("2d");
						
						// peão Verde
						ImgV1 = new Image();
						ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";		
						// peão Vermelho
						ImgVrm1 = new Image();
						ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
						// peão Azul
						ImgAz1 = new Image();
						ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
						
						ImgV1.onload = function() {
							ctx.drawImage(ImgV1,posGreen[One.MapSpace][0],posGreen[One.MapSpace][1]);
						}
						ImgVrm1.onload = function() {
							ctx.drawImage(ImgVrm1,posRed[Two.MapSpace][0],posRed[Two.MapSpace][1]);
						}
						ImgAz1.onload = function() {
							ctx.drawImage(ImgAz1,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
					}
					if((Three.MapSpace != 0) && (One.MapSpace != 0)){
						Canvas = document.getElementById("TPC");
						ctx = Canvas.getContext("2d");
						if((One.MapSpace==Three.MapSpace) || (Three.MapSpace==One.MapSpace)){
							ImgUnisex = new Image();
							ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisexTwo = new Image();
							ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							// peão Vermelho
							ImgVrm1 = new Image();
							ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
							ImgUnisex.onload = function() {
								ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
							}
							ImgUnisexTwo.onload = function() {
								ctx.drawImage(ImgUnisexTwo,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
							}
							ImgVrm1.onload = function() {
								ctx.drawImage(ImgVrm1,posRed[Two.MapSpace][0],posRed[Two.MapSpace][1]);
							}
						} else {
							// peão Verde
							ImgV1 = new Image();
							ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";		
							// peão Vermelho
							ImgVrm1 = new Image();
							ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
							// peão Azul
							ImgAz1 = new Image();
							ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
							
							ImgV1.onload = function() {
								ctx.drawImage(ImgV1,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
							}
							ImgVrm1.onload = function() {
								ctx.drawImage(ImgVrm1,posRed[Two.MapSpace][0],posRed[Two.MapSpace][1]);
							}
							ImgAz1.onload = function() {
								ctx.drawImage(ImgAz1,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
							}
						}
					}
			} else {
				Canvas = document.getElementById("TPC");
				ctx = Canvas.getContext("2d");
				if((One.MapSpace==Two.MapSpace) || (One.MapSpace==Three.MapSpace) || (Two.MapSpace==Three.MapSpace)){
					//Verifica se o jogador 1 e 2 estão na mesma posição
					if((One.MapSpace==Two.MapSpace) || (Two.MapSpace==One.MapSpace)){
						ImgUnisex = new Image();
						ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexTwo = new Image();
						ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						// peão Azul
						ImgAz1 = new Image();
						ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
						ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
						ImgUnisexTwo.onload = function() {
							ctx.drawImage(ImgUnisexTwo,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
						ImgAz1.onload = function() {
							ctx.drawImage(ImgAz1,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
					}//Verifica se o jogador 1 e 3 estão na mesma posição
					if((One.MapSpace==Three.MapSpace) || (Three.MapSpace==One.MapSpace)){
						ImgUnisex = new Image();
						ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexTwo = new Image();
						ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
						ImgUnisexTwo.onload = function() {
							ctx.drawImage(ImgUnisexTwo,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
						// peão Vermelho
						ImgVrm1 = new Image();
						ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
						ImgVrm1.onload = function() {
							ctx.drawImage(ImgVrm1,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
					}//Verifica se o jogador 2 e 3 estão na mesma posição
					if((Two.MapSpace==Three.MapSpace) || (Three.MapSpace==Two.MapSpace)){
						ImgUnisex = new Image();
						ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexTwo = new Image();
						ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
						ImgUnisexTwo.onload = function() {
							ctx.drawImage(ImgUnisexTwo,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
						// peão Verde
						ImgV1 = new Image();
						ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";
						ImgV1.onload = function() {
							ctx.drawImage(ImgV1,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
					}
					if((One.MapSpace==Three.MapSpace) && (One.MapSpace==Two.MapSpace) && (Two.MapSpace==Three.MapSpace)){
						ImgUnisex = new Image();
						ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexTwo = new Image();
						ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexThree = new Image();
						ImgUnisexThree.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
						ImgUnisexTwo.onload = function() {
							ctx.drawImage(ImgUnisexTwo,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
						ImgUnisexThree.onload = function() {
							ctx.drawImage(ImgUnisexThree,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
					}
				}else{
					// peão Verde
					ImgV1 = new Image();
					ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";
					ImgV1.onload = function() {
						ctx.drawImage(ImgV1,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
					}
					// peão Vermelho
					ImgVrm1 = new Image();
					ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png"
					ImgVrm1.onload = function() {
						ctx.drawImage(ImgVrm1,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
					}
					// peão Azul
					ImgAz1 = new Image();
					ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
					ImgAz1.onload = function() {
						ctx.drawImage(ImgAz1,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
					}
				}		
			}
			break;
//--------------------------------------------------------------------------------
		case 4:
			if ( ((One.MapSpace == 0) || (Two.MapSpace == 0) || (Three.MapSpace == 0) || (Four.MapSpace == 0)) ){
				
				if(One.MapSpace != 0) {
					Canvas = document.getElementById("TPC");
					ctx = Canvas.getContext("2d");
					
					// peão Verde
					ImgV1 = new Image();
					ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";	
					// peão Vermelho
					ImgVrm1 = new Image();
					ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
					// peão Amarelo
					ImgA1 = new Image();
					ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
					// peão Azul
					ImgAz1 = new Image();
					ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
					
					ImgV1.onload = function() {
						ctx.drawImage(ImgV1,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
					}
					ImgVrm1.onload = function() {
						ctx.drawImage(ImgVrm1,posRed[Two.MapSpace][0],posRed[Two.MapSpace][1]);
					}
					ImgAz1.onload = function() {
						ctx.drawImage(ImgAz1,posBlue[Three.MapSpace][0],posBlue[Three.MapSpace][1]);
					}
					ImgA1.onload = function() {
						ctx.drawImage(ImgA1,posYellow[Four.MapSpace][0],posYellow[Four.MapSpace][1]);
					}
				}
				if( (One.MapSpace != 0) && (Two.MapSpace != 0) ){
						Canvas = document.getElementById("TPC");
						ctx = Canvas.getContext("2d");

					if(One.MapSpace==Two.MapSpace || Two.MapSpace==One.MapSpace){
						ImgUnisex = new Image();
						ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexTwo = new Image();
						ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						// peão Amarelo
						ImgA1 = new Image();
						ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
						// peão Azul
						ImgAz1 = new Image();
						ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
						ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
						ImgUnisexTwo.onload = function() {
							ctx.drawImage(ImgUnisexTwo,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
						ImgAz1.onload = function() {
							ctx.drawImage(ImgAz1,posBlue[Three.MapSpace][0],posBlue[Three.MapSpace][1]);
						}
						ImgA1.onload = function() {
							ctx.drawImage(ImgA1,posYellow[Four.MapSpace][0],posYellow[Four.MapSpace][1]);
						}
					} else {						
						// peão Verde
						ImgV1 = new Image();
						ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";	
						// peão Vermelho
						ImgVrm1 = new Image();
						ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
						// peão Amarelo
						ImgA1 = new Image();
						ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
						// peão Azul
						ImgAz1 = new Image();
						ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
						
						ImgV1.onload = function() {
							ctx.drawImage(ImgV1,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
						ImgVrm1.onload = function() {
							ctx.drawImage(ImgVrm1,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
						ImgAz1.onload = function() {
							ctx.drawImage(ImgAz1,posBlue[Three.MapSpace][0],posBlue[Three.MapSpace][1]);
						}
						ImgA1.onload = function() {
							ctx.drawImage(ImgA1,posYellow[Four.MapSpace][0],posYellow[Four.MapSpace][1]);
						}
					}
				}
				if((One.MapSpace != 0) && (Three.MapSpace != 0) ){
					Canvas = document.getElementById("TPC");
					ctx = Canvas.getContext("2d");
					if(One.MapSpace==Three.MapSpace || Three.MapSpace==One.MapSpace){
							ImgUnisex = new Image();
							ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisexTwo = new Image();
							ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							// peão Vermelho
							ImgVrm1 = new Image();
							ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
							// peão Amarelo
							ImgA1 = new Image();
							ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
							ImgUnisex.onload = function() {
								ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
							}
							ImgUnisexTwo.onload = function() {
								ctx.drawImage(ImgUnisexTwo,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
							}
							ImgVrm1.onload = function() {
								ctx.drawImage(ImgVrm1,posRed[Two.MapSpace][0],posRed[Two.MapSpace][1]);
							}
							ImgA1.onload = function() {
								ctx.drawImage(ImgA1,posYellow[Four.MapSpace][0],posYellow[Four.MapSpace][1]);
							}
						} else{

							// peão Verde
							ImgV1 = new Image();
							ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";	
							// peão Vermelho
							ImgVrm1 = new Image();
							ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
							// peão Amarelo
							ImgA1 = new Image();
							ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
							// peão Azul
							ImgAz1 = new Image();
							ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
							
							ImgV1.onload = function() {
								ctx.drawImage(ImgV1,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
							}
							ImgVrm1.onload = function() {
								ctx.drawImage(ImgVrm1,posRed[Two.MapSpace][0],posRed[Two.MapSpace][1]);
							}
							ImgAz1.onload = function() {
								ctx.drawImage(ImgAz1,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
							}
							ImgA1.onload = function() {
								ctx.drawImage(ImgA1,posYellow[Four.MapSpace][0],posYellow[Four.MapSpace][1]);
							}
						}
				}
				if( (One.MapSpace != 0) && (Two.MapSpace != 0) && (Three.MapSpace != 0) ){
					Canvas = document.getElementById("TPC");
					ctx = Canvas.getContext("2d");
					if((One.MapSpace==Three.MapSpace) || (One.MapSpace==Two.MapSpace) || (Two.MapSpace==Three.MapSpace)){
						
						if((One.MapSpace==Two.MapSpace) || (Two.MapSpace==One.MapSpace)){
							ImgUnisex = new Image();
							ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisexTwo = new Image();
							ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							// peão Amarelo
							ImgA1 = new Image();
							ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
							// peão Azul
							ImgAz1 = new Image();
							ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
							ImgUnisex.onload = function() {
								ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
							}
							ImgUnisexTwo.onload = function() {
								ctx.drawImage(ImgUnisexTwo,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
							}
							ImgA1.onload = function() {
							ctx.drawImage(ImgA1,posYellow[Four.MapSpace][0],posYellow[Four.MapSpace][1]);
							}
							ImgAz1.onload = function() {
							ctx.drawImage(ImgAz1,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
							}
							
						}
						if((One.MapSpace==Three.MapSpace) || (Three.MapSpace==One.MapSpace)){
							ImgUnisex = new Image();
							ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisexTwo = new Image();
							ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							// peão Amarelo
							ImgA1 = new Image();
							ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
							// peão Vermelho
							ImgVrm1 = new Image();
							ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
							ImgUnisex.onload = function() {
								ctx.drawImage(ImgUnisex,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
							}
							ImgUnisexTwo.onload = function() {
								ctx.drawImage(ImgUnisexTwo,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
							}
							ImgA1.onload = function() {
							ctx.drawImage(ImgA1,posYellow[Four.MapSpace][0],posYellow[Four.MapSpace][1]);
							}
							ImgVrm1.onload = function() {
							ctx.drawImage(ImgVrm1,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
							}
							
						}
						if((Two.MapSpace==Three.MapSpace) || (Three.MapSpace==Two.MapSpace)){
							ImgUnisex = new Image();
							ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisexTwo = new Image();
							ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							// peão Amarelo
							ImgA1 = new Image();
							ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
							// peão Verde
							ImgV1 = new Image();
							ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";	
							ImgUnisex.onload = function() {
								ctx.drawImage(ImgUnisex,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
							}
							ImgUnisexTwo.onload = function() {
								ctx.drawImage(ImgUnisexTwo,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
							}
							ImgA1.onload = function() {
							ctx.drawImage(ImgA1,posYellow[Four.MapSpace][0],posYellow[Four.MapSpace][1]);
							}
							ImgV1.onload = function() {
							ctx.drawImage(ImgV1,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
							}
							
						}
						if((One.MapSpace==Three.MapSpace) && (One.MapSpace==Two.MapSpace) && (Two.MapSpace==Three.MapSpace)){
							ImgUnisex = new Image();
							ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisexTwo = new Image();
							ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisexThree = new Image();
							ImgUnisexThree.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							// peão Amarelo
							ImgA1 = new Image();
							ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
							ImgUnisex.onload = function() {
								ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
							}
							ImgUnisexTwo.onload = function() {
								ctx.drawImage(ImgUnisexTwo,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
							}
							ImgUnisexThree.onload = function() {
								ctx.drawImage(ImgUnisexThree,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
							}
							ImgA1.onload = function() {
							ctx.drawImage(ImgA1,posYellow[Four.MapSpace][0],posYellow[Four.MapSpace][1]);
							}
							
						}
						
						
					} else {
						// peão Verde
						ImgV1 = new Image();
						ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";		
						// peão Vermelho
						ImgVrm1 = new Image();
						ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
						// peão Amarelo
						ImgA1 = new Image();
						ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
						// peão Azul
						ImgAz1 = new Image();
						ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
						
						ImgV1.onload = function() {
							ctx.drawImage(ImgV1,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
						ImgVrm1.onload = function() {
							ctx.drawImage(ImgVrm1,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
						ImgAz1.onload = function() {
							ctx.drawImage(ImgAz1,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
						ImgA1.onload = function() {
							ctx.drawImage(ImgA1,posYellow[Four.MapSpace][0],posYellow[Four.MapSpace][1]);
						}
					}
				}
				if(Two.MapSpace != 0) {
					Canvas = document.getElementById("TPC");
					ctx = Canvas.getContext("2d");
					
					// peão Verde
					ImgV1 = new Image();
					ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";	
					// peão Vermelho
					ImgVrm1 = new Image();
					ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
					// peão Amarelo
					ImgA1 = new Image();
					ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
					// peão Azul
					ImgAz1 = new Image();
					ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
					
					ImgV1.onload = function() {
						ctx.drawImage(ImgV1,posGreen[One.MapSpace][0],posGreen[One.MapSpace][1]);
					}
					ImgVrm1.onload = function() {
						ctx.drawImage(ImgVrm1,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
					}
					ImgAz1.onload = function() {
						ctx.drawImage(ImgAz1,posBlue[Three.MapSpace][0],posBlue[Three.MapSpace][1]);
					}
					ImgA1.onload = function() {
						ctx.drawImage(ImgA1,posYellow[Four.MapSpace][0],posYellow[Four.MapSpace][1]);
					}
				}
				if( (Two.MapSpace != 0) && (Three.MapSpace != 0) ){
					Canvas = document.getElementById("TPC");
					ctx = Canvas.getContext("2d");
					if(Two.MapSpace==Three.MapSpace || Three.MapSpace==Two.MapSpace){
						ImgUnisex = new Image();
						ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexTwo = new Image();
						ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						// peão Verde
						ImgV1 = new Image();
						ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";
						// peão Amarelo
						ImgA1 = new Image();
						ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
						ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
						ImgUnisexTwo.onload = function() {
							ctx.drawImage(ImgUnisexTwo,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
						ImgV1.onload = function() {
							ctx.drawImage(ImgV1,posGreen[One.MapSpace][0],posGreen[One.MapSpace][1]);
						}
						ImgA1.onload = function() {
							ctx.drawImage(ImgA1,posYellow[Four.MapSpace][0],posYellow[Four.MapSpace][1]);
						}
					} else {
						// peão Verde
						ImgV1 = new Image();
						ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";		
						// peão Vermelho
						ImgVrm1 = new Image();
						ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
						// peão Amarelo
						ImgA1 = new Image();
						ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
						// peão Azul
						ImgAz1 = new Image();
						ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
						
						ImgV1.onload = function() {
							ctx.drawImage(ImgV1,posGreen[One.MapSpace][0],posGreen[One.MapSpace][1]);
						}
						ImgVrm1.onload = function() {
							ctx.drawImage(ImgVrm1,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
						ImgAz1.onload = function() {
							ctx.drawImage(ImgAz1,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
						ImgA1.onload = function() {
							ctx.drawImage(ImgA1,posYellow[Four.MapSpace][0],posYellow[Four.MapSpace][1]);
						}
					}
				}
				if( (Four.MapSpace != 0) && (Two.MapSpace != 0) && (Three.MapSpace != 0)){
					Canvas = document.getElementById("TPC");
					ctx = Canvas.getContext("2d");
					if((Four.MapSpace==Three.MapSpace) || (Four.MapSpace==Two.MapSpace) || (Two.MapSpace==Three.MapSpace)){
						
						if((Four.MapSpace==Three.MapSpace) || (Three.MapSpace==Four.MapSpace)){
							ImgUnisex = new Image();
							ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisexTwo = new Image();
							ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							// peão Vermelho
							ImgVrm1 = new Image();
							ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
							// peão Verde
							ImgV1 = new Image();
							ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";
							ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
							}
							ImgUnisexTwo.onload = function() {
							ctx.drawImage(ImgUnisexTwo,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
							}
							ImgV1.onload = function() {
								ctx.drawImage(ImgV1,posGreen[One.MapSpace][0],posGreen[One.MapSpace][1]);
							}
							ImgVrm1.onload = function() {
								ctx.drawImage(ImgVrm1,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
							}
						}
						if((Four.MapSpace==Two.MapSpace) || (Two.MapSpace==Four.MapSpace)){
							ImgUnisex = new Image();
							ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisexTwo = new Image();
							ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							// peão Azul
							ImgAz1 = new Image();
							ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
							// peão Verde
							ImgV1 = new Image();
							ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";
							ImgUnisex.onload = function() {
								ctx.drawImage(ImgUnisex,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
							}
							ImgUnisexTwo.onload = function() {
								ctx.drawImage(ImgUnisexTwo,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
							}
							ImgV1.onload = function() {
								ctx.drawImage(ImgV1,posGreen[One.MapSpace][0],posGreen[One.MapSpace][1]);
							}
							ImgAz1.onload = function() {
								ctx.drawImage(ImgAz1,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
							}
						}
						if((Three.MapSpace==Two.MapSpace) || (Two.MapSpace==Three.MapSpace)){
							ImgUnisex = new Image();
							ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisexTwo = new Image();
							ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							// peão Verde
							ImgV1 = new Image();
							ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";		
							// peão Amarelo
							ImgA1 = new Image();
							ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
							ImgUnisex.onload = function() {
								ctx.drawImage(ImgUnisex,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
							}
							ImgUnisexTwo.onload = function() {
								ctx.drawImage(ImgUnisexTwo,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
							}
							ImgV1.onload = function() {
								ctx.drawImage(ImgV1,posGreen[One.MapSpace][0],posGreen[One.MapSpace][1]);
							}
							ImgA1.onload = function() {
								ctx.drawImage(ImgA1,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
							}
						}
						if((Four.MapSpace==Three.MapSpace) && (Four.MapSpace==Two.MapSpace) && (Two.MapSpace==Three.MapSpace)){
							ImgUnisex = new Image();
							ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisexTwo = new Image();
							ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisexThree = new Image();
							ImgUnisexThree.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							// peão Verde
							ImgV1 = new Image();
							ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";	
							ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
							}
							ImgUnisexTwo.onload = function() {
							ctx.drawImage(ImgUnisexTwo,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
							}
							ImgUnisexThree.onload = function() {
							ctx.drawImage(ImgUnisexThree,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
							}
							ImgV1.onload = function() {
								ctx.drawImage(ImgV1,posGreen[One.MapSpace][0],posGreen[One.MapSpace][1]);
							}
						}
					} else {
						// peão Verde
						ImgV1 = new Image();
						ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";		
						// peão Vermelho
						ImgVrm1 = new Image();
						ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
						// peão Amarelo
						ImgA1 = new Image();
						ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
						// peão Azul
						ImgAz1 = new Image();
						ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
						
						ImgV1.onload = function() {
							ctx.drawImage(ImgV1,posGreen[One.MapSpace][0],posGreen[One.MapSpace][1]);
						}
						ImgVrm1.onload = function() {
							ctx.drawImage(ImgVrm1,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
						ImgAz1.onload = function() {
							ctx.drawImage(ImgAz1,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
						ImgA1.onload = function() {
							ctx.drawImage(ImgA1,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
						}
					}
				}
				if(Three.MapSpace != 0) {
					Canvas = document.getElementById("TPC");
					ctx = Canvas.getContext("2d");
					
					// peão Verde
					ImgV1 = new Image();
					ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";	
					// peão Vermelho
					ImgVrm1 = new Image();
					ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
					// peão Amarelo
					ImgA1 = new Image();
					ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
					// peão Azul
					ImgAz1 = new Image();
					ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
					
					ImgV1.onload = function() {
						ctx.drawImage(ImgV1,posGreen[One.MapSpace][0],posGreen[One.MapSpace][1]);
					}
					ImgVrm1.onload = function() {
						ctx.drawImage(ImgVrm1,posRed[Two.MapSpace][0],posRed[Two.MapSpace][1]);
					}
					ImgAz1.onload = function() {
						ctx.drawImage(ImgAz1,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
					}
					ImgA1.onload = function() {
						ctx.drawImage(ImgA1,posYellow[Four.MapSpace][0],posYellow[Four.MapSpace][1]);
					}
				}
				if( (Three.MapSpace != 0) && (Four.MapSpace != 0) ){
					Canvas = document.getElementById("TPC");
					ctx = Canvas.getContext("2d");
					if(Three.MapSpace==Four.MapSpace || Four.MapSpace==Three.MapSpace){
						ImgUnisex = new Image();
						ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexTwo = new Image();
						ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						// peão Verde
						ImgV1 = new Image();
						ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";	
						// peão Vermelho
						ImgVrm1 = new Image();
						ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
						ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
						ImgUnisexTwo.onload = function() {
							ctx.drawImage(ImgUnisexTwo,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
						}
						ImgV1.onload = function() {
							ctx.drawImage(ImgV1,posGreen[One.MapSpace][0],posGreen[One.MapSpace][1]);
						}
						ImgVrm1.onload = function() {
							ctx.drawImage(ImgVrm1,posRed[Two.MapSpace][0],posRed[Two.MapSpace][1]);
						}
					} else {
						// peão Verde
						ImgV1 = new Image();
						ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";		
						// peão Vermelho
						ImgVrm1 = new Image();
						ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
						// peão Amarelo
						ImgA1 = new Image();
						ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
						// peão Azul
						ImgAz1 = new Image();
						ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
						
						ImgV1.onload = function() {
							ctx.drawImage(ImgV1,posGreen[One.MapSpace][0],posGreen[One.MapSpace][1]);
						}
						ImgVrm1.onload = function() {
							ctx.drawImage(ImgVrm1,posRed[Two.MapSpace][0],posRed[Two.MapSpace][1]);
						}
						ImgAz1.onload = function() {
							ctx.drawImage(ImgAz1,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
						ImgA1.onload = function() {
							ctx.drawImage(ImgA1,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
						}
					}
				}
				if ( (Three.MapSpace != 0) && (Four.MapSpace != 0) && (One.MapSpace != 0) ){
					Canvas = document.getElementById("TPC");
					ctx = Canvas.getContext("2d");
					if((Four.MapSpace==Three.MapSpace) || (Four.MapSpace==One.MapSpace) || (One.MapSpace==Three.MapSpace)){
						if((Four.MapSpace==Three.MapSpace) || (Three.MapSpace==Four.MapSpace)){
							ImgUnisex = new Image();
							ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisexTwo = new Image();
							ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							// peão Vermelho
							ImgVrm1 = new Image();
							ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
							// peão Verde
							ImgV1 = new Image();
							ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";
							ImgUnisex.onload = function() {
								ctx.drawImage(ImgUnisex,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
							}
							ImgUnisexTwo.onload = function() {
								ctx.drawImage(ImgUnisexTwo,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
							}
							ImgVrm1.onload = function() {
								ctx.drawImage(ImgVrm1,posRed[Two.MapSpace][0],posRed[Two.MapSpace][1]);
							}
							ImgV1.onload = function() {
								ctx.drawImage(ImgV1,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
							}
						}
						if((Four.MapSpace==One.MapSpace) || (One.MapSpace==Four.MapSpace)){
							ImgUnisex = new Image();
							ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisexTwo = new Image();
							ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							// peão Vermelho
							ImgVrm1 = new Image();
							ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
							// peão Azul
							ImgAz1 = new Image();
							ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
							ImgUnisex.onload = function() {
								ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
							}
							ImgUnisexTwo.onload = function() {
								ctx.drawImage(ImgUnisexTwo,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
							}
							ImgVrm1.onload = function() {
								ctx.drawImage(ImgVrm1,posRed[Two.MapSpace][0],posRed[Two.MapSpace][1]);
							}
							ImgAz1.onload = function() {
								ctx.drawImage(ImgAz1,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
							}
						}
						if((One.MapSpace==Three.MapSpace) || (Three.MapSpace==One.MapSpace)){
							ImgUnisex = new Image();
							ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisexTwo = new Image();
							ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							// peão Vermelho
							ImgVrm1 = new Image();
							ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
							// peão Amarelo
							ImgA1 = new Image();
							ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
							ImgUnisex.onload = function() {
								ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
							}
							ImgUnisexTwo.onload = function() {
								ctx.drawImage(ImgUnisexTwo,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
							}
							ImgVrm1.onload = function() {
								ctx.drawImage(ImgVrm1,posRed[Two.MapSpace][0],posRed[Two.MapSpace][1]);
							}
							ImgA1.onload = function() {
								ctx.drawImage(ImgA1,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
							}
						}
						if((Four.MapSpace==Three.MapSpace) && (Four.MapSpace==One.MapSpace) && (One.MapSpace==Three.MapSpace)){
							ImgUnisex = new Image();
							ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisexTwo = new Image();
							ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisexThree = new Image();
							ImgUnisexThree.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							// peão Vermelho
							ImgVrm1 = new Image();
							ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
							ImgUnisex.onload = function() {
								ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
							}
							ImgUnisexTwo.onload = function() {
								ctx.drawImage(ImgUnisexTwo,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
							}
							ImgUnisexThree.onload = function() {
								ctx.drawImage(ImgUnisexThree,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
							}
							ImgVrm1.onload = function() {
								ctx.drawImage(ImgVrm1,posRed[Two.MapSpace][0],posRed[Two.MapSpace][1]);
							}
						}
					} else {
						// peão Verde
						ImgV1 = new Image();
						ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";		
						// peão Vermelho
						ImgVrm1 = new Image();
						ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
						// peão Amarelo
						ImgA1 = new Image();
						ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
						// peão Azul
						ImgAz1 = new Image();
						ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
						
						ImgV1.onload = function() {
							ctx.drawImage(ImgV1,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
						ImgVrm1.onload = function() {
							ctx.drawImage(ImgVrm1,posRed[Two.MapSpace][0],posRed[Two.MapSpace][1]);
						}
						ImgAz1.onload = function() {
							ctx.drawImage(ImgAz1,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
						ImgA1.onload = function() {
							ctx.drawImage(ImgA1,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
						}
					}
				}
				if(Four.MapSpace != 0){
					Canvas = document.getElementById("TPC");
					ctx = Canvas.getContext("2d");
					
					// peão Verde
					ImgV1 = new Image();
					ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";	
					// peão Vermelho
					ImgVrm1 = new Image();
					ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
					// peão Amarelo
					ImgA1 = new Image();
					ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
					// peão Azul
					ImgAz1 = new Image();
					ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
					
					ImgV1.onload = function() {
						ctx.drawImage(ImgV1,posGreen[One.MapSpace][0],posGreen[One.MapSpace][1]);
					}
					ImgVrm1.onload = function() {
						ctx.drawImage(ImgVrm1,posRed[Two.MapSpace][0],posRed[Two.MapSpace][1]);
					}
					ImgAz1.onload = function() {
						ctx.drawImage(ImgAz1,posBlue[Three.MapSpace][0],posBlue[Three.MapSpace][1]);
					}
					ImgA1.onload = function() {
						ctx.drawImage(ImgA1,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
					}
				}
				if( (Four.MapSpace != 0) && (One.MapSpace != 0) ){
					Canvas = document.getElementById("TPC");
					ctx = Canvas.getContext("2d");
					if(One.MapSpace==Four.MapSpace || Four.MapSpace==One.MapSpace){
						ImgUnisex = new Image();
						ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexTwo = new Image();
						ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						// peão Vermelho
						ImgVrm1 = new Image();
						ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
						// peão Azul
						ImgAz1 = new Image();
						ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
						ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
						ImgUnisexTwo.onload = function() {
							ctx.drawImage(ImgUnisexTwo,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
						}
						ImgVrm1.onload = function() {
							ctx.drawImage(ImgVrm1,posRed[Two.MapSpace][0],posRed[Two.MapSpace][1]);
						}
						ImgAz1.onload = function() {
							ctx.drawImage(ImgAz1,posBlue[Three.MapSpace][0],posBlue[Three.MapSpace][1]);
						}
					}else{
						// peão Verde
						ImgV1 = new Image();
						ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";		
						// peão Vermelho
						ImgVrm1 = new Image();
						ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
						// peão Amarelo
						ImgA1 = new Image();
						ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
						// peão Azul
						ImgAz1 = new Image();
						ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
						
						ImgV1.onload = function() {
							ctx.drawImage(ImgV1,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
						ImgVrm1.onload = function() {
							ctx.drawImage(ImgVrm1,posRed[Two.MapSpace][0],posRed[Two.MapSpace][1]);
						}
						ImgAz1.onload = function() {
							ctx.drawImage(ImgAz1,posBlue[Three.MapSpace][0],posBlue[Three.MapSpace][1]);
						}
						ImgA1.onload = function() {
							ctx.drawImage(ImgA1,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
						}
					}
				}
				if( (Four.MapSpace != 0) && (One.MapSpace != 0) && (Two.MapSpace != 0) ){
					Canvas = document.getElementById("TPC");
					ctx = Canvas.getContext("2d");
					if((Four.MapSpace==One.MapSpace) || (Four.MapSpace==Two.MapSpace) || (One.MapSpace==Two.MapSpace)){
						if((Four.MapSpace==One.MapSpace) || (One.MapSpace==Four.MapSpace)){
							ImgUnisex = new Image();
							ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisexTwo = new Image();
							ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							// peão Azul
							ImgAz1 = new Image();
							ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
							// peão Vermelho
							ImgVrm1 = new Image();
							ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
							ImgUnisex.onload = function() {
								ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
							}
							ImgUnisexTwo.onload = function() {
								ctx.drawImage(ImgUnisexTwo,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
							}
							ImgAz1.onload = function() {
								ctx.drawImage(ImgAz1,posBlue[Three.MapSpace][0],posBlue[Three.MapSpace][1]);
							}
							ImgVrm1.onload = function() {
								ctx.drawImage(ImgVrm1,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
							}
						}
						if((Four.MapSpace==Two.MapSpace) || (Two.MapSpace==Four.MapSpace)){
							ImgUnisex = new Image();
							ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisexTwo = new Image();
							ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							// peão Azul
							ImgAz1 = new Image();
							ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
							// peão Verde
							ImgV1 = new Image();
							ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";
							ImgUnisex.onload = function() {
								ctx.drawImage(ImgUnisex,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
							}
							ImgUnisexTwo.onload = function() {
								ctx.drawImage(ImgUnisexTwo,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
							}
							ImgAz1.onload = function() {
								ctx.drawImage(ImgAz1,posBlue[Three.MapSpace][0],posBlue[Three.MapSpace][1]);
							}
							ImgV1.onload = function() {
								ctx.drawImage(ImgV1,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
							}
						}
						if((One.MapSpace==Two.MapSpace) || (Two.MapSpace==One.MapSpace)){
							ImgUnisex = new Image();
							ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisexTwo = new Image();
							ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							// peão Azul
							ImgAz1 = new Image();
							ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
							// peão Amarelo
							ImgA1 = new Image();
							ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
							ImgUnisex.onload = function() {
								ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
							}
							ImgUnisexTwo.onload = function() {
								ctx.drawImage(ImgUnisexTwo,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
							}
							ImgAz1.onload = function() {
								ctx.drawImage(ImgAz1,posBlue[Three.MapSpace][0],posBlue[Three.MapSpace][1]);
							}
							ImgA1.onload = function() {
								ctx.drawImage(ImgA1,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
							}
						}
						if((Four.MapSpace==One.MapSpace) && (Four.MapSpace==Two.MapSpace) && (One.MapSpace==Two.MapSpace)){
							ImgUnisex = new Image();
							ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							ImgUnisexTwo = new Image();
							ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
							// peão Azul
							ImgAz1 = new Image();
							ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
							ImgUnisex.onload = function() {
								ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
							}
							ImgUnisexTwo.onload = function() {
								ctx.drawImage(ImgUnisexTwo,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
							}
							ImgAz1.onload = function() {
								ctx.drawImage(ImgAz1,posBlue[Three.MapSpace][0],posBlue[Three.MapSpace][1]);
							}
						}
					} else {
						// peão Verde
						ImgV1 = new Image();
						ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";
						// peão Vermelho
						ImgVrm1 = new Image();
						ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
						// peão Amarelo
						ImgA1 = new Image();
						ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
						// peão Azul
						ImgAz1 = new Image();
						ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
						
						ImgV1.onload = function() {
							ctx.drawImage(ImgV1,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
						ImgVrm1.onload = function() {
							ctx.drawImage(ImgVrm1,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
						ImgAz1.onload = function() {
							ctx.drawImage(ImgAz1,posBlue[Three.MapSpace][0],posBlue[Three.MapSpace][1]);
						}
						ImgA1.onload = function() {
							ctx.drawImage(ImgA1,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
						}
					}
				}
					
			}else {
				Canvas = document.getElementById("TPC");
				ctx = Canvas.getContext("2d");
				//Verifica a sobreposição de posições
				if((One.MapSpace==Two.MapSpace) || (One.MapSpace==Three.MapSpace) || (One.MapSpace == Four.MapSpace) ||
					(Two.MapSpace==Three.MapSpace) || (Two.MapSpace == Four.MapSpace) || (Three.MapSpace==Four.MapSpace)){
					//Verifica se o jogador 1 e 2 estão na mesma posição
					if((One.MapSpace==Two.MapSpace) || (Two.MapSpace==One.MapSpace)){
						ImgUnisex = new Image();
						ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
						ImgUnisexTwo = new Image();
						ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexTwo.onload = function() {
							ctx.drawImage(ImgUnisexTwo,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
						// peão Amarelo
						ImgA1 = new Image();
						ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
						ImgA1.onload = function() {
							ctx.drawImage(ImgA1,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
						}
						// peão Azul
						ImgAz1 = new Image();
						ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
						ImgAz1.onload = function() {
							ctx.drawImage(ImgAz1,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
					}
					//Verifica se o jogador 1 e 3 estão na mesma posição
					if((One.MapSpace==Three.MapSpace) || (Three.MapSpace==One.MapSpace)){
						ImgUnisex = new Image();
						ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
						ImgUnisexTwo = new Image();
						ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexTwo.onload = function() {
							ctx.drawImage(ImgUnisexTwo,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
						// peão Vermelho
						ImgVrm1 = new Image();
						ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
						ImgVrm1.onload = function() {
							ctx.drawImage(ImgVrm1,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
						// peão Amarelo
						ImgA1 = new Image();
						ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
						ImgA1.onload = function() {
							ctx.drawImage(ImgA1,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
						}
					}
					//Verifica se o jogador 1 e 4 estão na mesma posição
					if((One.MapSpace==Four.MapSpace) || (Four.MapSpace==One.MapSpace)){
						ImgUnisex = new Image();
						ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
						}
						ImgUnisexTwo = new Image();
						ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisexTwo,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
						// peão Vermelho
						ImgVrm1 = new Image();
						ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
						ImgVrm1.onload = function() {
							ctx.drawImage(ImgVrm1,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
						// peão Azul
						ImgAz1 = new Image();
						ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
						ImgAz1.onload = function() {
							ctx.drawImage(ImgAz1,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
					}
					//Verifica se o jogador 2 e 3 estão na mesma posição
					if((Two.MapSpace==Three.MapSpace) || (Three.MapSpace==Two.MapSpace)){
						ImgUnisex = new Image();
						ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
						ImgUnisexTwo = new Image();
						ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexTwo.onload = function() {
							ctx.drawImage(ImgUnisexTwo,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
						// peão Verde
						ImgV1 = new Image();
						ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png"	;
						ImgV1.onload = function() {
							ctx.drawImage(ImgV1,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
						// peão Amarelo
						ImgA1 = new Image();
						ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
						ImgA1.onload = function() {
							ctx.drawImage(ImgA1,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
						}
					}
					//Verifica se o peão 2 e 4 estão na mesma posição
					if((Two.MapSpace==Four.MapSpace) || (Four.MapSpace==Two.MapSpace)){
						ImgUnisex = new Image();
						ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
						ImgUnisexTwo = new Image();
						ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexTwo.onload = function() {
							ctx.drawImage(ImgUnisexTwo,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
						}
						// peão Verde
						ImgV1 = new Image();
						ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png"	;
						ImgV1.onload = function() {
							ctx.drawImage(ImgV1,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
						// peão Azul
						ImgAz1 = new Image();
						ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
						ImgAz1.onload = function() {
							ctx.drawImage(ImgAz1,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
					}
					//Verifica se os peões 3 e 4 estão na mesma posição
					if((Three.MapSpace==Four.MapSpace) || (Four.MapSpace==Three.MapSpace)){
						ImgUnisex = new Image();
						ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
						ImgUnisexTwo = new Image();
						ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexTwo.onload = function() {
							ctx.drawImage(ImgUnisexTwo,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
						}
						// peão Verde
						ImgV1 = new Image();
						ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png"	;
						ImgV1.onload = function() {
							ctx.drawImage(ImgV1,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}					
						// peão Vermelho
						ImgVrm1 = new Image();
						ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
						ImgVrm1.onload = function() {
							ctx.drawImage(ImgVrm1,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
					}
					//Verifica se os peões 1, 2, 3 estão na mesma posição
					if((One.MapSpace==Three.MapSpace) && (One.MapSpace==Two.MapSpace) && (Two.MapSpace==Three.MapSpace)){
						ImgUnisex = new Image();
						ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
						ImgUnisexTwo = new Image();
						ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexTwo.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
						ImgUnisexThree = new Image();
						ImgUnisexThree.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexThree.onload = function() {
							ctx.drawImage(ImgUnisexThree,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
						// peão Amarelo
						ImgA1 = new Image();
						ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
						ImgA1.onload = function() {
							ctx.drawImage(ImgA1,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
						}
					}
					//Verifica se os peões 2, 3, 4 estão na mesma posição
					if((Four.MapSpace==Three.MapSpace) && (Four.MapSpace==Two.MapSpace) && (Two.MapSpace==Three.MapSpace)){
						ImgUnisex = new Image();
						ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
						ImgUnisexTwo = new Image();
						ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexTwo.onload = function() {
							ctx.drawImage(ImgUnisexTwo,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
						ImgUnisexThree = new Image();
						ImgUnisexThree.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexThree.onload = function() {
							ctx.drawImage(ImgUnisexThree,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
						}
						// peão Verde
						ImgV1 = new Image();
						ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png"	;
						ImgV1.onload = function() {
							ctx.drawImage(ImgV1,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
					}
					//Verifica se os peões 3, 4, 1 estão na mesma posição
					if((Four.MapSpace==Three.MapSpace) && (Four.MapSpace==One.MapSpace) && (One.MapSpace==Three.MapSpace)){
						ImgUnisex = new Image();
						ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
						ImgUnisexTwo = new Image();
						ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexTwo.onload = function() {
							ctx.drawImage(ImgUnisexTwo,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
						ImgUnisexThree = new Image();
						ImgUnisexThree.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexThree.onload = function() {
							ctx.drawImage(ImgUnisexThree,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
						}
						// peão Vermelho
						ImgVrm1 = new Image();
						ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
						ImgVrm1.onload = function() {
							ctx.drawImage(ImgVrm1,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
					}
					//Verifica se os peões 4, 1, 2 estão na mesma posição
					if((Four.MapSpace==One.MapSpace) && (Four.MapSpace==Two.MapSpace) && (One.MapSpace==Two.MapSpace)){
						ImgUnisex = new Image();
						ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
						ImgUnisexTwo = new Image();
						ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexTwo.onload = function() {
							ctx.drawImage(ImgUnisexTwo,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
						ImgUnisexThree = new Image();
						ImgUnisexThree.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexThree.onload = function() {
							ctx.drawImage(ImgUnisexThree,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
						}
						// peão Azul
						ImgAz1 = new Image();
						ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
						ImgAz1.onload = function() {
							ctx.drawImage(ImgAz1,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
					}
					//Verifica se os peões 1, 2, 3 e 4 estão na mesma posição
					if((One.MapSpace==Two.MapSpace) && (One.MapSpace==Three.MapSpace) && (One.MapSpace == Four.MapSpace) ||
					(Two.MapSpace==Three.MapSpace) && (Two.MapSpace == Four.MapSpace) && (Three.MapSpace==Four.MapSpace)){
						ImgUnisex = new Image();
						ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
						ImgUnisexTwo = new Image();
						ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexTwo.onload = function() {
							ctx.drawImage(ImgUnisexTwo,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
						ImgUnisexThree = new Image();
						ImgUnisexThree.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexThree.onload = function() {
							ctx.drawImage(ImgUnisexThree,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
						ImgUnisexFour = new Image();
						ImgUnisexFour.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexFour.onload = function() {
							ctx.drawImage(ImgUnisexFour,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
						}
					}
					
					if((One.MapSpace==Two.MapSpace) && (Three.MapSpace==Four.MapSpace)){
						ImgUnisex = new Image();
						ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexTwo = new Image();
						ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexThree = new Image();
						ImgUnisexThree.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexFour = new Image();
						ImgUnisexFour.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
						ImgUnisexTwo.onload = function() {
							ctx.drawImage(ImgUnisexTwo,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
						ImgUnisexThree.onload = function() {
							ctx.drawImage(ImgUnisexThree,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
						ImgUnisexFour.onload = function() {
							ctx.drawImage(ImgUnisexFour,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
						}
					}
					if((One.MapSpace==Three.MapSpace) && (Two.MapSpace==Four.MapSpace)){
						ImgUnisex = new Image();
						ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexTwo = new Image();
						ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexThree = new Image();
						ImgUnisexThree.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexFour = new Image();
						ImgUnisexFour.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
						ImgUnisexTwo.onload = function() {
							ctx.drawImage(ImgUnisexTwo,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
						ImgUnisexThree.onload = function() {
							ctx.drawImage(ImgUnisexThree,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
						ImgUnisexFour.onload = function() {
							ctx.drawImage(ImgUnisexFour,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
						}
					}
					if((One.MapSpace==Four.MapSpace) && (Two.MapSpace==Three.MapSpace)) {
						ImgUnisex = new Image();
						ImgUnisex.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexTwo = new Image();
						ImgUnisexTwo.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexThree = new Image();
						ImgUnisexThree.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisexFour = new Image();
						ImgUnisexFour.src = "../ImgsOfficial/Game/Pieces/Unisex.png";
						ImgUnisex.onload = function() {
							ctx.drawImage(ImgUnisex,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
						}
						ImgUnisexTwo.onload = function() {
							ctx.drawImage(ImgUnisexTwo,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
						ImgUnisexThree.onload = function() {
							ctx.drawImage(ImgUnisexThree,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
						}
						ImgUnisexFour.onload = function() {
							ctx.drawImage(ImgUnisexFour,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
						}
					}
					
				}else{
					// peão Verde
					ImgV1 = new Image();
					ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png"	;
					ImgV1.onload = function() {
						ctx.drawImage(ImgV1,posicao[One.MapSpace][0],posicao[One.MapSpace][1]);
					}					
					// peão Vermelho
					ImgVrm1 = new Image();
					ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
					ImgVrm1.onload = function() {
						ctx.drawImage(ImgVrm1,posicao[Two.MapSpace][0],posicao[Two.MapSpace][1]);
					}
					// peão Amarelo
					ImgA1 = new Image();
					ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
					ImgA1.onload = function() {
						ctx.drawImage(ImgA1,posicao[Four.MapSpace][0],posicao[Four.MapSpace][1]);
					}
					// peão Azul
					ImgAz1 = new Image();
					ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
					ImgAz1.onload = function() {
						ctx.drawImage(ImgAz1,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
					}
			}
			}
			break;
//--------------------------------------------------------------------------------
		default:
			console.log("Erro na quantidade de jogadores");
			break;
	}
}

//Aqui é para mostrar a pontuação de quem ganhou
function EndGame(){
	
		//Pontuação adicional de 1000 pts + Guardar na variável EndPlayer true para os jogadores que terminarem o jogo
		if( (EndPlayer[1] == false) && (One.MapSpace >= 55)){
			One.Score += 1000;
			document.getElementById("PontosJogadorVerde").innerHTML = One.Score;
			EndPlayer[1] = true;
			EndFunction();
		} if((EndPlayer[2] == false) && (Two.MapSpace >= 55)){
			Two.Score += 1000;
			document.getElementById("PontosJogadorVermelho").innerHTML = Two.Score;
			EndPlayer[2] = true;
			EndFunction();
		}
		if( (EndPlayer[3] == false) && (Three.MapSpace >= 55)){
			Three.Score += 1000;
			document.getElementById("PontosJogadorAzul").innerHTML = Three.Score;
			EndPlayer[3] = true;
			EndFunction();
		}
		if( (EndPlayer[4] == false) && (Four.MapSpace >= 55)){
			Four.Score += 1000;
			document.getElementById("PontosJogadorAmarelo").innerHTML = Four.Score;
			EndPlayer[4] = true;
			EndFunction();
		}
		
		/*switch(quantidadeJogadores){
			case 2:
				setTimeout(function(){ if( (EndPlayer[1]==true) || (EndPlayer[2]==true) ){
					EndFunction();
				} }, 1200);
				break;
			case 3:
				setTimeout(function(){ if( ((EndPlayer[1]==true)&&(EndPlayer[2]==true)) || ((EndPlayer[2]==true)&&(EndPlayer[3]==true)) || ((EndPlayer[3]==true)&&(EndPlayer[1]==true)) ){
					EndFunction();
				} }, 1200);
				break;
			case 4:
				setTimeout(function(){ if( ((EndPlayer[1]==true)&&(EndPlayer[2]==true)&&(EndPlayer[3]==true)) || ((EndPlayer[2]==true)&&(EndPlayer[3]==true)&&(EndPlayer[4]==true)) || ((EndPlayer[3]==true)&&(EndPlayer[4]==true)&&(EndPlayer[1]==true) || ((EndPlayer[4]==true)&&(EndPlayer[1]==true)&&(EndPlayer[2]==true)) ) ){
					EndFunction();
				} }, 1200);
				break;
			default:
				alert("Erro");
				break;
		} */
}

function EndFunction(){
	document.getElementById('winSound').play();
		//Checar se há empate na pontuação dos jogadores
		if( ((One.Score == Two.Score) && (quantidadeJogadores==2)) || ((One.Score == Two.Score) && (quantidadeJogadores == 3) && (Three.Score < One.Score)) || ((One.Score == Two.Score) && (quantidadeJogadores==4) && (Three.Score < One.Score) && (Four.Score < Two.Score)) || ((One.Score == Three.Score) && (quantidadeJogadores == 3) && ( Two.Score < One.Score)) || ((One.Score == Three.Score) && (quantidadeJogadores == 4) && (Two.Score < One.Score) && (Four.Score < Three.Score)) || ((One.Score == Four.Score) && (quantidadeJogadores == 4) && (Two.Score < One.Score) && (Three.Score < Four.Score)) || ((Three.Score == Two.Score) && (quantidadeJogadores == 3) && (Three.Score > One.Score)) || ((Three.Score == Two.Score) && (quantidadeJogadores == 4) && (One.Score < Three.Score) && (Four.Score < Two.Score)) || ((Four.Score == Two.Score) && (quantidadeJogadores == 4) && (One.Score < Four.Score) && (Three.Score < Two.Score)) || ((Three.Score == Four.Score) && (quantidadeJogadores == 4) && (One.Score < Three.Score) && (Two.Score < Four.Score)) ){
			document.getElementById("TitleWinner").innerHTML = "V E N C E D O R E S";
			
			//Pontuação igual dos jogadores 1, 2
			if((One.Score == Two.Score)){
				document.getElementById("Winner").innerHTML = One.Nick + " - " + One.Score + " | " + Two.Nick + " - " + Two.Score;
				document.getElementById("LooserThree").style.visibility = "hidden";
				
				//Checar a posição do terceiro e quarto colocado
				if(Three.Score > Four.Score){
					document.getElementById("LooserOne").innerHTML = Three.Nick + " - " + Three.Score;
					document.getElementById("LooserTwo").innerHTML = Four.Nick + " - " + Four.Score;
				} else if (Four.Score > Three.Score){
					document.getElementById("LooserOne").innerHTML = Four.Nick + " - " + Four.Score;
					document.getElementById("LooserTwo").innerHTML = Three.Nick + " - " + Three.Score;
				}
			}
			//Pontuação igual dos jogadores 1, 3
			if((One.Score == Three.Score)){
				document.getElementById("Winner").innerHTML = One.Nick + " - " + One.Score + " | " + Three.Nick + " - " + Three.Score;
				document.getElementById("LooserThree").style.visibility = "hidden";
				
				//Checar a posição do terceiro e quarto colocado
				if(Two.Score > Four.Score){
					document.getElementById("LooserOne").innerHTML = Two.Nick + " - " + Two.Score;
					document.getElementById("LooserTwo").innerHTML = Four.Nick + " - " + Four.Score;
				} else if (Four.Score > Two.Score){
					document.getElementById("LooserOne").innerHTML = Four.Nick + " - " + Four.Score;
					document.getElementById("LooserTwo").innerHTML = Two.Nick + " - " + Two.Score;
				}
			}
			//Pontuação igual dos jogadores 1, 4
			if((One.Score == Four.Score)){
				document.getElementById("Winner").innerHTML = One.Nick + " - " + One.Score + " | " + Four.Nick + " - " + Four.Score;
				document.getElementById("LooserThree").style.visibility = "hidden";
				
				//Checar a posição do terceiro e quarto colocado
				if(Three.Score > Two.Score){
					document.getElementById("LooserOne").innerHTML = Three.Nick + " - " + Three.Score;
					document.getElementById("LooserTwo").innerHTML = Two.Nick + " - " + Two.Score;
				} else if (Two.Score > Three.Score){
					document.getElementById("LooserOne").innerHTML = Two.Nick + " - " + Two.Score;
					document.getElementById("LooserTwo").innerHTML = Three.Nick + " - " + Three.Score;
				}
			}
			//Pontuação igual dos jogadores 2, 3
			if((Three.Score == Two.Score)){
				document.getElementById("Winner").innerHTML = Two.Nick + " - " + Two.Score + " | " + Three.Nick + " - " + Three.Score;
				document.getElementById("LooserThree").style.visibility = "hidden";
				
				//Checar a posição do terceiro e quarto colocado
				if(One.Score > Four.Score){
					document.getElementById("LooserOne").innerHTML = One.Nick + " - " + One.Score;
					document.getElementById("LooserTwo").innerHTML = Four.Nick + " - " + Four.Score;
				} else if (Four.Score > One.Score){
					document.getElementById("LooserOne").innerHTML = Four.Nick + " - " + Four.Score;
					document.getElementById("LooserTwo").innerHTML = One.Nick + " - " + One.Score;
				}
			}
			//Pontuação igual dos jogadores 4, 2
			if((Four.Score == Two.Score)){
				document.getElementById("Winner").innerHTML = Two.Nick + " - " + Two.Score + " | " + Four.Nick + " - " + Four.Score;
				document.getElementById("LooserThree").style.visibility = "hidden";
				
				//Checar a posição do terceiro e quarto colocado
				if(One.Score > Three.Score){
					document.getElementById("LooserOne").innerHTML = One.Nick + " - " + One.Score;
					document.getElementById("LooserTwo").innerHTML = Three.Nick + " - " + Three.Score;
				} else if (Three.Score > One.Score){
					document.getElementById("LooserOne").innerHTML = Three.Nick + " - " + Three.Score;
					document.getElementById("LooserTwo").innerHTML = One.Nick + " - " + One.Score;
				}
			}
			//Pontuação igual dos jogadores 4, 3
			if((Three.Score == Four.Score)){
				document.getElementById("Winner").innerHTML = Three.Nick + " - " + Three.Score + " | " + Four.Nick + " - " + Four.Score;
				document.getElementById("LooserThree").style.visibility = "hidden";
				
				//Checar a posição do terceiro e quarto colocado
				if(One.Score > Two.Score){
					document.getElementById("LooserOne").innerHTML = One.Nick + " - " + One.Score;
					document.getElementById("LooserTwo").innerHTML = Two.Nick + " - " + Two.Score;
				} else if (Two.Score > One.Score){
					document.getElementById("LooserOne").innerHTML = Two.Nick + " - " + Two.Score;
					document.getElementById("LooserTwo").innerHTML = One.Nick + " - " + One.Score;
				}
			}
			//Pontuação igual dos jogadores 1, 2 e 3
			if((One.Score == Two.Score) && (One.Score == Three.Score) && (Three.Score == Two.Score)){
				document.getElementById("Winner").innerHTML = One.Nick + " - " + One.Score + " | " + Two.Nick + " - " + Two.Score + " | " + Three.Nick + " - " + Three.Score;
				document.getElementById("LooserTwo").style.visibility = "hidden";
				document.getElementById("LooserThree").style.visibility = "hidden";
				document.getElementById("LooserThree").innerHTML = Four.Nick + " - " + Four.Score;
				
			}
			//Pontuação igual dos jogadores 2, 3 e 4
			if((Two.Score == Three.Score) && (Two.Score == Four.Score) && (Three.Score == Four.Score)){
				document.getElementById("Winner").innerHTML = Four.Nick + " - " + Four.Score + " | " + Two.Nick + " - " + Two.Score + " | " + Three.Nick + " - " + Three.Score;
				document.getElementById("LooserTwo").style.visibility = "hidden";
				document.getElementById("LooserThree").style.visibility = "hidden";
				document.getElementById("LooserThree").innerHTML = One.Nick + " - " + One.Score;
			}
			//Pontuação igual dos jogadores 3, 4 e 1
			if((One.Score == Three.Score) && (One.Score == Four.Score) && (Three.Score == Four.Score)){
				document.getElementById("Winner").innerHTML = One.Nick + " - " + One.Score + " | " + Three.Nick + " - " + Three.Score + " | " + Four.Nick + " - " + Four.Score;
				document.getElementById("LooserTwo").style.visibility = "hidden";
				document.getElementById("LooserThree").style.visibility = "hidden";
				document.getElementById("LooserThree").innerHTML = Two.Nick + " - " + Two.Score;
			}
			//Pontuação igual dos jogadores 4, 1 e 2
			if((One.Score == Two.Score) && (One.Score == Four.Score) && (Four.Score == Two.Score)){
				document.getElementById("Winner").innerHTML = One.Nick + " - " + One.Score + " | " + Two.Nick + " - " + Two.Score + " | " + Four.Nick + " - " + Four.Score;
				document.getElementById("LooserTwo").style.visibility = "hidden";
				document.getElementById("LooserThree").style.visibility = "hidden";
				document.getElementById("LooserThree").innerHTML = Three.Nick + " - " + Three.Score;
			}
			
			//Pontuação igual de todos os jogadores
			if((One.Score == Two.Score) && (One.Score == Three.Score) && (One.Score == Four.Score) && (Three.Score == Two.Score) && (Four.Score == Two.Score) && (Three.Score == Four.Score)){
				document.getElementById("Winner").innerHTML = "Vocês todos foram capazes de vencer este jogo! Parabéns pela proeza!";
				document.getElementById("RowWinner").style.visibility = "hidden";
				document.getElementById("TitleLooser").style.visibility = "hidden";
				document.getElementById("LooserOne").style.visibility = "hidden";
				document.getElementById("LooserTwo").style.visibility = "hidden";
				document.getElementById("LooserThree").style.visibility = "hidden";
			}
			
			//Checar quantidade de jogadores
			if(quantidadeJogadores == 2){
				document.getElementById("LooserTwo").style.visibility = "hidden";
				document.getElementById("LooserThree").style.visibility = "hidden";
			}
			if(quantidadeJogadores == 3){
				document.getElementById("LooserThree").style.visibility = "hidden";
			}
		}else{
		
			//****Checar se o primeiro jogador teve a maior pontuação***
			if( (One.Score > Two.Score) && (One.Score > Three.Score) && (One.Score > Four.Score) ){
				document.getElementById("Winner").innerHTML = One.Nick + " - " + One.Score;
				
				//Checar se o segundo, terceiro e quarto jogador teve a mesma pontuação
				if ((Two.Score == Three.Score) && (Two.Score == Four.Score) && (Three.Score == Four.Score)){
					document.getElementById("LooserOne").innerHTML = Two.Nick + " - " + Two.Score + " | " + Three.Nick + " - " + Three.Score + " | " + Four.Nick + " - " + Four.Score;
					document.getElementById("LooserTwo").style.visibility = "hidden";
					document.getElementById("LooserThree").style.visibility = "hidden";
				} else {
					//Checar se o segundo e terceiro teve a mesma pontuação
					if (Two.Score == Three.Score){
						document.getElementById("LooserOne").innerHTML = Two.Nick + " - " + Two.Score + " | " + Three.Nick + " - " + Three.Score;
						document.getElementById("LooserTwo").innerHTML = Four.Nick + " - " + Four.Score;
						document.getElementById("LooserThree").style.visibility = "hidden";
					}
					//Checar se o segundo e quarto teve a mesma pontuação
					if (Two.Score == Four.Score){
						document.getElementById("LooserOne").innerHTML = Two.Nick + " - " + Two.Score + " | " + Four.Nick + " - " + Four.Score;
						document.getElementById("LooserTwo").innerHTML = Three.Nick + " - " + Three.Score;
						document.getElementById("LooserThree").style.visibility = "hidden";
					}
					//Checar se o terceiro e quarto teve a mesma pontuação
					if (Three.Score == Four.Score){
						document.getElementById("LooserOne").innerHTML = Three.Nick + " - " + Three.Score + " | " + Four.Nick + " - " + Four.Score;
						document.getElementById("LooserTwo").innerHTML = Two.Nick + " - " + Two.Score;
						document.getElementById("LooserThree").style.visibility = "hidden";
					}
								
					//Checar se o segundo jogador teve a segunda pontuação maior
					if((Two.Score > Three.Score) && (Two.Score > Four.Score)){
						document.getElementById("LooserOne").innerHTML = Two.Nick + " - " + Two.Score;
						//Checar a posição do terceiro e quarto colocado
						if(Three.Score > Four.Score){
							document.getElementById("LooserTwo").innerHTML = Three.Nick + " - " + Three.Score;
							document.getElementById("LooserThree").innerHTML = Four.Nick + " - " + Four.Score;
						} else if (Four.Score > Three.Score){
							document.getElementById("LooserTwo").innerHTML = Four.Nick + " - " + Four.Score;
							document.getElementById("LooserThree").innerHTML = Three.Nick + " - " + Three.Score;
						}
					}
					//Checar se o terceiro jogador teve a segunda pontuação maior
					if((Three.Score > Two.Score) && (Two.Score > Four.Score)){
						document.getElementById("LooserOne").innerHTML = Three.Nick + " - " + Three.Score;
						//Checar a posição do terceiro e quarto colocado
						if(Two.Score > Four.Score){
							document.getElementById("LooserTwo").innerHTML = Two.Nick + " - " + Two.Score;
							document.getElementById("LooserThree").innerHTML = Four.Nick + " - " + Four.Score;
						} else if (Four.Score > Two.Score){
							document.getElementById("LooserTwo").innerHTML = Four.Nick + " - " + Four.Score;
							document.getElementById("LooserThree").innerHTML = Two.Nick + " - " + Two.Score;
						}
					}
					//Checar se o quarto jogador teve a segunda pontuação maior
					if((Four.Score > Two.Score) && (Two.Score > Three.Score)){
						document.getElementById("LooserOne").innerHTML = Four.Nick + " - " + Four.Score;
						//Checar a posição do terceiro e quarto colocado
						if(Two.Score > Three.Score){
							document.getElementById("LooserTwo").innerHTML = Two.Nick + " - " + Two.Score;
							document.getElementById("LooserThree").innerHTML = Three.Nick + " - " + Three.Score;
						} else if (Three.Score > Four.Score) {
							document.getElementById("LooserTwo").innerHTML = Three.Nick + " - " + Three.Score;
							document.getElementById("LooserThree").innerHTML = Two.Nick + " - " + Two.Score;
						}
					}
				}
			}
			
			//***Checar se o segundo jogador teve a maior pontuação***
			if( (Two.Score > One.Score) && (Two.Score > Three.Score) && (Two.Score > Four.Score) ){
				document.getElementById("Winner").innerHTML = Two.Nick + " - " + Two.Score;
				
				//Checar se o primeiro, terceiro e quarto jogador teve a mesma pontuação
				if ((One.Score == Three.Score) && (One.Score == Four.Score) && (Three.Score == Four.Score)){
					document.getElementById("LooserOne").innerHTML = One.Nick + " - " + One.Score + " | " + Three.Nick + " - " + Three.Score + " | " + Four.Nick + " - " + Four.Score;
					document.getElementById("LooserTwo").style.visibility = "hidden";
					document.getElementById("LooserThree").style.visibility = "hidden";
				} else {
					//Checar se o primeiro e terceiro teve a mesma pontuação
					if (One.Score == Three.Score){
						document.getElementById("LooserOne").innerHTML = One.Nick + " - " + One.Score + " | " + Three.Nick + " - " + Three.Score;
						document.getElementById("LooserTwo").innerHTML = Four.Nick + " - " + Four.Score;
						document.getElementById("LooserThree").style.visibility = "hidden";
					}
					//Checar se o primeiro e quarto teve a mesma pontuação
					if (One.Score == Four.Score){
						document.getElementById("LooserOne").innerHTML = One.Nick + " - " + One.Score + " | " + Four.Nick + " - " + Four.Score;
						document.getElementById("LooserTwo").innerHTML = Three.Nick + " - " + Three.Score;
						document.getElementById("LooserThree").style.visibility = "hidden";
					}
					//Checar se o terceiro e quarto teve a mesma pontuação
					if (Three.Score == Four.Score){
						document.getElementById("LooserOne").innerHTML = Three.Nick + " - " + Three.Score + " | " + Four.Nick + " - " + Four.Score;
						document.getElementById("LooserTwo").innerHTML = One.Nick + " - " + One.	Score;
						document.getElementById("LooserThree").style.visibility = "hidden";
					}
				
					//Checar se o primeiro jogador teve a segunda maior pontuação
					if((One.Score > Three.Score) && (One.Score > Four.Score) ){
						document.getElementById("LooserOne").innerHTML = One.Nick + " - " + One.Score;
						//Checar a posição do terceiro e quarto colocado
						if(Three.Score > Four.Score){
							document.getElementById("LooserTwo").innerHTML = Three.Nick + " - " + Three.Score;
							document.getElementById("LooserThree").innerHTML = Four.Nick + " - " + Four.Score;
						} else if (Four.Score > Three.Score){
							document.getElementById("LooserTwo").innerHTML = Four.Nick + " - " + Four.Score;
							document.getElementById("LooserThree").innerHTML = Three.Nick + " - " + Three.Score;
						}
					}
					//Checar se o terceiro jogador teve a segunda maior pontuação
					if((Three.Score > One.Score) && (Three.Score > Four.Score)){
						document.getElementById("LooserOne").innerHTML = Three.Nick + " - " + Three.Score;
						//Checar a posição do terceiro e quarto colocado
						if(One.Score > Four.Score){
							document.getElementById("LooserTwo").innerHTML = One.Nick + " - " + One.Score;
							document.getElementById("LooserThree").innerHTML = Four.Nick + " - " + Four.Score;
						} else if (Four.Score > One.Score){
							document.getElementById("LooserTwo").innerHTML = Four.Nick + " - " + Four.Score;
							document.getElementById("LooserThree").innerHTML = One.Nick + " - " + One.Score;
						}
					}
					//Checar se o quarto jogador teve a segunda maior pontuação
					if ((Four.Score > One.Score) && (Four.Score > Three.Score)) {
						document.getElementById("LooserOne").innerHTML = Four.Nick + " - " + Four.Score;
						//Checar a posição do terceiro e quarto colocado
						if( One.Score > Three.Score){
							document.getElementById("LooserTwo").innerHTML = One.Nick + " - " + One.Score;
							document.getElementById("LooserThree").innerHTML = Three.Nick + " - " + Three.Score;
						} else if (Three.Score > One.Score){
							document.getElementById("LooserTwo").innerHTML = Three.Nick + " - " + Three.Score;
							document.getElementById("LooserThree").innerHTML = One.Nick + " - " + One.Score;
						}
					}
				}
			}
			//***Checar se o terceiro jogador teve a maior pontuação***
			if( (Three.Score > One.Score) && (Three.Score > Two.Score) && (Three.Score > Four.Score) ){
				document.getElementById("Winner").innerHTML = Three.Nick + " - " + Three.Score;
				
				//Checar se o primeiro, segundo e quarto jogador teve a mesma pontuação
				if ((Two.Score == One.Score) && (Two.Score == Four.Score) && (One.Score == Four.Score)){
					document.getElementById("LooserOne").innerHTML = One.Nick + " - " + One.Score + " | " + Two.Nick + " - " + Two.Score + " | " + Four.Nick + " - " + Four.Score;
					document.getElementById("LooserTwo").style.visibility = "hidden";
					document.getElementById("LooserThree").style.visibility = "hidden";
				} else {
					//Checar se o primeiro e segundo teve a mesma pontuação
					if (Two.Score == One.Score){
						document.getElementById("LooserOne").innerHTML = One.Nick + " - " + One.Score + " | " + Two.Nick + " - " + Two.Score;
						document.getElementById("LooserTwo").innerHTML = Four.Nick + " - " + Four.Score;
						document.getElementById("LooserThree").style.visibility = "hidden";
					}
					//Checar se o primeiro e quarto teve a mesma pontuação
					if (One.Score == Four.Score){
						document.getElementById("LooserOne").innerHTML = One.Nick + " - " + One.Score + " | " + Four.Nick + " - " + Four.Score;
						document.getElementById("LooserTwo").innerHTML = Two.Nick + " - " + Two.Score;
						document.getElementById("LooserThree").style.visibility = "hidden";
					}
					//Checar se o segundo e quarto teve a mesma pontuação
					if (Two.Score == Four.Score){
						document.getElementById("LooserOne").innerHTML = Two.Nick + " - " + Two.Score + " | " + Four.Nick + " - " + Four.Score;
						document.getElementById("LooserTwo").innerHTML = One.Nick + " - " + One.Score;
						document.getElementById("LooserThree").style.visibility = "hidden";
					}
				
					//Checar se o primeiro jogador teve a segunda maior pontuação
					if( (One.Score > Two.Score) && (One.Score > Four.Score)){
						document.getElementById("LooserOne").innerHTML = One.Nick + " - " + One.Score;
						//Checar a posição do terceiro e quarto colocado
						if(Two.Score > Four.Score){
							document.getElementById("LooserTwo").innerHTML = Two.Nick + " - " + Two.Score;
							document.getElementById("LooserThree").innerHTML = Four.Nick + " - " + Four.Score;
						} else if(Four.Score > Two.Score){
							document.getElementById("LooserTwo").innerHTML = Four.Nick + " - " + Four.Score;
							document.getElementById("LooserThree").innerHTML = Two.Nick + " - " + Two.Score;
						}
					}
					//Checar se o segundo jogador teve a segunda maior pontuação
					if((Two.Score > One.Score) && (Two.Score > Four.Score)){
						document.getElementById("LooserOne").innerHTML = Two.Nick + " - " + Two.Score;
						//Checar a posição do terceiro e quarto colocado
						if(One.Score > Four.Score){
							document.getElementById("LooserTwo").innerHTML = One.Nick + " - " + One.Score;
							document.getElementById("LooserThree").innerHTML = Four.Nick + " - " + Four.Score;
						} else if(Four.Score > One.Score){
							document.getElementById("LooserTwo").innerHTML = Four.Nick + " - " + Four.Score;
							document.getElementById("LooserThree").innerHTML = One.Nick + " - " + One.Score;
						}
					}
					//Checar se o quarto jogador teve a segunda maior pontuação
					if((Four.Score > One.Score) && (Four.Score > Two.Score)){
						document.getElementById("LooserOne").innerHTML = Four.Nick + " - " + Four.Score;
						//Checar a posição do terceiro e quarto colocado
						if(One.Score > Two.Score){
							document.getElementById("LooserTwo").innerHTML = One.Nick + " - " + One.Score;
							document.getElementById("LooserThree").innerHTML = Two.Nick + " - " + Two.Score;
						} else if(Two.Score > One.Score){
							document.getElementById("LooserTwo").innerHTML = Two.Nick + " - " + Two.Score;
							document.getElementById("LooserThree").innerHTML = One.Nick + " - " + One.Score;
						}
					}
				}
			}
			//***Checar se o quarto jogador teve a maior pontuação***
			if( (Four.Score > One.Score) && (Four.Score > Two.Score) && (Four.Score > Three.Score) ){
				document.getElementById("Winner").innerHTML = Four.Nick + " - " + Four.Score;
				
				//Checar se o primeiro, segundo e terceiro jogador teve a mesma pontuação
				if ((Two.Score == One.Score) && (Two.Score == Three.Score) && (One.Score == Three.Score)){
					document.getElementById("LooserOne").innerHTML = One.Nick + " - " + One.Score + " | " + Two.Nick + " - " + Two.Score + " | " + Three.Nick + " - " + Three.Score;
					document.getElementById("LooserTwo").style.visibility = "hidden";
					document.getElementById("LooserThree").style.visibility = "hidden";
				} else {
					//Checar se o primeiro e segundo teve a mesma pontuação
					if (Two.Score == One.Score){
						document.getElementById("LooserOne").innerHTML = One.Nick + " - " + One.Score + " | " + Two.Nick + " - " + Two.Score;
						document.getElementById("LooserTwo").innerHTML = Three.Nick + " - " + Three.Score;
						document.getElementById("LooserThree").style.visibility = "hidden";
					}
					//Checar se o primeiro e terceiro teve a mesma pontuação
					if (One.Score == Three.Score){
						document.getElementById("LooserOne").innerHTML = One.Nick + " - " + One.Score + " | " + Three.Nick + " - " + Three.Score;
						document.getElementById("LooserTwo").innerHTML = Two.Nick + " - " + Two.Score;
						document.getElementById("LooserThree").style.visibility = "hidden";
					}
					//Checar se o segundo e terceiro teve a mesma pontuação
					if (Two.Score == Three.Score){
						document.getElementById("LooserOne").innerHTML = Two.Nick + " - " + Two.Score + " | " + Three.Nick + " - " + Three.Score;
						document.getElementById("LooserTwo").innerHTML = One.Nick + " - " + One.Score;
						document.getElementById("LooserThree").style.visibility = "hidden";
					}
				
					//Checar se o primeiro jogador teve a segunda maior pontuação
					if( (One.Score > Two.Score) && (One.Score > Three.Score)){
						document.getElementById("LooserOne").innerHTML = One.Nick + " - " + One.Score;
						//Checar a posição do terceiro e quarto colocado
						if(Two.Score > Three.Score){
							document.getElementById("LooserTwo").innerHTML = Two.Nick + " - " + Two.Score;
							document.getElementById("LooserThree").innerHTML = Three.Nick + " - " + Three.Score;
						}else if(Three.Score > Two.Score){
							document.getElementById("LooserTwo").innerHTML = Three.Nick + " - " + Three.Score;
							document.getElementById("LooserThree").innerHTML = Two.Nick + " - " + Two.Score;
						}
					}
					//Checar se o segundo jogador teve a segunda maior pontuação
					if( (Two.Score > One.Score) && (Two.Score > Three.Score)){
						document.getElementById("LooserOne").innerHTML = Two.Nick + " - " + Two.Score;
						//Checar a posição do terceiro e quarto colocado
						if(One.Score > Three.Score){
							document.getElementById("LooserTwo").innerHTML = One.Nick + " - " + One.Score;
							document.getElementById("LooserThree").innerHTML = Three.Nick + " - " + Three.Score;
						}else if (Three.Score > One.Score){
							document.getElementById("LooserTwo").innerHTML = Three.Nick + " - " + Three.Score;
							document.getElementById("LooserThree").innerHTML = One.Nick + " - " + One.Score;
						}
					}
					//Checar se o terceira jogador teve a segunda maior pontuação
					if( (Three.Score > One.Score) && (Three.Score > Two.Score)){
						document.getElementById("LooserOne").innerHTML = Three.Nick + " - " + Three.Score;
						//Checar a posição do terceiro e quarto colocado
						if(One.Score > Two.Score){
							document.getElementById("LooserTwo").innerHTML = One.Nick + " - " + One.Score;
							document.getElementById("LooserThree").innerHTML = Two.Nick + " - " + Two.Score;
						}else if (Two.Score > One.Score){
							document.getElementById("LooserTwo").innerHTML = Two.Nick + " - " + Two.Score;
							document.getElementById("LooserThree").innerHTML = One.Nick + " - " + One.Score;
						}
					}
				}
			}
		
			//Checar quantidade de jogadores
			if(quantidadeJogadores == 2){
				document.getElementById("LooserTwo").style.visibility = "hidden";
				document.getElementById("LooserThree").style.visibility = "hidden";
			}
			if(quantidadeJogadores == 3){
				document.getElementById("LooserThree").style.visibility = "hidden";
			}
		}
		document.getElementById("End").style.visibility = "visible";
		document.getElementById("Dice").disabled = false;
}

function CloseEnd(){
	document.getElementById("End").style.visibility = "hidden";
	window.location.href = "../index.html";
}

//Aqui cria um cronometro para ser usado nas perguntas e nos imprevistos
function Cronometro(){	
	//Cronometro
	if(seg > 0){
		seg -= 1;
		
		if(seg.toString().length == 1){
			seg = "0" + seg;
		}
		
		//Checar se será o fim do cronometro da pergunta (0) ou do imprevisto (1)
		if(P_I == 0){
			document.getElementById("Temporizador").innerHTML = "00:" + seg;		
		} else if (P_I == 1){
			document.getElementById("temporizador").innerHTML = "00:" + seg;
		}
		//iniciar e desligar temporizador
		if( ((Temporizador == true) && (seg == "00")) || (Temporizador == false) ){
			
			//Checar se será o fim do cronometro da pergunta (0) ou do imprevisto (1)
			if(P_I == 0){
				document.getElementById("Temporizador").innerHTML = "00:00";	
				FimCronometro(0);		
			} else if (P_I == 1){
				document.getElementById("temporizador").innerHTML = "00:00";
				FimCronometro(1);
			}
			seg = 0;
		} else {
			timeTimeout=setTimeout('Cronometro()', 1000);
		}
	}
	else{
		//Checar se será o fim do cronometro da pergunta (0) ou do imprevisto (1)
		if(P_I == 0){
			document.getElementById("Temporizador").innerHTML = "00:00";		
		} else if (P_I == 1){
			document.getElementById("temporizador").innerHTML = "00:00";
		}		
	}
}

function FimCronometro(P_I){
	if(sala == 0) {
		if(Temporizador == true){
			if (P_I == 0) {
				document.getElementById('failSound').play();
					switch(TimePlayer){
						case 1:
						One.Score -= 250;
						document.getElementById("PontosJogadorVerde").innerHTML = One.Score.toFixed(0);
						break;
					case 2:
						Two.Score -= 250;
						document.getElementById("PontosJogadorVermelho").innerHTML = Two.Score.toFixed(0);
						break;
					case 3:
						Three.Score -= 250;
						document.getElementById("PontosJogadorAzul").innerHTML = Three.Score.toFixed(0);
						break;
					case 4:
						Four.Score -= 250;
						document.getElementById("PontosJogadorAmarelo").innerHTML = Four.Score.toFixed(0);
						break;
					default:
						alert("Erro ao finalizar cronometro!");
						break;
				}
				setTimeout(function(){document.getElementById("perguntas").style.visibility = "hidden";AmountPlayer();IluminarNome(TimePlayer); document.getElementById("Dice").disabled = false;}, 1000);
			} else if(P_I == 1){
				CloseImprevistos();
			}
		}
		clearTimeout(timeTimeout);
		Temporizador = false;
	} else if (sala == 1){
		FimCronometroOnline(P_I);
	}
}

//Aqui guarda dentro do jogador o lugar que ele se encontra no Mapa
function Walk(TimePlayer, Dado){
		
	switch(TimePlayer){
		case 1:
			One.MapSpace += Dado;
			
			//Fim do jogo
			if(One.MapSpace >= 55){
				One.MapSpace = 55; //Porque não existe posição maior que essa
			}
		
			LimparCanvas();
			break;
		case 2:
			Two.MapSpace += Dado;

			//Fim do jogo
			if(Two.MapSpace >= 55){
				Two.MapSpace = 55; //Porque não existe posição maior que essa
			}
			
			LimparCanvas();
			break;
		case 3:
			Three.MapSpace += Dado;
			
			//Fim do jogo
			if(Three.MapSpace >= 55){
				Three.MapSpace = 55; //Porque não existe posição maior que essa
			}
			
			LimparCanvas();
			break;
		case 4:
			Four.MapSpace += Dado;
			
			//Fim do jogo
			if(Four.MapSpace >= 55){
				Four.MapSpace = 55; //Porque não existe posição maior que essa
			}
			
			LimparCanvas();
			break;
		default:
			alert("Erro para Redesenhar os pinos no canvas!");
			break;
	}
}

//Apresenta qual jogador inicia partida
function JogadorInicial(jogadorVez){
	switch(jogadorVez){
		case 1:
			document.getElementById("vezText").innerHTML="VERDE";
			break;
		case 2:
			document.getElementById("vezText").innerHTML="VERMELHO";
			break;
		case 3:
			document.getElementById("vezText").innerHTML="AZUL";
			break;
		case 4:
			document.getElementById("vezText").innerHTML="ROXO";
			break;
		default:
			alert("Erro ao mostrar quem inicia o jogo");
			break;
	}
	document.getElementById("vez").style.visibility="visible";
	setTimeout(function(){document.getElementById("vez").style.visibility="hidden";}, 2500);
}

//Aqui é ativado no momento que a tela do jogo se abrir
function Start(){
	
	Canvas = document.getElementById("TPC");
	ctx = Canvas.getContext("2d");
	
	switch(quantidadeJogadores){
		case 2:
			TimePlayer = Math.floor((Math.random()*2) + 1);
			JogadorInicial(TimePlayer);
			// peão Verde
			ImgV1 = new Image();
			ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";		
			// peão Vermelho
			ImgVrm1 = new Image();
			ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
			
			ImgV1.onload = function() {
				ctx.drawImage(ImgV1,810,10);
			}
			ImgVrm1.onload = function() {
				ctx.drawImage(ImgVrm1,835,10);
			}
			
			break;
		case 3:
			TimePlayer = Math.floor((Math.random()*3) + 1);
			JogadorInicial(TimePlayer);
			// peão Verde
			ImgV1 = new Image();
			ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";		
			// peão Vermelho
			ImgVrm1 = new Image();
			ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
			// peão Azul
			ImgAz1 = new Image();
			ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
			
			ImgV1.onload = function() {
				ctx.drawImage(ImgV1,posGreen[0][0],posGreen[0][1]);
			}
			ImgVrm1.onload = function() {
				ctx.drawImage(ImgVrm1,822,posRed[0][1]);
			}
			ImgAz1.onload = function() {
				ctx.drawImage(ImgAz1,posBlue[0][0],posBlue[0][1]);
			}
			break;
		case 4:
			TimePlayer = Math.floor((Math.random()*4) + 1);
			JogadorInicial(TimePlayer);
			// peão Verde
			ImgV1 = new Image();
			ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";		
			// peão Vermelho
			ImgVrm1 = new Image();
			ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
			// peão Amarelo
			ImgA1 = new Image();
			ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
			// peão Azul
			ImgAz1 = new Image();
			ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
			
			ImgV1.onload = function() {
				ctx.drawImage(ImgV1,posGreen[0][0],posGreen[0][1]);
			}
			ImgVrm1.onload = function() {
				ctx.drawImage(ImgVrm1,posRed[0][0],posRed[0][1]);
			}
			ImgAz1.onload = function() {
				ctx.drawImage(ImgAz1,posBlue[0][0],posBlue[0][1]);
			}
			ImgA1.onload = function() {
				ctx.drawImage(ImgA1,posYellow[0][0],posYellow[0][1]);
			}
			break;
		default:
			console.log("Erro na quantidade de jogadores");
			break;
	}
	IluminarNome(TimePlayer);
}

// função ativada ao clicar no dado
function Dice(){

	//Checar o modo de jogo (Online ou Offline)
	switch (sala) {
		//Caso Offline
		case 0:

			document.getElementById("diceSound").play();
			//Evitar duplo clique
			document.getElementById("Dice").disabled = true;

			//Aqui gera um número aleatório para o dado
			Dado = Math.floor((Math.random()*6) + 1);

			// Imagem dos Dados
			if (Dado == 1) {
				document.getElementById("Dice").src = "../ImgsOfficial/Game/Dice/One.png";
			}
			if (Dado == 2) {
				document.getElementById("Dice").src = "../ImgsOfficial/Game/Dice/Two.png";
			}
			if (Dado == 3) {
				document.getElementById("Dice").src = "../ImgsOfficial/Game/Dice/Three.png";
			}
			if (Dado == 4) {
				document.getElementById("Dice").src = "../ImgsOfficial/Game/Dice/Four.png";
			}
			if (Dado == 5) {
				document.getElementById("Dice").src = "../ImgsOfficial/Game/Dice/Five.png";
			}
			if (Dado == 6) {
				document.getElementById("Dice").src = "../ImgsOfficial/Game/Dice/Six.png";
			}
	
			//Aqui checa de quem é a vez do jogador
			switch(TimePlayer){
				case 1:
					Walk(1, Dado);
					DrawPieces(One.MapSpace);
					Score(1, Dado);
					var PosX = posicao[One.MapSpace][0];
					var PosY = posicao[One.MapSpace][1];
					if( (PosX == posicao[1][0] && PosY == posicao[1][1]) || (PosX == posicao[4][0] && PosY == posicao[4][1]) || (PosX == posicao[9][0] && PosY == posicao[9][1]) || (PosX == posicao[14][0] && PosY == posicao[14][1]) || (PosX == posicao[17][0] && PosY == posicao[17][1]) || (PosX == posicao[20][0] && PosY == posicao[20][1]) || (PosX == posicao[23][0] && PosY == posicao[23][1]) || (PosX == posicao[26][0] && PosY == posicao[26][1]) || (PosX == posicao[29][0] && PosY == posicao[29][1]) || (PosX == posicao[34][0] && PosY == posicao[34][1]) || (PosX == posicao[38][0] && PosY == posicao[38][1]) || (PosX == posicao[44][0] && PosY == posicao[44][1]) || (PosX == posicao[47][0] && PosY == posicao[47][1]) || (PosX == posicao[49][0] && PosY == posicao[49][1]) || (PosX == posicao[53][0] && PosY == posicao[53][1])){
						
						setTimeout(function(){Question(posicao[One.MapSpace][0], posicao[One.MapSpace][1]);}, 1000);
					} else if( (PosX == posicao[7][0] && PosY == posicao[7][1]) || (PosX == posicao[12][0] && PosY == posicao[12][1]) || (PosX == posicao[31][0] && PosY == posicao[31][1]) || (PosX == posicao[36][0] && PosY == posicao[36][1]) || (PosX == posicao[41][0] && PosY == posicao[41][1]) || (PosX == posicao[51][0] && PosY == posicao[51][1])) { Imprevistos(PosX, PosY);
						} else{
						AmountPlayer();
						setTimeout(function(){IluminarNome(TimePlayer); document.getElementById("Dice").disabled = false;}, 1000);
					}
					break;
				case 2:
					Walk(2, Dado);
					DrawPieces(Two.MapSpace);
					Score(2, Dado);
					var PosX = posicao[Two.MapSpace][0];
					var PosY = posicao[Two.MapSpace][1];
					if( (PosX == posicao[1][0] && PosY == posicao[1][1]) || (PosX == posicao[4][0] && PosY == posicao[4][1]) || (PosX == posicao[9][0] && PosY == posicao[9][1]) || (PosX == posicao[14][0] && PosY == posicao[14][1]) || (PosX == posicao[17][0] && PosY == posicao[17][1]) || (PosX == posicao[20][0] && PosY == posicao[20][1]) || (PosX == posicao[23][0] && PosY == posicao[23][1]) || (PosX == posicao[26][0] && PosY == posicao[26][1]) || (PosX == posicao[29][0] && PosY == posicao[29][1]) || (PosX == posicao[34][0] && PosY == posicao[34][1]) || (PosX == posicao[38][0] && PosY == posicao[38][1]) || (PosX == posicao[44][0] && PosY == posicao[44][1]) || (PosX == posicao[47][0] && PosY == posicao[47][1]) || (PosX == posicao[49][0] && PosY == posicao[49][1]) || (PosX == posicao[53][0] && PosY == posicao[53][1])){
						
						setTimeout(function(){Question(posicao[Two.MapSpace][0], posicao[Two.MapSpace][1]);}, 1000);
					}  else if( (PosX == posicao[7][0] && PosY == posicao[7][1]) || (PosX == posicao[12][0] && PosY == posicao[12][1]) || (PosX == posicao[31][0] && PosY == posicao[31][1]) || (PosX == posicao[36][0] && PosY == posicao[36][1]) || (PosX == posicao[41][0] && PosY == posicao[41][1]) || (PosX == posicao[51][0] && PosY == posicao[51][1])) { Imprevistos(PosX, PosY);
						} else{
						AmountPlayer(); 
						setTimeout(function(){IluminarNome(TimePlayer);document.getElementById("Dice").disabled = false;}, 1000);
					}
					break;
				case 3:
					Walk(3, Dado);
					DrawPieces(Three.MapSpace);
					Score(3, Dado);
					var PosX = posicao[Three.MapSpace][0];
					var PosY = posicao[Three.MapSpace][1];
					if( (PosX == posicao[1][0] && PosY == posicao[1][1]) || (PosX == posicao[4][0] && PosY == posicao[4][1]) || (PosX == posicao[9][0] && PosY == posicao[9][1]) || (PosX == posicao[14][0] && PosY == posicao[14][1]) || (PosX == posicao[17][0] && PosY == posicao[17][1]) || (PosX == posicao[20][0] && PosY == posicao[20][1]) || (PosX == posicao[23][0] && PosY == posicao[23][1]) || (PosX == posicao[26][0] && PosY == posicao[26][1]) || (PosX == posicao[29][0] && PosY == posicao[29][1]) || (PosX == posicao[34][0] && PosY == posicao[34][1]) || (PosX == posicao[38][0] && PosY == posicao[38][1]) || (PosX == posicao[44][0] && PosY == posicao[44][1]) || (PosX == posicao[47][0] && PosY == posicao[47][1]) || (PosX == posicao[49][0] && PosY == posicao[49][1]) || (PosX == posicao[53][0] && PosY == posicao[53][1])){
						
						setTimeout(function(){Question(posicao[Three.MapSpace][0], posicao[Three.MapSpace][1]);}, 1000);
					}  else if( (PosX == posicao[7][0] && PosY == posicao[7][1]) || (PosX == posicao[12][0] && PosY == posicao[12][1]) || (PosX == posicao[31][0] && PosY == posicao[31][1]) || (PosX == posicao[36][0] && PosY == posicao[36][1]) || (PosX == posicao[41][0] && PosY == posicao[41][1]) || (PosX == posicao[51][0] && PosY == posicao[51][1])) { Imprevistos(PosX, PosY);
						} else{
						AmountPlayer();
						setTimeout(function(){IluminarNome(TimePlayer);document.getElementById("Dice").disabled = false;}, 1000);
					}
					break;
				case 4:
					Walk(4, Dado);
					DrawPieces(Four.MapSpace);
					Score(4, Dado);
					var PosX = posicao[Four.MapSpace][0];
					var PosY = posicao[Four.MapSpace][1];
					if( (PosX == posicao[1][0] && PosY == posicao[1][1]) || (PosX == posicao[4][0] && PosY == posicao[4][1]) || (PosX == posicao[9][0] && PosY == posicao[9][1]) || (PosX == posicao[14][0] && PosY == posicao[14][1]) || (PosX == posicao[17][0] && PosY == posicao[17][1]) || (PosX == posicao[20][0] && PosY == posicao[20][1]) || (PosX == posicao[23][0] && PosY == posicao[23][1]) || (PosX == posicao[26][0] && PosY == posicao[26][1]) || (PosX == posicao[29][0] && PosY == posicao[29][1]) || (PosX == posicao[34][0] && PosY == posicao[34][1]) || (PosX == posicao[38][0] && PosY == posicao[38][1]) || (PosX == posicao[44][0] && PosY == posicao[44][1]) || (PosX == posicao[47][0] && PosY == posicao[47][1]) || (PosX == posicao[49][0] && PosY == posicao[49][1]) || (PosX == posicao[53][0] && PosY == posicao[53][1])){
						
						setTimeout(function(){Question(posicao[Four.MapSpace][0], posicao[Four.MapSpace][1]);}, 1000);
					}  else if( (PosX == posicao[7][0] && PosY == posicao[7][1]) || (PosX == posicao[12][0] && PosY == posicao[12][1]) || (PosX == posicao[31][0] && PosY == posicao[31][1]) || (PosX == posicao[36][0] && PosY == posicao[36][1]) || (PosX == posicao[41][0] && PosY == posicao[41][1]) || (PosX == posicao[51][0] && PosY == posicao[51][1])) { Imprevistos(PosX, PosY);
						} else{
						AmountPlayer();
						setTimeout(function(){IluminarNome(TimePlayer);document.getElementById("Dice").disabled = false;}, 1000);
					}
					break;
				default:
					alert("Vez do jogador inválida!");
					break;
			}
			setTimeout(function(){document.getElementById("Dice").src = "../ImgsOfficial/Game/Dice/Dice.gif";}, 1000);
			EndGame();		
			
			break;
//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------
		//Caso Online
		case 1:
			DiceOnline();
			break;

		default:
			alert("Erro ao rolar os dados");
			break;
	}
}
