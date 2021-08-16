<?php
class Jogo{
	public $jogadores;
	public $cenario;
	public $vez;
	public $id;
	public $iniciado;
	public $dado;
	public function __construct($idGame,$jogador,$cod_cenario) {
		try {
			$this->iniciado=false;
			$this->jogadores = array();
			array_push($this->jogadores, $jogador);
			$this->cenario = $cod_cenario;
			$this->vez = 0;
			$this->id=$idGame;
			$this->dado=0;
		} catch(Exception $e){
			return "Erro ao criar o jogo \n";
		}
	}
	
	public function adicionarJogador($jogador){
		if(count($this->jogadores)<4){
			if($this->iniciado==false){
				array_push($this->jogadores, $jogador);
				return "Jogador adicionado com sucesso! \n";
			}else{
				return "Jogo iniciado! \n";
			}
		} else {
			return "4 jogadores ja foram alocados! \n";
		}
	}
	
	public function removerJogador($jogador){
		try{
			$key = array_search($jogador, $this->jogadores); // Encontra index
			unset($this->jogadores[$key]); // Remove do Array
			$this->jogadores=array_values($this->jogadores);// reindexa
            return "Jogador removido com sucesso!";
		} catch(Exception $e){
			return "Erro ao remover jogador!";
		}
	}
	
	public function vezJogador(){
		$this->vez += 1;
		try{
			if ($this->vez > count($this->jogadores)) {
			$this->vez = 1;
			}
			//Retorna a vez do jogador (OBJ->Jogador)
			return $this->jogadores[$this->vez-1];
		} catch(Exception $e){
	       return "Erro ao resolver vez do jogador! \n";
		}
	}
}
?>