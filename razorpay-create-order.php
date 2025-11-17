<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get JSON input
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    // Razorpay credentials
    $razorpayKeyId = 'rzp_live_Rf7Xnst31e0RB9';
    $razorpayKeySecret = '5Nc51SWMneoc6lsN9lrsyjdP';

    // Get amount from request
    $amount = isset($data['amount']) ? floatval($data['amount']) : 0;
    $currency = isset($data['currency']) ? $data['currency'] : 'INR';
    $notes = isset($data['notes']) ? $data['notes'] : [];

    // Validate amount
    if ($amount <= 0) {
        echo json_encode([
            'success' => false,
            'error' => 'Valid amount is required'
        ]);
        exit;
    }

    // Convert amount to paise (Razorpay expects amount in smallest currency unit)
    $amountInPaise = round($amount * 100);

    // Prepare order data
    $orderData = [
        'amount' => $amountInPaise,
        'currency' => $currency,
        'receipt' => 'receipt_' . time(),
        'notes' => $notes
    ];

    // Make API call to Razorpay
    $ch = curl_init('https://api.razorpay.com/v1/orders');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($orderData));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json'
    ]);
    curl_setopt($ch, CURLOPT_USERPWD, $razorpayKeyId . ':' . $razorpayKeySecret);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);

    if ($error) {
        echo json_encode([
            'success' => false,
            'error' => 'Failed to create order',
            'details' => $error
        ]);
        exit;
    }

    if ($httpCode !== 200) {
        echo json_encode([
            'success' => false,
            'error' => 'Failed to create order',
            'details' => $response
        ]);
        exit;
    }

    $order = json_decode($response, true);

    // Return success response
    echo json_encode([
        'success' => true,
        'orderId' => $order['id'],
        'amount' => $order['amount'],
        'currency' => $order['currency'],
        'keyId' => $razorpayKeyId
    ]);

} else {
    echo json_encode([
        'success' => false,
        'error' => 'Method not allowed'
    ]);
}
?>
