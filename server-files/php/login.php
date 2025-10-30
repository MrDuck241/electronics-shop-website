<?php
session_start();
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Pobranie danych z żądania
$input = json_decode(file_get_contents('php://input'), true);

// Sprawdzenie poprawności danych wejściowych
if (!isset($input['login']) || !isset($input['password']) || trim($input['login']) == "" || trim($input['password']) == "") {
    echo json_encode(['status' => 'error', 'message' => 'Brak wymaganych danych']);
    exit;
}

$user_password = trim($input['password']);
$user_login = trim($input['login']);

// Połączenie z bazą danych
require_once 'db_connection.php';

try {
    // Przygotowanie zapytania
    $stmt = $pdo->prepare("SELECT * FROM users WHERE login = :login AND password = :password");
    $stmt->execute([
        ':login' => $user_login,
        ':password' => $user_password
    ]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['user_login'] = $user['login'];
        $_SESSION['user_password'] = $user['password'];

        echo json_encode([
            'status' => 'success',
            'message' => 'Logowanie zakonczone pomyslnie',
            'user' => [
                'id' => $user['id'],
                'login' => $user['login']
            ]
        ]);
    } else {
        echo json_encode([
            'status' => 'failure',
            'message' => 'Logowanie zakonczone niepowodzeniem'
        ]);
    }

} catch (PDOException $e) {
    // Obsługa błędów
    echo json_encode([
        'status' => 'error',
        'message' => 'Blad podczas logowania: ' . $e->getMessage()
    ]);
    exit;
}
?>