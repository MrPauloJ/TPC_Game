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
$Position = (int) $_POST['Position'];
$Code_Room = (int) $_POST['Code_Room'];

//This function update the Code's Page
$Query = "UPDATE Db_Basic SET Nick_Heritage = '{$Nick_Heritage}', Question = '{$Question}', Right_Answer = '{$Right_Answer}', Wrong_Answer_One = '{$Wrong_Answer_One}', Wrong_Answer_Two = '{$Wrong_Answer_Two}', Wrong_Answer_Three = '{$Wrong_Answer_Three}', Tip_One= '{$Tip_One}', Tip_Two = '{$Tip_Two}', Tip_Three = '{$Tip_Three}', foto ='{$mysqlImg}' WHERE Code_Room = '{$Code_Room}' AND Position = '{$Position}'";
	
$ok  = mysqli_query($Connection, $Query) or die("Erro na instrução - " . mysqli_error($Connection));
?>