<?php
header('Access-Control-Allow-Origin: *');
include('Connection.php');

//This function get the Code Room for Code's Page
$Query = "SELECT Name_Room, Code_Room FROM Db_Room";

$Ok  = mysqli_query($Connection, $Query);
if (!$Ok) {
	die("Erro na instrução - " . mysqli_error($Connection));
} else{
	$nr = mysqli_num_rows($Ok);
	//35
$FinalResult;
$i=0;	
	if($nr > 0){
        while($Row = mysqli_fetch_assoc($Ok)){
            $FinalResult[$i][0] = $Row['Name_Room'];
        	$FinalResult[$i][1] = $Row['Code_Room'];
        	$i+=1;
        }
	}
	
	echo json_encode($FinalResult);
}
?>