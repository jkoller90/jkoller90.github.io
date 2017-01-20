<?php
error_reporting(0);
require 'mysqli_connect.php';

//for loop 
$code = $_POST['code'];
if ($result = $db->query("INSERT INTO `sql9154593`.`CodeStore` VALUES ('$code', '', CURRENT_TIMESTAMP, '0000-00-00 00:00:00')")) {
	echo "Success!";
       
} else {
    die($db->error); //or other error message
}
//query method takes sql query param
?>