<?php
header('Access-Control-Allow-Origin: *');
include('Connection.php');

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
$Code_Room = mysqli_real_escape_string($Connection, $_POST['Code_Room']);
$Position = (int) $_POST['Position'];

//This function insert the informations of the first heritage, including, the code room
$Query = "INSERT INTO Db_Basic(Nick_Heritage, Question, Right_Answer, Wrong_Answer_One, Wrong_Answer_Two, Wrong_Answer_Three, Tip_One, Tip_Two, Tip_Three, Code_Room, Position, foto) VALUES ('{$Nick_Heritage}', '{$Question}', '{$Right_Answer}', '{$Wrong_Answer_One}', '{$Wrong_Answer_Two}', '{$Wrong_Answer_Three}', '{$Tip_One}', '{$Tip_Two}', '{$Tip_Three}', '{$Code_Room}', '{$Position}','{$mysqlImg}')";
	
$ok  = mysqli_query($Connection, $Query) or die("Erro na instrução - " . mysqli_error($Connection));
?>