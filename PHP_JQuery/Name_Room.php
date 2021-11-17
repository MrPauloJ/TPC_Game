<?php
header('Access-Control-Allow-Origin: *');
include('Connection.php');

//Parâmetros para o Db_Room
$Code_Room = (int) $_POST['Code_Room'];
$Name_Room = mysqli_real_escape_string($Connection, $_POST['Name_Room']);

$Query = "UPDATE Db_Room SET Name_Room ='{$Name_Room}' WHERE Code_Room = '{$Code_Room}'";
	
$Ok  = mysqli_query($Connection, $Query) or die ("Erro na instrução - " . mysqli_error($Connection));
?>