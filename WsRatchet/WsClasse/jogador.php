<?php
class Jogador{
	public $posicao;
	public $socketJogador;
	public $idJogo;
	public $id;
	public $pontuacao;
	public $nome;
	public function __construct($nick, $socketJogador, $cod_jogo){
		try{
			$this->nome=$nick;
			$this->posicao = 0;
            $this->socketJogador = $socketJogador;
            $this->idJogo = $cod_jogo;
            $this->id = 0;
            $this->pontuacao = 0;
		} catch(Exception $e){
			return "Erro ao criar um novo jogador...";
		}
	}
}
?>