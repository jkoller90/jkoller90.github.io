<?php
	  $con = 	mysqli_connect("sql9.freesqldatabase.com","sql9154593","I9pF9PiQIb", "sql9154593");
			//first, test with what should be in the db 
			//with defaults. 
			$testcode=$_GET["code"];
  		$testname="Unredeemed";
  		$testemail="N/a";
			$testredeemed="0000/00/00 00:00:00";
	
			$namequery=
				mysqli_query($con,"FROM codestore SELECT name WHERE code='$testcode'");

			if($testcode){
				if($testname != $namequery){
					die("Er");
				}
			}


      $code=$_POST["code"];
      $name=$_POST["name"];
      $email=$_POST["email"];
      $redeemed=$_POST["redeemed"];
			
			$query=
				mysqli_query($con,"UPDATE codestore SET name='$name', email='$email', redeemed='$redeemed' WHERE code='$code',name='Unredeemed',email='N/a',redeemed='0000/00/00 00:00:00'");

//  $name="Unredeemed";
//  $email="N/a";
//  $redeemed="0000/00/00 00:00:00";


  if($query){
    echo "Your comment has been sent";
  }
  else{
    echo "Error in sending your comment";
  }

?>
