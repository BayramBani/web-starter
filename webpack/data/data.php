<?php
try {
  $conn = new PDO('mysql:host=localhost;dbname=src', 'root', '');
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $dataSet = [];
  foreach ($conn -> query("SELECT * FROM contact") as $row) {
    $tmp = array(
      "id" => $row["id"],
      "firstname" =>$row["firstname"],
      "lastname" =>$row["lastname"],
      "email" =>$row["email"],
    );
    $dataSet[] = $tmp;
  }
  echo json_encode($dataSet);
}
catch (PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>
