# TPC_Game

Jogo digital (offline e online) desenvolvido para aprendizado lúdico no ensino de história e utilizado como projeto de mestrado.

Reportagem: 

Mais informações em: [TPC_GAME](#) - SEM LINK

### Caracteristicas

OBS: Projeto APK gerado pelo cordova, criado e gerenciado pela ADOBE.

- Jogabilidade
  - Baseado no jogo LUDO
  - Jogo de Trilha
  - Mouse

- Linguagens
  - Javascript
  - HTML
  - CSS
  - PHP
  - SQL

- Plataformas suportadas
  - Android (APK - Ainda sem Playstore)
  - Plataforma web / Navegadores web

### Instruções gerais

- WsRatchet simula o servidor web para a conexão online, este deve ser executado em uma VPS através de php.
- Pasta "socket" e "vendor", e  arquivos "nginx_app.conf", "Procfile", "composer.json", "composer.lock" utilizados para configuração do servidor heroku
- O jogo online tem dependência do  Ratchet/vendor/Composer do PHP
- BD_TPC.sql se refere a criação do banco de dados, utilizado tanto offline quanto online.
- Banco de dados salva os dados de cada patrimonio ( Imagem, Questões, Respostas )
- POO apenas para os jogadores (CLIENTE e SERVER) e jogo(SERVER)
- Estrutura do jogo no cliente está aberta, sem POO.
