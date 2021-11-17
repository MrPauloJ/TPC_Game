<?php 
header('Access-Control-Allow-Origin: *');
include('Connection.php');

//Parâmetros para o Db_Basic
$Code_Room = (int) $_POST['Code_Room'];

$FinalResult = array("","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","");

//As funções abaixo pegarão os dados dos 15 patrimônios
$QueryOne = "SELECT * FROM Db_Basic WHERE Code_Room = '{$Code_Room}' AND Position = '1'";
$OkOne  = mysqli_query($Connection, $QueryOne) or die("Erro na instrução - " . mysqli_error($Connection));
$nrOne = mysqli_num_rows($OkOne);

if($nrOne > 0){
	while($RowOne = mysqli_fetch_assoc($OkOne)){
			$FinalResult[0] = $RowOne['Nick_Heritage'];
			$FinalResult[1] = $RowOne['Question'];
			$FinalResult[2] = $RowOne['Right_Answer'];
			$FinalResult[3] = $RowOne['Wrong_Answer_One'];
			$FinalResult[4] = $RowOne['Wrong_Answer_Two'];
			$FinalResult[5] = $RowOne['Wrong_Answer_Three'];
			$FinalResult[6] = $RowOne['Tip_One'];
			$FinalResult[7] = $RowOne['Tip_Two'];
			$FinalResult[8] = $RowOne['Tip_Three'];
			$FinalResult[9] = base64_encode($RowOne['foto']);
	}
}

$QueryTwo = "SELECT * FROM Db_Basic WHERE Code_Room = '{$Code_Room}' AND Position = '2'";
$OkTwo  = mysqli_query($Connection, $QueryTwo) or die("Erro na instrução - " . mysqli_error($Connection));
$nrTwo = mysqli_num_rows($OkTwo);

if($nrTwo > 0){
		while($RowTwo = mysqli_fetch_assoc($OkTwo)){
			$FinalResult[10] = $RowTwo['Nick_Heritage'];
			$FinalResult[11] = $RowTwo['Question'];
			$FinalResult[12] = $RowTwo['Right_Answer'];
			$FinalResult[13] = $RowTwo['Wrong_Answer_One'];
			$FinalResult[14] = $RowTwo['Wrong_Answer_Two'];
			$FinalResult[15] = $RowTwo['Wrong_Answer_Three'];
			$FinalResult[16] = $RowTwo['Tip_One'];
			$FinalResult[17] = $RowTwo['Tip_Two'];
			$FinalResult[18] = $RowTwo['Tip_Three'];
			$FinalResult[19] = base64_encode($RowTwo['foto']);
	}
}

$QueryThree = "SELECT * FROM Db_Basic WHERE Code_Room = '{$Code_Room}' AND Position = '3'";
$OkThree  = mysqli_query($Connection, $QueryThree) or die("Erro na instrução - " . mysqli_error($Connection));
$nrThree = mysqli_num_rows($OkThree);

if($nrThree > 0){
	while($RowThree = mysqli_fetch_assoc($OkThree)){
			$FinalResult[20] = $RowThree['Nick_Heritage'];
			$FinalResult[21] = $RowThree['Question'];
			$FinalResult[22] = $RowThree['Right_Answer'];
			$FinalResult[23] = $RowThree['Wrong_Answer_One'];
			$FinalResult[24] = $RowThree['Wrong_Answer_Two'];
			$FinalResult[25] = $RowThree['Wrong_Answer_Three'];
			$FinalResult[26] = $RowThree['Tip_One'];
			$FinalResult[27] = $RowThree['Tip_Two'];
			$FinalResult[28] = $RowThree['Tip_Three'];
			$FinalResult[29] = base64_encode($RowThree['foto']);
	}
}

$QueryFour = "SELECT * FROM Db_Basic WHERE Code_Room = '{$Code_Room}' AND Position = '4'";
$OkFour  = mysqli_query($Connection, $QueryFour) or die("Erro na instrução - " . mysqli_error($Connection));
$nrFour = mysqli_num_rows($OkFour);

if($nrFour > 0){
	while($RowFour = mysqli_fetch_assoc($OkFour)){
			$FinalResult[30] = $RowFour['Nick_Heritage'];
			$FinalResult[31] = $RowFour['Question'];
			$FinalResult[32] = $RowFour['Right_Answer'];
			$FinalResult[33] = $RowFour['Wrong_Answer_One'];
			$FinalResult[34] = $RowFour['Wrong_Answer_Two'];
			$FinalResult[35] = $RowFour['Wrong_Answer_Three'];
			$FinalResult[36] = $RowFour['Tip_One'];
			$FinalResult[37] = $RowFour['Tip_Two'];
			$FinalResult[38] = $RowFour['Tip_Three'];
			$FinalResult[39] = base64_encode($RowFour['foto']);
	}
}

$QueryFive = "SELECT * FROM Db_Basic WHERE Code_Room = '{$Code_Room}' AND Position = '5'";
$OkFive  = mysqli_query($Connection, $QueryFive) or die("Erro na instrução - " . mysqli_error($Connection));
$nrFive = mysqli_num_rows($OkFive);

if($nrFive > 0){
	while($RowFive = mysqli_fetch_assoc($OkFive)){
			$FinalResult[40] = $RowFive['Nick_Heritage'];
			$FinalResult[41] = $RowFive['Question'];
			$FinalResult[42] = $RowFive['Right_Answer'];
			$FinalResult[43] = $RowFive['Wrong_Answer_One'];
			$FinalResult[44] = $RowFive['Wrong_Answer_Two'];
			$FinalResult[45] = $RowFive['Wrong_Answer_Three'];
			$FinalResult[46] = $RowFive['Tip_One'];
			$FinalResult[47] = $RowFive['Tip_Two'];
			$FinalResult[48] = $RowFive['Tip_Three'];
			$FinalResult[49] = base64_encode($RowFive['foto']);
	}
}

$QuerySix = "SELECT * FROM Db_Basic WHERE Code_Room = '{$Code_Room}' AND Position = '6'";
$OkSix  = mysqli_query($Connection, $QuerySix) or die("Erro na instrução - " . mysqli_error($Connection));
$nrSix = mysqli_num_rows($OkSix);

if($nrSix > 0){
	while($RowSix = mysqli_fetch_assoc($OkSix)){
			$FinalResult[50] = $RowSix['Nick_Heritage'];
			$FinalResult[51] = $RowSix['Question'];
			$FinalResult[52] = $RowSix['Right_Answer'];
			$FinalResult[53] = $RowSix['Wrong_Answer_One'];
			$FinalResult[54] = $RowSix['Wrong_Answer_Two'];
			$FinalResult[55] = $RowSix['Wrong_Answer_Three'];
			$FinalResult[56] = $RowSix['Tip_One'];
			$FinalResult[57] = $RowSix['Tip_Two'];
			$FinalResult[58] = $RowSix['Tip_Three'];
			$FinalResult[59] = base64_encode($RowSix['foto']);
	}
}

$QuerySeven = "SELECT * FROM Db_Basic WHERE Code_Room = '{$Code_Room}' AND Position = '7'";
$OkSeven  = mysqli_query($Connection, $QuerySeven) or die("Erro na instrução - " . mysqli_error($Connection));
$nrSeven = mysqli_num_rows($OkSeven);

if($nrSeven > 0){
	while($RowSeven = mysqli_fetch_assoc($OkSeven)){
			$FinalResult[60] = $RowSeven['Nick_Heritage'];
			$FinalResult[61] = $RowSeven['Question'];
			$FinalResult[62] = $RowSeven['Right_Answer'];
			$FinalResult[63] = $RowSeven['Wrong_Answer_One'];
			$FinalResult[64] = $RowSeven['Wrong_Answer_Two'];
			$FinalResult[65] = $RowSeven['Wrong_Answer_Three'];
			$FinalResult[66] = $RowSeven['Tip_One'];
			$FinalResult[67] = $RowSeven['Tip_Two'];
			$FinalResult[68] = $RowSeven['Tip_Three'];
			$FinalResult[69] = base64_encode($RowSeven['foto']);
	}
}

$QueryEight = "SELECT * FROM Db_Basic WHERE Code_Room = '{$Code_Room}' AND Position = '8'";
$OkEight  = mysqli_query($Connection, $QueryEight) or die("Erro na instrução - " . mysqli_error($Connection));
$nrEight = mysqli_num_rows($OkEight);

if($nrEight > 0){
	while($RowEight = mysqli_fetch_assoc($OkEight)){
			$FinalResult[70] = $RowEight['Nick_Heritage'];
			$FinalResult[71] = $RowEight['Question'];
			$FinalResult[72] = $RowEight['Right_Answer'];
			$FinalResult[73] = $RowEight['Wrong_Answer_One'];
			$FinalResult[74] = $RowEight['Wrong_Answer_Two'];
			$FinalResult[75] = $RowEight['Wrong_Answer_Three'];
			$FinalResult[76] = $RowEight['Tip_One'];
			$FinalResult[77] = $RowEight['Tip_Two'];
			$FinalResult[78] = $RowEight['Tip_Three'];
			$FinalResult[79] = base64_encode($RowEight['foto']);
	}
}

$QueryNine = "SELECT * FROM Db_Basic WHERE Code_Room = '{$Code_Room}' AND Position = '9'";
$OkNine  = mysqli_query($Connection, $QueryNine ) or die("Erro na instrução - " . mysqli_error($Connection));
$nrNine = mysqli_num_rows($OkNine);

if($nrNine > 0){
	while($RowNine = mysqli_fetch_assoc($OkNine)){
		$FinalResult[80] = $RowNine['Nick_Heritage'];
		$FinalResult[81] = $RowNine['Question'];
		$FinalResult[82] = $RowNine['Right_Answer'];
		$FinalResult[83] = $RowNine['Wrong_Answer_One'];
		$FinalResult[84] = $RowNine['Wrong_Answer_Two'];
		$FinalResult[85] = $RowNine['Wrong_Answer_Three'];
		$FinalResult[86] = $RowNine['Tip_One'];
		$FinalResult[87] = $RowNine['Tip_Two'];
		$FinalResult[88] = $RowNine['Tip_Three'];
		$FinalResult[89] = base64_encode($RowNine['foto']);
	}
}

$QueryTen = "SELECT * FROM Db_Basic WHERE Code_Room = '{$Code_Room}' AND Position = '10'";
$OkTen  = mysqli_query($Connection, $QueryTen) or die("Erro na instrução - " . mysqli_error($Connection));
$nrTen = mysqli_num_rows($OkTen);

if($nrTen > 0){
	while($RowTen = mysqli_fetch_assoc($OkTen)){
		$FinalResult[90] = $RowTen['Nick_Heritage'];
		$FinalResult[91] = $RowTen['Question'];
		$FinalResult[92] = $RowTen['Right_Answer'];
		$FinalResult[93] = $RowTen['Wrong_Answer_One'];
		$FinalResult[94] = $RowTen['Wrong_Answer_Two'];
		$FinalResult[95] = $RowTen['Wrong_Answer_Three'];
		$FinalResult[96] = $RowTen['Tip_One'];
		$FinalResult[97] = $RowTen['Tip_Two'];
		$FinalResult[98] = $RowTen['Tip_Three'];
		$FinalResult[99] = base64_encode($RowTen['foto']);
	}
}

$QueryEleven = "SELECT * FROM Db_Basic WHERE Code_Room = '{$Code_Room}' AND Position = '11'";
$OkEleven  = mysqli_query($Connection, $QueryEleven) or die("Erro na instrução - " . mysqli_error($Connection));
$nrEleven = mysqli_num_rows($OkEleven);

if($nrEleven > 0){
	while($RowEleven = mysqli_fetch_assoc($OkEleven)){
		$FinalResult[100] = $RowEleven['Nick_Heritage'];
		$FinalResult[101] = $RowEleven['Question'];
		$FinalResult[102] = $RowEleven['Right_Answer'];
		$FinalResult[103] = $RowEleven['Wrong_Answer_One'];
		$FinalResult[104] = $RowEleven['Wrong_Answer_Two'];
		$FinalResult[105] = $RowEleven['Wrong_Answer_Three'];
		$FinalResult[106] = $RowEleven['Tip_One'];
		$FinalResult[107] = $RowEleven['Tip_Two'];
		$FinalResult[108] = $RowEleven['Tip_Three'];
		$FinalResult[109] = base64_encode($RowEleven['foto']);
	}
}

$QueryTwelve = "SELECT * FROM Db_Basic WHERE Code_Room = '{$Code_Room}' AND Position = '12'";
$OkTwelve  = mysqli_query($Connection, $QueryTwelve) or die("Erro na instrução - " . mysqli_error($Connection));
$nrTwelve = mysqli_num_rows($OkTwelve);

if($nrTwelve > 0){
	while($RowTwelve = mysqli_fetch_assoc($OkTwelve)){
		$FinalResult[110] = $RowTwelve['Nick_Heritage'];
		$FinalResult[111] = $RowTwelve['Question'];
		$FinalResult[112] = $RowTwelve['Right_Answer'];
		$FinalResult[113] = $RowTwelve['Wrong_Answer_One'];
		$FinalResult[114] = $RowTwelve['Wrong_Answer_Two'];
		$FinalResult[115] = $RowTwelve['Wrong_Answer_Three'];
		$FinalResult[116] = $RowTwelve['Tip_One'];
		$FinalResult[117] = $RowTwelve['Tip_Two'];
		$FinalResult[118] = $RowTwelve['Tip_Three'];
		$FinalResult[119] = base64_encode($RowTwelve['foto']);
	}
}

$QueryThirteen = "SELECT * FROM Db_Basic WHERE Code_Room = '{$Code_Room}' AND Position = '13'";
$OkThirteen  = mysqli_query($Connection, $QueryThirteen) or die("Erro na instrução - " . mysqli_error($Connection));
$nrThirteen = mysqli_num_rows($OkThirteen);

if($nrThirteen > 0){
	while($RowThirteen = mysqli_fetch_assoc($OkThirteen)){
		$FinalResult[120] = $RowThirteen['Nick_Heritage'];
		$FinalResult[121] = $RowThirteen['Question'];
		$FinalResult[122] = $RowThirteen['Right_Answer'];
		$FinalResult[123] = $RowThirteen['Wrong_Answer_One'];
		$FinalResult[124] = $RowThirteen['Wrong_Answer_Two'];
		$FinalResult[125] = $RowThirteen['Wrong_Answer_Three'];
		$FinalResult[126] = $RowThirteen['Tip_One'];
		$FinalResult[127] = $RowThirteen['Tip_Two'];
		$FinalResult[128] = $RowThirteen['Tip_Three'];
		$FinalResult[129] = base64_encode($RowThirteen['foto']);
	}
}

$QueryFourteen = "SELECT * FROM Db_Basic WHERE Code_Room = '{$Code_Room}' AND Position = '14'";
$OkFourteen  = mysqli_query($Connection, $QueryFourteen) or die("Erro na instrução - " . mysqli_error($Connection));
$nrFourteen = mysqli_num_rows($OkFourteen);

if($nrFourteen > 0){
	while($RowFourteen = mysqli_fetch_assoc($OkFourteen)){
		$FinalResult[130] = $RowFourteen['Nick_Heritage'];
		$FinalResult[131] = $RowFourteen['Question'];
		$FinalResult[132] = $RowFourteen['Right_Answer'];
		$FinalResult[133] = $RowFourteen['Wrong_Answer_One'];
		$FinalResult[134] = $RowFourteen['Wrong_Answer_Two'];
		$FinalResult[135] = $RowFourteen['Wrong_Answer_Three'];
		$FinalResult[136] = $RowFourteen['Tip_One'];
		$FinalResult[137] = $RowFourteen['Tip_Two'];
		$FinalResult[138] = $RowFourteen['Tip_Three'];
		$FinalResult[139] = base64_encode($RowFourteen['foto']);
	}
}

$QueryFifteen = "SELECT * FROM Db_Basic WHERE Code_Room = '{$Code_Room}' AND Position = '15'";
$OkFifteen  = mysqli_query($Connection, $QueryFifteen) or die("Erro na instrução - " . mysqli_error($Connection));
$nrFifteen = mysqli_num_rows($OkFifteen);
if($nrFifteen > 0){}
	while($RowFifteen = mysqli_fetch_assoc($OkFifteen)){
		$FinalResult[140] = $RowFifteen['Nick_Heritage'];
		$FinalResult[141] = $RowFifteen['Question'];
		$FinalResult[142] = $RowFifteen['Right_Answer'];
		$FinalResult[143] = $RowFifteen['Wrong_Answer_One'];
		$FinalResult[144] = $RowFifteen['Wrong_Answer_Two'];
		$FinalResult[145] = $RowFifteen['Wrong_Answer_Three'];
		$FinalResult[146] = $RowFifteen['Tip_One'];
		$FinalResult[147] = $RowFifteen['Tip_Two'];
		$FinalResult[148] = $RowFifteen['Tip_Three'];
		$FinalResult[149] = base64_encode($RowFifteen['foto']);
	}
	
echo json_encode($FinalResult);
?>