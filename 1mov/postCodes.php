<?php
 $con = mysqli_connect();
 
  $code=$_POST["code"];
  $name="Unredeemed";
  $email="N/a";
  $redeemed="00/00/0000 00:00 --";
	$created =$_POST["createdTime"];
  $query= mysqli_query($con, "INSERT INTO codestore(code,name,email,redeemed,created) values('$code','$name','$email','$redeemed', '$created') ");
 
  if($query){
    echo "Your comment has been sent";
  }
  else{
    echo "Error in sending your comment";
  }
?>