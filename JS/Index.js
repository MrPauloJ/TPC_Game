var FirstTimeBtMenu = true;

function ChangeButton(Position){
	
	if((Position == 1) && (FirstTimeBtMenu == true)) {
		document.getElementById("BtStart").src = "ImgsOfficial/Menu/BtMenu/btNewGame.png";
		document.getElementById("BtCenter").src = "ImgsOfficial/Menu/BtMenu/btCode.png";
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
		document.getElementById("Content").innerHTML = "&#10077;A <b>TRILHA DO PATRIMÔNIO CULTURAL</b> é um jogo com finalidade pedagógica. Foi elaborado no Mestrado Profissional em Ensino de Históriada da UFPE (ProfHistória) e tem como objetivo favorecer a dinâmica do ensino e da aprendizagem. &#10078; <br/><br/>" +	
		"<h3>CRÉDITOS</h3> <br/>" +
		"<b>DESENVOLVEDORES:</b> <br/><br/>" + " Almir Melo - almir.melo04@gmail.com <br/>" + "Paulo Francisco - paulfsilva7@gmail.com <br/>" + "Williams Urbano - wiilliams@hotmail.com <br/><br/>" + "<b>ARTE:</b> <br/><br/>" + "Mikeias Oliveira";
		
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
		document.getElementById("Title").innerHTML = "J O G A B I L I D A D E";
		document.getElementById("Content").innerHTML = " <h3>GUIA</h3> <br/> " + 
		"&#9673; Cada jogador possui um avatar com uma cor correspondente<strong>.</strong> <br/><br/>" +
		"&#9673; O tabuleiro é composto por 56 casas: sendo 6 imprevistos e 15 que correspondem à temática patrimonial<strong>.</strong> <br/><br/>" +
		"&#9673; Trata-se de um jogo que visa à conquista de casas e de pontos para a obtenção da vitória<strong>.</strong><br/><br/>" +
		"&#9673; Todos os jogadores começarão da casa <i>Início</i><strong>.</strong><br/><br/>" +
		"&#9673; Cada jogador poderá rolar o dado 1 vez por rodada<strong>.</strong> <br/><br/> " +
		"&#9673; Cada casa avançada corresponde a 20 pontos adicionais; cada resposta correta representa um ganho de 500 pontos; e cada resposta incorreta acarreta uma perda de 250 pontos; o jogador que completar o percurso receberá uma bonificação de 1000 pontos<strong>.</strong> <br/><br/>" +
		"&#9673; O jogo terá seu fim quando um dos jogadores alcançar a última casa do tabuleiro<strong>.</strong> <br/><br/>" +
		"&#9673; Vence o jogo o peão que obter a maior pontuação entre os demais<strong>.</strong> <br/><br/>" +
		"<h3>FIGURAS DO JOGO</h3> <br/>" +
		"<img src='ImgsOfficial/Game/Pieces/Unisex.png'/> Esta figura ao lado será posta no momento em que mais de um peão ocupar a mesma casa<strong>.</strong> <br/><br/>" +
		"<img src='ImgsOfficial/Game/Heritage.png'/> Esta figura ao lado marca as casas correspondente às perguntas<strong>.</strong> <br/><br/>" +
		"<img src='ImgsOfficial/Game/SkullDanger.png'/> Esta figura ao lado marca as casas correspondente aos imprevistos<strong>.</strong> <br/><br/>";
	} else if ((Position == 1) && (FirstTimeBtMenu == false)) {
		window.location.href = "HTML/Game.html";

		FirstTimeBtMenu = true;
	} else if ((Position == 2) && (FirstTimeBtMenu == false)) {
		window.location.href = "HTML/CodePage.html";
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