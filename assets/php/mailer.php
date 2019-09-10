<?php
$post_data = file_get_contents("php://input");
$data = json_decode($post_data);
//email information
$to = "jmsanhuezasolovera@gmail.com";
$subject="Leniolabs: Message sent from website.";

$name = $data->name;

$email=$data->email;

$message = "Full Name: ".$name."\n";
$message .= "E-mail: ".$email."\n";
$message .= $data->message;


$headers = 'From: ' . $email . "\r\n" .
        'Reply-To:'.$email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

//php mail function to send email on your email address
@mail($to, $subject, $message, $headers);

//Email response
echo json_encode(['message'=>'Thank you for contacting us!']);
?>
