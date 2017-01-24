<?php 
$con = mysqli_connect("sql9.freesqldatabase.com","sql9154593","I9pF9PiQIb", "sql9154593");

if ($con->connect_error) {
	die("Connection error: " . $con->connect_error);
}

$result = $con->query("SELECT * FROM codestore ORDER BY created DESC");

if ($result->num_rows > 0 && $result->num_rows < 11) {
	echo"Note: dt signifies date and time <br>";
	echo "<table><tr><td>Code</td><td>Name</td><td>Email</td><td>Redeemed Date and Time</td><td>Created Date and Time</td></tr>";
	//<td>Created Date and Time</td> added
	while ($row = $result->fetch_assoc()) {
		echo "<tr><td>" . $row['code'] . "</td><td>" . $row['name'] . "</td><td>" . $row['email'] . "</td><td>" . $row['redeemed'] . "</td><td>" . $row['created'] . "</td></tr>";
	}
	echo "</table>";

}
elseif($result->num_rows > 10){
	echo "<br><h3>Please press one of the Download buttons; this page displays a maximum of 10 items. </h3>";
}
?>