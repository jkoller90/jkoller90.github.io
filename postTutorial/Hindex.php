<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Generate Codes</title>
    <link rel="stylesheet" href="assets/demo.css">
 </head>
<header>
    <h1>Code Generator</h1> </header>
<div class="main-content">
    
    <form class="form-basic" id="myForm" action="postCodes.php" method="post">
        
        <!- removed method="post" action="#" -->
        <div class="form-title-row">
            <button name="data" type="button" id="reload">Reload Page Form</button>
        </div>
        <div class="form-row">
            <label> <span>Length of Codes (required)</span>
                <input type="text" id="length"> </label>
        </div>
        <div class="form-row">
            <label> <span>Amount of Codes to Output (required)</span>
                <input type="text" id="amount"> </label>
        </div>
        <div class="form-row">
            <label> <span>Character Set</span>
                <select name="dropdown" id="charSet">
                    <option>Numeric</option>
                    <option>Alphabetic</option>
                    <option>Alphanumeric</option>
                </select>
            </label>
        </div>
        <div class="form-row">
            <label> <span>Optional: Characters to Exclude (format: "I, i, l, 1")</span>
                <input type="text" id="charExclusions"></input>
            </label>
        </div>
        <div class="form-row">
            <button name="data" type="button" id="submit">Submit Form</button>
        </div>
        <div class="form-row">
            <button name="showDB" id="showStoredData" type="button">Show Stored Data </button>
        </div> 
</div>
        <div id="dataContainer" class="form-row"> <!- used as placeholder to be picked up by php ->
</div>

</form>

<div id="showDB" class="form-basic">

   <?php
error_reporting(0);
require 'mysqli_connect.php';
if ($result = $db->query("SELECT * FROM CodeStore")) {
    $count = $result->num_rows * 2;
    if ($count) {
        echo "<br><h3> <b> Codes </b></h3><br>";
        $row = $result->fetch_object();
        while ($count > 0) {
            if($count > $result->num_rows){
                echo $row->code, '<br>';                
            }else{
                if($count == $result->num_rows){
                    echo "<table> <tr> <th> <b> Codes </b> </th> <th> User Name </th> <th> Redeemed On </th></tr>";
                }
                echo "<tr><th>", $row->code, '</th><th>', $row->username, '</th><th>', $row->date_time, '</th></tr>';
            }
            $count -= 1;
        }
        echo "</table>";
        $result->free(); 
    }
} else {
    die($db->error); 
}
?>
</div>
</div>
<script src="FileSaver.min.js"></script>
<script src="voucher_codes.js"></script>
<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
<script src="index.js"></script>
</body>

</html>