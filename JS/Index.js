var FirstTimeBtMenu = true;

function ChangeButton(Position){
	
	if((Position == 1) && (FirstTimeBtMenu == true)) {
		document.getElementById("BtStart").src = "ImgsOfficial/Menu/BtMenu/btCode.png";
		document.getElementById("BtCenter").src = "ImgsOfficial/Menu/BtMenu/btNewGame.png";
		document.getElementById("BtEnd").src = "ImgsOfficial/Menu/BtMenu/btGaleria.png";

		FirstTimeBtMenu = false;
	} else if((Position == 3) && (FirstTimeBtMenu == false)) {
		window.location.href = "HTML/Galeria.html";
		FirstTimeBtMenu = true;
	} else if((Position == 2) && (FirstTimeBtMenu == true)) {
		$("#BtStart").fadeTo(200,0);
		$("#BtCenter").fadeTo(200,0);
		$("#BtEnd").fadeTo(200,0);		
		
		document.getElementById("BtStart").disabled = true;
		document.getElementById("BtCenter").disabled = true;
		document.getElementById("BtEnd").disabled = true;
		document.getElementById("MenuButtons").style.zIndex = "0";
		document.getElementById("Div_Aux").style.zIndex = "1";
		
		$("#Div_Aux").fadeTo(1000,1);
	
		document.getElementById("Title").innerHTML = "S O B R E";
		document.getElementById("Content").innerHTML = "&#10077;A <b>TRILHA DO PATRIMÔNIO CULTURAL</b> é um jogo online desenvolvido com o objetivo de auxiliar alunos e professores, principalmente da educação básica, ou terceiros interessados de forma lúdica e prazerosa a expandirem seu campo de conhecimento acerca dos patrimonios culturais existente na sua região. &#10078; <br/><br/>" +
		"Eu, Williams Urbano, e a equipe de desenvolvedores lhes desejamos um BOM JOGO! <br/><br/>" +		
		"<h3>CRÉDITOS</h3> <br/>" +
		" Este jogo foi desenvolvido durante o Mestrado em XXXXXX por Williams Urbano <br/><br/>" +
		"DESENVOLVEDORES - Almir Melo & Paulo Francisco";
		
	} else if((Position == 3) && (FirstTimeBtMenu == true)) {
		$("#BtStart").fadeTo(200,0);
		$("#BtCenter").fadeTo(200,0);
		$("#BtEnd").fadeTo(200,0);	
		
		document.getElementById("BtStart").disabled = true;
		document.getElementById("BtCenter").disabled = true;
		document.getElementById("BtEnd").disabled = true;
		document.getElementById("MenuButtons").style.zIndex = "0";
		document.getElementById("Div_Aux").style.zIndex = "1";
		
		$("#Div_Aux").fadeTo(1000,1);
		document.getElementById("Title").innerHTML = "I N S T R U Ç Ã O";
		document.getElementById("Content").innerHTML = " <h3>DISPOSIÇÕES INICIAIS</h3> <br/> " + 
		"&#9673; Cada jogador possuirá um peão com a camisa da sua cor correspondente<strong>.</strong> <br/><br/>" +
		"&#9673; O tabuleiro será composto de 56(cinquenta e seis) casas numeradas, sendo 15(quinze) casas correspondente às perguntas sobre 'patrimônios culturais' e 6(seis) correspondente aos imprevistos<strong>.</strong> <br/><br/>" +
		"&#9673; Para responder a pergunta, será disposto ao jogador quatro alternativas de respostas que ficarão posicionadas logo abaixo da pergunta<strong>.</strong> A cada resposta correta o jogador ganhará '500'(quinhentos) pontos e a cada resposta errada perderá '250'(dozentos e cinquenta) pontos<strong>.</strong> <br/><br/> " +
		"&#9673; Também será dado ao jogador um botão com acesso a três dicas em cada pergunta. Contudo, o jogador que se utilizar deste recurso perderá '100'(cem) pontos do valor que ganharia se acertasse a resposta a cada dica que abrir<strong>.</strong> <br/><br/>" +
		"<h3>OBJETIVO DO JOGO</h3> <br/>" +
		"&#9673; Obter a maior pontuação entre os jogadores da partida durante todo o trajeto pre-estabelicido no tabuleiro<strong>.</strong> <br/><br/>" +
		"&#9673; O jogo terá seu fim no momento em que um dos jogadores alcançar a última casa da trilha. Nesse instante será cálculado quem obteve o maior número de pontos<strong>.</strong> <br/><br/>" +
		"<h3>REGRAS DO JOGO</h3> <br/>" +
		"&#9673; Para não favorecer ninguém, a vez do primeiro jogador será aleatória<strong>.</strong> <br/><br/>" +
		"&#9673; O jogo será iniciado no exato momento em que o primeiro jogador clicar no dado. O número retirado será equivalente a quantidade de casas que poderá avançar<strong>.</strong> <br/><br/>" +
		"&#9673; Cada casa avançada corresponderá a '20'(vinte) pontos adicionais acrescidos a pontuação do jogador<strong>.</strong> <br/></br>" +
		"&#9673; Para ser justo, o jogador que completar o percurso receberá um adicional de '1000'(mil) pontos<strong>.</strong> <br/><br/>" +
		"<h3>SOBREPOSIÇÃO DOS PEÕES</h3> <br/>" +
		"<img src='ImgsOfficial/Game/Pieces/Unisex.png'/> Esta figura ao lado será posta no momento em que mais de um peão ocupar a mesma casa<strong>.</strong> <br/><br/>" +
		"<h3>EXTRAS</h3> <br/>" +
		"<img src='ImgsOfficial/Game/Heritage.png'/> Esta figura ao lado marca as casas correspondente às perguntas<strong>.</strong> <br/><br/>" +
		"<img src='ImgsOfficial/Game/SkullDanger.png'/> Esta figura ao lado marca as casas correspondente aos imprevistos<strong>.</strong> <br/><br/>";
	} else if ((Position == 1) && (FirstTimeBtMenu == false)) {
		window.location.href = "HTML/CodePage.html";
		FirstTimeBtMenu = true;
	} else if ((Position == 2) && (FirstTimeBtMenu == false)) {
		window.location.href = "HTML/Game.html";
		FirstTimeBtMenu = true;
	}
}

function CloseDiv_Aux(){
	$("#Div_Aux").fadeTo(500,0);
	
	$("#BtStart").fadeTo(1000,1);
	$("#BtCenter").fadeTo(1000,1);
	$("#BtEnd").fadeTo(1000,1);
	
	document.getElementById("BtStart").disabled = false;
	document.getElementById("BtCenter").disabled = false;
	document.getElementById("BtEnd").disabled = false;
	document.getElementById("MenuButtons").style.zIndex = "1";
	document.getElementById("Div_Aux").style.zIndex = "0";

}