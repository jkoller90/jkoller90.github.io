<?php
 $con = mysqli_connect("sql9.freesqldatabase.com","sql9154593","I9pF9PiQIb", "sql9154593");
 
  $code=$_POST["code"];
  $name="Unredeemed";
  $email="N/a";
  $redeemed="0000-00-00 00:00:00";
  $query= mysqli_query($con, "INSERT INTO codestore(code,name,email,redeemed) values('$code','$name','$email','$redeemed') ");
 
  if($query){
    echo "Your comment has been sent";
  }
  else{
    echo "Error in sending your comment";
  }
?>