<?php
$con = mysqli_connect("127.0.0.1", "root", "", "splb1");

$data = file_get_contents("2.json");
$arr = json_decode($data, true);

for ($i = 0; $i < count($arr); $i++) {
  $src = $arr[$i]["src"];
  $title = $arr[$i]["title"];
  $price = $arr[$i]["price"];
  $index = $arr[$i]["index"];
  $text = $arr[$i]["text"];
 

  $sql = "INSERT INTO `splb1` 
  (`index`, `title`, `src`, `text`,`price`) VALUES ('$index', '$title', '$src', '$text', '$price')";
  mysqli_query($con, $sql);
}
// echo $sql;

?>