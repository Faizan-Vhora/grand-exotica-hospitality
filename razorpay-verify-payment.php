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
    $razorpayKeySecret = '5Nc51SWMneoc6lsN9lrsyjdP';

    // Get payment data
    $razorpayOrderId = isset($data['razorpay_order_id']) ? $data['razorpay_order_id'] : '';
    $razorpayPaymentId = isset($data['razorpay_payment_id']) ? $data['razorpay_payment_id'] : '';
    $razorpaySignature = isset($data['razorpay_signature']) ? $data['razorpay_signature'] : '';

    // Validate required fields
    if (empty($razorpayOrderId) || empty($razorpayPaymentId) || empty($razorpaySignature)) {
        echo json_encode([
            'success' => false,
            'error' => 'Missing required payment verification parameters'
        ]);
        exit;
    }

    // Verify signature
    $text = $razorpayOrderId . '|' . $razorpayPaymentId;
    $expectedSignature = hash_hmac('sha256', $text, $razorpayKeySecret);

    if ($expectedSignature === $razorpaySignature) {
        // Payment verified successfully
        echo json_encode([
            'success' => true,
            'message' => 'Payment verified successfully',
            'paymentId' => $razorpayPaymentId,
            'orderId' => $razorpayOrderId
        ]);
    } else {
        // Invalid signature
        echo json_encode([
            'success' => false,
            'error' => 'Invalid payment signature'
        ]);
    }

} else {
    echo json_encode([
        'success' => false,
        'error' => 'Method not allowed'
    ]);
}
?>
