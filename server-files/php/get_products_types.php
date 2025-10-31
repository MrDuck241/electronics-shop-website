<?php
session_start();
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Database connection
require_once 'db_connection.php';

try {
    // Prepare query
    $stmt = $pdo->prepare("SELECT products_types.product_name FROM products_types");
    $stmt->execute();
    $products_types = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($products_types) {
        echo json_encode([
            'status' => 'success',
            'message' => 'Successfully fetched products types',
            'products_types' => [
                $products_types
            ]
        ]);
    } else {
        echo json_encode([
            'status' => 'failure',
            'message' => 'Product types fetch failure'
        ]);
    }

} catch (PDOException $e) {
    // Obsługa błędów
    echo json_encode([
        'status' => 'error',
        'message' => 'Fetch products types error: ' . $e->getMessage()
    ]);
    exit;
}
?>