<?php
if(!empty($_POST)) {
  echo "OK";
} else {
  echo "ERROR";
}

require_once 'config.php';
require_once 'function.php';

$username = $_POST["username"];
$userImage = $_POST["userImage"];
$postImage = $_POST["postImage"];
$likes = $_POST["likes"];
$upVoted = "false";
$caption = $_POST["caption"];
$filter = $_POST["filter"];


$sql = 'INSERT INTO instagram.posts (username, userImage, postImage, likes, upVoted, caption, filter) VALUES (:username, :userImage, :postImage, :likes, :upVoted, :caption, :filter)';

$pdo = connectDb();
$stmt = $pdo->prepare($sql);

$stmt->bindParam(':username', $username, PDO::PARAM_STR);
$stmt->bindParam(':userImage', $userImage, PDO::PARAM_STR);
$stmt->bindParam(':postImage', $postImage, PDO::PARAM_STR);
$stmt->bindParam(':likes', $likes, PDO::PARAM_STR);
$stmt->bindParam(':upVoted', $upVoted, PDO::PARAM_STR);
$stmt->bindParam(':caption', $caption, PDO::PARAM_STR);
$stmt->bindParam(':filter', $filter, PDO::PARAM_STR);

$stmt->execute();
