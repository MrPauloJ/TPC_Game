<?php
header('Access-Control-Allow-Origin: *');
include('Connection.php');

//Parâmetros para o Db_Basic
$Position = (int) 1;
$Code_Room = (int) $_POST['Code_Room'];

//This function get the Code Room for Code's Page
$Query = "SELECT * FROM Db_Basic WHERE Code_Room = '{$Code_Room}' AND Position = '{$Position}'";

$Ok  = mysqli_query($Connection, $Query);
if (!$Ok) {
	die("Erro na instrução - " . mysqli_error($Connection));
} else{
	$nr = mysqli_num_rows($Ok);
	
	$FinalResult = array("","","","","","","","","","","");
	$foto="";
	if($nr > 0){
		while($Row = mysqli_fetch_assoc($Ok)){
			$FinalResult[0] = $Row['Nick_Heritage'];
			$FinalResult[1] = $Row['Question'];
			$FinalResult[2] = $Row['Right_Answer'];
			$FinalResult[3] = $Row['Wrong_Answer_One'];
			$FinalResult[4] = $Row['Wrong_Answer_Two'];
			$FinalResult[5] = $Row['Wrong_Answer_Three'];
			$FinalResult[6] = $Row['Tip_One'];
			$FinalResult[7] = $Row['Tip_Two'];
			$FinalResult[8] = $Row['Tip_Three'];
			$FinalResult[9] = $Row['Position'];
			$foto=base64_encode($Row['foto']);
			$FinalResult[10] = $foto;
		}
	}
	
	#echo '<img src="data:image/jpeg;base64,' . $foto . '" />';
	echo json_encode($FinalResult);
}
?>