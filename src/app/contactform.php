<?php


//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$phoneNo = $_POST['phone'];
$message= $_POST['message'];
$to = "bigboydevelops@gmail.com";
$subject = "Mail From website";

$txt = "Email received from ".$name.".\n\n".$message;
$headers = "From: ".$mailFrom." Tel: ".phoneNo;

if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}

?> 