<?php
require_once __DIR__ . '/../includes/db_connect.php';

$username = "admin";
$password = "password123";
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

try {
    // Check if admin exists
    $stmt = $conn->prepare("SELECT id FROM users WHERE username = :username");
    $stmt->execute([':username' => $username]);

    if ($stmt->rowCount() == 0) {
        $sql = "INSERT INTO users (username, password) VALUES (:username, :password)";
        $stmt = $conn->prepare($sql);
        $stmt->execute([':username' => $username, ':password' => $hashed_password]);
        echo "Admin user created successfully.<br>";
        echo "Username: admin<br>";
        echo "Password: password123<br>";
    } else {
        echo "Admin user already exists.";
    }
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>