<?php
require_once __DIR__ . '/../includes/db_connect.php';

try {
    // SQL to create table
    $sql = "CREATE TABLE IF NOT EXISTS announcements (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT,
        event_date DATE,
        image_path VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";

    // use exec() because no results are returned
    $conn->exec($sql);
    echo "Table 'announcements' created successfully (or already exists).<br>";

    // Create Users Table
    $sql_users = "CREATE TABLE IF NOT EXISTS users (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    $conn->exec($sql_users);
    echo "Table 'users' created successfully (or already exists).<br>";
} catch (PDOException $e) {
    echo "Error creating table: " . $e->getMessage();
}
?>