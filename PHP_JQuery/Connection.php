<?php
/* #Servidor antigo
define('Server', '37.59.55.185');
define('UserId', '6D92vmn3HH');
define('Password', '6sFYnYxVKo');
define('DataBase', '6D92vmn3HH');
*/
#Servidor no site local ( trosleihard )
define('Server', 'localhost');
define('UserId', 'id7496533_admintpc');
define('Password', '#Almirante10');
define('DataBase', 'id7496533_tpc');

$Connection = mysqli_connect(Server, UserId, Password, DataBase) or die('Erro ao conectar o banco de dados.');
?>