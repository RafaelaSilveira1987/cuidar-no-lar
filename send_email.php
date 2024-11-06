<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    die("Método não permitido.");
    $nome = $_POST['name'];
    $email = $_POST['email'];
    $mensagem = $_POST['message'];

    $to = "cuidarnolar.ad@gmail.com";  // Insira o endereço de e-mail para receber a mensagem
    $subject = "Nova mensagem de contato";
    $body = "Nome: $nome\nEmail: $email\nMensagem:\n$mensagem";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Falha ao enviar a mensagem.";
    }
}
?>