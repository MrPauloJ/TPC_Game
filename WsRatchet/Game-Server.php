<?php
use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use MyApp\Game_Client;

    require 'vendor/autoload.php';
	
    $server = IoServer::factory(
        new HttpServer(
            new WsServer(
                new Game_Client()
            )
        ),
        3281
    );

    $server->run();
	
echo "Servidor Iniciado";	
