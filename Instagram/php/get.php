<?php
require_once 'config.php';
require_once 'function.php';
$sql = '
SELECT
username AS username,
userImage AS userImage,
postImage AS postImage,
likes AS likes,
upVoted AS upVoted,
caption AS caption,
filter AS filter
FROM posts
';
header('Content-type: application/json');
echo json_encode(connectDb()->query($sql)->fetchAll(PDO::FETCH_ASSOC));
// $php_json = json_encode(connectDb()->query($sql)->fetchAll(PDO::FETCH_ASSOC));
