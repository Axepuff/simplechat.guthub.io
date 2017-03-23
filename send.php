<?
require 'config.php';

$sender = $_POST['sender'];

$text = $_POST['message'];

$message = "$text\n";

$file = fopen($filename, 'a');

fwrite($file, $message);

fclose($file);

