<?php
/**
 * Backend simple para el formulario de contacto de INSURA
 * Envía los datos del formulario al correo info.insura@gmail.com
 */

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitización de entradas
    $name = strip_tags(trim($_POST["from_name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["reply_to"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Validación básica
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Por favor, completa el formulario correctamente.";
        exit;
    }

    // Configuración del correo
    $recipient = "info.insura@gmail.com";
    $subject = "Nuevo contacto desde la web de INSURA de $name";

    $email_content = "Nombre: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Mensaje:\n$message\n";

    $email_headers = "From: $name <$email>";

    // Envío
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "¡Gracias! Tu mensaje ha sido enviado.";
    } else {
        http_response_code(500);
        echo "Oops! Algo salió mal y no pudimos enviar tu mensaje.";
    }

} else {
    http_response_code(403);
    echo "Hubo un problema con tu envío, por favor intenta de nuevo.";
}
?>
