<?php
header('Access-Control-Allow-Origin: *');
include('Connection.php');

//Parâmetros para o Db_Basic
$Code_Room = (int)$_POST['Code_Room'];

//This function get the Code Room for Code's Page
$FinalResult = array("","","","","","","","","","","","","","","");
$i = 0;

$Query = "SELECT Nick_Heritage FROM Db_Basic WHERE Code_Room = '{$Code_Room}'";
$Ok  = mysqli_query($Connection, $Query);

if (!$Ok) {
	die("Erro na instrução - " . mysqli_error($Connection));
} else{
	$nr = mysqli_num_rows($Ok);
	if($nr > 0){
		while($Row = mysqli_fetch_assoc($Ok)){
			$FinalResult[$i] = $Row['Nick_Heritage'];
		    $i++;
		}
	}
	
	echo json_encode($FinalResult);
	}
?>