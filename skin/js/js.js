$(function(){
    'use strict';
    //$('.message-list').jScrollPane();
});

function show() {
    // выводим сообщения в блок #messages
    $.ajax({
        url: 'show.php',
        timeout: 10000, // время ожидания загрузки сообщений 10 секунд (или 10000 миллисекунд)
        success: function(data) {
            $('#messages').html(data);
        },
        error: function() {
            $('#messages').html("Не удалось загрузить сообщения");
        }
    });
}

function send() {
    // функция отправки сообщения
    var sender = $('#sender').val(); // отправитель
    var message = $('#message').val(); // сообщение

    // if(sender.length > 0 && message.length > 0) { // проверка полей "Имя" и "Сообщение"
    if( message.length > 0) { // проверка полей "Имя" и "Сообщение"
        $.ajax({
            url: 'send.php',
            type: 'post',
            timeout: 10000, // время ожидания отправки сообщения 10 сек.
            data: {'sender': sender, 'message': message},
            success: function(data) {
                document.getElementById('message').value = ""; // удаляем содержимое поля "Сообщение", если сообщение было успешно отправлено
                $('#send_message_result').html("");
            },
            error: function() {
                $('#send_message_result').html("Не удалось отправить сообщение");
            }
        });
    } else if(sender.length == 0) {
        $('#send_message_result').html("Введите своё имя!");
    } else if(message.length == 0) {
        $('#send_message_result').html("Введите сообщение!");
    }
}

var interval = 1000; // количество миллисекунд для авто-обновления сообщений (1 секунда = 1000 миллисекунд)

show();

setInterval('show()', interval);
