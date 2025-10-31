<?php
session_start();
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Get data from request
$input = json_decode(file_get_contents('php://input'), true);

// Input data validation
if (!isset($input['login']) || !isset($input['password']) || trim($input['login']) == "" || trim($input['password']) == "") {
    echo json_encode(['status' => 'error', 'message' => 'Brak wymaganych danych']);
    exit;
}

$user_password = trim($input['password']);
$user_login = trim($input['login']);

// Database connection
require_once 'db_connection.php';

try {
    // Prepare query
    $stmt = $pdo->prepare("INSERT INTO users (login, password) Values (:login, :password)");
    $stmt->execute([
        ':login' => $user_login,
        ':password' => $user_password
    ]);

    // Register success
    echo json_encode([
        'status' => 'success',
        'message' => 'Registration completed successfully'
    ]);
    
} catch (PDOException $e) {
    // Exception handler
    echo json_encode([
        'status' => 'error',
        'message' => 'Registration error: ' . $e->getMessage()
    ]);
    exit;
}
?>