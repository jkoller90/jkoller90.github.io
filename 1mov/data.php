<?php 
$con = mysqli_connect("sql9.freesqldatabase.com","sql9154593","I9pF9PiQIb", "sql9154593");

if ($con->connect_error) {
	die("Connection error: " . $con->connect_error);
}

$result = $con->query("SELECT * FROM codestore");

if ($result->num_rows > 0) {
	echo"Note: dt signifies date and time <br>";
	echo "<table><tr><td>Code</td><td>Name</td><td>Email</td><td>Redeemed Date and Time</td></tr>";
	while ($row = $result->fetch_assoc()) {
		echo "<tr><td>" . $row['code'] . "</td><td>" . $row['name'] . "</td><td>" . $row['email'] . "</td><td>" . $row['redeemed'] . "</td></tr>";
	}
	echo "</table>";

	//embed data here?
	//	echo '<div id="dlCodes">';
//	while($row = $result->fetch_assoc()){
//		echo
//	}
//	echo '</div>';
//	
//	echo '<div id="dlUnused">';
//	echo '</div>';
//	
}
?>