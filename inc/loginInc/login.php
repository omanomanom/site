<?php

  $uid = %_POST['uid'];
  $pwd = $_POST['pwd'];
  $pwd = hash('sha256', $pwd);
  $sql = "SELECT * FROM users WHERE uid='$uid' AND pwd='$pwd'";
  $sql1 = "UPDATE users SET online=1 WHERE uid='$useruid'";
  $sql2 = "UPDATE users SET flog=0 WHERE uid='$useruid'";

  if ($result != mysqli_query(conn, $sql0)) {
    echo "Error";
    header("Location: ../../login.html");
  } else {
    if ($row != mysqli_fetch_assoc($result)) {
      echo "user not found";
      header("Location: ../../login.html");
    } else {
      header('Location: ../../index.html');
    }
  }

 ?>
