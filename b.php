

<?PHP

/*
$hit =file_get_contents("http://codeforces.com/problemset/problem/749/E");
echo $hit;
*/
/*
$url = "http://codeforces.com/problemset/problem/749/E";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
$data = curl_exec ($ch);
curl_close ($ch);
// you can do something with $data like explode(); or a preg match regex to get the exact information you need
//$data = strip_tags($data);
echo $data;
*/

echo "in php<br/>";
$got_json=file_get_contents("php://input");
$got=json_decode($got_json,true);

//echo "string : ".$got_json;

$size=count($got["result"]["problems"]);
echo $size."<br/>";


for($x=0;$x<$size;$x++){
  echo $x."<br/>";	
   //$prob_id=$got["result"]["problems"][(string)$x];
	//echo $prob_id;
	
	$contestId=$got["result"]["problems"][$x]["contestId"];
	$prob_no=$got["result"]["problems"][$x]["index"];
 	echo "ex id= ".$contestId."<br/>";
 	echo "ex_no ".$prob_no."<br/>";
	
	$file_name= $contestId."_".$prob_no;
	echo "filename: ".$file_name."<br/>";
	
	$url = "http://codeforces.com/problemset/problem/".$contestId."/".$prob_no;
	$content=file_get_contents($url);
	
	$file=fopen("copy_here/".$file_name.".html","w");
	
	//fwrite($file,"in file<br/>");
	fwrite($file,$content);
	fclose($file);
	
}

print_r($got);
//echo 'element testing='.$a.'<br/>';

echo "<br/>some stuff";
?>
