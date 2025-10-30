<?php
session_start();
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Pobranie danych z żądania
$input = json_decode(file_get_contents('php://input'), true);

// Połączenie z bazą danych
require_once 'db_connection.php';

try {
    // Przygotowanie zapytania
    $stmt = $pdo->prepare("SELECT products_types.product_name FROM products_types");
    $stmt->execute();
    $products_types = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($products_types) {
        echo json_encode([
            'status' => 'success',
            'message' => 'Pomyslnie pobrano typy produktow',
            'products_types' => [
                $products_types
            ]
        ]);
    } else {
        echo json_encode([
            'status' => 'failure',
            'message' => 'Nie udalo sie pobrac typow produktow'
        ]);
    }

} catch (PDOException $e) {
    // Obsługa błędów
    echo json_encode([
        'status' => 'error',
        'message' => 'Blad podczas pobierania typow produktow: ' . $e->getMessage()
    ]);
    exit;
}
?>