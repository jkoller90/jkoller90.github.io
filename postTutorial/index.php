<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Generate Codes</title>
    <link rel="stylesheet" href="./assets/demo.css">
</head>
<header>
    <h1>Code Generator</h1> 
</header>

<body>
    <div class="main-content">
        <form class="form-basic">
            <div class="form-title-row">
                <button id="reload">Reload Page Form</button>
            </div>
            <div class="form-row"> <span>Length of Codes (required)</span>
                <input type="text" name="length" id="length"> </div>
            <div class="form-row"> <span>Amount of Codes to Output (required)</span>
                <input type="text" name="amount" id="amount"> </div>
            <div class="form-row"> <span>Character Set </span>
                <select type="text" name="charSet" id="charSet">
                    <option>Numeric</option>
                    <option>Alphabetic</option>
                    <option selected>Alphanumeric</option>
                </select>
            </div>
            <div class="form-row"> <span>Excluded Characters (optional; format: "I, i, l")</span>
                <input type="text" name="charExclusions" id="charExclusions"> </div>
            <div class="form-row">
                <button id="submit">Generate Codes</button>
            </div>
             </form>
			<div id="info"></div>
    </div> 
        <div id="show"></div>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
		<script src="voucher_codes.js"></script>
		<script src="FileSaver.min.js"></script>
    <script src="index.js"></script>
    </body>

</html>