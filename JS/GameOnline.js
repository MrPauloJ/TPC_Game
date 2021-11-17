//OUTRAS Variaveis Globais
var ID_Sala_PHP = []; 
var Cenario_PHP = [];
var quantidadeJogadores_PHP = [];
var VezJogador_LOCAL;
var JogoAtivo_PHP = [];
var Nick_Player_PHP = ["","","",""];
var Info_PHP, lenJogo, VezOnline, IndexJSON;
var ID_CE = 0; // 0 SIGNIFICA QUE NÃO É O JOGADOR QUE CAIU NA CASA ESPECIAL (CE)
var Z = 0;
var DadoClicked = [undefined, undefined];
var jogoOnlineIniciado = false;
//A variável ID_Sala foi definida no .js do jogo local 

//------------------(CONEXÃO WEBSOCKET)---------------------------
//----------------------------------------------------------------
var conn = new WebSocket('wss://tpc-server.herokuapp.com/wss');

//tpcserver2.ddns.net
conn.onopen = function(e) {
    console.log("Connection established!");
};

conn.onmessage = function(e) {
	//AQUI OBTEM AS INFORMAÇÕES RECEBIDAS DO SERVIDOR
	Info_PHP = JSON.parse(e.data);
	
	//AQUI PEGA OS DADOS ANTES DE INICIAR O JOGO
	DadosIniciais();

	if((Info_PHP[0] != "Iniciar_Jogo") && (Comand != "Resp_Fec")){
	//AQUI SETTA O NOME DOS JOGADORES NA TELA
	SetarNomes();
	}
	
	//AQUI SERÁ O DADO
	try{
		if(Comand=="Dado"){
			if (ID_Sala == Info_PHP[IndexJSON].id){
				AtualizarJogadores();
				Comand="";
			}
		}
	}catch{}
};

conn.onclose = function(e){
	console.log("Connection closed");
	
	if(jogoOnlineIniciado == true){
		window.location.href = "../index.html"
	}
}

//-------------------------------------------------------------------------------------------
//------------------(Funções usadas para comunicação com servidor)---------------------------

//Função pra atualizar jogadores esses desgaçados
function AtualizarJogadores(){
	
	//SE O JOGO TIVER INICIADO
	if (Info_PHP[IndexJSON].iniciado == true){
		quantidadeJogadores = quantidadeJogadores_PHP[IndexJSON];
		
		if(quantidadeJogadores == 1) {
			console.log("TODOS OS JOGADORES SAIRAM DA SALA. FIM DE JOGO!");
			window.location.href = "../index.html";
		} else {
			
			//INFORMAÇÕES REPASSADAS DE CADA UM DOS JOGADORES
			try{
			One.Score=Info_PHP[IndexJSON].jogadores[0].pontuacao;
			One.MapSpace=Info_PHP[IndexJSON].jogadores[0].posicao;
			document.getElementById("PontosJogadorVerde").innerHTML = One.Score.toFixed(0);
			}catch{}
			try{
			Two.Score=Info_PHP[IndexJSON].jogadores[1].pontuacao;
			Two.MapSpace=Info_PHP[IndexJSON].jogadores[1].posicao;
			document.getElementById("PontosJogadorVermelho").innerHTML = Two.Score.toFixed(0);
			}catch{}
			try{
			Three.Score=Info_PHP[IndexJSON].jogadores[2].pontuacao;
			Three.MapSpace=Info_PHP[IndexJSON].jogadores[2].posicao;
			document.getElementById("PontosJogadorAzul").innerHTML = Three.Score.toFixed(0);
			}catch{}
			try{
			Four.Score=Info_PHP[IndexJSON].jogadores[3].pontuacao;
			Four.MapSpace=Info_PHP[IndexJSON].jogadores[3].posicao;
			document.getElementById("PontosJogadorAmarelo").innerHTML = Four.Score.toFixed(0);
			}catch{}
			try{
			Dado=Info_PHP[IndexJSON].dado;
			}catch{}
					
			// Imagem dos Dados
			if (Dado == 1) {
				document.getElementById("Dice").src = "../ImgsOfficial/Game/Dice/One.png";
			}
			else if (Dado == 2) {
				document.getElementById("Dice").src = "../ImgsOfficial/Game/Dice/Two.png";
			}
			else if (Dado == 3) {
				document.getElementById("Dice").src = "../ImgsOfficial/Game/Dice/Three.png";
			}
			else if (Dado == 4) {
				document.getElementById("Dice").src = "../ImgsOfficial/Game/Dice/Four.png";
			}
			else if (Dado == 5) {
				document.getElementById("Dice").src = "../ImgsOfficial/Game/Dice/Five.png";
			}
			else if (Dado == 6) {
				document.getElementById("Dice").src = "../ImgsOfficial/Game/Dice/Six.png";
			}
			LimparCanvas();
			switch(TimePlayer){
				case 1:
					DrawPieces(One.MapSpace);
					
					var PosX = posicao[One.MapSpace][0];
					var PosY = posicao[One.MapSpace][1];
					if( (PosX == posicao[1][0] && PosY == posicao[1][1]) || (PosX == posicao[4][0] && PosY == posicao[4][1]) || (PosX == posicao[9][0] && PosY == posicao[9][1]) || (PosX == posicao[14][0] && PosY == posicao[14][1]) || (PosX == posicao[17][0] && PosY == posicao[17][1]) || (PosX == posicao[20][0] && PosY == posicao[20][1]) || (PosX == posicao[23][0] && PosY == posicao[23][1]) || (PosX == posicao[26][0] && PosY == posicao[26][1]) || (PosX == posicao[29][0] && PosY == posicao[29][1]) || (PosX == posicao[34][0] && PosY == posicao[34][1]) || (PosX == posicao[38][0] && PosY == posicao[38][1]) || (PosX == posicao[44][0] && PosY == posicao[44][1]) || (PosX == posicao[47][0] && PosY == posicao[47][1]) || (PosX == posicao[49][0] && PosY == posicao[49][1]) || (PosX == posicao[53][0] && PosY == posicao[53][1])){
						if (TimePlayer == VezJogador_LOCAL) {
							ID_CE = 1;
							setTimeout(function(){Question(posicao[One.MapSpace][0], posicao[One.MapSpace][1]);}, 1000);
						} else {
							ID_CE = 0;
							document.getElementById("Div_Casa_Especial").style.visibility = "visible";
						}
					} else if( (PosX == posicao[7][0] && PosY == posicao[7][1]) || (PosX == posicao[12][0] && PosY == posicao[12][1]) || (PosX == posicao[31][0] && PosY == posicao[31][1]) || (PosX == posicao[36][0] && PosY == posicao[36][1]) || (PosX == posicao[41][0] && PosY == posicao[41][1]) || (PosX == posicao[51][0] && PosY == posicao[51][1])) { 
						if (TimePlayer == VezJogador_LOCAL) {
							ID_CE = 1;
							Imprevistos(PosX, PosY);
						} else {
							ID_CE = 0;
							document.getElementById("Div_Casa_Especial").style.visibility = "visible";
						}
					} else{
						TimePlayer = VezOnline;
						setTimeout(function(){IluminarNome(TimePlayer);}, 1000);
						if(TimePlayer == VezJogador_LOCAL){
							DadoClicked[1] = 0; //JOGA DADO
							document.getElementById("Dice").disabled = false;
						} else {
							DadoClicked[1] = 1; //NÃO JOGA DADO
						}
					}
					break;
				case 2:
					DrawPieces(Two.MapSpace);
					
					var PosX = posicao[Two.MapSpace][0];
					var PosY = posicao[Two.MapSpace][1];
					if( (PosX == posicao[1][0] && PosY == posicao[1][1]) || (PosX == posicao[4][0] && PosY == posicao[4][1]) || (PosX == posicao[9][0] && PosY == posicao[9][1]) || (PosX == posicao[14][0] && PosY == posicao[14][1]) || (PosX == posicao[17][0] && PosY == posicao[17][1]) || (PosX == posicao[20][0] && PosY == posicao[20][1]) || (PosX == posicao[23][0] && PosY == posicao[23][1]) || (PosX == posicao[26][0] && PosY == posicao[26][1]) || (PosX == posicao[29][0] && PosY == posicao[29][1]) || (PosX == posicao[34][0] && PosY == posicao[34][1]) || (PosX == posicao[38][0] && PosY == posicao[38][1]) || (PosX == posicao[44][0] && PosY == posicao[44][1]) || (PosX == posicao[47][0] && PosY == posicao[47][1]) || (PosX == posicao[49][0] && PosY == posicao[49][1]) || (PosX == posicao[53][0] && PosY == posicao[53][1])){
						if (TimePlayer == VezJogador_LOCAL) {
							ID_CE = 1;
							setTimeout(function(){Question(posicao[Two.MapSpace][0], posicao[Two.MapSpace][1]);}, 1000);
						} else {
							ID_CE = 0;
							document.getElementById("Div_Casa_Especial").style.visibility = "visible";
						}
					} else if( (PosX == posicao[7][0] && PosY == posicao[7][1]) || (PosX == posicao[12][0] && PosY == posicao[12][1]) || (PosX == posicao[31][0] && PosY == posicao[31][1]) || (PosX == posicao[36][0] && PosY == posicao[36][1]) || (PosX == posicao[41][0] && PosY == posicao[41][1]) || (PosX == posicao[51][0] && PosY == posicao[51][1])) { 
						if (TimePlayer == VezJogador_LOCAL) {
							ID_CE = 1;
							Imprevistos(PosX, PosY);
						} else {
							ID_CE = 0;
							document.getElementById("Div_Casa_Especial").style.visibility = "visible";
						}
					} else {
						TimePlayer = VezOnline;
						setTimeout(function(){IluminarNome(TimePlayer);}, 1000);
						if(TimePlayer == VezJogador_LOCAL){
							DadoClicked[1] = 0; //JOGA DADO
							document.getElementById("Dice").disabled = false;
						} else {
							DadoClicked[1] = 1; //NÃO JOGA DADO
						}
					}
					break;
				case 3:
					DrawPieces(Three.MapSpace);
					
					var PosX = posicao[Three.MapSpace][0];
					var PosY = posicao[Three.MapSpace][1];
					if( (PosX == posicao[1][0] && PosY == posicao[1][1]) || (PosX == posicao[4][0] && PosY == posicao[4][1]) || (PosX == posicao[9][0] && PosY == posicao[9][1]) || (PosX == posicao[14][0] && PosY == posicao[14][1]) || (PosX == posicao[17][0] && PosY == posicao[17][1]) || (PosX == posicao[20][0] && PosY == posicao[20][1]) || (PosX == posicao[23][0] && PosY == posicao[23][1]) || (PosX == posicao[26][0] && PosY == posicao[26][1]) || (PosX == posicao[29][0] && PosY == posicao[29][1]) || (PosX == posicao[34][0] && PosY == posicao[34][1]) || (PosX == posicao[38][0] && PosY == posicao[38][1]) || (PosX == posicao[44][0] && PosY == posicao[44][1]) || (PosX == posicao[47][0] && PosY == posicao[47][1]) || (PosX == posicao[49][0] && PosY == posicao[49][1]) || (PosX == posicao[53][0] && PosY == posicao[53][1])){
						if (TimePlayer == VezJogador_LOCAL) {
							ID_CE = 1;
							setTimeout(function(){Question(posicao[Three.MapSpace][0], posicao[Three.MapSpace][1]);}, 1000);
						} else {
							ID_CE = 0;
							document.getElementById("Div_Casa_Especial").style.visibility = "visible";
						}
					}  else if( (PosX == posicao[7][0] && PosY == posicao[7][1]) || (PosX == posicao[12][0] && PosY == posicao[12][1]) || (PosX == posicao[31][0] && PosY == posicao[31][1]) || (PosX == posicao[36][0] && PosY == posicao[36][1]) || (PosX == posicao[41][0] && PosY == posicao[41][1]) || (PosX == posicao[51][0] && PosY == posicao[51][1])) { 
						if (TimePlayer == VezJogador_LOCAL) {
							ID_CE = 1;
							Imprevistos(PosX, PosY);
						} else {
							ID_CE = 0;
							document.getElementById("Div_Casa_Especial").style.visibility = "visible";
						}
					} else {
						TimePlayer = VezOnline;
						setTimeout(function(){IluminarNome(TimePlayer);}, 1000);
						if(TimePlayer == VezJogador_LOCAL){
							DadoClicked[1] = 0; //JOGA DADO
							document.getElementById("Dice").disabled = false;
						} else {
							DadoClicked[1] = 1; //NÃO JOGA DADO
						}
					}
					break;
				case 4:
					DrawPieces(Four.MapSpace);
					
					var PosX = posicao[Four.MapSpace][0];
					var PosY = posicao[Four.MapSpace][1];
					if( (PosX == posicao[1][0] && PosY == posicao[1][1]) || (PosX == posicao[4][0] && PosY == posicao[4][1]) || (PosX == posicao[9][0] && PosY == posicao[9][1]) || (PosX == posicao[14][0] && PosY == posicao[14][1]) || (PosX == posicao[17][0] && PosY == posicao[17][1]) || (PosX == posicao[20][0] && PosY == posicao[20][1]) || (PosX == posicao[23][0] && PosY == posicao[23][1]) || (PosX == posicao[26][0] && PosY == posicao[26][1]) || (PosX == posicao[29][0] && PosY == posicao[29][1]) || (PosX == posicao[34][0] && PosY == posicao[34][1]) || (PosX == posicao[38][0] && PosY == posicao[38][1]) || (PosX == posicao[44][0] && PosY == posicao[44][1]) || (PosX == posicao[47][0] && PosY == posicao[47][1]) || (PosX == posicao[49][0] && PosY == posicao[49][1]) || (PosX == posicao[53][0] && PosY == posicao[53][1])){
						if (TimePlayer == VezJogador_LOCAL) {
							ID_CE = 1;
							setTimeout(function(){Question(posicao[Four.MapSpace][0], posicao[Four.MapSpace][1]);}, 1000);
						} else {
							ID_CE = 0;
							document.getElementById("Div_Casa_Especial").style.visibility = "visible";
						}
					}  else if( (PosX == posicao[7][0] && PosY == posicao[7][1]) || (PosX == posicao[12][0] && PosY == posicao[12][1]) || (PosX == posicao[31][0] && PosY == posicao[31][1]) || (PosX == posicao[36][0] && PosY == posicao[36][1]) || (PosX == posicao[41][0] && PosY == posicao[41][1]) || (PosX == posicao[51][0] && PosY == posicao[51][1])) { 
						if (TimePlayer == VezJogador_LOCAL) {
							ID_CE = 1;
							Imprevistos(PosX, PosY);
						} else {
							ID_CE = 0;
							document.getElementById("Div_Casa_Especial").style.visibility = "visible";
						}
					} else {
						TimePlayer = VezOnline;
						setTimeout(function(){IluminarNome(TimePlayer);}, 1000);
						if(TimePlayer == VezJogador_LOCAL){
							DadoClicked[1] = 0; //JOGA DADO
							document.getElementById("Dice").disabled = false;
						} else {
							DadoClicked[1] = 1; //NÃO JOGA DADO
						}
					}
					break;
				default:
					console.log("Erro");
					break;
			}
			
			setTimeout(function(){document.getElementById("Dice").src = "../ImgsOfficial/Game/Dice/Dice.gif";}, 1000);
			EndGame();
		}
	}
}

//Função para obter os dados iniciais antes de começar o jogo
function DadosIniciais(){
	try{
		if(Info_PHP[0]=="Dado"){ //SEGUNDA VEZ ACIONADO O DADO
			VezOnline=Info_PHP[2];
			Comand = Info_PHP[0];
			Info_PHP=Info_PHP[1];
		}else if(Info_PHP[0]=="Iniciar_Jogo") { //PRIMEIRA VEZ ACIONADO O DADO
			document.getElementById("Div_Sala").style.visibility = "hidden"; //RETIRAR DA TELA O DIV QUE MOSTRA A SALA
			
			JogadorInicial(Info_PHP[1]); //DIV que anunciará o primeiro jogador do jogo
			IluminarNome(Info_PHP[1]); //Iluminar o nome do cara que for a vez
			TimePlayer = Info_PHP[1]; //Settando vez para todos os jogadores
			if(Info_PHP[1] == VezJogador_LOCAL){ // Bloquear o dado para quem não merece começar
				DadoClicked[1] = 0;
			} else {
				DadoClicked[1] = 1;
			}
			//Informação a ser passada a todos os jogadores, para poderem usar o dado normalmente
			if((VezJogador_LOCAL != 1)) {
			DadoClicked[0] = true;
			}
		}else if (Info_PHP[0] == "Resp_Fec"){ //PERGUNTA/IMPREVISTO
			
			if(TimePlayer != VezJogador_LOCAL){ //FECHAR DIV PROS DEMAIS JOGADORES
				document.getElementById("Div_Casa_Especial").style.visibility = "hidden";
			}
			
			//REDESENHAR NOVAS POSIÇÕES E COLOCAR NOVAS PONTUAÇÕES
			LimparCanvas();
			Comand = Info_PHP[0];
			Info_PHP = Info_PHP[1];
			if(TimePlayer == 1){One.Score=Info_PHP[IndexJSON].jogadores[0].pontuacao; document.getElementById("PontosJogadorVerde").innerHTML = One.Score.toFixed(0); One.MapSpace=Info_PHP[IndexJSON].jogadores[0].posicao; DrawPieces(One.MapSpace);}
			else if(TimePlayer == 2){Two.Score=Info_PHP[IndexJSON].jogadores[1].pontuacao; document.getElementById("PontosJogadorVermelho").innerHTML = Two.Score.toFixed(0); Two.MapSpace=Info_PHP[IndexJSON].jogadores[1].posicao; DrawPieces(Two.MapSpace);}
			else if(TimePlayer == 3){Three.Score=Info_PHP[IndexJSON].jogadores[2].pontuacao;document.getElementById("PontosJogadorAzul").innerHTML = Three.Score.toFixed(0); Three.MapSpace=Info_PHP[IndexJSON].jogadores[2].posicao;DrawPieces(Three.MapSpace);}
			else if(TimePlayer == 4){Four.Score=Info_PHP[IndexJSON].jogadores[3].pontuacao; document.getElementById("PontosJogadorAmarelo").innerHTML = Four.Score.toFixed(0); Four.MapSpace=Info_PHP[IndexJSON].jogadores[3].posicao; DrawPieces(Four.MapSpace);}
			
			//PASSAR A VEZ DOS JOGADORES
			TimePlayer = VezOnline;
			if(TimePlayer>quantidadeJogadores){
				TimePlayer=1;
			}
			setTimeout(function(){IluminarNome(TimePlayer);}, 1000);
			if(TimePlayer == VezJogador_LOCAL){
				DadoClicked[1] = 0; //JOGA DADO
				document.getElementById("Dice").disabled = false;
			} else {
				DadoClicked[1] = 1; //NÃO JOGA DADO
			}
		}else{
			//Variavel for
			var x,y;
			//AQUI VAI OBTER OS IDS DAS SALAS CRIADOS, OS JOGOS ATIVOS E A QUANTIDADE DE JOGADORES POR SALA CRIADA
			for (x = 0; x < Info_PHP.length; x++) {
				ID_Sala_PHP[x] = Info_PHP[x].id;
				Cenario_PHP[x] = Info_PHP[x].cenario;
				JogoAtivo_PHP[x] = Info_PHP[x].iniciado;
				quantidadeJogadores_PHP[x] = Object.keys(Info_PHP[x].jogadores).length;
			}
			
			//AQUI VAI ZERAR OS IDS DAS SALAS, JOGOS ATIVOS, QUANTIDADE DE JOGADORES E NOMES POR SALA QUANDO NÃO HOUVEREM INFORMAÇÕES
			if(Info_PHP.length == 0){
				ID_Sala_PHP = [];
				JogoAtivo_PHP = [];
				quantidadeJogadores_PHP = [];
			}
			
			if((Comand == "Novo_Jogo") && (Z == 0)) {
			lenJogo = ID_Sala_PHP.length;
			if(lenJogo == 1){
				ID_Sala = ID_Sala_PHP[0]; 
			} else {
				ID_Sala = ID_Sala_PHP[lenJogo - 1];
			}
			Z = 1;
			}
			
			//AQUI VAI OBTER O NOME DOS JOGADORES A PARTIR DO ID DA SALA
			IndexJSON = ID_Sala_PHP.indexOf(ID_Sala);
			document.getElementById("Num_Sala").innerHTML = ID_Sala_PHP[IndexJSON]; //ATRIBUIR O NÚMERO DA SALA NO DIV
			
			//INFORMAÇÕES REPASSADAS DE CADA UM DOS JOGADORES
			try{
			One.Score=Info_PHP[IndexJSON].jogadores[0].pontuacao;
			One.MapSpace=Info_PHP[IndexJSON].jogadores[0].posicao;
			document.getElementById("PontosJogadorVerde").innerHTML = One.Score.toFixed(0);
			}catch{}
			try{
			Two.Score=Info_PHP[IndexJSON].jogadores[1].pontuacao;
			Two.MapSpace=Info_PHP[IndexJSON].jogadores[1].posicao;
			document.getElementById("PontosJogadorVermelho").innerHTML = Two.Score.toFixed(0);
			}catch{}
			try{
			Three.Score=Info_PHP[IndexJSON].jogadores[2].pontuacao;
			Three.MapSpace=Info_PHP[IndexJSON].jogadores[2].posicao;
			document.getElementById("PontosJogadorAzul").innerHTML = Three.Score.toFixed(0);
			}catch{}
			try{
			Four.Score=Info_PHP[IndexJSON].jogadores[3].pontuacao;
			Four.MapSpace=Info_PHP[IndexJSON].jogadores[3].posicao;
			document.getElementById("PontosJogadorAmarelo").innerHTML = Four.Score.toFixed(0);
			}catch{}
			
			try{
			var W;
			for(W = 0;W<Info_PHP[IndexJSON].jogadores.length;W++){
				if(Info_PHP[IndexJSON].jogadores[W].nome == document.getElementById("P1").value){
					VezJogador_LOCAL = Info_PHP[IndexJSON].jogadores[W].id;
				}
			}
			} catch{
				console.log("Ainda não iniciou o jogo");
			}
				
			for (y=0; y < quantidadeJogadores_PHP[IndexJSON]; y++) {
				if(Info_PHP[IndexJSON].jogadores[y] != undefined){
					Nick_Player_PHP[y] = Info_PHP[IndexJSON].jogadores[y].nome;
				} 
				else {
					y += 1;
					if(y == 5) { y=0}
					if(Info_PHP[IndexJSON].jogadores[y] != undefined){
						Nick_Player_PHP[y] = Info_PHP[IndexJSON].jogadores[y].nome;
					}
				}
			}
			if(Info_PHP[IndexJSON].iniciado==false){
				//AQUI VAI DESENHAR OS PEOES ANTES DE COMEÇAR O JOGO
				if(Info_PHP[IndexJSON] != undefined) {
					Canvas = document.getElementById("TPC");
					ctx = Canvas.getContext("2d");
					
					LimparCanvas();
					if(Info_PHP[IndexJSON].jogadores[0] != undefined){
						// peão Verde
						ImgV1 = new Image();
						ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";	
						
						ImgV1.onload = function() {
							ctx.drawImage(ImgV1,posGreen[0][0],posGreen[0][1]);
						}
					}
					
					if(Info_PHP[IndexJSON].jogadores[1] != undefined){
						// peão Vermelho
						ImgVrm1 = new Image();
						ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
						
						ImgVrm1.onload = function() {
							ctx.drawImage(ImgVrm1,posRed[0][0],posRed[0][1]);
						}
					}
					
					if(Info_PHP[IndexJSON].jogadores[2] != undefined){
						// peão Azul
						ImgAz1 = new Image();
						ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
						
						ImgAz1.onload = function() {
							ctx.drawImage(ImgAz1,posBlue[0][0],posBlue[0][1]);
						}
					}
					
					if(Info_PHP[IndexJSON].jogadores[3] != undefined){
						// peão Amarelo/ROXO
						ImgA1 = new Image();
						ImgA1.src = "../ImgsOfficial/Game/Pieces/Mas2Local.png";
						
						ImgA1.onload = function() {
							ctx.drawImage(ImgA1,posYellow[0][0],posYellow[0][1]);
						}
					}
				}
			} else if(Info_PHP[IndexJSON].iniciado==true){
				if(Info_PHP[IndexJSON].vez == 0){
					Canvas = document.getElementById("TPC");
					ctx = Canvas.getContext("2d");
					quantidadeJogadores = quantidadeJogadores_PHP[IndexJSON];
					
					if(quantidadeJogadores == 1) { //Terminar partida, pois todos os jogadores sairam após iniciado o jogo'
						console.log("TODOS OS JOGADORES SAIRAM DA SALA. FIM DE JOGO!");
						window.location.href = "../index.html";
					}
		
					if(TimePlayer > quantidadeJogadores){ // Reorganizar vez e iluminar nome após um jogador sair
						TimePlayer = 1;
						IluminarNome(TimePlayer);
						Comand = "";
					}

					if(ID_CE == 1){ //SE QUEM SAIU FOI O JOGADOR QUE ESTAVA RESPONDENDO A PERGUNTA
						document.getElementById("Div_Casa_Especial").style.visibility = "hidden"; // DIV DA PERG/IMPREV
						if(TimePlayer == VezJogador_LOCAL){ // Bloquear o dado para quem não merece começar
							DadoClicked[1] = 0;
							document.getElementById("Dice").disabled = true;
						} else {
							DadoClicked[1] = 1;
						}
					}
					LimparCanvas();
					switch(quantidadeJogadores){
						case 2:
							// peão Verde
							ImgV1 = new Image();
							ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";	
							
							ImgV1.onload = function() {
								ctx.drawImage(ImgV1,posGreen[0][0],posGreen[0][1]);
							}
							// peão Vermelho
							ImgVrm1 = new Image();
							ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
							
							ImgVrm1.onload = function() {
								ctx.drawImage(ImgVrm1,posRed[0][0],posRed[0][1]);
							}
							break;
						case 3:
							// peão Verde
							ImgV1 = new Image();
							ImgV1.src = "../ImgsOfficial/Game/Pieces/Mas1Local.png";	
							
							ImgV1.onload = function() {
								ctx.drawImage(ImgV1,posGreen[0][0],posGreen[0][1]);
							}
							// peão Vermelho
							ImgVrm1 = new Image();
							ImgVrm1.src = "../ImgsOfficial/Game/Pieces/Fem2Local.png";
							
							ImgVrm1.onload = function() {
								ctx.drawImage(ImgVrm1,posRed[0][0],posRed[0][1]);
							}
							// peão Azul
							ImgAz1 = new Image();
							ImgAz1.src = "../ImgsOfficial/Game/Pieces/Fem1Local.png";
							
							ImgAz1.onload = function() {
								ctx.drawImage(ImgAz1,posBlue[0][0],posBlue[0][1]);
							}
							break;
						default:
							console.log("Erro ao jogador sair da sala após início de jogo!");
							break;
					}
				} else if(Info_PHP[IndexJSON].vez != 0){
					//Canvas = document.getElementById("TPC");
					//ctx = Canvas.getContext("2d");
					quantidadeJogadores = quantidadeJogadores_PHP[IndexJSON];
					
					if(quantidadeJogadores == 1) { //Terminar partida, pois todos os jogadores sairam após iniciado o jogo'
						console.log("TODOS OS JOGADORES SAIRAM DA SALA. FIM DE JOGO!");
						window.location.href = "../index.html";
					}
					
					if(TimePlayer > quantidadeJogadores){ // Reorganizar vez e iluminar nome após um jogador sair
						TimePlayer = 1;
						IluminarNome(TimePlayer);
						Comand = "";
						LimparCanvas();
						DrawPieces(One.MapSpace);
					}else{
						LimparCanvas();
						switch(TimePlayer){
							case 1:
								DrawPieces(One.MapSpace);
								break;
							case 2:
								DrawPieces(Two.MapSpace);
								break;
							case 3:
								DrawPieces(Three.MapSpace);
								break;
							default:
								console.log("Deu merda, seu frango");
								break;
						}
					}
					if(TimePlayer == VezJogador_LOCAL){ // Bloquear o dado para quem não merece começar
						DadoClicked[1] = 0;
						document.getElementById("Dice").disabled = false;
					} else {
						DadoClicked[1] = 1;
					}
					/*LimparCanvas();
					switch(quantidadeJogadores){
					case 2:
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
						break;
					case 3:
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
							ctx.drawImage(ImgAz1,posicao[Three.MapSpace][0],posicao[Three.MapSpace][1]);
						}
						break;
					default:
						console.log("Erro ao jogador sair da sala após início de jogo!");
						break;
					}*/
				}
			}
		}
	}catch{}
	console.log(ID_Sala_PHP);
	console.log(Cenario_PHP);
	console.log(quantidadeJogadores_PHP);
	console.log(Nick_Player_PHP);
}

//Função para adicionar os nomes dos jogadores que entrar na sala
function SetarNomes(){
	
	if ((ID_Sala_PHP.includes(ID_Sala) == true) && (quantidadeJogadores_PHP[IndexJSON] > 1)) {
		switch (quantidadeJogadores_PHP[IndexJSON]){
						case 2:
							QualJogadorNaSala();
							break;
						case 3:
							QualJogadorNaSala();
							break;
						case 4:
							QualJogadorNaSala();
							break;
						default:
							console.log("Erro ao setar nome!!");
							break;
					}
	}
	if ((ID_Sala_PHP.includes(ID_Sala) == true) && (quantidadeJogadores_PHP[IndexJSON] == 1)) {
		QualJogadorNaSala();
	}
}

//2° parte da função do dado online
function DiceOn(){
	
	//CONDIÇÃO PARA IMPEDIR O JOGADOR DE ACIONAR O DADO UMA SEGUNDA VEZ SEGUIDA
	if((DadoClicked[0] == true) && (DadoClicked[1] == 1)){
		DadoClicked[1] == 0;
		document.getElementById("Dice").disabled = true;
	}
	
	//Funcionalidade padrão do dado
	if ((DadoClicked[0] == true) && (DadoClicked[1] == 0)) {
		
		//Musica
		document.getElementById("diceSound").play();
		//Aqui gera um número aleatório para o dado e altera o comando "DADO"
		Dado = Math.floor((Math.random()*6) + 1);
		Comand = "Dado";
		
		switch(TimePlayer){
			
			case 1:
				One.Dice = Dado;
				Walk(1, Dado);
				Score(1, Dado);
				JSON_DATA = {One, ID_Sala, Comand, TimePlayer};
				
				conn.send(JSON.stringify(JSON_DATA));			
				break;
				
			case 2:
				Two.Dice = Dado;
				Walk(2, Dado);
				Score(2, Dado);
				JSON_DATA = {Two, ID_Sala, Comand, TimePlayer};
				
				conn.send(JSON.stringify(JSON_DATA));
				break;
				
			case 3:
				Three.Dice = Dado;
				Walk(3, Dado);
				Score(3, Dado);
				JSON_DATA = {Three, ID_Sala, Comand, TimePlayer};
				
				conn.send(JSON.stringify(JSON_DATA));
				break;
				
			case 4:
				Four.Dice = Dado;
				Walk(4, Dado);
				Score(4, Dado);
				JSON_DATA = {Four, ID_Sala, Comand, TimePlayer};
				
				conn.send(JSON.stringify(JSON_DATA));
				break;
				
			default:
				console.log("ERRO DADO!!");
				break;
		}
		//VARIÁVEL QUE IMPEDE O JOGADOR DE ACIONAR O DADO UMA SEGUNDA VEZ
		DadoClicked[1] = 1;
	}
}

//----------------------------------------------------------------
//----------------------------------------------------------------

//FUNÇÃO Fechar Imprevisto MODO ONLINE
function CloseImprevistosOnline(){
	switch(TimePlayer){
		case 1:
			One.MapSpace -= QtdVoltas;
			Comand = "Responder_Fechar";
			
			JSON_DATA = {One, ID_Sala, Comand};
			conn.send(JSON.stringify(JSON_DATA));
			break;
		case 2:
			Two.MapSpace -= QtdVoltas;
			Comand = "Responder_Fechar";
			
			JSON_DATA = {Two, ID_Sala, Comand};
			conn.send(JSON.stringify(JSON_DATA));
			break;
		case 3:
			Three.MapSpace -= QtdVoltas;
			Comand = "Responder_Fechar";
			
			JSON_DATA = {Three, ID_Sala, Comand};
			conn.send(JSON.stringify(JSON_DATA));
			break;
		case 4:
			Four.MapSpace -= QtdVoltas;
			Comand = "Responder_Fechar";
			
			JSON_DATA = {Four, ID_Sala, Comand};
			conn.send(JSON.stringify(JSON_DATA));
			break;
		default:
			console.log("Erro nos Imprevistos");
			break;
	}
	QtdVoltas=0;
}

//FUNÇÃO Fechar Pergunta MODO ONLINE
function AnswersOnline(EscolhaDoUsuario){
	
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
			console.log("Erro na escolha da resposta!");
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
				Comand = "Responder_Fechar";
				
				JSON_DATA = {One, ID_Sala, Comand};
				conn.send(JSON.stringify(JSON_DATA));
				break;
			case 2:
				Two.Score += PtsQuestion;
				Comand = "Responder_Fechar";
				
				JSON_DATA = {Two, ID_Sala, Comand};
				conn.send(JSON.stringify(JSON_DATA));
				break;
			case 3:
				Three.Score += PtsQuestion;
				Comand = "Responder_Fechar";
				
				JSON_DATA = {Three, ID_Sala, Comand};
				conn.send(JSON.stringify(JSON_DATA));
				break;
			case 4:
				Four.Score += PtsQuestion;	
				Comand = "Responder_Fechar";
				
				JSON_DATA = {Four, ID_Sala, Comand};
				conn.send(JSON.stringify(JSON_DATA));
				break;
		}
		
		switch(EscolhaDoUsuario){
			case 0:
			document.getElementById("R1").style.backgroundColor= "Green";
				setTimeout(function(){document.getElementById("R1").style.backgroundColor= "#00cec9";CloseCorrecao();}, 1000);
				break;
			case 1:
				document.getElementById("R2").style.backgroundColor= "Green";
				setTimeout(function(){document.getElementById("R2").style.backgroundColor= "#00cec9";CloseCorrecao();}, 1000);
				break;
			case 2:
				document.getElementById("R3").style.backgroundColor= "Green";
				setTimeout(function(){document.getElementById("R3").style.backgroundColor= "#00cec9";CloseCorrecao();}, 1000);
				break;
			case 3:
				document.getElementById("R4").style.backgroundColor= "Green";
				setTimeout(function(){document.getElementById("R4").style.backgroundColor= "#00cec9";CloseCorrecao();}, 1000);
				break;
			default:
				console.log("Erro na escolha da resposta!");
				break;
		}
		
		PtsQuestion = 500; //Ao final, deve-se devolver os pontos iniciais a variável
	} else{
		document.getElementById('failSound').play();
		//Pontuação por jogador
		switch(TimePlayer){
			case 1:
				One.Score -= 250;
				Comand = "Responder_Fechar";
				
				JSON_DATA = {One, ID_Sala, Comand};
				conn.send(JSON.stringify(JSON_DATA));
				break;
			case 2:
				Two.Score -= 250;
				Comand = "Responder_Fechar";
				
				JSON_DATA = {Two, ID_Sala, Comand};
				conn.send(JSON.stringify(JSON_DATA));
				break;
			case 3:
				Three.Score -= 250;
				Comand = "Responder_Fechar";
				
				JSON_DATA = {Three, ID_Sala, Comand};
				conn.send(JSON.stringify(JSON_DATA));
				break;
			case 4:
				Four.Score -= 250;	
				Comand = "Responder_Fechar";
				
				JSON_DATA = {Four, ID_Sala, Comand};
				conn.send(JSON.stringify(JSON_DATA));
				break;
		}
		
		switch(EscolhaDoUsuario){
			case 0:
			document.getElementById("R1").style.backgroundColor= "Red";
				setTimeout(function(){document.getElementById("R1").style.backgroundColor= "#00cec9"; document.getElementById("blockDica").style.visibility = "hidden"; document.getElementById("perguntas").style.visibility = "hidden";}, 1000);
				break;
			case 1:
				document.getElementById("R2").style.backgroundColor= "Red";
				setTimeout(function(){document.getElementById("R2").style.backgroundColor= "#00cec9"; document.getElementById("blockDica").style.visibility = "hidden"; document.getElementById("perguntas").style.visibility = "hidden";}, 1000);
				break;
			case 2:
				document.getElementById("R3").style.backgroundColor= "Red";
				setTimeout(function(){document.getElementById("R3").style.backgroundColor= "#00cec9"; document.getElementById("blockDica").style.visibility = "hidden"; document.getElementById("perguntas").style.visibility = "hidden";}, 1000);
				break;
			case 3:
				document.getElementById("R4").style.backgroundColor= "Red";
				setTimeout(function(){document.getElementById("R4").style.backgroundColor= "#00cec9"; document.getElementById("blockDica").style.visibility = "hidden"; document.getElementById("perguntas").style.visibility = "hidden";}, 1000);
				break;
			default:
				console.log("Erro na escolha da resposta!");
				break;
		}
	}
}

//FUNÇÃO Fim Cronometro MODO ONLINE
function FimCronometroOnline(P_I){
	if(Temporizador == true){
		if (P_I == 0) {
			document.getElementById('failSound').play();
				switch(TimePlayer){
					case 1:
					One.Score -= 250;
					Comand = "Responder_Fechar";
			
					JSON_DATA = {One, ID_Sala, Comand};
					conn.send(JSON.stringify(JSON_DATA));
					break;
				case 2:
					Two.Score -= 250;
					Comand = "Responder_Fechar";
			
					JSON_DATA = {Two, ID_Sala, Comand};
					conn.send(JSON.stringify(JSON_DATA));
					break;
				case 3:
					Three.Score -= 250;
					Comand = "Responder_Fechar";
			
					JSON_DATA = {Three, ID_Sala, Comand};
					conn.send(JSON.stringify(JSON_DATA));
					break;
				case 4:
					Four.Score -= 250;
					Comand = "Responder_Fechar";
			
					JSON_DATA = {Four, ID_Sala, Comand};
					conn.send(JSON.stringify(JSON_DATA));
					break;
				default:
					console.log("Erro ao finalizar cronometro!");
					break;
			}
			setTimeout(function(){document.getElementById("perguntas").style.visibility = "hidden";}, 1000);
		} else if(P_I == 1){
			CloseImprevistos();
		}
	}
	clearTimeout(timeTimeout);
	Temporizador = false;
}

//FUNÇÃO PARA ATUALIZAR O TRÁFEGO DE JOGADORES NA SALA
function QualJogadorNaSala(){
	if(Info_PHP[IndexJSON].jogadores[0] == undefined){
		Nick_Player_PHP[0] = "";
		//LimparCanvas();
	}
	if(Info_PHP[IndexJSON].jogadores[1] == undefined){
		Nick_Player_PHP[1] = "";
		//LimparCanvas();
	}
	if(Info_PHP[IndexJSON].jogadores[2] == undefined){
		Nick_Player_PHP[2] = "";
		//LimparCanvas();
	}
	if(Info_PHP[IndexJSON].jogadores[3] == undefined){
		Nick_Player_PHP[3] = "";
		//LimparCanvas();
	}
		
	if (Nick_Player_PHP[0].length != 0){
		One.Nick = Nick_Player_PHP[0];
		document.getElementById("NomeJogadorVerde").innerHTML = One.Nick;
	}
	if (Nick_Player_PHP[1].length != 0){
		Two.Nick = Nick_Player_PHP[1];
		document.getElementById("NomeJogadorVermelho").innerHTML = Two.Nick;
	}
	if (Nick_Player_PHP[2].length != 0){
		Three.Nick = Nick_Player_PHP[2];
		document.getElementById("NomeJogadorAzul").innerHTML = Three.Nick;
	}
	if (Nick_Player_PHP[3].length != 0){
		Four.Nick = Nick_Player_PHP[3];
		document.getElementById("NomeJogadorAmarelo").innerHTML = Four.Nick;
	}
//-------------------------------------------------------------------------------
	if (Nick_Player_PHP[0].length == 0){
		One.Nick = Nick_Player_PHP[0];
		document.getElementById("NomeJogadorVerde").innerHTML = "VAZIO";
		One.Score = 0;	
		document.getElementById("PontosJogadorVerde").innerHTML = One.Score.toFixed(0);
	}
	if (Nick_Player_PHP[1].length == 0){
		Two.Nick = Nick_Player_PHP[1];
		document.getElementById("NomeJogadorVermelho").innerHTML = "VAZIO";		
		Two.Score = 0;		
		document.getElementById("PontosJogadorVermelho").innerHTML = Two.Score.toFixed(0);
	}
	if (Nick_Player_PHP[2].length == 0){
		Three.Nick = Nick_Player_PHP[2];
		document.getElementById("NomeJogadorAzul").innerHTML = "VAZIO";
		Three.Score = 0;		
		document.getElementById("PontosJogadorAzul").innerHTML = Three.Score.toFixed(0);
	}
	if (Nick_Player_PHP[3].length == 0){
		Four.Nick = Nick_Player_PHP[3];
		document.getElementById("NomeJogadorAmarelo").innerHTML = "VAZIO";
		Four.Score = 0;	
		document.getElementById("PontosJogadorAmarelo").innerHTML = Four.Score.toFixed(0);
	}
}

//Função do Start para a modalidade online
function StartOnline(){
	document.getElementById("NomeJogadorVerde").innerHTML = "VAZIO";
	document.getElementById("NomeJogadorVermelho").innerHTML = "VAZIO";
	document.getElementById("NomeJogadorAzul").innerHTML = "VAZIO";
	document.getElementById("NomeJogadorAmarelo").innerHTML = "VAZIO";
	DadoClicked[1] = 0;
	DadoClicked[0] = false;
	jogoOnlineIniciado = true;
	
	//CRIAR SALA
	if(Comand == "Novo_Jogo") {
		
		One.Nick = document.getElementById("P1").value;
		document.getElementById("NomeJogadorVerde").innerHTML = One.Nick;

		JSON_DATA = {One, Cenario, ID_Sala, Comand};
		conn.send(JSON.stringify(JSON_DATA));
				
		ID_Sala = undefined;
		//AQUI VAI FAZER O DOWNLOAD DAS INFORMAÇÕES DOS PATRIMONIOS E DEIXAR INVISÍVEL O DIV STARTING
		AjaxInicial();
	}
	
	//PARTICIPAR DE SALA EXISTENTE
	else if (Comand == "Jogo_Existente"){
		ID_Sala = ID_Sala;
		
		//Checa se exisfte o id da sala
		if (ID_Sala_PHP.includes(ID_Sala) == true){
			
			IndexJSON = ID_Sala_PHP.indexOf(ID_Sala);
			
			//Checa se o jogo já se iniciou
			if(JogoAtivo_PHP[IndexJSON] == true) {
				alert("Esta partida já está em andamento");
				document.getElementById("buttonSend").disabled = false;
			}
			
			//Se o jogo ainda não tiver iniciado
			else{
				//chega se a sala está cheia
				if (quantidadeJogadores_PHP[IndexJSON] == 4) {
					alert ("SALA CHEIA");
					document.getElementById("buttonSend").disabled = false;
				} 
				//Aqui entra caso a sala esteja menor que 4
				else {
					//Check de id existentes na sala atual
					var check=0;
					var checkSala;
					var checkIds=[];
					var checkNomes=[];
					for(check;check<=Info_PHP.length;check++){
						if(Info_PHP[check].id==ID_Sala){
							checkSala=Info_PHP[check];
							break;
						}
					}
					check=0;
					for(check;check<checkSala.jogadores.length;check++){
						checkIds.push(checkSala.jogadores[check].id);
						checkNomes.push(checkSala.jogadores[check].nome);
					}
					if(!checkIds.includes(1)){
						check=1;
					}else if(!checkIds.includes(2)){
						check=2;
					}else if(!checkIds.includes(3)){
						check=3;
					}else if(!checkIds.includes(4)){
						check=4;
					}else{
						check=0;
					}
					switch (check){
						case 1:
							if(checkNomes.includes(document.getElementById("P1").value)){
								alert("Nome existente!");
								document.getElementById("buttonSend").disabled = false;
							} else{
								VezJogador_LOCAL = 1;
								//AQUI VAI FAZER O DOWNLOAD DAS INFORMAÇÕES DOS PATRIMONIOS E DEIXAR INVISÍVEL O DIV STARTING
								AjaxInicial();
								One.Nick = document.getElementById("P1").value;
								document.getElementById("NomeJogadorVerde").innerHTML = One.Nick;
								
								JSON_DATA = {One, Cenario, ID_Sala, Comand};
								conn.send(JSON.stringify(JSON_DATA));
							}
								break;
						case 2:
							if(checkNomes.includes(document.getElementById("P1").value)){
								alert("Nome existente!");
								document.getElementById("buttonSend").disabled = false;
							} else {
								VezJogador_LOCAL = 2;
								//AQUI VAI FAZER O DOWNLOAD DAS INFORMAÇÕES DOS PATRIMONIOS E DEIXAR INVISÍVEL O DIV STARTING
								AjaxInicial();
								One.Nick = Nick_Player_PHP[0];
								document.getElementById("NomeJogadorVerde").innerHTML = One.Nick;
								
								Two.Nick = document.getElementById("P1").value;
								document.getElementById("NomeJogadorVermelho").innerHTML = Two.Nick;
								
								JSON_DATA = {Two, Cenario, ID_Sala, Comand};
								conn.send(JSON.stringify(JSON_DATA));
							}
							break;
						case 3:
							if(checkNomes.includes(document.getElementById("P1").value)){
								alert("Nome existente!");
								document.getElementById("buttonSend").disabled = false;
							} else{
								VezJogador_LOCAL = 3;
								//AQUI VAI FAZER O DOWNLOAD DAS INFORMAÇÕES DOS PATRIMONIOS E DEIXAR INVISÍVEL O DIV STARTING
								AjaxInicial();
								One.Nick = Nick_Player_PHP[0];
								document.getElementById("NomeJogadorVerde").innerHTML = One.Nick;
								
								Two.Nick = Nick_Player_PHP[1];
								document.getElementById("NomeJogadorVermelho").innerHTML = Two.Nick;
								
								Three.Nick = document.getElementById("P1").value;
								document.getElementById("NomeJogadorAzul").innerHTML = Three.Nick;
								
								JSON_DATA = {Three, Cenario, ID_Sala, Comand};
								conn.send(JSON.stringify(JSON_DATA));
							}
							break;
						case 4:
							if(checkNomes.includes(document.getElementById("P1").value)){
								alert("Nome existente!");
								document.getElementById("buttonSend").disabled = false;
							} else {
								VezJogador_LOCAL = 4;
								//AQUI VAI FAZER O DOWNLOAD DAS INFORMAÇÕES DOS PATRIMONIOS E DEIXAR INVISÍVEL O DIV STARTING
								AjaxInicial();
								One.Nick = Nick_Player_PHP[0];
								document.getElementById("NomeJogadorVerde").innerHTML = One.Nick;
								
								Two.Nick = Nick_Player_PHP[1];
								document.getElementById("NomeJogadorVermelho").innerHTML = Two.Nick;
								
								Three.Nick = Nick_Player_PHP[2];
								document.getElementById("NomeJogadorAzul").innerHTML = Three.Nick;
								
								Four.Nick = document.getElementById("P1").value;
								document.getElementById("NomeJogadorAmarelo").innerHTML = Four.Nick;
								
								JSON_DATA = {Four, Cenario, ID_Sala, Comand};
								conn.send(JSON.stringify(JSON_DATA));
							}
							break;
						default:
							alert("Erro iniciar jogo (Jogador não identificado)!!");
							document.getElementById("buttonSend").disabled = false;
							break;
					}
				}			
			}
		
		} 
		
		//ID da sala não existe
		else {
			alert("ID DA SALA INVÁLIDO");
			document.getElementById("buttonSend").disabled = false;
		}
	}
}

//1° parte da função do dado online
function DiceOnline(){
	
	//SEGUNDA VEZ CLICADO (INICIA O DADO ONLINE)
	if (DadoClicked[0] == true){
		DiceOn();
	}
	//PRIMEIRA VEZ CLICADO (ATRIBUI A VEZ DO JOGADOR E ALTERA PARA A IMG DO DADO)
	else if(DadoClicked[0] == false){		
		if((VezJogador_LOCAL == 1)){
			if (quantidadeJogadores_PHP[IndexJSON] > 1) {
			TimePlayer = Math.floor((Math.random() * quantidadeJogadores_PHP[IndexJSON]) + 1);
			Comand = "Iniciar_Jogo";
			JSON_DATA = {Comand, ID_Sala, TimePlayer};
				
			conn.send(JSON.stringify(JSON_DATA));
			DadoClicked[0] = true;
			} else {
				alert("O JOGO SÓ PODERÁ SER INICIADO QUANDO HOUVER, AO MENOS, 2 JOGADORES NA SALA!");
			}
		} else{
			alert("APENAS O 1° JOGADOR PODE INICIAR A PARTIDA!");
		}
		//trocar img
	}
}
