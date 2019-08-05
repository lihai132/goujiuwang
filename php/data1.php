<?php
$con = mysqli_connect("127.0.0.1", "root", "", "splb2");

$data = file_get_contents("1.json");
$arr = json_decode($data, true);

for ($i = 0; $i < count($arr); $i++) {
  $src = $arr[$i]["src"];
 
  $price = $arr[$i]["price"];
 
  $text = $arr[$i]["text"];
 

  $sql = "INSERT INTO `splb2` 
  (`index`,  `src`, `text`,`price`) VALUES ('$i',  '$src', '$text', '$price')";
  mysqli_query($con, $sql);
}
// echo $sql;

?>