<?php 
//rand(min,max); //line 14
function randomElem(arr){ //line 18
    $idx = rand(0, sizeof(arr)-1);
    return $arr[$idx];
}

//or
//class charsets {
//    public numbers = "0123456789";
//    public alphabetic = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//    public alphanumeric = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//}
//or
//$charsets = array(
//    'numbers' => '0123456789';
//    'alphabetic' => 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//    'alphanumeric' => '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//)
function charset(name){ //line 22 
    $charsets = new StdClass();
    $charsets->numbers = '0123456789';
    $charsets->alphabetic = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charsets->alphanumeric = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return charsets->name;
} 

function repeat(str, $count){ //line 31
    $res = "";
    for($i = 0; $i<$count;$i++){
        $res+=str;
    }
    return $res;
}

class Config{
    public $charCount;
    public $length;
    public $charset;
    public $pattern;
    public __construct($charCount, $length, $charset, $pattern){
        if(!$charCount){$this-charCount = 1} else{ $this->charCount = $charCount; }
        $this->length = $length || 8;
        $this->charset = $charset || charset("alphanumeric");
        $this->pattern = $pattern || repeat("#", $this->length);
    }
    public function isFeasible(){ //line 60
        preg_match(('/#/g'), $this->charset, $matches);
        //or swap out || with conditional statement to determine if it's size of matches or 0
        return pow((strlen($this->charset)) , sizeof($matches || [])) >= $this->charCount;
    }
    public function generate(){
        $config = new Config(){
            $count = 
        }
    }
}

?>




class A 
{ 
    function __construct() 
    { 
        $a = func_get_args(); 
        $i = func_num_args(); 
        if (method_exists($this,$f='__construct'.$i)) { 
            call_user_func_array(array($this,$f),$a); 
        } 
    } 
    
    function __construct1($a1) 
    { 
        echo('__construct with 1 param called: '.$a1.PHP_EOL); 
    } 
    
    function __construct2($a1,$a2) 
    { 
        echo('__construct with 2 params called: '.$a1.','.$a2.PHP_EOL); 
    } 
    
    function __construct3($a1,$a2,$a3) 
    { 
        echo('__construct with 3 params called: '.$a1.','.$a2.','.$a3.PHP_EOL); 
    } 
} 