<?php
// вывод сообщений

require 'config.php';
$file = file($filename);

$count = count($file);

for ($i = 0; $i++ < $count - 1;) {
  $messageTemp = '<div class="message-wrap message-wrap_me">
    <div class="message">
        <div class="message__img">
            <a href="#">
                <img src="/uploads/Avatar_1.jpg" alt="photo"/>
            </a>
        </div>
        <div class="message__text">'.$file[$i].'</div>
        <span class="message__time">8:46 pm</span>
    </div>
</div>';
  echo $messageTemp;
}