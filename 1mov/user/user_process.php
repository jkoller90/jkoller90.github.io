<?php
	$con = 	mysqli_connect();

// prepare and bind
//$stmt = $con_prepare("UPDATE codestore SET (name, redeemed) VALUES (?, ?) WHERE (code) VALUES (?)");
//$stmt->bind_param("sss", $name, $redeemed, $code);

		$code=$_POST["code"];
		$name=$_POST["name"];
		$redeemed=$_POST["redeemed"];

		$query=
			mysqli_query($con,"UPDATE codestore SET name='$name',redeemed='$redeemed' WHERE code='$code'");

		if($query){
			echo "Your comment has been sent";
		}
		else{
			echo "Error in sending your comment";
		}

?>
