<?php
// Database connection settings
$host = 'localhost'; // or database server IP
$dbname = 'electroshop'; // database name
$username = 'root'; // MySQL username
$password = ''; // MySQL password

try {
    // Creating a connection using PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    // Setting error mode to exceptions
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Handling connection errors
    die("Database connection error: " . $e->getMessage());
}
?>