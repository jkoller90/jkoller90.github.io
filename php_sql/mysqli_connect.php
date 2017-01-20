<?php
$db = new mysqli('','','', '');

if($db->connect_errno){
    die('Sorry. We are having issues');
};

?>