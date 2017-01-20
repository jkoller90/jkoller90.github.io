<?php
$db = new mysqli('xxxx','xxxx','xxxx', 'xxxx');

if($db->connect_errno){
    die('Sorry. We are having issues');
};

?>