<?
// *** We need to make sure theyre coming from a POST -
if ($_SERVER["REQUEST_METHOD"] <> "POST")
	die("You can only reach this page by posting from the html form");


	//set address here
	$mailuser = "email@fs.ma";
		
	$header = "Return-Path: ".$mailuser."\r\n"; 
	$header .= "From: <".$mailuser.">\r\n"; 
	$header .= "Content-Type: text/html;"; 
	 
	$mail_body = 'Message :<br><br>'.json_encode($_POST);
	mail ($mailuser, 'Message from contact form', $mail_body, $header);
	
	return TRUE;

?>