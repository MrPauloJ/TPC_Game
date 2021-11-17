<?php
header('Access-Control-Allow-Origin: *');
include('Connection.php');

//Parâmetros para o Db_Room
$Code_Room = $_POST['Code_Room'];

//This function get the code_room if exists
$Query = "SELECT Code_Room FROM Db_Room WHERE Code_Room= '{$Code_Room}'";
$Ok  = mysqli_query($Connection, $Query) or die("Erro na instrução - " . mysqli_error($Connection));
$nr = mysqli_num_rows($Ok);
$FinalResult = null;

if($nr > 0){
	while($Row = mysqli_fetch_assoc($Ok)){
		$FinalResult = $Row['Code_Room'];	
	}
}
echo json_encode($FinalResult);
?>