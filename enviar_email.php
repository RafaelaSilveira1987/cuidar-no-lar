<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $assunto = $_POST['assunto'];
    $mensagem = $_POST['mensagem'];

    // Configurações do e-mail
    $to = "rafaelasilveira1987@gmail.com "; // Substitua pelo seu endereço de e-mail
    $subject = "Nova Mensagem de Contato: $assunto";
    $body = "Nome: $nome\nE-mail: $email\nTelefone: $telefone\n\nMensagem:\n$mensagem";

    // Enviando o e-mail
    if (mail($to, $subject, $body)) {
        echo "E-mail enviado com sucesso!";
    } else {
        echo "Falha ao enviar o e-mail.";
    }
} else {
    echo "Método inválido.";
}
?>
