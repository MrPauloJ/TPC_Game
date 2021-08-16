<?php
namespace MyApp;
use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;
require "jogo.php";
require "jogador.php";

class Game_Client implements MessageComponentInterface {
    protected $clients;
	public $jogosAtivos;
	public $idjogo;
	public $idjogadores;

    public function __construct() {
        $this->clients = new \SplObjectStorage;
		$this->idjogo=0;
		$this->idjogadores=0;
		$this->jogosAtivos = array();
		echo "Servidor Ativo! \n";
    }

    public function onOpen(ConnectionInterface $conn) {
        // Store the new connection to send messages to later
        $this->clients->attach($conn);
        echo "Cliente conectado! ({$conn->resourceId})\n";
		foreach($this->clients as $cliente){
			$cliente->send(json_encode($this->jogosAtivos));
		}
    }

    public function onMessage(ConnectionInterface $connection, $msg) {
        $data=$msg;
        $data = json_decode($data);
        if($data->Comand=="Novo_Jogo"){
			$this->idjogo+=1;
			$jogador = new \Jogador($data->One->Nick,$connection,$this->idjogo);
			$jogador->id=1;
            array_push($this->jogosAtivos, new \Jogo($this->idjogo,$jogador,$data->Cenario));
            foreach($this->clients as $cliente){
				$cliente->send(json_encode($this->jogosAtivos));
			}
		}elseif($data->Comand=="Jogo_Existente"){
            try{
				if(array_key_exists("One", json_decode(json_encode($data),true))){
					$jogador = new \Jogador($data->One->Nick,$connection,intval($data->ID_Sala));
					$jogador->id=1;
				}elseif(array_key_exists("Two", json_decode(json_encode($data),true))){
					$jogador = new \Jogador($data->Two->Nick,$connection,intval($data->ID_Sala));
					$jogador->id=2;
				}elseif(array_key_exists("Three", json_decode(json_encode($data),true))){
					$jogador = new \Jogador($data->Three->Nick,$connection,intval($data->ID_Sala));
					$jogador->id=3;
				}elseif(array_key_exists("Four", json_decode(json_encode($data),true))){
					$jogador = new \Jogador($data->Four->Nick,$connection,intval($data->ID_Sala));
					$jogador->id=4;
				}else{
					echo "erro";
				}
                foreach($this->jogosAtivos as $jogo){
                    if($data->ID_Sala==$jogo->id){
                        echo $jogo->adicionarJogador($jogador);
						foreach($this->clients as $cliente){
						$cliente->send(json_encode($this->jogosAtivos));
					}
					}
				}
				
			}catch (Exception $e){
                return "Erro ao adicionar jogador";
			}
        }elseif($data->Comand=="Iniciar_Jogo"){
			foreach($this->jogosAtivos as $jogo){
				if($data->ID_Sala==$jogo->id){
					foreach($jogo->jogadores as $gamer){
						$jogo->iniciado=true;
						$gamer->socketJogador->send(json_encode(array("Iniciar_Jogo", $data->TimePlayer)));
					}
				}
			}
		//AQUI SERÁ PARA QUANDO O JOGADOR RESPONDER A PERGUNTA OU FECHAR O IMPREVISTO
		}elseif($data->Comand=="Responder_Fechar"){
			foreach($this->jogosAtivos as $jogo){
				if($data->ID_Sala==$jogo->id){
					foreach($jogo->jogadores as $gamer){
						try{
							if(array_key_exists("One", json_decode(json_encode($data),true))){
								$jogo->jogadores[0]->posicao=$data->One->MapSpace;
								$jogo->jogadores[0]->pontuacao=$data->One->Score;
							}elseif(array_key_exists("Two", json_decode(json_encode($data),true))){
								$jogo->jogadores[1]->posicao=$data->Two->MapSpace;
								$jogo->jogadores[1]->pontuacao=$data->Two->Score;
							}elseif(array_key_exists("Three", json_decode(json_encode($data),true))){
								$jogo->jogadores[2]->posicao=$data->Three->MapSpace;
								$jogo->jogadores[2]->pontuacao=$data->Three->Score;
							}elseif(array_key_exists("Four", json_decode(json_encode($data),true))){
								$jogo->jogadores[3]->posicao=$data->Four->MapSpace;
								$jogo->jogadores[3]->pontuacao=$data->Four->Score;
							}else{
								echo "erro";
							}
							foreach($jogo->jogadores as $gamer){
								$gamer->socketJogador->send(json_encode(array("Resp_Fec", $this->jogosAtivos)));
							}
						}catch (Exception $e){
							echo "Erro ao solucionar jogador";
						}						
					}
				}
			}
		}elseif($data->Comand=="Dado"){
            foreach($this->jogosAtivos as $jogo){
                if($data->ID_Sala==$jogo->id){
                    try{
						if(array_key_exists("One", json_decode(json_encode($data),true))){
							$jogo->dado=$data->One->Dice;
							$jogo->jogadores[0]->posicao=$data->One->MapSpace;
							$jogo->jogadores[0]->pontuacao=$data->One->Score;
						}elseif(array_key_exists("Two", json_decode(json_encode($data),true))){
							$jogo->dado=$data->Two->Dice;
							$jogo->jogadores[1]->posicao=$data->Two->MapSpace;
							$jogo->jogadores[1]->pontuacao=$data->Two->Score;
						}elseif(array_key_exists("Three", json_decode(json_encode($data),true))){
							$jogo->jogadores[2]->posicao=$data->Three->MapSpace;
							$jogo->jogadores[2]->pontuacao=$data->Three->Score;
						}elseif(array_key_exists("Four", json_decode(json_encode($data),true))){
							$jogo->jogadores[3]->posicao=$data->Four->MapSpace;
							$jogo->jogadores[3]->pontuacao=$data->Four->Score;
						}else{
							echo "erro";
						}
						//Pega informação do cliente
						$jogo->vez=$data->TimePlayer;
						//Retorna informação pro cliente
						$this->jogadorVez=$jogo->vezJogador();
						$jogo->vez = $this->jogadorVez->id;
									
						foreach($jogo->jogadores as $gamer){
								$gamer->socketJogador->send(json_encode(array("Dado", $this->jogosAtivos,$jogo->vez)));
						}
                    }catch (Exception $e){
                        echo "Erro ao solucionar jogador";
					}
				}
			}
        }else{
            print("Não conseguiu");
		}
    }

    public function onClose(ConnectionInterface $conn) {
		$this->clients->detach($conn);
        //The connection is closed, remove it, as we can no longer send it messages
        try{
			foreach($this->jogosAtivos as $jogo){
				foreach($jogo->jogadores as $gamer){
					if($conn == $gamer->socketJogador){
						echo $jogo->removerJogador($gamer);
						$i=1;
						foreach($jogo->jogadores as $gamer2){
							$gamer2->id=$i;//corrigir id 
							$i+=1;
						}
					}
				}
			}
			foreach($this->jogosAtivos as $jogo){
				if(count($jogo->jogadores)==0){
					$key = array_search($jogo, $this->jogosAtivos); // Encontra index
					unset($this->jogosAtivos[$key]); // Remove do Array
					$this->jogosAtivos=array_values($this->jogosAtivos);// reindexa
					break;
				}
			}
			foreach($this->clients as $cliente){
				$cliente->send(json_encode($this->jogosAtivos));
			}
			echo "Connection {$conn->resourceId} has disconnected\n";
		}catch (Exception $e){
                return "Erro ao remover jogador22";
			}
    }

    public function onError(ConnectionInterface $conn, \Exception $e) {
        echo "An error has occurred: {$e->getMessage()}\n";
	}
}