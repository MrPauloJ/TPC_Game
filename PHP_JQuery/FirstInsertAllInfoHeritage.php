<?php
header('Access-Control-Allow-Origin: *');
include('Connection.php');

//Parâmetros para o Db_Room
$Code_Room = (int) $_POST['Code_Room'];
$Name_Room = "Sem Título";

//Insert img
$foto=$_FILES['foto'];
$nomeFinal=$_FILES['foto']['tmp_name'];
$tamanhoImg = filesize($nomeFinal); 
$mysqlImg = addslashes(fread(fopen($nomeFinal, "r"), $tamanhoImg));

//Parâmetros para o Db_Basic
$Nick_Heritage = mysqli_real_escape_string($Connection, $_POST['Nick_Heritage']);
$Question = mysqli_real_escape_string($Connection, $_POST['Question']);
$Right_Answer = mysqli_real_escape_string($Connection, $_POST['Right_Answer']);
$Wrong_Answer_One = mysqli_real_escape_string($Connection, $_POST['Wrong_Answer_One']);
$Wrong_Answer_Two = mysqli_real_escape_string($Connection, $_POST['Wrong_Answer_Two']);
$Wrong_Answer_Three = mysqli_real_escape_string($Connection, $_POST['Wrong_Answer_Three']);
$Tip_One = mysqli_real_escape_string($Connection, $_POST['Tip_One']);
$Tip_Two = mysqli_real_escape_string($Connection, $_POST['Tip_Two']);
$Tip_Three = mysqli_real_escape_string($Connection, $_POST['Tip_Three']);
$Position = 1;

//-----------------------------------------------
/* ( To generate code's room )
 * This function insert the heritage's informations of the second onwards, including, the code room of the first*/
$QueryOne = "INSERT INTO Db_Room(Code_Room, Name_Room) VALUES ('{$Code_Room}', '{$Name_Room}')";

$QueryTwo = "INSERT INTO Db_Basic(Nick_Heritage, Question, Right_Answer, Wrong_Answer_One, Wrong_Answer_Two, Wrong_Answer_Three, Tip_One, Tip_Two, Tip_Three, Code_Room, Position, foto) VALUES ('{$Nick_Heritage}', '{$Question}', '{$Right_Answer}', '{$Wrong_Answer_One}', '{$Wrong_Answer_Two}', '{$Wrong_Answer_Three}', '{$Tip_One}', '{$Tip_Two}', '{$Tip_Three}', '{$Code_Room}', '{$Position}','{$mysqlImg}')";
	
$OkOne  = mysqli_query($Connection, $QueryOne) or die ("Erro na instrução 1 - " . mysqli_error($Connection));
$OkTwo  = mysqli_query($Connection, $QueryTwo) or die ("Erro na instrução 2 - " . mysqli_error($Connection));
		
?>