<?php 
	$con = mysqli_connect("sql9.freesqldatabase.com","sql9154593","I9pF9PiQIb", "sql9154593");

	if ($con->connect_error) {
		die("Connection error: " . $con->connect_error);
	}

	$result = $con->query("SELECT code,name FROM codestore");

	if ($result->num_rows > 0) {
//		echo"Note: dt signifies date and time <br>";
		echo "<div id='codesToTest'>";
		//<td>Created Date and Time</td> added
		while ($row = $result->fetch_assoc()) {
			echo "<div class='keyvaluepair'><div class='code'>" . $row['code'] . "</div><div class='name'>" . $row['name'] . "</div></div>";
		}
		echo "</div>";
	}
	
?>