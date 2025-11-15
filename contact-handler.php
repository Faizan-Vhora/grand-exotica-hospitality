<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $name = filter_var($data['name'] ?? '', FILTER_SANITIZE_STRING);
    $email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $phone = filter_var($data['phone'] ?? '', FILTER_SANITIZE_STRING);
    $message = filter_var($data['message'] ?? '', FILTER_SANITIZE_STRING);
    $package = filter_var($data['package'] ?? '', FILTER_SANITIZE_STRING);

    // Your email
    $to = "jay9898984686@gmail.com";
    $subject = "New Inquiry from Travel Website";

    $email_body = "New inquiry received:\n\n";
    $email_body .= "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Phone: $phone\n";
    if ($package) {
        $email_body .= "Package: $package\n";
    }
    $email_body .= "\nMessage:\n$message\n";

    $headers = "From: noreply@yourdomain.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $email_body, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Failed to send email']);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
}
?>